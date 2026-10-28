# Course authoring contract

Keep catalog order and `course-01` through `course-26` stable. Add authored content through `Object.assign(window.BAContent, {...})` in a level file loaded before the application entry point. Missing content gets a planned workspace, never synthetic assignments or completion credit.

A course includes status, description, outcomes, advisory prerequisite IDs, modules, readings, practice, exam and portfolio. Each module has stable ID/title and lessons. A lesson has stable ID/title, minutes, an array of instructional paragraphs, worked example, transfer task and tutor question/two hints/response. Minutes include the specified independent work; do not infer workload from lesson count.

Practice/exam each have instructions, minutes and questions. Each question has stable ID, prompt, options, a zero-based correct index and explanation. Exam also has a written case, model reasoning and analytic rubric. Portfolio has title, prompt, minutes, concrete requirements and rubric. Reading items need title, primary-source URL, a specific task and allocated minutes. Clearly distinguish original cases from actual company facts and link source material rather than reproducing it.

Do not silently change the meaning of IDs after learners have submitted evidence. New or materially revised assessment forms require new IDs and an explicit progress migration/version plan. Never copy legacy completion flags into new mastery evidence. Status remains introductory/pilot until a documented academic review supports a broader label.

Run `node --test tests/*.test.cjs`, syntax checks and browser checks where available. Preserve university sources and the approved base design. Use the shared workspace rather than a new one-off renderer. Keep scientific/accounting definitions, timing, units and alternate assumptions visible. Tests for content structure cannot establish academic rigor; numerical cases and written models also need independent review.

## Expanded Level 1 evidence

`level1-expansion-a.js` and `level1-expansion-b.js` append `m4`–`m6` to the original six subjects. They add `applications` (written prompt, requirements, worked solution, rubric), `advancedExam` (four original objective questions, a written case and model reasoning), `portfolioExtension` (a separate executive pack) and a source-specific reading. Each new lesson carries four authored tutor steps. Keep these IDs stable when revising copy; do not overwrite the original exam or portfolio drafts. Advanced mastery requires each new evidence item and the documented threshold. Detailed solutions must reconcile numerically and identify assumptions; self-review does not count as instructor grading.
