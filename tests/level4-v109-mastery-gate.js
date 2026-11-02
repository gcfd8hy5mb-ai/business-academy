const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const w={window:{BAContent:{}}};vm.createContext(w);vm.runInContext(fs.readFileSync('learning/core.js','utf8'),w);
const L=w.window.BALearning,store={schema:1,courses:{}};
const course={id:'course-21',modules:[{lessons:[{id:'a'}]}],sectionExams:[{id:'s',questions:[{id:'q',correct:0}],rubric:['Accuracy']}],portfolioSections:[{id:'p',rubric:['Evidence']}],applications:[],practice:undefined};
const s=L.state(store,course.id);s.lessons.push('a');s.attempts.push({kind:'sectionExam-s',score:100});s.drafts['sectionExam-s']='Independent calculation';s.reviews['sectionExam-s']=[4];s.drafts['portfolioSection-p']='Independent portfolio';s.reviews['portfolioSection-p']=[4];
assert.equal(L.mastery(store,course).mastered,true,'No standalone practice should not be an impossible gate');
const withPractice={...course,practice:{questions:[{id:'p1',correct:0}]}};assert.equal(L.mastery(store,withPractice).mastered,false,'Explicit practice still required');
s.attempts.push({kind:'practice',score:85});assert.equal(L.mastery(store,withPractice).mastered,true);
console.log('Level 4 v109 mastery gates verified: optional practice and required practice.');
