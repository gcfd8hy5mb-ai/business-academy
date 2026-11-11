/* Complete 26-course student-facing versus reviewer-facing workload parity.
 * Prevent future discrepancy between curricular hours in the app and audit.
 */
const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs');
function load(){
 const html=fs.readFileSync('index.html','utf8');
 const paths=[...html.matchAll(/<script\b[^>]*\bsrc="([^"]+)"/g)].map(m=>m[1].split('?')[0]);
 const w={BAContent:{}};
 for(const file of paths.filter(p=>/^learning\/(?:level\d|level1-level2|level1-level3|level4-level5)/.test(p)))new Function('window',fs.readFileSync(file,'utf8'))(w);
 new Function('window',fs.readFileSync('learning/workload-audit-v130.js','utf8'))(w);
 new Function('window',fs.readFileSync('learning/core-v110.js','utf8'))(w);
 return w;
}
const w=load();
test('every course shows the same required study minutes as the five-level audit',()=>{
 let total=0;const bad=[];
 for(let n=1;n<=26;n++){
  const id='course-'+String(n).padStart(2,'0'),c=w.BAContent[id];
  const model=w.BALearning.workload(c),audit=w.BAWorkloadAudit.detail(c);
  if(model.minutes!==audit.total)bad.push({id,model:model.minutes,audit:audit.total,difference:model.minutes-audit.total});
  total+=audit.total;
 }
 console.log('WORKLOAD_PARITY='+JSON.stringify({courses:26,totalAssignedHours:Math.round(total/60*10)/10,discrepancies:bad}));
 assert.deepEqual(bad,[],'Student workload and independent audit differ; must fix accounting logic');
});
test('optional exams with suggested minutes do not inflate either assigned time summary',()=>{
 for(let n=21;n<=25;n++){
  const id='course-'+n,c=w.BAContent[id],optional=c.sectionExams.find(e=>e.id==='c'+n+'-v138-independent-transfer');
  assert.equal(optional.suggestedMinutes,90);
  const before=[w.BALearning.workload(c).minutes,w.BAWorkloadAudit.detail(c).total];
  optional.suggestedMinutes=999;
  assert.deepEqual([w.BALearning.workload(c).minutes,w.BAWorkloadAudit.detail(c).total],before);
 }
});
