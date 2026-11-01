/* Level 3 real mastery gates and saved-progress regression. */
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const ctx={window:{BAContent:{}},module:{exports:{}}};vm.createContext(ctx);
for(const name of ['core.js','level3.js','level3-advanced-v73.js','level3-corporate-depth-v74.js','level3-integrated-v75.js','level3-board-decisions-v76.js','level3-cumulative-v77.js','level3-mastery-v78.js','level3-final-depth-v79.js','level3-executive-labs-v80.js','level3-executive-synthesis-v81.js'])vm.runInContext(fs.readFileSync('learning/'+name,'utf8'),ctx,{filename:name});
const core=ctx.window.BALearning,store=core.empty();
assert.equal(core.KEY,'business-academy-learning-v1');
for(let n=14;n<=20;n++){
 const c=ctx.window.BAContent['course-'+n];c.id='course-'+n;
 const latest=c.sectionExams.find(e=>e.id==='c'+n+'-v81-exam');assert.ok(latest&&latest.questions.length===3,'Version 81 case exam must be included '+n);assert.ok(c.modules.some(m=>m.id==='c'+n+'-v81-module'),'Version 81 case lessons missing '+n);const s=core.state(store,c.id);
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
 const latestKind='sectionExam-'+latest.id;
 s.reviews[latestKind][0]=2; assert.equal(core.mastery(store,c).mastered,false,'Version 81 written failure must block mastery '+n); s.reviews[latestKind][0]=4;
 const first=latest.questions[0];s.answers[latestKind][first.id]=(first.correct+1)%first.options.length;
 const failedV81=core.grade(store,c,latestKind);assert.equal(failedV81.score,67,'A single wrong answer must fail the three-question Version 81 exam '+n);
 assert.equal(core.mastery(store,c).mastered,false,'Failed Version 81 case exam must revoke mastery '+n);
 s.answers[latestKind][first.id]=first.correct;
 const passedV81=core.grade(store,c,latestKind);assert.equal(passedV81.score,100,'Version 81 case exam retake must pass '+n);
 assert.equal(core.mastery(store,c).mastered,true,'Passing Version 81 case retake must restore mastery '+n);
 const last=n===20?c.sectionExams.find(e=>e.id==='l3-final-v77-exam'):c.sectionExams.at(-1);assert.ok(last,'Missing target retake exam '+n);const kind='sectionExam-'+last.id;if(n===20)assert.equal(last.questions.length,16,'Expanded final must be included in retake test');
 s.reviews[kind][0]=2;assert.equal(core.mastery(store,c).mastered,false,'Failed written rubric should block mastery '+n);s.reviews[kind][0]=4;
 const wrongCount=Math.floor(last.questions.length*.2)+1;const incorrect=last.questions.slice(0,wrongCount);for(const bad of incorrect)s.answers[kind][bad.id]=(bad.correct+1)%bad.options.length;const grade=core.grade(store,c,kind);assert.ok(grade.score<80,'Retake must genuinely fall below 80% '+n);assert.equal(core.mastery(store,c).mastered,false,'Failing latest attempt should revoke mastery '+n);
 for(const bad of incorrect)s.answers[kind][bad.id]=bad.correct;doQuiz(kind,last.questions);assert.equal(core.mastery(store,c).mastered,true,'Passing retake should restore mastery '+n);
}
const persisted=JSON.stringify(store);const mockStorage={getItem:key=>key===core.KEY?persisted:null};const restored=core.load(mockStorage);assert.equal(Object.keys(restored.courses).length,7);assert.equal(restored.courses['course-20'].attempts.length>0,true);
for(let n=14;n<=20;n++){
 const id='course-'+n,course=ctx.window.BAContent[id];
 const before=core.mastery(store,course),after=core.mastery(restored,course);
 assert.equal(before.mastered,true,'Pre-save course mastery missing '+n);
 assert.equal(after.mastered,true,'Saved Level 3 mastery not restored '+n);
 const stateBefore=core.state(store,id),stateAfter=core.state(restored,id);
 assert.equal(stateAfter.lessons.length,stateBefore.lessons.length,'Lesson completion changed during restore '+n);
 const v81='sectionExam-c'+n+'-v81-exam';
 assert.ok(stateAfter.answers[v81],'Version 81 answer state was lost on restore '+n);
 assert.equal(stateAfter.reviews[v81].length,stateBefore.reviews[v81].length,'Version 81 written rubric lost on restore '+n);
}

/* Failed attempts must remain failed after reload; no stale prior pass may master. */
const failedStore=JSON.parse(JSON.stringify(store));
const failingCourse=ctx.window.BAContent['course-20'],failingKind='sectionExam-c20-v81-exam';
const failureState=core.state(failedStore,'course-20');
const failedQuestion=failingCourse.sectionExams.find(e=>e.id==='c20-v81-exam').questions[0];
failureState.answers[failingKind][failedQuestion.id]=(failedQuestion.correct+1)%failedQuestion.options.length;
assert.equal(core.grade(failedStore,failingCourse,failingKind).score,67,'Expected failed case review');
assert.equal(core.mastery(failedStore,failingCourse).mastered,false,'Failed case exam must revoke mastery');
const failedSerialized=JSON.stringify(failedStore);
const failedRestored=core.load({getItem:key=>key===core.KEY?failedSerialized:null});
assert.equal(core.mastery(failedRestored,failingCourse).mastered,false,'Reload must not revive mastery after failed attempt');
const failedStateAfter=core.state(failedRestored,'course-20');
assert.equal(core.latest(failedStateAfter,failingKind).score,67,'Last failed attempt lost on reload');
failedStateAfter.answers[failingKind][failedQuestion.id]=failedQuestion.correct;
assert.equal(core.grade(failedRestored,failingCourse,failingKind).score,100,'Correct retake after reload should pass');
assert.equal(core.mastery(failedRestored,failingCourse).mastered,true,'Correct retake after reload should restore mastery');
console.log('Level 3 mastery and persistence regression passed: seven courses, written gates, failure and retakes');
