/* Phase 4 external reviewer preflight: discoverable evidence and no false sign-off. */
const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const {manifest}=require('../audits/phase4-source-register.cjs');
const {generate}=require('../audits/phase4-outcome-mapping.cjs');
const r=manifest(),o=generate();
const handoff=fs.readFileSync('audits/five-level-external-signoff-handoff.md','utf8');
test('external evaluation packet specifies all five academic review disciplines and honest completion boundaries',()=>{
 for(const v of ['Learning-outcome coverage','Disciplinary and numerical correctness','External-source quality','Independent assessment and student outcomes','Workload validity','Functional learning acceptance'])
 assert.ok(handoff.toLowerCase().includes(v.toLowerCase()),'Missing reviewer handoff requirement '+v);
 assert.match(handoff,/Not yet approved/);
 assert.match(handoff,/Insufficient evidence to conclude/);
 assert.match(handoff,/not publish a reviewer signature/i);
 assert.match(handoff,/not confer a degree/i);
});
test('the handoff distinguishes expected course work from verified outcomes and measured time',()=>{
 assert.equal(o.courses,26);
 assert.equal(o.summary.total,84);
 assert.ok(o.summary.requiresManual>=1,'Human review queue not safely closed');
 assert.ok(handoff.includes('2,305 original planned hours'));
 assert.ok(handoff.includes('3,076.8 authored assigned-hours'));
 assert.ok(handoff.includes('signed scope-limited conclusions'));
});
test('Level 3 case research links are present but external URL verification remains pending',()=>{
 assert.equal(r.reviewState,'LINKS_NOT_NETWORK_VERIFIED');
 assert.ok(r.levels.find(x=>x.level===3).directLinks>=8);
 assert.ok(r.sourceRows.every(x=>x.linkCheck==='NOT_CHECKED'));
});
test('signoff materials are external-audit artifacts, not runtime teaching code or student records',()=>{
 const html=fs.readFileSync('index.html','utf8');
 assert.ok(!html.includes('five-level-external-signoff-handoff.md'));
 assert.ok(!html.includes('phase4-outcome-mapping.cjs'));
 assert.ok(!html.includes('phase4-source-register.cjs'));
 const core=fs.readFileSync('learning/core-v110.js','utf8');
 assert.match(core,/business-academy-learning-v1/);
});
