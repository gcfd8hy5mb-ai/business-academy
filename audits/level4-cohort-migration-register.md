# Level 4 versioned required-exam migration — implementation register

**Branch:** `audit/levels-1-2-academic-review` (Draft PR #3).  
**State:** STAGED / RELEASE DISABLED / NOT DEPLOYED.  
**Current policy:** Every learner continues using the original required Level 4 exam IDs. New v138 independent exams remain optional.

## Implementation in the draft branch

- `learning/level4-cohort-policy-v139.js` defines immutable version labels `l4-legacy-v1` and `l4-required-v2`, conservative existing-learner detection, a prospective pin stored **inside** the original `business-academy-learning-v1` JSON (schema 1), and a candidate required-exam selector.
- The selector identifies required legacy exams containing duplicated prompts and proposes retiring those complete exam blocks for **future cohorts only**, retaining non-repeated required exams and substituting the separate v138 independent question bank. It never edits historic exam definitions, question IDs, answer snapshots or grades. This is a **proposal**, not a certified equivalent examination set.
- `RELEASE_APPROVED=false` blocks enrollment, cohort activation and any new required grading path. A forged `level4ExamCohort` pin cannot change required exams while rollout remains off. Existing learner progress is not migrated.
- `learning/core-v110.js` delegates its required-section mastery check to the release-gated selector when loaded; with rollout off the requirements are exactly the existing ones. `index.html` loads the policy after the existing v138 content.
- `learning/firebase-cloud-v158.js` checks both sides' cohort versions before user-confirmed overwrite/restore and before automatic uploads. Incompatible or malformed pins block overwrite and require manual review. It retains the existing two synced keys, Firestore schema version, revision compare-and-swap and backup actions.
- `tests/academic-level4-cohort-policy.test.cjs` exercises release gating, attempts to pin existing work, actual Level 4 candidate inventories, immutable original data, incompatible cloud versions, and corrupt records. Added to the existing full academic CI workflow.

## Blockers to making this policy live

1. **Independent assessment validity:** Each proposed replacement has only four objective items. It cannot be certified equivalent to all retired required questions by an automated test. Academic examiners must determine item coverage, cognitive rigor, case marking, and required thresholds, and approve replacement banks before rollout.
2. **Final Level 4 milestone integration:** The current comprehensive final `l4-final-v99-exam` is addressed explicitly in the existing milestone, so a future cohort policy must update that milestone, progress-percentage tracking, assessment UI labels, rubric accounting, and assigned workload consistently. Until that wiring and tests pass, **keep rollout disabled**.
3. **Cohort creation and account identity:** New-student assignment requires a trusted, one-time enrollment decision that cannot be overwritten by a second device. Current `pinNew` deliberately throws while approval is false; no UI or automatic enrollment is exposed.
4. **Actual cloud conflict and offline verification:** Static checks do not prove Firebase cross-device transactions, offline convergence, or Home Screen PWA compatibility. Execute the physical-device matrix with isolated test accounts and verified backups.
5. **Legacy completion:** Verify historical scores, attempt fingerprints, prior completed lessons and written submissions on representative older accounts. No historic attempt may be rewritten or forced to retake new exams.
6. **Authorized release:** Obtain release approval separately from external academic sign-off, enable only after all blockers are addressed, run a complete CI + physical acceptance pass and perform an explicit merge/deployment decision. Neither is authorized by this staging work.

## Rollback

While `RELEASE_APPROVED=false`, revert the draft code with no student-data migration. After a future authorized cohort launch, rollback must preserve existing pinned cohort references and all original attempts and must not rewrite or silently downgrade the exam version. This post-release rollback requires separately tested product policy.

**Do not describe this staged migration as an active fix for historical Level 4 repetition.** The old required exam banks are intentionally unchanged, and full academic sign-off is not obtained.
