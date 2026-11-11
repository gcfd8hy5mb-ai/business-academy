/* Phase 4 five-level assessment evidence inventory and governance test. */
const {test}=require('node:test'),assert=require('node:assert/strict');
const fs=require('node:fs');
const {review}=require('../audits/phase4-quality-review.cjs');
const rows=review();
test('every course has authored outcomes, teaching, required exams and applied casework',()=>{
 assert.equal(rows.length,26);
 assert.deepEqual(rows.map(r=>r.level).filter((v,i,a)=>i===0||v!==a[i-1]),[1,2,3,4,5]);
 for(const r of rows){
  assert.deepEqual(r.defects,[],r.id+' missing required category');
  assert.ok(r.lessons>=5,r.id+' fewer than five lessons');
  assert.ok(r.outcomes>0,r.id+' missing declared outcome');
  assert.ok(r.requiredExams>0,r.id+' missing assessment');
  assert.ok(r.casework>0,r.id+' missing casework');
 }
});
test('all written exam and outcome claims explicitly remain subject to external review',()=>{
 for(const r of rows){
  assert.equal(r.outcomeAlignment,'REQUIRES_EXPERT_REVIEW');
  assert.equal(r.answerAccuracy,'SELECTIVE_CHECKS_ONLY');
  assert.equal(r.writtenMarking,'NOT_INDEPENDENTLY_MARKED');
 }
});
test('Lesson and question crosslinks are inventoried with stable IDs',()=>{
 for(const r of rows){
  assert.ok(Array.isArray(r.missingLessonLinks));
  assert.ok(Array.isArray(r.shortExplanationIds));
  assert.ok(Array.isArray(r.weakRubricIds));
  for(const link of r.missingLessonLinks){
   assert.ok(link.question&&link.lessonId,r.id+' invalid flagged reference');
  }
 }
});
test('all 26 courses retain numerical assessment and source evidence metadata',()=>{
 assert.ok(rows.reduce((n,r)=>n+r.assessedQuestions,0)>=1000);
 const sourceCoverage=[1,2,3,4,5].map(level=>({level,linkedSources:rows.filter(r=>r.level===level).reduce((n,r)=>n+r.linkedSources,0)}));
 console.log('PHASE4_SOURCE_COVERAGE='+JSON.stringify(sourceCoverage));
 assert.ok(sourceCoverage.every(x=>Number.isInteger(x.linkedSources)&&x.linkedSources>=0));
 assert.ok(sourceCoverage.some(x=>x.linkedSources>0),'No primary/public source URLs registered');
 const html=fs.readFileSync('index.html','utf8');
 assert.ok(!html.includes('phase4-quality-review.cjs'),'Audit must never load in the public student app');
});
