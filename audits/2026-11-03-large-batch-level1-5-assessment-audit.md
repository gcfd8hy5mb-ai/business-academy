# Business Academy — Large-Batch Academic QA: Levels 1–3 Transfer and Five-Level Numerical Regression
**Date:** November 3, 2026
**Repo:** gcfd8hy5mb-ai/business-academy
**Status:** New practice bank published. Source-level QA performed; not external accreditation or live browser/cloud acceptance.

## Completed: forty original transfer exercises for Levels 1–3
Published `learning/level1-level3-independent-numeric-v126.js` and loaded it after the already registered numeric modules in `index.html`.
- **20 course-aligned optional sets**, one for every course in Levels 1, 2 and 3.
- **Two authored quantitative scenarios per set, 40 questions total**: foundations, economics, managerial accounting, financial reporting, capital allocation, strategy, leadership, sales/marketing unit economics, governance, corporate valuation, analytics, venture investment, FX and technology decisions.
- Each question includes prompt, units, model answer, verification explanation, remedial guidance and numeric tolerance.
- Independent arithmetic reconstruction of all **40/40** answers matched the authored keys.
- The existing `BANumericGrade` checker accepts every valid model answer.
- There are no exam/question/lesson IDs modified by this extension. All 40 are new optional noncredit practice questions; they do not silently change previous graduation scores.

## Combined numerical bank registration
Executed the deployed `level2-numeric-v64.js` then optional `level4-independent-numeric-v106.js`, `level5-numeric-v125.js`, `level1-level3-independent-numeric-v126.js`, with initialized course fixtures in load-safe order.
- **80 distinct new numeric questions** registered across the three recent supplements: 40 v126 (Levels 1–3), 10 v106 (Level 4), and 30 v125 (Level 5).
- **35 new practice sets** in these supplements.
- **80/80 model answer inputs accepted** by the existing numeric grading engine, zero duplicate question IDs among the 80.
- Source-level validation found no missing values, units, worked explanations, remediation descriptions or invalid tolerances.
- Verified index.html contains all three optional content-loader references.
- Reusing an existing learning-state fixture did not alter prior progress/attempts during initialization; actual cross-device conflict behavior remains untested.

## Exam-bank duplication audit: verified scope and limitations
- **Level 1 (16 source scripts, isolated assembled level):** 237 multiple-choice questions inspected. Zero invalid correct-option indices; zero identical prompt repeats *within the same course*. Existing identical prompts reused *across different courses* are not captured by this course-level count.
- **Level 3 (15 source scripts, isolated assembled level):** 240 multiple-choice questions inspected. Zero invalid answer indices and zero identical repeats within individual courses; separate cross-course duplication and near paraphrases need review.
- **Level 2:** two source-file groups (12 early scripts and 14 later scripts) each individually compiled. The early group had 222 multiple-choice items, the later group 74; within each isolated group, zero repeated prompts within individual courses and zero invalid answer-key indices. **These counts are NOT an authoritative combined Level 2 total**, because source extensions may replace or append data and the groups were not assembled together in this phase.
- **Level 4 (12-script assembled level, preceding audit):** 140 questions across 36 section exams; **30 repeat occurrences** within courses tied to older v104 reinforcement. The older 75 count in Phase 2B used a different across-batch grouping; neither number represents the other's measurement.
- Earlier broader Phase 2B source-batch repetition metric (213 across batches) used different grouping and should not be presented as the current final application-wide number.
- New v126 exercises intentionally improve independent transfer and course relevance. **They do not remove cross-course repeated historical questions or retire legacy Level 4 exams.**

## Progress-safe historical-assessment policy
Existing exam attempts are stored with original question IDs and submitted answer indices. A future revised bank must not silently alter those IDs, options, scoring or historical attempts. A safe retirement workflow should:
1. Snapshot historical exam definition/version with each existing attempt before migration or preserve a historical source lookup by assessment ID.
2. Create new versioned assessment IDs and content for future independent attempts.
3. Keep historical grades readable, identify new-versus-old assessment versions in the UI, and never reinterpret saved answer indices under a new option order.
4. Exclude retired versions only from prospective mastery after an explicit and tested policy change, preserving awarded progress according to a documented transition rule.
5. Test grade histories, reloads, exports, Firebase merges, offline PWA and accessibility on real devices before deployment.

## Academic-hour and external evidence gates
Course-script `minutes` fields are **author-assigned estimates**, not a verified learning-time study. Completing the remaining academic review requires:
- Unique learning objectives and substantive instruction in every course; hours linked to named reading, multi-step exercises, writing and assessments rather than duplicate prompts.
- Validated problem-bank difficulty, intermediate reasoning, model-solution correctness, statistical and accounting interpretation and independent executive writing rubrics.
- Real student or reviewer time-on-task pilot, documented exclusions for optional repetition, no double-counting of overlap and transparent confidence ranges.
- Signed review by appropriately qualified independent subject experts. This is **not yet done**.

## Live acceptance still outstanding
Tests to date are primarily source-level JavaScript and limited event simulations. iPhone Safari/PWA and desktop testing, cross-device Firebase persistence, offline recovery, incorrect-answer remediation, exam retries, and cloud-conflict behavior need signed-off device tests. No automated tests in this phase establish a production Firebase save succeeded.

## Next large work batch
1. Assemble a single canonical 26-course question manifest and detect *cross-course* exact/near duplicates, as well as conceptual gaps, without changing historical exam IDs.
2. Write and validate new versioned independent exams where legacy repeat risks are material.
3. Establish a curriculum-level instructional-hour ledger and prepare actual-device acceptance scripts.
4. Complete external subject-matter review only after demonstrable accuracy and tested assessment integrity.

**Bottom line:** Forty new original level-specific questions have been published, bringing recently verified optional numerical coverage across the five levels to 80 new questions in 35 sets. Legacy repetition, academic workload verification and real-device/cloud acceptance remain open.
