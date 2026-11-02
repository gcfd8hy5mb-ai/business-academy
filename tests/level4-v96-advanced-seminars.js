const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const ctx={window:{BAContent:{}}};vm.createContext(ctx);
for(const file of ['level4-initial-v82.js','level4-executive-studios-v95.js','level4-advanced-seminars-v96.js'])vm.runInContext(fs.readFileSync('learning/'+file,'utf8'),ctx);
for(let n=21;n<=25;n++){const c=ctx.window.BAContent['course-'+n],tag='c'+n+'-v96';
assert.equal(c.modules.find(x=>x.id===tag+'-module').lessons.length,2);
assert.equal(c.sectionExams.find(x=>x.id===tag+'-exam').questions.length,2);
assert.ok(c.applications.some(x=>x.id===tag+'-application'));
assert.ok(c.portfolioSections.some(x=>x.id===tag+'-portfolio'));
assert.ok(c.sectionExams.some(x=>x.id==='c'+n+'-v95-exam'));
}
assert.ok(Math.abs(16*(1-1.11**-4)/.11-30-19.64)<.02);
assert.equal(320-70+25,275);
assert.equal((.12-.06)*5000000-150000,150000);
assert.equal(40000*.25*28*.65-125000,57000);
assert.equal(12+8,20);
console.log('Level 4 v96 structural and independent calculation checks passed.');
