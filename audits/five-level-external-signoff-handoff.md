# Business Academy — Independent Academic Review Submission Packet

**Version:** 2026-11-10 (pre-sign-off draft)  
**Institutional status:** Independent, non-accredited educational software project; not a university degree, licensed MBA curriculum, transferable-credit program or guaranteed professional qualification.  
**Source version:** `audit/levels-1-2-academic-review` (unmerged draft PR #3). Reviewers should record the exact Git commit SHA downloaded from the relevant GitHub Actions artifact.  
**Intended review:** All 26 authored courses across five levels, including learning outcomes, executive-case depth, quantitative grading, applied assessments, student-work requirements and stated workload.  
**Applicant's intended standard:** rigorous graduate business education and senior-executive decision-making; whether any particular academic level is achieved must be decided by qualified external evaluators on evidence, not the project's stated design aspiration.

## Cover note for an independent evaluator

Dear Academic Reviewer,

We request an independent, documented evaluation of the Business Academy's five-level online curriculum. The program is an original, self-directed teaching application focused on business fundamentals, corporate functions, advanced finance and economics, executive decision-making, multinational governance, and a final integrated corporate capstone.

Please assess the quality, scope, sequencing, factual accuracy, quantitative difficulty, learning-outcome alignment, and direct evidence of competency within the exact source version supplied. Distinguish an internal code quality check from external educational validation, and identify where a written assignment is self-reviewed rather than independently graded. We are seeking an **honest, scope-limited written assessment with actionable corrections**, not an automatic certificate, endorsement, accreditation or academic credit.

The package contains the full curriculum source, assessment models and reviewer audit artifacts. We ask that you document any limitations arising from lack of original student submissions, instructor interaction, graded written work, measured study time, source permissions or comparable institutional assessment procedures.

Sincerely,  
Business Academy project team

## Included evidence / where to look

| Item | Source artifact | Purpose |
|---|---|---|
| Full curriculum inventory | `five-level-curriculum-audit.md` and `.json` | All 26 courses, lesson counts, exams, numeric drills and workload metadata |
| Teaching/assessment coverage | `phase4-quality-review.md` and `.json` | Authored explanations, applications, transfer tasks, casework rubrics, lesson links and weaknesses |
| Outcome mapping queue | `phase4-outcome-mapping.md` and `.json` | 84 outcome statements; provisional lexical candidate matches, **not verified alignment** |
| Source/reference register | `phase4-source-register.md` and `.json` | Direct reading links and missing citation dates; does not claim URLs have been visited |
| Answer-format audit | `phase4-assessment-format.md` and `.json` | Numeric precision flags, duplicate option scan and empty answer explanations |
| Examiner protocol | `independent-written-examiner-protocol.md` | Proposed blinded double-marking and disagreement procedure; no real exams marked |
| Five-level findings report | `five-level-academic-audit-report.md` | Historical findings, fixed issues and unresolved assumptions |
| Phase 4 acceptance report | `phase4-areas1-3-acceptance.md` | Grading, progress, static-host CI and human/device limitations |
| Curriculum code | `index.html`, `learning/`, `app-v28.js` | Original teaching, numerical exercises, exams, portfolio and simulator components |

The user-facing live application is **not** the audit branch until the owner explicitly authorizes merge and deployment; evaluate the pinned audit commit rather than assuming the live website has those changes.

## Acceptance rubrics: reviewer work to commission

### A. Learning-outcome coverage

For every declared outcome, record: course, outcome ID, exact lesson(s) and independent required exam or assessed project demonstrating it, expected graduate-level thinking demand, and a review decision. The topical evidence generator gives **suggested pointers only** and can produce both false positives and false negatives. Twenty-two outcomes lacked a simultaneous lexical lesson/question match on the first pass; these require explicit assessment scrutiny, especially the broad executive-decision outcomes. Some may already be adequately evaluated through written casework. No outcome should be deemed covered solely because its words resemble a question stem.

**Deliverable:** A signed objective-to-direct-assessment matrix with `supported`, `partially supported`, `unsupported` and `not inspected` values. Record the identified lesson/question/task IDs for every conclusion.

### B. Disciplinary and numerical correctness

Use a stratified sample at minimum across accounting, cash flow and valuation, managerial economics and pricing, statistics and analytics, leadership/HR, multinational business, governance, and the Level 5 integrative capstone. Reconstruct numbers from source assumptions without consulting answer explanations first; verify distractor uniqueness and whether the model assumptions are sufficient. Review outlier/ambiguous case conclusions and unsupported real-world implications.

**Deliverable:** An issue register with source path, course/lesson/question ID, independent computation, referenced standard/source, severity, recommended correction and dated recheck evidence. **Automated tests do not certify 1,031 individual question keys.**

### C. External-source quality

Compare the `phase4-source-register` against the actual dated company filing, academic course materials and regulator/standard setters. Direct Level 3 historical-case links now appear in their reading cards, but source-level verification and permission checking remain open. Generic SEC EDGAR or company investor landing pages are useful starting points, not substitutes for dated exhibit/page citations.

**Deliverable:** Source bibliography with URL and access date, publication/fiscal date, page/section, reliability classification, licensing or citation constraints, source-claim mismatch log, and inaccessible-link replacements.

### D. Independent assessment and student outcomes

Apply `independent-written-examiner-protocol.md` to consented, anonymized original student work, **not synthetic calibration responses**. Recruit two qualified independent evaluators per major rubric domain or an approved moderation panel. Calibrate judgments, record separate marks and evidence, adjudicate material disagreement, and report competencies demonstrated versus not demonstrated.

**Deliverable:** A documented examiner record and bounded conclusion. Without submitted work or human examiners, report the absence honestly; do not invent sample marks.

### E. Workload validity

The program has **2,305 original planned hours** and **approximately 3,076.8 authored assigned-hours metadata**, including newly added coursework. The additional 771.8 configured hours are not automatically real student work, credits or expected independent learning time. Sample actual learner time and identify double-counted assignments/readings before determining any credible hours-of-study estimate.

**Deliverable:** A revised hour ledger justified by sampled representative activity durations and independent review.

### F. Functional learning acceptance

An iPhone, installed iOS Home Screen PWA and desktop browser must be tested with a suitable consented account for navigation, content loading, offline/reconnect behavior, sign-in/out, grading, exam retry, self-assessment, cloud progress sync and simulator return navigation. The technical CI confirms only local model/storage behavior and static HTTP delivery. It **does not** confirm actual browser interaction, authentic cloud syncing or cross-device correctness.

**Deliverable:** Signed acceptance checklist with browser/device versions, dates, screenshots/log references, data safety observations and reproduced defects.

## Blocking conditions and release decision

| Condition | Current evidence status | Release implication |
|---|---|---|
| Authored five-level source exists and composes | Internally tested | Source available for evaluation |
| Multiple-choice key structure and historical grade snapshots | Internally tested | Does not establish all keys mathematically correct |
| All outcomes academically matched to valid assessment | **Not independently determined** | Blocks educational-completeness certification |
| All sources verified at document/page level | **Not independently determined** | Blocks comprehensive source-accuracy certification |
| Real consented written work double-marked | **Not done** | Blocks claims of independently demonstrated mastery |
| Actual learner workload established | **Not done** | Blocks verified hours, equivalence or credit claims |
| Live iPhone/PWA and desktop cloud acceptance | **Not evidenced** | Blocks production-ready sign-off |
| Level 4 historically repeated required exam prompts retired | **Not done; new optional independent bank available** | Blocks describing required historical bank as repetition-free |
| Signed qualified independent academic evaluation | **Not received** | Blocks external sign-off claims |

## Reviewer decision form

Document reviewer identity and qualifications privately, with contact consent. Reviewer should select one evidence-grounded determination: **Approved within scope**, **Approved with explicit conditions**, **Not yet approved**, or **Insufficient evidence to conclude**. Record exact version SHA, scope, limitations, all critical/high findings and whether they were remediated and independently retested. Sign and date separately; the project must not countersign on behalf of a reviewer.

Any conclusion of graduate level or MBA academic equivalence is **solely the reviewer's independent judgment within their qualifications and described method**, and does not confer a degree, credit, professional licensure, university endorsement or AACSB accreditation.

## Practical handoff sequence

1. Owner selects the fixed GitHub Actions evidence artifact and source SHA, verifies its contents and shares the permitted materials with a qualified reviewer.
2. Reviewers sign confidentiality, conflict-of-interest and work-scope agreements appropriate for their jurisdiction and receive a sample-marking protocol.
3. Reviewers inspect teaching, outcomes, source documents, examinations and anonymized actual submissions, logging findings per exact course/item.
4. Owner applies changes on a new versioned branch, preserving historical attempts, then runs mathematical, academic and physical-device acceptance tests.
5. Reviewers independently recheck findings and issue signed scope-limited conclusions. Only then should the owner decide whether to merge, deploy or describe the curriculum as independently reviewed.

**Do not publish a reviewer signature or endorsement that has not actually been obtained.**
