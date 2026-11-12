const {test}=require('node:test'),assert=require('node:assert/strict');
const {catalog,audit}=require('../audits/four-batch-curriculum-stress.cjs');
const rows=catalog(),data=audit();
test('batch 2: all 26 courses have progressively identifiable levels, objectives, and required cases',()=>{
 assert.equal(rows.length,26);
 assert.deepEqual(data.levels.map(v=>v.courses),[6,7,7,5,1]);
 for(const {id,c} of rows){
  assert.ok((c.outcomes||[]).length>0,id+' no declared learning outcomes');
  assert.ok((c.modules||[]).some(m=>m.lessons?.length),id+' no teaching lessons');
  assert.ok((c.applications||[]).length||(c.portfolioSections||[]).length||c.portfolio,id+' no casework');
  assert.ok((c.sectionExams||[]).some(e=>!e.optional)||c.exam,id+' no required scored exam');
 }
});
test('batch 2: count reproducible teaching supports without equating body length to graduate rigor',()=>{
 let lessons=0,transfer=0,worked=0;
 for(const {c} of rows)for(const l of c.modules.flatMap(m=>m.lessons||[])){
  lessons++;
  if(l.transfer)transfer++;
  if(l.example)worked++;
  assert.ok(l.id&&l.title&&Array.isArray(l.body)&&l.body.length>0,l.id+' requires substantive lesson metadata');
 }
 assert.equal(lessons,data.totals.lessons);
 assert.equal(transfer,data.levels.reduce((n,l)=>n+l.withTransfer,0));
 assert.equal(worked,data.levels.reduce((n,l)=>n+l.withWorkedExamples,0));
 console.log('BATCH2_DEPTH_EVIDENCE='+JSON.stringify(data.levels.map(x=>({level:x.level,lessons:x.lessons,worked:x.withWorkedExamples,transfer:x.withTransfer,longWithoutExplicitExample:x.longLessonsWithoutExplicitExample}))));
});
test('batch 2: the final level has concrete evidence checkpoints in the integrated capstone',()=>{
 const final=rows.find(x=>x.level===5);
 assert.ok(final.c.modules.flatMap(m=>m.lessons||[]).length>=25);
 assert.ok(data.totals.capstoneEvidenceCheckpoints>=20,'Level 5 requires evidence checkpoint mapping');
});
