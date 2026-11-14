'use strict';
/* v152: independent reconciliation of the 26 executive seminar model examples.
 * Explicit assumptions are held fixed; not a substitute for full curriculum peer review.
 */
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const root=path.resolve(__dirname,'..'),script=fs.readFileSync(path.join(root,'learning/five-level-executive-seminars-v138.js'),'utf8');
const annuity=(r,n)=>Array.from({length:n},(_,i)=>Math.pow(1+r,-(i+1))).reduce((a,b)=>a+b,0);
const models=[
 {q:'300m',parts:[300*.18,200*.09,(300*.18+200*.09)/(300+200)*100],words:['$54m','$18m','14.4%']},
 {q:'$50m investment',parts:[-50+20*annuity(.1,3)],words:['−$0.263m']},
 {q:'80,000 units',parts:[75-46,80000*(75-46)/1e6,80000*(75-46)/1e6-1.6,1.6e6/(75-46)],words:['$29','$2.32m','$0.72m','55,173']},
 {q:'$12m pre-money',parts:[12+3,3/(12+3)*100],words:['$15m','20%']},
 {q:'25,000 units',parts:[25000*(80-52)/1000,25000*.87*(88-52)/1000,25000*.87*(88-52)/1000-25000*(80-52)/1000],words:['$700k','$783k','$83k']},
 {q:'$65m',parts:[65+18-12-9+5,65+18-12-9+5-40],words:['$67m','$27m']},
 {q:'80%',parts:[45*.8,45*.2],words:['$36m','$9m']},
 {q:'$600k',parts:[360000/120,240000/800,25*(360000/120)+110*(240000/800)],words:['$3k','$300','$108k']},
 {q:'1,000 customers',parts:[1000*90*(1+.8+.8**2+.8**3),1000*90*(1+.8+.8**2+.8**3)-240000],words:['$265,680','$25,680']},
 {q:'$4m annual revenue',parts:[4*.3,4*.05,4*.3-4*.05,(.2/1.2)*100],words:['$1.2m','$0.2m','$1.0m','16.7%']},
 {q:'60 units per hour',parts:[60*10*22*.85],words:['11,220']},
 {q:'12,000 monthly tasks',parts:[12000*15/60,12000*15/60*32,12000*15/60*32*.35],words:['3,000','$96k','$33,600']},
 {q:'$40m pretax',parts:[40*.25,40*.75],words:['$10m','$30m']},
 {q:'$30m',parts:[30/1.1+34/1.1**2+38/1.1**3+42/1.1**4],words:['$112.61m']},
 {q:'100,000',parts:[100000*45/1e6,(108000*43-180000)/1e6,(108000*43-180000)-100000*45],words:['$4.5m','$4.464m','−$36k']},
 {q:'price rises',parts:[20000*(50-20),20000*(55/50)**(-2),20000*(55/50)**(-2)*(55-20)],words:['$600k','16,529','$578,512']},
 {q:'randomized study',parts:[150/1000*100,150/1000*100],words:['15%','zero']},
 {q:'$5m',parts:[20+5,5/(20+5)*100],words:['$25m','20%']},
 {q:'€10m',parts:[10*1.08,10*.95,10*(1.08-.95)],words:['$10.8m','$9.5m','$1.3m']},
 {q:'$1.2m',parts:[460000*annuity(.1,3),460000*annuity(.1,3)-1200000],words:['$1.144m','−$56k']},
 {q:'$24m EBITDA',parts:[240/24,8*annuity(.12,5),8*annuity(.12,5)-18],words:['10x','$28.84m','$10.84m']},
 {q:'chooses one project',parts:[19*annuity(.1,4)-60,17*annuity(.1,5)-60],words:['$0.23m','$4.44m']},
 {q:'$130m cash',parts:[130-50-32,55-(130-50-32)],words:['$48m','$7m']},
 {q:'$12m upfront',parts:[5-1,4*annuity(.1,4)-12],words:['$4m','$0.679m']},
 {q:'$100m cash',parts:[100-20-40,100-20-30],words:['$40m','$50m']},
 {q:'$130m cash',parts:[130-50,95-(130-50),42+33,14+12,130-50-(42+33)],words:['$80m','$15m','$75m','$26m','$5m']}
];
const expectedModels=[
 [54,18,14.4],[-.263],[29,2.32,.72,55173],[15,20],[700,783,83],[67,27],[36,9],[3000,300,108000],[265680,25680],[1.2,.2,1,16.7],[11220],[3000,96000,33600],[10,30],[112.61],[4.5,4.464,-36000],[600000,16529,578512],[15,15],[25,20],[10.8,9.5,1.3],[1144000,-56000],[10,28.84,10.84],[.23,4.44],[48,7],[4,.679],[40,50],[80,15,75,26,5]
];
const precision={2:.002,3:1,10:.06,14:.02,16:1,20:1000,21:.02,22:.02,24:.002};
function load(){
 const c=Object.fromEntries(Array.from({length:26},(_,i)=>['course-'+String(i+1).padStart(2,'0'),{modules:[],sectionExams:[],readings:[],applications:[]}]));
 const ctx={window:{BAContent:c}};vm.createContext(ctx);vm.runInContext(script,ctx,{filename:'five-level-executive-seminars-v138.js',timeout:10000});return c;
}
test('all 26 executive seminars have stable unique lessons and independently meaningful transfer requirements',()=>{
 const c=load(),ids=[];
 for(let n=1;n<=26;n++){const id='course-'+String(n).padStart(2,'0'),v=c[id],lessons=v.modules.flatMap(m=>m.lessons);assert.equal(lessons.length,1,'missing seminar '+id);const lesson=lessons[0];ids.push(lesson.id);assert.ok(lesson.body.join(' ').length>250);assert.ok(String(lesson.transfer||'').length>35);}
 assert.equal(new Set(ids).size,26);
});
test('26 executive seminar scenarios reconcile their explicit fictional model outputs',()=>{
 const c=load();assert.equal(models.length,26);
 for(let n=1;n<=26;n++){const model=models[n-1],l=c['course-'+String(n).padStart(2,'0')].modules[0].lessons[0],prose=[...l.body,l.example,l.transfer,l.solution].filter(Boolean).join(' ');
  assert.ok(prose.includes(model.q),'course '+n+' scenario absent');
  for(const expected of model.words)assert.ok(prose.includes(expected),'course '+n+' worked outcome '+expected+' absent');
  assert.equal(model.parts.length,expectedModels[n-1].length,'course '+n+' model dimension');for(let i=0;i<model.parts.length;i++){const value=model.parts[i],expected=expectedModels[n-1][i];assert.ok(Number.isFinite(value)&&Math.abs(value-expected)<(precision[n]??.00001),'course '+n+' result '+i+' independently recalculates '+value+' versus displayed '+expected);}
 }
 assert.ok(Math.abs(models[1].parts[0]+.263)<.002);
 assert.ok(Math.abs(models[13].parts[0]-112.61)<.02);
 assert.ok(Math.abs(models[20].parts[1]-28.84)<.02);
 assert.ok(Math.abs(models[21].parts[0]-.23)<.02);
});
test('venture-financing scenario explicitly distinguishes pre-money company valuation from investor contribution',()=>{
 const c=load(),l=c['course-04'].modules[0].lessons[0],prose=l.body.join(' ');
 assert.match(prose,/valued at \$12m pre-money/);assert.match(prose,/raises \$3m/);assert.ok(Math.abs(3/(12+3)-.2)<1e-10);
});
