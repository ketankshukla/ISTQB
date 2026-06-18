# ❓ Chapter 1 — Testing Process: Practice Questions

---

### 🔷 Q1 (TA-1.1, K2)

In a sequential (waterfall) software development lifecycle, during which phase are test cases typically designed?

A. Requirements phase
B. Design phase
C. Coding phase
D. Testing phase

---

### 🔷 Q2 (TA-1.1, K2)

Which of the following is a PRIMARY reason why test planning is an ongoing activity in iterative development models?

A. Iterative models do not require any planning
B. Each iteration may introduce new risks and change priorities
C. Planning is only done by developers in iterative models
D. Test planning is prohibited in iterative models

---

### 🔷 Q3 (TA-1.2, K2)

A test analyst is participating in test planning for a new project. Which of the following activities is MOST appropriate for the test analyst to contribute?

A. Setting the overall project budget
B. Defining the organization's testing policy
C. Estimating effort for test analysis and test design
D. Hiring the test team members

---

### 🔷 Q4 (TA-1.2, K2)

During test monitoring, the test team notices that defect detection rate is declining while test execution progress is on track. Which action is MOST appropriate?

A. Continue testing as planned — the schedule is on track
B. Investigate whether testers are missing defects or if the product quality is improving
C. Immediately stop testing and declare the product ready
D. Remove all test cases that have already passed to save time

---

### 🔷 Q5 (TA-1.3, K2)

A test analyst reviews the following requirement: "The system shall calculate shipping costs based on weight, destination, and shipping method."

Which of the following is a test condition derived from this requirement?

A. Enter weight: 5kg, destination: CA, method: Standard → shipping cost: $8.99
B. The shipping cost calculation feature
C. Click the Calculate Shipping button and verify the result
D. The test analyst spends 2 hours testing shipping costs

---

### 🔷 Q6 (TA-1.3, K2)

During test analysis, a test analyst identifies that the requirements document contains conflicting information about password length rules. What is the MOST appropriate action?

A. Ignore the conflict and test both rules separately
B. Report the ambiguity to the requirements owner for clarification
C. Assume the more restrictive rule is correct
D. Design test cases for the most common password length

---

### 🔷 Q7 (TA-1.4, K2)

What is the PRIMARY difference between test analysis and test design?

A. Test analysis is done by developers; test design is done by testers
B. Test analysis identifies what to test; test design defines how to test it
C. Test analysis uses white-box techniques; test design uses black-box techniques
D. Test analysis is optional; test design is mandatory

---

### 🔷 Q8 (TA-1.5, K2)

Which of the following is part of test implementation rather than test design?

A. Identifying boundary values for a field
B. Creating the test environment and loading test data
C. Selecting equivalence partitioning as a technique
D. Writing expected results for test cases

---

### 🔷 Q9 (TA-1.6, K2)

A project has the following entry criterion: "Build must pass automated smoke tests." During preparation for test execution, the smoke tests fail on the latest build.

What is the MOST appropriate action?

A. Begin testing anyway to save time
B. Report the issue, wait for a stable build, then begin testing
C. Modify the smoke tests to pass
D. Skip smoke tests for this release

---

### 🔷 Q10 (TA-1.6, K2)

Which of the following is an example of a test execution SUSPENSION criterion?

A. All planned test cases have been executed
B. The test environment becomes unavailable for more than 4 hours
C. Code coverage reaches 90%
D. No critical defects remain open

---

### 🔷 Q11 (TA-1.7, K2)

A project's exit criteria state: "95% of planned test cases must pass." After 4 weeks of testing, 94% of test cases have passed, but all remaining failures are low-priority cosmetic issues.

Which of the following is the MOST appropriate action?

A. Automatically extend testing until 95% is achieved
B. Assess risk, discuss with stakeholders, and potentially accept the current result with documented risk
C. Reduce the exit criteria to 90% without discussion
D. Declare the testing failed and halt the release

---

### 🔷 Q12 (TA-1.8, K2)

At the end of a project, the test team archives test cases, analyzes lessons learned, and evaluates which techniques were most effective. These activities are part of:

A. Test planning
B. Test monitoring
C. Test closure
D. Test design

---

### 🔷 Q13 (TA-1.1, K2)

In an agile development team, when does test analysis MOST commonly occur?

A. Only during the first sprint
B. Just before or during the sprint in which the feature is implemented
C. At the end of the project
D. Before the project starts

---

### 🔷 Q14 (TA-1.2, K2)

Which of the following metrics is MOST useful for monitoring whether testing is finding defects effectively?

A. Number of test cases written
B. Defect detection rate (defects found per test hour)
C. Number of requirements documents reviewed
D. Size of the test team

---

### 🔷 Q15 (TA-1.4, K2)

A test analyst has identified the following test conditions for a login feature: valid login, invalid password, empty username, locked account. What is the NEXT activity in the testing process?

A. Test execution
B. Test design (creating specific test cases)
C. Test closure
D. Test planning

---

### 🔷 Q16 (TA-1.6, K2)

A test execution procedure contains 10 test cases. After executing the first 3, a critical defect is found that prevents further login-related tests from running. The remaining 7 test cases test unrelated features.

What is the MOST appropriate action?

A. Stop all testing immediately
B. Continue executing the remaining 7 test cases that are not blocked
C. Rewrite the 7 test cases to avoid the defect
D. Release the build with the known defect

---

### 🔷 Q17 (TA-1.7, K2)

A test summary report should include all of the following EXCEPT:

A. Defects found and their severity
B. Test coverage achieved
C. Individual tester's performance reviews
D. Risk assessment of remaining defects

---

### 🔷 Q18 (TA-1.1, K2)

Which lifecycle model is MOST likely to require the most extensive regression testing effort?

A. Sequential model with single release
B. Iterative model with multiple increments
C. Prototype model with throwaway code
D. Big bang model with no testing

---

### 🔷 Q19 (TA-1.5, K2)

During test implementation, a test analyst discovers that the test environment does not support the planned automated test scripts. Which action is MOST appropriate?

A. Skip automated testing and test only manually
B. Report the issue and work with the environment team to resolve it
C. Modify the test scripts to avoid the unsupported features
D. Cancel the testing phase

---

### 🔷 Q20 (TA-1.2, K2)

A test manager asks for a progress report. Which information is MOST important to include?

A. Each tester's personal opinions about the developers
B. Test execution progress, coverage achieved, and open defects
C. Detailed screenshots of every passed test case
D. The test team's lunch schedule

---

## ✔️ Answers and Rationales

### 🔷 Q1
**Answer: B**

**Rationale:** In sequential models, test design occurs during the design phase (parallel with software design). Test analysis occurs during requirements. Test execution occurs during the testing phase.

### 🔷 Q2
**Answer: B**

**Rationale:** Iterative models require ongoing planning because each iteration may introduce new features, risks, and priorities. Planning must adapt to what is learned in each iteration.

### 🔷 Q3
**Answer: C**

**Rationale:** Test analysts contribute technical estimates for test activities they will perform. Budget (A), policy (B), and hiring (D) are test manager or organizational responsibilities.

### 🔷 Q4
**Answer: B**

**Rationale:** A declining defect detection rate while execution is on track could mean the product is stabilizing OR testers are missing defects. Investigation is needed before deciding to continue or stop.

### 🔷 Q5
**Answer: B**

**Rationale:** A test condition is what needs to be tested — "the shipping cost calculation feature." Option A is a test case (how to test). Option C is a test step. Option D is an effort estimate.

### 🔷 Q6
**Answer: B**

**Rationale:** Conflicting requirements cannot be resolved by the test analyst alone. The requirements owner (business analyst, product owner) must clarify before test cases are designed.

### 🔷 Q7
**Answer: B**

**Rationale:** Test analysis identifies what to test (test conditions). Test design defines how to test (test cases with inputs, actions, expected results). Both are done by testers, both can use various techniques, and both are essential.

### 🔷 Q8
**Answer: B**

**Rationale:** Test implementation includes environment setup and test data preparation. Identifying boundary values (A), selecting techniques (C), and writing expected results (D) are test design activities.

### 🔷 Q9
**Answer: B**

**Rationale:** Entry criteria exist to ensure testing begins only when the product is ready. Starting with a failing build wastes time and produces unreliable results. Wait for a stable build.

### 🔷 Q10
**Answer: B**

**Rationale:** Suspension criteria temporarily stop testing. Environment unavailability (B) is temporary. The others (A, C, D) describe exit criteria (final completion conditions).

### 🔷 Q11
**Answer: B**

**Rationale:** Exit criteria are guidelines, not absolute laws. When results are close and remaining issues are low-risk, the business may accept the deviation with documented risk. Stakeholder discussion is required.

### 🔷 Q12
**Answer: C**

**Rationale:** Archiving assets, analyzing lessons learned, and evaluating technique effectiveness are test closure activities. They happen when testing ends.

### 🔷 Q13
**Answer: B**

**Rationale:** Agile uses just-in-time test analysis — requirements are analyzed for testability immediately before or during implementation in the sprint.

### 🔷 Q14
**Answer: B**

**Rationale:** Defect detection rate measures testing effectiveness (defects found per unit of effort). Number of test cases (A), documents reviewed (C), and team size (D) do not measure effectiveness.

### 🔷 Q15
**Answer: B**

**Rationale:** After test conditions are identified (test analysis), the next activity is test design — creating specific test cases from those conditions. Test execution (A) comes after implementation.

### 🔷 Q16
**Answer: B**

**Rationale:** Only the login-related tests are blocked. The remaining 7 test cases for unrelated features can still provide valuable information. There is no need to stop all testing.

### 🔷 Q17
**Answer: C**

**Rationale:** Test summary reports focus on product and testing status, not personnel performance. Defects (A), coverage (B), and risk assessment (D) are standard report contents.

### 🔷 Q18
**Answer: B**

**Rationale:** Iterative models with multiple increments require regression testing after each increment to ensure new changes do not break existing functionality. Sequential models (A) have less regression risk.

### 🔷 Q19
**Answer: B**

**Rationale:** Environment issues should be reported and resolved, not worked around. Modifying scripts (C) may compromise test coverage. Manual-only testing (A) may miss automation's value.

### 🔷 Q20
**Answer: B**

**Rationale:** Progress reports should include objective metrics: execution progress, coverage, and defect status. Personal opinions (A), excessive detail (C), and irrelevant information (D) are inappropriate.
