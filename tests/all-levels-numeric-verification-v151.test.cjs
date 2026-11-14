'use strict';
/* v151: independent mathematical verification of all 94 optional numeric drills
 * across five levels. Created without reusing stored answer keys/explanations.
 * Uses synthetic curricula only, and does not touch student attempts or grades.
 */
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const root=path.resolve(__dirname,'..'),read=p=>fs.readFileSync(path.join(root,p),'utf8');
const pv=(cash,r,n)=>cash*Array.from({length:n},(_,i)=>(1+r)**-(i+1)).reduce((a,b)=>a+b,0);
function boot(){
 const content=Object.fromEntries(Array.from({length:26},(_,i)=>['course-'+String(i+1).padStart(2,'0'),{modules:[],numericDrills:[]}]));
 const v125=read('learning/level5-numeric-v125.js'),ids=[...new Set([...v125.matchAll(/"lessonId":"([^"]+)"/g)].map(x=>x[1]))];
 content['course-26'].modules=[{lessons:ids.map(id=>({id}))}];
 const ctx={window:{BAContent:content}};vm.createContext(ctx);
 for(const path of ['learning/level2-numeric-v64.js','learning/level1-level3-independent-numeric-v126.js','learning/level4-independent-numeric-v106.js','learning/level5-numeric-v125.js'])vm.runInContext(read(path),ctx,{filename:path,timeout:10000});
 return content;
}
const l13={
 1:[960*.37-275,880*.35-275],
 2:[13+11,82-(118-44)],
 3:[(57500-50000)/50000*100,(31.5-28)/28*100],
 4:[75*.30,2/(18+2)*100],
 5:[80000*(135-78)/1e6,420000/70],
 6:[(35+45)/(250+300)*100,(12-9.3)-1.1],
 7:[92+18-14-8+6,245-(310-95)],
 8:[pv(15,.1,3)-35,380-95+24],
 9:[42000*(19.2-18),31-180*.12],
 10:[70-(95-38),12*3],
 11:[(189-210)/210*100,84/120*100],
 12:[45*18000-280000,14-9],
 13:[8000*(70-43),96/3],
 14:[450*.18*.75+20-28-9,680-220+35],
 15:[100000*(37-32)-340000,(120000-105000)*24],
 16:[238000/(80-46),(75/3)*115],
 17:[(192/1200-168/1200)*100,(21-14)/14*100],
 18:[7/(7+3+2)*100,Math.max(.22*30,8)],
 19:[18*1.12,8*1.15],
 20:[95000*6/60*42,(.10-.04)*8e6-190000]
};
const l2={
 7:[260-(340-115),85+14-19-6+11],
 8:[7500*(25.60-24),48-275*.12],
 9:[(210/1500-150/1500)*100,60*62-2800],
 10:[18-11-2-.25*4,-1.4+.45],
 11:[175*7+300,700*3+500*8],
 12:[48*21000-750000,96/(96+4)*100],
 13:[70*.23+30*.17,(.08-.02)*5000000-190000]
};
const l4={
 21:[480-135+22-14,164+34-19-6-175],
 22:[15+8,64-46-11],
 23:[(.11-.05)*6000000-210000,.04*12*.4],
 24:[90000*11/60*34*.55-120000,255000/850000*100],
 25:[108-(154-62),pv(9,.1,4)-25]
};
const l5=[
 .85*(48/1.12+52/1.12**2+56/1.12**3),
 75-10-30-35,
 (.09-.04)*30-.38,
 190000/(20000*36)*100,
 12*.75*1.07+12*.25*.95,
 130-50-12-42-33,
 (900*.96-792)/(900*.96)*100,
 (600*.18-30)*.75+30-45-22,
 375-3*105,
 14*.6*1.08+14*.4*.95,
 18000*40*.3-170000,
 .03*20,
 55-(135-32-18-40),
 16-.5*15+12,
 pv(9*.6,.1,4)-24,
 pv(6*.8,.1,4)-18,
 10-.75-8,
 30-8,
 (800*.14-38)/760*100,
 250+70-3*100,
 126*(.11-.15),
 720*(50-35)/365,
 (.08-.03)*9000000-200000-120000,
 40/65*100,
 20*(.8-.6),
 -12+2/1.1+4/1.1**2+4/1.1**3+4/1.1**4,
 20e6*45/365*.09,
 400-95+28-12,
 -16+[2,3,4,5].reduce((a,n)=>a+9*.75/1.1**n,0),
 (100000-60000)/(100000+300000)*100
];
function check(actual,expected,id){const max= Math.max(.0005,Math.abs(expected)*.0000001);assert.ok(Number.isFinite(actual)&&Math.abs(actual-expected)<max,id+' stored '+actual+' independently calculated '+expected);}
function drill(course,ids){const all=course.numericDrills.flatMap(x=>x.questions);for(const [i,id] of ids.entries())assert.equal(all[i].id,id);return all;}
test('all 40 independent Level 1–3 numeric answers agree with separate calculations',()=>{
 const c=boot();let total=0;
 for(let n=1;n<=20;n++){const k=String(n).padStart(2,'0'),qs=drill(c['course-'+k],[1,2].map(i=>'c'+k+'-v126-independent-q'+i));for(let i=0;i<qs.length;i++){check(qs[i].v,l13[n][i],qs[i].id);total++;}}
 assert.equal(total,40);
});
test('all 14 Level 2 deterministic numeric answers reconcile with separate calculations',()=>{
 const c=boot();let total=0;
 for(let n=7;n<=13;n++){const k=String(n).padStart(2,'0'),qs=drill(c['course-'+k],[0,1].map(i=>'c'+k+'-v64-n'+i));for(let i=0;i<qs.length;i++){check(qs[i].v,l2[n][i],qs[i].id);total++;}}
 assert.equal(total,14);
});
test('all 10 independent Level 4 numeric answers reconcile with separate calculations',()=>{
 const c=boot();let total=0;
 for(let n=21;n<=25;n++){const k=String(n),qs=drill(c['course-'+k],[1,2].map(i=>'c'+k+'-v106-numeric-q'+i));for(let i=0;i<qs.length;i++){check(qs[i].v,l4[n][i],qs[i].id);total++;}}
 assert.equal(total,10);
});
test('all 30 Level 5 numeric transfer answers agree with independent quantitative models',()=>{
 const c=boot(),qs=c['course-26'].numericDrills.flatMap(x=>x.questions);
 assert.equal(qs.length,30);for(let i=0;i<30;i++){assert.equal(qs[i].id,'l5-v125-n'+(i+1));check(qs[i].v,l5[i],qs[i].id);}
});
test('all 94 numeric drill IDs remain unique and optional grade keys are not rewritten',()=>{
 const c=boot(),qs=Object.values(c).flatMap(course=>course.numericDrills.flatMap(d=>d.questions));
 assert.equal(qs.length,94);assert.equal(new Set(qs.map(q=>q.id)).size,94);
 for(const q of qs){assert.ok(typeof q.p==='string'&&q.p.length>30);assert.ok(typeof q.e==='string'&&q.e.length>6);assert.ok(Number.isFinite(q.v));}
});
