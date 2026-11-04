# Business Academy — Large Batch: Original Level 4 Executive Exams and Level 2 Numeric Grading Integrity

**Date:** November 4, 2026
**Repository:** `gcfd8hy5mb-ai/business-academy`
**Status:** Regression tests added and executed against repository source; one genuine prospective input-validation defect corrected. GitHub-hosted Actions outcome not independently confirmed.

## New regression coverage
1. `audits/scripts/level4-executive-final-regression-v143.cjs` loads the five original Level 4 source banks v95–v99, checks **45** exam questions for unique IDs, valid answer indices and nonempty feedback, and independently reconstructs **16** arithmetic results from their stated case inputs. **PASS: 45 questions, 16 numerical models, zero detected failures.**
2. `audits/scripts/level2-numeric-multistep-regression-v144.cjs` loads v64 numeric practice and v65 multistep practices in actual order. Across seven Level 2 courses it reconstructs **14 v64** and **21 v65** numerical results, checks unique IDs and grader acceptance of their official values, and includes malformed number-entry tests. **PASS: 35 questions, 35 calculations, zero failures after the parser correction.**

**This batch: 80 additional question or drill checks, including 51 independently reconstructed calculations.**

## A real parser defect found and fixed
The prior `BANumericGrade.parse` implementation removed all commas anywhere in input before validating the resulting number. Thus malformed values such as `1,2,3` were interpreted as `123` rather than rejected. This is not an incorrect answer key; it is a **numeric input-validity defect**.

Updated `learning/level2-numeric-v64.js` to accept ordinary decimal and properly grouped thousands forms (including currency-prefixed values), rejecting malformed groupings, embedded whitespace, scientific notation and non-finite text. Preserved `BANumericGrade.check`'s original tolerance semantics and all existing numeric question IDs, target values and explanations. The regression suite now confirms malformed `1,2,3` is rejected and all 35 existing numeric bank answers still pass.

Updated the `index.html` asset URL to `learning/level2-numeric-v64.js?v=145` so browsers can fetch the amended source instead of reusing the prior version. No learner records were migrated, deleted or rewritten.

## Automatic test configuration
Extended `.github/workflows/academic-math-regression.yml` from five to **seven** read-only Node test steps, adding v143 and v144. Configured push/PR path filters include:
- Original Level 4 v95–v99 exam source checks through the new scripts.
- Level 2 numeric v64 and multistep v65.
- All previously configured Level 1–5 numerical regression sources and their tests.

**Limitation:** Some old Level 4 source paths (v95–v99) are not individually included as direct workflow filters yet; future pushes changing only those files need explicit path-filter expansion. The tests run when the workflow is otherwise triggered. GitHub-hosted green CI has not been observed through an authoritative Actions workflow result in this batch. Source tests were executed in a restricted JavaScript environment emulating Node built-ins, not in the GitHub runner itself.

## Current cumulative targeted coverage
Prior batches had **126** independently reconstructed numerical results. This batch adds **51**, giving **177 independently reconstructed calculations** in the focused regression suites. Multiple-choice metadata, answer-option selection and non-math governance questions are additional checks and should not be added to the numerical count.

**Scope caveat:** These checks cover selected Level 1–5 practice and exam banks, not every question, every explanatory sentence, or every real-company historical claim. Passing them is not certification of MBA equivalence, academically justified study hours, writing-grade quality or source accuracy.

## Priority outstanding work
- Expand the regression bank to remaining required exams and independently judge substantive meaning of the calculations and choices.
- Add all v95–v99 Level 4 source files to the workflow's trigger filters.
- Confirm real GitHub-hosted Actions results; investigate failures if any.
- Test production iPhone Safari/PWA and desktop numeric entry with ordinary and malformed values, persistence of submitted answers and signed-in Firebase state across devices.
- Develop compatibility-safe retirement of reused historical questions without reinterpreting previously scored attempts.
- Validate assigned academic hours from observable tasks and real learner sessions; obtain qualified external academic review.

**Verdict:** A previously permissive numeric parser is corrected without modifying stored grades; two new repeatable test suites verify 80 additional items and 51 calculated outcomes. Actual learner-device/cloud acceptance and independent educational sign-off remain open.
