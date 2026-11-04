/* Academic QA v141 — independent numerical answer reconstruction for Level 2 v63 and Level 4 v102/v104.
 * Run: node audits/scripts/level2-level4-math-regression-v141.cjs
 * Protects historical answer positions; does not rewrite saved grades. */
'use strict';
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),root=path.resolve(__dirname,'../..');
const bank={
l2:[{"expression":"()=>240-(310-105)","label":"$35m"},{"expression":"()=>222-(310-105)","label":"$17m"},{"expression":"()=>90+16-21-7+9","label":"$87m"},{"expression":"()=>90+16-21-7-9","label":"$69m"},{"expression":"()=>(19.5-18)*6000","label":"$9,000"},{"expression":"()=>(18.75-18)*6000","label":"$4,500"},{"expression":"()=>150/5-112/4","label":"A by $2/hour"},{"expression":"()=>900/5*150","label":"$27,000"},{"expression":"()=>(168/1200-120/1200)*100","label":"4 percentage points"},{"expression":"()=>48*55-2200","label":"$440"},{"expression":"()=>(150/1200-120/1200)*100","label":"2.5 percentage points"},{"expression":"()=>2100/30","label":"$70"},{"expression":"()=>14-8-1.5-.2*2","label":"$4.1m"},{"expression":"()=>14-8-1.5-.35*2","label":"$3.8m"},{"expression":"()=>-.9+.3","label":"−$0.6m"},{"expression":"()=>4.1-.6","label":"$3.5m"},{"expression":"()=>140*6+260","label":"1,100 units"},{"expression":"()=>140*9+260","label":"1,520 units"},{"expression":"()=>650*3+350*6","label":"$4,050"},{"expression":"()=>500*3+500*6","label":"$4,500"},{"expression":"()=>35*25000-650000","label":"$225,000"},{"expression":"()=>650000/25000","label":"26"},{"expression":"()=>95/(95+5)*100","label":"95%"},{"expression":"()=>40*25000","label":"$1m"},{"expression":"()=>65*.22+35*.16","label":"$19.9m"},{"expression":"()=>(65*.22+35*.16)/100*100","label":"19.9%"},{"expression":"()=>(.09-.03)*4e6","label":"$240k"},{"expression":"()=>(.09-.03)*4e6-170000","label":"$70k"}],
l4:[{"expression":"()=>250-60+15","label":"$205m"},{"expression":"()=>30-4-2","label":"$24m"},{"expression":"()=>5*(1/1.1+1/1.1**2+1/1.1**3+1/1.1**4)-12","label":"About $3.85m"},{"expression":null,"label":"Deduplicate the operating cash flows"},{"expression":"()=>14*(1/1.1+1/1.1**2+1/1.1**3)-35","label":"About −$0.18m"},{"expression":null,"label":"First only"},{"expression":"()=>-3+.5*16","label":"$5m"},{"expression":null,"label":"Previously incurred feasibility study"},{"expression":"()=>(.12-.06)*5e6-120000","label":"$180k"},{"expression":"()=>58-20-25","label":"$13m"},{"expression":null,"label":"Internal audit"},{"expression":null,"label":"No, severe-tail and stakeholder constraints still matter"},{"expression":"()=>30000*10/60*24*.5-20000","label":"$40k"},{"expression":"()=>(90/1500-60/1500)*100","label":"2 percentage points"},{"expression":"()=>180000/15000","label":"12 months"},{"expression":null,"label":"Verify reduced spending or economically realized redeployment"},{"expression":"()=>70-(100-40)","label":"$10m"},{"expression":"()=>.6*50+.4*10-25","label":"$9m"},{"expression":null,"label":"Two projects, $17m"},{"expression":null,"label":"Obtain permissible financing, restructure, delay or reject"}],
l104:[{"expression":"()=>210-40+12","label":"$182m"},{"expression":null,"label":"Count once after reconciling owners and cash flows"},{"expression":"()=>39-30","label":"+$9m"},{"expression":null,"label":"No, unless it changes future cash flows"},{"expression":"()=>.04*4e6-100000","label":"$60k"},{"expression":null,"label":"Internal audit"},{"expression":"()=>20000*15/60*28*.5-30000","label":"$40k"},{"expression":null,"label":"Pilot quality and fully realized costs against a control"},{"expression":"()=>60-(80-30)","label":"$10m"},{"expression":null,"label":"Arrange compliant funding, resize or decline"}]
};
const w={BAContent:{}};for(let n=7;n<=25;n++){const id='course-'+String(n).padStart(2,'0');w.BAContent[id]={sectionExams:[]}}
function load(file){vm.runInNewContext(fs.readFileSync(path.join(root,'learning',file),'utf8'),{window:w},{timeout:5000})}
load('level2-independent-exams-v63.js');load('level4-assessment-bank-v102.js');
const exams=Object.values(w.BAContent).flatMap(c=>c.sectionExams);
const select=(suffix)=>exams.filter(e=>e.id.endsWith(suffix)).flatMap(e=>e.questions);
const l2=select('-v63-exam'),l4=select('-v102-exam');
const failures=[],verify=(questions,expected,name)=>{
 if(questions.length!==expected.length)failures.push(name+' count '+questions.length+' != '+expected.length);
 questions.forEach((q,i)=>{const t=expected[i];if(!t)return;
 if(q.options[q.correct]!==t.label)failures.push(name+' answer mismatch '+q.id+' '+q.options[q.correct]+' != '+t.label);
 if(t.expression){
  const actual=vm.runInNewContext('('+t.expression+')()',{Math},{timeout:1000});
  if(!Number.isFinite(actual))failures.push('Non-finite '+q.id);
  // Parse numeric distractor text independently of the authored answer key, with unit-sensitive scale.
  const label=t.label.replace(/[−–]/g,'-');
  const m=label.match(/(-?)\\$?([0-9][0-9,]*(?:\\.[0-9]+)?)/);
  if(!m)failures.push('Cannot parse numeric expected result '+q.id);
  else{
    const raw=Number(m[2].replace(/,/g,''))*(m[1]==='-'?-1:1);
    let displayed=raw;
    const after=label.slice((m.index||0)+m[0].length).toLowerCase();
    if(after.startsWith('k')||after.includes('k '))displayed=raw*1000;
    else if(after.startsWith('m'))displayed=raw*(Math.abs(actual)>=10000?1000000:1);
    const tolerance=Math.max(0.0005,Math.abs(displayed)*0.000025,label.includes('About')?0.025:0);
    if(Math.abs(actual-displayed)>tolerance)failures.push('Arithmetic versus selected choice mismatch '+q.id+': '+actual+' vs '+displayed);
  }
 }
 if(!Number.isInteger(q.correct)||q.correct<0||q.correct>=q.options.length||!q.explanation)failures.push('Invalid question '+q.id);
 });
};
verify(l2,bank.l2,'level2 v63');verify(l4,bank.l4,'level4 v102');
// Reproduce five legacy two-question section exams, which are the only eligible v104 targets.
for(let n=21;n<=25;n++){w.BAContent['course-'+n].sectionExams.push({id:'c'+n+'-legacy-fixture',minutes:45,questions:[
{id:'c'+n+'-fixture-a',prompt:'Original fixture A',options:['A','B'],correct:0},
{id:'c'+n+'-fixture-b',prompt:'Original fixture B',options:['A','B'],correct:0}
]})}
load('level4-short-exam-reinforcement-v104.js');
const v104=Object.values(w.BAContent).flatMap(c=>c.sectionExams).flatMap(e=>e.questions).filter(q=>q.id.includes('-v104-q'));
const unique=new Map();for(const q of v104)if(!unique.has(q.prompt))unique.set(q.prompt,q);
verify([...unique.values()],bank.l104,'level4 v104 unique');
console.log(JSON.stringify({status:failures.length?'FAIL':'PASS',level2Questions:l2.length,level4Questions:l4.length,level4OriginalRepetitions:v104.length,level4UniqueReinforcementQuestions:unique.size,independentNumericChecks:bank.l2.filter(x=>x.expression).length+bank.l4.filter(x=>x.expression).length+bank.l104.filter(x=>x.expression).length,sourceLoadedExams:exams.length,failures},null,2));
if(failures.length)process.exitCode=1;
