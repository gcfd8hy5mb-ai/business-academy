# Business Academy — Five-Level Coursework Verification (2026-11-13)

## Scope and reproducibility
This is an **internal, automated structural audit** of the currently authored curriculum on the isolated development branch. It is **not** an accreditation decision, independent academic sign-off, qualitative reading review, guarantee of MBA equivalence, or proof that every scheduled hour represents substantive instruction.

Run:
```sh
node --test tests/*.test.cjs
node tests/coursework-coverage-audit.cjs --json
```

The latest GitHub Actions job for commit `188dd8e23c6be33cc69f69641bbcb524a7e32df0` succeeded: **106 tests passed, 0 failed** (Actions run `43481389417`).

## Coverage evidence
- **5 levels / 26 authored courses**, none absent.
- **575 lessons** in the audited active load order, including the 26 executive decision seminars added in v138.
- **929 required objective questions** in current assessment forms. Question counts do not independently establish breadth or difficulty.
- **3,218 estimated assigned hours** from content metadata, including readings, practice, examinations, written applications and portfolios. These are scheduled learning tasks, **not** hours of textbook prose or measured instructional time.
- All 26 courses include required assessments and a portfolio element.
- **0** structurally invalid objective questions, **0** same-category duplicate IDs, and **0** 90-minute-or-longer lessons flagged under the audit's limited threshold of fewer than 200 words in the lesson body.
- **12 cross-category reused IDs** occur across different types of evidence objects. The application's saved answer/draft keys use distinct prefixes for these types. Preserve IDs and submitted evidence; do not rename without a compatible migration.
- **35 repeated question prompts**, confined to Level 4 courses **21–25** (seven per course). These comprise the initial Level 4 prompt and repeated v104 short-exam reinforcement questions. Existing assessment fingerprints and submissions must be preserved. Treat the repetition as a quality-review task, **not** a license to silently edit historical exam items.

## Coursework changes in this branch
- Added 26 original v138 executive decision seminars across all five levels with worked calculations, counterfactuals, evidence requirements, original written applications, and model assurance.
- Expanded six v72 Level 1 long-duration lessons with numerical methods and counterarguments in v139.
- Corrected a four-year FCFF discounted cash flow arithmetic example in v138.
- Added tests for the new teaching content and corrected outdated browser test harness setup and workload assumptions. The original lessons and recorded student grades were not removed or migrated.
- Added a reproducible read-only audit and GitHub Actions workflow.

## Remaining academic review before calling the curriculum fully finished
1. Review all **35 repeated Level 4 objective prompts** for whether they are intentionally formative repetition or excessive recycling. Create **new versioned alternative forms with new IDs** for replacements where justified; never mutate already submitted questions in place.
2. Perform human editorial and subject-matter review of reasoning, conceptual progression, primary-source accuracy, case assumptions, mathematical answer keys, assessment difficulty and originality across all 26 courses. Automated checks cannot determine these properties.
3. Reconcile the original planned-hours contract with the reported 3,218 scheduled hours and inspect whether reading/case-writing allocations realistically match material taught. Larger scheduled hours must not be interpreted as greater textbook depth.
4. Review current browser behavior and completion/mastery pathways on laptop and iPhone as appropriate. Automated Node tests do not substitute for device QA.
5. Keep independent university or professional evaluation separate from internal verification, and do not claim accredited MBA equivalence.

**Disposition:** Structural coverage and automated regression tests pass; **independent substantive coursework completeness is not certified**. Remain draft until editorial review and acceptance.

## November 13 follow-up — alternative Level 4 assessment forms (v140)

- Added **five independent, optional Level 4 alternative examination forms**, one each for courses 21–25, totaling **35 new distinct question prompts**, all with unique IDs, options, answer explanations, remediation, written case and rubric.
- Historical v104 examinations and all previously submitted responses, grade snapshots and lesson identifiers remain unchanged. The 35 repeated historical prompts remain present and are still counted by the audit; this addition provides a non-repeating alternative rather than silently modifying existing records.
- New forms are optional, do not change required mastery or automatically award progress, and add no required hours to the 3,218-hour curriculum estimate.
- The latest GitHub Actions workflow for commit `b620378ab9de66a44a395341096f38a06154a8d7` passed **109 tests, 0 failures** (run `43484141461`), and the coursework coverage audit passed with no structural errors.
- Assessment psychometrics, professional subject review, and an editorial decision on whether to retire the historical repetition remain outstanding. Never change a submitted assessment's meaning without a versioned migration.
