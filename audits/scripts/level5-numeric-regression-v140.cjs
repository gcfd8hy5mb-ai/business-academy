/* Academic QA v140 — 30 independently reconstructed Level 5 numeric-transfer answers.
 * Run: node audits/scripts/level5-numeric-regression-v140.cjs
 * Read-only against source files, no paid tooling. */
'use strict';
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const root=path.resolve(__dirname,'../..'),formulae=["(.85*48)/1.12+(.85*52)/(1.12**2)+(.85*56)/(1.12**3)","75-10-30-35","(.09-.04)*30-.38","190000/(20000*36)*100","12*.75*1.07+12*.25*.95","130-12-42-33-50","(900*.96-792)/(900*.96)*100","(600*.18-30)*.75+30-45-22","375-3*105","14*.6*1.08+14*.4*.95","18000*40*.3-170000",".03*20","55-(135-32-18-40)","16-.5*15+12","9*.6*(1/1.1+1/1.1**2+1/1.1**3+1/1.1**4)-24","6*.8*(1/1.1+1/1.1**2+1/1.1**3+1/1.1**4)-18","10-.75-8","30-8","((800*.14)-38)/760*100","250+70-3*100","126*(.11-.15)","720/365*(50-35)","(.08-.03)*9e6-200000-120000","40/65*100","20*(.8-.6)","2/1.1+4/1.1**2+4/1.1**3+4/1.1**4-12","20e6*45/365*.09","400-95+28-12","9*.75*(1/1.1**2+1/1.1**3+1/1.1**4+1/1.1**5)-16","(100000-60000)/(100000+300000)*100"];
const source=fs.readFileSync(path.join(root,'learning/level5-numeric-v125.js'),'utf8');
const c={id:'course-26',modules:[{lessons:Array.from({length:30},(_,i)=>({id:'l5-v'+(i<6?'117':i<18?'118':'120')+'-lesson-'+(i<6?i+1:i<18?i-5:i-17)}))}],numericDrills:[]};
const window={BAContent:{'course-26':c}};
let failures=[];
try{vm.runInNewContext(source,{window},{timeout:5000})}catch(e){failures.push('Source registration: '+String(e))}
const q=c.numericDrills.flatMap(x=>x.questions);
if(q.length!==30)failures.push('Expected 30 numeric questions but got '+q.length);
for(let i=0;i<q.length;i++){const item=q[i],expected=vm.runInNewContext(formulae[i],{Math},{timeout:1000});
 const tol=item.u==='USD'?1.1:.016;
 if(!Number.isFinite(expected)||Math.abs(item.v-expected)>tol)failures.push(item.id+' key='+item.v+' independently calculated='+expected+' tolerance='+tol);
 if(!item.p||!item.e||!item.u||!item.remediation)failures.push('Missing learning or feedback data '+item.id);
 if(!Number.isFinite(item.tolerance)||item.tolerance<=0)failures.push('Invalid grading tolerance '+item.id);
}
const ids=q.map(x=>x.id);
if(new Set(ids).size!==ids.length)failures.push('Duplicate question identifiers');
console.log(JSON.stringify({status:failures.length?'FAIL':'PASS',checks:q.length,expectedSets:10,independentComputations:formulae.length,failures},null,2));
if(failures.length)process.exitCode=1;
