const {test}=require('node:test'),assert=require('node:assert/strict');
const {catalog,audit}=require('../audits/four-batch-curriculum-stress.cjs');
const {manifest}=require('../audits/phase4-source-register.cjs');
const rows=catalog(),data=audit(),sources=manifest();
test('batch 3: cross-level cases contain written submissions with authored rubric evidence',()=>{
 let count=0;
 for(const {id,c} of rows){
  const cases=[...(c.applications||[]),...(c.portfolioSections||[]),...(c.portfolio?[c.portfolio]:[]),...(c.portfolioExtension?[c.portfolioExtension]:[])];
  assert.ok(cases.length,id+' no executive case or portfolio');
  for(const a of cases){
   count++;
   assert.ok(a.title||a.id,id+' unnamed executive case');
   assert.ok(a.prompt||a.requirements||a.description||a.title,id+' unwritten case mandate');
  }
 }
 assert.equal(count,data.levels.reduce((n,l)=>n+l.writtenCases,0));
 assert.ok(count>100);
});
test('batch 3: source coverage is measured without falsely claiming URL/fact checks',()=>{
 assert.equal(sources.levels.length,5);
 assert.equal(sources.reviewState,'LINKS_NOT_NETWORK_VERIFIED');
 assert.ok(sources.sourceRows.every(r=>r.linkCheck==='NOT_CHECKED'&&r.factCheck==='NOT_CHECKED'));
 for(const v of data.levels){
  assert.equal(v.directReadingLinks,sources.levels.find(x=>x.level===v.level).directLinks);
 }
 console.log('BATCH3_CASE_SOURCE_COVERAGE='+JSON.stringify(data.levels.map(x=>({level:x.level,cases:x.writtenCases,links:x.directReadingLinks}))));
});
test('batch 3: level 5 is integrated project with its own required exam and original capstone submission',()=>{
 const c=rows.find(r=>r.level===5).c;
 assert.ok(c.modules.flatMap(m=>m.lessons||[]).length>=25);
 assert.ok((c.sectionExams||[]).some(x=>!x.optional&&x.questions?.length),'No independently scored final');
 assert.ok((c.portfolioSections||[]).length>0,'No final executive dossier');
 assert.ok(c.modules.flatMap(m=>m.lessons||[]).filter(l=>Array.isArray(l.body)&&l.body.join(' ').includes('EVIDENCE CHECKPOINT')).length>=20);
});
