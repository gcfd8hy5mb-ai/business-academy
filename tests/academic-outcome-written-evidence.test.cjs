const {test}=require('node:test'),assert=require('node:assert/strict');
const {triage}=require('../audits/phase4-alignment-triage.cjs');
const r=triage();
test('all 22 outcomes without lexical required multiple-choice matches have required written-case candidates',()=>{
 assert.equal(r.totalOutcomeCount,84);
 assert.equal(r.originalManualTriage,22);
 assert.equal(r.casesWithCandidateRequiredWrittenEvidence,22);
 assert.equal(r.noCandidateWrittenEvidence,0);
 for(const x of r.records){
  assert.ok(x.lessonEvidence.length>0,x.code+' lacks authored teaching');
  assert.ok(x.writtenCaseEvidence.length>0,x.code+' lacks direct written case candidate');
  assert.equal(x.independentApproval,'PENDING');
  assert.equal(x.candidateAssessmentType,'REQUIRED_WRITTEN_CASE_OR_PORTFOLIO');
 }
});
test('manual alignment triage never pretends keyword overlap is independent grading',()=>{
 assert.match(r.limitation,/do not show actual student competency/i);
 assert.equal(new Set(r.records.map(x=>x.code)).size,22);
 console.log('PHASE4_OUTCOME_TRIAGE='+JSON.stringify({flagged:r.originalManualTriage,writtenCandidates:r.casesWithCandidateRequiredWrittenEvidence,noCandidates:r.noCandidateWrittenEvidence,validation:'PENDING'}));
});
