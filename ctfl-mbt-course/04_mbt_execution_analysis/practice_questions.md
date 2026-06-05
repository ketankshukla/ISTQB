# Chapter 4 — Execution and Analysis: Practice Questions

---

### Q1 (MBT-4.1, K2)

An abstract test case generated from a model:

A. Can be executed directly against the system
B. Needs to be concretized with specific values before execution
C. Is the same as a concrete test case
D. Does not need expected results

---

### Q2 (MBT-4.2, K2)

Which type of coverage measures how much of the model is exercised?

A. Code coverage
B. Model coverage
C. Requirement coverage
D. User coverage

---

### Q3 (MBT-4.3, K2)

When an MBT test fails, the FIRST step should be:

A. Fix the system immediately
B. Verify whether the model correctly reflects requirements
C. Delete the test case
D. Increase coverage target

---

### Q4 (MBT-4.4, K2)

An infeasible path in a state machine is:

A. A path that executes very slowly
B. A path that cannot be executed in the real system
C. A path with too many transitions
D. A path that generates too many tests

---

### Q5 (MBT-4.2, K2)

A coverage report shows 90% transition coverage when the target was 100%. The MOST appropriate action is:

A. Declare testing complete
B. Investigate why coverage is missing and add tests for uncovered transitions
C. Lower the target to 90%
D. Remove the uncovered transitions from the model

---

### Q6 (MBT-4.1, K2)

Concretization of an abstract test case involves:

A. Removing the test case from the test suite
B. Adding specific input values, preconditions, and expected results
C. Making the test case more abstract
D. Converting the test case into a model

---

### Q7 (MBT-4.3, K2)

A test fails because the system shows a generic error instead of the specific error predicted by the model. This is MOST likely:

A. A model defect
B. A system defect
C. A requirement defect
D. A test environment issue

---

### Q8 (MBT-4.4, K2)

An unreachable state in a model should be:

A. Kept in the model for future use
B. Investigated to determine if it should be reachable or removed
C. Automatically removed by the test tool
D. Ignored during test generation

---

### Q9 (MBT-4.2, K2)

Which statement about model coverage and code coverage is TRUE?

A. They are the same thing
B. Model coverage measures model elements; code coverage measures code elements
C. Model coverage always implies code coverage
D. Code coverage is not relevant in MBT

---

### Q10 (MBT-4.1, K2)

The model serves as a test oracle because:

A. It generates the test cases automatically
B. It predicts the expected behavior of the system
C. It executes the tests
D. It measures coverage

---

### Q11 (MBT-4.3, K2)

A model defect occurs when:

A. The system does not match the requirements
B. The model does not match the requirements
C. The test case fails
D. The coverage is low

---

### Q12 (MBT-4.4, K2)

A state machine has 10 transitions. Two transitions are infeasible. The realistic coverage target should be:

A. 100%
B. 80%
C. 50%
D. 20%

---

### Q13 (MBT-4.2, K2)

Which should be included in an MBT coverage report?

A. Only the number of tests passed
B. Coverage percentage, uncovered elements, and trends
C. Only the test execution time
D. Only the number of defects found

---

### Q14 (MBT-4.1, K2)

Mapping model elements to system elements is part of:

A. Model creation
B. Test concretization
C. Coverage measurement
D. Defect reporting

---

### Q15 (MBT-4.3, K2)

If the model is correct but the system behaves differently, the defect is:

A. A model defect
B. A system defect
C. A requirement defect
D. Not a defect

---

## Answers and Rationales

### Q1
**Answer: B**

**Rationale:** Abstract tests need specific values added (concretization) before they can be executed.

### Q2
**Answer: B**

**Rationale:** Model coverage measures how much of the model (states, transitions) is exercised.

### Q3
**Answer: B**

**Rationale:** The model may be wrong. Verify the model before assuming the system is defective.

### Q4
**Answer: B**

**Rationale:** Infeasible paths cannot be executed in the real system.

### Q5
**Answer: B**

**Rationale:** Missing coverage indicates missing tests. Investigate and add tests for uncovered elements.

### Q6
**Answer: B**

**Rationale:** Concretization adds specific input values, preconditions, and expected results.

### Q7
**Answer: B**

**Rationale:** If the model correctly predicts a specific error but the system shows a generic error, this is a system defect.

### Q8
**Answer: B**

**Rationale:** Investigate whether the state should be reachable. If not, remove it.

### Q9
**Answer: B**

**Rationale:** Model coverage and code coverage are different. Model coverage does not imply code coverage.

### Q10
**Answer: B**

**Rationale:** The model predicts expected behavior, serving as an oracle for generated tests.

### Q11
**Answer: B**

**Rationale:** A model defect means the model does not match requirements.

### Q12
**Answer: B**

**Rationale:** 8 feasible / 10 total = 80% realistic target.

### Q13
**Answer: B**

**Rationale:** Coverage reports should include percentage, uncovered elements, and trends.

### Q14
**Answer: B**

**Rationale:** Mapping model elements to system elements is part of concretization.

### Q15
**Answer: B**

**Rationale:** If the model is correct, the system behaving differently indicates a system defect.
