/* Full five-level authored curriculum integrity tests.
 * Code-level review only, not independent assessment validation.
 */
const {test}=require('node:test');
const assert=require('node:assert/strict');
const {analyze}=require('../audits/build-full-curriculum-audit.cjs');
const a=analyze();
test('all authored five-level content scripts compose in live HTML order without exceptions',()=>{
 assert.ok(a.scriptsExecuted>=80,'Missing expected source scripts');
 assert.deepEqual(a.sourceFailures,[],'Full curriculum source loader failures');
 assert.equal(a.courses.length,26);
 assert.equal(a.courses.filter(c=>c.missing).length,0);
});
test('each level contains its expected course count and independently accessible teaching material',()=>{
 assert.deepEqual([1,2,3,4,5].map(n=>a.totals['level'+n].courses),[6,7,7,5,1]);
 for(const c of a.courses){
  assert.ok(c.modules>0,c.id+' missing modules');
  assert.ok(c.lessons>=5,c.id+' missing substantive lesson sequence');
  if(c.learningOutcomes===0)assert.ok(c.issues.some(i=>i.type==='missing-declared-learning-outcomes'),c.id+' omission not recorded');
  assert.ok(c.gradedQuestions>=4,c.id+' lacks objective question material');
  assert.ok(c.requiredExams>=1,c.id+' missing mandatory assessment');
  assert.ok(c.corePortfolio||c.portfolioSections>0,c.id+' missing portfolio');
 }
});
test('no high-impact defects in assessment keys, numerical targets, lesson IDs or source loading',()=>{
 const severe=a.courses.flatMap(c=>c.issues.filter(x=>['critical','high'].includes(x.severity)).map(x=>({...x,course:c.id})));
 assert.deepEqual(severe,[],'High-impact authored-source findings must be resolved');
});
test('workload calculations and audit limits remain transparent',()=>{
 for(const c of a.courses){
  assert.ok(c.assignedMinutes>0,c.id+' no assigned minutes');
  assert.ok(Math.abs(c.assignedHours-Math.round(c.assignedMinutes/60*10)/10)<.00001);
 }
 assert.ok(a.notes.some(s=>s.includes('not measured study')));
 assert.ok(a.notes.some(s=>s.includes('independently marked')));
});

test('catalog audit transparently reports outcomes, workload and repeat-question gaps by level',()=>{
 const summary=[1,2,3,4,5].map(l=>({level:l,...a.totals['level'+l],missingOutcomes:a.courses.filter(c=>c.level===l&&c.learningOutcomes===0).map(c=>c.id)}));
 console.log('FIVE_LEVEL_ACADEMIC_AUDIT_SUMMARY='+JSON.stringify(summary));
 assert.ok(summary.every(x=>x.courses>0));
 assert.deepEqual(summary.map(x=>x.plannedHours),[365,590,690,480,180]);
 assert.ok(summary.every(x=>Number.isFinite(x.assignedMinusPlannedHours)));
 assert.ok(summary.some(x=>x.assignedMinusPlannedHours>0),'Published plans and assigned minutes should be reconciled');
});

// Temporary diagnostic evidence for exact learner-facing editorial gaps (included in CI log).
test('enumerate unresolved editorial flags with stable lesson and question identifiers',()=>{
 const flags=a.courses.filter(c=>c.longLessonsWithShortBody||c.exactRepeatedQuestionPrompts).map(c=>({course:c.id,short:c.examplesOfShortLongLessons,repeated:c.examplesOfRepeatedPrompts}));
 console.log('ACADEMIC_EDITORIAL_FLAGS='+JSON.stringify(flags));
 assert.ok(flags.length>0);
});
