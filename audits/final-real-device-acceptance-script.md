# Business Academy — Final Real-Device Acceptance Script

**Status:** READY TO EXECUTE; no real-device passes recorded in this document.  
**Purpose:** Verify the *candidate audit branch after deployment to an isolated preview*, never modify a learner's production data without backup. Preserve existing student progress, historical question IDs and existing Firebase cloud records.

## Preconditions

Reviewer/tester records: test date, exact audit commit SHA, preview URL, iPhone iOS and Safari version, whether opened in Safari or installed Home Screen, desktop operating system/browser version, user ID alias (do not put real addresses or secrets in public GitHub), tester role, and current number of completed lessons/attempts on each device. Use test account or a consented personal account with exported backup. Never post a Firebase token, password, identifiable student submission, or user progress export publicly.

The draft branch is **not live**. A test on the existing published GitHub Pages website cannot verify changes that have not been merged/deployed. Use a separately hosted preview of this branch or wait for an approved release.

## Acceptance scenarios

| ID | Scenario | Expected observable result | Status |
|---|---|---|---|
| IOS-01 | Open preview in current iPhone Safari | Homepage and all five level cards load; no blank view | NOT RUN |
| IOS-02 | Enter Course 1, then the final courses in Levels 2–5 | Lesson/navigation tabs work; course title and units match selected level | NOT RUN |
| IOS-03 | On a long lesson, use Next, Previous and Back; scroll to end | No sideways overflow, trapped scroll, invisible footer or premature completion | NOT RUN |
| IOS-04 | Mark one test lesson complete, close Safari, reopen | Lesson status and completed count persist exactly | NOT RUN |
| IOS-05 | Submit one practice test, deliberately miss one answer, open feedback | Correct option/explanation and total score match; retry does not overwrite original attempt | NOT RUN |
| IOS-06 | Open optional Level 4 v138 transfer exam | Label says optional and suggests 90 minutes; it does not add 90h/90m to required course workload or block mastery | NOT RUN |
| IOS-07 | Complete a written case and select self-review criteria | Draft and rubric ratings persist; UI clearly identifies self-review vs independent instructor grading | NOT RUN |
| IOS-08 | Use Add to Home Screen on preview (where supported); launch and close | Correct standalone layout, visible tabs and retained progress; no stale removed controls | NOT RUN |
| IOS-09 | With no network, reopen and return online | Offline display is accurate and failed sync does not silently erase progress | NOT RUN |
| IOS-10 | Use profile/settings to sign in/out | Authentication UI responds; no sign-in freeze; cloud-saving controls remain under settings | NOT RUN |
| DESK-01 | Open preview in desktop browser at 1280px+ | True multi-column web layout, legible course navigation and no mobile card stretching | NOT RUN |
| DESK-02 | Resize to tablet width and back to desktop | Responsive breakpoints do not hide content or controls | NOT RUN |
| DESK-03 | Navigate only by keyboard | Focus is visible; question options, lesson completion, tabs and buttons are reachable | NOT RUN |
| DESK-04 | Open corporate filing reading from Level 3 | Link opens expected source in another tab without losing lesson state | NOT RUN |
| SYNC-01 | Use same consented account on iPhone then desktop | Verified lesson completion and last exam result appear on desktop without manual reentry | NOT RUN |
| SYNC-02 | Complete a distinct task on desktop, reopen iPhone | Both devices converge on correct merged results; no lost attempts | NOT RUN |
| SYNC-03 | Modify both devices while offline, reconnect | Conflict-handling behavior documented, visible and does not silently lose original submissions | NOT RUN |
| SYNC-04 | Sign out and in using an existing account | Data stays linked to expected account; no cross-account data leakage | NOT RUN |
| SIM-01 | Enter business simulator from course, make a reversible decision, return | Company view, simulator state and course navigation resume without redirect loop | NOT RUN |
| HIST-01 | From a preexisting account, inspect an archived Level 4 required exam | Existing submitted score and question snapshot remain unchanged after page refresh | NOT RUN |
| HIST-02 | On old account, open new optional independent exam | Exam remains optional; historical course mastery and prior answers are unchanged | NOT RUN |

## Recorded evidence format

For each scenario record: **PASS, FAIL or BLOCKED**; tester, date/time, actual observed behavior, exact app build/preview SHA, anonymized screenshot/video reference when appropriate, issue ID, and retest SHA. Avoid checking a PASS merely because a Node test covered a similar function: physical browser interactions, Firebase sync, offline behavior and PWA compatibility must be observed.

Severity: **critical** = data loss or cross-account leak; **high** = inoperative course, grading corruption, unsafely changed mandatory exam or blocked login; **medium** = visual/UX navigation interference; **low** = copy or polishing. No production release while critical or high findings remain unresolved and retested.

## Acceptance and sign-off boundaries

Technical acceptance requires an authorized tester to sign/date the real-device matrix and confirm **actual** cloud continuity and stored exam integrity. Academic equivalence separately requires an independent qualified reviewer’s written judgment of curriculum content, outcomes, and graded original submissions. Neither approval is granted by writing this checklist or by a green CI run.
