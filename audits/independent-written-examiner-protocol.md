# Business Academy — Level 2 Independent Written Examiner Protocol

**Internal draft, November 8, 2026.** Applies to optional written casework in the seven independent exams `c07-v128-independent-exam` through `c13-v128-independent-exam`. This is a **proposed** assessment protocol, not university approval, independent human grading, academic credit, or MBA equivalence.

## What is scored

Each examiner reads the candidate's original board memorandum, quantitative appendix, underlying spreadsheet/working, dated source register, and sensitivity model. The two multiple-choice questions remain separately computer-graded; **their scores must not be substituted for the written assessment**. The original self-review fields remain unchanged. Until an actual independent examiner reviews submitted evidence, every candidate's externally validated written result is **Not reviewed**, regardless of automated or self-review results.

Use the course-specific evidence requirements in `audits/level2-independent-exam-marking-guide.cjs`. These are held outside the learning application; loading the site will not create new grades or alter mastery.

## Proposed 100-point analytic rubric

| Dimension | Points | Evidence of strong performance |
| --- | ---: | --- |
| Quantitative reconstruction and accuracy | 30 | Correct units and time periods; traceable inputs; independently checked formulas; complete calculation appendix; no material double-counting |
| Two-variable downside, alternatives and thresholds | 25 | Joint sensitivity computed and economically interpreted; credible competing strategy; meaningful break-even or reversal threshold |
| Evidence, causal inference and limitations | 20 | Dated original sources when using real issuers; real/fictional separation; assumptions explicit; alternative explanations and uncertainty identified |
| Executive governance and practical feasibility | 15 | Board authority/management ownership, implementation milestones, cash/operational and legal/ethical constraints, monitoring and stop triggers |
| Independent synthesis and clear communication | 10 | Explicit defendable recommendation, thoughtful counterargument, structured written case, clear citations and a usable board decision brief |

**Calibration descriptors (suggested, to be validated by experts):** 90–100 exceptional and independently reproducible; 80–89 strong with minor uncertainty; 70–79 mostly competent but important omissions; 60–69 significant deficiencies; 0–59 fails to establish independent command. Suggested *candidate standard* for review: **75/100 overall**, at least **18/30 quantitative**, and at least **10/25 downside/alternatives**, with no fabricated sources, plagiarized submission, or concealed material calculation error. This is an internal proposed threshold, **not an accredited passing grade**. An examiner should report material integrity concerns for independent adjudication rather than mechanically computing a fail from an unverified allegation.

## Blind marking and moderation

1. Freeze a versioned copy of the question, case assumptions, answer key, spreadsheet, sources, candidate response and submission time; redact candidate names and past grades. Record only a pseudonymous submission ID.
2. Assign **two different qualified human subject-matter reviewers**. Do not disclose each reviewer's comments or marks to the other until both independently submit and lock a criterion-by-criterion score, cited candidate evidence and error list.
3. For each dimension assign an integer between zero and its maximum. A generic comment like “good work” is not enough; reviewers must identify the exact model line, passage, or source entry supporting the award or deduction.
4. Refer to a third qualified adjudicator when aggregate marks differ by **more than 10 points**, their pass/fail classifications differ, or they disagree about a material fact, mathematical error or source-integrity concern. Adjudication must be documented; do not silently average contested marks.
5. For agreement without a dispute, record both scores and their arithmetic mean as the **provisional review score**. A different institutional policy may supersede this proposal.
6. Retain assessment version, reviewer qualifications, pseudonymous identifiers, marks and rationales, moderation outcome, and final signed result in an appropriately secured external records process—not in the student's existing browser storage. Protect source files and candidate information; obtain required consent/permissions.
7. Give the candidate criterion feedback and a remediation plan. Resubmission must use a new, dated submission version; previous marks and model inputs remain archived.

## Examiner integrity and realism controls

- **No automatic accreditation or sign-off.** The app's rubric dropdowns are self-assessment; they do not constitute examiner review.
- **No answer-leakage through app changes.** The examiner guide is an offline audit artifact and is not loaded by `index.html`.
- **Difficulty is not established by word count alone.** Check independent calculation, counterfactual analysis, accounting scope, adverse-variable dependence, realistic constraints and defense against the strongest objection.
- **Sensitivity assumptions are not “facts.”** Annotate any new numerical input as examiner-assigned fictional stress data, separate from an issuer's disclosed figures.
- **Marking anchors are illustrative.** They do not replace the full case, and no template wording should earn full credit without actual analysis and corroborated calculations.
- **Source quality.** Distinguish a primary annual filing from promotional commentary, note dates, currency/units and the exact disclosure line. Record any unavailable or conflicting primary evidence as an unresolved source issue.
- **Financial and legal considerations.** Tax rates, cash realizability, financing covenants, accounting standards and employment obligations are case-specific and should not be presented as general legal rules.

## Benchmark calibration exercise (fictional Course 08)

Question anchor: Invest **$42m now**, receive **$18m at each of three year ends**, discount **10%**. NPV = `-42 + 18/1.1 + 18/1.1^2 + 18/1.1^3` = **$2.76m** (two-decimal rounding). A second anchor is enterprise value **$510m**, net debt **$175m**, excluded nonoperating assets **$30m**, hence simplified equity value **$365m**. Neither figure alone justifies investing without liquidity and financing evidence.

**Excellent calibration response:** “I would provisionally prefer the project only if a reserve-aware cash schedule demonstrates affordability. The year-end discount bridge is $16.364m + $14.876m + $13.524m − $42m = approximately $2.76m. In a fictional joint downside of **$16m** annual receipts and a **12%** discount rate, NPV is approximately **−$3.57m**, so the favorable base case is fragile. I would compare a staged investment with a deferral, request an independent operating forecast and covenant headroom schedule, and require a stop gate if cash reserves or downside NPV breach the board's approved limits. Equity value of $365m is a separate valuation bridge, not proof of available cash.” This is strong evidence of numerical reasoning, limits and governance; a full top-band submission still requires a credible model, references and quantified alternative.

**Borderline calibration response:** “The NPV is $2.76m and equity value is $365m, so approve; higher discount rates may reduce NPV. The company should monitor liquidity.” This gets the two anchors right but has no computed adverse case, no threshold, no credible alternative and no traceable cash-floor test; accuracy alone cannot earn a top score.

**Insufficient calibration response:** “Invest because the $18m return exceeds the $42m cost after three years and the company's enterprise value is $510m. There is no risk.” This incorrectly compares undiscounted sums without timing and confuses enterprise value with available financing; it also lacks credible controls or evidence.

Calibration marks in `audits/level2-independent-exam-marking-guide.cjs` are **provisional internal examples only**, not grades from real examiners or candidates. Qualified reviewers must independently calibrate scoring before any externally validated outcome may be recorded.

## Remaining sign-off conditions

Before a claim of independent academic verification: recruit and verify qualified reviewers, adopt a written conflict-of-interest and data-privacy protocol, pilot grade anonymized samples, demonstrate inter-rater consistency and disputes, remediate source/case errors, and obtain signed scope-limited evaluations. External reviewers—not this application—must determine the level, limitations and any appropriate equivalence of the curriculum.
