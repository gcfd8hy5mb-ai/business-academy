# Business Academy — Levels 1–2 Long-Lesson Audit and v137 Instructional Expansion

**Date:** November 3, 2026
**Status:** Curriculum extension deployed to `main`; source/fixture regression passed. Device/cloud acceptance, full teaching-content and external quality review remain open.

## Authored course inventories
Level 1 was assembled from all sixteen Level 1 source files, yielding **86 lessons in six courses** (13/17/13/13/16/14). The 90-minute-plus, sub-200-word screen flagged **one** Level 1 lesson before the new extension. Another **66** lessons in the baseline Level 1 assembly had bodies under 200 words at shorter durations; that figure includes the one long lesson.

Level 2 was inventoried by executing its initial twelve source scripts, saving their full lesson definition data, reconstructing those lesson objects in a new environment, and executing fourteen later Level 2 course supplements in order. The resulting combined inventory contained **175 lessons across seven courses** (27/29/23/25/23/24/24) and **19** cases at >=90 assigned minutes whose body was below 200 words. **67** Level 2 lessons had bodies below 200 words at all durations.

**Important method limitation:** the Level 2 inventory reconstructs original lesson objects but does not fully reproduce their earliest module metadata or other side effects. Therefore it is a targeted course-lesson inventory rather than a verified full-browser snapshot. The combined Level 1–2 manifest totals **261 lessons**, whereas prior published overall totals used earlier snapshots; course counts require full production runtime acceptance before citing program-wide totals as definitive.

Inventories:
- `audits/data/2026-11-03-level1-full-lesson-depth.json`
- `audits/data/2026-11-03-level2-early-lesson-depth.json`
- `audits/data/2026-11-03-level2-combined-lesson-depth.json`

## Instructional improvements
Published `learning/level1-level2-long-lesson-depth-v137.js`, loaded after existing curriculum scripts and before the workload diagnostics.

The extension adds **68 original lesson-specific teaching appendices** (7 in Level 1, 61 in Level 2), targeting lessons with fewer than 200 words that had **80 or more assigned minutes**. Each includes:
- A corporate/business conceptual foundation specific to the existing course.
- An independently reconstructable case referring to the prior lesson's stated model and worked example, requiring labeled units and dates.
- A transfer calculation and adverse sensitivity based on the lesson's original `transfer` instructions.
- Evidence and governance review with a feasible alternative, accountable decision maker, board stop condition and explicit separation of fictional from verified company data.

Each extension is appended, not a replacement. No new exam IDs or grading requirements are created; no previous answers or progress are edited.

## Checks
Performed source/fixture tests using all 261 inventory lessons, and the actual new extension source:
- **68/68 lesson targets** registered and changed in the reconstructed objects.
- Post-update **all 68 revised bodies exceed 200 words** (minimum 363 words among upgraded lessons).
- Under the reconstructed >=90-minute and <200-word screening rule, **0 remaining flags** across Levels 1–2.
- All original IDs and assigned lesson minutes retained.
- The extension is idempotent under repeated script execution.
- `index.html` now loads v137.

There were no changes to old examination definitions or stored completion records in v137. The fixture exercise did not run actual grading/reload/cloud persistence in an iPhone or desktop browser.

## Academic limitations and next priorities
- The 200-word threshold is a **coarse triage screen, not proof of sufficiently deep instruction**, graduate-equivalent educational attainment, or actual hours spent. Shorter lessons with fewer than 80 minutes remain a separate quality review concern.
- Some new text uses course-level common foundations, but case references and independent transfer tasks differ by lesson; qualified experts must still check concept specificity and avoid substantive repetition.
- Independently verify all original numerical examples and worked answers. A self-authored extension referring to an earlier answer **does not certify the original answer**.
- Build a task-level time-on-task ledger across required lessons, readings, independent problems, written cases and portfolio work, and pilot the duration assumptions.
- Complete real iPhone Safari/PWA, desktop, offline/save/retry and Firebase sign-in/cross-device progress acceptance.
- Historical repeated required assessment banks still need careful versioned retirement with preserved historical grading evidence.
- External qualified academic reviewers have not provided equivalency, accreditation or written sign-off.

**Verdict:** The long-lesson/short-body screening gap for Levels 1–2 has been cleared in the reconstructed source inventory; 68 course-aligned lesson extensions are published. Broader academic correctness, learning-time validation and functional acceptance remain unfinished.
