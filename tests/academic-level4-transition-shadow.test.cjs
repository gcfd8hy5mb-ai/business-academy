const {test}=require('node:test'),assert=require('node:assert/strict');
const fs=require('node:fs');
const {plan}=require('../audits/level4-required-exam-transition-shadow.cjs');
const m=plan();
test('Level 4 shadow report identifies all five affected courses and future independent exam sets',()=>{
 assert.equal(m.mode,'SHADOW_REPORT_ONLY');
 assert.equal(m.cohortPinningImplemented,false);
 assert.equal(m.productionRulesChanged,false);
 assert.equal(m.courses.length,5);
 for(let i=0;i<m.courses.length;i++){
  const c=m.courses[i],n=i+21;
  assert.equal(c.course,'course-'+n);
  assert.ok(c.legacyRequiredExamCount>=4);
  assert.ok(c.repeatedLegacyPromptOccurrences>=3,'Original repeated prompts must not be erased from this report');
  assert.equal(c.replacementExamId,'c'+n+'-v138-independent-transfer');
  assert.equal(c.newExamQuestionCount,4);
  assert.equal(c.transitionDecision,'NOT_APPROVED_NOT_APPLIED');
  assert.ok(c.compatibleWithExistingAttempts);
  assert.equal(c.replacementQuestionIds.length,new Set(c.replacementQuestionIds).size);
  assert.equal(c.replacementIdsDisjointFromLegacy,true);
  assert.equal(c.replacementPromptsDisjointFromLegacy,true);
 }
});
test('transition plan retains archived scores and requires cohort-pinning before a new mandatory version',()=>{
 for(const c of m.courses){
  assert.match(c.design.existingLearner,/unchanged/);
  assert.match(c.design.newLearner,/Only after owner signoff/);
  assert.match(c.design.rollback,/without rewriting any attempts/);
  assert.ok(c.design.requiredTests.some(x=>x.includes('Historical key fingerprint')));
  assert.ok(c.design.requiredTests.some(x=>x.includes('Multi-device')));
 }
 const core=fs.readFileSync('learning/core-v110.js','utf8');
 assert.ok(!core.includes('c21-v138-independent-transfer'),'Do not hardcode unapproved graduation gates');
 const html=fs.readFileSync('index.html','utf8');
 assert.ok(!html.includes('level4-required-exam-transition-shadow.cjs'),'Audit must not run in student browser');
});
