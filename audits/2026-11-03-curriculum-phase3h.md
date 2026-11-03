# Business Academy — Phase 3H: Level 4 Repeated-Question Audit and Independent Transfer

**Date:** November 3, 2026
**Status:** Level 4 source audit completed; ten new noncredit numerical questions deployed. Legacy repeated exams deliberately retained pending a safe retirement plan.

## Actual assembled Level 4 exam findings
Loaded in order the 12 deployed source scripts from `level4-initial-v82.js` through `level4-independent-cases-v105.js`, with course objects 21–25 initialized.

| Level 4 course | Authored section exams | Multiple-choice questions | Repeated prompt occurrences within course |
|---|---:|---:|---:|
| 21 | 7 | 26 | 6 |
| 22 | 7 | 26 | 6 |
| 23 | 7 | 26 | 6 |
| 24 | 7 | 26 | 6 |
| 25 | 8 | 36 | 6 |
| **Total** | **36** | **140** | **30** |

There were **30 repeated occurrences beyond first instances** among existing Level 4 section-exam questions, on a per-course exact normalized prompt basis. The repeated questions originated in the v104 reinforcement script, which appends identical course-specific questions to multiple exam sets. This in-course count differs from the earlier 75 repetition count because the Phase 2B metric was across a broader batch/global grouping of prompts. It is not a new academic sign-off.

## Implemented progress-safe improvement
- Added `learning/level4-independent-numeric-v106.js`, loaded immediately after `level4-independent-cases-v105.js` in `index.html`.
- Created **five independent optional numeric drills with ten original questions** (two per course), addressing M&A valuations; constrained capital allocation; cyber-risk and coverage; realized transformation savings; integrated board liquidity and discounted platform investment.
- Each has a question-specific numeric answer, units, acceptance tolerance, worked explanation and remediation guidance.
- Correctness is assessed using the academy's existing `BANumericGrade` engine, with preserved numeric-practice attempt history from workspace-v45.
- **10/10 new mathematical answers independently recalculated correctly**; the existing grader accepts each key.
- No previous exam IDs, question IDs, assessment scoring keys, lesson IDs, mastery rules or historic attempts were overwritten.

## Important limitation
The new drills **add distinct practice but do not remove the 30 repeat occurrences from old Level 4 exams**. Silently deleting or changing a graded historical question could invalidate previous attempt evidence. A retirement design should preserve old submitted grades and answers while separating a revised question bank for new attempts; that migration must be reviewed and tested before implementation.

## Next gates
1. Verify new Level 4 drills visually in an iPhone/desktop learning workspace, including signed-in cloud syncing and corrections.
2. Audit the currently assembled deployed assessment banks of Levels 1–3 for duplicated exact and near-duplicate prompts, not just earlier source batches.
3. Author a version-safe migration strategy for retiring repeated questions from new attempts, with controlled treatment of historic completions.
4. Complete substantive statistical, legal, accounting and executive answer verification; model-key correctness does not constitute educational equivalence or independent accreditation.
5. Validate study time, qualified rubric grading and accessibility.

**Verdict:** Level 4's known repeated-question issue remains open, but new independent course-specific quantitative transfer practice was deployed safely and passed mathematical checks.
