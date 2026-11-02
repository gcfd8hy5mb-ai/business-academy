const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const ctx={window:{BAContent:{}}};vm.createContext(ctx);for(const file of ['level5-integrated-capstone-v117.js','level5-executive-integration-v118.js','level5-comprehensive-final-v119.js','level5-multidisciplinary-cases-v120.js'])vm.runInContext(fs.readFileSync('learning/'+file,'utf8'),ctx);
const c=ctx.window.BAContent['course-26'],lessons=c.modules.flatMap(m=>m.lessons);
assert.equal(lessons.length,30);assert.equal(new Set(lessons.map(x=>x.id)).size,30);assert.equal(c.sectionExams.length,2);
const ids=[...lessons,...c.sectionExams,...c.portfolioSections,...c.applications,...c.readings].map(x=>x.id);assert.equal(new Set(ids).size,ids.length,'No duplicate assessment IDs');
for(const e of c.sectionExams){assert.ok(e.rubric.length>=4);for(const q of e.questions){assert.equal(q.options.length,4);assert.ok(Number.isInteger(q.correct)&&q.correct>=0&&q.correct<4);assert.equal(new Set(q.options).size,4,'Answer choices must be distinct: '+q.id);assert.ok(q.explanation.length>20);}}
for(const a of [...c.applications,...c.portfolioSections])assert.ok(a.rubric.length>=4&&a.prompt.length>40);
for(const l of lessons)assert.ok(l.example.length>40&&l.transfer.length>40&&l.tutor.steps.length>=3);
const pv=(pmt,r,n)=>pmt*(1-(1+r)**(-n))/r;
assert.ok(Math.abs(pv(9,.1,4)-24-4.5288)<.02,'M&A synergy model');
assert.ok(Math.abs(pv(6,.1,4)-18-1.0192)<.02,'AI NPV');
assert.ok(Math.abs(pv(9,.1,4)/1.1-16-9.9353)<.02,'Delayed turnaround NPV');
assert.ok(Math.abs(8*720/365-15.7808)<.02,'Receivables impact');
assert.equal(60000*.75*65-60000*40,525000,'Cohort contribution');
assert.equal(500*.16*.75+20-28-10,42,'FCFF');
assert.ok(Math.abs(((.12-.05)*10-.25)-.45)<1e-10,'Expected loss avoided');
assert.equal(.6*55+.4*15-30,9,'Expected investment NPV');
console.log('Level 5 v124: full ID/assessment audit and 8 independent numerical crosschecks passed.');
