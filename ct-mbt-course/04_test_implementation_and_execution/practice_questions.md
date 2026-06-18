# ❓ Chapter 4 — Test Implementation and Execution: Practice Questions

---

### 🔷 Q1 (MBT-4.1, K2)

An abstract test case is:

A. Immediately executable against the SUT
B. Described at the model level without specific data or implementation details
C. Only used for manual testing
D. The same as a concrete test case

---

### 🔷 Q2 (MBT-4.2, K2)

Concretization is the process of:

A. Creating the initial model
B. Transforming abstract test cases into concrete, executable test cases
C. Running tests against the SUT
D. Analyzing test results

---

### 🔷 Q3 (MBT-4.4, K2)

In MBT, the model often serves as:

A. The test environment
B. The test oracle for predicting expected results
C. The bug tracking system
D. The deployment pipeline

---

### 🔷 Q4 (MBT-4.5, K2)

A test fails. The SUT behaves as specified in requirements, but the model predicted different behavior. The root cause is likely:

A. An SUT defect
B. A model defect
C. A concretization error
D. An environment issue

---

### 🔷 Q5 (MBT-4.3, K2)

Simulator-based test execution is MOST appropriate when:

A. The SUT is fully available and stable
B. The SUT is not yet available or real-world testing is dangerous/expensive
C. Only manual testing is needed
D. The model is not yet complete

---

### 🔷 Q6 (MBT-4.2, K2)

Which is NOT part of the concretization process?

A. Adding specific data values
B. Mapping model actions to UI elements or API calls
C. Creating the initial test model
D. Defining expected results for the SUT

---

### 🔷 Q7 (MBT-4.5, K3)

An MBT test suddenly fails after a UI redesign. The SUT logic is unchanged. The FIRST thing to check is:

A. The model is outdated
B. The concretization mappings (UI element locators)
C. The test oracle logic
D. The database schema

---

### 🔷 Q8 (MBT-4.4, K2)

A non-deterministic system is one where:

A. The same input always produces the same output
B. The same input may produce different outputs
C. There are no inputs
D. The system never produces output

---

### 🔷 Q9 (MBT-4.3, K2)

Automated test execution is BEST for:

A. Exploratory testing
B. Regression testing and large test suites
C. Tests requiring human judgment
D. One-time tests

---

### 🔷 Q10 (MBT-4.2, K2)

A concrete test case includes all of the following EXCEPT:

A. Specific input data values
B. Mapping to UI elements or API endpoints
C. The abstract model notation
D. Expected observable results

---

### 🔷 Q11 (MBT-4.5, K2)

If a test fails and the model, concretization, and environment are all correct, the failure indicates:

A. A test tool bug
B. An SUT defect
C. Nothing — tests always fail
D. The oracle is wrong

---

### 🔷 Q12 (MBT-4.4, K2)

A statistical oracle is useful when:

A. The expected output is always exact
B. The system behavior is probabilistic or non-deterministic
C. The model is completely correct
D. There are no inputs

---

### 🔷 Q13 (MBT-4.1, K3)

A test case describes: "From Login state, enter valid credentials, expect Dashboard state." Without specific username/password, this is:

A. A concrete test case
B. An abstract test case
C. A model diagram
D. A bug report

---

### 🔷 Q14 (MBT-4.2, K2)

Automated concretization is beneficial because it:

A. Eliminates the need for models
B. Provides consistent mapping and can be re-run when the SUT changes
C. Is always 100% accurate without human review
D. Works only for manual tests

---

### 🔷 Q15 (MBT-4.5, K3)

A previously passing test fails after a new build, but no code changed in the tested area. The investigation should FIRST check:

A. Whether test data or environment dependencies changed
B. Whether to rewrite the entire model
C. Whether the SUT is fundamentally broken
D. Whether to abandon MBT

---

### 🔷 Q16 (MBT-4.3, K2)

Manual test execution is MOST appropriate for:

A. Running 500 regression tests nightly
B. Exploratory testing scenarios requiring human judgment
C. All MBT tests
D. Performance load testing

---

### 🔷 Q17 (MBT-4.4, K2)

Which is a limitation of using the model as the oracle?

A. It requires too much computation
B. If the model is wrong, expected results will be wrong
C. It only works for small models
D. It cannot be automated

---

### 🔷 Q18 (MBT-4.2, K2)

During concretization, preconditions are added to:

A. Make the test longer
B. Set up the required state before test execution
C. Replace the need for a model
D. Document the model structure

---

### 🔷 Q19 (MBT-4.5, K2)

A metamorphic oracle checks:

A. The exact output for a single input
B. Relationships between inputs and outputs across multiple test executions
C. Only the UI layout
D. Database connections only

---

### 🔷 Q20 (MBT-4.1, K2)

The PRIMARY difference between abstract and concrete test cases is:

A. Abstract tests are always better
B. Concrete tests contain specific data and SUT mappings; abstract tests are generic
C. Abstract tests are only for developers
D. Concrete tests do not need expected results

---

## ✔️ Answers and Rationales

### 🔷 Q1
**Answer: B**

**Rationale:** Abstract test = model level, no specific data or implementation details.

### 🔷 Q2
**Answer: B**

**Rationale:** Concretization = transforming abstract tests into executable concrete tests.

### 🔷 Q3
**Answer: B**

**Rationale:** Model often serves as oracle for predicting expected results.

### 🔷 Q4
**Answer: B**

**Rationale:** SUT correct but model predicted differently = model defect.

### 🔷 Q5
**Answer: B**

**Rationale:** Simulators = when SUT unavailable or real-world testing dangerous/expensive.

### 🔷 Q6
**Answer: C**

**Rationale:** Creating the initial model is modeling, not concretization.

### 🔷 Q7
**Answer: B**

**Rationale:** UI redesign = concretization mappings (element locators) likely broken.

### 🔷 Q8
**Answer: B**

**Rationale:** Non-deterministic = same input may produce different outputs.

### 🔷 Q9
**Answer: B**

**Rationale:** Automated execution = best for regression and large suites.

### 🔷 Q10
**Answer: C**

**Rationale:** Abstract model notation is not part of concrete test cases.

### 🔷 Q11
**Answer: B**

**Rationale:** Model, concretization, environment all correct = SUT defect.

### 🔷 Q12
**Answer: B**

**Rationale:** Statistical oracle = for probabilistic/non-deterministic behavior.

### 🔷 Q13
**Answer: B**

**Rationale:** No specific data = abstract test case.

### 🔷 Q14
**Answer: B**

**Rationale:** Automated concretization = consistent mapping, re-runnable.

### 🔷 Q15
**Answer: A**

**Rationale:** No code change in tested area = check data/environment dependencies.

### 🔷 Q16
**Answer: B**

**Rationale:** Manual = exploratory scenarios requiring human judgment.

### 🔷 Q17
**Answer: B**

**Rationale:** Model oracle limitation = if model is wrong, expected results are wrong.

### 🔷 Q18
**Answer: B**

**Rationale:** Preconditions = set up required state before execution.

### 🔷 Q19
**Answer: B**

**Rationale:** Metamorphic oracle = relationships between inputs/outputs across executions.

### 🔷 Q20
**Answer: B**

**Rationale:** Concrete = specific data and SUT mappings; abstract = generic.
