/* Authored teaching and assessment inventory, not external academic validation. */
'use strict';
const fs=require('node:fs'),path=require('node:path');
function review(root=path.resolve(__dirname,'..')){
 const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
 const scripts=[...html.matchAll(/<script\b[^>]*\bsrc="([^"]+)"/g)].map(m=>m[1].split('?')[0])
  .filter(p=>/^learning\/(?:level\d|level1-level2|level1-level3|level4-level5)/.test(p));
 const win={BAContent:{}};
 for(const file of scripts)new Function('window',fs.readFileSync(path.join(root,file),'utf8'))(win);
 const records=[];
 for(let n=1;n<=26;n++){
  const id='course-'+String(n).padStart(2,'0'),c=win.BAContent[id];
  if(!c)throw Error('Missing course '+id);
  const lessons=(c.modules||[]).flatMap(m=>m.lessons||[]);
  const allExams=[c.practice,c.exam,c.advancedExam,...(c.sectionExams||[])].filter(Boolean);
  const required=allExams.filter(e=>!e.optional);
  const questions=allExams.flatMap(e=>e.questions||[]);
  const lessonsById=new Set(lessons.map(l=>l.id));
  const portfolios=[...(c.portfolio?[c.portfolio]:[]),...(c.portfolioSections||[]),...(c.applications||[])];
  const missingLinks=questions.filter(q=>q.lessonId&&!lessonsById.has(q.lessonId)).map(q=>({question:q.id,lessonId:q.lessonId}));
  const shortExplanations=questions.filter(q=>String(q.explanation||'').trim().length<20).map(q=>q.id);
  const weakRubrics=portfolios.filter(p=>!Array.isArray(p.rubric)||p.rubric.length<3).map(p=>p.id||p.title);
  const defects=[];
  if(!c.outcomes?.length)defects.push('Missing outcomes');
  if(!lessons.length)defects.push('No lessons');
  if(!required.length)defects.push('No required exams');
  if(!portfolios.length)defects.push('No portfolio or casework');
  records.push({
   id,level:n<=6?1:n<=13?2:n<=20?3:n<=25?4:5,
   outcomes:(c.outcomes||[]).length,lessons:lessons.length,
   workedExamples:lessons.filter(l=>!!l.example).length,
   transferExercises:lessons.filter(l=>!!l.transfer).length,
   tutoringPrompts:lessons.filter(l=>!!l.tutor).length,
   requiredExams:required.length,optionalExams:allExams.length-required.length,
   assessedQuestions:questions.length,casework:portfolios.length,
   linkedSources:(c.readings||[]).filter(r=>/^https:\/\//.test(r.url||'')).length,
   missingLessonLinks:missingLinks,shortExplanationIds:shortExplanations,
   weakRubricIds:weakRubrics,defects,
   outcomeAlignment:'REQUIRES_EXPERT_REVIEW',answerAccuracy:'SELECTIVE_CHECKS_ONLY',
   writtenMarking:'NOT_INDEPENDENTLY_MARKED'
  });
 }
 return records;
}
if(require.main===module){
 const rows=review();
 if(process.argv.includes('--json'))process.stdout.write(JSON.stringify(rows,null,2)+'\n');
 else{
  const lines=['# Phase 4 five-level authored teaching/assessment evidence','',
  '> Structural inventory only. This is not academic equivalency or independent grading.','',
  '| Course | Lessons | Outcomes | Examples | Transfer activities | Required exams | Questions | Casework | Source URLs | Short explanations | Missing lesson links |',
  '|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|'];
  for(const c of rows)lines.push('| '+c.id+' | '+c.lessons+' | '+c.outcomes+' | '+c.workedExamples+' | '+c.transferExercises+' | '+c.requiredExams+' | '+c.assessedQuestions+' | '+c.casework+' | '+c.linkedSources+' | '+c.shortExplanationIds.length+' | '+c.missingLessonLinks.length+' |');
  lines.push('','## Expert-review limitations','','An authored outcome is not necessarily taught or assessed adequately. Auto-graded questions are not independent written marks. Each linked real-world source must be verified separately. Real iPhone and desktop acceptance remains necessary.','');
  for(const c of rows)if(c.defects.length||c.missingLessonLinks.length||c.weakRubricIds.length)lines.push('- '+c.id+': '+c.defects.join('; ')+'; '+c.missingLessonLinks.length+' lesson-link review flags; '+c.weakRubricIds.length+' rubric review flags');
  process.stdout.write(lines.join('\n')+'\n');
 }
}
module.exports={review};
