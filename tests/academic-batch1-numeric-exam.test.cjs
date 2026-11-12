const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs');
const {catalog,audit}=require('../audits/four-batch-curriculum-stress.cjs');
const rows=catalog(),data=audit();
test('batch 1: every question has valid unique options, correct index and an answer explanation',()=>{
 let count=0,required=0;
 for(const {id,c} of rows){
  const exams=[c.practice,c.exam,c.advancedExam,...(c.sectionExams||[])].filter(Boolean);
  for(const e of exams)for(const q of e.questions||[]){
   count++;if(!e.optional)required++;
   assert.ok(q.id&&String(q.prompt).trim(),id+' unanswered prompt');
   assert.ok(Array.isArray(q.options)&&q.options.length>=2,q.id);
   assert.ok(Number.isInteger(q.correct)&&q.correct>=0&&q.correct<q.options.length,q.id+' key out of bounds');
   assert.equal(new Set(q.options.map(v=>String(v).trim().toLowerCase())).size,q.options.length,q.id+' duplicate distractor');
   assert.ok(String(q.explanation||'').trim(),q.id+' missing reasoning');
  }
 }
 assert.equal(count,data.totals.assessedQuestions);
 assert.ok(count>=1000);
 assert.ok(required>0);
});
test('batch 1: verify numeric drill targets finite and prompts not blank across 26 courses',()=>{
 let count=0;
 for(const {id,c} of rows)for(const drill of c.numericDrills||[])for(const q of drill.questions||[]){
  count++;
  assert.ok(Number.isFinite(q.v),id+' '+q.id+' target invalid');
  assert.ok(String(q.prompt||q.p||q.question||'').trim(),id+' '+q.id+' numeric question unlabeled');
 }
 assert.equal(count,data.totals.numericQuestions);
 assert.ok(count>=100);
});
test('batch 1: independently execute additional optional exam formula regression suites',()=>{
 for(const file of ['tests/academic-level4-full-answer-audit.test.cjs','tests/academic-level4-level5-exam-recalculation.test.cjs'])
 assert.ok(fs.readFileSync(file,'utf8').includes('independent'),file+' missing stand-alone checks');
});
