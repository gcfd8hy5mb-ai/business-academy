/* Academic QA v138: independently reconstructed Level 3 v91 completion-seminar mathematical regression.
 * Run: node audits/scripts/level3-math-regression-v138.cjs
 * Uses only Node built-ins, does not write learner progress or revise legacy questions. */
'use strict';
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const root=path.resolve(__dirname,'../..');
const fixtures=[{"course":"14","lesson":1,"expected":37.7,"tolerance":0.011,"token":"37.7m","formula":"()=>420*.18*.75+24-31-12"},{"course":"14","lesson":2,"expected":538.5714285714,"tolerance":0.011,"token":"538.57m","formula":"()=>37.7/(.09-.02)"},{"course":"14","lesson":3,"expected":7,"tolerance":0.011,"token":"$7m","formula":"()=>130-120+6-9"},{"course":"15","lesson":1,"expected":-130000,"tolerance":0.011,"token":"$130,000","formula":"()=>110000*42-250000-100000*45"},{"course":"15","lesson":2,"expected":0.8,"tolerance":0.011,"token":"$0.8m","formula":"()=>.6*2+.4*(-1)"},{"course":"15","lesson":3,"expected":600000,"tolerance":0.011,"token":"$600k","formula":"()=>1500000-900000"},{"course":"16","lesson":1,"expected":578512.396694,"tolerance":0.03,"token":"$578,512","formula":"()=>20000*(55/50)**(-2)*(55-20)"},{"course":"16","lesson":2,"expected":825,"tolerance":0.011,"token":"$825","formula":"()=>{let best=-Infinity;for(let a=0;a<=6;a++)for(let b=0;b<=9;b++)if(3*a+2*b<=24)best=Math.max(best,a*105+b*65);return best}"},{"course":"16","lesson":3,"expected":2000,"tolerance":0.011,"token":"$2k","formula":"()=>.1*100000-(.04*100000+4000)"},{"course":"17","lesson":1,"expected":15,"tolerance":0.011,"token":"15%","formula":"()=>(180-30)/1000*100"},{"course":"17","lesson":2,"expected":20,"tolerance":0.011,"token":"20%","formula":"()=>40/200*100"},{"course":"17","lesson":3,"expected":50,"tolerance":0.011,"token":"50%","formula":"()=>(18-12)/12*100"},{"course":"18","lesson":1,"expected":46.153846,"tolerance":0.011,"token":"46.15%","formula":"()=>6/(6+4+2.5+.5)*100"},{"course":"18","lesson":2,"expected":9,"tolerance":0.011,"token":"$9m","formula":"()=>Math.max(9,.25*30)"},{"course":"18","lesson":3,"expected":2.2,"tolerance":0.011,"token":"$2.2m","formula":"()=>7.2-4*.45-4*.6-.8"},{"course":"19","lesson":1,"expected":5.8,"tolerance":0.011,"token":"$5.8m","formula":"()=>(20-12)*1.1-3"},{"course":"19","lesson":2,"expected":5.65,"tolerance":0.011,"token":"$5.65m","formula":"()=>5*1.13"},{"course":"19","lesson":3,"expected":-0.406115,"tolerance":0.011,"token":"−€0.406m","formula":"()=>3*(1/1.09+1/(1.09**2)+1/(1.09**3))-8"},{"course":"20","lesson":1,"expected":50000,"tolerance":0.011,"token":"$50k","formula":"()=>80000*6-220000-80000*.15*10-90000"},{"course":"20","lesson":2,"expected":30000,"tolerance":0.011,"token":"$30k","formula":"()=>.15*(.5*2000000)-120000"},{"course":"20","lesson":3,"expected":150,"tolerance":0.011,"token":"150%","formula":"()=>(5-2)/2*100"}];
let failed=0;
const assert=(ok,message)=>{if(!ok){failed++;process.stderr.write('FAIL: '+message+'\n')}};
const content={};for(let n=14;n<=20;n++)content['course-'+n]={id:'course-'+n,modules:[],sectionExams:[],applications:[],portfolioSections:[]};
const window={BAContent:content};
const source=fs.readFileSync(path.join(root,'learning/level3-completion-seminars-v91.js'),'utf8');
vm.runInNewContext(source,{window},{filename:'level3-completion-seminars-v91.js',timeout:5000});
let checked=0;
for(const f of fixtures){
 const c=content['course-'+f.course],l=c.modules.flatMap(m=>m.lessons).find(l=>l.id==='c'+f.course+'-v90-lesson-'+f.lesson);
 assert(!!l,'Missing seminar '+f.course+':'+f.lesson);if(!l)continue;
 const computed=vm.runInNewContext('('+f.formula+')()',{Math},{timeout:1000});
 assert(Number.isFinite(computed),'Nonfinite computation '+l.id);
 assert(Math.abs(computed-f.expected)<=f.tolerance,'Incorrect independent expected result '+l.id+': '+computed+' != '+f.expected);
 assert(l.example.includes(f.token),'Explanation output changed or lacks verified answer '+l.id+' ('+f.token+')');
 checked++;
}
assert(fixtures.length===21,'Expected 21 Level 3 seminar fixtures');
const titles=new Set(Object.values(content).flatMap(c=>c.modules.flatMap(m=>m.lessons).map(l=>l.id)));
assert(titles.size===21,'Duplicate or missing seminar lesson IDs');
assert(Object.values(content).every(c=>c.sectionExams.length===1),'Expected one independently authored seminar exam per course');
const examAnswers=Object.values(content).flatMap(c=>c.sectionExams.flatMap(ex=>ex.questions));
assert(examAnswers.length===21,'Expected 21 questions');
for(const q of examAnswers)assert(Number.isInteger(q.correct)&&q.correct>=0&&q.correct<q.options.length,'Invalid correct-option index '+q.id);
console.log(JSON.stringify({status:failed?'FAIL':'PASS',independentlyRecomputedSeminarResults:checked,answerKeyIndicesChecked:examAnswers.length,failed},null,2));
if(failed)process.exitCode=1;
