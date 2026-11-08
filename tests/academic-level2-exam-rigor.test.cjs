/* Internal audit of Level 2 case difficulty and selected multidimensional arithmetic.
 * Real assessment quality still requires independent examination of student work.
 */
const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const context={BAContent:{}};
for(let n=7;n<=13;n++){
 const id='course-'+String(n).padStart(2,'0');
 context.BAContent[id]={id,modules:[],applications:[],sectionExams:[],portfolioSections:[]};
}
for(const path of ['learning/level2-capstone-v55.js','learning/level2-corporate-analysis-v67.js','learning/level2-decision-labs-v68.js','learning/level2-independent-exams-v128.js']){
 new Function('window',fs.readFileSync(path,'utf8'))(context);
}
const courses=Array.from({length:7},(_,i)=>context.BAContent['course-'+String(i+7).padStart(2,'0')]);
const close=(a,b,tol=.02)=>assert.ok(Math.abs(a-b)<=tol,'Expected '+a+' ≈ '+b);
test('seven optional independent exams retain grade keys and gain domain-specific board defenses',()=>{
 const domains=['receivable days','discount rate','variable unit cost','cash collection','forecast miss','retention benefit','capacity limit'];
 courses.forEach((c,i)=>{
  const e=c.sectionExams.find(x=>x.id==='c'+c.id.slice(-2)+'-v128-independent-exam');
  assert.ok(e,'Missing independent exam '+c.id);
  assert.equal(e.optional,true,'Independent exam must remain optional');
  assert.equal(e.minutes,0,'No change to required workload accounting');
  assert.equal(e.questions.length,2,'Two-item numeric bank preserved');
  assert.ok(e.written.includes(domains[i]),c.id+' lacks targeted stress defense');
  assert.ok(e.written.includes('competing course of action'),c.id+' lacks alternative');
  assert.ok(e.written.includes('independent review'),c.id+' falsely implies automatic grading');
  assert.ok(e.questions.every(q=>Number.isInteger(q.correct)&&q.correct>=0&&q.correct<q.options.length),c.id+' invalid numeric key');
 });
});
test('Peregrine integrated finance case reconciles operating and discounted investment arithmetic',()=>{
 const revenue=400+300-30,ebit=80+45-20-5,ni=(ebit-20)*.75,cfo=ni+30-25-15+10;
 assert.equal(revenue,670);assert.equal(ebit,100);assert.equal(ni,60);assert.equal(cfo,60);
 assert.equal(cfo-70,-10);
 const pv=1/1.1+1/(1.1**2)+1/(1.1**3);
 const fullFCF=(8-20/3)*.75+20/3;
 const phasedFCF=(5-10/3)*.75+10/3;
 close(-20+fullFCF*pv,-.933,.01);
 close(-10+phasedFCF*pv,1.399,.01);
 assert.ok(-10+phasedFCF*pv > -20+fullFCF*pv);
 const exam=context.BAContent['course-08'].sectionExams.find(e=>e.id==='l2-v55-performance-exam');
 assert.ok(exam&&exam.questions.length===5);
 assert.equal(exam.questions[4].options[exam.questions[4].correct],'Phased, subject to capacity and liquidity');
});
test('Astra launch models capacity, gross contribution and competitive downside',()=>{
 const lift=600/5000-500/5000;close(lift,.02,.00001);
 const unconstrained=2000*(400-250)-200000;
 const capacityConstrained=1500*(400-250)-200000;
 const warehouseIncrement=500*(400-250)-100000;
 assert.equal(unconstrained,100000);
 assert.equal(capacityConstrained,25000);
 assert.equal(warehouseIncrement,-25000);
 assert.equal(9500*(105-60),427500);
 assert.equal(8800*(105-60),396000);
 const exam=context.BAContent['course-10'].sectionExams.find(e=>e.id==='l2-v55-market-exam');
 assert.ok(exam&&exam.questions.length===5);
 assert.equal(exam.questions[3].options[exam.questions[3].correct],'−25k');
});
test('Helix alternative choice reconciles cash-floor, financing and NPV without conflating them',()=>{
 const noAction=40+12-15-20;
 const extension=40+12-15-10-.45;
 const full=40-8+12+3.375-.45-15-10;
 const staged=40-3+12+1.875-.45-15-10;
 assert.equal(noAction,17);
 close(extension,26.55,.00001);
 close(full,21.925,.00001);
 close(staged,25.425,.00001);
 const twoYear=1/1.1+1/(1.1**2);
 close(-8+4.5*twoYear,-.19,.01);
 close(-3+2.5*twoYear,1.339,.01);
 assert.ok(staged>20&&full>20&&noAction<20);
 const exam=context.BAContent['course-12'].sectionExams.find(e=>e.id==='l2-v55-restructure-exam');
 assert.ok(exam&&exam.questions.length===5);
 assert.equal(exam.questions[4].options[exam.questions[4].correct],'Stage, subject to legal and service constraints');
});
test('board-level cases include documented alternatives, linked downsides and self-review limits',()=>{
 for(const c of courses){
  const applications=c.applications||[],portfolios=c.portfolioSections||[];
  assert.ok(applications.some(a=>a.requirements?.some(r=>/joint|adverse|two jointly|correlated/i.test(r))),c.id+' lacks adverse case requirement');
  assert.ok(portfolios.some(p=>p.requirements?.some(r=>/alternative|strategies|competing/i.test(r))),c.id+' lacks competing board strategy');
  const exam=c.sectionExams.find(x=>x.id.includes('v128-independent-exam'));
  assert.ok(exam?.written.includes('self-review is not external academic grading'),c.id+' grading limitation missing');
 }
});
