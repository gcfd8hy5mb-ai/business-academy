/* Phase 4 external evidence gates: source provenance and outcome-to-assessment links. */
const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const {manifest}=require('../audits/phase4-source-register.cjs');
const {generate}=require('../audits/phase4-outcome-mapping.cjs');
const sources=manifest(),outcomes=generate();
test('authored primary-source register covers all levels without claiming link verification',()=>{
 assert.equal(sources.levels.length,5);
 assert.equal(sources.reviewState,'LINKS_NOT_NETWORK_VERIFIED');
 assert.ok(sources.sourceRows.length>=50);
 assert.ok(sources.levels.reduce((n,l)=>n+l.directLinks,0)>=30);
 assert.ok(sources.sourceRows.every(s=>s.factCheck==='NOT_CHECKED'&&s.licenseCheck==='NOT_CHECKED'&&s.linkCheck==='NOT_CHECKED'));
 assert.ok(sources.sourceRows.every(s=>!s.linked||/^https:\/\//.test(s.url)),JSON.stringify(sources.issues));
});
test('Level 3 historical-case sources appear as direct optional research links, not buried only in text',()=>{
 const l3=sources.levels.find(x=>x.level===3);
 assert.ok(l3.directLinks>=8,'Seven historical case source URLs should be directly accessible in readings');
 const history=sources.sourceRows.filter(x=>Number(x.course.slice(-2))>=14&&Number(x.course.slice(-2))<=20&&x.id?.endsWith('-reading')&&x.title.startsWith('Dated company and regulator'));
 assert.equal(history.length,7);
 for(const r of history)assert.ok(/^https:\/\//.test(r.url)&&r.linkCheck==='NOT_CHECKED','Source still requires document-level validation');
});
test('every declared learning outcome has an individual independently reviewable record',()=>{
 assert.equal(outcomes.courses,26);
 assert.ok(outcomes.summary.total>=70);
 assert.equal(outcomes.summary.total,outcomes.summary.potential+outcomes.summary.requiresManual);
 assert.equal(new Set(outcomes.outcomes.map(x=>x.code)).size,outcomes.outcomes.length);
 for(const x of outcomes.outcomes){
  assert.ok(x.course&&x.outcome&&x.code);
  assert.ok(x.status==='POTENTIAL_ALIGNMENT_UNREVIEWED'||x.status==='MANUAL_ALIGNMENT_REQUIRED');
  assert.equal(x.determination,'NOT_EXTERNALLY_REVIEWED');
  assert.ok(x.candidateLessons.every(m=>m.id&&m.overlap>=1));
  assert.ok(x.candidateRequiredQuestions.every(m=>m.id&&m.exam&&m.overlap>=1));
  assert.ok(x.candidateWrittenTasks.every(m=>m.id&&m.overlap>=1));
 }
});
test('evidence generators are detached from public teaching and grade storage',()=>{
 const html=fs.readFileSync('index.html','utf8');
 assert.ok(!html.includes('phase4-source-register.cjs'));
 assert.ok(!html.includes('phase4-outcome-mapping.cjs'));
 assert.ok(sources.reviewerRequirements.some(s=>s.includes('publication date')));
 assert.match(outcomes.missingEvidenceRule,/qualified reviewers/);
});
test('risk register publishes reproducible candidate-level coverage without inferring academic approval',()=>{
 console.log('PHASE4_OUTCOME_MAPPING='+JSON.stringify(outcomes.summary));
 console.log('PHASE4_OUTCOME_REVIEW_QUEUE='+JSON.stringify(outcomes.outcomes.filter(x=>x.status==='MANUAL_ALIGNMENT_REQUIRED').map(x=>({code:x.code,statement:x.outcome,lessons:x.candidateLessons.map(y=>y.id),requiredQuestions:x.candidateRequiredQuestions.map(y=>y.id),written:x.candidateWrittenTasks.map(y=>y.id)}))));
 console.log('PHASE4_REFERENCES='+JSON.stringify(sources.levels));
 assert.ok(outcomes.summary.requiresManual>=0);
 assert.ok(sources.levels.every(l=>l.readingRecords>=l.directLinks));
});
