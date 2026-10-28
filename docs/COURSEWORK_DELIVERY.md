# Coursework delivery — 28 October 2026

This release provides a reusable learning workspace for the existing 26-course, five-level catalog. It does **not** certify academic equivalence, award credit, or complete the proposed 2,305-hour curriculum.

## Newly delivered content

| Level | Courses with an authored sequence | Modules / lessons | Practice questions | Objective exam questions | Written cases | Portfolio projects | Estimated assigned hours |
|---|---|---:|---:|---:|---:|---:|---:|
| 1 | All six foundation subjects | 18 / 18 | 36 | 30 | 6 | 6 | 50.00 |
| 2 | Financial Accounting; Managerial Accounting | 6 / 6 | 12 | 10 | 2 | 2 | 18.00 |
| 3 | Corporate Finance & Valuation pilot | 3 / 3 | 6 | 5 | 1 | 1 | 8.75 |
| 4 | Infrastructure and original plans only | 0 | 0 | 0 | 0 | 0 | 0 |
| 5 | Infrastructure and original plan only | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| **Total** | **9 authored sequences; 17 planned workspaces** | **27 / 27** | **54** | **45** | **9** | **9** | **76.75** |

Hours are design estimates for the specified reading, handwritten calculations, transfer tasks, written examination and research/project work, not measured seat time. Each lesson allocates 30 minutes, each problem set 45, each objective-plus-written exam 90 and each portfolio 180. Assigned source work allocates 90–150 minutes per course. Reading speed and prior knowledge change actual time. No hours are earned automatically by clicking a lesson checkbox. Earlier starter lessons and introductory finance/cash-flow units are preserved and excluded from these new counts.

Level 1 covers corporate business models/governance; rates, discounting and uncertainty; contribution, pricing and cash conversion; corporate ventures, dilution and stage gates; market equilibrium, elasticity and macro exposures; and financial disclosures/liquidity. Its six introductory sequences have every workspace activity authored. **The full Level 1 courses are still unfinished** against their original 365-hour scope. The new 50-hour sequence is not relabeled as a full MBA foundation year.

Level 2 pilots cover double entry, accruals, estimates and cash reconciliation; relevant costs, special orders, flexible-budget variances, constraints and incentives. Level 3 covers FCFF, terminal value, the enterprise/equity bridge, sensitivity and acquisition price discipline. All numerical cases are explicitly fictional. Portfolio work requests dated public corporate disclosures with traceable citations.

## Infrastructure and preservation

- `learning/core.js`: stable course IDs, versioned independent storage, assessment scoring/submission history, course-level evidence and workload aggregation.
- `learning/workspace.js`: shared overview, modular lessons, problem sets, exam, guided tutoring and portfolio views for every course.
- `learning/level1.js`, `level2.js`, `level3.js`: content only; no duplicated grading or UI code.
- Prerequisites are advisory, not blocking. Levels 4–5 are open workspaces clearly labeled planned; they receive no invented lessons or mastery.
- Existing `business-academy-v1` progress, simulator data, `boardMemo`, `cashMemo`, university resources, imagery and base stylesheet remain in place. New progress uses `business-academy-learning-v1`.
- The newer v25 cash-flow unit from concurrent main changes is retained in the v26 entry point. Earlier versioned application files remain available.
- Starter progress is labeled as starter progress. New sequence evidence is shown separately in curriculum/profile summaries.
- Drafts and rubric choices save locally; errors are surfaced. JSON export contains learning evidence and legacy data. There is no cloud sync or restore/import UI in this release.

## Assessment semantics

Objective practice and exam thresholds are 80%; a five-question exam therefore requires four correct. Submissions keep answer snapshots and timestamps. Fresh retries hide feedback while retaining previous submitted evidence. These are formative, client-side assessments with visible source keys, not secure/proctored exams.

Sequence mastery requires every authored lesson reviewed, passing objective practice and exam submissions, and nonempty written exam and portfolio drafts self-reviewed at 3 or 4 on **every** criterion. The interface explicitly calls this self-assessed mastery. No algorithm judges the quality of essays. Four-level analytic rubrics and model reasoning support revision but do not substitute for expert review.

Tutoring consists of an authored question, two staged hints and reasoning guidance for each lesson, with saved learner responses. It is not live AI feedback. Written exams ask for 500–900 words; portfolio projects typically ask for 800–1,200 words and a calculation/source appendix. These require application and critique beyond the short objective checks.

## Sources

Original prose, fictional cases and assessments are authored for Business Academy. External material is linked for assigned independent study, not copied or described as Academy-owned university coursework:

- OpenStax, *Principles of Accounting, Volume 1: Financial Accounting*: https://openstax.org/books/principles-financial-accounting/pages/1-why-it-matters
- OpenStax, *Principles of Economics 3e*: https://openstax.org/books/principles-economics-3e/pages/1-introduction
- MIT Sloan, *Economic Analysis for Business Decisions*, Fall 2004: https://ocw.mit.edu/courses/15-010-economic-analysis-for-business-decisions-fall-2004/

Existing MIT, Yale, Harvard, Oxford, Wharton and Stanford resource links are retained without changing their academic-level or resource labels.

## Remaining academic requirements

1. Expand all six Level 1 subjects from introductory sequences into the full planned courses: additional instruction, readings, multistep quantitative work, cumulative examinations and externally reviewed portfolio work. The original target is 365 hours; the newly assigned sequence represents 50 estimated hours, with overlap to be reviewed rather than mechanically adding hours.
2. Expand the two Level 2 pilots and author Marketing, Sales & Negotiation, Operations, Leadership/HR and Law/Ethics/Taxes. These five courses still have infrastructure and plans only.
3. Expand Level 3 finance and author the other six Level 3 subjects.
4. Author all Level 4 coursework and the Level 5 integrated executive capstone using the same model.
5. Obtain subject-matter review, test item difficulty/discrimination, alternative exam forms and independent essay/project assessment before claiming graduate-level rigor or full-course completion.
6. Add richer numeric/free-response grading where defensible, optional instructor workflows, source-specific problem-set mapping and backup restore. No claim of full institutional or MBA equivalence is supported by this release.
