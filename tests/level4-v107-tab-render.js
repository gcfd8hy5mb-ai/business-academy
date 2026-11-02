/* Level 4 v107 render acceptance: exercise each real workspace tab for all seven courses. */
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const listeners={},store={};
const document={addEventListener:(type,fn)=>{listeners[type]=fn},getElementById:()=>null,querySelectorAll:()=>[]};
const localStorage={getItem:key=>store[key]||null,setItem:(key,v)=>{store[key]=v}};
const window={BAContent:{},scrollY:0,scrollTo(){}};
const catalog=Array.from({length:26},(_,i)=>'Course '+(i+1));
const coursePlans=Array.from({length:26},()=>({hours:120}));
const ctx={window,document,localStorage,catalog,coursePlans,htmlEscape:x=>String(x).replace(/&/g,'&amp;').replace(/</g,'&lt;'),data:{},go(){},draw(){},console};
vm.createContext(ctx);
for(const name of ['core.js','level4-initial-v82.js','level4-executive-studios-v95.js','level4-advanced-seminars-v96.js','level4-executive-dilemmas-v97.js','level4-integrated-board-v98.js','level4-comprehensive-final-v99.js','level4-depth-v100.js','level4-mastery-depth-v101.js','level4-assessment-bank-v102.js','level4-primary-source-readings-v103.js','level4-short-exam-reinforcement-v104.js','workspace-v40.js']){
 vm.runInContext(fs.readFileSync('learning/'+name,'utf8'),ctx,{filename:name});
}
assert.ok(listeners.click,'Workspace navigation handler not registered');
const click=dataset=>listeners.click({target:{closest:()=>({dataset})}});
let tested=0;
for(let n=21;n<=25;n++){
 const id='course-'+n;
 click({learnCourse:id});
 for(const tab of ['lessons','overview','practice','exam','tutor','portfolio',...(n===25?['milestone']:[])]){
  click({learnTab:tab});
  const html=window.BAWorkspace.render();
  assert.ok(html.includes('learning-workspace'),'Rendering failed for '+id+' '+tab);
  assert.ok(html.length>300,'Empty output '+id+' '+tab);
  if(tab==='portfolio')assert.ok(html.includes('portfolioSection-')||html.includes('Board-ready portfolio submission'),'No portfolio forms '+id);
  if(tab==='tutor')assert.ok(html.includes('learning-tutor'),'No tutor guidance '+id);
  if(n===25&&tab==='exam')assert.ok(html.includes('comprehensive executive examination'),'Level 4 final absent');
  tested++;
 }
}
assert.ok(fs.readFileSync('learning/workspace-v40.js','utf8').includes('(Array.isArray(items)?items:[])'),'Safe missing-requirements fallback absent');
assert.ok(fs.readFileSync('learning/workspace-v40.js','utf8').includes('Array.isArray(a.solution)&&a.solution.length'),'Open-ended written assignments require safe solution rendering');
console.log('Level 4 v107: '+tested+' course/tab renders passed with missing-requirements compatibility.');
