# 🚀 CTFL v4.0 COURSE — BUILD PROMPT FOR CASCADE

> **How to use this file:** Place this file and the official self-study guide PDF in the project root. Then tell Cascade: *"Read CTFL_COURSE_BUILD_PROMPT.md and execute it."* Cascade should follow every instruction below to build a complete ISTQB Certified Tester Foundation Level (CTFL) v4.0 self-study course.

---

## ⭐ 1. ROLE AND GOAL

You are an expert ISTQB-certified instructor and instructional designer who has taught the Certified Tester Foundation Level for years and knows exactly how the exam is written.

Your task: build the **most comprehensive CTFL v4.0 self-study course possible**, as a set of well-organized Markdown files inside this project. The learner is an experienced software engineer returning to the field who intends to **sit the CTFL v4.0 exam and score very high (target 90%+)**. Teach for mastery and for exam performance, not just awareness.

The course must cover **every single thing on the CTFL v4.0 syllabus** — all 6 chapters, all 14 business outcomes, and all 64 learning objectives — with explanations, worked examples, memory aids, exam traps, test scenarios, case studies, and a large bank of practice questions and full mock exams.

---

## ⭐ 2. REFERENCE MATERIALS (authoritative sources)

Use these, in this priority order, to guarantee accuracy and complete coverage:

1. **The official self-study guide PDF in this folder** — `Stapp L. — ISTQB Certified Tester Foundation Level: A Self-Study Guide (v4.0, 2024)`. Read it and use it as the primary reference for what to cover and to verify every technical claim. **Locate this PDF in the project root before you begin; if you cannot find it, stop and tell me.**
2. The **official ISTQB CTFL v4.0 Syllabus** structure (6 chapters / 64 learning objectives) as laid out in Section 5 of this prompt — treat that outline as the master coverage checklist.
3. The **ISTQB Glossary** terminology — use ISTQB's official definitions of terms (in your own words).

### 🔷 Copyright and originality (mandatory)
- **Write every explanation, example, and question in your own original words.** Do **not** copy text verbatim from the self-study guide, the syllabus, or any other source.
- Use the reference materials to confirm accuracy and ensure nothing is missed — not as text to reproduce.
- All practice questions and mock exams must be **original**, written in the ISTQB style, not copied from question banks.

---

## 📑 3. PEDAGOGICAL REQUIREMENTS (how to teach each topic)

For every learning objective, the course must include:

- A **plain-English explanation** that assumes intelligence but not prior QA knowledge. Define each term on first use.
- The **K-level tag** (K1 remember / K2 understand / K3 apply) shown next to each objective, because the exam tests at that depth.
- **Concrete examples** drawn from realistic software (web apps, APIs, forms, payment flows) — not abstract toy examples.
- **Diagrams** where helpful, rendered as Markdown tables or clean ASCII (e.g., state-transition diagrams, decision tables, the test pyramid, the V-model).
- **Memory aids / mnemonics** for list-heavy topics (e.g., the 7 testing principles, review types, tool categories).
- An **"Exam traps"** note per topic: the specific distinctions ISTQB loves to test and the mistakes candidates make (e.g., error vs defect vs failure; verification vs validation; walkthrough vs inspection; EP vs BVA boundaries).
- **Cross-references** to related objectives.

For every **K3 (apply) objective** — concentrated in Chapters 4 and 5 — additionally include:
- At least **3 fully worked, step-by-step examples** showing the technique applied from a requirement to finished test cases (e.g., deriving equivalence partitions, computing boundary values, building a decision table and collapsing it, drawing a state-transition table and covering 0-switch/1-switch, calculating statement and branch coverage, writing a risk-based test approach, writing a defect report).
- At least **5 application-style practice questions** that force the learner to perform the technique, not just recognize it.

---

## 🎓 4. EXAM-FOCUS REQUIREMENTS (how to maximize the score)

- Reflect the real exam: **40 questions, 60 minutes, pass mark 65% (26/40)**, closed book, single best answer for most questions with a few "choose N" questions.
- Respect the **chapter weighting** when allocating practice volume (see Section 5). Chapters 4 and 5 together are ~50% of the exam — give them the most worked examples and questions.
- Concentrate practice on **K3 application questions** (Chapters 4 and 5); these are the most learnable points and where high scores are won or lost.
- Include an `EXAM_STRATEGY.md` covering: K-level question patterns, time budgeting (≈90 seconds/question), how to attack technique questions, how to eliminate distractors, "choose N" handling, and a pre-exam checklist.

---

## 📊 5. MASTER COVERAGE CHECKLIST (the full v4.0 syllabus — cover ALL of it)

Approximate exam weighting shown per chapter (verify against the syllabus PDF; ISTQB adjusts occasionally).

### ❓ Chapter 1 — Fundamentals of Testing  (~8 questions, K1–K2)
- 1.1 What is Testing? (test objectives; testing vs debugging)
- 1.2 Why is Testing Necessary? (testing's contribution to success; testing and quality assurance; errors, defects, failures, and root causes)
- 1.3 Testing Principles (all **seven**)
- 1.4 Test Activities, Testware and Test Roles (the test process in context; test activities and tasks; testware; traceability between the test basis and testware; roles in testing — management vs testing role)
- 1.5 Essential Skills and Good Practices (generic testing skills; the whole-team approach; the independence of testing)

### ❓ Chapter 2 — Testing Throughout the SDLC  (~5 questions)
- 2.1 Testing in the Context of an SDLC (impact of the SDLC on testing; SDLC models — sequential and iterative/incremental; testing as a driver — TDD, ATDD, BDD; DevOps and testing; shift-left; retrospectives and process improvement)
- 2.2 Test Levels and Test Types (the five test levels: component, component integration, system, system integration, acceptance; test types: functional, non-functional, black-box, white-box; **confirmation testing and regression testing**)
- 2.3 Maintenance Testing (triggers for maintenance; the role of impact analysis)

### ❓ Chapter 3 — Static Testing  (~5 questions)
- 3.1 Static Testing Basics (work products examinable by static testing; value of static testing; differences between static and dynamic testing)
- 3.2 Feedback and Review Process (benefits of early and frequent stakeholder feedback; the review process activities; roles and responsibilities; **review types — informal, walkthrough, technical review, inspection**; success factors for reviews)

### ❓ Chapter 4 — Test Analysis and Design  (~11–12 questions, K3-HEAVY)
- 4.1 Test Techniques Overview (black-box, white-box, experience-based categories)
- 4.2 Black-Box Test Techniques — **K3**: Equivalence Partitioning; Boundary Value Analysis; Decision Table Testing; State Transition Testing
- 4.3 White-Box Test Techniques — **K3**: Statement Testing and statement coverage; Branch Testing and branch coverage; the value of white-box testing
- 4.4 Experience-Based Test Techniques (error guessing; exploratory testing; checklist-based testing)
- 4.5 Collaboration-Based Test Approaches — **K3**: collaborative user story writing; acceptance criteria; Acceptance Test-Driven Development (ATDD) and deriving tests from acceptance criteria

### ❓ Chapter 5 — Managing the Test Activities  (~8–9 questions)
- 5.1 Test Planning (purpose and content of a test plan; tester's contribution to iteration and release planning; entry criteria and exit criteria / DoR and DoD; estimation techniques; **test case prioritization**; the test pyramid; the testing quadrants)
- 5.2 Risk Management — **K3**: risk definition (likelihood and impact); project vs product risk; product risk analysis; product risk control / risk-based testing
- 5.3 Test Monitoring, Test Control and Test Completion (metrics used in testing; purpose, content, and audience of test reports; communicating test status)
- 5.4 Configuration Management
- 5.5 Defect Management — **K3**: the defect report, its content and workflow

### ❓ Chapter 6 — Test Tools  (~2 questions)
- 6.1 Tool Support for Testing (categories of test tools)
- 6.2 Benefits and Risks of Test Automation

---

## 🎬 6. TEST SCENARIOS AND CASE STUDIES (required)

Create a `case_studies/` folder with at least **four** realistic, integrated case studies that force the learner to combine techniques end to end. Suggested systems: an e-commerce checkout, an ATM/cash-withdrawal flow, an online loan/insurance application form, and a user-login/account-lockout feature. Each case study must:

- Provide a short requirements/specification and a few user stories with acceptance criteria.
- Walk through **deriving test cases using multiple Chapter 4 techniques** on the same feature (e.g., equivalence partitioning + boundary value analysis + a decision table + a state-transition model), so the learner sees how techniques complement each other.
- Include a **risk-based test approach** (identify product risks, rate likelihood/impact, prioritize testing).
- Include a sample **test plan excerpt**, **defect report**, and **statement/branch coverage** calculation for a small code snippet.
- End with reflection questions and a worked solution.

---

## ⭐ 7. ASSESSMENT (required)

- **Per-chapter practice sets**: at least 15 original, ISTQB-style questions per chapter (more for Chapters 4 and 5), each tagged with its learning objective and K-level. Every question must include the correct answer **and a rationale that explains why it is correct and why each distractor is wrong.**
- **Full-length mock exams**: at least **three** complete 40-question mock exams in `mock_exams/`, each matching the real chapter weighting and K-level mix, with a separate answer-key file containing full rationales. Make the three exams non-overlapping.
- Aim for a total question bank of **200+ original questions** across chapter sets and mocks.
- A `PROGRESS_TRACKER.md` the learner can check off as they complete lessons and hit target scores on each mock.

---

## ⭐ 8. OUTPUT STRUCTURE (create exactly this layout)

```
/ (project root)
├── CTFL_COURSE_BUILD_PROMPT.md          (this file)
├── <official self-study guide PDF>      (reference, already here)
└── course/
    ├── README.md                        (course overview + how to use)
    ├── STUDY_PLAN.md                    (a realistic 3–4 week plan to 90%+)
    ├── EXAM_STRATEGY.md
    ├── GLOSSARY.md                      (all key ISTQB terms, original definitions)
    ├── PROGRESS_TRACKER.md
    ├── 01_fundamentals_of_testing/
    │   ├── README.md                    (chapter map, LOs, K-levels, weighting)
    │   ├── lessons.md
    │   ├── exam_traps.md
    │   └── practice_questions.md
    ├── 02_testing_throughout_sdlc/      (same file pattern)
    ├── 03_static_testing/
    ├── 04_test_analysis_and_design/
    │   ├── README.md
    │   ├── lessons.md
    │   ├── worked_examples.md           (step-by-step EP, BVA, decision tables,
    │   │                                 state transition, statement/branch coverage)
    │   ├── exam_traps.md
    │   └── practice_questions.md
    ├── 05_managing_test_activities/     (include worked_examples.md for risk + defect report)
    ├── 06_test_tools/
    ├── case_studies/
    │   ├── case_study_1_ecommerce_checkout.md
    │   ├── case_study_2_atm.md
    │   ├── case_study_3_loan_application.md
    │   └── case_study_4_login_lockout.md
    └── mock_exams/
        ├── mock_exam_1.md
        ├── mock_exam_1_answers.md
        ├── mock_exam_2.md
        ├── mock_exam_2_answers.md
        ├── mock_exam_3.md
        └── mock_exam_3_answers.md
```

---

## ⭐ 9. BUILD WORKFLOW (milestone-gated)

Work in phases and keep me in the loop:

1. **Phase 0 — Setup:** Confirm you have located the self-study guide PDF. Create the `course/` skeleton, `README.md`, `STUDY_PLAN.md`, and `PROGRESS_TRACKER.md`. Then **summarize what you created and pause for my go-ahead.**
2. **Phases 1–6 — One chapter per phase:** Build each chapter folder completely (lessons, worked examples where applicable, exam traps, practice questions). After each chapter, update `PROGRESS_TRACKER.md`, give a 3–4 line status summary, and **pause for my go-ahead** before the next chapter.
3. **Phase 7 — Case studies.**
4. **Phase 8 — Mock exams + answer keys.**
5. **Phase 9 — Final verification pass:** Produce a coverage report confirming **all 64 learning objectives are addressed** (list each LO and the file that covers it), the glossary is complete, and the question-count targets are met. Flag any gaps and fix them.

If I say "build it all at once," skip the pauses and run straight through, then deliver the Phase 9 coverage report.

---

## 🤖 10. STYLE AND CONSTRAINTS

- **Format:** Markdown only. Clean, professional prose. Use tables for decision tables, coverage calculations, and comparisons.
- **No emojis** anywhere in the course.
- **Accuracy:** Everything must align to **CTFL v4.0** (not v3.1). If the self-study guide and your own knowledge ever disagree, prefer the guide and note the discrepancy.
- **Modular:** Keep files focused; if a `lessons.md` exceeds roughly 1,000 lines, split it by section (e.g., `lessons_4.2_blackbox.md`).
- **Self-contained:** A learner should be able to pass the exam using only this course, with the official sample exam as a final check.
- **Honesty:** Do not invent statistics or fabricate ISTQB rules. If you are unsure whether something is on the v4.0 syllabus, verify against the guide before including it.

Begin with Phase 0.
