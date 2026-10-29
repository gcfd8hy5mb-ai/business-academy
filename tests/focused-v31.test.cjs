const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
function boot(storage=new Map()){
 const listeners={},elements={app:{innerHTML:''}},localStorage={getItem:k=>storage.get(k)||null,setItem:(k,v)=>storage.set(k,v)};
 const document={getElementById:id=>elements[id],addEventListener:(type,fn)=>(listeners[type]||=[]).push(fn)};
 const x={window:{scrollTo(){},scrollY:0},document,localStorage,Intl,Blob,URL,setTimeout,alert(){}};
 vm.createContext(x);
 for(const f of ['core.js','content.js','level1.js','level1-expansion-a.js','level1-expansion-b.js','level1-studios-a.js','level1-studios-b.js','level1-studios-c.js','level1-studios-d.js','level1-studios-e.js','level1-studios-f.js','level2.js','level3.js'])vm.runInContext(fs.readFileSync('learning/'+f,'utf8'),x);
 x.BALearning=x.window.BALearning;
 vm.runInContext(fs.readFileSync('app-v28.js','utf8'),x);
 vm.runInContext(fs.readFileSync('learning/workspace-v31.js','utf8'),x);
 x.BAWorkspace=x.window.BAWorkspace;
 const fire=(type,target)=>{for(const fn of listeners[type]||[])fn({target})};
 return {x,storage,fire,click:dataset=>fire('click',{closest:()=>({dataset})}),html:()=>elements.app.innerHTML};
}
test('active Version 31 route keeps one focused lesson and navigates to the new eighth lesson',()=>{
 const b=boot();b.click({learnCourse:'course-05'});
 assert.match(b.html(),/Lesson 1 of 8/);assert.match(b.html(),/data-learn-step="1"/);
 assert.equal((b.html().match(/class="unit-panel learning-single"/g)||[]).length,1);
 for(let i=0;i<7;i++)b.click({learnStep:'1'});
 assert.match(b.html(),/Lesson 8 of 8/);assert.match(b.html(),/Test a currency hedge and a pricing response/);
 b.click({learnStep:'-1'});assert.match(b.html(),/Lesson 7 of 8/);
 b.click({learnFocus:'c05-policy-response-v33'});assert.match(b.html(),/Lesson 8 of 8/);
});
test('active Version 31 exam and portfolio persist new evidence without changing legacy progress',()=>{
 const legacy={completed:[1],cash:12345,week:2,history:[]},storage=new Map([['business-academy-v1',JSON.stringify(legacy)]]),b=boot(storage);
 b.click({learnCourse:'course-01'});b.click({learnTab:'exam'});
 assert.match(b.html(),/Enterprise design and capital-allocation examination/);
 const exam=b.x.window.BAContent['course-01'].sectionExams[0],kind='sectionExam-'+exam.id;
 for(const q of exam.questions)b.fire('change',{dataset:{learnAnswer:kind+':'+q.id},value:String(q.correct)});
 b.click({learnGrade:kind});assert.match(b.html(),/Last submitted result: 100%/);
 b.fire('input',{dataset:{learnDraft:kind},value:'My independent board analysis'});
 b.click({learnTab:'portfolio'});assert.match(b.html(),/Diversified enterprise strategy and governance dossier/);
 b.fire('input',{dataset:{learnDraft:'portfolioSection-c01-v33'},value:'My public-filing evidence'});
 assert.deepEqual(JSON.parse(storage.get('business-academy-v1')),legacy);
 const again=boot(storage);again.click({learnCourse:'course-01'});again.click({learnTab:'portfolio'});
 assert.match(again.html(),/My public-filing evidence/);
 again.click({learnTab:'exam'});assert.match(again.html(),/My independent board analysis/);
});
