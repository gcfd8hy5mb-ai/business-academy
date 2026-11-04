# Business Academy — Combined Level 2 Exam Inventory and 26-Course Independent Assessment Coverage

**Date:** November 3, 2026
**Source:** `gcfd8hy5mb-ai/business-academy`, `main`
**Status:** Source-based testing completed and optional new assessment exams deployed. Academic equivalence, live browser acceptance and Firebase synchronization remain unverified.

## Complete Level 2 inventory: method and findings
Level 2 has twenty-six source scripts (early `level2.js` through `level2-specialist-v58.js` and later `level2-independent-v59.js` through `level1-level2-decision-seminars-v72.js`). To avoid tool-execution limits, the early script group was executed in order and its multiple-choice questions captured. Its exam and question definitions were reconstructed into course objects, after which the late script group was executed in order.

The reconstructed combined Level 2 exam manifest contains:
- **296 multiple-choice question occurrences**.
- **278 unique normalized exact prompt strings**.
- **18 exact repeated prompt occurrences**, all across distinct courses, predominantly a set of three generic v58 questions reused in courses 07 through 13.
- **Zero repeated prompts within the same course** according to this narrow exact-string metric.
- **Zero invalid keyed answer-choice indices**.
- Eleven question IDs appear across two different course-specific default practice/exam sets (short IDs `p1`–`p6` and `e1`–`e5`). These are **cross-course IDs**, not confirmed collisions in the same course or assessment. The learning state keys answers by course; no unsafe renaming performed.
- Per course question counts: 07:43, 08:54, 09:33, 10:44, 11:33, 12:42, 13:47.

**Limitation:** The reconstruction preserves early exam questions/IDs but does not fully replay all early-stage course configuration and lesson metadata alongside the late scripts. The manifest is therefore a targeted *question-bank reconstruction*, not an exact entire-course UI snapshot. It also predates the newly published independent exams.

Machine-readable source manifests:
- `audits/data/2026-11-03-level2-early-question-manifest.json`
- `audits/data/2026-11-03-level2-combined-question-manifest.json`

## New optional exams: final six-course batch
Published `learning/level4-level5-independent-exams-v129.js` and added its script loader to `index.html` after existing v127 and v128 exam extensions:
- **6 independent optional exams** in courses 21–26 (all five Level 4 courses plus the final Level 5 course).
- **18 new mathematical multiple-choice questions**, all independently recomputed from stated hypothetical inputs and matched authored correct choices.
- A topic-specific executive written decision prompt and a four-part rubric per exam.
- All new exams use new IDs and question IDs, `optional:true`, and `minutes:0` in the required workload ledger; suggested duration is not counted as independently verified learner time.
- Existing historical exams, options, question IDs, keys and saved grades were not rewritten.

## Full five-level independent optional exam coverage
Combined:
- `learning/level1-level3-independent-exams-v127.js` — 13 optional exams, 26 questions.
- `learning/level2-independent-exams-v128.js` — 7 optional exams, 14 questions.
- `learning/level4-level5-independent-exams-v129.js` — 6 optional exams, 18 questions.

**Total: 26 new optional exams with 58 unique question IDs, covering all 26 courses.**

Source compatibility checks passed:
- 26 of 26 courses received one optional new exam.
- 58/58 answer indices valid, 58/58 include explanations; all have written exercises and four review criteria.
- Required lesson minutes unchanged when optional exams added.
- Historical attempt snapshots unchanged in a simulated learner store; optional exams alone do not award mastery.
- Source loaders for v127, v128 and v129 present in `index.html`.

## Open assessment-quality concerns
- **Legacy repeats remain**. Adding new exams does not remove the original repeated questions or substitute new required mastery examinations.
- Quantitative multiple choice can check an answer but cannot establish independently executed modeling, source attribution, professional judgment or a defensible board decision.
- Optional written prompts are self-reviewed without an independent qualified instructor. External subject-matter review remains necessary.
- The 58-question bank is **not an accreditation exam** and is not a stand-in for full academic assessment coverage in a program this large.
- Cross-course and near-duplicate *semantic* prompt review remains incomplete. An exact-string match audit will miss reworded duplication.
- Full unique study-hour accounting, actual time-on-task pilot and systematic source verification remain outstanding.
- Live iPhone, PWA, desktop, browser storage, offline and Firebase cloud-save acceptance have not been completed in this phase.

## Next large QA gates
1. Develop and test a compatibility-safe policy to retire the repeated v104/v58/v80 questions from *new* required exams only, while keeping historical attempts accessible and verifiable.
2. Independently grade substantive executive work using qualified expert reviewers; extend multiple-choice alternatives with numerical variation and more challenging written model defense.
3. Build a defensible per-course workload ledger for lesson instruction, independent assignments, readings, case work and exams, excluding optional overlap and unsupported nominal time.
4. Complete a real iPhone and desktop sign-in, grading, retry, storage and cross-device Firebase merge acceptance sequence.

**Verdict:** A verified combined Level 2 question inventory now exists, and every course in the five-level academy has a versioned new optional assessment without changing student progress. This is substantial internal QA progress, **not final academic or functional sign-off**.
