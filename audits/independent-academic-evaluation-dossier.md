# Business Academy — Independent Academic Evaluation Dossier

**Version:** 2026-11-08 draft, Levels 1–2  
**Purpose:** A transparent, scope-limited evidence handoff for qualified business educators, not an assertion of accreditation, university affiliation, degree equivalence or validated credit hours.  
**Repository:** `gcfd8hy5mb-ai/business-academy`  
**Review branch:** `audit/levels-1-2-academic-review`  
**Live application:** no changes authorized as part of this evidence package.

## 1. Executive overview

Business Academy is an independent, self-directed online business education application with authored conceptual lessons, worked financial models, primary-source reading links, objective questions, numerical exercises, portfolio work, corporate decision cases and business simulations. The intended emphasis is large-company corporate decision-making and executive-level reasoning. **It is not a university program**, and claims of university-level standards, completion, equivalence or learning effectiveness require review of the evidence—not stated aspirations.

The target of this dossier is the **first 13 courses (Levels 1 and 2)**. The entire program has five planned levels, but the present assurance-of-learning review cannot certify Levels 3–5. The curriculum has **not been independently reviewed in full**, and no real student work has received the qualified external grading envisioned here. Versioned extensions are composed in the order declared by `index.html`. See the companion evidence generator rather than relying on manually copied historical progress claims.

## 2. Reproducible evidence index

| Evidence question | Source to inspect | What it proves / does not prove |
|---|---|---|
| What is authored? | `learning/level1.js`, `learning/level2.js`, later `learning/level1*.js`, `learning/level2*.js` in `index.html` order | Source content exists; not necessarily pedagogically accurate or independently reviewed |
| How many lessons, readings and tasks are assigned? | `node audits/build-reviewer-evidence.cjs`; for structured data, add `--json` | Reproducible metadata totals, *not* observed effort or credit hours |
| Which outcomes have candidate lesson/exam evidence? | Generator output, `outcomes` fields, `modules`, required `sectionExams`, portfolio rubrics | **Candidate alignment pointers only**; reviewer must validate the actual relationship |
| How is objective mastery assessed? | `learning/core-v110.js`, `learning/workspace-v46.js`, `tests/academic-*.test.cjs` | Technical scoring, storage and completion gates; *not* independent educational validity |
| Are numerical keys internally coherent? | `tests/academic-level1-level2-baseline.test.cjs`, `tests/academic-level2-integration.test.cjs`, `tests/academic-primary-source-cases.test.cjs`, `tests/academic-level2-exam-rigor.test.cjs` | Spot checks and automated consistency tests, **not exhaustive fact checking** |
| Are source-based corporate cases distinguished from fictional ones? | `learning/level2-filings-v57.js` and `audits/levels-1-2-academic-audit.md` | Specifically checked filing examples and data labeling, not every external reference |
| Can independent reviewers mark written work? | `audits/independent-written-examiner-protocol.md`, `audits/level2-independent-exam-marking-guide.cjs` | Proposed rubric and **synthetic** anchors only; actual qualified double-marking not performed |
| Are the audit checks reproducible? | `.github/workflows/academic-levels-1-2.yml` and GitHub Actions history | Whether defined automation passes; does not establish educational approval |

## 3. Outcomes, teaching, assessment and feedback alignment

**Assessment unit:** each course learning outcome, not just each course title. For each outcome, a reviewer must complete an alignment record with:

- Exact stated outcome and expected cognitive level (remember, apply, analyze, evaluate, create).
- Lesson titles and stable lesson IDs where the outcome is directly taught, plus worked examples and source readings.
- Required direct assessment: objective exam item IDs, independent numerical items if actually required, essay criteria and case/portfolio requirements. Optional items may provide supporting evidence but should **not** be represented as mandatory completion gates.
- Evidence of performance: an anonymized real student sample, scoring by qualified assessors, examiner comments, and remediation; if no submissions exist, mark **not evidenced**.
- Content quality judgment, coverage sufficiency, prerequisites, and deficiencies/revisions with reviewer name, expertise, date and decision.

**Automated mapping is deliberately conservative.** The generator repeats **candidate** course-level evidence pointers for each listed outcome and marks them `NEEDS_EXPERT_ALIGNMENT_REVIEW`. This is not a claim that the same exam actually measures every outcome.

## 4. Workload, rigor and qualifications

The `BAWorkloadAudit` helper totals configured minutes for reading, lessons, required exams, applications and portfolios; it excludes optional assessments. This **assigned-time estimate is neither observed time-on-task nor semester credits**. A separate time-and-effort validation study is required, with recorded participant consent, completion conditions and independent reviewers. Review long lessons with short written bodies, reading accessibility, student prerequisites, case complexity, quantitative burden and progression between courses.

The separate optional Level 2 independent exams historically contained **two automatically scored items each** and a written case. The internal examiner protocol adds proposed analytic marking criteria and calibration prompts; it does not itself grade any learner. A university-level assessment claim requires externally evaluated original submissions, scorer training and disagreement adjudication, rather than only test counts or completed UI checkboxes.

## 5. Evidence repository / review log

Each external reviewer should receive a fixed source snapshot or commit SHA and complete this log (no personal information in public GitHub issues):

| Field | Required record |
|---|---|
| Reviewer role | Discipline, credentials, affiliation, independence/conflict declaration |
| Scope | Levels/courses, review dates, excluded subjects, commit version |
| Method | Sample selection, independently reconstructed calculations, primary-source checks |
| Curriculum alignment | Outcomes and specific lesson/assessment IDs reviewed |
| Academic depth | Cognitive demand, coverage, active learning, case realism, source quality |
| Assessment review | Marked anonymized submissions, rubric version, individual scores and moderation |
| Findings | Specific issue, severity, evidence, recommended change and responsible owner |
| Recheck | Fix commit, retest date, examiner acceptance or outstanding objection |
| Signed determination | Exact level of assurance supported, explicit exclusions and limitations |

**Issue severity:** Critical = incorrect grading, significant financial misrepresentation, material source fabrication or data loss; High = outcome not assessed, answer unreliable, unsound board decision; Medium = incomplete reasoning or inadequate workload evidence; Low = clarity/style/citation formatting. Do not mask unresolved critical/high issues within aggregate pass rates.

## 6. External reviewer request and deliverables

Request two business faculty/experienced assessment professionals with complementary expertise in (a) finance, accounting and quantitative methods and (b) strategy, organizations, business law or corporate governance. Ask for:

1. A paid-or-voluntary **independent written curriculum assessment** with identified scope and reviewer qualifications.
2. Outcome-to-assessment alignment findings for each sampled course and discipline, plus a rationale for adequacy/deficiency.
3. A blinded scoring pilot of original, consented student work using a mutually approved rubric, with moderation of disagreements.
4. A prioritized issue register, sample numerical recalculations, and checks of real-source-versus-fictional statements.
5. A signed evaluation letter clearly stating **what was and was not reviewed**, whether they believe the selected material exhibits specified academic rigor, and recommendations. Do **not** request they certify university credits or accredit an independent app.

## 7. Comparison framework — not an accreditation claim

AACSB's publicly described *assurance of learning* approach emphasizes documented competency goals, direct measures of achievement, and continuous improvements informed by evidence. This dossier borrows the **review structure**—it does not imply that Business Academy is AACSB-accredited or that the AACSB standards automatically apply to this independent app.

Reference: https://www.aacsb.edu/educators/accreditation/faqs

## 8. Known limitations and next review gates

- No independent accreditation or university acceptance; no eligibility for university course credit is established.
- No real student submissions have been externally marked through the proposed examiner protocol.
- Independent human faculty review, feedback moderation and signed academic conclusions remain missing.
- Metadata time estimates are not measured student work and cannot establish workload equivalence.
- Automated tests detect specific classes of error, not every numerical, historical or legal inaccuracy.
- The source inventory covers scoped Level 1–2 composition and deliberately excludes shared Level 1–3 modules unless a separate full-catalog runtime is used.
- Links to outside source materials need a systematic accessibility, date and licensing check.

**Approval gate:** Following reviewer feedback, revise the curriculum and tests on a dedicated development branch. Keep previous learner progress keys and grading behavior stable unless there is a separately documented, reviewed migration. Production remains unchanged until explicit release approval.
