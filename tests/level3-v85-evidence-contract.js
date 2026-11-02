/* Seven historical evidence laboratories: presence, citation, and assessment contracts. */
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const ctx={window:{BAContent:{}}};vm.createContext(ctx);
for(const file of ['level3.js','level3-advanced-v73.js','level3-corporate-depth-v74.js','level3-integrated-v75.js','level3-board-decisions-v76.js','level3-cumulative-v77.js','level3-mastery-v78.js','level3-final-depth-v79.js','level3-executive-labs-v80.js','level3-executive-synthesis-v81.js','level3-independent-transfer-v83.js','level3-historical-cases-v84.js','level3-historical-evidence-v85.js'])vm.runInContext(fs.readFileSync('learning/'+file,'utf8'),ctx,{filename:file});
assert.equal(ctx.window.BARealCasesV85.courses,7);
for(let n=14;n<=20;n++){const c=ctx.window.BAContent['course-'+n],id='c'+n+'-v85';const m=c.modules.find(x=>x.id===id+'-module'),app=c.applications.find(x=>x.id===id+'-app'),p=c.portfolioSections.find(x=>x.id===id+'-portfolio'),r=c.readings.find(x=>x.id===id+'-reading');
 assert.ok(m&&app&&p&&r,'Missing evidence case '+n);
 assert.equal(m.lessons.length,2);assert.ok(m.lessons.every(l=>l.minutes>=120&&l.body.length>=4));
 assert.ok(r.description.includes('Starting URL: https://'));
 assert.ok(app.prompt.includes('chronology')&&app.prompt.includes('source citations'));
 assert.equal(app.rubric.length,4);assert.equal(p.rubric.length,4);
 assert.ok(p.prompt.includes('ex-ante memo')&&p.prompt.includes('post-event outcome audit'));
}
assert.ok(fs.readFileSync('index.html','utf8').includes('learning/level3-historical-evidence-v85.js?v=143'));
console.log('Level 3 v85: seven primary-source historical evidence laboratories registered');
