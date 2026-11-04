# Business Academy — Large Batch: Workload Transparency, Legacy Exam Compatibility and Level 4 Depth Remediation

**Audit date:** November 3, 2026
**Status:** Published and source-level validated. Live Safari/PWA, desktop and Firebase acceptance and independent educational sign-off remain open.

## Implemented in the app
- Added `learning/workload-audit-v130.js`, calculating assigned minutes by **lesson, external reading, written application, portfolio and required assessment** categories. Optional assessments are excluded from assigned required minutes; the tool labels all figures as **allocated/estimated time**, not measured learning hours or credit.
- Added `learning/workspace-v46.js` to show the breakdown on each course's Overview screen, plus an audit signal for lessons assigned at least 90 minutes whose instructional body has fewer than 200 words.
- The Exams screen also displays a **historical repeated-assessment warning** for source-flagged old exam banks (v58/v104 or duplicate prompts within the course). It explains that independent optional alternatives exist while older exams retain required status pending an explicit transition policy.
- Published `learning/level4-teaching-depth-v131.js`: **15 original Level 4 v101 lessons** now have detailed topic-specific modeling, independent verification and board-facing applications, including corporate valuation, capital allocation, controls and governance, operating effectiveness and integrated portfolio decisions.
- All new files are loaded in `index.html` in a content-first order.

## Level 5 baseline assigned-workload finding
The assembled Level 5 source (v117 through v125) allocates:
| Category | Assigned minutes | Assigned hours |
|---|---:|---:|
| Lesson content and independent study allocations | 5,700 | 95.0 |
| Assigned readings | 390 | 6.5 |
| Written applications | 1,680 | 28.0 |
| Portfolio sections | 3,060 | 51.0 |
| Required section examinations | 420 | 7.0 |
| **Total modeled assigned workload** | **11,250** | **187.5** |

This is an **author-assigned time model**, not evidence of a student taking 187.5 hours, and not an independently endorsed graduate-school credit award. None of the 30 Level 5 lessons fell below the simple 200-word screen at the time of this audit.

## Level 4 substantive depth finding and fix
The assembled 12-script Level 4 source before v131 contains **71 lessons**. All **71** have durations of at least 90 minutes and fewer than 200 words of body text under a basic quantitative screen. This does not prove the other applications are empty, but it reveals a major mismatch between long nominal study periods and concise instructional bodies.

The **15 existing v101 advanced lessons** originally contained approximately **44–54 words** each. The new v131 sections add four distinctive instructional subsections to each, raising the resulting estimated length to about **261–284 words** in those 15 lessons. They remain short relative to multi-hour assigned durations, so academic sufficiency is still **not certified**. **56 other Level 4 lessons remain below the 200-word screen**, prioritized for expansion and workload corroboration.

Source regression checks:
- All 15 original lesson IDs, minute allocations and example/transfer properties preserved.
- Re-running v131 does not append duplicate sections.
- `workspace-v46.js` compiles.
- v130 workload breakdown matched the existing `BALearning.workload` calculation on a representative fixture (750 minutes total).
- All new script-loader references confirmed in `index.html`.
- No grading, mastery policy, exam keys or stored learner records changed.

## Legacy exams: deliberate safe handling
Existing required mastery still depends on original exam IDs, which may have previously stored answer indices. Deleting or overwriting repeated v58/v104 questions would risk past learner evidence and score interpretation. This batch **does not retire** them; it labels the compatibility issue in the UI. Versioned optional independent exams (v127–v129) remain accessible, but they are not silently substituted for required graduation checks.

A safe future retirement must establish a snapshot of old assessment definitions and a versioned eligibility/completion policy before changing any required-mastered logic; it must pass local and cloud-merge tests on real devices.

## Remaining critical gates
1. Deepen the 56 remaining Level 4 short lessons and verify that allocated hours correspond to actual readings, independently worked models, exercises and student time-on-task.
2. Build a per-course verification ledger across Levels 1–3 with objective alignment, source provenance and workload data that does not double-count related assignments.
3. Run actual iPhone Safari/PWA, desktop and cross-device Firebase save/reload/merge acceptance.
4. Qualify independent academic graders for executive memoranda and external subject-matter accuracy/equivalence reviews.
5. If changing required exams, retain historical exam-definition snapshots and avoid reinterpreting previously submitted answer indices.
6. Conduct final accessibility, failure recovery and grading integrity checks.

**Verdict:** The app now exposes the unverified workload components, documents legacy repeated-exam compatibility, and improves 15 Level 4 advanced lessons. It is not yet reasonable to claim verified academic workload or complete independent sign-off.
