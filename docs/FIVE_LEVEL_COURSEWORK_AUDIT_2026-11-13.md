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

## Focused subject-matter correctness audit, v143–v144

**Scope:** A first-pass mathematical verification across the full five-level sequence, not a complete expert reading of all authored text. Numeric sampling is reproducible through `node --test tests/academic-quantitative-sampling-v144.test.cjs`.

**A confirmed correction:** `c21-v105-independent-q3`, the older optional mergers-and-acquisitions question, said that **$9m of operational savings already included $3m also listed in IT** but incorrectly keyed **$6m** as the unique consolidated amount. Under its stated facts the nonduplicated total is **$9m**. The originally scored question, its ID and answer position are preserved for historical record integrity. New module `level4-assessment-errata-v143.js` adds a visible erratum to the original exam instructions and provides a new optional correctly keyed examination `c21-v143-corrected-evidence` with five questions. Earlier grades are neither silently recomputed nor erased. Because historical incorrect attempts may still exist, actual users' completed exam records require a separate fairness review before final acceptance.

**Independent computational samples:** New `tests/academic-quantitative-sampling-v144.test.cjs` checks 6 Level 1, 8 Level 2, 7 Level 3, 5 Level 4 and 6 Level 5 original numerical answer keys, including EBIT, acquisition goodwill, return on capital, cash conversion, financing gaps, probability-weighted controls, discounted savings and delayed restructuring flows. These computations are recalculated from the given assumptions, independently of stored answers. Samples are deliberately limited: they do not verify every formula, source, conceptual claim, historical case or written rubric.

**Verified CI checkpoint:** commit `ebeef938333c8a6d7bf516a5c4e9d7f3672928c7`, GitHub Actions run `43493319741`: **123/123 tests passed** and the structural coverage audit completed without load errors. No site deployment, PR merge, student-data migration or grade rewriting occurred.

**Additional review remains:** Editorial/academic experts should read the unexamined lessons and case files, verify primary-source statements as of their dated events, independently inspect every examination key and curriculum progression, evaluate the 35 historical repeated Level 4 question prompts, and conduct browser/device acceptance testing. Internal automated checks do not establish academic accreditation or equivalence.

## v145: Primary-source accuracy and research-method review — seven Level 3 historical cases

The seven historical Level 3 laboratories in courses **14–20** received dated source annotations, document-level reading links and independent evidence/counterfactual exercises. These relate to five actual event clusters: Microsoft's Activision Blizzard purchase, Netflix's 2023 paid-sharing reporting, Adobe's proposed Figma acquisition, Airbnb's 2020 IPO, and FAA oversight after the January 2024 Boeing 737-9 MAX door-plug incident.

Verified source anchors (do not substitute undated company home pages for these documents):
- **Course 14 — Microsoft acquisition and purchase accounting:** Microsoft 2025 10-K, Business Combinations note, reports October 13, 2023 completion and approximately $75.4 billion total purchase price: https://www.sec.gov/Archives/edgar/data/789019/000095017025100235/msft-20250630.htm . Accounting recognition is *not* verified realized NPV.
- **Courses 15 and 17 — Netflix paid-sharing:** January 23, 2024 Q4 2023 investor letter reports approximately 13.1 million paid net additions compared with 7.7 million in Q4 2022, while citing more than one performance driver: https://www.sec.gov/Archives/edgar/data/1065280/000106528024000029/ex991_q423.htm . Aggregate metrics cannot isolate paid-sharing's causal effect.
- **Course 16 — Adobe/Figma:** Adobe's December 18, 2023 Form 8-K documents December 17 mutual termination and contractual $1 billion termination fee: https://www.sec.gov/Archives/edgar/data/796343/000079634323000254/adbe-20231217.htm . Its agreement creates an obligation; later filing is needed for actual settlement verification.
- **Course 18 — Airbnb IPO:** 2021 10-K documents 55 million shares sold at $68 including underwriters' option, with approximate $3.7 billion net issuer proceeds: https://www.sec.gov/Archives/edgar/data/1559720/000155972022000006/abnb-20211231.htm . Gross 55m×$68=$3.74 billion, distinct from net proceeds.
- **Course 19 — Microsoft closing:** October 13, 2023 Form 8-K reports the completed transaction and $95 per eligible Activision share, subject to the filed terms: https://www.sec.gov/Archives/edgar/data/789019/000119312523255762/d537928d8k.htm .
- **Course 20 — Boeing:** FAA January 24, 2024 announcement concerning MAX production expansion, safety oversight and inspection requirements: https://www.faa.gov/newsroom/faa-halts-boeing-max-production-expansion-improve-quality-control-also-lays-out-extensive . Regulatory intervention is not proof that corrective controls were later effective.

**Source quality correction:** Updated v85 course 16 and course 19 reading links from generic investor-relations landing pages to the precise Adobe and Microsoft SEC filings. v145 appends to existing evidence lessons, leaves all original identifiers, assignments, durations, assessment answers and student work unchanged, and explicitly distinguishes ex-ante information from later outcomes and unverified causal inference.

**Verified tests:** GitHub Actions run `43510384322` at commit `c4cf56923d72023d30379e921d0420f62969a4c6` passed **127/127** automated tests and the read-only coverage audit. The audit reports 575 lessons, **193,417** words in lesson bodies, zero sub-150-word lessons, zero same-category duplicate IDs and zero structurally invalid required questions. The same **35** historical repeated required Level 4 prompts remain; optional alternative forms provide new questions without rewriting prior assessed grades.

**Limitations:** This is a bounded source-backed check of the seven cited historical case laboratories, not complete editorial validation of all 26 courses or all 929 required objective questions. Full professional review, student fairness assessment for historical key errors, and desktop/mobile acceptance remain open. Structural tests cannot confer independent academic equivalence.

## November 14 follow-up — Level 4 answer-key checks and all-course form integrity (v146–v147)

**Confirmed correction:** An optional Level 4 capital-budgeting item in `level4-alternative-exams-v140.js` asked for NPV of $18m annual year-end cash receipts over three years at 10% less a $45m initial cost. The independently computed result is **18×[(1−1/1.1³)/0.1]−45 ≈ −$0.2367m**, or **−$0.24m rounded to two decimal places**, not the previously displayed −$0.23m. Only that answer-choice label and its explanatory text were corrected; the question ID, answer position and any student evidence remain unchanged.

**Automated verification extension:** `tests/level4-answer-keys-and-legacy-repeats-v146.test.cjs` checks all 35 distinct optional alternative Level 4 questions for structural integrity and duplicates, independently recalculates 24 numeric selections, checks the ten illustrative v104 legacy answers, and confirms **35 historical prompt repeats, seven per Level 4 course 21–25**, without altering stored grades. `tests/all-course-assessment-choices-v147.test.cjs` additionally loads the entire active curriculum and checks every required and optional examination form in 26 courses for nonempty questions and explanations, unique choices, valid answer keys and nonduplicated question IDs within each examination. Short questions or short arithmetic rationales are accepted where a shared case context supplies the detail; wording-length alone is not asserted to certify question quality.

**CI outcome:** At commit `021924c2d5d26d6e51ac9091961579d22d3052c6`, GitHub Actions run `43631676897` passed **133/133 automated tests** and the curriculum audit, with zero invalid required exam items and zero same-type duplicate IDs. The curriculum remains 575 authored lessons and 193,417 lesson-body instructional words. Older required Level 4 repeats remain present intentionally to avoid invalidating prior exam history; their educational repetitiveness and fairness need reviewer judgment before final merge. The original optional v105 merger-key erratum also remains visible without rewriting past scores.

**Outstanding:** A complete subject-matter sign-off for every objective answer and rubric, primary-source editorial review beyond the seven Level 3 cases already checked, adjudication of grading fairness, and browser/device acceptance. The green test suite is evidence of checked invariants, not proof of complete scholarly accuracy or institutional equivalence.
