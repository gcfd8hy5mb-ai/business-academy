/* Level 3 v92 render acceptance: exercise each real workspace tab for all seven courses. */
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const listeners={},store={};
const document={addEventListener:(type,fn)=>{listeners[type]=fn},getElementById:()=>null,querySelectorAll:()=>[]};
const localStorage={getItem:key=>store[key]||null,setItem:(key,v)=>{store[key]=v}};
const window={BAContent:{},scrollY:0,scrollTo(){}};
const catalog=Array.from({length:26},(_,i)=>'Course '+(i+1));
const coursePlans=Array.from({length:26},()=>({hours:120}));
const ctx={window,document,localStorage,catalog,coursePlans,htmlEscape:x=>String(x).replace(/&/g,'&amp;').replace(/</g,'&lt;'),data:{},go(){},draw(){},console};
vm.createContext(ctx);
for(const name of ['core.js','level3.js','level3-advanced-v73.js','level3-corporate-depth-v74.js','level3-integrated-v75.js','level3-board-decisions-v76.js','level3-cumulative-v77.js','level3-mastery-v78.js','level3-final-depth-v79.js','level3-executive-labs-v80.js','level3-executive-synthesis-v81.js','level3-independent-transfer-v83.js','level3-historical-cases-v84.js','level3-historical-evidence-v85.js','level3-integrated-final-v87.js','level3-completion-seminars-v90.js','workspace-v40.js']){
 vm.runInContext(fs.readFileSync('learning/'+name,'utf8'),ctx,{filename:name});
}
assert.ok(listeners.click,'Workspace navigation handler not registered');
const click=dataset=>listeners.click({target:{closest:()=>({dataset})}});
let tested=0;
for(let n=14;n<=20;n++){
 const id='course-'+n;
 click({learnCourse:id});
 for(const tab of ['lessons','overview','practice','exam','tutor','portfolio',...(n===20?['milestone']:[])]){
  click({learnTab:tab});
  const html=window.BAWorkspace.render();
  assert.ok(html.includes('learning-workspace'),'Rendering failed for '+id+' '+tab);
  assert.ok(html.length>300,'Empty output '+id+' '+tab);
  if(tab==='portfolio')assert.ok(html.includes('portfolioSection-')||html.includes('Board-ready portfolio submission'),'No portfolio forms '+id);
  if(tab==='tutor')assert.ok(html.includes('learning-tutor'),'No tutor guidance '+id);
  if(n===20&&tab==='exam')assert.ok(html.includes('independent second sitting'),'Version 87 final absent');
  tested++;
 }
}
assert.ok(fs.readFileSync('learning/workspace-v40.js','utf8').includes('(Array.isArray(items)?items:[])'),'Safe missing-requirements fallback absent');
console.log('Level 3 v92: '+tested+' real course/tab renders passed with missing-requirements compatibility.');
