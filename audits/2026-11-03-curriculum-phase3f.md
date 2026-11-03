# Business Academy — Phase 3F: Level 5 Numerical Accuracy, Retake Evidence and Source Regression
**Date:** November 3, 2026
**Status:** Source-level validation passed; mobile/browser and cloud synchronization acceptance outstanding.

## Independent answer-key verification
All **30 numerical exercises in learning/level5-numeric-v125.js** were independently recomputed from stated inputs, using a separately authored reference-formula list and without treating the bank answer values as formulas. **30 of 30 results match** within 0.0000011 of the stored numeric key. Tested topics include FCFF valuation, capital constraints, probability-weighted risk, break-even realization, FX, reserves, financing covenant capacity, liquidity, M&A synergies, marginal incentive costs, attribution, platform NPV, deferred annuities, and scope-adjusted energy reduction.

This check does not verify unrelated conceptual assignments, university equivalency, all historical exam banks or student reasoning.

## Auditability gap found and repaired
Previous workspace-v43 stored only correct/incorrect outcomes plus a total numeric score. That omitted the **actual submitted values**, limiting the ability to review or audit earlier numeric attempts.

- Published **learning/workspace-v44.js**, loaded by `index.html?v=164` through `learning/workspace-v44.js?v=164`.
- Each **new** numeric attempt now stores a copy of its submitted values in `numericAttempts[drill.id].submitted`, along with timestamp, score and per-question correctness.
- The existing history array `numericAttemptHistory[drill.id]` retains submitted-value snapshots for up to **20 recent attempts per practice set**, consistent with previous retention behavior.
- Post-submission feedback now has a “Review submitted values” disclosure.
- The formal examination grading path and saved grade records are unchanged; numeric practice still does not count toward graduation status.
- Older attempts created before v44 generally **lack submitted values** and cannot be reconstructed reliably.

## Code-level regression evidence
- Existing grading engine `BANumericGrade` recognized all 30 correct keys.
- A nonnumeric response was rejected.
- A deliberately wrong input (0 for the first nonzero answer) was marked incorrect, and valid answers in the same set were recognized.
- Numeric answer 0 on the corresponding zero-valued question is correctly supported by the existing engine (Phase 3E).
- A simulated learning-state JSON save/reload round trip retained the new submitted-value snapshot and the appended attempt history.
- Simulated existing learner exam result and original lesson completion were preserved without mutation.
- JavaScript syntax check and index-loader wiring check passed.

## Cautions
The tests used isolated JavaScript execution and a simulated state object, **not** a running browser environment, iOS Safari, iPhone PWA, or a signed-in Firebase account. Behavior around DOM inputs, stale feedback after editing, accessibility, offline operation, cloud merge, conflict resolution, and repeated real-world browser reloads remains unverified.

## Remaining academy-wide quality gates
1. Actual iPhone/desktop smoke test of practice input, incorrect answer remediation, retakes, and historical results on reload.
2. Signed-in Firebase cloud-save test across devices, including overlapping edits and merge conflict behavior.
3. Extend question-specific independent grading to conceptual executive analyses and validate rubrics with qualified reviewers.
4. Reconcile lesson minutes to observed learner work and meaningful exercises; do not claim author-assigned hours are independently verified.
5. Address duplicate and off-course historical questions across Levels 1–4 and complete a combined 26-course exam-bank quality review.

**Phase 3F verdict:** All 30 new numerical question keys passed independent arithmetic checks and newly submitted practice-answer evidence is persisted in the source code. This is not final academic or live acceptance sign-off.
