# Business Academy — Four-Batch Five-Level Curriculum Stress Audit

**Run date:** 2026-11-10 (America/Chicago)  
**Audit branch:** `audit/levels-1-2-academic-review` (unmerged).  
**Artifact:** See the latest GitHub Actions `business-academy-five-level-reviewer-evidence` archive.  
**Status:** All four new automated batches passed on CI, but full independent disciplinary review, observed student outcomes, source-document accuracy, and real-device acceptance remain separately outstanding.

## Batch 1 — Numerical and examination integrity

- Loaded all 26 actual courses in production script order and validated each objective item's stable ID, nonblank question, unique choices, legal correct index and explanatory content.
- Validated numeric drill targets are finite and prompts are present. This is not an independent proof of the calculation behind each numerical target.
- Required existing independent Level 4 and Level 5 selected mathematical formula regressions to remain in the combined academic CI suite.
- The prior all-catalog answer-format scan found zero duplicated choices, zero empty explanations, and no two-decimal choice mismatch under the tested phrase patterns.
- **Known unresolved:** repeated prompts remain in archived required Level 4 exams. New optional independent problems do not retire the legacy graded bank. The automated scanner is not a substitute for manually recalculating all financial/statistics/economics questions.

## Batch 2 — Instructional depth and academic progression

Actual constructed modules and lesson fields, rather than planning-only figures, were inspected. Every authored lesson contains a worked-example field and an independent transfer-task field, across:

| Level | Courses | Lessons | Worked-example fields | Transfer-task fields |
|---|---:|---:|---:|---:|
| 1 | 6 | 92 | 92 | 92 |
| 2 | 7 | 175 | 175 | 175 |
| 3 | 7 | 181 | 181 | 181 |
| 4 | 5 | 71 | 71 | 71 |
| 5 | 1 | 30 | 30 | 30 |

The Level 5 integration lessons include specific evidence checkpoints. These counts confirm content availability, **not** the quality of the examples, the cognitive rigor of each task, or a measured progression to MBA-equivalent ability. A qualified examiner must still independently evaluate content depth, prerequisite sequencing, and transfer-task difficulty.

## Batch 3 — Corporate case, source, and final-capstone evidence

The actual case/portfolio metadata was inventoried by level:

| Level | Authored case / portfolio records | Direct reading URLs |
|---|---:|---:|
| 1 | 94 | 12 |
| 2 | 178 | 14 |
| 3 | 129 | 8 |
| 4 | 41 | 5 |
| 5 | 6 | 2 |

All levels have applied work. The integrated Level 5 project has a scored required assessment and portfolio submissions. Generic links and case source names are **not** equivalent to verified dated corporate filings. Detailed case-source accuracy, permissions, business-model assumptions, and evidence of capstone performance must still be reviewed.

## Batch 4 — Simulated student mastery, failure, and history preservation

Used an isolated in-memory learning model with the actual 26-course curriculum:

1. An unstarted learner did **not** earn mastery on any course.
2. Missing answers could not be graded as a completed examination, and deliberately wrong answer submissions did not earn passing scores.
3. A synthetic learner with all required lesson IDs, correct objective answers and maximally self-rated written work reached mastery on **26/26** courses **without taking optional independent Level 4 exams**.
4. Removing a completed lesson prevented mastery again.
5. Historical exam-attempt scores, question IDs and key fingerprints survived an answer retry and storage JSON round trip.

These are simulated progression tests only; they do not prove that students can independently write correct case analyses. Setting every self-review rubric to 4 is a synthetic fixture, **not evidence of external grading**.

## Code and workflow

- New audit module: `audits/four-batch-curriculum-stress.cjs` (read-only, JSON and Markdown evidence).
- Tests: `academic-batch1-numeric-exam.test.cjs`, `academic-batch2-depth-progression.test.cjs`, `academic-batch3-cases-capstone.test.cjs`, `academic-batch4-student-stress.test.cjs`.
- A first synthetic-student test failure came from using a content object without the stable `course-XX` ID that the *live* learning catalog supplies. Corrected the test fixture to match production's ID assignment, isolated incomplete attempts, and reran all CI tests. This was a test-harness error, **not** evidence of a live grading regression.
- Last confirmed four-batch CI result before this report: **105/105 academic tests**, **27/27 desktop source regression tests**, **104 static routes**, and separate historical mathematics regression **passed**.
- No Firebase migrations, historical question changes, student-data resets, unauthorized deployment, or live changes were performed.

## Open defects and independent review queue

**Legacy Level 4 repeated required questions:** Must be retired under an approved cohort/version scheme without changing existing learner grade fingerprints. The shadow report already defines required safeguards; it does not activate them.

**Academic outcome validity:** A separate provisional mapping found 84 declared learning outcomes with 22 that lacked lexical matches to required multiple-choice questions. All 22 have candidate required written-case/portfolio evidence, but a human must still inspect direct measurement and independently marked real submissions. Do not call that review complete based on keyword matching.

**Source integrity and factual precision:** The reviewer bibliography lists 41 linked reading records across levels. Only selected source entry points have been opened; all exact corporate claims, dates, disclosure definitions and copyright permissions require appropriate document-level confirmation.

**Workload calibration:** 2,305 original planned hours versus 3,076.8 assigned metadata hours. The app and independent audit agree on the assigned minutes, but actual learner study hours are not verified.

**Physical acceptance:** iPhone Safari, installed Home Screen, desktop learning flows, simulator, and Firebase cross-device sync remain in the real-device checklist as **NOT RUN**. Passing Node and static HTTP tests is not sufficient.

**Final independent sign-off:** Not obtained; no document should imply accreditation, transferable college credit, a recognized university MBA, or independently demonstrated graduate competencies.

## Release interpretation

The four requested **automated audit batches are completed and passing**. The curriculum is still a candidate for subject-matter validation and final device acceptance; this report is not a full educational-quality certification. Keep the audit PR as a draft until owner approval and the required checks are actually observed.
