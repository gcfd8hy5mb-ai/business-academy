const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm'),L=require('../learning/core.js');
function content(){const x={window:{BAContent:{}}};vm.createContext(x);for(const f of ['level1.js','level1-expansion-a.js','level1-expansion-b.js','level1-studios-a.js','level1-studios-b.js','level1-studios-c.js','level1-studios-d.js','level1-studios-e.js','level1-studios-f.js','level1-analytics-v34.js'])vm.runInContext(fs.readFileSync('learning/'+f,'utf8'),x);return x.window.BAContent}
test('baseline and new statistics/regression IDs remain distinct and workload is assigned once',()=>{
 const rows=Object.values(content()).slice(0,6),c=rows[1];
 assert.equal(rows.reduce((n,v)=>n+L.workload(v).minutes,0),10290);
 assert.equal(c.modules.length,9);assert.equal(c.applications.length,8);assert.equal(c.sectionExams.length,3);assert.equal(c.portfolioSections.length,3);
 const ids=c.modules.flatMap(m=>m.lessons.map(l=>l.id));assert.equal(ids.length,12);assert.equal(new Set(ids).size,12);
 assert.equal(L.workload(c).minutes,2460);
 for(const l of c.modules.slice(-2).flatMap(m=>m.lessons)){assert.equal(l.tutor.steps.length,4);assert.ok(l.body.every(p=>p.length>200));assert.ok(l.example.length>180)}
 for(const e of c.sectionExams.slice(-2)){assert.equal(e.questions.length,5);assert.equal(new Set(e.questions.map(q=>q.id)).size,5);assert.ok(e.questions.every(q=>ids.includes(q.lessonId)&&q.remediation.length>45))}
});
test('independent sample inference and probability arithmetic',()=>{
 const values=[8,10,9,13,10],mean=values.reduce((a,b)=>a+b)/5,variance=values.reduce((n,x)=>n+(x-mean)**2,0)/4,se=Math.sqrt(variance/5);
 assert.equal(mean,10);assert.equal(variance,3.5);assert.ok(Math.abs(se-.8366600265)<1e-8);
 assert.ok(Math.abs((mean-2.776*se)-7.677431)<.001);
 assert.ok((mean-8)/se<2.776);
 const p=[.5,.3,.2],v=[40,10,-30],ev=v.reduce((n,x,i)=>n+p[i]*x,0);
 assert.equal(ev,17);assert.equal(v.reduce((n,x,i)=>n+p[i]*x*x,0)-ev*ev,721);
 assert.ok(Math.abs(.30/.42-5/7)<1e-12);assert.equal(.3*60+.12*(-25),15);
 assert.equal(15-(.4*60+.6*(-25))-5,1);
});
test('independent regression residuals and integer allocation',()=>{
 const x=[1,2,3,4],y=[3,5,4,8],mx=2.5,my=5,Sxx=x.reduce((n,v)=>n+(v-mx)**2,0),Sxy=x.reduce((n,v,i)=>n+(v-mx)*(y[i]-my),0),slope=Sxy/Sxx,intercept=my-slope*mx;
 assert.equal(Sxx,5);assert.equal(Sxy,7);assert.equal(slope,1.4);assert.equal(intercept,1.5);
 const residuals=y.map((v,i)=>v-(intercept+slope*x[i])),sse=residuals.reduce((n,v)=>n+v*v,0);
 assert.ok(Math.abs(sse-4.2)<1e-12);assert.ok(Math.abs((1-sse/14)-.7)<1e-12);
 assert.ok(Math.abs(Math.sqrt((sse/2)/Sxx)-Math.sqrt(.42))<1e-12);
 const projects=[[100,40,25],[80,50,22],[120,30,28]];
 function best(cap,hours){return Array.from({length:8},(_,mask)=>projects.reduce((o,p,i)=>({cap:o.cap+((mask>>i)&1)*p[0],hours:o.hours+((mask>>i)&1)*p[1],value:o.value+((mask>>i)&1)*p[2]}),{cap:0,hours:0,value:0})).filter(v=>v.cap<=cap&&v.hours<=hours).reduce((n,v)=>Math.max(n,v.value),0)}
 assert.equal(best(180,90),47);assert.equal(best(180,80),28);assert.equal(best(190,80),28);assert.equal(best(200,80),50);
});
test('new math exams require their own submitted and written evidence',()=>{
 const c=content()['course-02'],db=L.empty(),s=L.state(db,c.id);
 for(const a of c.sectionExams.slice(-2)){const kind='sectionExam-'+a.id;assert.equal(L.grade(db,c,kind),false);for(const q of a.questions)(s.answers[kind] ||= {})[q.id]=q.correct;assert.equal(L.grade(db,c,kind).score,100);s.drafts[kind]='Independently worked paper';s.reviews[kind]={0:3,1:3,2:3,3:3}}
 assert.equal(L.mastery(db,c).sections,false); // The older capital-budget exam is still required.
 assert.equal(s.attempts.length,2);
});
