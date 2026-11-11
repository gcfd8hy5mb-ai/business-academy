/* Conservative candidate mapping of 26 course outcomes to authored teaching,
 * questions and written work. A topical match is not academic validation.
 */
'use strict';
const fs=require('node:fs'),path=require('node:path');
const stop=new Set('the a an and or to of for in on with from by at each how can using use under into than then that this these those their which what when where why your against it its is are be as one two three four five new actual based model models test tests compare construct evaluate explain identify quantify analyse analyze demonstrate decision decisions calculate build'.split(' '));
function terms(s){return new Set(String(s||'').toLowerCase().replace(/[^a-z0-9]+/g,' ').split(/\s+/).filter(w=>w.length>=4&&!stop.has(w)));}
function intersection(a,b){let n=0;for(const x of a)if(b.has(x))n++;return n;}
function generate(root=path.resolve(__dirname,'..')){
 const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
 const paths=[...html.matchAll(/<script\b[^>]*\bsrc="([^"]+)"/g)].map(m=>m[1].split('?')[0]).filter(p=>/^learning\/(?:level\d|level1-level2|level1-level3|level4-level5)/.test(p));
 const ctx={BAContent:{}};
 for(const file of paths)new Function('window',fs.readFileSync(path.join(root,file),'utf8'))(ctx);
 const rows=[];
 for(let i=1;i<=26;i++){
  const id='course-'+String(i).padStart(2,'0'),c=ctx.BAContent[id];
  if(!c)throw Error('Missing '+id);
  const lessons=(c.modules||[]).flatMap(m=>m.lessons||[]);
  const required=[c.practice,c.exam,c.advancedExam,...(c.sectionExams||[])].filter(x=>x&&!x.optional);
  const optional=(c.sectionExams||[]).filter(x=>x.optional);
  const requiredQuestions=required.flatMap(e=>(e.questions||[]).map(q=>({exam:e.id||e.title||'base',question:q})));
  const written=[...(c.applications||[]),...(c.portfolioSections||[]),...(c.portfolio?[c.portfolio]:[])];
  const reference=(x)=>String(x.title||'')+' '+String(x.prompt||'')+' '+String(x.example||'')+' '+String(x.transfer||'')+' '+(x.body||[]).join(' ');
  for(let j=0;j<(c.outcomes||[]).length;j++){
   const statement=c.outcomes[j],focus=terms(statement);
   const scoreItem=x=>intersection(focus,terms(reference(x)));
   const sort=(a,b)=>b.overlap-a.overlap||a.id.localeCompare(b.id);
   const lessonMatches=lessons.map(l=>({id:l.id,overlap:scoreItem(l)})).filter(x=>x.overlap>=1).sort(sort).slice(0,5);
   const examMatches=requiredQuestions.map(({exam,question:q})=>({id:q.id,exam,overlap:scoreItem(q)})).filter(x=>x.overlap>=1).sort(sort).slice(0,5);
   const writtenMatches=written.map(x=>({id:x.id||x.title,overlap:scoreItem(x)})).filter(x=>x.overlap>=1).sort(sort).slice(0,5);
   rows.push({
    course:id,code:id.toUpperCase()+'-LO'+String(j+1).padStart(2,'0'),outcome:statement,
    candidateLessons:lessonMatches,candidateRequiredQuestions:examMatches,
    candidateWrittenTasks:writtenMatches,optionalExamCount:optional.length,
    status:lessonMatches.length&&examMatches.length?'POTENTIAL_ALIGNMENT_UNREVIEWED':'MANUAL_ALIGNMENT_REQUIRED',
    determination:'NOT_EXTERNALLY_REVIEWED',
    warning:'Keyword overlap only; examples are candidates, not proof of direct assessment or achievement'
   });
  }
 }
 return {version:1,courses:26,outcomes:rows,summary:{
  total:rows.length,requiresManual:rows.filter(r=>r.status==='MANUAL_ALIGNMENT_REQUIRED').length,
  potential:rows.filter(r=>r.status==='POTENTIAL_ALIGNMENT_UNREVIEWED').length},
  missingEvidenceRule:'Do not claim completion until qualified reviewers map each outcome to a directly observed required assessment and independently marked learner work.'};
}
if(require.main===module){
 const m=generate();
 if(process.argv.includes('--json'))console.log(JSON.stringify(m,null,2));
 else{
  console.log('# Business Academy — Five-Level Outcome-to-Assessment Review\n');
  console.log('**Candidate topical links only. No academic sign-off.**\n');
  console.log('Outcome statements: '+m.summary.total+'; provisional links: '+m.summary.potential+'; manual alignment flags: '+m.summary.requiresManual+'\n');
  for(const x of m.outcomes){
   console.log('## '+x.code+' — '+x.outcome+'\n');
   console.log('Status: **'+x.status+'**; Independent outcome validation: **NOT REVIEWED**');
   console.log('Candidate lessons: '+(x.candidateLessons.map(i=>i.id).join(', ')||'none identified'));
   console.log('Candidate required objective questions: '+(x.candidateRequiredQuestions.map(i=>i.id).join(', ')||'none identified'));
   console.log('Candidate written tasks: '+(x.candidateWrittenTasks.map(i=>i.id).join(', ')||'none identified')+'\n');
  }
 }
}
module.exports={generate};
