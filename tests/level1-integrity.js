/* Run: node tests/level1-integrity.js
   Integrity and workload checks; NOT a certification of academic rigor. */
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const files=['learning/content.js','learning/level1.js','learning/level1-expansion-a.js','learning/level1-expansion-b.js',
'learning/level1-studios-a.js','learning/level1-studios-b.js','learning/level1-studios-c.js','learning/level1-studios-d.js','learning/level1-studios-e.js','learning/level1-studios-f.js','learning/level1-analytics-v34.js','learning/level1-economics-v35.js','learning/level1-synthesis-v36.js','learning/level1-studios-v37.js','learning/level1-cumulative-v38.js','learning/level1-final-v39.js'];
const ctx={window:{},console};vm.createContext(ctx);
for(const file of files){assert(fs.existsSync(file),'Missing '+file);vm.runInContext(fs.readFileSync(file,'utf8'),ctx,{filename:file,timeout:5000})}
const courses=ctx.window.BAContent;
const counts={courses:0,lessons:0,questions:0,minutes:0,problems:0,portfolios:0};
const ids=new Set(),errors=[];
function unique(id,kind){if(!id||typeof id!=='string')errors.push('Missing '+kind+' id');else if(ids.has(id))errors.push('Duplicate id: '+id);else ids.add(id)}
function time(x,kind){if(!Number.isFinite(x?.minutes)||x.minutes<=0||x.minutes>1440)errors.push('Invalid duration '+kind+': '+x?.minutes);else counts.minutes+=x.minutes}
function exam(a,kind,courseId){if(!a)return;unique(courseId+':exam:'+(a.id||kind),kind);time(a,kind);for(const q of a.questions||[]){unique(courseId+':'+q.id,'question');counts.questions++;if(!Array.isArray(q.options)||q.options.length<2||!Number.isInteger(q.correct)||q.correct<0||q.correct>=q.options.length||!q.explanation)errors.push('Invalid question '+q.id)}if(!(a.questions||[]).length)errors.push('Empty exam '+kind)}
for(let i=1;i<=6;i++){const id='course-'+String(i).padStart(2,'0'),c=courses[id];assert(c,'Missing course '+id);counts.courses++;
for(const m of c.modules||[]){unique(m.id,'module');for(const l of m.lessons||[]){unique(l.id,'lesson');counts.lessons++;time(l,'lesson');if(!Array.isArray(l.body)||l.body.length<2||!l.example||!l.transfer||!l.tutor)errors.push('Incomplete lesson '+l.id)}}
for(const kind of ['practice','exam','advancedExam'])exam(c[kind],id+'-'+kind,id);
for(const a of c.sectionExams||[])exam(a,'section exam',id);
for(const arr of [c.applications||[],c.portfolioSections||[]])for(const x of arr){unique(id+':'+(arr===c.applications?'application:':'portfolioSection:')+x.id,'written assignment');time(x,'written assignment');counts[arr===c.applications?'problems':'portfolios']++;if(!Array.isArray(x.rubric)||x.rubric.length<2)errors.push('Missing rubric '+x.id)}
for(const kind of ['portfolio','portfolioExtension'])if(c[kind]){unique(c[kind].id||id+'-'+kind,kind);time(c[kind],kind);counts.portfolios++}
for(const r of c.readings||[])time(r,'reading');
}
const target=365*60; console.log(JSON.stringify({...counts,hours:Math.round(counts.minutes/60*10)/10,targetHours:365,remainingHours:Math.round((target-counts.minutes)/60*10)/10,errors},null,2));
if(errors.length)process.exitCode=1;
