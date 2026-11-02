/* Level 3 v84 historical case source and delayed-reveal contracts. */
const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const ctx={window:{BAContent:{}}};vm.createContext(ctx);
for(const name of ['level3.js','level3-advanced-v73.js','level3-corporate-depth-v74.js','level3-integrated-v75.js','level3-board-decisions-v76.js','level3-cumulative-v77.js','level3-mastery-v78.js','level3-final-depth-v79.js','level3-executive-labs-v80.js','level3-executive-synthesis-v81.js','level3-independent-transfer-v83.js','level3-historical-cases-v84.js'])vm.runInContext(fs.readFileSync('learning/'+name,'utf8'),ctx,{filename:name});
assert.equal(ctx.window.BARealCasesV84.count,7);
for(let n=14;n<=20;n++){const c=ctx.window.BAContent['course-'+n],id='c'+n+'-v84',m=c.modules.find(x=>x.id===id+'-module'),e=c.sectionExams.find(x=>x.id===id+'-exam'),app=c.applications.find(x=>x.id===id+'-app'),reading=c.readings.find(x=>x.id===id+'-primary');
assert.ok(m&&e&&app&&reading,'Missing historical case content '+n);
assert.equal(m.lessons.length,1);assert.ok(!m.lessons[0].body.join(' ').includes('Documented outcome (revealed after submission)'));
assert.equal(e.questions.length,3);assert.ok(e.questions[0].explanation.includes('Documented outcome (revealed after submission)'));
assert.ok(/https:\/\//.test(e.questions[0].explanation));assert.ok(/https:\/\//.test(reading.description));assert.ok(e.rubric.length===4);
assert.ok(app.prompt.includes('what later actually happened'));
}
assert.ok(fs.readFileSync('index.html','utf8').includes('learning/level3-historical-cases-v84.js?v=84'));
console.log('Seven historical cases and delayed-outcome reveal contracts verified');
