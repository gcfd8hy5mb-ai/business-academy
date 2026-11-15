'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const src=fs.readFileSync(path.join(__dirname,'../learning/assessment-fairness-v148.js'),'utf8');
const qid='c21-v105-independent-q3',kind='sectionExam-c21-v105-independent';
function setup(){
 const context={window:{}};vm.createContext(context);vm.runInContext(src,context,{timeout:10000});
 const course={sectionExams:[{id:'c21-v105-independent',questions:[{id:qid,options:['$12m','$9m','$6m','$3m'],correct:2}]}]};
 return {inspect:context.window.BAAssessmentFairnessV148.inspect,course};
}
const attempt=(answer,score=80,ids=[qid])=>({kind,at:'2026-11-01T00:00:00Z',score,answers:answer===null?{}:{[qid]:answer},assessmentSnapshot:{format:1,keyFingerprint:'fnv1a32-deadbeef',questionIds:ids,questionCount:ids.length}});
test('historical corrected $9m response is identified as potentially under-credited, without rewriting score',()=>{
 const {inspect,course}=setup(),store={courses:{'course-21':{attempts:[attempt(1,60)]}}},before=JSON.stringify(store);
 const out=inspect(store,course);
 assert.equal(out.status,'review-needed');assert.equal(out.flaggedCount,1);assert.equal(out.affected[0].classification,'possible-under-credit');assert.equal(out.affected[0].recordedScore,60);assert.equal(JSON.stringify(store),before);
});
test('previously credited $6m gets review, neutral choices remain unflagged',()=>{
 const {inspect,course}=setup(),store={courses:{'course-21':{attempts:[attempt(2,100),attempt(0,80),attempt(3,80)]}}};
 const out=inspect(store,course);assert.equal(out.flaggedCount,1);
 assert.deepEqual(Array.from(out.affected,x=>x.classification),['possible-over-credit','scoring-unaffected-by-disputed-answer','scoring-unaffected-by-disputed-answer']);
});
test('a question not present in a saved snapshot is not assumed to be graded under old key',()=>{
 const {inspect,course}=setup(),store={courses:{'course-21':{attempts:[attempt(1,95,['different-q'])]}}};
 const out=inspect(store,course);assert.equal(out.flaggedCount,0);assert.equal(out.affected[0].classification,'not-in-snapshot');
});
test('unknown past answer needs human review; original attempts are untouched',()=>{
 const {inspect,course}=setup(),store={courses:{'course-21':{attempts:[attempt(null,70)]}}},before=JSON.stringify(store);
 const out=inspect(store,course);assert.equal(out.flaggedCount,1);assert.equal(out.affected[0].classification,'answer-unavailable');assert.equal(JSON.stringify(store),before);
});
test('absent student history and different examinations are never treated as affected records',()=>{
 const {inspect,course}=setup();assert.equal(inspect({courses:{}},course).attemptCount,0);assert.equal(inspect({courses:{'course-21':{attempts:[{kind:'sectionExam-c21-v143-corrected-evidence',score:90}]}}},course).attemptCount,0);
});
test('repeated fairness inspection is deterministic and makes zero state changes',()=>{
 const {inspect,course}=setup(),store={courses:{'course-21':{attempts:[attempt(2,100),attempt(1,60)],lessons:['a'],drafts:{x:'preserve'}}}},before=JSON.stringify(store);
 const a=inspect(store,course),b=inspect(store,course);assert.equal(JSON.stringify(a),JSON.stringify(b));assert.equal(JSON.stringify(store),before);
});
