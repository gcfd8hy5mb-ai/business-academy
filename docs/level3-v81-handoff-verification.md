# Business Academy — Level 3 Version 81 verification and Level 4 handoff

Last prepared: 2026-11-01. This is a **verification plan**, not a certificate of completion.

## Automated checks (required)

Run the workflow [Academy Levels 1–3 integrity](../.github/workflows/academy-levels-validation.yml) against the latest main commit. Confirm the workflow finishes **successfully** at that exact commit. Inspect each step, particularly:

- Level 3 full curriculum integrity (`tests/level3-curriculum-integrity.js`)
- Level 3 mastery and persistence (`tests/level3-mastery-regression.js`)
- Level 3 comprehensive final answer key and mathematics
- Level 3 graduation milestone UI (`tests/level3-ui-milestone.js`)
- Seven Version 81 case models and downside checks (`tests/level3-v81-answer-key.js`)

A file committed to CI is not evidence of a passing execution. Record the actual run URL, exact SHA, completion time, and result here after reviewing GitHub Actions.

| Check | Recorded result | Evidence |
| --- | --- | --- |
| Latest-main GitHub Actions success | PENDING | Run URL needed |
| Seven v81 case models | PENDING | Passing CI step needed |
| Comprehensive Level 3 final and retake | PENDING | Passing CI step needed |
| Academic subject-matter review | NOT COMPLETED | Independent review required |
| iPhone Safari and Home Screen app | NOT COMPLETED | Manual device evidence required |

## iPhone acceptance checklist (manual)

Using the deployed site in **Safari**, then the installed **Home Screen app**:
1. Open Level 3 and enter all seven courses (14–20); verify that lessons, examples, practice, examinations, and applications render.
2. From a lesson return to its lesson list using Back; navigate forward without losing progress.
3. Open every v81 executive case and answer its three-question exam; verify numerical correct answers, explanations, and remediation.
4. Submit a wrong answer, leave and return, and confirm graded results and saved progress persist.
5. For course 20 open the **comprehensive final** (`l3-final-v77-exam`), not just the newer v81 case review; verify a failing attempt blocks mastery and a legitimate retake can restore it.
6. Confirm `l3-final-v77-capstone` is reachable and requires a written evaluation. Verify incomplete written rubrics prevent graduation.
7. Reload, close/reopen the Home Screen app, and check resumed lesson/assessment state, tap targets, overflow, and scrolling.
8. Confirm Levels 1 and 2 dashboards, exams, and saved progress remain accessible.

Log device model, iOS version, browser mode, deployed URL, commit, tester, date, pass/fail, and screenshots or reproducible errors. Never mark device testing passed from a source-code inspection.

## Academic verification

The v81 cases use **fictional teaching assumptions**. Numerically verified formulas do not establish historical company facts, academic peer review, or accreditation. Review the seven cases for realistic decision boundaries, financial units, discounting conventions, economic interpretation, governance duties, ethical caveats, and stated assumptions. Record reviewer, findings, and corrections.

## Level 4 handoff gate

Proceed to Level 4 coursework development without overwriting Levels 1–3. **Do not label Level 3 verified or graduated** until the latest exact-commit workflow is green, manual iPhone acceptance checks pass, and any required academic review is completed. Keep these as separate, auditable statuses.
