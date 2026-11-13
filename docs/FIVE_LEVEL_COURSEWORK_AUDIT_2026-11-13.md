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

## Follow-up: textbook prose depth and hours reconciliation (v141)

The original 3,218-hour statement was based on a workload calculation that still included optional independent exams; after adding the five optional v140 examinations it increased to 3,228. The corrected read-only audit **excludes optional exams** from its required assigned-work estimate and separately reports optional hours. Current verified totals: **3,207 hours required assigned work**, **21.2 hours of optional exam forms**, **575 lessons**, and **187,158 words in authored lesson-body instructional prose**. Readings, worked examples held in separate fields, assessment stems and submissions are not counted toward the last word total; the number must not be interpreted as a full book-length equivalent in every course.

Version 141 adds six substantive original foundation chapters covering corporate business models, financial mathematics, contribution and pricing, venture financing, managerial economics and financial statement/liquidity analysis. The chapters expand existing lessons without changing identifiers or assigned study minutes and include economic foundations, independent worked models, counterarguments, source and control limitations, and transfer problems. **27 shorter lesson bodies** remain below the 150-word heuristic in Level 1; this flags editorial depth for further review, rather than proving the lessons are incorrect. The previous 90-minute/200-word audit threshold flags zero lessons. All case figures are fictional.

The GitHub workflow at commit `b6b9868f6ecbc45e1ac33377c3b932a37234fdb3` passed **112 tests, 0 failures**, with the revised depth and optional-hours audit reporting success (run `43485627525`). Human subject-matter review and detailed assessment originality review remain distinct from these automated structural checks.

## Follow-up v142 — targeted Level 1 short-lesson remediation

- Added targeted explanations and worked calculations to **27 previously short Level 1 lessons** across courses 01–06. The original lesson IDs, assessment IDs, minutes and previously saved evidence remain unchanged; the script safely avoids repeating the additions if loaded again.
- New instructional material addresses economic profit and governance, statistics and constrained optimization, revenue and cash quality, dilution and venture runway, rates and recession economics, and treasury cash reconciliation. Exercises require alternative decisions, evidence challenges and explicit financial calculations.
- The revised audit finds **zero lesson bodies with fewer than 150 words**, including these 27 previous flags, out of **575 lessons**. Total authored lesson-body instructional prose is **192,236 words**. This is an objective-length threshold, not a substitute for a human academic depth review.
- GitHub Actions at commit `8d1f81e28a470a95bd01ab49eac076ee83d9e4b4` passed **115 of 115 tests**, with zero failures (run `43486906847`). Required assigned workload remains **3,207 estimated hours**, excluding 21.2 optional examination hours.
- Residual review: full editorial/subject-matter accuracy, mathematically correct sources and cases across five levels, and 35 repeated legacy Level 4 prompts (35 new optional alternatives exist). Independent academic evaluation and physical-device QA have not been completed.
