'use strict';
/* Independent mathematical spot checks from all five levels.
 * These are not a full content or academic equivalency evaluation.
 */
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm'),path=require('node:path');
const root=path.resolve(__dirname,'..');
const load=p=>fs.readFileSync(path.join(root,p),'utf8');
const v125=load('learning/level5-numeric-v125.js');
const lessonIds=[...new Set([...v125.matchAll(/"lessonId":"([^"]+)"/g)].map(m=>m[1]))];
function setup(){
 const BAContent=Object.fromEntries(Array.from({length:26},(_,i)=>['course-'+String(i+1).padStart(2,'0'),{modules:[],numericDrills:[]}]));
 BAContent['course-26'].modules=[{lessons:lessonIds.map(id=>({id}))}];
 const ctx={window:{BAContent}};
 vm.createContext(ctx);
 for(const p of ['learning/level2-numeric-v64.js','learning/level1-level3-independent-numeric-v126.js','learning/level4-independent-numeric-v106.js','learning/level5-numeric-v125.js'])vm.runInContext(load(p),ctx,{filename:p,timeout:10000});
 return BAContent;
}
function answer(c,id){const q=c.numericDrills.flatMap(d=>d.questions).find(x=>x.id===id);assert.ok(q,'Missing '+id);return q.v;}
function check(actual,expected,tolerance=.001){assert.ok(Number.isFinite(actual)&&Math.abs(actual-expected)<=tolerance,'expected '+expected+' got '+actual);}
test('Level 1 independent formulas: contribution, margin, enterprise economics',()=>{
 const c=setup();
 check(answer(c['course-01'],'c01-v126-independent-q1'),960*.37-275);
 check(answer(c['course-02'],'c02-v126-independent-q1'),13+11);
 check(answer(c['course-03'],'c03-v126-independent-q1'),(57500-50000)/50000*100);
 check(answer(c['course-04'],'c04-v126-independent-q2'),2/(18+2)*100);
 check(answer(c['course-05'],'c05-v126-independent-q1'),80000*(135-78)/1e6);
 check(answer(c['course-06'],'c06-v126-independent-q1'),(35+45)/(250+300)*100);
});
test('Level 2 independent cash, variance, capacity and compliance formulas',()=>{
 const c=setup(),a=(n,i)=>answer(c['course-'+n],'c'+n+'-v64-numeric-n'+i);
 check(a('07',0),260-(340-115));check(a('07',1),85+14-19-6+11);
 check(a('08',0),7500*(25.6-24));
 check(a('09',0),(210/1500-150/1500)*100);
 check(a('10',0),18-11-2-.25*4);
 check(a('11',0),175*7+300);
 check(a('12',0),48*21000-750000);
 check(a('13',0),70*.23+30*.17);
});
test('Level 3 independent financial, research, venture and international formulas',()=>{
 const c=setup(),a=(n,i)=>answer(c['course-'+n],'c'+n+'-v126-independent-q'+i);
 check(a('14',1),450*.18*(1-.25)+20-28-9);
 check(a('15',1),100000*(37-32)-340000);
 check(a('16',1),238000/(80-46));
 check(a('17',1),(192/1200-168/1200)*100);
 check(a('18',1),7/(7+3+2)*100);
 check(a('19',1),18*1.12);
 check(a('20',2),(.10-.04)*8e6-190000);
});
test('Level 4 acquisition, capital, control and operating-value formulas',()=>{
 const c=setup(),a=(n,i)=>answer(c['course-'+n],'c'+n+'-v106-numeric-q'+i);
 check(a('21',1),480-135+22-14);
 check(a('22',1),15+8);
 check(a('23',1),(.11-.05)*6e6-210000);
 check(a('24',1),90000*11/60*34*.55-120000);
 check(a('25',1),108-(154-62));
});
test('Level 5 cash, FCFF, portfolio, integration and restructuring formulas',()=>{
 const c=setup(),q=id=>answer(c['course-26'],id);
 check(q('l5-v125-n1'),.85*(48/1.12+52/1.12**2+56/1.12**3),.001);
 check(q('l5-v125-n8'),(600*.18-30)*.75+30-45-22);
 check(q('l5-v125-n14'),16-.50*15+12);
 check(q('l5-v125-n15'),9*.6*((1-1/1.1**4)/.1)-24,.001);
 check(q('l5-v125-n18'),30-8);
 check(q('l5-v125-n29'),-16+[2,3,4,5].reduce((s,t)=>s+9*.75/1.1**t,0),.001);
});
