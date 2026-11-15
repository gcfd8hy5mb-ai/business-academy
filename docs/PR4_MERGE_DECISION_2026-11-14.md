# Business Academy — PR #4 merge decision record (2026-11-14)

## Authorized scope
The owner explicitly requested: "Do 1-2 then merge," referring to (1) the final content/editorial verification batch and (2) historical grading fairness policy. Browser/device testing, Firebase setup, website redesign and independent university/academic sign-off are excluded from this specific merge action.

## Completed internal verification
- All **26 courses / 575 active lessons** were screened by automated checks for presence of unique lesson identifiers, titles, a body with at least 150 words, worked examples, independent transfer exercises and valid assigned times. Each course was checked for rubric-supported applications, portfolio work and named reading assignments. A passing structural screen does **not** mean every claim was independently validated.
- Added subject-specific instructions where reading entries had little or no guidance, without changing reading IDs, titles, time metadata or source URLs.
- Recalculated all **94 numeric exercises** and **26 executive seminar models** independently. Checked required/optional exam question structures and validated representative historic sources and chronology (Microsoft/Activision, Netflix, Adobe/Figma, Airbnb and FAA/Boeing). All primary-source claims in the larger curriculum have **not** been independently checked.
- The 35 older Level 4 repeated required prompts remain. Separate optional alternative exams give 35 unique prompts; the older ones have been retained to avoid invalidating historic attempts. Repetition is a disclosed qualitative limitation.
- Adopted `docs/HISTORICAL_MA_GRADING_FAIRNESS_POLICY_2026-11-14.md`: preserve existing historical scores and mastery; never retract credit because an old optional M&A item was keyed incorrectly; make a corrected alternative optional form available; label possible under/over credit for individual review; do not silently rewrite any attempt or claim unknown corrected scores.
- Synthetic save/reload and grade-preservation regression tests passed. GitHub Actions **164/164 tests passed**, run `43655942048` at commit `9f5430a7d733895bffa7586e784d1b52ece514db`.

## Merge limits and next phase
The merge is for authored coursework and internal quality controls, **not** a university certification, accredited MBA equivalence, externally signed curriculum, comprehensive proof of factual perfection, or a production browser acceptance result. **Not verified on a physical iPhone, installed PWA or desktop browser in this PR**. That acceptance and any cloud-saving checks should be scheduled before claiming deployment readiness. The user requested merge after the above two batches, so unverified device acceptance is a deliberately disclosed follow-up, not a claimed passing result.

No student-record migrations, grade rewrites, production security-rule changes or deployment operations were part of this work.
