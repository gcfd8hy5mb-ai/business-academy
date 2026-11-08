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
