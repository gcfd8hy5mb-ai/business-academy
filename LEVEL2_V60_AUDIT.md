# Business Academy Level 2 Coursework Audit — Version 60

Audit date: 2026-10-30. Scope: runtime assembly of learning/level2.js and expansion modules v42, v48, v50–v60 on main.

## Observed inventory
| Course | Authored lessons | Objective questions | Section exams | Applications | Section portfolios | Assigned study hours (approx.) |
|---|---:|---:|---:|---:|---:|---:|
| 07 Financial Accounting | 16 | 39 | 7 | 7 | 7 | 86.7 |
| 08 Managerial Accounting | 18 | 50 | 9 | 9 | 9 | 102.7 |
| 09 Marketing & Consumer Behavior | 12 | 29 | 6 | 6 | 6 | 66.7 |
| 10 Sales & Negotiation | 14 | 40 | 8 | 8 | 8 | 85.9 |
| 11 Operations & Supply Chain | 12 | 29 | 6 | 6 | 6 | 66.7 |
| 12 Leadership & Human Resources | 13 | 34 | 7 | 7 | 7 | 76.2 |
| 13 Business Law, Ethics & Taxes | 13 | 43 | 7 | 6 | 7 | 77.7 |
| **Total** | **98** | **264** | **50** | **49** | **50** | **562.6** |

Workload is an estimate from explicit `minutes` assigned to lesson, reading, objective assessment, section exam, case/application, and portfolio fields where present. It is NOT demonstrated seat time, instructional quality, or university credit.

## Structural checks
- All 14 Level 2 source modules evaluated and assembled with no runtime errors in a simple mock-window harness.
- All 264 assembled objective questions had valid option indices and nonempty explanations; this is not proof of factual/mathematical accuracy.
- All 7 courses have 8 lesson bodies shorter than 550 characters (56 short bodies of 98 lessons overall). The brevity is especially noticeable in Courses 09–13.
- Answer positions are biased toward 0/1 compared with 3 in multiple courses. Exam rigor and distractor quality still need review.
- Existing written essays and portfolios use student rubric self-review, not automated or external assessment.
- No full end-to-end iPhone Safari/browser test or independent mathematical answer audit was performed in this pass.

## Priorities for Version 61+
1. **Depth first**: expand short lesson bodies into genuinely rigorous explanatory instruction, multiple independently solved examples, assumption checks, and common-error analysis. Prioritize Courses 09–13, then 07–08.
2. **Assessment integrity**: add original calculation-intensive and decision-based questions; vary answer positions; calculate correct answers independently in tests rather than trusting hand-typed keys.
3. **Avoid hour inflation**: do not add new time estimates solely to show progress; audit workload against genuine activities and course-level goals.
4. **Grading**: distinguish objective scoring from self-evaluated written work; develop deterministic numerical grading and stronger evidence gates when possible, without paid AI.
5. **Keep user state**: do not rename authored course IDs or storage keys, and preserve approved visual design.
6. **Verify integration**: run tests plus iPhone-sized browser checks and verify PWA/GitHub Pages deployment.
7. **Do not equate readiness with degrees**: mastery and credential claims require independent evaluation and accreditation that are absent.

## Audit limitations
This is a structural count and text-length review, not a full subject-expert syllabus benchmark or a verification of every rubric, model answer, source, and legal/tax assertion. A claimed hour is assigned work, not validated learning time. Duplicated conceptual content and cognitive difficulty require a separate expert review.
