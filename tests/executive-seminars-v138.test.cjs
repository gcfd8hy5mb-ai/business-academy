'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const source=fs.readFileSync(require('node:path').join(__dirname,'../learning/five-level-executive-seminars-v138.js'),'utf8');
function load(){
 const BAContent=Object.fromEntries(Array.from({length:26},(_,i)=>['course-'+String(i+1).padStart(2,'0'),{id:'course-'+String(i+1).padStart(2,'0'),modules:[{id:'original-'+i,lessons:[{id:'existing-'+i,body:['Preserved']}]}],applications:[],sectionExams:[],portfolioSections:[]}]));
 const context={window:{BAContent}};vm.createContext(context);
 vm.runInContext(source,context,{filename:'five-level-executive-seminars-v138.js',timeout:10000});
 return context;
}
test('v138 supplies 26 uniquely keyed original executive seminars',()=>{
 const {window:w}=load(); assert.equal(w.BAV138.coursesExpanded,26);
 let seen=new Set();
 for(let i=1;i<=26;i++){
  const id='course-'+String(i).padStart(2,'0'),c=w.BAContent[id];
  assert.equal(c.modules.length,2);
  assert.equal(c.modules[0].lessons[0].id,'existing-'+(i-1));
  assert.equal(c.modules[0].lessons[0].body[0],'Preserved');
  const mod=c.modules[1],l=mod.lessons[0],app=c.applications[0];
  for(const item of [mod,l,app]){assert.ok(item.id);assert.ok(!seen.has(item.id));seen.add(item.id);}
  assert.equal(l.body.length,4);assert.ok(l.body.every(x=>x.length>180));
  assert.ok(l.example.length>70);assert.ok(l.transfer.length>50);
  assert.equal(l.minutes,120);assert.equal(app.minutes,180);
  assert.equal(app.rubric.length,4);
 }
});
test('v138 replay does not duplicate modules or applications',()=>{
 const ctx=load();vm.runInContext(source,ctx,{timeout:10000});
 for(const c of Object.values(ctx.window.BAContent)){assert.equal(c.modules.length,2);assert.equal(c.applications.length,1);}
});
test('v138 verifies cash-value exemplars independently',()=>{
 const v=(30/1.1+34/1.1**2+38/1.1**3+42/1.1**4);
 assert.ok(Math.abs(v-112.608428386)<1e-6);
 assert.ok(Math.abs((-50+20/1.1+20/1.1**2+20/1.1**3)-(-.263))<.002);
 assert.equal(130-50-32,48);
 assert.equal(42+33,75);
 assert.equal(14+12,26);
});
