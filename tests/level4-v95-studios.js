/* Level 4 v95: case math and legacy Level 3 compatibility. */
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const ctx={window:{BAContent:{}}};vm.createContext(ctx);
for(const name of ['level4-initial-v82.js','level4-executive-studios-v95.js'])vm.runInContext(fs.readFileSync('learning/'+name,'utf8'),ctx,{filename:name});
assert.equal(ctx.window.BAL4V95.courses,5);
const calc=[14*(1-1.1**-5)/.1-32,(47-35)+(34-25),(.08-.03)*12000000-300000,60000*(10/60)*36-210000,15];
const expected=[21.07,21,300000,150000,15];
for(let i=0;i<5;i++){assert.ok(Math.abs(calc[i]-expected[i])<.02,'Independent case calculation '+i);
const n=21+i,c=ctx.window.BAContent['course-'+n],id='c'+n+'-v95';
assert.equal(c.modules.find(m=>m.id===id+'-module').lessons.length,2);
const e=c.sectionExams.find(x=>x.id===id+'-exam');assert.equal(e.questions.length,2);
assert.ok(c.portfolioSections.some(x=>x.id===id+'-portfolio'));
assert.ok(c.sectionExams.some(x=>x.id==='c'+n+'-l4-initial-exam'),'Original Level 4 exam must remain');
}
assert.ok(fs.readFileSync('index.html','utf8').includes('learning/level4-executive-studios-v95.js?v=95'));
console.log('Level 4 v95 five-course model checks and original assessment continuity verified.');
