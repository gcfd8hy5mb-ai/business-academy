/* Academic regression v145: immutable prior attempts and version-aware future grading.
 * Run: node audits/scripts/assessment-history-regression-v145.cjs
 * Tests the real BALearning source and does not modify learner storage. */
'use strict';
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const source=fs.readFileSync(path.resolve(__dirname,'../../learning/core-v110.js'),'utf8');
const root={};vm.runInNewContext(source,{window:root,Math,Date},{timeout:5000});const L=root.BALearning;const errors=[];
const assert=(condition,message)=>{if(!condition)errors.push(message)};
const baseline={
 id:'course-21',modules:[{lessons:[{id:'l1',minutes:60}]}],readings:[],
 sectionExams:[
 {id:'required-v1',minutes:45,rubric:['written defense'],questions:[
 {id:'qa',prompt:'Two plus two?',options:['Four','Five'],correct:0},
 {id:'qb',prompt:'Three plus three?',options:['Five','Six'],correct:1}]},
 {id:'independent-v2',minutes:0,optional:true,rubric:['optional case'],questions:[
 {id:'qc',prompt:'Five plus five?',options:['Ten','Eleven'],correct:0}]}
 ]};
const store=L.empty(),s=L.state(store,baseline.id);
s.lessons.push('l1');s.answers['sectionExam-required-v1']={qa:0,qb:1};
const old={kind:'sectionExam-required-v1',score:80,answers:{qa:0,qb:0},at:'2026-01-02T00:00:00Z'};
s.attempts.push(old);
const savedLegacy=JSON.stringify(old);
const first=L.grade(store,baseline,'sectionExam-required-v1');
assert(first.score===100,'Current required quiz score wrong');
assert(first.assessmentSnapshot?.questionCount===2,'New attempt missing question count');
assert(first.assessmentSnapshot?.questionIds?.join(',')==='qa,qb','New attempt missing ordered question IDs');
assert(/^fnv1a32-[0-9a-f]{8}$/.test(first.assessmentSnapshot?.keyFingerprint||''),'Invalid key fingerprint format');
const serialized=JSON.parse(JSON.stringify(store));
assert(serialized.courses[baseline.id].attempts[1].assessmentSnapshot.keyFingerprint===first.assessmentSnapshot.keyFingerprint,'Snapshot lost on JSON roundtrip');
const second=L.grade(store,baseline,'sectionExam-required-v1');
assert(second.assessmentSnapshot.keyFingerprint===first.assessmentSnapshot.keyFingerprint,'Stable unchanged exam fingerprint changed');
const revised=JSON.parse(JSON.stringify(baseline));
revised.sectionExams[0].questions[0].options=['Five','Four'];revised.sectionExams[0].questions[0].correct=1;
s.answers['sectionExam-required-v1']={qa:1,qb:1};
const changed=L.grade(store,revised,'sectionExam-required-v1');
assert(changed.assessmentSnapshot.keyFingerprint!==first.assessmentSnapshot.keyFingerprint,'Changed exam fails to alter fingerprint');
assert(first.score===100,'Previous new grade overwritten');
assert(JSON.stringify(old)===savedLegacy,'Legacy attempt mutated');
assert(!('assessmentSnapshot' in old),'Synthetic legacy metadata added retroactively');
assert(L.workload(baseline).minutes===105,'Required workload unexpectedly changed');
assert(L.mastery(store,baseline).sections===false,'Required mastery incorrectly marked without written review');
assert(L.mastery(store,revised).mastered===false,'Mastery bypassed requirements');
const opt=L.grade(store,baseline,'sectionExam-independent-v2');
assert(opt===false,'Unanswered optional quiz unexpectedly graded');
s.answers['sectionExam-independent-v2']={qc:0};
const submittedOpt=L.grade(store,baseline,'sectionExam-independent-v2');
assert(submittedOpt?.score===100,'Optional quiz failed submission');
assert(L.mastery(store,baseline).sections===false,'Optional quiz caused required mastery');
const noExam=L.grade(store,baseline,'sectionExam-missing-id');
assert(noExam===false,'Missing assessment silently graded');
console.log(JSON.stringify({status:errors.length?'FAIL':'PASS',checks:'legacy attempts, deterministic fingerprints, key-change detection, optional graduation isolation, workload, persistence and absent quizzes',newGradedAttempts:s.attempts.length-1,errors},null,2));
if(errors.length)process.exitCode=1;
