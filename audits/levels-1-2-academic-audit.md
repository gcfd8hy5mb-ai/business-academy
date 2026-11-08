# Business Academy — Academic Audit: Levels 1–2

**Status:** First internal audit batch; independent academic sign-off **not** obtained.  
**Branch:** `audit/levels-1-2-academic-review`  
**Date:** 2026-11-08

## Scope of this batch

This first reproducible test suite inspects the **original eight course definitions** in `learning/level1.js` (courses 01–06) and `learning/level2.js` (courses 07–08), **before the many subsequent level expansion scripts are loaded**. This is not a review of every lesson in Levels 1–2, the full 26-course program, its equivalence to an MBA, or the correctness of every assertion.

## Verified findings

- Eight original course definitions loaded, with **24 base lessons** and **88 base practice/examination questions**.
- Original modules include learning outcomes, source-linked reading assignments, worked examples, transfer exercises, tutors, and portfolio rubrics.
- The initial question banks contained no invalid option indices or duplicate question IDs under the tested scope.
- Independent arithmetic spot checks covered segment margin changes, compound percentages, break-even, supply/demand equilibrium, net leverage, depreciation, and cost variance.
- **18 answer explanations were too terse** (essentially a formula without interpretation). Expanded 16 in `learning/level1.js` and two in `learning/level2.js`. Question IDs, choices, correct indices, lesson times, and grading logic remain unchanged.
- `tests/academic-level1-level2-baseline.test.cjs` passed **4/4 tests and 752 assertions** for these initial definitions after the corrections.

## Unresolved work before any academic-completeness claim

1. Load **all** Level 1–2 extension scripts in production order and inventory each complete course's outcomes, unique lessons, authored teaching depth, numeric drills, independent question banks, capstones, and case evidence.
2. Identify repeated exam prompts and verify whether the later independent exam variants prevent overreliance on memorized answer keys.
3. Independently solve additional numerical problems and examine sensitivity assumptions, units, edge cases, and why incorrect choices are wrong.
4. Check the availability, accuracy and licensing context of linked university readings and corporate filings.
5. Verify the connection among intended learning outcomes, lessons, cases, examinations, portfolios, time estimates, and mastery thresholds.
6. Conduct subject-matter expert and independent academic review. No university credit, degree equivalency, accreditation, or academic sign-off is established by this internal audit.

## Safety / compatibility

Changes in this batch are educational text and offline test files only. They do not change Firebase settings, local storage keys, existing progress, answer IDs, correct indices, or grading algorithms. Merge only after review of the draft pull request.

## Batch 2 — Level 1 extended source and Level 2 integration (2026-11-08)

### Expanded evidence

- Loaded the first **15 Level 1 scripts in production order**, through `level1-final-v39.js`. Their resulting six courses contained **86 lessons** (13, 17, 13, 13, 16, 14), with **237 assessment questions** (35, 45, 35, 35, 40, 47). No duplicate lesson IDs or invalid answer-option indices were found in that intermediate snapshot.
- Independently loaded the **first eight Level 2 scripts** from `level2.js` through `level2-commercial-people-v54.js`, producing all seven original Level 2 courses (07–13) with **57 lessons**, **120 examined questions**, at least three applications and three section examinations per course.
- In that Level 2 snapshot, no duplicate lesson IDs, duplicate question IDs, or out-of-range answer indices were found.
- Found **24 Level 2 question explanations shorter than 16 characters** in the integrated snapshot (despite mathematically correct answer keys). Expanded those explanations in `level2-accounting-v42.js`, `level2-reporting-control-v50.js`, `level2-enterprise-v51.js`, `level2-integrated-v52.js`, `level2-quantitative-v53.js`, and `level2-commercial-people-v54.js`.
- Independently checked arithmetic and units for selected Level 2 questions on receivables, PPE, allowance balances, consolidated revenue, EBIT, residual income, contribution, weighted sales-pipeline bookings, expected savings and contract profitability.
- New `tests/academic-level2-integration.test.cjs` passed **4 tests and 554 assertions** on this intermediate Level 2 snapshot. Earlier starter-course test suite passed **4 tests and 752 assertions**. This is **8 tests and 1,306 assertions** across the two academic suites, not a claim of full-course review.
- The Level 2 changes are text-only improvements to rationales: no question text, identifiers, correct-answer indices, grading thresholds, required minutes or cloud persistence keys changed.

### Remaining coverage limitations

The production page loads many later extensions beyond this snapshot, including Level 2 versions 55–72 and 128, shared Levels 1–3 exam and calculation addenda, and Level 1–2 long-form teaching depth version 137. A full integrated runtime inventory must load these in production order alongside all dependencies before making any curriculum-completion claim. The present test suites verify selected authored material and catch structural defects; they do not independently validate every numerical result or factual claim.

Continue with full extension loading, cross-file duplicate detection, advanced-case numerical checking, source-citation verification and independent subject-matter review. These are still open.

## Batch 3 — Advanced Level 2 extension compatibility and full-composition checks

- Identified the later Level 2 script files through `index.html` in their production load order, including executive cases, section examinations, optional numeric drills, independent exam banks, and the source-linked teaching expansion.
- Found a substantive compatibility issue in `learning/level2-numeric-v64.js`: it used `c.numericDrills=[...]`, replacing all previously registered numeric exercises. Changed it to append only the missing stable drill ID, preserving any prior drills and preventing duplicates on subsequent initialization. Existing numeric question IDs, answer values, tolerances and scoring helpers are unchanged.
- Executed four advanced extension scripts with realistic pre-existing drill fixtures: `level2-numeric-v64.js`, `level2-multistep-v65.js`, `level2-hr-independent-v71.js`, and `level2-independent-exams-v128.js`. All seven Level 2 courses retained original drills; none produced invalid drill targets or out-of-range exam answer indices. Reloading v64 introduced no duplicates.
- Added `tests/academic-level2-extension-integrity.test.cjs`; the three focused tests passed **94 assertions**.
- Added `tests/academic-level1-level2-composition.test.cjs` to load Level 1–2 sources in the actual HTML order, check assessment and lesson ID uniqueness, verify numerical practice structure and required assessment routes. This covers later Level 2 additions through v72, the optional v128 independent examinations, and Level 1–2 teaching-depth v137. Shared Level 1–3 modules v126 and v127 are excluded from this scoped run because they also require Level 3 content.
- Added a separate GitHub Actions workflow to run the academic suites on the audit branch. GitHub's existing mathematics-regression workflow passed. The first broader composition run passed its source-load, ID integrity and numeric data checks; it initially failed one overly strict test that incorrectly expected every course to have a standalone main exam. Courses using required section examinations satisfy the assessment pathway. The test has been revised to check required graded assessments instead.

### Outstanding

This audit is structural and selectively numerical, not a complete verification of every authored answer, teaching claim, source link or real corporate filing. Check the latest CI status, extend the audit to shared Level 1–3 modules in whole-catalog load order, and complete independent academic review before any claim of accreditation or MBA equivalency. No student data, progress flags, or grading algorithms were modified.

## Batch 4 — Shared Level 1–3 independent assessments and quantitative validation (2026-11-08)

### Verified scope

The three shared files `level1-level3-independent-numeric-v126.js`, `level1-level3-independent-exams-v127.js`, and `level2-independent-exams-v128.js` were loaded in their relative production order using fixtures containing 20 pre-existing Level 1–3 course records. They registered **40 numeric-transfer questions and 40 independent optional exam questions**, covering courses 01–20. Historical assessment and numeric-drill fixtures were retained; repeated loading produced no extra assessments. This isolated check verifies cross-extension compatibility; it does not simulate the entire 26-course production application or independently verify all content claims.

Selected independent numerical answers were recalculated (operating EBIT, capital-allocation selection, combined EBIT margin, discounted project NPV, FCFF, share dilution, and capacity valuation).

### Corrections

- `level2-independent-exams-v128.js`, course 08, optional NPV question: the wording requested **two-decimal rounding** but its options contained five-decimal values. Aligned all four answer choices to two decimals, including the correct answer **2.76**. Question ID and correct-answer index remain unchanged. The answer-choice change may alter the recorded exam snapshot fingerprint on a future attempt; historic submissions are not rewritten.
- `level1-level3-independent-exams-v127.js`, course 14, adjusted present value question: expanded a formula-only explanation to distinguish unlevered NPV, financing tax-shield benefit, and expected distress cost. Correct-answer index and question ID remain unchanged.

### Verification

Added `tests/academic-shared-independent-assessments.test.cjs` to the academic workflow, covering original assessment preservation, new ID uniqueness, optional exam semantics, reload idempotency, and sample numerical recalculation. Initial CI runs found a two-option test-fixture error and a short real APV rationale; the fixture and explanation were corrected. The final CI status must be checked before treating this batch as passing.

### Remaining work

The audit has not yet verified all quantitative questions and financial assumptions, checked live external reading links and original corporate filings against their dates, or obtained independent expert evaluation. The shared 1–3 extension compatibility test uses realistic course fixtures rather than every late production module; full-catalog runtime end-to-end assessment and regression checks remain necessary.
