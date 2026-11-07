# Business Academy — Candidate Exam Design Upgrade and Quality Screen (v151)

**Date:** November 7, 2026  
**Scope:** Review-only next-generation examinations for Levels 2 and 4, not the currently required student assessments.

## Completed
Enhanced `audits/data/2026-11-04-required-exam-candidates-v148.json` without changing its stable candidate IDs or activating the candidate banks.

- **96 independently keyed quantitative questions** now carry three **misconception-based incorrect answer options**, each with a distinct explanation of the possible error. There are **288 documented distractor rationales**.
- **27 proposed exam units** now have differentiated executive written assessments, explicit corporate-case context, four **25-point** scoring criteria totaling 100 points, minimum evidence requirements, and more substantial transfer exercises.
- **12 course-specific contexts** cover consolidation and financial statements; cost, capacity and operational decision-making; controlled commercial experiments; contract economics; warehouse constraints; retention and dilution; fictional tax and compliance; acquisition valuation; investment allocation; operational risk; transformation assurance; and board capital preservation.
- Continued to distinguish fictional inputs from real-world documented evidence, and included review requirements for timing, unit denominators, financing feasibility, causal attribution, governance, and adverse scenarios.

These are **staged review-only artifacts** under `audits/data`. No new course exam was inserted into live `BAContent.sectionExams`; no grading, graduation condition, student answer, historical attempt or cloud record was changed.

## Regression checks
Added `audits/scripts/required-exam-design-quality-v151.cjs`, which checks:
1. 12 course cases and 27 differentiated exam-unit assignments/rubrics.
2. 96 unique question IDs and 96 unique exact prompt texts.
3. Answer choice integrity, question-key calculations and precisely three distinct distractor rationales per question (288 total).
4. Required written evidence, 100-point rubrics, and adequate task detail.
5. Active migration remains **false** and every draft academic sign-off field remains **false**.

After strengthening one too-short leadership case context, **v151 passes** with no assertion errors. The earlier **v149 96-question calculation/coverage regression also passes** with the strengthened question file. The GitHub Actions configuration now lists **12 academic regression steps**, including the new design screen. A completed GitHub-hosted Actions run was **not confirmed** in this development batch.

## Limitations and academic gates
The wrong answers are now generated from plausible categories of mistakes (wrong sign, forgotten input, wrong conversion, etc.), rather than only arbitrary offsets. However, some are still fallback numeric shifts, and not all distractors have been independently validated through student response data. Every question also needs a human review for whether a distractor is plausible in the **specific** decision scenario.

Level 4 still contains parameter variations on five recurring model families per course. While each prompt is mathematically distinct, **lexically different numbers are not the same as genuinely independent reasoning skills**. Formal substitution of these banks for older required examinations remains premature.

The 100-point written rubrics have observable broad criteria but still need item-level calibrated examples, independent double-marking, and qualified reviewer feedback. The numerical-model strings and explanations are internally consistent in the automated source checks; they do not establish all commercial/accounting assumptions or historical/legal claims are true.

## Remaining next priorities
1. Audit all 27 exam units for actual competency breadth, independently verified quantitative accuracy, unambiguous wording and correct units, and increase reasoning diversity where repeated models are inadequate.
2. Have independent subject experts evaluate distractor plausibility and distinguish a fully worked example from an unseen examination question.
3. Calibrate written-assessment rubrics with sample answers and explicit partial-credit logic.
4. Complete the grandfathering opt-in workflow **only after** external approval and live device/cloud acceptance.
5. Confirm the full 12-step GitHub Actions workflow on an actual hosted runner and run iPhone Safari/PWA plus desktop/Firebase cross-device acceptance.

**Verdict:** Assessment design is more defensible and source-level tests pass, but the candidate examinations are still **NOT ACTIVE**, not independently reviewed, and not equivalent to an accredited qualification.
