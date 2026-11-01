# Level 3 academic-equivalency review — five-course batch (Phase 2C)

**Date:** 2026-11-01. **Courses:** 16–20. **Type:** internal code-and-content desk audit; **not** outside faculty review, accreditation, or academic-credit determination. Supports the earlier course 14 and course 15 audit documents. All cited instructional cases are hypothetical unless separately sourced. Reviewed `learning/level3-advanced-v73.js`, `level3-corporate-depth-v74.js`, `level3-integrated-v75.js`, `level3-board-decisions-v76.js`, `level3-cumulative-v77.js`, `level3-executive-labs-v80.js`, `level3-executive-synthesis-v81.js`, and selected final problems in `level3-final-depth-v79.js`.

## Methodology and scope

For each subject, map observable topics, independently recompute **selected** representative numerical examples, identify what the app can actually assess, and specify an externally gradable transfer assignment. This does not certify every lesson, reading, equation, exam, citation or teaching-hour claim. A passing GitHub CI result checks programmed contracts, not graduate-equivalent learning outcomes.

## Course 16 — Managerial Economics

**Content demonstrated:** Cournot, demand elasticity, price discrimination, marginal analysis, procurement adverse selection, optimization, opportunity cost and investment timing.

**Selected independently checked worked examples:** v73 Cournot: q=(120−30)/3=30 each, P=60, contribution=900 per company. v74 procurement: 0.7×(900+0.01×2000)+0.3×(700+0.12×2000)=926 per order. v75 two-part tariff: 1,100×[(120−80)×12+900]−1,000×(200−80)×12=+$78,000. v81 supply hedge: 50,000×(0.4×52+0.6×38)=$2.18m versus contracted $2.20m.

**Academic limitations:** Economic models are chiefly stylized and use assumed elasticities and probability distributions; no demonstrated original econometric estimation or optimization on a documented corporate data set.

**Required advanced transfer assessment:** Independently estimate a demand curve with diagnostic errors and fit checks; defend price/capacity/contract alternatives and competition-law constraints; validate unseen scenario with numerical grading.

**Disposition:** Meaningful MBA-relevant material exists, but independent demonstration of comparable graduate-level student mastery is **not yet established**.

## Course 17 — Business Analytics & Statistics

**Content demonstrated:** Forecast error, Bayesian inference, experimental design, causal inference, decision trees, calibration, risk and heterogeneous treatment effects.

**Selected independently checked worked examples:** v73 MAE (10+20+10)/3=13.33 and MAPE (0.10+0.1667+0.125)/3≈13.06%. v74 conversion lift 260/2000−220/2000=2pp with SE≈1.027pp; normal 95% CI touches zero. v75 heterogeneous trial: treatment (180+60)/2000=12%, control (140+90)/2000=11.5%, net +0.5pp. v81 retained conversion effect 238/2000−228/2000=+0.5pp, approximate 95% CI [−1.5,+2.5]pp.

**Academic limitations:** Several cases responsibly flag causal assumptions but lack an original reproducible data analysis and external validity assessment. Simplified confidence intervals assume independent comparable observations and full follow-up.

**Required advanced transfer assessment:** Require a clean reproducible dataset, preregistered hypothesis/metrics, treatment assignment checks, uncertainty intervals and power analysis; deliver code or spreadsheet with reproducible tests, a decision memo and independent review.

**Disposition:** Meaningful MBA-relevant material exists, but independent demonstration of comparable graduate-level student mastery is **not yet established**.

## Course 18 — Entrepreneurship & Venture Capital

**Content demonstrated:** Preference waterfalls, cap tables, SAFEs, convertibles, founder dilution, runway, cohort retention and staged financing.

**Selected independently checked worked examples:** v73 1× nonparticipating preference: max($12m,0.30×$36m)=$12m. Staged six-month cash: $9m−3×$0.6m−3×$0.75m=$4.95m. v74 simplified note share: $2m/($10m+$2m)=16.67% subject to capitalization mechanics. v80 month-nine cash $8.4m−$4.95m−$0.9m=$2.55m. v81 round: 7m/(7m+3m+2.5m)=56%, raising $10m.

**Academic limitations:** Simplified instruments are useful introductions; actual contract language, financing timing, liquidation participation and dilution cascades remain insufficiently demonstrated. Written work is not independently graded.

**Required advanced transfer assessment:** Build a complete contractual capitalization model for pre/post-money financing, full preference and option scenarios, milestone-driven runway, investor returns and founder governance; defend the model using actual anonymized terms or publicly sourced documents.

**Disposition:** Meaningful MBA-relevant material exists, but independent demonstration of comparable graduate-level student mastery is **not yet established**.

## Course 19 — International Business

**Content demonstrated:** FX hedging, functional-currency cash flows, transfer-pricing distinctions, subsidiary NPV, repatriation, geopolitical sourcing and landed costs.

**Selected independently checked worked examples:** v73 euro hedge €10m×$1.12=$11.2m compared with €10m×$1.18=$11.8m adverse spot (conditional $0.6m benefit); not guaranteed profit. v74 UK operations: £14m×1.30−$8m=$10.2m vs £14m×1.15−$8m=$8.1m. v75 euro investment NPV=−€15m+€6m×2.48685≈−€0.079m. v80 forward €12m×1.13=$13.56m, equal to symmetric scenario expected cost. v81 EUR contribution €4.8m×1.05−$2m=$3.04m.

**Academic limitations:** Need real functional-currency accounting context, jurisdiction-specific legal/tax caveats, operational hedges and treasury controls from primary multinational filings. Simplified spot comparisons are not hedging performance evidence.

**Required advanced transfer assessment:** Trace a multinational's 10-K/annual-report FX note and segment disclosures; rebuild currency cash-flow exposure, compare forwards/natural hedges, model treasury stress and assess real regulatory restrictions using dated sources.

**Disposition:** Meaningful MBA-relevant material exists, but independent demonstration of comparable graduate-level student mastery is **not yet established**.

## Course 20 — Technology, AI & Innovation

**Content demonstrated:** Automation economics, drift, resilience, security, human review thresholds, risk controls and board oversight.

**Selected independently checked worked examples:** v73 $100k tickets×$2=$200k savings, less $85k platform and $60k one-time cost yields +$55k first year. Resilience 0.12×0.40×$4m−$180k=+$12k expected annual. v75 automation 100k×$18−(6k×$18+$400k)=$1.292m before loss. v80 200k×$2.40−(5%×200k×$12)−$260k=$100k. v81 120k×$5−[$260k+12k×$9+$90k]=$142k; doubled referral rate cuts it to $34k.

**Academic limitations:** Modeled savings exclude broad hard-to-price harms, measurement bias and real drift distributions. The app does not independently grade model-risk assessments or validate deployment safety. Governance is addressed but needs empirical control design.

**Required advanced transfer assessment:** Construct a documented AI deployment scorecard: baseline comparison, representative tests, precision/recall/error costs by subgroup, drift/incident response, human appeals, cybersecurity controls and adverse deployment decision; obtain independent domain review.

**Disposition:** Meaningful MBA-relevant material exists, but independent demonstration of comparable graduate-level student mastery is **not yet established**.

## Portfolio-wide conclusions and priority gates

| Requirement | Current evidence | Before stronger comparability language |
|---|---|---|
| Coverage of Level 3 disciplines | Seven subjects have authored lessons, original fictional cases and assessments | Comprehensive outcome-to-assessment matrix and external subject review |
| Quantitative validity | Selected computations above and existing programmatic tests are consistent | Full independent solution-bank verification with error register and reviewers |
| Independent learner work | Application and portfolio prompts exist | Unseen problems, authentic data and traceable submitted artifacts |
| External assessment | Written rubric can be self-rated in UI | Qualified independent blind grading and reviewer calibration |
| Case evidence | Many hypothetical cases explicitly labeled fictional | Primary-source real company case packs with dates, citations and conflicting evidence |
| Teamwork and communication | Written executive defense prompts | Moderated debate, peer challenges and oral/recorded defense or honest disclosure of absence |
| Outcomes measurement | CI verifies content and persistence | Sample learner outcomes, formative revision, failure rates and re-assessment |
| Degree equivalence | No credible accreditation or external verification | Do not imply degree equivalence or institutional endorsement; an entire university MBA is broader than Level 3 |

### Proposed internal independent-assessment protocol

For each course: **(1)** source-driven unseen case; **(2)** independently reproducible spreadsheet or code analysis where relevant; **(3)** adversarial counterargument; **(4)** revised executive recommendation; **(5)** external evaluator's rubric and evidence log. Suggested scoring: technical accuracy 30%, reasoning 25%, source quality 20%, risk/ethics 15%, communication 10%. **Internal proposed threshold** 80/100, with no critical calculation, evidence fabrication or ethics failure. Record grader agreement, errors and targeted remediation. These weights are not official university or AACSB requirements.

### Status of seven-course internal review

Course 14: see `docs/level3-corporate-finance-academic-audit-v1.md`. Course 15: see `docs/level3-competitive-strategy-academic-audit-v1.md`. Courses 16–20: this document. **All seven have now received an initial internal desk review, not independent academic sign-off.** Outstanding: exhaustive calculation-by-calculation verification, authored-hour and source audit, real-company dossiers, learner work, external academic review, and iPhone acceptance checks.

**Overall preliminary determination:** Level 3 is a substantive MBA-inspired self-study sequence. Current evidence **does not justify a claim that it is academically equivalent to a university MBA degree or an independently evaluated MBA program**.
