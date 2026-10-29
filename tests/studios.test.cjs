const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const L=require('../learning/core.js');
function content(){const x={window:{BAContent:{}}};vm.createContext(x);for(const f of ['level1.js','level1-expansion-a.js','level1-expansion-b.js','level1-studios-a.js','level1-studios-b.js','level1-studios-c.js','level2.js','level3.js'])vm.runInContext(fs.readFileSync('learning/'+f,'utf8'),x);return x.window.BAContent}
test('Version 31 course identities, previous content and 111.5 baseline remain intact',()=>{
 const all=content(),level=Object.entries(all).filter(([id])=>Number(id.slice(-2))<=6);
 assert.equal(level.length,6);assert.equal(level.reduce((n,[,c])=>n+L.workload(c).minutes,0),8040);
 assert.equal(level.filter(([,c])=>c.sectionExams?.length).length,3);
 assert.equal(Object.keys(all).length,9);
 assert.equal(all['course-02'].modules.slice(0,6).map(m=>m.id).join(','),['course-02-m1','course-02-m2','course-02-m3','course-02-m4','course-02-m5','course-02-m6'].join(','));
});
test('capital-budget studio has traceable, distinct and coherent evidence',()=>{
 const c=content()['course-02'],exam=c.sectionExams[0],portfolio=c.portfolioSections[0],ids=c.modules.flatMap(m=>m.lessons.map(l=>l.id));
 assert.equal(c.modules.length,7);assert.equal(ids.length,8);assert.equal(new Set(ids).size,8);
 assert.equal(c.applications.length,4);assert.equal(exam.questions.length,5);assert.equal(new Set(exam.questions.map(q=>q.id)).size,5);
 assert.ok(exam.questions.every(q=>ids.includes(q.lessonId)&&q.explanation.length>70&&q.remediation.length>50));
 assert.equal(portfolio.requirements.length,4);assert.equal(L.workload(c).minutes,1560);
 for(const lesson of c.modules[6].lessons){assert.equal(lesson.tutor.steps.length,4);assert.ok(lesson.body.every(p=>p.length>200))}
});
test('independent cash-flow, scenario, threshold and information-value calculations',()=>{
 const annuity=(1-1.1**-5)/.1,terminal=60/1.1**5,base=-270+62.25*annuity+terminal,down=-270+51*annuity+terminal;
 assert.ok(Math.abs(base-3.23175578)<1e-6);assert.ok(Math.abs(down+39.41459538)<1e-6);
 assert.ok(Math.abs(.6*base+.4*down+13.82678468)<1e-6);
 assert.ok(Math.abs(.6*base-4+2.06094653)<1e-6);
 assert.ok(Math.abs((((270-terminal)/annuity+9)/.75)-93.86329462)<1e-6);
 assert.ok(Math.abs((((270-30/1.1**5)/annuity+9)/.75)-100.41519385)<1e-6);
});
test('new section cannot inherit old mastery, but old answers and drafts persist',()=>{
 const c=content()['course-02'],db=L.empty(),s=L.state(db,c.id),exam=c.sectionExams[0],kind='sectionExam-'+exam.id;
 s.drafts.portfolioExtension='Prior executive pack';s.reviews.portfolioExtension={0:3};
 for(const q of exam.questions){(s.answers[kind] ||= {})[q.id]=q.correct}
 assert.equal(L.grade(db,c,kind).score,100);
 assert.equal(L.mastery(db,c).sections,false);
 s.drafts[kind]='Independent dated model';s.reviews[kind]={0:3,1:3,2:3,3:3};
 assert.equal(L.mastery(db,c).sections,true);assert.equal(L.mastery(db,c).sectionPortfolios,false);
 assert.equal(s.drafts.portfolioExtension,'Prior executive pack');assert.equal(s.attempts.length,1);
});
test('financial literacy cash bridge and joint covenant downside reconcile independently',()=>{
 const c=content()['course-06'],exam=c.sectionExams[0],ids=c.modules.flatMap(m=>m.lessons.map(l=>l.id));
 assert.equal(c.modules.length,7);assert.equal(c.applications.length,4);assert.equal(exam.questions.length,5);
 assert.equal(new Set(ids).size,8);assert.ok(exam.questions.every(q=>ids.includes(q.lessonId)&&q.remediation.length>45));
 assert.equal(L.workload(c).minutes,1560);
 assert.equal(75+45-35-20+10,75);assert.equal(75-70,5);
 assert.ok(Math.abs(340/165-2.060606)<1e-5);assert.equal(165/20,8.25);
 assert.ok(400/105>3);assert.equal(105/30,3.5);
 assert.ok(Math.abs(400/3-133.333333)<1e-5);
 const db=L.empty(),s=L.state(db,c.id),kind='sectionExam-'+exam.id;
 for(const q of exam.questions)(s.answers[kind] ||= {})[q.id]=q.correct;
 assert.equal(L.grade(db,c,kind).score,100);assert.equal(L.mastery(db,c).sections,false);
 s.drafts[kind]='Reconciled independent analysis';s.reviews[kind]={0:3,1:3,2:3,3:3};
 assert.equal(L.mastery(db,c).sections,true);
});
test('enterprise structure studio reconciles segment economics and preserves earlier evidence',()=>{
 const c=content()['course-01'],exam=c.sectionExams[0],ids=c.modules.flatMap(m=>m.lessons.map(l=>l.id));
 assert.equal(c.modules.length,7);assert.equal(ids.length,8);assert.equal(new Set(ids).size,8);
 assert.equal(c.applications.length,4);assert.equal(exam.questions.length,5);assert.equal(c.portfolioSections.length,1);
 assert.ok(exam.questions.every(q=>ids.includes(q.lessonId)&&q.explanation.length>70&&q.remediation.length>50));
 assert.equal(L.workload(c).minutes,1560);
 assert.equal((135+72-36)*.75,128.25);assert.equal(128.25/1350,.095);
 assert.equal(128.25-.1*1350,-6.75);
 assert.equal(32*.75-200*.1,4);assert.equal(18*.75-100*.1,3.5);
 assert.equal(18*.75-230*.1,-9.5);assert.equal(90+75-20,145);
 const db=L.empty(),s=L.state(db,c.id),kind='sectionExam-'+exam.id;
 s.drafts.portfolioExtension='Previous board pack';
 for(const q of exam.questions)(s.answers[kind] ||= {})[q.id]=q.correct;
 assert.equal(L.grade(db,c,kind).score,100);assert.equal(L.mastery(db,c).sections,false);
 assert.equal(s.drafts.portfolioExtension,'Previous board pack');
});
