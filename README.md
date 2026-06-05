# ISTQB Certification Self-Study Courses

A collection of comprehensive, exam-focused self-study courses for ISTQB certifications. All courses are built in Markdown for easy reading on GitHub or any text editor.

## Available Courses

| Course | Certification | Syllabus | Questions | Duration | Pass Mark |
|--------|-------------|----------|-----------|----------|-----------|
| `ctfl-course/` | CTFL v4.0 — Foundation Level | v4.0 (2024) | 40 | 60 min | 65% |
| `ctfl-at-course/` | CTFL-AT — Agile Tester | v4.0 | 40 | 60 min | 65% |
| `ctfl-mbt-course/` | CTFL-MBT — Model-Based Tester | v1.0 | 40 | 60 min | 65% |
| `ctfl-gt-course/` | CTFL-GT — Gambling Industry Tester | v1.0 | 40 | 60 min | 65% |
| `ctal-ta-course/` | CTAL-TA — Advanced Test Analyst | v4.0 | 60 | 180 min | 65% |
| `gen-ai-course/` | CT-GenAI — AI in Testing | v1.1 | 40 | 60 min | 65% |

See `ISTQB_Certification_Paths.md` for recommended certification paths based on your role and experience.

---

## About This Project

This repository contains complete training courses designed to prepare you for ISTQB certification exams. Each course covers all syllabus chapters, learning objectives, and business outcomes with a target score of 90%+.

The courses are written for software professionals who need structured, efficient preparation for certification exams.

## Quick Start

1. **New to testing?** Start with `ctfl-course/` (Foundation Level)
2. **Working in agile teams?** Add `ctfl-at-course/` (Agile Tester)
3. **Using model-based testing?** Add `ctfl-mbt-course/` (Model-Based Tester)
4. **Working in iGaming or gambling?** Take `ctfl-gt-course/` (Gambling Industry Tester)
5. **Experienced test analyst?** Take `ctal-ta-course/` (Advanced Test Analyst)
6. **Using AI/LLMs in testing?** Take `gen-ai-course/` (AI in Testing)

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
ISTQB/
|
|-- README.md                           This file (project overview)
|-- ISTQB_Certification_Paths.md        Certification roadmap and learning paths
|-- CTFL_COURSE_BUILD_PROMPT.md         Build specification used to generate the course
|
|-- ctfl-course/                        Foundation Level (CTFL v4.0)
|   |-- README.md
|   |-- STUDY_PLAN.md
|   |-- EXAM_STRATEGY.md
|   |-- GLOSSARY.md
|   |-- PROGRESS_TRACKER.md
|   |-- COVERAGE_REPORT.md
|   |-- 01_fundamentals_of_testing/
|   |-- 02_testing_throughout_sdlc/
|   |-- 03_static_testing/
|   |-- 04_test_analysis_and_design/
|   |-- 05_managing_test_activities/
|   |-- 06_test_tools/
|   |-- case_studies/
|   |-- mock_exams/
|
|-- ctfl-at-course/                     Agile Tester (CTFL-AT v4.0)
|   |-- README.md
|   |-- STUDY_PLAN.md
|   |-- EXAM_STRATEGY.md
|   |-- GLOSSARY.md
|   |-- PROGRESS_TRACKER.md
|   |-- 01_agile_testing_fundamentals/
|   |-- 02_agile_testing_methods_techniques/
|   |-- 03_agile_testing_tools_automation/
|   |-- case_studies/
|   |-- mock_exams/
|
|-- ctfl-mbt-course/                    Model-Based Tester (CTFL-MBT v1.0)
|   |-- README.md
|   |-- STUDY_PLAN.md
|   |-- EXAM_STRATEGY.md
|   |-- GLOSSARY.md
|   |-- PROGRESS_TRACKER.md
|   |-- 01_introduction_to_mbt/
|   |-- 02_mbt_modeling/
|   |-- 03_test_generation_selection_criteria/
|   |-- 04_mbt_execution_analysis/
|   |-- 05_mbt_tools_automation/
|   |-- case_studies/
|   |-- mock_exams/
|
|-- ctfl-gt-course/                     Gambling Industry Tester (CTFL-GT v1.0)
|   |-- README.md
|   |-- STUDY_PLAN.md
|   |-- EXAM_STRATEGY.md
|   |-- GLOSSARY.md
|   |-- PROGRESS_TRACKER.md
|   |-- 01_gambling_industry_fundamentals/
|   |-- 02_game_mathematics_and_rng/
|   |-- 03_compliance_player_protection/
|   |-- 04_gambling_testing_types_tools/
|   |-- case_studies/
|   |-- mock_exams/
|
|-- ctal-ta-course/                     Advanced Test Analyst (CTAL-TA v4.0)
|   |-- README.md
|   |-- STUDY_PLAN.md
|   |-- EXAM_STRATEGY.md
|   |-- GLOSSARY.md
|   |-- PROGRESS_TRACKER.md
|   |-- 01_testing_process/
|   |-- 02_test_design_techniques/
|   |-- 03_quality_characteristics/
|   |-- 04_reviews/
|   |-- 05_test_tools_and_automation/
|   |-- case_studies/
|   |-- mock_exams/
|
|-- gen-ai-course/                      AI in Testing (CT-GenAI v1.1)
|   |-- README.md
|   |-- STUDY_PLAN.md
|   |-- EXAM_STRATEGY.md
|   |-- GLOSSARY.md
|   |-- PROGRESS_TRACKER.md
|   |-- 01_introduction_to_genai_for_testing/
|   |-- 02_prompt_engineering_for_testing/
|   |-- 03_managing_risks_of_genai/
|   |-- 04_llm_powered_solutions/
|   |-- 05_deploying_and_integrating_genai/
|   |-- case_studies/
|   |-- mock_exams/
```

Each course follows the same proven structure:
- **Chapter README** — Exam weighting, learning objectives, K-levels
- **lessons.md** — Full instructional content with examples and worked problems
- **exam_traps.md** — Common mistakes and ISTQB-favorite distinctions
- **practice_questions.md** — 15-25 original questions with full rationales
- **case_studies/** — Integrated scenarios combining multiple chapters
- **mock_exams/** — Full-length timed practice exams with answer keys

---

## What Is Included

Every course in this repository follows the same proven structure:

### Chapter Content

Each chapter contains:

- **Lessons** -- Plain-English explanations of every learning objective, with concrete examples from realistic software systems, diagrams (ASCII/tables), and cross-references to related topics
- **Exam Traps** -- The specific distinctions ISTQB loves to test and the mistakes candidates commonly make
- **Practice Questions** -- 15-25 original, ISTQB-style questions per chapter, each tagged with its learning objective and K-level, with full rationales explaining why the correct answer is right and why each distractor is wrong

### Case Studies

Realistic, integrated case studies that force you to combine multiple techniques:

- **CTFL**: E-commerce checkout, ATM withdrawal, loan application, login lockout
- **CTFL-AT**: Agile team transformation, sprint testing, BDD implementation, CI/CD testing
- **CTFL-MBT**: ATM state machine modeling, e-commerce decision tables, MBT tool selection
- **CTFL-GT**: Slot game testing, sports betting compliance, multi-jurisdiction regulatory audit
- **CTAL-TA**: E-commerce test design, healthcare quality characteristics, reviews and tool implementation
- **CT-GenAI**: Prompt engineering pipeline, risk assessment framework, organizational adoption roadmap

### Mock Exams

Three complete mock exams per course matching the real exam format:

- Chapter weighting aligned to the official distribution
- Mix of K1, K2, and K3/K4 questions where applicable
- Non-overlapping question sets
- Separate answer-key files with full rationales
- Score interpretation guide

### Support Materials

- **STUDY_PLAN.md** -- A realistic schedule with daily activities and scoring milestones
- **EXAM_STRATEGY.md** -- K-level question patterns, time budgeting, technique attack strategies, distractor elimination tactics
- **GLOSSARY.md** -- Key ISTQB terms defined with testing context
- **PROGRESS_TRACKER.md** -- Checkboxes for tracking chapter completion, practice scores, and mock exam results

---

## How to Use These Courses

1. **Choose your course** based on your current certification level and role
2. **Start with `STUDY_PLAN.md`** to understand the recommended schedule
3. **Work through chapters in order** -- read lessons, study exam traps, then attempt practice questions
4. **Complete case studies** to integrate techniques end-to-end
5. **Take mock exams** under timed conditions (closed book)
6. **The day before your exam**, review `EXAM_STRATEGY.md` and the glossary

---

## Question Bank Totals

| Course | Practice Questions | Mock Exam Questions | Total |
|--------|-------------------|---------------------|-------|
| CTFL | 106 | 120 | 226 |
| CTFL-AT | 60 | 120 | 180 |
| CTFL-MBT | 85 | 120 | 205 |
| CTFL-GT | 80 | 120 | 200 |
| CTAL-TA | 100 | 120 | 220 |
| CT-GenAI | 80 | 120 | 200 |
| **Combined** | **511** | **720** | **1231+** |

All questions are original, written in authentic ISTQB style, and include complete rationales.

---

## Design Principles

- **Exam-focused** -- Content is structured around what the exam actually tests, not general knowledge
- **Syllabus-aligned** -- All content maps to current syllabus versions
- **Original content** -- Every explanation, example, and question is written in original words
- **Self-contained** -- A learner should be able to pass the exam using only the course materials
- **Technique-heavy** -- Higher-weighted chapters receive disproportionate practice material
- **Professional** -- Clean, professional Markdown throughout

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
