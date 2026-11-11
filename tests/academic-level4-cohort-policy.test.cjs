const {test}=require('node:test'),assert=require('node:assert/strict');
const P=require('../learning/level4-cohort-policy-v139.js');
const L=require('../learning/core-v110.js');
const fs=require('node:fs');
test('Level 4 release gate fails closed, including forged version pins',()=>{
 assert.equal(P.RELEASE_APPROVED,false);
 const empty=L.empty(),before=JSON.stringify(empty);
 assert.throws(()=>P.pinNew(empty,{approved:true}),/not authorized/);
 assert.equal(JSON.stringify(empty),before);
 const forged={...empty,level4ExamCohort:{level:4,version:P.VERSION,status:'approved'}};
 assert.equal(P.pinned(forged),P.VERSION);
 const sample={id:'course-21',sectionExams:[{id:'legacy',optional:false,questions:[{id:'old',prompt:'A'}]},{id:'c21-v138-independent-transfer',optional:true,suggestedMinutes:90,questions:[1,2,3,4].map(i=>({id:'new'+i,prompt:'Fresh '+i}))}]};
 assert.deepEqual(P.required(forged,sample).map(x=>x.id),['legacy']);
 assert.equal(sample.sectionExams[1].optional,true);
});
test('existing lesson, exam attempt, draft, and answer records can never be silently enrolled',()=>{
 for(const s of [
   {lessons:['lesson-a'],attempts:[]},
   {lessons:[],attempts:[{kind:'exam',score:80}]},
   {drafts:{case:'My analysis'}},
   {answers:{exam:{x:1}}}, {reviews:{case:{0:3}}}
 ]){const st={schema:1,courses:{'course-21':s}};
  assert.equal(P.hasWork(st),true);assert.throws(()=>P.pinNew(st,{approved:true}));}
});
test('proposed Level 4 rules retain only nonduplicated legacy required exams and use distinct replacement',()=>{
 const c={id:'course-21',sectionExams:[
  {id:'a',questions:[{prompt:'Repeated'}]},
  {id:'b',questions:[{prompt:' repeated '}]},
  {id:'c',questions:[{prompt:'Unique'}]},
  {id:'c21-v138-independent-transfer',optional:true,suggestedMinutes:90,questions:[1,2,3,4].map(i=>({id:'ind-'+i,prompt:'New '+i}))}
 ]};
 const before=JSON.stringify(c),p=P.proposedRequired(c);
 assert.deepEqual(p.kept.map(x=>x.id),['c']);
 assert.deepEqual(p.retired.map(x=>x.id),['a','b']);
 assert.equal(p.replacement.optional,false);
 assert.equal(p.replacement.minutes,90);
 assert.equal(JSON.stringify(c),before);
});
test('schema, local storage key, archive, and Firebase synchronization keys remain backward compatible',()=>{
 assert.equal(L.KEY,'business-academy-learning-v1');
 assert.equal(L.empty().schema,1);
 const core=fs.readFileSync('learning/core-v110.js','utf8');
 const bridge=fs.readFileSync('learning/firebase-cloud-v158.js','utf8');
 assert.match(bridge,/business-academy-learning-v1/);
 assert.match(bridge,/Cloud changed on another device/);
 assert.ok(!core.includes('level4ExamCohort='));
});
