# Business Academy — Phase 2B: Five-Level Exam-Bank Structural Audit

**Audit date:** November 3, 2026  
**Repository:** gcfd8hy5mb-ai/business-academy  
**Audit status:** Read-only, source-based exam structure audit. **Not** an independent correctness review or browser acceptance test.

## Scope and methodology

Evaluated the source files loaded by the app for Level 1 (15 files), Level 2 (25 files including shared Level 1–2 seminars), Level 3 (15 files), Level 4 (11 files), and Level 5 (4 files), grouped into ordered source batches. Reconstructed course assessment objects with initialized storage fields without executing Firebase, browser storage, or network requests.

For authored `practice`, `exam`, `advancedExam` and `sectionExams` with questions, checked:
- integer `correct` index fits within available `options`
- textual `explanation` exists
- exact duplicate `prompt` strings (trimmed and lowercased) across examinations **within each analyzed batch**
- conspicuous correct-option sequences: one repeated position across an entire exam, or exact ascending 0–1–2–3 cycles in exams with at least four questions.

These metrics are **structural**, not proof that the keyed answer is mathematically or substantively correct. Repetitions that cross source batches and near-duplicate paraphrases are not included in the duplicate count. Level 1–2 cross-batch IDs require one final assembled manifest check.

## Findings

| Source batch | Exam sets | Questions | Invalid indices | Missing explanations | Repeated prompts (beyond first within batch) | Conspicuous answer-position patterns |
|---|---:|---:|---:|---:|---:|---:|
| Level 1 | 46 | 237 | 0 | 0 | 60 | 8 |
| Level 2 early source files | 59 | 264 | 0 | 0 | 18 | 11 |
| Level 2 later files + L1/L2 seminar source | 7 | 28 | 0 | 0 | 0 | 6 |
| Level 3 | 66 | 240 | 0 | 0 | 60 | 1 |
| Level 4 | 36 | 140 | 0 | 0 | 75 | 3 |
| Level 5 | 2 | 20 | 0 | 0 | 0 | 2 |
| **Total inspected across batches** | **216** | **929** | **0** | **0** | **213** | **31** |

**Caveats:** Some exam definitions can be replaced or extended by scripts in other batches, so totals are source-batch inventory totals, **not yet certified unique final deployed counts**. A 4-option cycle within a short four-question exam is a pattern flag, not in isolation proof of gaming. Larger repetitions and identical first-option keys are stronger defects.

## High-priority defect EXAM-01: Exact duplicated questions

**213 repeated prompt occurrences** were found across the six source batches, on a case-insensitive exact-string basis. This is not 213 distinct bad questions: the count measures redundant occurrences beyond the first within their respective batches.

- Level 1: repeated synthesis / supplemental questions across distinct Foundation courses (notably v36, v37, and v38).
- Level 2: v58 specialist questions repeated across different MBA Core courses.
- Level 3: v80, v81, and v83 supplemental questions repeated across different advanced courses.
- Level 4: **75 repeats**, concentrated in the v104 short-exam reinforcement. `learning/level4-short-exam-reinforcement-v104.js` appends the same two course-specific questions to multiple section exams of each course. A student can encounter identical items across exams without new reasoning content.

**Required fix:** Replace accidental repetitions with course-specific, non-isomorphic case scenarios, independent inputs and different transfer reasoning. Keep stable exam / question IDs where saved responses depend on them. For historic attempts, version exam banks rather than silently regrading old attempts.

## High-priority defect EXAM-02: Predictable answer indices

**31 exam sets flagged** with simple option-position patterns by the narrow structural rule above.
- Level 4 integrated v99: **all 10 answers are option 1**.
- Level 5 v119: 16 answers follow 1,2,3,4 repeated exactly four times.
- Level 3 v87: seven answers follow 1,2,3,4,1,2,3.
- Multiple Level 1 and Level 2 assessments also follow ascending 1,2,3,4 cycles.

**Required fix:** Safely shuffle answer order per question at display time while preserving the selected option's semantic identity, or author randomized non-predictable indices and migrate stored attempts carefully. Preserve question IDs, correct-answer mappings, and prior student history. Add regression tests for reproducible review, accessibility, scoring, answer explanations, and offline use.

## Status of other checks

- **Passed structurally:** all 929 inspected questions have in-range integer keys and explanations.
- **Not yet fully checked:** whether each indicated correct answer is actually correct; numerical, scientific, legal, accounting and management reasoning validity; distractor plausibility; difficulty differentiation; question reuse across *batches*; near-duplicate content; independent grading and full browser behavior.
- **Previously sampled in Phase 2A:** 22 quantitative checks across three integrated finals independently matched their keyed answers within the declared rounding.

## Remediation and verification order

1. Repair the **Level 4 all-first-answer final** and **Level 5 repeated option sequence** using a non-destructive, attempt-safe solution.
2. Replace the most repeated v104, v36–v38, v58 and v80–v83 question families, with course-specific variants.
3. Assemble **all 70 curriculum source scripts in one run** to certify final unique exam / question IDs, rendered bank counts, and cross-batch repeats.
4. Independently recalculate every quantitative answer, and flag conceptual items requiring a qualified reviewer.
5. Validate end-to-end exam attempts, grading, remediation, score persistence, retakes, saved drafts and cloud sync.
6. Reconcile planned hours with substantively distinct instruction and assessment rather than counting repeated prompt minutes as unique workload.

## Phase 2B conclusion

Source-level exam coverage is extensive, but the audit establishes **material assessment-quality defects**. The curriculum must **not** be signed off as academically complete until these defects and the open accuracy and functional audits are resolved. No coursework or student progress was modified during this analysis.
