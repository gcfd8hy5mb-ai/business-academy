# Business Academy — Full Five-Level Internal Curriculum Audit

**Snapshot:** November 9, 2026  
**Review branch:** `audit/levels-1-2-academic-review` (still a draft; production unchanged)  
**Scope:** 26 courses (Levels 1–5), all level-content scripts composed in production `index.html` order, with associated automated integrity and selected quantitative checks.  
**Status:** **Internal structural audit passed, academic adequacy NOT signed off.** This report does not certify every numerical question, teaching assertion, corporate filing, task-level outcome mapping, workload estimate, independent grading, MBA equivalence or university credit.

## 1. Verified inventory

| Level | Courses | Lessons | Objective questions | Independent numeric drill questions | Planned course hours | Assigned metadata hours | Assigned minus planned |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| 1 — Business foundations | 6 | 92 | 249 | 12 | 365 | 391.2 | +26.2 |
| 2 — Functional business management | 7 | 175 | 310 | 49 | 590 | 851.8 | +261.8 |
| 3 — Advanced corporate studies | 7 | 181 | 254 | 14 | 690 | 1,141.8 | +451.8 |
| 4 — Executive/board decisions | 5 | 71 | 175 | 10 | 480 | 504.5 | +24.5 |
| 5 — Integrated executive capstone | 1 | 30 | 23 | 30 | 180 | 187.5 | +7.5 |
| **Total** | **26** | **549** | **1,011** | **115** | **2,305** | **3,076.8** | **+771.8** |

**Critical interpretation:** Planned hours come from `app-v28.js` course plans; assigned hours are a metadata sum of lesson, reading, application, portfolio and required assessment minutes, excluding optional exam minutes according to `learning/workload-audit-v130.js`. They are **not actual observed study time**, validated credit hours or a benchmark against an accredited MBA. Extended course files may have increased configured assignments without the original marketing plan being adjusted. Do not simply increase advertised hours to match metadata before educators validate double-counting and realistic learner effort.

## 2. Verified technical integrity and corrections

The full-course source composition and automated integrity checks found no unhandled script load exceptions, missing course IDs, duplicate lesson IDs, invalid multiple-choice answer indices, invalid numeric question targets, absent assessment answer explanations, or duplicate numeric question IDs within the tested schema.

Corrections made on the **draft audit branch only**:

- Added **24 explicitly measurable learning-outcome statements across Courses 15–20** (competitive strategy, managerial economics, analytics, venture finance, international business and technology/AI), filling six missing-outcome records. These statements are curriculum claims requiring direct independent assessment alignment.
- Corrected **three Level 4–5 optional NPV examination items** (Courses 21, 25 and 26): original options showed excessive precision despite prompts requesting two-decimal rounding. Options now correctly reflect **15.33**, **3.36**, and **1.26** respectively; prior question IDs and correct-answer positions were preserved.
- The earlier Levels 1–2 draft audit had expanded assessment explanations, protected existing optional numeric drills from replacement, corrected other NPV choice precision, and introduced independent written examiner guides and source-linked case audits. See `audits/levels-1-2-academic-audit.md`.

Automated suites at the November 9 snapshot passed **49/49 academic tests**, and the existing academic mathematics regression workflow passed. A green CI run is **not** independent verification of every individual worked example or graduate-level pedagogy.

## 3. Open editorial and academic questions

### A. Study hours and work validity — high priority

The largest unresolved **evidence/reconciliation** issue is the **+771.8 hours** discrepancy between published plans and assigned metadata. Level 3 alone accounts for **+451.8** hours, and Level 2 **+261.8**. A qualified faculty reviewer should sample realistic task completion times, distinguish actual independent learning tasks from repeated scaffolding, identify any doubled assignment allocation, and propose a defensible hour plan. No automatic renumbering of credits, durations or completion flags is justified.

### B. Assessment prompt reuse — needs review

The course audit found **15 exact repeated objective-question prompt occurrences across Level 4 assessment sets**. These may reflect intentional reinforcement, but they can undermine exam independence if the same item is encountered and memorized. Before changing active question identifiers or answers, inventory each repeated pair with its exam context and replace with truly independent case variants **using new versioned IDs**, or explicitly designate non-summative drill repetition. Preserve historical exam attempts and grade snapshots.

### C. Long-duration lesson depth — needs review

The automated word-count heuristic flagged **six Level 1 lessons with assigned durations of 90 minutes or more but fewer than 200 words in their direct lesson body**. This is not proof of insufficient instruction: linked readings, worked examples, projects and case exercises may account for the remainder. Inspect lesson content, directions and actual assessment workload before deciding to add content or reduce assigned minutes.

### D. Learning-objective alignment and academic difficulty — unresolved

All 26 courses now include at least one declared outcome under the audited scope. This does **not** demonstrate that each outcome is specifically taught and directly measured by appropriate required assessments. The outcomes-to-evidence matching in `audits/build-reviewer-evidence.cjs` is explicitly provisional. A qualified reviewer must assess each statement and mark its supporting lesson and assessment IDs, then judge Bloom-level cognitive demands, independent performance and available remediation. Optional exams and self-reviewed written work cannot be treated as independent grades.

### E. Primary sources and discipline accuracy — unresolved

Selected Costco, Microsoft and Walmart source-derived examples and fictional financial models have been checked in prior batches. A systematic current audit of all 53 source-reading records, their accessibility, dates, academic fit and licensing remains to be done. Similarly, automated answer-key range checks are not proof that every correct option is actually numerically or professionally correct.

## 4. Suggested completion gates, before an internal 'curriculum complete' designation

1. Conduct a task-level alignment review for every learning outcome across all 26 courses; document teaching evidence, direct assessment, reviewer and gap closures.
2. Resolve course-hour conflicts with a measured or independently calibrated learner-workload study, not an unsupported equivalence assertion.
3. Investigate and rework Level 4 repeated items without rewriting historical grades; check broader near-duplicate assessments.
4. Review the six flagged long-duration Level 1 lessons and independently audit stratified samples of numerical calculations and corporate case sources across every level.
5. Conduct blind marking of consented anonymized written work by qualified reviewers, with moderation and a signed scope-limited evaluation.
6. Validate final source links and publish a documented issue register with closed high-priority findings.

## 5. Reproduction and artifact generation

From the repository root:

```sh
node --test tests/academic-five-level-curriculum.test.cjs tests/academic-level3-level5-review.test.cjs
node audits/build-full-curriculum-audit.cjs
node audits/build-full-curriculum-audit.cjs --json
```

The GitHub Actions workflow `.github/workflows/academic-levels-1-2.yml` runs the full academic test group alongside earlier scope-specific tests. On successful runs, its generated reviewer evidence artifact includes `five-level-curriculum-audit.md` and `five-level-curriculum-audit.json`. The workflow name retains its earlier Level 1–2 label; its coverage now includes all five levels. No student progress, local storage key, Firebase setting, original grades or graduation flag is changed by this audit.

**Conclusion:** The five-level curriculum has an extensive authored foundation and passes automated **structural** tests across all 26 courses. Substantive independent academic completion, assessment reliability and workload validation remain open. No university endorsement, accreditation, degree or transferable credit is asserted.
