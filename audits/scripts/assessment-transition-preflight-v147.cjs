/* Assessment transition preflight v147.
 * Run: node audits/scripts/assessment-transition-preflight-v147.cjs
 * A passing test means that unsafe replacement is BLOCKED, not that migration is ready.
 */
'use strict';
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const repo=path.resolve(__dirname,'../..');
const load=p=>fs.readFileSync(path.join(repo,p),'utf8');
const a=JSON.parse(load('audits/data/2026-11-04-required-level2-v58-exam-archive.json'));
const b=JSON.parse(load('audits/data/2026-11-04-required-level4-v104-exam-archive.json'));
const w={BAContent:{}};for(let n=7;n<=26;n++){const id='course-'+String(n).padStart(2,'0');w.BAContent[id]={id,modules:[],readings:[],sectionExams:[],portfolioSections:[],applications:[],outcomes:[]}}
for(const file of ['learning/level2-independent-exams-v128.js','learning/level4-level5-independent-exams-v129.js'])vm.runInNewContext(load(file),{window:w},{timeout:5000});
const failures=[],results=[];
const normalize=s=>String(s||'').toLowerCase().replace(/\s+/g,' ').trim();
for(let n=7;n<=25;n++){if(n>=14&&n<=20)continue;
 const id='course-'+String(n).padStart(2,'0'),archived=n<=13?
 a.exams.filter(x=>x.courseId===id).map(x=>x.definition):
 b.affectedExams.filter(x=>x.courseId===id).map(x=>x.afterDefinition);
 const optional=w.BAContent[id].sectionExams.filter(x=>x.optional);
 if(optional.length!==1){failures.push('Missing unique optional candidate '+id);continue}
 const candidate=optional[0],q=candidate.questions||[];
 const previous=archived.flatMap(e=>e.questions||[]);
 const oldPrompts=new Set(previous.map(x=>normalize(x.prompt)));
 const overlap=q.filter(x=>oldPrompts.has(normalize(x.prompt))).length;
 const candidateValid=q.every(x=>x.id&&Array.isArray(x.options)&&x.options.length>=2&&Number.isInteger(x.correct)&&x.correct>=0&&x.correct<x.options.length&&x.explanation);
 const uniqueIds=new Set(q.map(x=>x.id)).size===q.length;
 const recommendedReady=archived.length===1&&q.length>=previous.length&&candidate.optional!==true&&overlap===0&&candidateValid&&uniqueIds;
 const blockers=[];
 if(candidate.optional)blockers.push('Candidate is explicitly optional');
 if(q.length<previous.length)blockers.push('Candidate is smaller than archived required bank');
 if(archived.length>1)blockers.push('Multiple required legacy sections; no approved equivalence mapping');
 if(overlap)blockers.push('Candidate repeats an archived question prompt');
 if(!candidateValid||!uniqueIds)blockers.push('Candidate question integrity failure');
 if(!recommendedReady&&blockers.length===0)blockers.push('No approved versioned required exam transition');
 results.push({courseId:id,legacyRequiredExams:archived.length,archivedQuestions:previous.length,candidateId:candidate.id,candidateQuestions:q.length,overlap,ready:recommendedReady,blockers});
 if(recommendedReady)failures.push('Unsafe automatic migration readiness asserted for '+id);
 if(!candidateValid||!uniqueIds)failures.push('Invalid candidate question bank '+id);
}
if(results.length!==12)failures.push('Expected 12 candidate mappings; got '+results.length);
if(results.some(x=>x.ready))failures.push('Existing optional banks must never automatically replace required exams');
const counts={level2:results.filter(x=>x.courseId<='course-13').length,level4:results.filter(x=>x.courseId>='course-21').length,blocked:results.filter(x=>!x.ready).length};
console.log(JSON.stringify({status:failures.length?'FAIL':'PASS',migrationReady:false,...counts,courseMappings:results.map(({courseId,legacyRequiredExams,archivedQuestions,candidateQuestions,overlap,blockers})=>({courseId,legacyRequiredExams,archivedQuestions,candidateQuestions,overlap,blockers})),failures},null,2));
if(failures.length)process.exitCode=1;
