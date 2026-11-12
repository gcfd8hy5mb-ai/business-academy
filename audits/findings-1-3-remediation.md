# Business Academy — Findings 1–3 Remediation Record

**Date:** 2026-11-09  
**Scope:** Workload reconciliation, duplicated Level 4 prompts, and Level 1 instructional depth  
**Environment:** `audit/levels-1-2-academic-review` draft development branch; production remains unchanged.

## Summary

Three issues from the first five-level audit received code and evidence remediation. **Two are closed at the internal structural/editorial level; the repeated legacy exam finding is mitigated but not erased because historical graded content must be preserved.** None of the three is considered independently academically validated without subject-matter review.

### 1. Published plans versus authored workload — reporting discrepancy addressed, time validation open

Original five-level academic targets: **2,305 planned hours**. Current assigned activity metadata: **3,076.8 hours**, a **+771.8 hour** variance. The discrepancy is real and intentionally remains visible.

Updated `app-v28.js` curriculum-workload display to label **current assigned activities** separately from **original targets**, with a per-course variance, explicit exclusion of optional exams and warnings that author-assigned minutes are neither observed learning time, externally validated workload, nor college credit. Preserved the original course plan targets unchanged as a historical baseline rather than silently inflating advertised study commitments.

**Closed:** inaccurate/ambiguous display suggesting old planning figures were the current authored workload.  
**Open, requires human evidence:** independent workload calibration, duplicate reading/work time investigation and realistic completion-time study; current metadata must not be represented as measured study time.

### 2. Level 4 repeated questions — independent alternative built; archived repetition retained

The production audit identified 15 groups of repeated Level 4 prompts in the inherited **required** exam banks for Courses 21–25. A first attempt to vary those questions inside `level4-short-exam-reinforcement-v104.js` was **reverted** when the historical archive regression correctly detected altered exam definitions.

The legacy v104 source is restored exactly to `main`, leaving historic question IDs, prompts, correct-answer positions, exam structures and stored attempt compatibility intact.

Created `learning/level4-independent-transfer-v138.js` containing **five new optional exam sets and twenty newly authored independent questions**, plus original written executive transfer tasks. These have new stable IDs and are loaded in `index.html` after historical assessment modules. Quantitative questions independently cover acquisition valuation, synergistic cash flows, investment NPVs, liquidity reserves, risk control, transformation value, constrained capital allocation and board decisions. Written prompts require a joint downside, practical alternative, source/assumption distinction and monitoring trigger.

These **new versioned exams are optional**. They do **not** replace historic required completion gates or retroactively rescore earlier work. The five-course legacy repeated-prompt count remains visible in the source audit; this is deliberate and **must not be reported as zero**. To retire those repeats as summative evidence in future, a versioned assessment/graduation migration with explicit grandfathering and an independent academic sign-off is still needed.

**Closed:** availability of genuinely new transfer questions not dependent on repeated historical prompts.  
**Open:** retirement of repeated legacy required prompts as summative examinations after a safe graduation-migration design.

### 3. Six Level 1 long-duration seminars — content-depth flag closed

Extended the original `learning/level1-level2-decision-seminars-v72.js` content for:
- c01-v72-lesson: operating margins, break-even threshold and board oversight;
- c02-v72-lesson: capital rationing, feasible-project combinations and timing;
- c03-v72-lesson: revenue model, unit contribution and joint pricing/cost stress;
- c04-v72-lesson: share issuance, dilution, company versus selling-holder cash;
- c05-v72-lesson: euro operating exposure, joint FX/demand stress and hedging constraints;
- c06-v72-lesson: indirect cash flow, reserve-floor sensitivity and covenant evidence.

Each now includes distinct subject-matter reasoning, independently reproducible numerical sensitivities and board decision controls, added to existing lesson bodies **without renaming or removing lesson IDs, changing allocated minutes or altering scoring**.

The full-curriculum audit now reports **zero** lessons meeting its six original `>=90 assigned minutes and <200 body words` warning rule in Level 1. That addresses the initial automated teaching-depth flag but does **not** substitute for expert review of actual learning effectiveness, reading quality or the appropriateness of two-hour assignments.

**Closed:** six original automated short-body flags.  
**Open:** independent pedagogical depth and learning-outcome alignment review.

## Verification and safeguards

- Full five-level internal curriculum/assessment audit: **55/55 tests passed**.
- Separate academic mathematics regression including historical required-exam archive fingerprints: **passed**.
- New `tests/academic-issues-1-3-closeout.test.cjs` verifies workload reporting labels and unchanged targets, Level 1 depth flags, five optional independent Level 4 exams with 20 distinct prompts, selected correct-option math and explicit preservation of archived repeated assessments.
- New v138 optional exam questions have dedicated IDs and do not alter prior assessment IDs or core storage keys.
- Work remains on an unmerged audit branch. No production deploy, Firebase schema change, student progress migration or examiner sign-off occurred.

## Final editorial release requirements

1. Validate configured reading, application, teaching and assessment times with representative learners before publishing claims of *verified* hours.
2. Review new v138 exam difficulty and independence with a qualified finance/governance subject-matter examiner; decide whether a safe future version should replace historical summative exams while grandfathering completed attempts.
3. Independently evaluate the six expanded Level 1 seminars against stated learning objectives and original sources.
4. Perform course-by-course source and numerical accuracy sampling across the whole 26-course catalog and document signed outcomes.

**Conclusion:** The three findings have received substantive, tested corrections or safe remediation. The *historic* repeated-required-exam issue and real-world academic workload validation are **not falsely declared resolved** by the addition of optional work or a display-label update.
