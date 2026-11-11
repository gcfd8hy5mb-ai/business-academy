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

test('all five actual Level 4 exam banks can be inventoried without touching learner data',()=>{
 const html=fs.readFileSync('index.html','utf8');
 const paths=[...html.matchAll(/<script\b[^>]*\bsrc="([^"]+)"/g)]
  .map(x=>x[1].split('?')[0])
  .filter(path=>/^learning\/(?:level\d|level1-level2|level1-level3|level4-level5)/.test(path));
 const win={BAContent:{}};
 for(const path of paths)new Function('window',fs.readFileSync(path,'utf8'))(win);
 for(let n=21;n<=25;n++){
  const id='course-'+n,c=win.BAContent[id];
  assert.ok(c,'Missing '+id);c.id=id;
  const before=JSON.stringify(c),result=P.proposedRequired(c);
  assert.ok(result.retired.length>0,'No legacy repeated bank identified in '+id);
  assert.ok(result.kept.length+result.retired.length>0);
  assert.equal(result.replacement.id,'c'+n+'-v138-independent-transfer');
  assert.equal(result.replacement.optional,false);
  assert.equal(JSON.stringify(c),before,'Candidate calculation must not alter existing course data');
 }
});

test('Firebase restore and upload must reject mismatched or corrupt cohort pins',()=>{
 const encode=p=>({'business-academy-learning-v1':JSON.stringify(p)});
 const old=encode(L.empty());
 const newer=encode({...L.empty(),level4ExamCohort:{level:4,version:P.VERSION,status:'approved'}});
 const bad=encode({...L.empty(),level4ExamCohort:{level:4,version:'unknown',status:'approved'}});
 assert.equal(P.compatibleRecords(old,old),true);
 assert.equal(P.compatibleRecords(newer,newer),true);
 assert.equal(P.compatibleRecords(old,newer),false);
 assert.equal(P.compatibleRecords(newer,old),false);
 assert.equal(P.compatibleRecords(old,bad),false);
 assert.equal(P.compatibleRecords(old,{'business-academy-learning-v1':'{malformed'}),false);
 const cloud=fs.readFileSync('learning/firebase-cloud-v158.js','utf8');
 assert.match(cloud,/Cohort version mismatch or invalid pin/);
 assert.match(cloud,/Cohort pin mismatch; automatic cloud overwrite stopped/);
 assert.match(cloud,/if\(snap\.exists\(\)\&\&!cohortCompatible/);
});

test('release-disabled exam presentation, milestone and workload leave historical student state unchanged',()=>{
 const old={id:'l4-final-v99-exam',optional:false,minutes:60,questions:[{id:'old',prompt:'Historic'}]};
 const fresh={id:'c25-v138-independent-transfer',optional:true,minutes:0,suggestedMinutes:90,questions:[1,2,3,4].map(i=>({id:'fresh-'+i,prompt:'New '+i}))};
 const course={id:'course-25',sectionExams:[old,fresh]};
 const store={schema:1,courses:{'course-25':{lessons:['completed'],attempts:[{kind:'sectionExam-l4-final-v99-exam',score:90,assessmentSnapshot:{keyFingerprint:'fnv1a32-archive'}}]}}};
 const before=JSON.stringify(store),catalog=JSON.stringify(course);
 assert.strictEqual(P.effectiveCourse(store,course),course);
 assert.strictEqual(P.displayExams(store,course),course.sectionExams);
 assert.strictEqual(P.milestoneExam(store,course),old);
 assert.deepEqual(P.required(store,course),[old]);
 assert.equal(JSON.stringify(store),before);
 assert.equal(JSON.stringify(course),catalog);
});
test('workspace milestone, exam display, progress and workload all delegate to the cohort policy',()=>{
 const ws=fs.readFileSync('learning/workspace-v46.js','utf8');
 assert.match(ws,/BAL4CohortPolicy\.required\(store,c\)/);
 assert.match(ws,/BAL4CohortPolicy\.displayExams\(store,c\)/);
 assert.match(ws,/BAL4CohortPolicy\.milestoneExam\(store,finalCourse\)/);
 assert.match(ws,/L\.workload\(assignedCourse\(c\)\)/);
 assert.match(ws,/BAWorkloadAudit\.detail\(assignedCourse\(c\)\)/);
 assert.match(ws,/for\(const a of requiredExams\(course\)\)/);
 assert.match(ws,/visibleExams\(c\)\.slice\(\)\.sort/);
});
test('candidate Level 4 final fallback and exam labels do not mutate archived definitions',()=>{
 const old={id:'l4-final-v99-exam',title:'Legacy final',minutes:90,questions:[{id:'old',prompt:'Repeat'}]};
 const second={id:'another-exam',title:'Repeat again',questions:[{id:'old2',prompt:' repeat '}]};
 const replacement={id:'c25-v138-independent-transfer',optional:true,title:'Independent final',suggestedMinutes:90,
   instructions:'Optional independent assessment (suggested 90 minutes, excluded from required graduation hours). The numerical checks are auto-scored.',
   questions:[1,2,3,4].map(i=>({id:'new-'+i,prompt:'New '+i}))};
 const course={id:'course-25',sectionExams:[old,second,replacement]};
 const before=JSON.stringify(course),p=P.proposedRequired(course);
 assert.equal(p.retired.some(e=>e.id===old.id),true);
 assert.equal(p.replacement.id,replacement.id);
 assert.equal(p.replacement.optional,false);
 // Actual rollout is off: even a forged pin cannot change the student-visible list.
 const forged={schema:1,courses:{},level4ExamCohort:{level:4,version:P.VERSION,status:'approved'}};
 assert.equal(P.milestoneExam(forged,course).id,old.id);
 assert.equal(P.displayExams(forged,course)[2].optional,true);
 assert.equal(JSON.stringify(course),before);
});
