# Business Academy — Phase 2E: Level 2 Quantitative Accuracy and Curriculum Alignment
**Date:** 2026-11-03
**Scope:** Source review of `learning/level2-independent-exams-v63.js`, `learning/level2-numeric-v64.js`, and `learning/level2-multistep-v65.js` only.

## Independent arithmetic checks
- **28** original multiple-choice quantitative exam items (seven courses × four).
- **14** standalone numerical practice items (seven courses × two).
- **21** sequential numerical calculations (seven courses × three).
- **63 total numerical items reviewed.**
- **63 of 63** numerical results matched manual independent recomputations using the figures in the problem statements. An initial automated comparison parsed 57 directly; six formatted answer strings (Unicode minus, “units”, k/m suffixes) were checked from their displayed numerical values and explanations, and also match.
- This pass verifies arithmetic for the stated hypothetical assumptions only. It does not independently verify legal/accounting standard interpretations, actual business evidence, exam delivery, validity of assumptions, or all other numerical exercises across Level 2.

## Detailed recomputation summary
| Course | v63 multiple-choice results | v64 numeric results | v65 sequential results |
|---|---|---|---|
| 07 Financial Accounting | 35m, 17m, 87m, 69m | 35m, 85m | 220m, 35m, 74m |
| 08 Managerial Accounting | $9k, $4.5k, $2/hr, $27k | $12k, 15m | $143k, $154k, $11k |
| 09 Marketing | 4 pp, $440, 2.5 pp, $70 | 4 pp, $920 | 12%, 3 pp, $600 |
| 10 Sales | 4.1m, 3.8m, −0.6m, 3.5m | 4m, −0.95m | 4m, 0.5m, 3.5m |
| 11 Operations | 1,100 units, 1,520 units, $4,050, $4,500 | 1,525 units, $6,100 | 1,040 units, 1,320 units, $5,050 |
| 12 Leadership & HR | $225k, 26 exits, 95%, $1m | $258k, 96% | 48 exits, $1,104,000, $254k |
| 13 Law, Ethics & Taxes | 19.9m, 19.9%, $240k, $70k | 21.2m, $110k | 10m, 9m, 19% |

Abbreviations: **m** = millions, **k** = thousands, **pp** = percentage points. Each row uses the inputs stated in that item's own problem; the adjacent columns are *different* problem scenarios.

## Confirmed curriculum alignment defect L2-ALIGN-01
- Course 12 is **Leadership & Human Resources**.
- `v63` includes a question about issuing 5m new shares to 95m outstanding and calculating remaining original shareholder ownership (95%).
- `v64` includes another numeric drill calculating shareholder dilution from issuing 4m shares on 96m existing shares (96%).
- Both arithmetic keys are correct, but these are **corporate finance/capital-structure** competencies, not especially relevant to the Leadership and Human Resources course as written.
- Recommended action: introduce new versioned HR-specific numerical items (e.g. turnover costs, pay-equity budget, incentive compensation or training ROI); preserve existing attempt IDs and results, and use version-aware optional assessment retirement for old finance questions.

## Assessment quality risks carried forward
- Exact duplicate question prompts across different levels/courses (Phase 2B).
- Some final exams have obvious source answer-position patterns (presentation-only shuffle released in workspace v42, pending live browser acceptance).
- The app uses author-provided estimated study minutes, which require instructional-depth validation.
- Rubrics are student self-assessed, not independently graded.

## Next audit gates
1. Address L2-ALIGN-01 with HR-specific exam content without replacing historical answers.
2. Independently audit the more advanced Level 2 finance, statistics, economics, and forecasting case calculations in v66–v70.
3. Run full assembled-source ID and duplicate-content check, then browser regression testing on an existing signed-in learner.
4. Continue Level 1/3/4/5 numerical and conceptual reviews, and build an external academic review packet.

**Status:** Arithmetic of this 63-item Level 2 sample passes. This is not a certification of the entire academy.
