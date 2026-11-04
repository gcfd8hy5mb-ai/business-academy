/* v130 — non-invasive audit summaries from authored course metadata. These are assigned minutes, NOT independently validated learning hours. */
(function(){'use strict';
const sum=(items)=>Array.isArray(items)?items.reduce((n,x)=>n+(Number.isFinite(x?.minutes)?x.minutes:0),0):0;
function detail(c){
 const lessons=(c.modules||[]).flatMap(m=>m.lessons||[]);
 const exams=[c.practice,c.exam,c.advancedExam,...(c.sectionExams||[])].filter(Boolean);
 const required=exams.filter(e=>!e.optional);
 const optional=exams.filter(e=>e.optional);
 const blocks={
  lessons:sum(lessons),
  readings:sum(c.readings),
  applications:sum(c.applications),
  portfolio:sum(c.portfolioSections)+(c.portfolio?.minutes||0)+(c.portfolioExtension?.minutes||0),
  requiredExams:sum(required)
 };
 const total=Object.values(blocks).reduce((s,v)=>s+v,0);
 const tooShort=lessons.filter(l=>l.minutes>=90&&Array.isArray(l.body)&&l.body.join(' ').trim().split(/\s+/).filter(Boolean).length<200).length;
 const norm=p=>String(p||'').toLowerCase().trim().replace(/\s+/g,' ');
 const promptMap=new Map();let insideRepeat=0;
 for(const e of exams)for(const q of e.questions||[]){const key=norm(q.prompt);if(!key)continue;if(promptMap.has(key))insideRepeat++;else promptMap.set(key,q.id)}
 const hasV104=required.some(e=>(e.questions||[]).some(q=>String(q.id).includes('-v104-q')));
 const hasV58=required.some(e=>String(e.id).includes('v58-exam'));
 return {courseId:c.id,blocks,total,optionalExamCount:optional.length,optionalExamMinutesExcluded:sum(optional),lessons:lessons.length,longLessonsWithBriefBodies:tooShort,inCourseExactRepeatedQuestionOccurrences:insideRepeat,legacyRepeatedBankFlag:hasV104||hasV58};
}
window.BAWorkloadAudit={detail,assignedHours:c=>Math.round(detail(c).total/6)/10};
})();