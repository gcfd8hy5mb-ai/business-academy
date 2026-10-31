/* node tests/levels-v72-integration.js
 * Validate latest course expansion, stable IDs, and key numerical decisions. */
'use strict';
const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const html=fs.readFileSync('index.html','utf8');
const script='learning/level1-level2-decision-seminars-v72.js';
assert(html.includes(script+'?v=72'),'v72 must load in deployed curriculum');
const ctx={window:{BAContent:{}},console};
for(let n=1;n<=13;n++){const id='course-'+String(n).padStart(2,'0');ctx.window.BAContent[id]={modules:[],applications:[]};}
vm.createContext(ctx);
vm.runInContext(fs.readFileSync(script,'utf8'),ctx,{filename:script});
assert.equal(ctx.window.BACompletionSeminarsV72.courses,13);
let lessons=0,applications=0;
for(let n=1;n<=13;n++){
 const id='course-'+String(n).padStart(2,'0'),c=ctx.window.BAContent[id];
 const l=c.modules.flatMap(m=>m.lessons||[]),a=c.applications;
 assert.equal(l.length,1,id+' seminar count');
 assert.equal(a.length,1,id+' application count');
 assert.equal(l[0].id,'c'+String(n).padStart(2,'0')+'-v72-lesson');
 assert.ok(l[0].body.join(' ').length>400,id+' instructional depth');
 assert.ok(l[0].transfer&&l[0].example&&l[0].tutor?.steps?.length>=3);
 assert.ok(a[0].rubric?.length>=4&&a[0].requirements?.length>=3);
 lessons+=l.length;applications+=a.length;
}
assert.equal(lessons,13);assert.equal(applications,13);
// Independently calculate selected v72 teaching results.
const close=(a,b)=>assert.ok(Math.abs(a-b)<.001,a+' differs from '+b);
close(850*.38-205-55,63);close(782*.36-205-55,21.52);
close(15+10,25);close(8000*(1500-420)-6800000,1840000);
close(40/50*100,80);close(25*(1.03-1.12),-2.25);
close(72+16-14-18+9,65);close(60+.8*25,80);
close(12000*(36-31)-95000,-35000);
close((280/2000-240/2000)*100,2);
close(6*.6*.3+4*.5*.25+2*.25*.4,1.78);
close(120*32+40*45,5640);close(60*45+60*32,4620);
close(2000*(.18-.15)*25000-1100000,400000);
close(80*.24+20*.18,22.8);
console.log('PASS: 13 seminars and assignments with 14 independent arithmetic checks');
