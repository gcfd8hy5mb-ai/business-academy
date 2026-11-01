/* Level 4 v82 entry and financial-case smoke test. */
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const ctx={window:{BAContent:{}}};vm.createContext(ctx);
vm.runInContext(fs.readFileSync('learning/level4-initial-v82.js','utf8'),ctx,{filename:'level4-initial-v82.js'});
assert.equal(ctx.window.BAL4Initial.courses,5);
const titles=['Mergers & Acquisitions','Advanced Investment Decisions','Corporate Governance & Risk','Organizational Transformation','Executive Decision-Making'];
const keys=['Approximately $10.84m','Plant B, about +$4.44m','$7m','About +$0.68m','Proposal Y, with $50m cash'];
for(let n=21;n<=25;n++){
 const c=ctx.window.BAContent['course-'+n],i=n-21,tag='c'+n+'-l4-initial';
 assert.ok(c,'Missing Level 4 course '+n);assert.ok(c.description.includes(titles[i]));
 const m=c.modules.find(m=>m.id===tag+'-module');
 assert.equal(m.lessons.length,2);assert.ok(m.lessons.every(l=>l.minutes>=100&&l.body.length>=3));
 const a=c.sectionExams.find(e=>e.id===tag+'-exam');
 assert.equal(a.questions.length,3);assert.equal(a.questions[0].options[a.questions[0].correct],keys[i]);
 assert.equal(c.practice.questions.length,4);
 assert.ok(c.applications.find(a=>a.id===tag+'-app'));
 assert.ok(c.portfolioSections.find(a=>a.id===tag+'-portfolio'));
 assert.ok(a.rubric.length===4);
}
const pv=(rate,periods)=>(1-(1+rate)**(-periods))/rate;
const near=(a,b,tol=.03)=>assert.ok(Math.abs(a-b)<tol,`Expected ${b}, actual ${a}`);
near(8*pv(.12,5)-18,10.838, .02);
near(17*pv(.10,5)-60,4.444, .02);
near(55-(130-50-32),7,0.01);
near(4*pv(.10,4)-12,.679, .02);
near(100-30-20,50,0.01);
const html=fs.readFileSync('index.html','utf8');
assert.ok(html.includes('learning/level4-initial-v82.js?v=82'),'Level 4 script not loaded');
console.log('Level 4 v82 initial 5-course structure and key financial models verified');
