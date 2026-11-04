# Business Academy — Legacy Required Examination Archive and Safe-Transition Preflight

**Date:** November 4, 2026  
**Status:** Archived historical assessment definitions, source-level verification passed, and ten automated CI steps configured. The original required exams remain active. GitHub-hosted runner and iPhone/Firebase acceptance remain unverified.

## What has been preserved

### Level 2: seven required v58 exams

`audits/data/2026-11-04-required-level2-v58-exam-archive.json` preserves the complete examination definition for all **seven** v58 required exams, **21 questions** total, one exam per course 07–13. This includes each assessment ID, question IDs, question prompts, ordered option text, correct indices, explanations, lesson references, original assigned minutes, written instructions, model explanations, and marking rubrics. The manifest identifies the originating source path and Git blob SHA.

### Level 4: twenty required exams extended by v104

`audits/data/2026-11-04-required-level4-v104-exam-archive.json` preserves the complete final post-v104 assessment definition for **20** original short required exams across courses 21–25. This contains **75 total question occurrences**, including **40 questions added by v104**. The appended questions derive from **10 distinct question prompts repeated across those sections** (30 repeated occurrences). The archive records pre-extension question counts and minutes plus final full assessment definitions, and identifies source files/blob SHAs.

These files are historical evidence and **do not replace active exams**. They must remain stable when future lesson or assessment changes are proposed. The checksum metadata added to *new* grading attempts in v145 is supplemental evidence; it cannot reconstruct the questions from an old attempt unless an appropriate archived definition exists.

## Source-level archive guard

Added `audits/scripts/legacy-required-exam-archive-regression-v146.cjs`. It recreates the Level 2 v58 and Level 4 v82/v95–v104 assessment definitions using the original scripts and checks them against the archival JSON. It also checks the number of appended v104 questions, exam durations, expected repeated occurrences, and unique bank structure. Separately validated both archive datasets directly against the reconstructed production-source definitions: **zero definition mismatches across 27 exams**.

The source guard is intended to detect accidental edits to historical assessment definitions. A legitimate new exam revision should **create a new assessment ID or archive version** rather than mutating the archived original to make the guard pass.

## Replacement-readiness preflight

Added `audits/scripts/assessment-transition-preflight-v147.cjs`. It loads the newly authored optional independent exam banks and compares their question coverage against the archived required exams.

| Affected courses | Required archive | Optional candidate | Migration status |
|---|---|---|---|
| Level 2 courses 07–13 (7) | 1 exam × 3 questions/course | 1 exam × 2 questions/course | **Blocked** |
| Level 4 courses 21–25 (5) | 4 exams × 15 questions/course | 1 exam × 3 questions/course | **Blocked** |

All **12** course mappings are correctly marked **not ready** for automatic transition. The candidates are optional by design, and their numerical coverage does not match existing required assessment obligations. A *passing preflight* means an unsafe automatic migration is **blocked**, not that the newer optional exams are ready to replace required exams.

Regression executed against retrieved original source and archived definitions: **PASS; 12 blocked course mappings; 0 failed preflight assertions.**

## CI and progress compatibility

Extended `.github/workflows/academic-math-regression.yml` to **ten** Node test steps, adding v146 archival integrity and v147 unsafe-migration prevention checks. The workflow also watches the relevant legacy source, archive JSON, optional candidate exam banks and scripts.

This batch deliberately **does not**:
- Delete or replace any required exam, historical ID, existing answer option, or correct key.
- Reinterpret previously stored scores against new question sets.
- Automatically grant required mastery because a student completed an optional exam.
- Migrate or overwrite a stored learner record.
- Claim actual GitHub-hosted CI success or signed academic equivalency.

## What remains before retiring repeated required exams

1. Design **new required exam IDs** and a clear one-to-one mapping of old and new mastery obligations.
2. Supply enough academically equivalent, independent quantitative, conceptual and written questions to cover the original required assessments, including *four distinct* Level 4 exam units per course, rather than replacing fifteen required questions with three optional ones.
3. Choose and test an explicit **grandfathering policy**: historical passed students retain prior evidence; in-progress learners have a transparent choice or a carefully defined transition, without forced loss of earned marks.
4. Preserve complete old questions and grade semantics, and verify both local historical saves and signed-in cloud synchronization across actual devices.
5. Submit the proposed changes to qualified reviewers and test that no cross-course duplication or inappropriate answer disclosure remains.

**Conclusion:** 27 original required exam definitions are archived and source-checked. A repeatable fail-closed test now prevents treating the 12 insufficient optional candidate exams as automatic required-exam replacements. Academic equivalence, live device/cloud verification, and full replacement implementation remain outstanding.
