/* Level 3 v78 — mastery prerequisite repair and assessment answer-position balance. */
(function(){'use strict';
for(let num=14;num<=20;num++){
const id='course-'+num,c=window.BAContent[id];if(!c)throw Error('Missing Level 3 '+id);
const source=(c.sectionExams||[]).find(x=>x.id==='c'+num+'-v77-exam');
if(!source||source.questions.length!==4)throw Error('Missing Level 3 cumulative exam '+id);
if(!c.practice||!(c.practice.questions||[]).length){
c.practice={id:'c'+num+'-v78-practice',title:'Level 3 quantitative mastery practice',minutes:90,questions:source.questions.map((q,i)=>({
id:'c'+num+'-v78-p'+(i+1),prompt:'Practice: '+q.prompt,options:q.options.slice(),correct:q.correct,explanation:q.explanation,remediation:q.remediation||'Review the corresponding model and calculate independently.'
}))};
}
// V77 and V76 template assessments had answer index 0 for every question. Spread correct positions
// deterministically, keeping options and the existing answer explanation paired.
for(const exam of c.sectionExams||[]){
if(!exam.questions)continue;
exam.questions.forEach((q,i)=>{
if(!Array.isArray(q.options)||q.options.length<2||!Number.isInteger(q.correct)||q.correct<0||q.correct>=q.options.length)throw Error('Invalid Level 3 question '+q.id);
const shift=(i+Number(num))%q.options.length;
if(shift){const old=q.options.slice(),correctText=old[q.correct];q.options=old.slice(shift).concat(old.slice(0,shift));q.correct=q.options.indexOf(correctText);}
});
}
if(c.practice?.questions) c.practice.questions.forEach((q,i)=>{
const shift=(i+Number(num)+1)%q.options.length;
if(shift){const old=q.options.slice(),answer=old[q.correct];q.options=old.slice(shift).concat(old.slice(0,shift));q.correct=q.options.indexOf(answer);}
});
}
window.BAL3V78={masteryPracticeCoverage:7,balancedExamPositions:true};
})();