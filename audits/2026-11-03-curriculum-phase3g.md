# Business Academy — Phase 3G: Level 5 Numerical Practice Retry and Input Acceptance

**Date:** November 3, 2026  
**Status:** Updated workspace deployed; event-level JavaScript simulation passed. Live device and cloud acceptance still pending.

## Confirmed issues in existing practice experience
1. The practice grader allowed submitting a drill even if some answers were blank or nonnumeric, recording those omitted questions as incorrect instead of requesting a completed attempt.
2. Prior graded feedback remained visible when the draft answers changed. The persisted attempt was intact, but the UI did not explain that visible feedback belonged to the earlier submission.
3. Numerical draft changes were recorded on the DOM `change` event (blur); this could delay persistence of typed answers until focus moved away.

## Fix implemented
Created `learning/workspace-v45.js` from v44 and updated `index.html` to use `learning/workspace-v45.js?v=165`.
- Validate **every** number through the existing `BANumericGrade.parse` before recording a graded practice attempt; show an incomplete-answer message if any are missing/invalid.
- Save typed numerical answers on the `input` event, reducing dependence on blur.
- Detect whether current draft inputs differ from the most recently submitted values. When they do, the next rendered view states that a new grade is needed; prior per-question feedback is not shown for changed drafts.
- Preserve prior attempt snapshots, up-to-20 history records, targeted remediation and lesson links from v44.
- Do not change scoring keys, course/lesson IDs, legacy exam grading, historical mastery, graduation rules, or account sync code.

## Event-level JavaScript regression
Executed the actual deployed workspace v45 source with a minimal browser-like event harness and the real `core-v110` learning-state API and `BANumericGrade` engine (sample test drill with three questions).
- **Incomplete submission rejected**; no attempt record created.
- Full `5, 0, -7` answers accepted, yielding **3/3**.
- Retake changing 5 to 4 yielded **2/3**, with zero and negative values still correct.
- Both attempts remained in `numericAttemptHistory`, including the exact originally submitted values.
- The latest numeric attempt retained the new score and submission snapshot.
- JavaScript source syntax check passed and `index.html` now references v45.
- The prior Phase 3F check independently recomputed **30/30** Level 5 answer keys successfully.

## Test limitations and remaining checks
These are event-level tests using a simulated DOM/event host, **not** Safari or real Firebase. A real-device acceptance pass must check focus changes, keyboard behavior, editing feedback refresh, page reload, offline PWA behavior, cross-device conflict resolution, and assistive-technology labels. The current changed-draft warning updates when the practice view next renders, not dynamically on each keystroke; this is a remaining usability polish issue.

A future test should also validate what happens when browser storage is full, cloud saving fails, a second device edits the same drill, or a student tries to submit with very long/unusual numeric strings.

## Next phase
1. Have a signed-in learner run a three-question drill in iPhone Safari/PWA, edit and resubmit, reload, and verify saved values.
2. Confirm persistence on desktop with the same account without overwriting older results.
3. Run the wider 26-course exam bank deduplication and conceptual rubric audit, with version-safe treatment of historical submissions.
4. Establish independent review and defensible learner-time validation.

**Verdict:** Practice retry validation and input-saving defects were corrected and confirmed in source-level event simulations. Live end-to-end sign-off remains open.
