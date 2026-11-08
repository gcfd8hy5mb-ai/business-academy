/* Full Level 1–2 curriculum-composition audit in actual HTML source order.
 * Run locally or in CI with: node --test tests/academic-level1-level2-composition.test.cjs
 * Excludes shared Level 1–3 modules requiring Level 3 and higher courses; those need a separate whole-catalog run.
 * Nothing in this test writes application data or affects real student progress.
 */
const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const html=fs.readFileSync('index.html','utf8');
const scripts=[...html.matchAll(/<script\b[^>]*\bsrc="([^"]+)"/g)].map(x=>x[1].split('?')[0]);
const sources=scripts.filter(path=>/^learning\/(?:level1|level2|level1-level2)/.test(path)
 && !/level1-level3/.test(path));
const context={BAContent:{}};
const sourceFailures=[];
for(const path of sources){
 try{new Function('window',fs.readFileSync(path,'utf8'))(context);}
 catch(error){sourceFailures.push({path,error:String(error&&error.stack||error)});}
}
const courses=Array.from({length:13},(_,i)=>context.BAContent['course-'+String(i+1).padStart(2,'0')]);
function lessons(c){return (c.modules||[]).flatMap(m=>m.lessons||[]);}
function assessments(c){return [c.practice,c.exam,c.advancedExam,...(c.sectionExams||[])].filter(Boolean);}
function duplicates(items){return [...new Set(items.filter((x,i)=>items.indexOf(x)!==i))];}
test('Level 1–2 extension scripts execute in the production sequence',()=>{
 assert.ok(sources.length>=40,'Unexpectedly few Level 1–2 source scripts');
 assert.deepEqual(sourceFailures,[],'Cannot audit incomplete composition');
 assert.equal(courses.length,13);
 for(let i=0;i<13;i++)assert.ok(courses[i], 'Missing course '+(i+1));
});
test('composed course identities and lesson IDs are stable and non-conflicting',()=>{
 for(const c of courses){
  const all=lessons(c),ids=all.map(x=>x.id);
  assert.ok(all.length>=10,c.id+' fewer than ten authored lessons');
  assert.ok(ids.every(Boolean),c.id+' missing lesson ID');
  assert.deepEqual(duplicates(ids),[],c.id+' duplicated lesson IDs');
  for(const lesson of all){
   assert.ok(Array.isArray(lesson.body)&&lesson.body.length>0,lesson.id+' no explanation');
   assert.ok(Number.isFinite(lesson.minutes)&&lesson.minutes>0,lesson.id+' invalid assigned time');
  }
 }
});
test('composed examination banks retain distinct IDs and valid answer keys',()=>{
 for(const c of courses){
  const examIds=assessments(c).map(x=>x.id).filter(Boolean);
  assert.deepEqual(duplicates(examIds),[],c.id+' duplicated assessment IDs');
  const questions=assessments(c).flatMap(x=>x.questions||[]);
  const ids=questions.map(q=>q.id);
  assert.ok(questions.length>=10,c.id+' small assessment bank');
  assert.deepEqual(duplicates(ids),[],c.id+' question IDs reused');
  for(const q of questions){
   assert.ok(q.id&&q.prompt,q.id+' missing identity or prompt');
   assert.ok(Array.isArray(q.options)&&q.options.length>=3,q.id+' missing choices');
   assert.ok(Number.isInteger(q.correct)&&q.correct>=0&&q.correct<q.options.length,q.id+' invalid answer');
   assert.ok(typeof q.explanation==='string'&&q.explanation.trim().length>0,q.id+' missing explanation');
  }
 }
});
test('portfolio and numeric work remain attached to intended courses',()=>{
 for(const c of courses){
  assert.ok(c.portfolio||(c.portfolioSections||[]).length>0,c.id+' missing portfolio');
  for(const d of c.numericDrills||[]){
   assert.ok(d.id,c.id+' numeric drill without ID');
   assert.ok(Array.isArray(d.questions)&&d.questions.length>0,d.id+' empty drill');
   for(const q of d.questions){
    assert.ok(q.id&&typeof q.p==='string',d.id+' incomplete drill question');
    assert.ok(Number.isFinite(q.v),q.id+' missing numeric target');
   }
  }
 }
});
test('independent extensions do not mutate historic exam IDs or assessment answer shape',()=>{
 for(const c of courses){
  assert.ok(c.exam&&Array.isArray(c.exam.questions),c.id+' main exam missing');
  assert.ok(c.practice&&Array.isArray(c.practice.questions),c.id+' main practice missing');
  assert.ok(c.exam.questions.every(q=>Number.isInteger(q.correct)),c.id+' scoring key changed shape');
 }
});
