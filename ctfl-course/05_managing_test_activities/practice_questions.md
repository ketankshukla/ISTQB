# ❓ Chapter 5 — Practice Questions

18 original ISTQB-style questions covering Chapter 5 learning objectives.

---

## ❓ Questions

### 🔷 Q1 (FL-5.1.1, K2)

Which of the following is NOT typically included in a test plan?

A. Test objectives and scope
B. Detailed source code of the system under test
C. Entry and exit criteria
D. Resource requirements and schedule

---

### 🔷 Q2 (FL-5.1.2, K1)

How does a tester add value during iteration planning in Agile?

A. By writing all the production code
B. By estimating test effort, identifying test dependencies, and raising testability concerns
C. By approving the final product release
D. By replacing the product owner in prioritizing features

---

### 🔷 Q3 (FL-5.1.3, K2)

Which of the following is an example of an EXIT criterion for system testing?

A. The test environment is set up and accessible
B. All test cases have been reviewed and approved
C. All critical and high-severity defects have been resolved or deferred with stakeholder approval
D. Requirements documents are available for review

---

### 🔷 Q4 (FL-5.1.3, K2)

In Agile terminology, the Definition of Ready (DoR) corresponds to which concept in traditional testing?

A. Exit criteria
B. Entry criteria
C. Test completion report
D. Defect priority

---

### 🔷 Q5 (FL-5.1.4, K1)

A Scrum team uses Planning Poker to estimate the testing effort for user stories. This is an example of which type of estimation technique?

A. Metrics-based estimation
B. Expert-based estimation
C. Statistical estimation
D. Code-based estimation

---

### 🔷 Q6 (FL-5.1.5, K3)

A test team has 100 test cases but can only execute 60 due to time constraints. They decide to run all tests covering the payment module first (highest business risk), then authentication tests, and finally UI tests.

Which prioritization approach are they using?

A. Random prioritization
B. Alphabetical prioritization
C. Risk-based prioritization
D. Code-coverage-based prioritization

---

### 🔷 Q7 (FL-5.1.6, K1)

According to the test pyramid model, which layer should contain the MOST tests?

A. UI/end-to-end tests
B. Integration/API tests
C. Unit/component tests
D. Acceptance tests

---

### 🔷 Q8 (FL-5.1.7, K2)

In the testing quadrants model, which quadrant contains performance testing and security testing?

A. Q1 (technology-facing, supporting the team)
B. Q2 (business-facing, supporting the team)
C. Q3 (business-facing, critiquing the product)
D. Q4 (technology-facing, critiquing the product)

---

### 🔷 Q9 (FL-5.2.1, K2)

A product risk has been assessed with a likelihood of 4 (out of 5) and an impact of 2 (out of 5). Another risk has likelihood 2 and impact 5. Which risk has the higher risk level?

A. The first risk (likelihood 4, impact 2) because it is more likely to occur
B. The second risk (likelihood 2, impact 5) because its risk level (10) equals the first (8)
C. Both risks have the same risk level
D. The second risk (likelihood 2, impact 5) because 10 > 8

---

### 🔷 Q10 (FL-5.2.2, K2)

Which of the following is a PROJECT risk (not a product risk)?

A. The search feature may return incorrect results
B. The application may crash under heavy load
C. Key testers may leave the company during the test phase, causing delays
D. Security vulnerabilities may allow unauthorized data access

---

### 🔷 Q11 (FL-5.2.2, K2)

Which of the following is a PRODUCT risk?

A. The development team may not finish coding on time
B. The test tools may not be compatible with the new platform
C. The sorting algorithm may produce incorrect results for large datasets
D. The project budget may be cut by management

---

### 🔷 Q12 (FL-5.2.3, K2)

How does product risk analysis influence testing?

A. It eliminates the need for test planning
B. It determines that only high-risk features need to be tested
C. Higher-risk areas receive more thorough testing with more rigorous techniques, and are tested earlier
D. It replaces the need for a test strategy

---

### 🔷 Q13 (FL-5.3.1, K1)

Which of the following is a commonly used test metric?

A. Developer salary
B. Number of defects found per severity level
C. Office temperature during testing
D. Number of meetings attended by the test manager

---

### 🔷 Q14 (FL-5.3.2, K2)

A test completion report at the end of system testing should include which of the following?

A. Only the list of test cases that passed
B. A summary of testing activities, assessment of quality, residual risks, and a recommendation on release readiness
C. The complete source code of the application
D. Only the number of defects found

---

### 🔷 Q15 (FL-5.4.1, K2)

How does configuration management support testing?

A. It eliminates the need for regression testing
B. It ensures testware is version-controlled so that defects can be reproduced against specific versions and all team members use the correct version of test artifacts
C. It automatically fixes defects in the code
D. It replaces the need for a test environment

---

### 🔷 Q16 (FL-5.5.1, K3)

A tester finds that clicking "Submit Order" with an empty shopping cart causes a blank white page. Which of the following is the BEST title for the defect report?

A. "Bug found"
B. "Submit Order button displays blank page when cart is empty instead of showing an error message"
C. "The system is broken"
D. "Cart issue"

---

### 🔷 Q17 (FL-5.5.1, K3)

In a defect report, what is the difference between severity and priority?

A. They are the same thing with different names
B. Severity measures the technical impact of the defect; priority measures the business urgency of fixing it
C. Severity is set by developers; priority is set by testers
D. Severity only applies to critical defects; priority applies to all defects

---

### 🔷 Q18 (FL-5.5.1, K3)

A defect report states: "The login does not work." Which essential information is MISSING that would make this report more useful?

A. The reporter's favorite color
B. Steps to reproduce, expected result, and actual result (what credentials were used, what happened, what should have happened)
C. The developer's name
D. The project budget

---

---

## ✔️ Answers and Rationales

### ✔️ Q1 — Answer: B

- **B is correct.** Source code is the test object, not content of the test plan. The test plan describes the testing approach.
- A is wrong: Test objectives and scope ARE in the plan.
- C is wrong: Entry/exit criteria ARE in the plan.
- D is wrong: Resources and schedule ARE in the plan.

### ✔️ Q2 — Answer: B

- **B is correct.** Testers contribute by estimating test effort, identifying dependencies, and raising testability issues.
- A is wrong: Testers do not write production code.
- C is wrong: Release approval is a management/stakeholder decision.
- D is wrong: Testers do not replace the product owner.

### ✔️ Q3 — Answer: C

- **C is correct.** "All critical/high defects resolved" is a condition for declaring testing COMPLETE (exit criterion).
- A is wrong: Environment availability is an entry criterion.
- B is wrong: Test case approval is an entry criterion.
- D is wrong: Requirements availability is an entry criterion.

### ✔️ Q4 — Answer: B

- **B is correct.** DoR defines what must be ready before work (testing) begins — this is the same concept as entry criteria.
- A is wrong: Exit criteria correspond to Definition of Done (DoD).
- C, D are unrelated.

### ✔️ Q5 — Answer: B

- **B is correct.** Planning Poker relies on expert judgment from team members, making it an expert-based technique.
- A is wrong: Metrics-based uses historical data, not team votes.
- C, D are not recognized ISTQB estimation categories.

### ✔️ Q6 — Answer: C

- **C is correct.** Executing highest-business-risk tests first is risk-based prioritization.
- A is wrong: Not random.
- B is wrong: Not alphabetical.
- D is wrong: Not based on code coverage metrics.

### ✔️ Q7 — Answer: C

- **C is correct.** The test pyramid places the most tests at the base (unit/component tests) because they are fast, cheap, and provide rapid feedback.
- A is wrong: UI tests should be fewest (top of pyramid).
- B is wrong: Integration tests are in the middle layer.
- D is wrong: Acceptance tests are at or near the top.

### ✔️ Q8 — Answer: D

- **D is correct.** Q4 is technology-facing (non-functional/technical quality) and critiquing the product (evaluating, not guiding development). Performance and security testing fit here.
- A is wrong: Q1 is unit tests and TDD.
- B is wrong: Q2 is functional/story tests.
- C is wrong: Q3 is exploratory and usability testing.

### ✔️ Q9 — Answer: D

- **D is correct.** Risk 1: 4 x 2 = 8. Risk 2: 2 x 5 = 10. Risk 2 has the higher risk level (10 > 8).
- A is wrong: Higher likelihood alone does not mean higher risk.
- B is wrong: The values are 8 and 10, not equal.
- C is wrong: They are not the same (8 vs 10).

### ✔️ Q10 — Answer: C

- **C is correct.** Staff leaving is a project risk (threatens the project timeline/resources).
- A is wrong: Incorrect results = product quality risk.
- B is wrong: Crashing under load = product quality risk.
- D is wrong: Security vulnerabilities = product quality risk.

### ✔️ Q11 — Answer: C

- **C is correct.** An algorithm producing incorrect results is a quality defect in the product (product risk).
- A is wrong: Coding delays = project risk.
- B is wrong: Tool incompatibility = project risk.
- D is wrong: Budget cuts = project risk.

### ✔️ Q12 — Answer: C

- **C is correct.** Risk analysis directs more testing effort and rigor to higher-risk areas and ensures they are tested earlier.
- A is wrong: Risk analysis supports planning; it does not eliminate it.
- B is wrong: All areas should be tested; risk determines the depth.
- D is wrong: Risk analysis informs strategy; it does not replace it.

### ✔️ Q13 — Answer: B

- **B is correct.** Defects found per severity is a standard defect metric used in testing.
- A, C, D are not test metrics.

### ✔️ Q14 — Answer: B

- **B is correct.** A completion report summarizes activities, quality assessment, residual risks, and release recommendations.
- A is wrong: Only showing passes gives an incomplete and misleading picture.
- C is wrong: Source code is not part of test reports.
- D is wrong: Just a defect count lacks context and assessment.

### ✔️ Q15 — Answer: B

- **B is correct.** CM ensures version control of testware, enabling reproducibility and consistency.
- A is wrong: CM does not eliminate regression testing.
- C is wrong: CM does not fix defects.
- D is wrong: CM does not replace test environments.

### ✔️ Q16 — Answer: B

- **B is correct.** A good defect title is specific, descriptive, and communicates the problem clearly in one line.
- A is wrong: "Bug found" is too vague.
- C is wrong: "The system is broken" is vague and emotional.
- D is wrong: "Cart issue" lacks specifics about the behavior.

### ✔️ Q17 — Answer: B

- **B is correct.** Severity = technical impact (how bad is it technically). Priority = business urgency (how soon must it be fixed).
- A is wrong: They measure different things and can differ (high severity, low priority is possible).
- C is wrong: Severity is typically assessed by testers; priority by management.
- D is wrong: Both apply to all defects, not just critical ones.

### ✔️ Q18 — Answer: B

- **B is correct.** The report lacks steps to reproduce, what was expected, and what actually happened — the most critical information for a developer to investigate.
- A, C, D are irrelevant to defect reporting.
