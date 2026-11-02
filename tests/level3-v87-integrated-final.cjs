/* Level 3 v87: independent integrated sitting arithmetic and non-destructive registration checks. */
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');const ctx={window:{BAContent:{}}};vm.createContext(ctx);
const files=['level3.js','level3-advanced-v73.js','level3-corporate-depth-v74.js','level3-integrated-v75.js','level3-board-decisions-v76.js','level3-cumulative-v77.js','level3-mastery-v78.js','level3-final-depth-v79.js','level3-executive-labs-v80.js','level3-executive-synthesis-v81.js','level3-independent-transfer-v83.js','level3-historical-cases-v84.js','level3-historical-evidence-v85.js','level3-integrated-final-v87.js'];
for(const name of files)vm.runInContext(fs.readFileSync('learning/'+name,'utf8'),ctx,{filename:name});
const c=ctx.window.BAContent['course-20'],tag='l3-v87-integrated';
const exam=c.sectionExams.find(x=>x.id===tag+'-exam'),portfolio=c.portfolioSections.find(x=>x.id===tag+'-portfolio'),finalModule=c.modules.find(x=>x.id===tag+'-module');
assert.ok(exam&&portfolio&&finalModule,'Missing integrated final components');assert.equal(exam.questions.length,7);
assert.equal(finalModule.lessons.length,2);assert.equal(exam.minutes,210);assert.equal(portfolio.minutes,840);
const original=c.sectionExams.find(x=>x.id==='l3-final-v77-exam');assert.ok(original&&original.questions.length===16,'Original final and history identifiers must remain intact');
const answers=['About +$11.79m','Decreases $300,000','$870','3 percentage points','About 41.67%','$4.48m','$70,000'];
const models=[
 40*(1-1.10**-4)/.10-115,
 100000*32-300000-80000*40,
 (()=>{let best=0;for(let a=0;a<=6;a++)for(let b=0;b<=10;b++)if(3*a+2*b<=30)best=Math.max(best,90*a+55*b);return best})(),
 160/1000-130/1000,
 5/(5+5+2)*100,
 (9-5)*1.12,
 50000*8-(180000+50000*.1*12+90000)
];
const expected=[11.794616, -300000,870,.03,41.666667,4.48,70000];
models.forEach((value,i)=>{assert.ok(Math.abs(value-expected[i])<.01,'Numerical error in '+i);const q=exam.questions[i];assert.equal(q.options[q.correct],answers[i],'Incorrect answer key '+q.id);assert.ok(q.explanation.includes('Verified calculation:'));});
assert.equal(new Set(exam.questions.map(x=>x.id)).size,7);
assert.ok(exam.written.includes('original executive board memo'));assert.ok(portfolio.prompt.includes('independent from the Meridian Global final'));assert.ok(portfolio.requirements.some(x=>x.includes('external review')));
assert.equal(ctx.window.BAL3V87.independentExternalGrade,false);
assert.ok(fs.readFileSync('index.html','utf8').includes('learning/level3-integrated-final-v87.js?v=87'));
console.log('Level 3 v87: seven model calculations, answer keys and original final continuity verified.');
