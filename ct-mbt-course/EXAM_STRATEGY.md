# CT-MBT Exam Strategy

This document contains tactics, time management advice, and trap-avoidance strategies for the CT-MBT exam.

---

## Exam Format Overview

| Parameter | Value |
|-----------|-------|
| Questions | 40 multiple choice |
| Duration | 60 minutes |
| Pass mark | 65% (26 correct) |
| Question style | Single best answer |
| Book type | Closed book |

---

## Time Budget

| Strategy | Time |
|----------|------|
| Total time | 60 minutes |
| Per question (average) | 1.5 minutes |
| Time for 40 questions | 50 minutes |
| Buffer for review | 10 minutes |

**Tactic:** If a question takes more than 2 minutes, flag it and move on. Return during the buffer time.

---

## Chapter Weighting and Focus Areas

| Chapter | Weight | Approx. Questions | Key Focus |
|---------|--------|-------------------|-----------|
| 1. Introduction to MBT | ~15% | ~6 | Definitions, benefits, limitations, test process |
| 2. MBT Modeling | ~20% | ~8 | Model types, notations, quality attributes |
| 3. Test Selection Criteria | ~20% | ~8 | Coverage criteria, transition/path-based, data-driven |
| 4. Test Implementation and Execution | ~15% | ~6 | Abstract tests, concretization, execution, analysis |
| 5. Evaluating and Deploying MBT | ~15% | ~6 | ROI, pilot, integration, organizational factors |
| 6. MBT Tool Support | ~15% | ~6 | Tool categories, selection, CI/CD integration |

**Study priority:** Chapters 2 and 3 carry the most weight.

---

## K-Level Patterns

| K-Level | Definition | How It Appears | Strategy |
|---------|-----------|----------------|----------|
| K2 | Understand, explain | "Which of the following is...?" | Recall concepts accurately |
| K3 | Apply | "Given a model, which test cases...?" | Apply selection criteria to models |
| K4 | Analyze | "Analyze the approach and recommend..." | Evaluate trade-offs, eliminate weaker options |

**Tip:** K3 and K4 questions often present models or scenarios. The "best" answer may not be perfect — it is the most appropriate among the options.

---

## Chapter-Specific Tactics

### Chapter 1: Introduction to MBT
- Know the definition: MBT uses models for test generation
- Understand benefits: automation, early defect detection, coverage, maintainability
- Know limitations: model creation effort, expertise required, not suitable for all systems
- Understand where MBT fits in the test process (test analysis and design)
- Know the difference between online and offline MBT

### Chapter 2: MBT Modeling
- Know model types: state transition, decision table, process model, feature model
- Understand model notations: UML state machines, activity diagrams, BPMN
- Know model quality attributes: correctness, representativeness, interpretability, maintainability
- Understand the difference between control flow and data flow models
- Know what makes a good test model (appropriate abstraction, test-relevant aspects)

### Chapter 3: Test Selection Criteria
- Know coverage criteria: state coverage, transition coverage, path coverage
- Understand boundary value testing on models
- Know data-driven selection (partitioning, equivalence classes)
- Understand the trade-off between coverage and number of test cases
- Know random vs. systematic selection

### Chapter 4: Test Implementation and Execution
- Know abstract vs. concrete test cases
- Understand concretization (adding data, mapping to SUT)
- Know test execution approaches: manual, automated, simulators
- Understand oracle problem in MBT (expected outputs from the model)
- Know how to analyze test failures (SUT bug, model bug, concretization bug)

### Chapter 5: Evaluating and Deploying MBT
- Know ROI factors: effort to create models vs. effort saved in test design
- Understand pilot project approach
- Know organizational factors: skills, culture, process maturity
- Understand incremental deployment vs. big-bang
- Know metrics for MBT success: defect detection, coverage, effort reduction

### Chapter 6: MBT Tool Support
- Know tool categories: modeling tools, test generation tools, execution tools
- Understand tool selection criteria
- Know integration with CI/CD pipelines
- Understand scripting languages vs. code generation
- Know the importance of model versioning alongside code versioning

---

## Distractor Patterns

| Pattern | Example | How to Spot It |
|---------|---------|--------------|
| MBT replaces all testing | "MBT eliminates the need for manual testing" | MBT complements, not replaces, other testing |
| Models must be perfect | "The model must be 100% complete before generating tests" | Models can be partial and iteratively improved |
| One model fits all | "A single model can test all quality characteristics" | Different models for different test objectives |
| True statement, but not the BEST answer | Multiple options are correct; pick the most complete | Read ALL options before selecting |
| MBT is only for large projects | "MBT is only cost-effective for enterprise systems" | MBT can work for small projects too |

---

## Before the Exam

**1 Week Before:**
- Re-read all `exam_traps.md` files
- Re-do all questions you previously missed
- Take Mock Exam 3 under timed conditions

**1 Day Before:**
- Light review only — no new material
- Review glossary terms
- Read the `exam_traps.md` summaries
- Get 7-8 hours of sleep

**Morning Of:**
- Eat a balanced breakfast
- Arrive early / set up your exam space
- Bring ID, water, and confidence

---

## During the Exam

**Question Reading:**
1. Read the question stem completely
2. Identify what is being asked (best approach, first step, most appropriate)
3. Read all four options before selecting
4. Eliminate clearly wrong answers first
5. Choose the best remaining answer

**Scenario Questions:**
- Underline key facts: model type, coverage goal, constraints
- Identify the chapter/concept being tested
- Eliminate answers that contradict the scenario
- Pick the most appropriate answer (not the perfect one)

**Flagging Strategy:**
- Flag questions you are uncertain about
- Never leave a question blank (there is no negative marking)
- Use the 10-minute buffer to review flagged questions
- Change an answer only if you find clear evidence — first instinct is often correct

---

## Post-Exam

Whether you pass or not:
- Note which questions were difficult
- Identify weak chapters for future study
- Update the `PROGRESS_TRACKER.md` with your score

If you did not pass, use the feedback report to target your weak areas and re-take.
