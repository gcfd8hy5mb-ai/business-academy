# Historical examination fairness decision — Level 4 M&A (2026-11-14)

## Decision and scope

**Adopt a non-destructive, student-favorable correction policy** for the older *optional* section exam `c21-v105-independent`, specifically `c21-v105-independent-q3`. The wording says $9 million annual operational savings already contains the $3 million duplicated in IT; the unique savings value is **$9 million**, whereas the historic answer key credited **$6 million**.

This is not a mandatory graduation examination. The original stored score was calculated under the published historic key. Existing grades, attempts, fingerprints, timestamps, written responses and student progress **must not be overwritten** to make retrospective claims about original scoring. The historical record remains available for audit, with an explicit erratum.

## Student treatment

1. **No negative retroactive consequences.** No earned mastery, completion, or score will be reduced because a learner selected the previously credited $6 million. Never automatically convert a previously passing record to failing.
2. **Offer a corrected route.** A learner who selected $9 million and was incorrectly marked wrong can submit `c21-v143-corrected-evidence` instead. This form is optional, identifies the correct accounting principle, and creates a separate, versioned score without deleting the historic record. It is educational remediation, **not a silent alteration of the old transcript**.
3. **No invented historical credit.** Where a prior snapshot is incomplete or the exact original option order cannot be established, label the case *needs manual verification*. Do not infer a new historical score or grade from the current question bank.
4. **Individual review on request.** When the original submission and its question/key version can be established, a reviewer can write a separate signed adjudication note stating: old score, version/fingerprint, disputed original answer, reason, conservative corrected diagnostic score (if calculable), and the learner's choice of optional retake or acknowledgement. Keep any adjustment separate from the historic attempt. Do not change course-mastered status automatically.
5. **Graduation is not contingent on this optional form.** The older and newer exams have `optional:true`; both should be excluded from required completion and required assessment-quality pass rules.
6. **Disclosure.** Present the known erratum in the old exam and flag potentially affected saved attempts in the interface. Never claim automated independent grading or external examiner approval.

## Review outcome categories

- `possible-under-credit`: $9 million was chosen and prior grading may be low by one question.
- `possible-over-credit`: $6 million was chosen and prior grading may be high by one question; do **not** retract historical credit.
- `scoring-unaffected-by-disputed-answer`: a different answer was selected.
- `answer-unavailable` or `key-version-unknown`: original historical answer/key cannot safely be reconstructed; preserve the attempt pending evidence.
- `not-in-snapshot`: the saved snapshot does not contain the question; the prior attempt is not assumed affected.

## Auditable calculations

When and **only when** the original exam version, question count, and answer choices can be confirmed, an optional diagnostic may calculate the dispute's one-question impact as `100 / originalQuestionCount` percentage points **before** the original score rounding, based on whether the original response was $9 million or $6 million. It must be labeled **non-authoritative diagnostic**, never persisted into `attempts`, `answers`, `feedback`, `mastery`, or cloud fields. Other errors in the historic exam and passing thresholds must be assessed independently.

## Evidence and limitations

The code in `learning/assessment-fairness-v148.js` is a read-only classifier, not a grade adjustment mechanism. `learning/level4-assessment-errata-v143.js` carries the visible correction and separate optional form. The current UI can still display the historic exam with its original key, so ongoing use must be accompanied by the displayed erratum. Any future archival of the old exam needs a separate UI-and-core grade gate with browser verification before deployment.

This policy resolves how to *treat* the known defect without inventing grades, but does not imply actual student history was accessed or independently adjudicated. New optional submissions are unaffected by mastery eligibility.
