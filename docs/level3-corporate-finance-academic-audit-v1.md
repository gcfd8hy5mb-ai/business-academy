# Level 3 Course 14 — Corporate Finance & Valuation Academic Audit (Phase 2A)

Date: 2026-11-01. Scope: desk review of authored Level 3 finance material in v73–v81 plus initial `learning/level3.js`, and graduate-level expectations. **Internal audit, not faculty approval or credential equivalence.**

## External academic criteria

- Wharton MBA core provides Corporate Finance (FNCE 6110/6210) alongside accounting, statistics, operations and management: https://mba-inside.wharton.upenn.edu/core-curriculum/
- Wharton MBA graduation entails a broader 19-CU structured degree: https://mba.wharton.upenn.edu/mba-curriculum/
- AACSB Standard 5 emphasizes documented assurance-of-learning measurements and curricular improvement, not counts of questions or programmed tests: https://www.aacsb.edu/-/media/documents/accreditation/2020-aacsb-business-accreditation-standards_redlined-july-1-2022.pdf

Comparison does not imply school endorsement, credit or accreditation.

## Evidence map — Course 14

| Domain | Actual inspected evidence | Initial evaluation | Gap |
|---|---|---|---|
| Free cash flow | `learning/level3.js` lesson `c14-fcff`: EBIT(1−T)+D&A−capex−ΔNWC; explicitly excludes financing costs | Sound introductory cash-flow formulation | Need a 5-year linked income statement, balance sheet and cash-flow forecast, explicit reconciliation and error diagnosis |
| Cost of capital | `level3-advanced-v73.js`: WACC 60% equity at 11%, 40% debt at 6%, 25% tax | 0.60×0.11 + 0.40×0.06×0.75 = **8.4%**, arithmetically consistent | Need beta estimation, capital market inputs, country/currency consistency, lease/debt and risk-adjustment decisions |
| Terminal value | `level3-advanced-v73.js`: year-five $80m FCF, g=2.5%, r=9% | TV5=80×1.025/(.09−.025)=**$1,261.54m**; distinguish TV at year 5 from present value | Add sensitivity grid, reinvestment constraints, implied growth/multiple checks and explicit year-5-to-6 cash flow |
| APV | `level3-corporate-depth-v74.js`: unlevered PV $90m; cost $100m; tax shield $14m; distress $5m | 90−100+14−5=**−$1m**, consistent | Need uncertain tax shields, debt schedules, coverage covenants, financing timing and scenario probabilities |
| Equity bridge | `level3-corporate-depth-v74.js`: EV = 8×$24m = $192m; net debt $54m; other claims $4m | Common equity **$134m**, correctly avoids double subtracting cash already netted | Need diluted shares, minority interests, leases and contingent claims with original filings |
| Working capital | `level3-corporate-depth-v74.js`: NWC at 18% of $200m rising to $260m | ΔNWC = $46.8m−$36m = **$10.8m** investment | Need operating-driver reconciliation, seasonality, receivables quality and debt-like items |
| Inorganic capital allocation | `level3-integrated-v75.js`: standalone value $210m; synergy $48m; integration $15m; distress $6m; price $240m | 210+48−15−6−240=**−$3m**, consistent | Need synergy attribution, probability weighting, purchase price adjustments, tax and financing separation |
| Board constraints | `level3-board-decisions-v76.js`: net debt $240m, covenant EBITDA $60m, max 4.5×, proposed new $35m debt | Pro forma 275/60=**4.583×**, breaches, subject to actual legal definitions | Require full covenant excerpts and compliance interpretations |
| Independent capstone | `level3-cumulative-v77.js` and later case/board examinations; written applications in v80/v81 | Exercises and rubrics exist | No independent grading of real student models demonstrated |

**Scope limit:** These are selected sampled checks with source IDs/files, *not* a complete enumeration or line-by-line verification of every financial problem and its answer key. Do not mark all course math as verified.

## Academic risk findings

1. **High priority — independent proof of mastery:** code-level self-rated rubrics (see `learning/workspace-v40.js`) are not a substitute for blind-qualified evaluation of an independently built model.
2. **High priority — real-world data literacy:** many cases explicitly use fictional data and precomputed answers. Add a dated primary-source data pack using real public company filings, with traceable citations, changing estimates and competing valuations.
3. **Medium priority — full financial model integration:** short single-concept computations need to culminate in integrated FCFF, WACC, DCF, enterprise-to-equity reconciliation and transaction decision under accounting and liquidity constraints.
4. **Medium priority — transfer and uncertainty:** require explicit risk ranges, scenario probability assumptions, valuation sensitivity to g/r, terminal share of enterprise value, and a defense against an alternative.
5. **Medium priority — assessment integrity:** written rubric, numeric checking, oral defense and independently graded unseen case should all be evaluated separately from automatic multiple-choice grading.

## Practical remediation blueprint — independent finance capstone

**Case brief:** Using publicly dated financial statements for one listed multinational, build a fully traceable five-year FCFF forecast and valuation. Include a non-identifying fictional supplemental investment option with terms disclosed. **Do not provide an answer-key model up front.**

Required deliverables:
1. Source file: company filings with fiscal dates, pages and each extracted financial line.
2. Drivers: operating growth, margins, taxes, working capital, maintenance vs growth capex, stock-based compensation treatment and financing boundary.
3. Five-year forecast: explicit formulas, historical reconciliation and balance-sheet/cash-flow consistency checks.
4. Valuation: WACC assumptions, terminal-growth and exit-multiple cross-checks, sensitivity grid and enterprise-to-common-equity bridge.
5. Board recommendation: compare acquisition, hold and organic-investment alternatives; assess covenants, cash floor, legal issues, model uncertainty and stop triggers.
6. Independent examination: unseen adjusted figures, no supplied answer keys; 30-minute recorded or supervised defense with questions about model flaws.
7. Grading: external reviewer marks **model accuracy 30%, reasoning 25%, evidence quality 20%, risk/governance 15%, communication 10%**. Require >=80 overall and no critical error in model reconciliation or cash-flow timing; collect reviewer notes and corrected resubmission.

**This rubric is a proposed internal benchmark, not a university or AACSB-sanctioned cutoff.**

## Review decision

**Course 14 appears to contain serious MBA-relevant finance topics and several accurate sampled calculations, but equivalence to a graduate corporate finance course has not been demonstrated.** It requires a full authored-hour audit, independent work samples, a sourced integrative case and independent subject-matter evaluation.

Status: **ACADEMIC REVIEW OPEN — not signed off.** Next subjects: Course 15 strategy, 16 economics, 17 analytics, 18 venture, 19 international, 20 AI/innovation. 
