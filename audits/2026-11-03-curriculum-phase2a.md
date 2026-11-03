# Business Academy Curriculum Audit — Phase 2A: Integrated Finals and Grading

**Date:** 2026-11-03  
**Scope:** Source-based inspection of `learning/core.js`, Level 3 integrated final v87, Level 4 comprehensive final v99, and Level 5 comprehensive final v119.  
**Status:** Partial internal audit; no live student-session testing and no independent academic sign-off.

## Summary

- Inspected **33 multiple-choice questions** across three integrated finals: Level 3 (7), Level 4 (10), Level 5 (16).
- **33/33** questions contain an in-range integer answer key, a textual explanation, and a remediation field; no duplicate prompt was found **within these individual exam sets**.
- Independently recalculated **22 quantitative or numerical-constraint items** (Level 3: 7; Level 4: 6; Level 5: 9). **22/22 matched** the source's indicated choice to the stated precision. This is a **limited sample**, not validation of every quiz throughout all 26 courses.
- Exam answer-position patterns are a **confirmed high-priority assessment-quality defect**.

## Finding P2-001 — HIGH: Answer-pattern predictability

| Exam | Correct-option positions (1-based) | Observation |
|---|---|---|
| L3 v87 | 1,2,3,4,1,2,3 | Repeating ordered position pattern |
| L4 v99 | 1,1,1,1,1,1,1,1,1,1 | **All 10 answers are first** |
| L5 v119 | 1,2,3,4 repeated four times | **Exact repeated cycle**, despite even distribution |

These patterns may allow students to pass exams without demonstrating mastery. **Remediation:** deterministically shuffle options per question at runtime, store the displayed option order with an attempt for replay and explanations, and keep stable question/attempt identifiers. Alternatively, revise answer positions across authored banks while preserving correct mapping. Add an automated answer-position randomness test. Do not silently alter saved grades or previous attempts.

## Finding P2-002 — HIGH: Independent grading is absent

The `BALearning.reviewed` function treats any nonblank written answer as reviewed when its rubric criteria are individually rated 3 or 4 locally. This is transparent self-assessment, not independent evaluation of argument quality or correctness. `BALearning.mastery` combines question scores and self-reviews for its completion flag. **Remediation:** label these statuses explicitly as self-assessed; introduce independent external review where claiming academic validation, and require evidence attachments and evaluator feedback for formal sign-off.

## Finding P2-003 — MEDIUM: Exam scoring and mastery need behavior tests

`BALearning.score` counts strict integer option indices equal to each question's `correct`, and `grade` requires an answer for every item before recording an attempt with score, selected choices and timestamp. The source-level code appears coherent for ordinary cases, but has **not** been exercised end-to-end against an actual browser session, corrupted payloads, account switching, retries, unsaved writing, or an offline-to-online merge. Test all cases before functional acceptance.

## Numerical checks performed

**L5 v119:** Q1 liquidity gap $8m, Q2 FCFF $42m, Q4 control benefit $450k, Q6 FX $10.5m, Q7 realized savings $450k, Q11 portfolio NPV $24m, Q12 expected NPV $9m, Q14 liquidity headroom $25m, Q16 capacity savings $210k.

**L4 v99:** Q1 deployable cash $80m (funding shortfall $15m), Q2 acquisition NPV ~$8.36m, Q3 both projects cost $70m > $65m budget and A alone has higher NPV, Q4 control benefit $340k, Q5 process redesign net savings $120k, Q6 risk-neutral NPV $11m.

**L3 v87:** Q1 NPV ~$11.79m, Q2 incremental profit **−$300k**, Q3 integer optimization maximum contribution $870 (exhaustive feasible integer search), Q4 conversion lift **3 percentage points**, Q5 founders' post-round holding ~41.67%, Q6 FX settlement $4.48m, Q7 AI net savings $70k.

**Limitations:** These are calculations using the explicit hypothetical inputs, not verification of real-world assumptions, accounting standards, source currency, legal rules, or scholarly depth.

## Next Phase 2B gates

1. Audit all other course-level / sectional question banks for incorrect keys, duplicate prompts and predictable answer positions.
2. Verify lesson/exam explanations do not expose final answers before assessment submissions.
3. Test grading, feedback, remediation, retries, records, and persistence in a running app, including offline reconnection and cloud conflicts.
4. Test independent written work for assessable criteria, originality, effort and academic quality.
5. Produce a course-by-course defect log, fix high-risk errors without changing existing saved progress or invalidating prior attempts.

**Verdict:** Phase 2A internal sampling complete. The sampled arithmetic passes; exam-key predictability fails. No claim of completed full curriculum audit, accreditation, or independent academic review.
