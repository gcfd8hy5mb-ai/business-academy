/* Integration audit of the first eight Level 2 source files in production order.
 * Snapshot scope: Level 2 courses 07–13 after v54, not all later expansions.
 */
const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const paths=['level2.js','level2-accounting-v42.js','level2-foundations-v48.js','level2-reporting-control-v50.js','level2-enterprise-v51.js','level2-integrated-v52.js','level2-quantitative-v53.js','level2-commercial-people-v54.js'];
const context={BAContent:{}};
for(const path of paths){new Function('window',fs.readFileSync('learning/'+path,'utf8'))(context);}
const courses=Array.from({length:7},(_,i)=>context.BAContent['course-'+String(i+7).padStart(2,'0')]);
const checks=c=>[c.practice,c.exam,c.advancedExam,...(c.sectionExams||[])].filter(Boolean);
test('the first eight Level 2 scripts compose all seven courses',()=>{
 assert.equal(courses.length,7);
 for(const c of courses){
  assert.ok(c&&c.modules.length>=3,c?.id+' modules');
  assert.ok(c.modules.flatMap(m=>m.lessons||[]).length>=7,c.id+' lesson count');
  assert.ok((c.applications||[]).length>=3,c.id+' application work');
  assert.ok((c.sectionExams||[]).length>=3,c.id+' section examination work');
 }
});
test('all lesson and question IDs are unique within each Level 2 course',()=>{
 for(const c of courses){
  const lessonIds=c.modules.flatMap(m=>m.lessons||[]).map(l=>l.id);
  const qids=checks(c).flatMap(a=>(a.questions||[]).map(q=>q.id));
  assert.equal(new Set(lessonIds).size,lessonIds.length,c.id+' duplicate lesson IDs');
  assert.equal(new Set(qids).size,qids.length,c.id+' duplicate assessment question IDs');
 }
});
test('answer choices have valid keys, distinct options and substantive explanations',()=>{
 let total=0;
 for(const c of courses)for(const a of checks(c))for(const q of a.questions||[]){
  total++;
  assert.ok(Array.isArray(q.options)&&q.options.length>=3,q.id+' needs choices');
  assert.ok(Number.isInteger(q.correct)&&q.correct>=0&&q.correct<q.options.length,q.id+' answer index');
  assert.equal(new Set(q.options).size,q.options.length,q.id+' duplicate choices');
  assert.ok(typeof q.explanation==='string'&&q.explanation.length>=16,q.id+' inadequate rationale');
 }
 assert.ok(total>=100,'At least 100 numerical/conceptual questions are represented');
});
test('selected Level 2 numerical answer keys independently reconcile',()=>{
 const q=(id,key)=>checks(context.BAContent[id]).flatMap(a=>a.questions||[]).find(x=>x.id===key);
 const verify=(id,key,expected,numeric)=>{
  const a=q(id,key);assert.ok(a,id+' '+key+' exists');
  assert.equal(a.options[a.correct],expected,id+' '+key+' choice');
  assert.ok(numeric,id+' '+key+' arithmetic');
 };
 verify('course-07','c07-v42-q0','$25M',120-95===25);
 verify('course-07','c07-v50-q3','205',180+45-20===205);
 verify('course-07','c07-v53-q2','7',4+6-3===7);
 verify('course-07','c07-v53-q3','500',300+220-20===500);
 verify('course-08','c08-v52-industrial-q0','80',300-200-20===80);
 verify('course-08','c08-v53-q4','16',30+5-.1*(150+40)===16);
 verify('course-09','c09-v51-pricing-q0','42.75m',950000*(105-60)/1e6===42.75);
 verify('course-10','c10-v51-pipeline-q0','6.6',8*.5+5*.4+3*.2===6.6);
 verify('course-12','c12-v51-design-q0','2.5m',6-2-1.5===2.5);
 verify('course-13','c13-v51-contract-q0','5.5m',20-12-2-.5===5.5);
});
