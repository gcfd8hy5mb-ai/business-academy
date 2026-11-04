# Business Academy — Versioned Required Examination Candidates, v148–v150

**Date:** November 4, 2026  
**Status:** New candidate banks and grandfathering policy authored and committed; no required-exam replacement activated. Source-level validation passed, while academic, device/cloud, and GitHub-hosted CI verification remain outstanding.

## Deliverables
- `audits/data/2026-11-04-required-exam-candidates-v148.json`: **96 original numerical multiple-choice candidate questions**, across **27 prospective required exam units** for **12 courses**. Each includes a standalone prompt, input values, quantitative expression, computed result, four separate answer choices, keyed answer, explanation, and an independent sensitivity assignment. Every candidate exam unit has a written executive task and four criterion rubrics.
- `audits/scripts/required-exam-candidates-regression-v149.cjs`: read-only test confirming unique IDs, correct option indices, mathematically consistent keyed answers, nonempty instructions/rubrics and parity with archived exam-unit counts and question totals.
- `audits/data/2026-11-04-assessment-transition-policy-v150.json`: explicit **proposed, not applied** grandfathering requirements and activation gates for new and historical learners.
- `.github/workflows/academic-math-regression.yml`: extended to an **11-step** workflow with candidate-bank and transition-policy checks.

## Candidate coverage
| Level | Courses | Archived required exam units | Candidate exam units | Archived questions | Candidate questions |
|---|---:|---:|---:|---:|---:|
| 2 | 7 (07–13) | 7 | 7 | 21 | 21 |
| 4 | 5 (21–25) | 20 | 20 | 75 | 75 |
| **Combined** | **12** | **27** | **27** | **96** | **96** |

Each Level 4 course has four separately titled proposed exam units with question counts **4, 4, 4 and 3**, matching its archived per-section totals. Level 2 courses have three candidate questions each.

## Source-level test results
The v149 regression was executed against the committed candidate JSON and previously archived v58/v104 required-exam manifests. Result: **PASS — 12 course mappings, 27 candidate exam units, 96 question IDs, zero test assertion failures**.

The validator also verifies the transition policy remains `PROPOSED_NOT_APPLIED`, `activated=false`, with no student forced to migrate, no previous student grades rescored, and all four independent signoff flags false.

## Educational quality caveat
The 96 problems are newly authored, but a substantial portion uses controlled parameter variations on a smaller set of five model types per Level 4 course. That is **independent input variation, not yet demonstrated breadth or equivalence of difficulty**. Many distractors are numerical shifts based on the correct figure rather than misconceptions derived from actual student reasoning. Passing arithmetic and format checks does not prove the quality, clarity, uniqueness, or fairness of every item.

**The new candidate file is stored solely under `audits/data` and is NOT added to the live `BAContent.sectionExams`.** It does not affect current grading, workloads, mastery, or any previous student attempt. It is not displayed as a new required exam in the app.

## Proposed non-destructive transition
- Students who previously passed required exams keep their recorded scores and historical evidence.
- In-progress students retain the original bank unless a later explicitly approved transition is offered.
- New students continue on the existing required bank until activation is approved and published.
- New candidate IDs and archived original definitions must coexist. No answer-index remapping, historical rewriting, or automatic substitution with v128/v129 optional exams.
- A real implementation must prove the new four-unit Level 4 exams are equivalent in coverage, rigor, weighting and written grading—and separately verify progress persistence on iPhone, desktop and Firebase.

## Remaining gates
1. **Independent subject-matter quality and mathematical audit** of the 96 new questions, especially their scenario wording, units, distractor design, repeated model families, answer distributions and exam-specific difficulty. Review per required exam unit.
2. **Content strengthening** to broaden the candidate pool before relying on numerical variants alone to replace the older repeated required prompts.
3. Build an explicit student-facing opt-in transition only after the new exams are approved, with complete regression for grandfathering, paused attempts and cloud-backed history.
4. Verify the entire 11-step GitHub Actions workflow on an actual hosted runner, not merely the restricted source-level execution.
5. Test native iPhone Safari/PWA, desktop and Firebase cross-device progression before switching which assessments count toward mastery.
6. Seek qualified independent academic review and sign-off. No equivalence/accreditation certification exists.

**Verdict:** The next generation of required examinations is **drafted and arithmetically source-checked**, with full unit and question-count parity, while every historical exam and learner grade remains untouched. Replacement remains deliberately inactive pending academic and functional validation.
