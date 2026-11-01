# Level 3 — MBA academic-comparability review (Phase 1)

**Review date:** 2026-11-01  
**Scope:** Business Academy courses 14–20; authored `learning/level3.js` through `learning/level3-executive-synthesis-v81.js`, assessment and mastery tests.  
**Status:** **PRELIMINARY INTERNAL DOCUMENT REVIEW — NOT AN EXTERNAL FACULTY SIGN-OFF.**  
**Finding:** Material advanced-business content is present, but **MBA academic equivalence is NOT demonstrated**. This review cannot grant credit, institutional affiliation, accreditation or a degree.

## Comparison benchmarks

- Wharton MBA curriculum: https://mba.wharton.upenn.edu/mba-curriculum/ — integrated analytical, leadership, operations, communication, marketing, financial and ethical disciplines, with credit-bearing assessed coursework.
- Harvard Business School degree requirements: https://www.hbs.edu/mba/handbook/academic-information-and-policies/degree-requirements — required core and elective curriculum and assessed professional competence.
- AACSB assurance of learning: https://www.aacsb.edu/educators/accreditation/faqs — explicit competencies, student work evidence, measured outcomes and curriculum improvements.
- AMBA accreditation: https://associationofmbas.com/business-schools/accreditation/ — institutional/program assessment; not a credential this project holds.

These serve as **comparison standards, not claims of affiliation or accreditation**. Full MBA degree equivalence is a different and much stronger assertion than MBA-level difficulty within a Level 3 course sequence.

## Evidence located in source

| Dimension | What is evidenced | Preliminary rating | Required next action |
|---|---|---|---|
| Disciplinary breadth | Seven Level 3 courses: corporate finance, competitive strategy, managerial economics, analytics, venture capital, international business, technology/AI | Substantial content present | Map every measurable learning outcome to an assessed artifact |
| Quantitative rigor | DCF, capital allocation, forecasting, scenario and risk analysis, A/B tests, venture dilution, currency exposures; independent numerical checks for specific answers | Promising but not fully validated | Recompute **all** numerical answer keys, assumptions and units; peer review interpretations |
| Case method | Numerous original hypothetical cross-functional and board cases; Version 80–81 case laboratories | Strong fictional-case presence, **not verified real-company case depth** | Add sourced primary-company documents, industry context, messy evidence and conflicting interests, with source dates |
| Independent synthesis | Written board memos, portfolios and Level 3 final capstone present | Promising design | Evaluate real anonymous student submissions against analytic and writing rubrics |
| Assessment security and difficulty | Multiple-choice questions with explanations, final exam, retries and regression tests | Functional mechanism; academic rigor unestablished | Blind moderation, difficulty/discrimination review, fresh unseen problem sets, timed oral defense |
| External evaluation | UI rubric is self-assessment: 3 or 4 self-selected for completion, as documented in `learning/workspace-v40.js` | **Major gap** | Independent qualified evaluator must grade sampled written work; no automatic credit for self-rating |
| Assurance of learning | Code-level checks validate module existence, IDs, minimum paragraph counts and answer key contracts | **Major gap** | Establish measurable outcomes, evidence samples, failure analysis, independent grading and improvement cycle |
| Faculty interaction, team learning | Not demonstrated in reviewed code | **Major gap** | Provide structured peer debate, feedback and live/recorded defended decisions, or explicitly label self-study limitations |
| Actual duration / credit equivalence | Planned hours and authored minutes exist, but no validated time-on-task or credit conversion | **Unverified** | Audit all active lesson/reading/assessment minutes, expected actual effort and student outcomes |
| Currency and external sourcing | Cases explicitly label fictional numbers; case lessons suggest reading annual reports | Partial | Primary-source reading lists with document identifiers, citation questions, and dated case references |
| Legal, ethical and global context | Explicit governance and ethical prompts in several courses | Present but depth unverified | Rubric-based subject-matter review and jurisdiction-specific caveats |

## Initial detailed observations

1. **Course materials are not automatically equivalent to degree instruction.** A technical CI pass validates authored contracts and programmed grading paths; it cannot establish depth, fairness, factual completeness, or achievement of graduate competencies.
2. **Self-assessed writing is not the same as independent marking.** The app states its rubric is self-assessment, not an instructor grade. This is an important honest design feature but weak evidence for claims of independently verified mastery.
3. **Hypothetical cases are useful practice but insufficient by themselves to establish MBA case-method equivalence.** A documented portfolio must include credible real-company evidence, source quality assessment, ambiguous tradeoffs and revised decisions when new facts arise.
4. **Coverage tests use minimum thresholds** (e.g. 123 lessons, 170 questions, 78 written items in `tests/level3-curriculum-integrity.js`). Counts show coverage, **not** graduate-level mastery or verified study hours.
5. **Numerical test coverage is partial.** Version 81 verifies seven central modeled answers and selected stress cases; full line-by-line mathematical and qualitative reviews of all earlier material remain needed.
6. **MBA full-degree equivalency cannot be assigned to Level 3 alone.** Business Academy itself has multiple levels; no basis currently exists to claim independent school recognition, credits, accreditation or a degree from the app.

## Academic acceptance thresholds proposed for the project (not official school standards)

- **Content mapping:** 100% of Level 3 course outcomes linked to two or more meaningful assessment tasks, including at least one open-ended application.
- **Mathematical accuracy:** all consequential quantitative solved examples and exam answer keys independently recomputed; zero unresolved material errors.
- **Evidence:** each of seven disciplines receives at least two substantial, source-cited real corporate scenarios and an assessed task that requires checking actual company reporting; fictional cases remain clearly labeled.
- **Independent performance:** at least two blind-graded substantive written artifacts per course, with calibrated rubrics; a separate comprehensive final and oral/written defense graded independently.
- **Assessment integrity:** review item difficulty, answer patterns, novel transfer questions and scoring reliability. Confirm a genuine failed attempt is not rescued by prior passing attempts.
- **Learning evidence:** record anonymized outcomes and reviewer agreement; remediate weak competencies and repeat the measurement.
- **Review panel:** arrange qualified, independent finance, strategy, economics, analytics, venture, international and technology/ethics reviewers. Capture name, qualifications, scope, conflicts, findings, revision and sign-off date.
- **Transparency:** describe the program as self-directed MBA-style study unless external comparisons justify narrower claims. No promised academic credits or admissions/bar-type professional status.

## Next review work packages

1. Audit actual authored course workloads and depth by reading each Level 3 source module, not just its file count.
2. Build course-by-course learning outcome and competency matrix and grade-depth taxonomy.
3. Audit full numerical answer banks and written/model solutions, logging defects with exact file/ID.
4. Introduce a primary-source case dossier for each course and independent capstone evaluation package.
5. Run and document a real learner study; secure qualified outside faculty review before any stronger equivalence statement.

**Phase 1 conclusion:** Advanced topics and varied written/exam structures exist. Present evidence supports describing Level 3 as **advanced MBA-inspired self-study**, but **does not support an objective finding of university MBA degree equivalence**. External reviewers and measured learner achievement are required.
