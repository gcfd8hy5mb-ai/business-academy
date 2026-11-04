# Business Academy — Exam History Integrity and Versioned Assessment Audit

**Date:** November 4, 2026
**Status:** Code shipped, source-level regression passed. Live-device, cross-device Firebase and GitHub-hosted CI results remain unverified.

## Issue and design
Before this update the grading engine stored the assessment kind, score, submitted answer indices and submission timestamp, but **not a record identifying the precise question/answer-key definition** used at submission. Legacy required exams have subsequently been extended with new questions, and some bank prompts are repeated, so future independent auditors need a way to detect when an exam definition used for scoring differs from its current definition.

Existing attempts are not rewritten and their stored grades must not be silently recomputed under newer bank definitions.

## Delivered
Modified the existing `learning/core-v110.js` grading routine to attach `assessmentSnapshot` to **newly created attempts only**:
- `format: 1`
- `questionIds`: ordered list of question IDs in the graded assessment
- `questionCount`: number of assessed questions at submission
- `keyFingerprint`: deterministic 32-bit FNV-1a checksum of a JSON representation of each question's ID, prompt, option order, and keyed correct choice.

The checksum is **a compact version fingerprint, not a cryptographically secure signature** and does not itself archive the complete historical questions. It permits comparison to a preserved definition or subsequent fingerprint to detect most ordinary content/version changes, but it cannot reconstruct a previously deleted exam by itself.

No previous `attempt` object was rewritten. No question order, exam ID, correct-answer key, minimum pass score, mastery logic, or existing local/cloud state was deliberately changed. Old attempts remain readable without the new field.

Updated the `index.html` cache-busting URL to `learning/core-v110.js?v=145` so browser clients load the new grading source.

## Regression tests
Published `audits/scripts/assessment-history-regression-v145.cjs`, which constructs a synthetic learner store and executes the current production grading module. It verifies:
1. Legacy attempt data remain unchanged.
2. New attempts include ordered question IDs, question count and stable fingerprint metadata.
3. Repeated submissions of unchanged questions yield the same fingerprint.
4. Changes to answer option order and keyed answer produce a different fingerprint.
5. New attempt metadata survives JSON serialize/deserialize.
6. Optional independent exam completion does not grant required mastery.
7. Existing study-minute accounting is unchanged.
8. Unanswered or nonexistent assessments are not incorrectly marked as graded.

**Source-level result: PASS**, zero assertion failures in the restricted JavaScript test environment using the actual edited learning model.

Added this as an **eighth step** in `.github/workflows/academic-math-regression.yml`, with learning-core and test changes included in triggers. The GitHub commit combined-status endpoint returned an empty list of status checks, and the connector's PR-associated workflow-run lookup also returned an empty list for the examined workflow commit. Those limited results **cannot establish that a regular push-triggered GitHub Actions run succeeded or failed**.

## Assessment retirement remains separate
This change **does not retire** historical questions or replace required exams with optional versions. Historical compatibility should be handled through separate versioned required exams and an explicit completion/eligibility migration design, with archived old questions and an opt-in transition path. No migration has been attempted.

## Remaining gates
- Capture immutable archived assessment definitions in a proper historical manifest before retiring question banks; the new fingerprint alone is insufficient for reconstruction.
- Verify GitHub-hosted CI via an authoritative Actions run result and inspect logs as necessary.
- Manually test iPhone Safari/PWA and desktop submission and grade display, retained history and Firebase cross-device merge.
- Validate academic workload, executive written submissions and independent review.

**Verdict:** Future submissions now carry compact exam-version evidence while historical recorded attempts remain unchanged. This is a progress-safety improvement, not proof of complete grading or academic certification.
