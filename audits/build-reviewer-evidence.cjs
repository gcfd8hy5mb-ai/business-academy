/* Business Academy: read-only reviewer evidence snapshot for Levels 1–2.
 * Run from repo root: node audits/build-reviewer-evidence.cjs
 * Uses only authored coursework in index.html order, without writing to storage.
 * Numeric workload totals are scheduled/assigned minutes, not measured study time.
 */
'use strict';
const fs=require('node:fs');
const path=require('node:path');
function build(root=path.resolve(__dirname,'..')){
 const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
 const scripts=[...html.matchAll(/<script\b[^>]*\bsrc="([^"]+)"/g)].map(x=>x[1].split('?')[0]);
 const selected=scripts.filter(p=>/^learning\/(?:level1|level2|level1-level2)/.test(p)&&!p.includes('level1-level3'));
 const context={BAContent:{}};
 const loaded=[];
 for(const file of selected){
  new Function('window',fs.readFileSync(path.join(root,file),'utf8'))(context);
  loaded.push(file);
 }
 new Function('window',fs.readFileSync(path.join(root,'learning/workload-audit-v130.js'),'utf8'))(context);
 const out=[];
 const sum=x=>x.reduce((a,b)=>a+b,0);
 for(let n=1;n<=13;n++){
  const id='course-'+String(n).padStart(2,'0'),c=context.BAContent[id];
  if(!c)throw Error('Missing course '+id);
  const lessons=c.modules.flatMap(m=>m.lessons||[]);
  const requiredAssessments=[c.practice,c.exam,c.advancedExam,...(c.sectionExams||[])].filter(x=>x&&!x.optional);
  const optionalAssessments=[c.practice,c.exam,c.advancedExam,...(c.sectionExams||[])].filter(x=>x&&x.optional);
  const worksheet=c.portfolioSections||[],apps=c.applications||[],drills=c.numericDrills||[];
  const allQuestions=[...requiredAssessments,...optionalAssessments].flatMap(a=>a.questions||[]);
  const workload=context.BAWorkloadAudit.detail(c);
  const outcomes=(c.outcomes||[]).map((statement,i)=>({
   code:id.toUpperCase()+'-LO'+String(i+1).padStart(2,'0'),
   statement,
   candidateEvidence:{
    lessonTitles:lessons.slice(0,4).map(l=>l.title),
    requiredAssessments:requiredAssessments.map(x=>x.id||'base-'+(x.title||'assessment')).slice(0,5),
    portfolioTasks:[...(c.portfolio?[c.portfolio.title||'Core portfolio']:[]),...worksheet.map(x=>x.title||x.id)].slice(0,5)
   },
   verification:'NEEDS_EXPERT_ALIGNMENT_REVIEW'
  }));
  out.push({
   id,level:n<=6?1:2,status:c.status||'authoring status unspecified',
   outcomes,modules:c.modules.length,lessons:lessons.length,
   readings:(c.readings||[]).length,readingsWithUrls:(c.readings||[]).filter(r=>/^https:\/\//.test(r.url||'')).length,
   requiredExamCount:requiredAssessments.length,optionalExamCount:optionalAssessments.length,
   gradedQuestions:allQuestions.length,
   numericDrills:drills.length,numericDrillQuestions:drills.flatMap(d=>d.questions||[]).length,
   applications:apps.length,portfolioSections:worksheet.length,corePortfolio:Boolean(c.portfolio),
   assignedMinutes:workload.total,assignedHours:Math.round(workload.total/60*10)/10,
   workloadBlocks:workload.blocks,
   longLessonsWithBriefBodies:workload.longLessonsWithBriefBodies,
   repeatedQuestionOccurrences:workload.inCourseExactRepeatedQuestionOccurrences,
   claim:'Content inventory, not academic credit, observed completion, or independently verified instruction'
  });
 }
 return {snapshot:'2026-11-08',scope:'Levels 1–2 only; excludes shared v126/v127 requiring Level 3',scriptsLoaded:loaded.length,
  courses:out,total:{
   courses:out.length,lessons:sum(out.map(c=>c.lessons)),
   requiredExams:sum(out.map(c=>c.requiredExamCount)),optionalExams:sum(out.map(c=>c.optionalExamCount)),
   questions:sum(out.map(c=>c.gradedQuestions)),numericDrills:sum(out.map(c=>c.numericDrills)),
   assignedMinutes:sum(out.map(c=>c.assignedMinutes)),
   longLessonsWithBriefBodies:sum(out.map(c=>c.longLessonsWithBriefBodies)),
   exactRepeatedQuestionOccurrences:sum(out.map(c=>c.repeatedQuestionOccurrences))
  },
  evidenceLimitations:[
   'Module/assessment presence does not prove any particular learning objective is achieved.',
   'Assigned minutes are estimates, not actual time-on-task, credit hours, or measured learner achievement.',
   'Self-assessed written submissions do not establish independent human examiner grading.',
   'Source URLs are inventoried only, not verified as reachable or valid by this generator.',
   'Level 3-dependent shared numeric and independent assessment scripts are deliberately omitted here.',
   'No accreditation, degree equivalence, verified university affiliation, or student outcomes are inferred.'
  ]};
}
if(require.main===module){
 const report=build();
 if(process.argv.includes('--json'))process.stdout.write(JSON.stringify(report,null,2)+'\n');
 else{
  const lines=[
   '# Reviewer evidence inventory — Business Academy Levels 1–2',
   '',
   '> Automatically derived from authored course metadata. **Not independent academic review or evidence of actual learner achievement.**',
   '',
   'Source-scope: '+report.scriptsLoaded+' Level 1–2 curriculum scripts in production index order, excluding shared Level 1–3 addenda.',
   '',
   '| Course | Level | Objectives | Lessons | Assigned hours* | Required exam sets | Optional exam sets | Objective questions | Numeric drills | Applications | Portfolio sections | Long lessons with brief bodies |',
   '|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|'
  ];
  for(const c of report.courses)lines.push('| '+c.id+' | '+c.level+' | '+c.outcomes.length+' | '+c.lessons+' | '+c.assignedHours+' | '+c.requiredExamCount+' | '+c.optionalExamCount+' | '+c.gradedQuestions+' | '+c.numericDrills+' | '+c.applications+' | '+c.portfolioSections+' | '+c.longLessonsWithBriefBodies+' |');
  lines.push('','*Assigned hours are planned activity durations from metadata, not verified time spent or college credit.*','','## Provisional objective-to-assessment evidence pointers','');
  for(const c of report.courses){
   lines.push('### '+c.id+' — Level '+c.level);
   if(!c.outcomes.length)lines.push('- **Gap:** No declared outcome statements on this authored record.');
   for(const lo of c.outcomes){
    lines.push('- **'+lo.code+'** '+lo.statement);
    lines.push('  - Candidate required exams: '+(lo.candidateEvidence.requiredAssessments.join(', ')||'None'));
    lines.push('  - Candidate portfolio evidence: '+(lo.candidateEvidence.portfolioTasks.join('; ')||'None'));
    lines.push('  - **Alignment status: unverified** — reviewer must inspect the exact lesson, task and scoring rubric.');
   }
   lines.push('');
  }
  lines.push('## Critical limitations and required reviewer action','');
  for(const gap of report.evidenceLimitations)lines.push('- '+gap);
  process.stdout.write(lines.join('\n')+'\n');
 }
}
module.exports={build};
