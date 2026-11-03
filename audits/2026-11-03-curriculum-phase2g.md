# Business Academy — Phase 2G: Level 3/5 Mathematics, Exam Feedback, and Instructional Depth
**Date:** November 3, 2026
**Scope:** Audited representative quantitative models from Level 3 completion seminar v90/v91, Level 5 executive capstone v117–v120, and measured the length of Level 5 lesson bodies. This is an internal source audit, not a certified academic review.

## Quantitative verification
**50/50** independently reconstructed calculations agree within stated rounding tolerances:
- **22** Level 3 seminar calculations, spanning unlevered cash flow, valuation perpetuities, APV, strategy contribution, elasticity, integer capacity, forecasting, randomized experiments, convertible preferences, ownership dilution, FX, runway, and AI risk.
- **28** Level 5 executive calculations, spanning three-year cash-flow PV, portfolios, expected risk losses, operational cash-realization factors, covenant headroom, euro-dollar translation, acquisition synergies, working capital, digital investment downside, and restructuring NPV.
- These results verify the specified hypothetical arithmetic, **not** the validity of actual corporate assumptions, legal/accounting standards, scholarly sourcing, or remaining hundreds of problems.

## Defect L3-FEEDBACK-01: Level 3 comprehensive seminar explanation
The original `learning/level3-completion-seminars-v90.js` generated the first quantitative exam feedback by concatenating example solutions from only the first two lessons. In Course 14, the exam asks **adjusted present value (APV)** using the third lesson; thus the explanation omitted the worked APV result.

**Resolution deployed:** Published `learning/level3-completion-seminars-v91.js` and changed `index.html` to load it instead of v90. First exam explanation now includes all three source lessons' worked examples, including `APV=130−120+6−9=$7m`. **Question IDs, scoring indices, correct answers, and progress storage schema are unchanged.** Syntax and course-data registration checks passed. Browser feedback test is pending.

**Further recommendation:** Rather than joining all three example solutions, a later assessment-quality pass should generate **a specific worked rationale for each question** to minimize distracting or irrelevant feedback.

## HIGH PRIORITY: Level 5 lesson-depth / assigned-time disparity
Assembled the four Level 5 course files (v117, v118, v119, v120) in order, yielding **30 authored lessons**. For each lesson, counted whitespace-delimited words in the `body` text array (not the additional application, assessment or portfolio instructions).

- **All 30 lessons have 180–190 author-assigned minutes.**
- Main body text ranges from **52 to 83 words**, with a median of **69** words.
- **30/30** lessons assigned 150+ minutes have fewer than 140 body-text words.
- Total main lesson-minute allocations are **5,700 minutes = 95 hours**, excluding additional exam, reading, application and portfolio work.
- This is a **material evidence gap in instructional depth**. It does **not** mean every assigned minute is necessarily invalid, since independent modeling, reading and extensive portfolios can legitimately take hours. However, the lesson bodies do not provide enough explicit instruction on their own to support those timing claims.
- Recommendation: For each Level 5 lesson, supply systematic theory, prerequisites, worked derivations, misconceptions, structured step-by-step practice with verifiable inputs and answers, at least two transfer cases, a source or evidence task, an assessment rubric, and a documented workload breakdown. Retain existing lesson IDs and student completion history when expanding content.

## Outstanding audit risks
1. Repeat question prompts persist in Levels 1–4, and assessment question difficulty remains inadequately validated.
2. Claimed hours need differentiated workload evidence; avoid treating task time fields as equivalent to verified academic hours.
3. Live exam scoring, feedback, recovery, iPhone and desktop rendering, and Firebase persistence remain untested in this phase.
4. Full combined 26-course manifest, near-duplicate detection, substantive correctness, academic citation quality and independent sign-off remain outstanding.
5. External accreditors or qualified independent reviewers must not be represented as having approved the curriculum.

## Phase 2G status
**Numerical sample passed; one Level 3 feedback omission fixed; a major Level 5 instructional-depth gap substantiated.** Next priority: expand instructional rigor in existing Level 5 lessons while preserving lesson IDs and progress; then study-hour validation across the rest of the curriculum.
