'use strict';
/* v147: all-course objective assessment inspection, including optional banks.
 * Structural and answer-pattern tests; does not claim substantive independent academic grading.
 */
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const root=path.resolve(__dirname,'..');
function load(){const html=fs.readFileSync(path.join(root,'index.html'),'utf8');const scripts=[...html.matchAll(/<script\s+src="(learning\/(?:level[^"?]+|five-level[^"?]+)\.js)(?:\?[^"]*)?"\s+defer><\/script>/g)].map(m=>m[1]);const ctx={window:{BAContent:{}},console};vm.createContext(ctx);for(const p of scripts)vm.runInContext(fs.readFileSync(path.join(root,p),'utf8'),ctx,{filename:p,timeout:10000});return ctx.window.BAContent;}
function forms(c){return [c.practice,c.exam,c.advancedExam,...(c.sectionExams||[])].filter(Boolean);}
test('all 26 course exam forms, including optional forms, have valid distinct answer choices and rationales',()=>{
 const courses=load();let count=0,optional=0,required=0;
 for(let n=1;n<=26;n++){const cid='course-'+String(n).padStart(2,'0'),c=courses[cid];assert.ok(c,'missing '+cid);
  const formsForCourse=forms(c);assert.ok(formsForCourse.length,'no exams '+cid);
  for(const exam of formsForCourse){if(exam.optional)optional++;else required++;
   const local=new Set();
   for(const q of exam.questions||[]){const key=cid+' '+exam.id+' '+q.id;count++;assert.ok(q.id,'missing id '+key);assert.ok(!local.has(q.id),'reused question ID in same exam '+key);local.add(q.id);assert.ok(String(q.prompt||'').trim().length>=12,'brief prompt '+key);assert.ok(Array.isArray(q.options)&&q.options.length>=2,'missing options '+key);assert.equal(new Set(q.options.map(v=>String(v).trim().toLowerCase())).size,q.options.length,'duplicate choices '+key);assert.ok(Number.isInteger(q.correct)&&q.correct>=0&&q.correct<q.options.length,'invalid keyed choice '+key);assert.ok(String(q.explanation||'').trim().length>0,'missing explanation '+key);}
  }
 }
 assert.ok(count>=929,'suspiciously few assessed questions '+count);assert.ok(optional>5,'expected optional forms');assert.ok(required>=26,'expected required forms');
});
test('newer Level 4 corrected alternative exam and historical reference remain separate forms',()=>{
 const c=load()['course-21'];const historical=c.sectionExams.find(x=>x.id==='c21-v105-independent');const corrected=c.sectionExams.find(x=>x.id==='c21-v143-corrected-evidence');const alternative=c.sectionExams.find(x=>x.id==='c21-v140-independent-form-b');
 assert.ok(historical&&corrected&&alternative);assert.equal(historical.optional,true);assert.equal(corrected.optional,true);assert.equal(alternative.optional,true);
 const old=historical.questions.find(x=>x.id==='c21-v105-independent-q3');assert.equal(old.options[old.correct],'$6m');assert.match(historical.instructions,/ACADEMIC ERRATUM v143/);
 assert.equal(corrected.questions[0].options[corrected.questions[0].correct],'$9m');
});
