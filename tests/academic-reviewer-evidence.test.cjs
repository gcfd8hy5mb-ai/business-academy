/* External reviewer evidence snapshot: structural and safety checks.
 * Tests metadata and flags, not educational equivalence or observed learner outcomes.
 */
const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const {build}=require('../audits/build-reviewer-evidence.cjs');
const report=build();
test('reproducible Level 1–2 inventory covers thirteen scoped courses with consistent levels',()=>{
 assert.equal(report.courses.length,13);
 assert.ok(report.scriptsLoaded>=40,'Expected latest Level 1–2 extensions');
 assert.equal(report.total.courses,13);
 assert.deepEqual(report.courses.map(c=>c.id),Array.from({length:13},(_,i)=>'course-'+String(i+1).padStart(2,'0')));
 assert.deepEqual(report.courses.map(c=>c.level),[1,1,1,1,1,1,2,2,2,2,2,2,2]);
 for(const c of report.courses){
  assert.ok(c.lessons>0,c.id+' lacks authored lessons');
  assert.ok(c.assignedMinutes>0,c.id+' invalid assigned workload');
  assert.ok(c.modules>0,c.id+' lacks teaching modules');
  assert.ok(c.requiredExamCount>0,c.id+' lacks mandatory assessment');
  assert.ok(c.corePortfolio||c.portfolioSections>0,c.id+' no portfolio work');
 }
});
test('assigned-hour totals reconcile with component minutes without treating optional work as required',()=>{
 for(const c of report.courses){
  const total=Object.values(c.workloadBlocks).reduce((s,n)=>s+n,0);
  assert.equal(c.assignedMinutes,total,c.id+' workload component mismatch');
  assert.equal(c.assignedHours,Math.round(total/60*10)/10,c.id+' rounded workload');
 }
 assert.equal(report.total.assignedMinutes,report.courses.reduce((s,c)=>s+c.assignedMinutes,0));
 assert.equal(report.total.lessons,report.courses.reduce((s,c)=>s+c.lessons,0));
});
test('outcome pointers are explicitly provisional, never claims of mastered competencies',()=>{
 for(const c of report.courses){
  assert.ok(c.outcomes.length>=3,c.id+' missing declared outcomes');
  for(const lo of c.outcomes){
   assert.ok(lo.code.startsWith(c.id.toUpperCase()),'Outcome must remain course scoped');
   assert.ok(lo.statement.length>=15,'Outcome statement too brief');
   assert.equal(lo.verification,'NEEDS_EXPERT_ALIGNMENT_REVIEW');
   assert.ok(Array.isArray(lo.candidateEvidence.requiredAssessments));
  }
 }
 assert.ok(report.evidenceLimitations.some(x=>x.includes('credit')));
 assert.ok(report.evidenceLimitations.some(x=>x.includes('human examiner')));
});
test('examiner dossier requests human marking and rejects accreditation/credit inference',()=>{
 const dossier=fs.readFileSync('audits/independent-academic-evaluation-dossier.md','utf8');
 assert.match(dossier,/reproducible evidence index/i);
 assert.match(dossier,/university credits/i);
 assert.match(dossier,/blinded scoring pilot/i);
 assert.match(dossier,/NEEDS_EXPERT_ALIGNMENT_REVIEW/);
 assert.match(dossier,/not independently reviewed/i);
 const index=fs.readFileSync('index.html','utf8');
 assert.ok(!index.includes('build-reviewer-evidence.cjs'));
 assert.ok(!index.includes('independent-academic-evaluation-dossier.md'));
});
