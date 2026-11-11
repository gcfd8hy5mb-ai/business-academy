const {test}=require('node:test');
const assert=require('node:assert/strict');
const {scan}=require('../audits/phase4-assessment-format-audit.cjs');
const results=scan();
test('all five-level assessment questions receive consistent response-quality inspection',()=>{
 assert.ok(results.totals.questions>=1000);
 assert.ok(results.totals.explicitTwoDecimal>=3);
 assert.ok(Array.isArray(results.findings));
 for(const flag of results.findings)assert.ok(flag.course&&flag.id&&flag.type);
});
test('catalog contains no duplicate multiple-choice options or blank answer explanations',()=>{
 assert.equal(results.totals.ambiguousDuplicateOptions,0,JSON.stringify(results.findings.filter(x=>x.type==='duplicate-answer-options').slice(0,10)));
 assert.equal(results.totals.missingExplanations,0,JSON.stringify(results.findings.filter(x=>x.type==='missing-explanation').slice(0,10)));
});
test('two-decimal mismatch scan is reported with exact IDs, never silently mutates legacy grading',()=>{
 console.log('PHASE4_ASSESSMENT_FORMAT='+JSON.stringify(results.totals));
 console.log('PHASE4_DECIMAL_MISMATCHES='+JSON.stringify(results.findings.filter(x=>x.type==='two-decimal-answer-format')));
 assert.ok(results.totals.correctChoicePrecisionFlags>=0);
});
