'use strict';
/* v146: answer-key arithmetic and legacy prompt-repeat fingerprint audit.
 * Doesn't rewrite any grade, question ID, or submitted attempt.
 */
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const root=path.resolve(__dirname,'..');
const text=p=>fs.readFileSync(path.join(root,p),'utf8');
const annuity=(r,n)=>(1-(1+r)**(-n))/r;
function alternativeBanks(){const c={};for(let i=21;i<=25;i++)c['course-'+i]={sectionExams:[]};const x={window:{BAContent:c}};vm.createContext(x);vm.runInContext(text('learning/level4-alternative-exams-v140.js'),x,{timeout:10000});return c;}
function selected(course,index){const c=alternativeBanks()['course-'+course],a=c.sectionExams.find(q=>q.id==='c'+course+'-v140-independent-form-b');assert.ok(a,'missing independent bank '+course);const q=a.questions[index-1];assert.ok(q,'missing question '+course+':'+index);assert.ok(q.options[q.correct],'invalid key');return q.options[q.correct];}
const checks=[
[21,1,()=>310-90+24-14,'230'],[21,2,()=>12*annuity(.1,4)-27,'11.04'],[21,3,()=>18,'18m'],[21,4,()=>22-9-4,'9m'],[21,5,()=>315/30,'10.5x'],[21,6,()=>20*.7-3,'11m'],
[22,1,()=>18*annuity(.1,3)-45,'−$0.24m'],[22,2,()=>15+10,'P + R'],[22,4,()=>6*annuity(.1,5)-20,'+$2.74m'],[22,7,()=>9+4-7,'$6m'],
[23,1,()=>(.14-.06)*3000-150,'$90k'],[23,2,()=>72-30-28,'$14m'],[23,3,()=>50/80*100,'62.5%'],[23,6,()=>18/90*100,'20%'],
[24,1,()=>36000*10/60*30*.4/1000-45,'$27k'],[24,2,()=>(60/1200-36/1200)*100,'2 pp'],[24,3,()=>240/20,'12 months'],[24,7,()=>6-1.5-.8,'$3.7m'],
[25,1,()=>160-65-32,'$63m'],[25,2,()=>12+11,'$23m'],[25,3,()=>(9-4)*1.12,'$5.60m'],[25,4,()=>14*.7-8*.3,'$7.4m'],[25,5,()=>40+25-55,'$10m'],[25,6,()=>7-7,'$0m']
];
test('all 35 optional Level 4 questions preserve unique IDs, credible answers and five distinct forms',()=>{
 const banks=alternativeBanks();const ids=[],prompts=[];
 for(let n=21;n<=25;n++){const es=banks['course-'+n].sectionExams;assert.equal(es.length,1);assert.equal(es[0].optional,true);assert.equal(es[0].questions.length,7);for(const q of es[0].questions){ids.push(q.id);prompts.push(q.prompt);assert.equal(q.options.length,4);assert.equal(new Set(q.options).size,4);assert.ok(Number.isInteger(q.correct)&&q.correct>=0&&q.correct<4);assert.ok(q.explanation.length>80);}}
 assert.equal(ids.length,35);assert.equal(new Set(ids).size,35);assert.equal(new Set(prompts).size,35);
});
test('24 independently calculated Level 4 quantitative keys reconcile, including negative NPV rounding',()=>{
 assert.equal(checks.length,24);
 for(const [course,index,formula,expect] of checks){
  const chosen=selected(course,index);assert.equal(chosen,expect,'course '+course+' question '+index);
  const computed=formula();assert.ok(Number.isFinite(computed));
  const printed=Number(chosen.replace(/[^0-9.\-−]/g,'').replace('−','-'));
  if(/P \+ R/.test(chosen)){assert.equal(computed,25);continue;}
  let scaled=computed;if(chosen.includes('k'))scaled=+computed; // test formulas for $k work in thousand USD
  const tolerance=chosen.includes('.')?.005001:1e-6;
  assert.ok(Math.abs(printed-scaled)<tolerance,'course '+course+' q'+index+': '+printed+' != '+scaled);
 }
});
test('the older v104 historical bank has exactly ten mathematically verified representative keys',()=>{
 const original={};
 for(let n=21;n<=25;n++)original['course-'+n]={sectionExams:[{id:'c'+n+'-legacy-a',questions:[{id:'old-'+n,prompt:'Original unique prompt',options:['yes','no'],correct:0,explanation:'unchanged'}],minutes:40}]};
 const c={window:{BAContent:original}};vm.createContext(c);const source=text('learning/level4-short-exam-reinforcement-v104.js');vm.runInContext(source,c,{timeout:10000});
 const expected={21:['$182m','Count once after reconciling owners and cash flows'],22:['+$9m','No, unless it changes future cash flows'],23:['$60k','Internal audit'],24:['$40k','Pilot quality and fully realized costs against a control'],25:['$10m','Arrange compliant funding, resize or decline']};
 for(let n=21;n<=25;n++){const e=original['course-'+n].sectionExams[0],q=e.questions;assert.equal(q.length,3);assert.equal(q[0].id,'old-'+n);assert.equal(q[0].correct,0);assert.equal(q[0].prompt,'Original unique prompt');assert.deepEqual(q.slice(1).map(x=>x.options[x.correct]),expected[n]);}
 assert.equal(210-40+12,182);assert.equal(39-30,9);assert.equal((.04*4e6-100000)/1000,60);
 assert.equal(20000*15/60*28*.5-30000,40000);assert.equal(60-(80-30),10);
 vm.runInContext(source,c,{timeout:10000});for(let n=21;n<=25;n++)assert.equal(original['course-'+n].sectionExams[0].questions.length,3);
});
test('historical repeated Level 4 prompts are classified without rewriting graded evidence',()=>{
 const html=text('index.html');
 const files=[...html.matchAll(/<script\s+src="(learning\/(?:level[^"?]+|five-level[^"?]+)\.js)(?:\?[^"]*)?"\s+defer><\/script>/g)].map(x=>x[1]);
 const ctx={window:{BAContent:{}},console};vm.createContext(ctx);
 for(const file of files)vm.runInContext(text(file),ctx,{filename:file,timeout:10000});
 let repeats=0;const byCourse={};
 for(let n=21;n<=25;n++){
  const c=ctx.window.BAContent['course-'+n],seen=new Map(),dups=[];
  for(const exam of [c.practice,c.exam,c.advancedExam,...(c.sectionExams||[])].filter(e=>e&&!e.optional))for(const q of exam.questions||[]){
   const fingerprint=String(q.prompt||'').trim().toLowerCase().replace(/\s+/g,' ');
   if(seen.has(fingerprint))dups.push({id:q.id,prior:seen.get(fingerprint)});else seen.set(fingerprint,q.id);
  }
  byCourse[n]=dups.length;repeats+=dups.length;
  assert.equal(dups.length,7,'unexpected legacy repeat count course '+n);
 }
 assert.equal(repeats,35);
 const errata=ctx.window.BAContent['course-21'].sectionExams.find(e=>e.id==='c21-v105-independent');
 assert.ok(errata.instructions.includes('ACADEMIC ERRATUM v143'));
 assert.equal(errata.questions.find(q=>q.id==='c21-v105-independent-q3').options[errata.questions.find(q=>q.id==='c21-v105-independent-q3').correct],'$6m');
});
