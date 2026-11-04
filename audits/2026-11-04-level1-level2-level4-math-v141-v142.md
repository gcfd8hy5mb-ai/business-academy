# Business Academy — Mathematical Accuracy Expansion: Levels 1, 2, and 4

**Date:** November 4, 2026
**Scope:** Original Level 1 comprehensive exam v39; Level 2 independent quantitative exam v63; Level 4 source bank v102 and legacy short-exam reinforcement v104.

## Delivered
Two new, read-only, dependency-free Node regression scripts:
- `audits/scripts/level1-final-regression-v142.cjs`: **12** original Level 1 integrated capstone answer selections independently reconstructed and checked, including NPV, EBIT operating leverage, working capital/cash flow, interest-rate and FX shocks, capitalization, cash conversion cycle, capital allocation and expected payoff.
- `audits/scripts/level2-level4-math-regression-v141.cjs`: **28 Level 2** v63 answers, **20 Level 4** v102 answers, **10 unique Level 4** v104 reinforcement questions = **58 answer-choice checks**, including **45 quantitative result checks** independently computed and compared with displayed selected answers, as well as selected qualitative governance/action keys.

Total new coverage this batch: **70 answer-choice checks, 57 independently calculated outcomes** (45+12).

Cumulative across existing three suites (v138–v140) and the new two suites (v141–v142): **126 independently computed outcomes** (69 prior+57 new), plus other structural and qualitative checks. This is a subset of the academy's full authored problem bank, not a verified percentage of all coursework.

## Method
The scripts load the original authored source banks and reconstruct independently encoded calculations from the problem statements. They compare generated numerical answers to the keyed option, check answer-index bounds and explanation presence, and verify expected bank size. The v104 check creates eligible 2-question historical assessment fixtures to exercise the actual append-only rule; a four-question exam fixture is not eligible for v104.

The first v141 isolated run wrongly expected v104 to append to four-question exams; this was a **fixture error**, not a source-content error. Corrected the eligible fixture and then tightened quantitative checks so computed figures must match displayed answer text. The numeric parser required one regex escaping correction. Final source-based run: **PASS: 58 questions, 45 independent computations, zero assertion failures**.

The v142 Level 1 suite: **PASS: 12 questions, 12 independent computations, zero assertion failures**.

## Automation
Extended `.github/workflows/academic-math-regression.yml` to add the two new suites and to trigger on changes to Level 1 v39, Level 2 v63, Level 4 v102/v104 and the tests themselves. It now specifies **five** script steps. The scripts were exercised against fetched source in a restricted JavaScript runner that emulates Node built-ins. GitHub-hosted Actions run status is **not yet independently confirmed**; check the Actions page for actual results.

## Changes deliberately not made
- No historical examination ID, question ID, option order, correct index, grade or stored student response was modified.
- No older repeated v104 questions were deleted or remapped. Those cases still require a versioned retirement/transition policy.
- A PASS means the *selected* numerical answers are arithmetically consistent with the stated simplified teaching inputs. It does **not** establish that every inherited mathematical example is correct, a corporate claim is sourced, a qualitative response is unambiguous, or that an assigned academic hour is substantiated.
- No real device, browser, PWA or Firebase authentication/progress acceptance was conducted.

## Next audit gates
1. Extend automated independent reconstruction to the remaining Level 1 and Level 2 original exams and other Level 4 sections.
2. Confirm GitHub-hosted CI results and remediate any actual build failures.
3. Review the substance of accounting, tax, antitrust, international finance and responsible-AI examples with qualified expert input and independently dated sources.
4. Validate required academic workload using timed student pilots and distinct graded assignments.
5. Complete live Safari/PWA/desktop and Firebase cross-device acceptance and then seek external academic review.

**Verdict:** Both new read-only regression suites pass on the checked source. Historical grading remains untouched. The academy is still undergoing mathematical and pedagogical verification, not certified as MBA-equivalent.
