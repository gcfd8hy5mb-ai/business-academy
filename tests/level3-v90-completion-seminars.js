/* Level 3 v90 coursework: comprehensive seven-course structural and numerical test. */
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const ctx={window:{BAContent:{}}};vm.createContext(ctx);
for(const file of ['level3.js','level3-advanced-v73.js','level3-corporate-depth-v74.js','level3-integrated-v75.js','level3-board-decisions-v76.js','level3-cumulative-v77.js','level3-mastery-v78.js','level3-final-depth-v79.js','level3-executive-labs-v80.js','level3-executive-synthesis-v81.js','level3-independent-transfer-v83.js','level3-historical-cases-v84.js','level3-historical-evidence-v85.js','level3-integrated-final-v87.js','level3-completion-seminars-v90.js'])vm.runInContext(fs.readFileSync('learning/'+file,'utf8'),ctx,{filename:file});
assert.equal(ctx.window.BAL3V90.courses,7);assert.equal(ctx.window.BAL3V90.lessons,21);assert.equal(ctx.window.BAL3V90.externalApproval,false);
const checks=[
 {n:14,label:'$7m',v:130-120+6-9,expected:7},
 {n:15,label:'−$130,000',v:110000*42-250000-100000*45,expected:-130000},
 {n:16,label:'$825',v:6*105+3*65,expected:825},
 {n:17,label:'0 percentage points',v:(180-30)/1000-(160-10)/1000,expected:0},
 {n:18,label:'46.15%',v:100*6/(6+4+2.5+.5),expected:46.153846},
 {n:19,label:'$5.8m',v:(20-12)*1.1-3,expected:5.8},
 {n:20,label:'$50,000',v:80000*6-80000*.15*10-220000-90000,expected:50000}
];
let total=0;
for(const x of checks){const c=ctx.window.BAContent['course-'+x.n],prefix='c'+x.n+'-v90';assert.ok(Math.abs(x.v-x.expected)<.015,'Independent number '+x.n);total++;
const m=c.modules.find(z=>z.id===prefix+'-module');assert.ok(m&&m.lessons.length===3);
for(const l of m.lessons){assert.ok(l.minutes>=150);assert.ok(l.body.length>=3);assert.ok(l.example.length>40);assert.ok(l.transfer.length>40);assert.ok(l.tutor.steps.length>=3);total++;}
const exam=c.sectionExams.find(z=>z.id===prefix+'-exam');assert.ok(exam&&exam.questions.length===3);assert.equal(exam.questions[0].options[exam.questions[0].correct],x.label);total++;
assert.ok(c.applications.some(z=>z.id===prefix+'-application'));assert.ok(c.portfolioSections.some(z=>z.id===prefix+'-portfolio'));total+=2;
assert.ok(c.sectionExams.some(z=>z.id===prefix.replace('-v90','-v81')+'-exam'));total++;
}
const final=ctx.window.BAContent['course-20'];assert.equal(final.sectionExams.find(x=>x.id==='l3-final-v77-exam').questions.length,16);assert.equal(final.sectionExams.find(x=>x.id==='l3-v87-integrated-exam').questions.length,7);total+=2;
assert.ok(fs.readFileSync('index.html','utf8').includes('learning/level3-completion-seminars-v90.js?v=90'));total++;
console.log('Level 3 v90 completion seminars: '+total+' structural and independent numerical assertions passed.');
