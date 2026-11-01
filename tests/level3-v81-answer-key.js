/* Level 3 Version 81 independent worked-model and question-key checks. */
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const files=['level3.js','level3-advanced-v73.js','level3-corporate-depth-v74.js','level3-integrated-v75.js','level3-board-decisions-v76.js','level3-cumulative-v77.js','level3-mastery-v78.js','level3-final-depth-v79.js','level3-executive-labs-v80.js','level3-executive-synthesis-v81.js'];
const ctx={window:{BAContent:{}}};vm.createContext(ctx);
for(const file of files)vm.runInContext(fs.readFileSync('learning/'+file,'utf8'),ctx,{filename:file});
const expected=[
 {title:'Capital allocation and risk-adjusted valuation',answer:'Alpha at roughly +$0.72m',base:16*((1-1.1**-4)/.1)-50,compare:14*((1-1.12**-5)/.12)-50},
 {title:'Strategic entry and channel cannibalization',answer:'$575,000',base:40000*(120-70)-15000*35-900000},
 {title:'Procurement contracting and option value',answer:'$2.18m',base:50000*(.4*52+.6*38)},
 {title:'Causal monitoring with delayed conversion',answer:'$800',base:((280-42)-(240-12))*80},
 {title:'Bridge financing and dilution',answer:'56%',base:7/(7+3+2.5)*100},
 {title:'Global supply-chain currency exposure',answer:'$3.04m',base:80000*(150-90)*1.05-2000000},
 {title:'AI human oversight economics',answer:'$142,000',base:120000*5-(260000+120000*.1*9+90000)}
];
const numeric=[.717847137,575000,2180000,800,56,3040000,142000];const tol=[.002,0,0,0,0,0,0];
expected.forEach((x,i)=>{const n=i+14,c=ctx.window.BAContent['course-'+n],exam=c.sectionExams.find(e=>e.id==='c'+n+'-v81-exam'),q=exam?.questions?.[0],mod=c.modules.find(m=>m.id==='c'+n+'-v81-module');assert.ok(exam&&mod,'Missing V81 data '+n);assert.ok(mod.title.includes(x.title),'Wrong course content '+n);assert.equal(q.options[q.correct],x.answer,'Incorrect answer key '+n);assert.ok(q.explanation.length>30,'Missing worked solution '+n);assert.ok(Math.abs(x.base-numeric[i])<=tol[i]+1e-6,'Incorrect independently recomputed model '+n);assert.ok(mod.lessons.every(l=>l.body.every(b=>typeof b==='string'&&b.length>20)),'Missing lesson paragraphs '+n);});
assert.ok(expected[0].base>expected[0].compare,'Capital allocation ranking changes unexpectedly');
console.log('Level 3 Version 81 independently verified seven numeric keys and case associations');

/* Additional independent scenario, governance, and assessment regression checks. */
const cases=[
 {stress:14.4*((1-1.1**-4)/.1)-50,check:v=>v<0,unit:'million USD'},
 {stress:40000*50-25000*35-900000,check:v=>v===225000,unit:'USD'},
 {stress:50000*(.25*52+.75*38),check:v=>v===2075000,unit:'USD'},
 {stress:(238/2000-228/2000)*2000*80,check:v=>Math.abs(v-800)<1e-8,unit:'USD'},
 {stress:7/(7+3+2.5+1)*100,check:v=>v<56&&v>50,unit:'percent'},
 {stress:80000*(150-90)*(.10),check:v=>Math.abs(v-480000)<1e-8,unit:'USD'},
 {stress:120000*5-(260000+120000*.2*9+90000),check:v=>v===34000,unit:'USD'}
];
cases.forEach((s,i)=>{
 const n=i+14,tag='c'+n+'-v81',c=ctx.window.BAContent['course-'+n];
 const exam=c.sectionExams.find(e=>e.id===tag+'-exam');
 const application=c.applications.find(a=>a.id===tag+'-app');
 assert.equal(exam.questions.length,3,'Incomplete three-question case exam '+n);
 assert.equal(exam.questions[1].correct,0,'Wrong board decision key '+n);
 assert.equal(exam.questions[2].correct,1,'Wrong fictional-case evidence key '+n);
 for(const q of exam.questions){
  assert.equal(q.options.length,4,'Case assessment requires four choices '+q.id);
  assert.equal(new Set(q.options).size,4,'Repeated distractor '+q.id);
  assert.ok(q.options.every(t=>typeof t==='string'&&t.trim()),'Blank answer '+q.id);
  assert.ok(q.options[q.correct]?.trim(),'Unresolvable answer '+q.id);
 }
 assert.ok(application,'Missing independent written decision '+n);
 assert.ok(application.requirements.some(t=>t.includes('1,200')),'Missing long-form written requirement '+n);
 assert.ok(application.rubric.length===4,'Incomplete applied-work rubric '+n);
 const module=c.modules.find(m=>m.id===tag+'-module');
 assert.equal(module.lessons.length,2,'Missing base or downside case '+n);
 assert.ok(module.lessons[1].transfer?.length>40,'Missing stress-case instructions '+n);
 assert.ok(s.check(s.stress),'Incorrect '+s.unit+' stress model in case '+n);
});
console.log('Level 3 v81 regression: seven stress models, board/evidence keys, written rubrics, and distractors verified');

/* Check that the numerical decisions actually stated in the lessons match model inputs. */
const interpretations=[
 {base:'Alpha PV=16',stress:'−$4.354m'},
 {base:'$575,000',stress:'$225,000'},
 {base:'$2.18m',stress:'25% price-spike'},
 {base:'$800 total',stress:'uncertainty'},
 {base:'founders own 7/12.5=56%',stress:'1m employee-option'},
 {base:'$480,000 reduction',stress:'translation'},
 {base:'$142,000 per year',stress:'$108,000'}
];
interpretations.forEach((expected,i)=>{
 const n=i+14,mod=ctx.window.BAContent['course-'+n].modules.find(m=>m.id==='c'+n+'-v81-module');
 const baseText=mod.lessons[0].body.join(' '),stressText=mod.lessons[1].body.join(' ');
 assert.ok(baseText.includes(expected.base),'Expected base decision omitted from lesson '+n);
 assert.ok(stressText.includes(expected.stress),'Expected stress interpretation omitted from lesson '+n);
});
assert.ok(Math.abs(expected[0].base-(16*((1-1.10**-4)/.10)-50))<1e-9);
assert.ok(Math.abs(14*((1-1.12**-5)/.12)-50-.466685)<.002,'Beta valuation is inconsistent');
console.log('Level 3 v81 teaching narrative and independently recomputed decisions match');
