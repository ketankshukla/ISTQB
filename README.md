# ISTQB CTFL v4.0 Self-Study Course

A comprehensive, exam-focused self-study course for the **ISTQB Certified Tester Foundation Level (CTFL) v4.0** certification. Built entirely in Markdown for easy reading on GitHub or any text editor.

---

## About This Project

This repository contains a complete training course designed to prepare you for the ISTQB CTFL v4.0 exam with a target score of 90%+. It covers all 6 syllabus chapters, all 64 learning objectives, and all 14 business outcomes.

The course is written for experienced software engineers who understand development but need structured, efficient preparation for the certification exam.

---

## Exam at a Glance

| Parameter | Value |
|-----------|-------|
| Certification | ISTQB Certified Tester Foundation Level |
| Syllabus version | v4.0 (2024) |
| Questions | 40 |
| Duration | 60 minutes |
| Pass mark | 65% (26/40) |
| Format | Closed book, single best answer (with some "choose N") |
| K-levels tested | K1 (remember), K2 (understand), K3 (apply) |

---

## Repository Structure

```
ISTQB-CTFL/
|
|-- README.md                       This file (project overview)
|-- CTFL_COURSE_BUILD_PROMPT.md     Build specification used to generate the course
|-- <reference PDF>                  Official self-study guide (v4.0, 2024)
|
|-- course/
    |-- README.md                   Course overview and how-to-use guide
    |-- STUDY_PLAN.md              4-week study schedule targeting 90%+
    |-- EXAM_STRATEGY.md           Exam tactics, time budgeting, K-level patterns
    |-- GLOSSARY.md                100+ key ISTQB terms with original definitions
    |-- PROGRESS_TRACKER.md        Learner checklist for tracking completion and scores
    |-- COVERAGE_REPORT.md         Verification that all 64 LOs are covered
    |
    |-- 01_fundamentals_of_testing/
    |   |-- README.md              Chapter map, LOs, K-levels, exam weighting
    |   |-- lessons.md             Full instructional content (sections 1.1-1.5)
    |   |-- exam_traps.md          Common mistakes and ISTQB-favorite distinctions
    |   |-- practice_questions.md  17 original questions with rationales
    |
    |-- 02_testing_throughout_sdlc/
    |   |-- README.md
    |   |-- lessons.md             Sections 2.1-2.3
    |   |-- exam_traps.md
    |   |-- practice_questions.md  17 original questions with rationales
    |
    |-- 03_static_testing/
    |   |-- README.md
    |   |-- lessons.md             Sections 3.1-3.2
    |   |-- exam_traps.md
    |   |-- practice_questions.md  17 original questions with rationales
    |
    |-- 04_test_analysis_and_design/
    |   |-- README.md
    |   |-- lessons.md             Sections 4.1-4.5
    |   |-- worked_examples.md     Step-by-step EP, BVA, decision tables,
    |   |                          state transition, coverage, ATDD
    |   |-- exam_traps.md
    |   |-- practice_questions.md  22 original questions with rationales
    |
    |-- 05_managing_test_activities/
    |   |-- README.md
    |   |-- lessons.md             Sections 5.1-5.5
    |   |-- worked_examples.md     Risk analysis, defect reports, prioritization
    |   |-- exam_traps.md
    |   |-- practice_questions.md  18 original questions with rationales
    |
    |-- 06_test_tools/
    |   |-- README.md
    |   |-- lessons.md             Sections 6.1-6.2
    |   |-- exam_traps.md
    |   |-- practice_questions.md  15 original questions with rationales
    |
    |-- case_studies/
    |   |-- case_study_1_ecommerce_checkout.md
    |   |-- case_study_2_atm.md
    |   |-- case_study_3_loan_application.md
    |   |-- case_study_4_login_lockout.md
    |
    |-- mock_exams/
        |-- mock_exam_1.md
        |-- mock_exam_1_answers.md
        |-- mock_exam_2.md
        |-- mock_exam_2_answers.md
        |-- mock_exam_3.md
        |-- mock_exam_3_answers.md
```

---

## What Is Included

### Chapter Content (Phases 1-6)

Each of the 6 chapters contains:

- **Lessons** -- Plain-English explanations of every learning objective, with concrete examples from realistic software systems, diagrams (ASCII/tables), and cross-references to related topics
- **Exam Traps** -- The specific distinctions ISTQB loves to test and the mistakes candidates commonly make
- **Practice Questions** -- 15-22 original, ISTQB-style questions per chapter, each tagged with its learning objective and K-level, with full rationales explaining why the correct answer is right and why each distractor is wrong

### Worked Examples (Chapters 4 and 5)

For every K3 (apply) objective, the course provides:

- At least 3 fully worked, step-by-step examples showing the technique applied from requirement to finished test cases
- Equivalence partitioning, boundary value analysis, decision table testing, state transition testing, statement/branch coverage, ATDD, risk analysis, defect reports, and test prioritization

### Case Studies (Phase 7)

Four realistic, integrated case studies that force you to combine multiple techniques on the same feature:

1. **E-Commerce Checkout** -- pricing rules, payment validation, order workflow
2. **ATM Cash Withdrawal** -- PIN authentication, withdrawal limits, cash dispensing
3. **Online Loan Application** -- eligibility rules, interest rate calculation, age validation
4. **User Login and Account Lockout** -- credential validation, lockout state machine, session management

Each case study includes requirements, user stories, EP/BVA/decision table/state transition analysis, a risk-based test approach, a code coverage calculation, a sample defect report, and reflection questions with worked solutions.

### Mock Exams (Phase 8)

Three complete 40-question mock exams matching the real exam format:

- Chapter weighting aligned to the official distribution
- Mix of K1, K2, and K3 questions
- Non-overlapping question sets (no repeated questions across exams)
- Separate answer-key files with full rationales for every question
- Score interpretation guide

### Support Materials

- **STUDY_PLAN.md** -- A realistic 4-week schedule with daily activities and scoring milestones
- **EXAM_STRATEGY.md** -- K-level question patterns, time budgeting (90 sec/question), technique attack strategies, distractor elimination tactics, and a pre-exam checklist
- **GLOSSARY.md** -- 100+ key ISTQB terms defined in original words
- **PROGRESS_TRACKER.md** -- Checkboxes for tracking chapter completion, practice scores, and mock exam results

---

## How to Use This Course

1. **Start with** `course/STUDY_PLAN.md` to understand the recommended 4-week schedule
2. **Work through chapters 1-6 in order** -- read lessons, study exam traps, then attempt practice questions
3. **For Chapters 4 and 5**, work through `worked_examples.md` by hand before checking solutions
4. **After Chapters 4-5**, complete the 4 case studies to integrate techniques end-to-end
5. **In Week 4**, take mock exams under timed conditions (60 min, closed book)
6. **The day before your exam**, review `EXAM_STRATEGY.md` and the glossary

---

## Question Bank

| Source | Count |
|--------|-------|
| Chapter 1 practice | 17 |
| Chapter 2 practice | 17 |
| Chapter 3 practice | 17 |
| Chapter 4 practice | 22 |
| Chapter 5 practice | 18 |
| Chapter 6 practice | 15 |
| Mock Exam 1 | 40 |
| Mock Exam 2 | 40 |
| Mock Exam 3 | 40 |
| **Total** | **226** |

All questions are original, written in authentic ISTQB style, and include complete rationales.

---

## Syllabus Coverage

All **64 learning objectives** across all 6 chapters are covered. See `course/COVERAGE_REPORT.md` for the complete mapping of each LO to its corresponding file.

| Chapter | LOs | Exam Weight |
|---------|-----|-------------|
| 1 -- Fundamentals of Testing | 14 | ~20% (8 questions) |
| 2 -- Testing Throughout the SDLC | 10 | ~12.5% (5 questions) |
| 3 -- Static Testing | 8 | ~12.5% (5 questions) |
| 4 -- Test Analysis and Design | 14 | ~27.5% (11-12 questions) |
| 5 -- Managing the Test Activities | 16 | ~22.5% (8-9 questions) |
| 6 -- Test Tools | 2 | ~5% (2 questions) |
| **Total** | **64** | **100%** |

---

## Design Principles

- **Exam-focused** -- Content is structured around what the exam actually tests, not general QA knowledge
- **CTFL v4.0 only** -- All content aligns to the current syllabus version (not the older v3.1)
- **Original content** -- Every explanation, example, and question is written in original words; nothing is copied verbatim from any source
- **Self-contained** -- A learner should be able to pass the exam using only this course
- **Technique-heavy** -- Chapters 4 and 5 receive disproportionate practice material because they account for ~50% of the exam and contain all K3 (application) objectives
- **No emojis** -- Clean, professional Markdown throughout

---

## Prerequisites

- No prior testing or QA experience required
- Basic understanding of software development concepts (code, requirements, deployment) is assumed
- Familiarity with at least one programming language helps for Chapter 4 coverage examples

---

## Contributing

This course was generated as a self-study resource. If you find errors, ambiguities, or have suggestions:

1. Open an issue describing the problem and referencing the specific file/section
2. For corrections, submit a pull request with a clear explanation of what was wrong

---

## Disclaimer

This is an independent study resource. It is not affiliated with, endorsed by, or produced by ISTQB or any ISTQB member board. ISTQB and Certified Tester are registered trademarks. The official syllabus and sample exams are available from [istqb.org](https://www.istqb.org).

---

## License

This course content is provided for personal study purposes. The reference PDF included in this repository is copyrighted by its author and publisher; it is included here for personal reference only and should not be redistributed.
