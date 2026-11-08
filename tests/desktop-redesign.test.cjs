const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const source=fs.readFileSync('app-v28.js','utf8');
const lesson=fs.readFileSync('learning/workspace-v46.js','utf8');
const css=fs.readFileSync('desktop-executive.css','utf8');
const html=fs.readFileSync('index.html','utf8');
test('desktop app and lesson scripts still parse',()=>{
  assert.doesNotThrow(()=>new Function(source));
  assert.doesNotThrow(()=>new Function(lesson));
});
test('academy loads desktop overrides after existing desktop stylesheet',()=>{
  const original=html.indexOf('desktop.css?');
  const executive=html.indexOf('desktop-executive.css?');
  assert.ok(original>0&&executive>original);
  assert.match(css,/@media\s*\(min-width:\s*960px\)/);
});
test('lesson outline retains working lesson focus and study tabs',()=>{
  assert.match(lesson,/function desktopLessonLayout\(/);
  assert.match(lesson,/ba-classroom-outline/);
  assert.match(lesson,/data-learn-focus/);
  assert.match(lesson,/data-learn-tab="practice"/);
  assert.match(lesson,/data-learn-tab="exam"/);
  assert.match(lesson,/desktopLessonLayout\(c,s,body\)/);
});
test('simulator metrics, decisions and history have separate panels',()=>{
  const start=source.indexOf('else if(page==="company")');
  const end=source.indexOf('else if(page==="historical-case")',start);
  assert.ok(start>=0&&end>start);
  const company=source.slice(start,end);
  const metrics=company.indexOf('class="card dark ba-simulator-metrics"');
  const decision=company.indexOf('class="card ba-decision-panel"');
  const history=company.indexOf('class="card dark ba-history-panel"');
  assert.ok(metrics>=0&&metrics<decision&&decision<history);
  assert.match(company,/data-apply="1"/);
  assert.match(company,/data-decision=/);
  assert.match(company,/data\.history/);
  assert.match(company,/money\(data\.cash\)/);
  assert.match(company,/data\.customers/);
});
test('mobile lesson rails are hidden, desktop layout is responsive',()=>{
  assert.match(css,/@media\s*\(max-width:\s*959px\)/);
  assert.match(css,/\.ba-classroom-outline,#app \.ba-classroom-tools\s*\{display:none\}/);
  assert.match(css,/\.ba-simulator-metrics/);
  assert.match(css,/@media\s*\(min-width:1200px\)\s*and\s*\(max-width:1399px\)/);
});

test('new executive portal is a distinct desktop page with functional routing',()=>{
  assert.match(source,/function desktopExecutiveHome\(pct\)/);
  assert.match(source,/desktopExecutiveHome\(pct\)/);
  assert.match(source,/class="academy-home ba-mobile-home"/);
  for(const label of ['Executive Dashboard','Current Studies','Explore Your Learning Path','Corporate Decision Lab','Academy at a Glance']){
    assert.ok(source.includes(label),label);
  }
  assert.match(source,/class="ba-executive-portal"/);
  assert.match(source,/class="ba-current-course" data-go="courses"/);
  assert.match(source,/class="ba-corporate-feature"/);
  assert.match(source,/data-go="company"/);
  assert.match(css,/\.academy-home\.ba-mobile-home\s*\{display:none!important\}/);
  assert.match(css,/@media \(max-width:959px\)/);
});

test('weekly simulator rotates scenarios rather than repeating the week-one question',()=>{
 const start=source.indexOf('const simulatorScenarios=[');
 const end=source.indexOf('let activeHistoricalCase=',start);
 assert.ok(start>0&&end>start,'scenario catalog exists');
 const scenarios=new Function(source.slice(start,end)+';return simulatorScenarios')();
 assert.ok(scenarios.length>=8);
 assert.equal(new Set(scenarios.map(x=>x.title)).size,scenarios.length);
 assert.ok(scenarios.every(x=>x.options.length===4));
 assert.ok(scenarios.every(x=>x.options.some(o=>o.cost===0)));
 assert.ok(scenarios.every(x=>x.options.every(o=>Number.isFinite(o.cost)&&Number.isFinite(o.customers)&&Number.isFinite(o.reputation))));
 assert.match(source,/function currentSimulatorScenario\(\)/);
 assert.match(source,/data\.week\+\+/);
 assert.match(source,/if\(!save\(\)\)/);
 assert.match(source,/decision=-1;alert\(/);
 assert.match(source,/scenario:scenario\.title/);
 assert.match(source,/currentSimulatorScenario\(\)\.prompt/);
});
test('secondary desktop pages have executive layouts without changing existing actions',()=>{
 assert.match(source,/class="academy-subpage ba-catalog-page"/);
 assert.match(source,/class="ba-case-library"/);
 assert.match(source,/class="ba-student-records"/);
 assert.match(source,/data-cloud-settings-open="1"/);
 assert.match(source,/data-historical-open/);
 assert.match(css,/\.ba-case-grid/);
 assert.match(css,/\.ba-record-layout/);
});

test('approved desktop layout uses slim navigation and a reader-first laptop layout',()=>{
 assert.match(css,/nav\s*\{width:176px/);
 assert.match(css,/#app\s*\{width:calc\(100% - 176px\)/);
 assert.match(css,/@media\(min-width:1200px\) and \(max-width:1499px\)/);
 assert.match(css,/\.ba-desktop-classroom\s*\{display:grid;grid-template-columns:180px minmax\(0,1fr\)/);
 assert.match(css,/\.ba-classroom-tools\s*\{display:none\}/);
 assert.match(css,/\.learning-flow-hint\s*\{display:none\}/);
 assert.match(css,/@media\(min-width:1500px\)/);
});

test('executive simulator uses recorded business data instead of invented financial statements',()=>{
 assert.match(source,/function simulatorTrend\(\)/);
 assert.match(source,/function simulatorBoardReview\(\)/);
 assert.match(source,/class="ba-sim-analytics"/);
 assert.match(source,/simulatorTrend\(\) \+ simulatorBoardReview\(\)/);
 assert.match(source,/The chart shows saved cash balances, not revenue or profit forecasts/);
 assert.match(source,/Cash Performance Trend/);
 assert.match(source,/Management Review/);
 assert.match(css,/\.ba-sim-analytics/);
});

test('course catalog renders executive cards with real authored status and existing navigation',()=>{
 assert.match(lesson,/class="course-row ba-course-card"/);
 assert.match(lesson,/data-learn-course/);
 assert.match(lesson,/COURSEWORK AVAILABLE/);
 assert.match(lesson,/SELF-ASSESSED MASTERY/);
 assert.match(lesson,/Coursework pending/);
 assert.match(css,/\.curriculum-level-body>\.curriculum-inner\s*\{display:grid;grid-template-columns:repeat\(2,minmax\(0,1fr\)\)/);
 assert.match(css,/\.ba-course-card/);
 assert.match(css,/@media \(max-width:959px\)/);
});

test('study notes use the existing learning-draft persistence path',()=>{
 assert.match(lesson,/noteKey='study-note:'\+selected\.id/);
 assert.match(lesson,/data-learn-draft/);
 assert.match(lesson,/s\.drafts\?\.\[noteKey\]/);
 assert.match(lesson,/s\.drafts\[key\]=el\.value;persist\(\)/);
 assert.match(lesson,/ba-mobile-study-tools/);
 assert.match(lesson,/ba-classroom-tools/);
 assert.match(lesson,/noteField\.replace\('for="ba-note-'/);
 assert.match(css,/\.ba-course-breadcrumb/);
 assert.match(css,/\.learning-question/);
 assert.match(css,/@media \(min-width:1500px\)/);
});

test('exam shows answered count without changing legacy score or question ordering',()=>{
 assert.match(lesson,/const count=a\.questions\.length,answered=a\.questions\.filter/);
 assert.match(lesson,/class="ba-exam-status"/);
 assert.match(lesson,/role="progressbar"/);
 assert.match(lesson,/Last score /);
 assert.match(lesson,/data-learn-grade/);
 assert.match(css,/\.ba-exam-status/);
});
test('simulation shows only predefined scenario effects, retaining original submit flow',()=>{
 assert.match(source,/function simulatorDecisionImpact\(\)/);
 assert.match(source,/chosen\.cost/);
 assert.match(source,/chosen\.customers/);
 assert.match(source,/chosen\.reputation/);
 assert.match(source,/simulatorDecisionImpact\(\)/);
 assert.match(source,/data-apply="1"/);
 assert.match(source,/scenario:scenario\.title/);
 assert.match(css,/\.ba-decision-impact/);
});

test('student portal reports actual authored progress and recorded exams',()=>{
 assert.match(lesson,/function records\(\)/);
 assert.match(lesson,/const rows=courses\(\),authored=rows\.filter/);
 assert.match(lesson,/L\.mastery\(store,c\)\.mastered/);
 assert.match(lesson,/L\.latest\(L\.state\(store,c\.id\),kind\)/);
 assert.match(lesson,/Submitted exam results/);
 assert.match(lesson,/not university credits, independently reviewed grades/);
 assert.match(lesson,/window\.BAWorkspace=\{render,button,summary,records,overallProgress,progressFor\}/);
 assert.match(source,/BAWorkspace\.records\(\)/);
 assert.match(source,/data-cloud-settings-open="1"/);
 assert.match(css,/\.ba-record-metrics/);
 assert.match(css,/\.ba-record-exam/);
});

test('simulator does not claim a saved week when local storage fails',()=>{
 assert.match(source,/function save\(\)\{try\{localStorage\.setItem/);
 assert.match(source,/catch\(e\)\{console\.error\("Business Academy local save failed"/);
 assert.match(source,/const beforeDecision=\{cash:data\.cash,customers:data\.customers,rep:data\.rep,week:data\.week,history:\[\.\.\.data\.history\]\}/);
 assert.match(source,/if\(!save\(\)\)\{Object\.assign\(data,beforeDecision\)/);
 assert.match(source,/Your decision was NOT saved/);
 assert.match(source,/cross-device saving requires connecting Cloud Saving/);
});

test('academy progress counts required course activity and exposes its percentage on the homepage',()=>{
 assert.match(lesson,/function progressFor\(course\)/);
 assert.match(lesson,/for\(const l of all\)required\.push/);
 assert.match(lesson,/course\.practice/);
 assert.match(lesson,/course\.sectionExams/);
 assert.match(lesson,/course\.portfolioSections/);
 assert.match(lesson,/all\.length\?Math\.round\(100\*done\/Math\.max\(total,1\)\):0/);
 assert.match(lesson,/function overallProgress\(\)/);
 assert.match(lesson,/Math\.round\(done\/Math\.max\(1,all\.length\)\)/);
 assert.match(source,/const academyProgress=BAWorkspace\.overallProgress\(\)/);
 assert.match(source,/class="ba-home-progress"/);
 assert.match(source,/View detailed progress/);
 assert.match(lesson,/class="ba-course-completion"/);
 assert.match(lesson,/class="ba-progress-overall"/);
 assert.match(css,/\.ba-home-progress-track/);
});
