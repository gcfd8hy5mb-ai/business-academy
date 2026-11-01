/* Level 3 real mastery gates and saved-progress regression. */
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const ctx={window:{BAContent:{}},module:{exports:{}}};vm.createContext(ctx);
for(const name of ['core.js','level3.js','level3-advanced-v73.js','level3-corporate-depth-v74.js','level3-integrated-v75.js','level3-board-decisions-v76.js','level3-cumulative-v77.js','level3-mastery-v78.js'])vm.runInContext(fs.readFileSync('learning/'+name,'utf8'),ctx,{filename:name});
const core=ctx.window.BALearning,store=core.empty();
assert.equal(core.KEY,'business-academy-learning-v1');
for(let n=14;n<=20;n++){
 const c=ctx.window.BAContent['course-'+n];c.id='course-'+n;
 const s=core.state(store,c.id);
 assert.equal(core.mastery(store,c).mastered,false,'Empty course should not master '+n);
 s.lessons=c.modules.flatMap(m=>m.lessons.map(l=>l.id));
 function doQuiz(kind,qs){s.answers[kind]={};qs.forEach(q=>s.answers[kind][q.id]=q.correct);const a=core.grade(store,c,kind);assert.equal(a.score,100,'Correct-answer score '+kind);return a;}
 doQuiz('practice',c.practice.questions);
 for(const exam of c.sectionExams){const kind='sectionExam-'+exam.id;doQuiz(kind,exam.questions);s.drafts[kind]='A standalone evidence-led essay with recalculated assumptions.';s.reviews[kind]=exam.rubric.map(()=>4);}
 for(const portfolio of c.portfolioSections){const key='portfolioSection-'+portfolio.id;s.drafts[key]='Independent work including evidence and financial scenario.';s.reviews[key]=portfolio.rubric.map(()=>4);}
 for(const app of c.applications||[]){const key='application-'+app.id;s.drafts[key]='Quantitative independent assignment with review.';s.reviews[key]=app.rubric.map(()=>4);}
 if(c.portfolio){s.drafts.portfolio='DCF and investment recommendation';s.reviews.portfolio=c.portfolio.rubric.map(()=>4);}
 if(c.exam){doQuiz('exam',c.exam.questions);s.drafts.exam='Written work';s.reviews.exam=c.exam.rubric.map(()=>4);}
 assert.equal(core.mastery(store,c).mastered,true,'Complete course should master '+n);
 const last=c.sectionExams.at(-1),kind='sectionExam-'+last.id;
 s.reviews[kind][0]=2;assert.equal(core.mastery(store,c).mastered,false,'Failed written rubric should block mastery '+n);s.reviews[kind][0]=4;
 const bad=last.questions[0];s.answers[kind][bad.id]=(bad.correct+1)%bad.options.length;const grade=core.grade(store,c,kind);assert.ok(grade.score<80||last.questions.length>5,'Retake test requires sufficient impact');assert.equal(core.mastery(store,c).mastered,false,'Failing latest attempt should revoke mastery '+n);
 s.answers[kind][bad.id]=bad.correct;doQuiz(kind,last.questions);assert.equal(core.mastery(store,c).mastered,true,'Passing retake should restore mastery '+n);
}
const persisted=JSON.stringify(store);const mockStorage={getItem:key=>key===core.KEY?persisted:null};const restored=core.load(mockStorage);assert.equal(Object.keys(restored.courses).length,7);assert.equal(restored.courses['course-20'].attempts.length>0,true);
console.log('Level 3 mastery and persistence regression passed: seven courses, written gates, failure and retakes');
