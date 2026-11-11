/* Isolated Level 4 graduation dry run; NEVER activates the production cohort policy. */
'use strict';
const {test}=require('node:test'),assert=require('node:assert/strict');
const fs=require('node:fs'),vm=require('node:vm');
const P=require('../learning/level4-cohort-policy-v139.js');
const {catalog}=require('../audits/four-batch-curriculum-stress.cjs');
const rows=catalog().filter(r=>r.level===4).map(r=>({...r.c,id:r.id}));
const fakePolicy={required:(store,c)=>{
 if(store.level4ExamCohort?.version!==P.VERSION)return (c.sectionExams||[]).filter(e=>!e.optional);
 const proposal=P.proposedRequired(c);
 return [...proposal.kept,proposal.replacement];
}};
const ctx={window:{BAL4CohortPolicy:fakePolicy},Date,Math,JSON};
vm.runInNewContext(fs.readFileSync('learning/core-v110.js','utf8'),ctx);
const L=ctx.window.BALearning;
function review(s,key,rubric){
 if(!rubric?.length)return;
 s.drafts[key]='Synthetic written corporate decision analysis — NOT independently graded.';
 s.reviews[key]=Object.fromEntries(rubric.map((_,i)=>[i,4]));
}
function grade(store,c,kind,a,wrong=false){
 const s=L.state(store,c.id);
 s.answers[kind]=Object.fromEntries(a.questions.map(q=>[q.id,wrong?(q.correct+1)%q.options.length:q.correct]));
 const attempt=L.grade(store,c,kind);
 assert.ok(attempt,'Unable to submit '+kind+' in '+c.id);
 return attempt;
}
function finish(store,c,{exclude=[],wrong=[]}={}){
 const s=L.state(store,c.id);
 s.lessons=c.modules.flatMap(m=>m.lessons).map(l=>l.id);
 if(c.practice)grade(store,c,'practice',c.practice);
 if(c.exam){grade(store,c,'exam',c.exam);review(s,'exam',c.exam.rubric)}
 if(c.advancedExam){grade(store,c,'advancedExam',c.advancedExam);review(s,'advancedExam',c.advancedExam.rubric)}
 if(c.portfolio)review(s,'portfolio',c.portfolio.rubric);
 if(c.portfolioExtension)review(s,'portfolioExtension',c.portfolioExtension.rubric);
 for(const a of c.applications||[])review(s,'application-'+a.id,a.rubric);
 for(const a of c.portfolioSections||[])review(s,'portfolioSection-'+a.id,a.rubric);
 for(const a of fakePolicy.required(store,c)){
  if(exclude.includes(a.id))continue;
  grade(store,c,'sectionExam-'+a.id,a,wrong.includes(a.id));
  review(s,'sectionExam-'+a.id,a.rubric);
 }
 return s;
}
test('both old and proposed cohorts can complete all five real Level 4 courses, in isolated models',()=>{
 assert.equal(P.RELEASE_APPROVED,false,'The real release gate must remain disabled');
 assert.equal(rows.length,5);
 const historic=L.empty(),prospective={...L.empty(),level4ExamCohort:{level:4,version:P.VERSION,status:'approved'}};
 const counts=[];
 for(const c of rows){
  const proposal=P.proposedRequired(c);
  assert.ok(proposal.retired.length>0,'Expected repeated exam blocks for '+c.id);
  const original=JSON.stringify(c);
  finish(historic,c);
  assert.equal(L.mastery(historic,c).mastered,true,'Legacy mastery failed '+c.id);
  finish(prospective,c);
  assert.equal(L.mastery(prospective,c).mastered,true,'Prospective mastery failed '+c.id);
  assert.equal(JSON.stringify(c),original,'Candidate path altered legacy course data');
  counts.push({course:c.id,legacyRequired:(c.sectionExams||[]).filter(e=>!e.optional).length,retired:proposal.retired.length,retained:proposal.kept.length,candidateObjectiveItems:proposal.replacement.questions.length});
 }
 assert.equal(P.pinned(prospective),P.VERSION);
 const roundtrip=L.load({getItem:()=>JSON.stringify(prospective)});
 assert.equal(roundtrip.level4ExamCohort.version,P.VERSION,'Cohort pin lost on storage round trip');
 for(const c of rows)assert.equal(L.mastery(roundtrip,c).mastered,true,'Mastery lost after JSON restore '+c.id);
 assert.equal(historic.level4ExamCohort,undefined,'Legacy record gained a cohort pin');
 console.log('LEVEL4_COHORT_DRY_RUN='+JSON.stringify(counts));
});
test('each proposed independent required exam is truly mandatory, with both objective and written gates',()=>{
 for(const c of rows){
  const independent=P.proposedRequired(c).replacement;
  const enrolled={...L.empty(),level4ExamCohort:{level:4,version:P.VERSION,status:'approved'}};
  const s=finish(enrolled,c,{exclude:[independent.id]});
  assert.equal(L.mastery(enrolled,c).mastered,false,'Skipped candidate still graduated: '+c.id);
  grade(enrolled,c,'sectionExam-'+independent.id,independent,true);
  assert.equal(L.mastery(enrolled,c).mastered,false,'Wrong objective candidate still graduated: '+c.id);
  grade(enrolled,c,'sectionExam-'+independent.id,independent);
  review(s,'sectionExam-'+independent.id,independent.rubric);
  assert.equal(L.mastery(enrolled,c).mastered,true,'Correct candidate and written review did not restore graduation: '+c.id);
  delete s.reviews['sectionExam-'+independent.id];
  assert.equal(L.mastery(enrolled,c).mastered,false,'Missing written review was ignored: '+c.id);
 }
});
test('legacy completed grades, answers and fingerprints survive dry-run and backup unchanged',()=>{
 for(const c of rows){
  const legacy=L.empty(),s=finish(legacy,c),oldExam=(c.sectionExams||[]).find(e=>!e.optional);
  const key='sectionExam-'+oldExam.id,archived=L.latest(s,key);
  assert.equal(archived.score,100);
  const snap=JSON.stringify(legacy),fingerprint=archived.assessmentSnapshot.keyFingerprint;
  const proposal=P.proposedRequired(c);
  assert.ok(proposal.retired.length);
  assert.equal(JSON.stringify(legacy),snap,'Planning changed legacy student record');
  const restored=L.load({getItem:()=>snap});
  assert.equal(L.latest(L.state(restored,c.id),key).assessmentSnapshot.keyFingerprint,fingerprint);
  assert.equal(L.mastery(restored,c).mastered,true,'Old student forced to retake new exam');
 }
});
test('Level 4 final keeps its own milestone route in prospective simulation',()=>{
 const c=rows.find(c=>c.id==='course-25');
 assert.ok(c);
 const proposal=P.proposedRequired(c);
 const finalRetained=proposal.kept.some(e=>e.id==='l4-final-v99-exam');
 const finalRetired=proposal.retired.some(e=>e.id==='l4-final-v99-exam');
 assert.notEqual(finalRetained,finalRetired,'Final must be explicitly assigned to exactly one path');
 assert.equal(proposal.replacement.id,'c25-v138-independent-transfer');
 const sim={...L.empty(),level4ExamCohort:{level:4,version:P.VERSION,status:'approved'}};
 finish(sim,c,{exclude:[proposal.replacement.id]});
 assert.equal(L.mastery(sim,c).mastered,false);
 finish(sim,c);
 assert.equal(L.mastery(sim,c).mastered,true);
});
