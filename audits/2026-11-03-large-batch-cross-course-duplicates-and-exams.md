# Business Academy — Large-Batch QA: Cross-Course Repetition and Versioned Independent Exams
**Date:** November 3, 2026
**Repository:** `gcfd8hy5mb-ai/business-academy`
**Status:** Repetition analysis and versioned optional assessment releases completed; legacy exam retirement and live cross-device testing remain open.

## Assessed cross-course repetition (actual source assemblies)
**Level 1:** Loaded 16 Level 1 scripts in sequence, including the original content initializer. Exam inventory contained **237 multiple-choice questions**, **177 unique normalized prompts**, and **60 exact duplicate prompt occurrences across different courses**. No identical repeats were detected within individual courses and no invalid keyed choice indices found in this source assembly. Twelve common executive decision/governance prompts appear again in each of courses 02–06.

**Level 3:** Loaded 15 deployed Level 3 scripts. Exam inventory contained **240 multiple-choice questions**, **180 unique normalized prompts**, and **60 exact repeated occurrences across different courses**. No identical repeats were found within courses and no invalid answer indices. Repeated generic executive-defense and sourcing questions cross courses 14–20.

**Level 4:** Prior 12-script assembled review found **140 questions**, with **30 exact repeated occurrences within individual courses**, driven by v104 short exam reinforcement. This batch did not modify historical v104 exams.

**Level 2:** Earlier work inspected the early and late scripts in *separate* assemblies (222 and 74 question occurrences respectively, with no within-course repeats inside either grouping). The exact cross-course repetition count for the **single fully assembled Level 2 bank** remains unverified. Do not add the early+late counts as if they were an authoritative deployed unique total. The older Phase 2B source-batch global metric (213) measures a different grouping and must not be equated to the new within/cross-course counts.

## Substantial progress-safe assessment improvement
Published and loaded:
- `learning/level1-level3-independent-exams-v127.js` — **13 new optional versioned exams** (6 Level 1 courses and 7 Level 3 courses), with **26 new independent multiple-choice calculations** and course-specific executive writing prompts/rubrics.
- `learning/level2-independent-exams-v128.js` — **7 new optional versioned exams** across all Level 2 courses, adding **14 separate multiple-choice quantitative scenarios** and written decision work.
- `index.html` now loads both files after the existing numeric practice extensions.
- Total: **20 new optional versioned exams with 40 newly authored and mathematically checked questions** across all courses in Levels 1–3.

Each exam uses a **new assessment ID and new question IDs**, with valid answer indices, an explanation, remediation guidance and a written decision problem. The old exam IDs, original answer indices, recorded attempts and scores have **not** been rewritten. These new exams remain optional and explicitly carry `minutes:0` in the required-workload ledger, with suggested (not verified) assessment duration stated in the instructions.

## Verification evidence
- 20/20 new exam registrations loaded with 40/40 unique question IDs.
- **40/40** new numerical model answers independently reconstructed from the stated quantitative inputs and checked against the authored answer choices.
- All 40 question answer-key indices point to valid options.
- Isolated source registration and `core-v110` mastery tests verified that optional exams do **not** add required hours or change the required-exam mastery rules.
- A simulated historical attempt score and its saved answer snapshot remained unchanged during registration.
- `index.html` script-loader references for both new files verified.
- No live Safari, PWA, desktop, Firebase account or accessibility acceptance test in this batch.

## Deliberate limitations
Adding distinct independent assessments is an instructional enhancement, **not the removal of existing repetitive exam prompts**. Existing questions remain available for historical compatibility. Passing an optional exam does not automatically establish a higher degree or independently certified executive competence; the written assignments use self-review rubrics absent qualified external marking.

### Major remaining gates
1. Reconstruct **one final fully assembled Level 2 manifest** and calculate exact cross-course and near-duplicate question counts.
2. Build a versioned-retirement policy: old completed attempts must remain interpretable; prospective mastery/assessment requirements may change only after compatibility validation and student notice.
3. Review novel assessments for distractor strength, qualitative reasoning, accessibility and authentic executive difficulty. Check in real browser and signed-in account; source tests alone are insufficient.
4. Reconcile workload by actual readings, independent exercises, written case time, supervised exams and measured student time, rather than metadata alone.
5. Commission qualified external review of content, source authority and equivalency claims only once internal correctness and device functionality have been documented.

**Verdict:** A large batch of 40 new case-specific exam questions in 20 versioned optional exams has passed independent numeric checks and structural preservation testing. Significant legacy question repetition persists; do not call the five-level curriculum fully audited or academically certified.
