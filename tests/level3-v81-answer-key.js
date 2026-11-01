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
