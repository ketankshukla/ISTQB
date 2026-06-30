# 📝 Mock Exam 2

**ISTQB CTFL v4.0 — Full-Length Practice Exam**

- 40 questions
- Time allowed: 60 minutes
- Pass mark: 26/40 (65%)
- Select the single best answer unless otherwise stated

---

### 🔷 Q1
A system was tested thoroughly and released with zero known defects. Within a week, users abandon it because it does not solve their actual problem. Which testing principle is MOST relevant?

A. Exhaustive testing is impossible

B. Absence-of-defects fallacy

C. Pesticide paradox

D. Defects cluster together

### 🔷 Q2
What is the relationship between an error, a defect, and a failure?

A. They are three names for the same thing

B. An error (human mistake) leads to a defect (flaw in a work product), which may cause a failure (incorrect behavior at runtime)

C. A failure causes a defect, which causes an error

D. A defect always causes a failure

### 🔷 Q3
A test team runs the same unchanged regression suite for 8 releases without finding new defects. Users continue to report bugs. Which principle explains this?

A. Testing is context dependent

B. Pesticide paradox (tests wear out)

C. Defects cluster together

D. Early testing saves time and money

### 🔷 Q4
Which of the following is NOT a recognized objective of testing?

A. Finding defects

B. Building confidence in quality

C. Proving the software is completely correct

D. Providing information for decision-making

### 🔷 Q5
A tester identifies that a requirement is ambiguous during a review meeting. At this point, what has the tester found?

A. A failure

B. A defect in the requirement

C. A root cause

D. A test case

### 🔷 Q6
What is the PRIMARY advantage of higher independence in testing?

A. Testers can fix defects faster

B. Testers bring a different perspective, reducing shared blind spots with developers

C. Testing becomes cheaper

D. Communication is always better with independent testers

### 🔷 Q7
In DevOps, what is the PRIMARY impact on testing?

A. Testing is eliminated because DevOps automates everything

B. Testing is integrated into the CI/CD pipeline with heavy reliance on automated tests for fast feedback

C. Only manual testing is used

D. Testing occurs only after the final production deployment

### 🔷 Q8
Which of the following BEST describes Behavior-Driven Development (BDD)?

A. A testing technique where only testers write tests

B. A collaborative approach using structured natural language (Given/When/Then) to define executable specifications

C. A manual testing approach without automation

D. A technique used only for performance testing

### 🔷 Q9
Component integration testing focuses on:

A. Testing the entire system as a whole

B. Testing interfaces between components within the same system

C. Testing interfaces between different systems

D. Testing user acceptance

### 🔷 Q10
Non-functional testing evaluates:

A. Whether the system's functions produce correct outputs

B. How well the system performs its functions (quality characteristics like performance, usability, security)

C. Only the code structure

D. Only the user interface appearance

### 🔷 Q11
What is the PRIMARY difference between confirmation testing and regression testing?

A. Confirmation testing checks the entire system; regression testing checks only the fix

B. Confirmation testing verifies a specific fix works; regression testing verifies the fix did not break anything else

C. They are the same activity

D. Regression testing is only performed manually

### 🔷 Q12
In the context of maintenance testing, what is impact analysis?

A. Measuring the performance impact of the system

B. Assessing which areas of the system could be affected by a change and what testing is needed

C. Determining the financial impact of the project

D. Calculating test automation ROI

### 🔷 Q13
Which statement about static testing is CORRECT?

A. Static testing requires executing the software

B. Static testing can only be performed on source code

C. Static testing examines work products without execution and can find defects that dynamic testing cannot

D. Static testing is less valuable than dynamic testing

### 🔷 Q14
What distinguishes an inspection from a technical review?

A. Inspections have no moderator; technical reviews do

B. Inspections use a trained moderator, have formal entry/exit criteria, require mandatory preparation, and collect metrics; technical reviews are less formal

C. Technical reviews are more formal than inspections

D. Inspections do not produce documentation

### 🔷 Q15
Which role is responsible for fixing defects found during a review?

A. The moderator

B. The reviewer

C. The author

D. The scribe

### 🔷 Q16
A discount rule states: "For orders between $50 and $200, apply a 10% discount." Using EP, which of the following is a VALID equivalence partition?

A. Orders below $50

B. Orders between $50 and $200

C. Orders above $200

D. Non-numeric order amounts

### 🔷 Q17
A field accepts quantities from 1 to 99. Using two-value BVA, how many test values are identified specifically for boundary testing?

A. 2

B. 4

C. 6

D. 99

### 🔷 Q18
In a decision table, a "-" (dash) in a condition row indicates:

A. The condition is always false

B. The condition is always true

C. The condition value does not affect the outcome for that rule (don't care)

D. The condition is invalid

### 🔷 Q19
A state transition diagram for a door lock has states: Locked, Unlocked, Alarm. There are 5 valid transitions. To achieve 0-switch coverage, you must exercise:

A. All 3 states

B. All 5 transitions at least once

C. Every possible sequence of 2 transitions

D. Only the happy path

### 🔷 Q20
Consider this code:
```
1: if (x > 10) {
2:     result = "high"
3: } else {
4:     result = "low"
5: }
6: if (y > 5) {
7:     result = result + " priority"
8: }
```
What is the minimum number of test cases for 100% branch coverage?

A. 1

B. 2

C. 3

D. 4

### 🔷 Q21
100% branch coverage guarantees:

A. 100% path coverage

B. 100% statement coverage

C. Finding all defects

D. 100% condition coverage

### 🔷 Q22
A tester suspects the system cannot handle special characters in the search field because a similar system had this bug. The tester creates tests specifically with characters like <, >, &, and ". This is an example of:

A. Boundary value analysis

B. Exploratory testing

C. Error guessing

D. Decision table testing

### 🔷 Q23
Which of the following is a characteristic of checklist-based testing?

A. It provides detailed step-by-step test procedures for each test

B. It uses a high-level list of items to verify, with the tester using judgment on how to test each item

C. It is only used for automation

D. It never finds defects

### 🔷 Q24
What is the format of scenario-oriented acceptance criteria?

A. A list of bullet points

B. Given/When/Then (Gherkin format)

C. A UML diagram

D. A spreadsheet

### 🔷 Q25
Which statement about ATDD is CORRECT?

A. Tests are written after development is complete

B. Only developers participate in defining acceptance tests

C. Acceptance tests are written before development, serving as executable specifications that drive implementation

D. ATDD applies only to non-functional requirements

### 🔷 Q26
A tester is contributing to sprint planning. Which is the MOST valuable contribution?

A. Writing production code

B. Estimating test effort, identifying risks, and ensuring user stories are testable

C. Approving the product backlog alone

D. Deciding the sprint duration

### 🔷 Q27
Which of the following describes an entry criterion for system testing?

A. All critical defects have been fixed

B. The system test report has been approved

C. Component and integration testing are complete, and the system is deployed to the test environment

D. The project has been cancelled

### 🔷 Q28
The test pyramid recommends that the majority of tests should be:

A. End-to-end UI tests

B. Manual exploratory tests

C. Fast, automated unit/component tests at the base

D. Acceptance tests

### 🔷 Q29
In the testing quadrants, Q3 (business-facing, critiquing the product) includes:

A. Unit tests

B. Performance tests

C. Exploratory testing and usability testing

D. Automated component tests

### 🔷 Q30
A product risk analysis identifies that the payment module has high likelihood of defects (3/5) and very high impact if it fails (5/5). The login module has low likelihood (1/5) and medium impact (3/5). How should testing effort be allocated?

A. Equal effort to both modules

B. More effort to the payment module (risk level 15 vs 3)

C. More effort to the login module

D. No testing for either module

### 🔷 Q31
Which of the following is a project risk?

A. The system crashes under load

B. The vendor delivering the test tool is three weeks late

C. Users cannot complete the checkout process

D. Data is corrupted during processing

### 🔷 Q32
A test completion report should include:

A. Only the count of test cases executed

B. A summary of testing activities, quality assessment, residual risks, and release readiness recommendation

C. Only the list of open defects

D. The source code of the application

### 🔷 Q33
What is the PRIMARY benefit of configuration management for testing?

A. It automatically generates test cases

B. It ensures reproducibility (defects can be reproduced against specific versions) and consistency of testware

C. It replaces the need for defect management

D. It measures code performance

### 🔷 Q34
In a defect report, "severity" refers to:

A. How urgently the business wants the defect fixed

B. The technical impact of the defect on system functionality

C. Who reported the defect

D. When the defect was found

### 🔷 Q35
Which of the following makes a defect report MOST useful to a developer?

A. A vague title like "system error"

B. Clear steps to reproduce, the expected result, the actual result, and environment details

C. Only the tester's opinion about what might be wrong

D. Just a screenshot with no context

### 🔷 Q36
A static analysis tool identifies unreachable code and potential null pointer references. This tool is classified as:

A. A test execution tool

B. A performance testing tool

C. A static testing tool

D. A test management tool

### 🔷 Q37
Which of the following is NOT a benefit of test automation?

A. Faster execution of regression tests

B. Consistent and repeatable test execution

C. Guaranteed detection of all defects including usability issues

D. Ability to run tests 24/7

### 🔷 Q38
When is test automation MOST cost-effective?

A. For tests that are executed once and never repeated

B. For tests that are highly subjective (like usability evaluation)

C. For regression tests that run frequently and are stable

D. For tests where the application UI changes every week

### 🔷 Q39
What is a "flaky test" in automation?

A. A test that always passes

B. A test that always fails

C. A test that intermittently passes or fails without code changes

D. A well-designed test

### 🔷 Q40
A retrospective at the end of a sprint reveals that testers consistently receive user stories too late for adequate test preparation. What is the MOST appropriate improvement?

A. Remove testers from the team

B. Involve testers earlier in story refinement sessions so they have adequate preparation time

C. Stop doing retrospectives

D. Reduce the number of user stories
