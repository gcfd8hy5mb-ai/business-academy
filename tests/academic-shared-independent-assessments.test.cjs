/* Shared Level 1–3 optional assessment integrity.
 * Uses prerequisite-complete course fixtures; does not claim full real-world source verification.
 * Run: node --test tests/academic-shared-independent-assessments.test.cjs
 */
const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const names=[
 'learning/level1-level3-independent-numeric-v126.js',
 'learning/level1-level3-independent-exams-v127.js',
 'learning/level2-independent-exams-v128.js'
];
const context={BAContent:{}};
for(let i=1;i<=20;i++){
 const id='course-'+String(i).padStart(2,'0');
 context.BAContent[id]={id,modules:[],numericDrills:[{id:id+'-previous-drill',questions:[{id:id+'-previous-q',p:'Existing numerical work',v:1,e:'Existing solution'}]}],sectionExams:[{id:id+'-previous-exam',questions:[{id:id+'-previous-exam-q',prompt:'Existing case',options:['Yes','No'],correct:0,explanation:'Previously graded work'}]}]};
}
const saved=JSON.stringify(context.BAContent);
for(const name of names)new Function('window',fs.readFileSync(name,'utf8'))(context);
const courses=Object.values(context.BAContent);
const numeric=courses.flatMap(c=>c.numericDrills.filter(d=>d.id.includes('v126')).flatMap(d=>d.questions));
const exams=courses.flatMap(c=>c.sectionExams.filter(d=>d.id.includes('v127')||d.id.includes('v128')).flatMap(d=>d.questions));
test('shared independent extensions cover twenty courses without overwriting historical IDs',()=>{
 assert.equal(context.BAIndependentV126.courses,20);
 assert.equal(context.BAIndependentV126.questions,40);
 assert.equal(context.BAIndependentV127.newOptionalExams,13);
 assert.equal(context.BAL2V128.newOptionalExams,7);
 assert.equal(numeric.length,40);
 assert.equal(exams.length,40);
 for(const c of courses){
  const before=JSON.parse(saved)[c.id];
  assert.deepEqual(c.numericDrills.find(d=>d.id===c.id+'-previous-drill'),before.numericDrills[0],c.id+' historic numeric changed');
  assert.deepEqual(c.sectionExams.find(d=>d.id===c.id+'-previous-exam'),before.sectionExams[0],c.id+' historic exam changed');
  assert.equal(c.numericDrills.filter(d=>d.id.includes('v126')).length,1,c.id+' independent drill missing');
  assert.equal(c.sectionExams.filter(d=>d.id.includes('v127')||d.id.includes('v128')).length,1,c.id+' independent exam missing');
 }
});
test('independent exam IDs, answer keys and numeric drill data are internally consistent',()=>{
 const allIds=[];
 for(const c of courses){
  const examIds=c.sectionExams.map(d=>d.id);
  assert.equal(new Set(examIds).size,examIds.length,c.id+' duplicate exam IDs');
  for(const d of c.numericDrills){
   assert.ok(d.id,c.id+' missing drill ID');
   for(const q of d.questions||[]){
    assert.ok(q.id,c.id+' missing question ID');
    assert.ok(Number.isFinite(q.v),q.id+' missing numeric target');
    if(d.id.includes('v126'))assert.ok(typeof q.e==='string'&&q.e.length>=18,q.id+' inadequate numeric explanation');
    allIds.push(q.id);
   }
  }
  for(const e of c.sectionExams){
   assert.ok(e.id,c.id+' missing exam ID');
   if(e.id.includes('v127')||e.id.includes('v128'))assert.equal(e.optional,true,e.id+' should remain optional');
   for(const q of e.questions||[]){
    assert.ok(q.id,c.id+' missing assessment question ID');
    assert.ok(Array.isArray(q.options)&&q.options.length>=3,q.id+' missing options');
    assert.ok(Number.isInteger(q.correct)&&q.correct>=0&&q.correct<q.options.length,q.id+' invalid answer');
    if(e.id.includes('v127')||e.id.includes('v128'))assert.ok(q.explanation?.length>=20,q.id+' inadequate explanation');
    allIds.push(q.id);
   }
  }
 }
 assert.equal(new Set(allIds).size,allIds.length,'Cross-course question ID collision');
});
test('reloading all shared extensions does not add duplicate IDs',()=>{
 const before=courses.map(c=>[c.numericDrills.length,c.sectionExams.length]);
 for(const name of names)new Function('window',fs.readFileSync(name,'utf8'))(context);
 assert.deepEqual(courses.map(c=>[c.numericDrills.length,c.sectionExams.length]),before);
});
test('sample independent transfer calculations reconcile, including NPV rounding',()=>{
 const drill=(id,n)=>context.BAContent[id].numericDrills.find(d=>d.id.includes('v126')).questions[n];
 const exam=(id,fragment)=>context.BAContent[id].sectionExams.flatMap(e=>e.questions||[]).find(q=>q.prompt?.includes(fragment));
 function close(actual,expected,tol=1e-8){assert.ok(Math.abs(actual-expected)<=tol,'Expected '+actual+' ≈ '+expected)}
 close(drill('course-01',0).v,960*.37-275);
 close(drill('course-02',0).v,13+11);
 close(drill('course-06',0).v,(35+45)/(250+300)*100);
 close(drill('course-08',0).v,15*(1/1.1+1/(1.1**2)+1/(1.1**3))-35);
 close(drill('course-14',0).v,450*.18*(1-.25)+20-28-9);
 close(drill('course-18',0).v,7/(7+3+2)*100);
 close(drill('course-20',0).v,95000*6/60*42);
 const q=exam('course-08','yields $18m year-end cash flows');
 assert.ok(q,'NPV question not found');
 const calculated=18*(1/1.1+1/(1.1**2)+1/(1.1**3))-42;
 assert.equal(calculated.toFixed(2),q.options[q.correct]);
 assert.equal(q.options[q.correct],'2.76');
});
