/* QA v144 — 35 original Level 2 numeric answers, independently reconstructed.
 * Run: node audits/scripts/level2-numeric-multistep-regression-v144.cjs
 * Read-only; does not alter the academy's progress or numeric grading mechanism. */
'use strict';
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const root=path.resolve(__dirname,'../..'),expr64=["260-(340-115)","85+14-19-6+11","7500*(25.6-24)","48-275*.12","(210/1500-150/1500)*100","60*62-2800","18-11-2-.25*4","-1.4+.45","175*7+300","700*3+(1200-700)*8","48*21000-750000","96/(96+4)*100","70*.23+30*.17","(.08-.02)*5000000-190000"],expr65=["310-90","255-(310-90)","72+13-16+5","5500*26","5500*28","5500*(28-26)","240/2000*100","240/2000*100-9","60*50-2400","12-7-1",".25*2","(12-7-1)-.25*2","130*8","130*8+280","650*4+350*7","1200*(.17-.13)","1200*(.17-.13)*23000","1200*(.17-.13)*23000-850000","40*.25","60*.15","(40*.25+60*.15)/100*100"];
const w={BAContent:{}};for(let n=7;n<=13;n++)w.BAContent['course-'+String(n).padStart(2,'0')]={numericDrills:[]};
function load(file){vm.runInNewContext(fs.readFileSync(path.join(root,'learning',file),'utf8'),{window:w},{timeout:5000})}
load('level2-numeric-v64.js');load('level2-multistep-v65.js');
const qs=Object.values(w.BAContent).flatMap(c=>c.numericDrills.flatMap(g=>g.questions));
const x64=qs.filter(q=>q.id.includes('-v64-')),x65=qs.filter(q=>q.id.includes('-v65-'));
const fail=[];
function check(bank,expressions,name){if(bank.length!==expressions.length)fail.push(name+' expected '+expressions.length+' questions, got '+bank.length);
 for(let i=0;i<bank.length;i++){const q=bank[i],exp=expressions[i];if(!exp)continue;const numeric=vm.runInNewContext(exp,{Math},{timeout:1000});
 const tol=Math.max(.001,Math.abs(numeric)*.000001);
 if(!Number.isFinite(numeric)||Math.abs(numeric-q.v)>tol)fail.push('Mismatched '+q.id+' source key='+q.v+' independent='+numeric);
 if(!(q.tolerance>0)||!q.e||!q.p||!q.u)fail.push('Incomplete grading or remediation data '+q.id);
 }}
check(x64,expr64,'v64');check(x65,expr65,'v65');
const ids=qs.map(q=>q.id);if(new Set(ids).size!==ids.length)fail.push('Duplicate numeric IDs');
const grader=w.BANumericGrade;
for(const q of qs){if(!grader.check(String(q.v),q))fail.push('Grader rejected its own answer '+q.id)}
for(const invalid of ['Infinity','NaN','1e10','1,2,3','0x10',''])if(grader.parse(invalid)!==null)fail.push('Accepted invalid input '+invalid);
console.log(JSON.stringify({status:fail.length?'FAIL':'PASS',courseCount:7,v64:x64.length,v65:x65.length,independentNumericAnswers:x64.length+x65.length,invalidInputCases:6,failures:fail},null,2));
if(fail.length)process.exitCode=1;
