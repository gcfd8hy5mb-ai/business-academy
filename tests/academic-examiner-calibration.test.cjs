/* Offline independent examiner calibration audit.
 * Validates editorial anchors against the unchanged optional Level 2 questions.
 * Does not simulate actual human examination or modify any learner data.
 */
const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const guide=require('../audits/level2-independent-exam-marking-guide.cjs');
const context={BAContent:{}};
for(let n=7;n<=13;n++)context.BAContent['course-'+String(n).padStart(2,'0')]={sectionExams:[]};
new Function('window',fs.readFileSync('learning/level2-independent-exams-v128.js','utf8'))(context);
const ids=Array.from({length:7},(_,i)=>'course-'+String(i+7).padStart(2,'0'));
test('internal rubric is transparent and totals exactly 100 points',()=>{
 assert.equal(guide.scope,'internal-review-only');
 assert.equal(guide.criteria.length,5);
 assert.equal(guide.criteria.reduce((n,c)=>n+c.max,0),100);
 assert.equal(new Set(guide.criteria.map(c=>c.id)).size,5);
 assert.ok(guide.criteria.every(c=>Number.isInteger(c.max)&&c.max>0));
});
test('every Level 2 examiner anchor matches the unchanged independent exam and its arithmetic',()=>{
 assert.deepEqual(Object.keys(guide.courses).sort(),ids);
 for(const id of ids){
  const data=guide.courses[id],exam=context.BAContent[id].sectionExams.find(e=>e.id===data.examId);
  assert.ok(exam,id+' missing exam');
  assert.equal(exam.optional,true);
  assert.equal(exam.questions.length,2,id+' scoring bank changed');
  assert.equal(data.anchors.length,2,id+' missing numeric anchor');
  for(let i=0;i<2;i++){
   const a=data.anchors[i],q=exam.questions[i];
   // Data is trusted, committed audit source; no student input is evaluated.
   const calculated=Function('return ('+a.calculation+')')();
   assert.ok(Number.isFinite(calculated),id+' nonfinite anchor');
   const expected=a.result;
   assert.ok(Math.abs(calculated-expected)<.015,id+' incorrect numeric anchor '+i+': '+calculated+' != '+expected);
   const answer=Number(q.options[q.correct].replace(/,/g,''));
   assert.ok(Number.isFinite(answer)&&Math.abs(answer-expected)<.015,id+' answer key mismatch '+i);
   assert.ok(a.unit&&a.unit.length>8,id+' missing units');
  }
  assert.ok(data.transfer.length>55,id+' transfer challenge too brief');
  assert.ok(data.diagnostic.length>65,id+' examiner misconception missing');
  assert.ok(data.evidence.length>50,id+' evidence specification too brief');
  assert.ok(data.challenge.length>60,id+' challenge missing');
  assert.ok(exam.written.includes('independent review'),id+' existing self-review warning missing');
 }
});
test('synthetic calibration specimens cover meaningful differences in quality without pretending to be grades',()=>{
 assert.equal(guide.sampleReviews.length,3);
 const marks=guide.sampleReviews.map(r=>{
  assert.equal(r.synthetic,true);
  assert.equal(r.reviewerStatus,'SYNTHETIC_CALIBRATION_ONLY');
  assert.equal(r.courseId,'course-08');
  assert.equal(guide.validateScorecard(r.scores),true);
  assert.ok(r.sampleExcerpt.length>60&&r.evidence.length>65);
  return guide.total(r.scores);
 });
 assert.deepEqual(marks,[88,60,22]);
 assert.ok(marks[0]>marks[1]&&marks[1]>marks[2]);
});
test('scorecard validation rejects malformed, partial, fractional and over-maximum scores',()=>{
 assert.equal(guide.validateScorecard({}),false);
 const scores={quant:27,stress:22,evidence:17,governance:13,synthesis:9};
 assert.equal(guide.validateScorecard(scores),true);
 assert.equal(guide.validateScorecard({...scores,quant:31}),false);
 assert.equal(guide.validateScorecard({...scores,quant:15.5}),false);
 assert.equal(guide.validateScorecard({...scores,extra:1}),false);
 assert.throws(()=>guide.total({quant:4}),/Invalid criterion scores/);
});
test('examiner-only guidance is not loaded as part of the learning app',()=>{
 const html=fs.readFileSync('index.html','utf8');
 assert.ok(!html.includes('level2-independent-exam-marking-guide.cjs'));
 assert.ok(!html.includes('independent-written-examiner-protocol.md'));
 const protocol=fs.readFileSync('audits/independent-written-examiner-protocol.md','utf8');
 assert.match(protocol,/two different qualified human subject-matter reviewers/i);
 assert.match(protocol,/third qualified adjudicator/i);
 assert.match(protocol,/Not reviewed/i);
 assert.match(protocol,/not university approval/i);
});
