/* Graduate transfer v83: independent check of all seven numeric answers and application contracts. */
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const ctx={window:{BAContent:{}}};vm.createContext(ctx);
for(const file of ['level3.js','level3-advanced-v73.js','level3-corporate-depth-v74.js','level3-integrated-v75.js','level3-board-decisions-v76.js','level3-cumulative-v77.js','level3-mastery-v78.js','level3-final-depth-v79.js','level3-executive-labs-v80.js','level3-executive-synthesis-v81.js','level3-independent-transfer-v83.js'])vm.runInContext(fs.readFileSync('learning/'+file,'utf8'),ctx,{filename:file});
const annuity=(r,t)=>(1-(1+r)**(-t))/r;
const finance=13*annuity(.11,4)+6/1.11**4-42+2-4;
const strategy=150000*1.18*(75-51)-150000*(80-51);
let maximum=-Infinity,best=[];for(let a=0;a<=10;a++)for(let b=0;b<=16;b++)if(3*a+2*b<=44&&a*85+b*55>maximum){maximum=a*85+b*55;best=[a,b]}
const analytics=((375-75)-(350-25))*60-2000;
const venture=8/(8+2+2+1.5)*100;
const international=(9-5)*1.14;
const innovation=(150000*4-285000-75000)/(150000*10)*100;
assert.ok(Math.abs(finance-.28418)<.002);
assert.equal(strategy,-102000);assert.equal(maximum,1235);assert.deepEqual(best,[10,7]);assert.equal(analytics,-3500);
assert.ok(Math.abs(venture-59.25926)<.00002);assert.equal(international,4.56);assert.equal(innovation,16);
const labels=['About +$0.28m','−$102,000','10 A and 7 B; $1,235','−$3,500','About 59.26%','$4.56m','16%'];
for(let n=14;n<=20;n++){const c=ctx.window.BAContent['course-'+n],tag='c'+n+'-v83';
 const exam=c.sectionExams.find(e=>e.id===tag+'-exam'),app=c.applications.find(x=>x.id===tag+'-app');
 assert.ok(exam&&app,'Missing unseen transfer assessment '+n);
 const question=exam.questions[0];assert.equal(question.options[question.correct],labels[n-14]);
 assert.equal(exam.questions.length,3);assert.equal(exam.rubric.length,4);assert.ok(c.modules.some(m=>m.id===tag+'-module'));
 assert.ok(c.portfolioSections.some(p=>p.id===tag+'-portfolio'));
 assert.ok(c.modules.find(m=>m.id===tag+'-module').lessons.every(l=>l.minutes>=120));
}
assert.ok(fs.readFileSync('index.html','utf8').includes('learning/level3-independent-transfer-v83.js?v=83'));
console.log('Level 3 v83: all seven independent-transfer models and assessment contracts checked');
