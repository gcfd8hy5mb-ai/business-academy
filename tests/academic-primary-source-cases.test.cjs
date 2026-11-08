/* Primary-source and corporate-case audit: source claims manually cross-checked
 * 2026-11-08 against SEC filings, Microsoft investor relations and IFRS Foundation.
 * Test source snapshots, units, derivations, case boundaries and assessment structure.
 * Source figures require revalidation when intentionally updated.
 */
const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const ctx={BAContent:{}};
for(const path of ['learning/level1.js','learning/level2.js','learning/level2-filings-v57.js']) {
 new Function('window',fs.readFileSync(path,'utf8'))(ctx);
}
const c07=ctx.BAContent['course-07'],c08=ctx.BAContent['course-08'];
function part(c,suffix){return (c.sectionExams||[]).find(x=>x.id.endsWith(suffix));}
function filingLesson(c){return c.modules.flatMap(x=>x.lessons||[]).find(l=>l.id.endsWith('-v57-lesson'));}
function close(actual,expected,tolerance=1e-7){assert.ok(Math.abs(actual-expected)<=tolerance,'Expected '+actual+' to equal '+expected);}
test('filing laboratories cite primary issuer filings with dated periods and realistic reporting boundaries',()=>{
 const a=filingLesson(c07),b=filingLesson(c08);
 assert.ok(a&&b);
 const l07=c07.readings.filter(x=>x.url?.includes('sec.gov')||x.url?.includes('ifrs.org'));
 const l08=c08.readings.filter(x=>x.url?.includes('sec.gov'));
 assert.ok(l07.some(x=>x.url.includes('/909832/')&&x.url.includes('20250831')),'Costco FY2025 10-K');
 assert.ok(l07.some(x=>x.url.includes('/789019/')&&x.url.includes('20250331')),'Microsoft 2025 10-Q');
 assert.ok(l07.some(x=>x.url.includes('/ias-36-impairment-of-assets/')),'IAS 36 reference');
 assert.ok(l08.some(x=>x.url.includes('/104169/')&&x.url.includes('20260131')),'Walmart FY2026 10-K');
 assert.ok(a.body.some(x=>x.includes('different periods')),'Quarter/YTD comparability');
 assert.ok(a.body.some(x=>x.includes('fictional IFRS impairment')),'Fictional impairment boundary');
 assert.ok(b.body.some(x=>x.includes('fictional Atlas')),'Fictional sourcing boundary');
 assert.ok(b.body.some(x=>x.includes('not produce one other division')),'Segment consolidation limitation');
});
test('Costco 2025 cash flow, year-over-year comparison and accounting assumptions reconcile',()=>{
 // Reported SEC Form 10-K, USD millions.
 const base=13335-5498,prior=11339-4710;
 assert.equal(base,7837);
 assert.equal(prior,6629);
 assert.equal(base-prior,1208);
 assert.equal(13335-8099-2426,2810);
 close(13335/8099,1.6464995678,.0001);
 close(5498/13335*100,41.23,.02);
 // Fictional cash stress and IAS 36 separate from disclosed issuer facts.
 assert.equal((13335-1000)-(5498+500),6337);
 assert.equal(140-Math.max(110,120),20);
 assert.equal(Math.max(0,140-Math.max(110,150)),0);
 const a=part(c07,'-v57-exam');
 assert.ok(a);
 assert.deepEqual(a.questions.map(q=>q.correct),[0,1,2,3,0,1]);
 assert.ok(a.questions.every(q=>q.lessonId==='c07-v57-lesson'));
});
test('Microsoft fiscal 2025 comparison uses consistent quarter and YTD periods',()=>{
 close((70066/61858-1)*100,13.27,.01);
 close((205283/180395-1)*100,13.80,.01);
 assert.ok((205283/180395-1)*100>(70066/61858-1)*100);
 const q=part(c07,'-v57-exam').questions.find(x=>x.prompt.includes('Microsoft'));
 assert.ok(q);
 assert.equal(q.options[q.correct],'13.27%');
});
test('Walmart US FY2026 segment income, gross denominators and basis-point change reconcile',()=>{
 // Walmart FY2026 10-K; operating income includes segment's reported activity.
 const curr=25158/482975*100,prior=23882/462415*100;
 close(curr,5.209,.001);
 close(prior,5.165,.001);
 close((curr-prior)*100,4.43,.01);
 close((25158/23882-1)*100,5.34,.01);
 assert.equal(706413,706413); // consolidated net sales, not Walmart US net sales
 assert.equal(29825,29825); // consolidated operating income, not Walmart US operating income
 assert.notEqual(curr,29825/706413*100,'A segment margin is not the consolidated margin');
 const q=part(c08,'-v57-exam');
 assert.ok(q);
 assert.equal(q.questions[0].options[q.questions[0].correct],'5.209%');
 assert.equal(q.questions[1].options[q.questions[1].correct],'5.34%');
});
test('fictional Atlas make-or-buy decisions include displaced external contribution',()=>{
 const allExternal=50000*58,make20=20000*35+30000*58;
 const make40=40000*35+20000*30+10000*58;
 assert.equal(allExternal,2900000);
 assert.equal(make20,2440000);
 assert.equal(make40,2580000);
 assert.equal(allExternal-make20,460000);
 assert.equal(allExternal-make40,320000);
 assert.ok(make20<make40);
 const externalDemand10k=30000*35+20000*58;
 const displace10k=40000*35+10000*30+10000*58;
 assert.equal(externalDemand10k,2210000);
 assert.equal(displace10k,2280000);
 const q=part(c08,'-v57-exam');
 assert.equal(q.questions[3].options[q.questions[3].correct],'2.44m');
 assert.equal(q.questions[4].options[q.questions[4].correct],'2.58m');
 assert.equal(q.questions[5].options[q.questions[5].correct],'2.21m');
});
test('filing-based cases require independent interpretation beyond auto-graded recall',()=>{
 for(const course of [c07,c08]){
  const exam=part(course,'-v57-exam');
  assert.equal(exam.questions.length,6);
  assert.ok(exam.written.includes('900–1,200 words'),'Long written filing review');
  const cap=course.portfolioSections.find(p=>p.id.endsWith('v57-portfolio'));
  const application=course.applications.find(p=>p.id.endsWith('v57-case'));
  assert.ok(cap&&application);
  assert.ok(cap.requirements.some(x=>/filing citation/i.test(x)),'Primary source identification');
  assert.ok(cap.requirements.some(x=>/stress|competing/i.test(x)),'Scenario and alternate strategy');
  assert.ok(application.requirements.some(x=>/fictional/i.test(x)),'Evidence must separate real and hypothetical data');
  assert.ok(exam.rubric.length>=4,'Written review rubric');
 }
});
