# Chapter 1 — Introduction to Model-Based Testing: Lessons

---

## 1.1 What Is Model-Based Testing?

### Definition

**Model-Based Testing (MBT)** is testing in which test cases are derived in whole or in part from a model that describes some aspect of the system under test.

**Key Components:**
- **Model:** A representation of some aspect of the SUT
- **Test Selection Criteria:** Rules for generating tests from the model
- **Test Cases:** Derived from the model using the criteria
- **SUT:** The actual system being tested

**How MBT Works:**
```
System Requirements → Model Creation → Test Generation (using selection criteria) → Concrete Tests → Test Execution → Result Analysis
```

### The Test Model

**Definition:** A model from which test cases can be generated. It represents aspects of the SUT relevant for testing.

**Characteristics:**
- Abstract (not the same as the implementation)
- Focuses on test-relevant aspects
- Can be partial (does not need to cover everything)
- Can be created before or alongside the SUT

**Example:**
A web application's login feature might be modeled as:
- States: Logged Out, Entering Credentials, Authenticating, Logged In, Error
- Transitions: Enter valid credentials → Logged In, Enter invalid credentials → Error

### MBT vs. Traditional Testing

| Aspect | Traditional Testing | Model-Based Testing |
|--------|--------------------|---------------------|
| Test design | Manual test case creation | Automatic/semi-automatic from models |
| Maintenance | Manual updates when requirements change | Update model, regenerate tests |
| Coverage | Depends on tester's skill | Measurable via model coverage |
| Repeatability | Manual tests vary | Consistent generation from model |
| Documentation | Separate test specs | Model serves as documentation |

---

## 1.2 Benefits of MBT

### 1. Automation of Test Design

**Benefit:** Test cases are generated automatically from models, reducing manual effort.

**Example:**
- Manual: Tester writes 100 test cases by hand
- MBT: Modeler creates a state machine; tool generates 100+ tests automatically

**Impact:** Faster test design, fewer human errors in test creation, consistent test structure.

### 2. Early Defect Detection

**Benefit:** Creating models forces clarification of requirements, revealing ambiguities and inconsistencies early.

**Example:**
A stakeholder says: "Users can log in with email or phone number."
During modeling, questions arise:
- What if both are provided but they don't match?
- Can a user have both email and phone login?
- What happens to existing accounts?

These questions reveal requirement gaps BEFORE implementation.

### 3. Measurable Coverage

**Benefit:** Coverage is defined on the model and can be measured precisely.

**Example:**
- State coverage: "We visited all 6 states in the model"
- Transition coverage: "We covered all 12 transitions"
- This is more precise than "we tested the login feature"

### 4. Improved Maintainability

**Benefit:** When requirements change, update the model and regenerate tests rather than manually updating each test case.

**Example:**
- Traditional: 50 test cases mention "username." Requirement changes to "email address." Update all 50 tests manually.
- MBT: Update the model once; regenerate all 50+ tests automatically.

### 5. Reusability

**Benefit:** Models can be reused for different testing purposes and quality characteristics.

**Example:**
- Same state machine model can generate functional tests, performance tests, and security tests with different selection criteria.

### 6. Documentation

**Benefit:** The model serves as living documentation of the system's behavior.

**Example:**
New team members can read the model to understand how the system works, rather than reading code or outdated documents.

---

## 1.3 Limitations of MBT

### 1. Model Creation Effort

**Limitation:** Creating a good model requires time, skill, and understanding of both the domain and modeling notation.

**Mitigation:**
- Start with critical/small features
- Reuse existing requirements models
- Use tools that support familiar notations

### 2. Expertise Required

**Limitation:** Testers need modeling skills, which may not be common in the team.

**Mitigation:**
- Training for existing testers
- Hire testers with modeling background
- Use simpler notations (decision tables vs. complex UML)

### 3. Not Suitable for All Systems

**Limitation:** MBT works best for systems with well-defined, stateful behavior. It may be less effective for:
- Highly visual/GUI-driven applications where layout matters
- Systems with random or chaotic behavior
- Very simple systems where model creation is not worth the effort

### 4. Model Quality Dependency

**Limitation:** The quality of generated tests depends entirely on the quality of the model.

**Risk:**
- A model that misses important behavior will generate tests that miss that behavior
- "The model is the oracle" — if the model is wrong, tests will be wrong

### 5. Initial Investment

**Limitation:** MBT requires upfront investment in tools, training, and model creation before benefits are realized.

**Reality:**
- ROI is typically positive but takes time to achieve
- Pilot projects are recommended before organization-wide adoption

---

## 1.4 Online vs. Offline MBT

### Offline MBT

**Definition:** Test cases are generated from the model BEFORE execution. They can be reviewed, stored, and executed later.

**Characteristics:**
- Tests are generated as a set of concrete test cases
- Can be reviewed by stakeholders before execution
- Can be added to regression test suites
- Can be traced back to model elements
- More predictable (same generation → same tests)

**Best For:**
- Regulatory environments requiring test documentation
- Regression testing
- Complex systems where test review is important
- Teams transitioning from manual testing

**Example Workflow:**
1. Create model
2. Generate 50 test cases
3. Review and approve test cases
4. Execute test cases against SUT
5. Analyze results

### Online MBT

**Definition:** Test generation and execution happen SIMULTANEOUSLY during test execution. The model is traversed dynamically.

**Characteristics:**
- Tests are generated "on the fly" during execution
- The tool traverses the model, executing actions and checking responses
- Can adapt tests based on SUT responses
- Less predictable (different runs may take different paths)
- Faster feedback (no separate generation phase)

**Best For:**
- Systems with non-deterministic behavior
- Exploratory testing with models
- Continuous testing environments
- Situations where test storage is not required

**Example Workflow:**
1. Create model
2. Start test execution
3. Tool traverses model dynamically
4. At each step, tool executes action and checks response
5. Continues until coverage goal is met or defect is found

### Comparison

| Aspect | Offline MBT | Online MBT |
|--------|-------------|------------|
| Test generation | Before execution | During execution |
| Test storage | Yes (stored test cases) | No (generated on the fly) |
| Review possible | Yes | Limited |
| Adaptability | Low | High |
| Traceability | Easy | Harder |
| Speed to first test | Slower (generation step) | Faster (immediate) |
| Regression testing | Yes | Limited |
| Documentation | Good (stored tests) | Less |

---

## 1.5 MBT in the Test Process

### Where MBT Fits

MBT primarily supports the **test analysis and design** activities in the test process.

**Test Process (ISTQB):**
```
Test Planning → Test Monitoring & Control → Test Analysis → Test Design → Test Implementation → Test Execution → Test Completion
```

**MBT Activities by Phase:**

**Test Analysis:**
- Identify test conditions from requirements
- Determine what aspects of the SUT to model
- Define test objectives

**Test Design:**
- Create the test model
- Define test selection criteria
- Generate abstract test cases from the model

**Test Implementation:**
- Concretize abstract test cases (add data, map to SUT)
- Create test scripts or data
- Set up test environment

**Test Execution:**
- Execute concrete test cases
- Compare results with expected results (model serves as oracle)
- Log defects

**Test Monitoring:**
- Track model coverage
- Measure defect detection effectiveness
- Report on test generation metrics

### MBT and Other Test Activities

**MBT + Risk-Based Testing:**
- Use risk analysis to determine which parts of the SUT to model
- Apply stricter coverage criteria to high-risk areas

**MBT + Test Automation:**
- Generated tests can be automatically executed
- MBT tools can integrate with CI/CD pipelines

**MBT + Manual Testing:**
- MBT does not replace manual testing entirely
- Manual testing complements MBT for exploratory and usability testing

---

## Worked Examples

### Worked Example 1: Identifying MBT Benefits for a Scenario

**Scenario:** A bank is developing a new mobile banking app with complex transaction workflows.

**Benefits of MBT:**
1. **Automation:** Generate hundreds of test cases for transaction combinations automatically
2. **Early detection:** Modeling transaction rules reveals edge cases (e.g., what happens with simultaneous transfers?)
3. **Coverage:** Ensure all transaction states (pending, completed, failed, reversed) are visited
4. **Maintainability:** When transaction rules change, update the model and regenerate all tests
5. **Documentation:** New developers can read the transaction model to understand business rules

### Worked Example 2: Online vs. Offline Decision

**Scenario:** A medical device manufacturer needs to test a patient monitoring system.

**Decision:**
- **Regulatory requirement:** All tests must be documented and traceable to requirements
- **System behavior:** Deterministic (same input → same output)
- **Need:** Regression test suite that can be re-run for each release

**Best Choice:** Offline MBT
- Generate and review tests before execution
- Store tests for regulatory documentation
- Re-run same tests for regression

**Counter-Scenario:** A game testing company needs to test AI opponent behavior.

**Best Choice:** Online MBT
- AI behavior is non-deterministic
- Tests adapt based on AI responses
- Exploration is more important than documented regression

### Worked Example 3: MBT in the Test Process

**Scenario:** A team is adopting MBT for an e-commerce checkout system.

**Test Analysis:**
- Test conditions: Payment methods, shipping options, discount codes, guest vs. registered checkout
- Decision: Model the checkout as a state machine (states: Cart → Shipping → Payment → Confirmation)

**Test Design:**
- Create UML state machine with states and transitions
- Define selection criteria: All transitions + boundary values for payment amounts
- Generate abstract test cases

**Test Implementation:**
- Concretize with test data: valid/invalid credit cards, different shipping addresses
- Create test scripts for the test automation framework

**Test Execution:**
- Run tests against the staging environment
- Use model as oracle: "From Payment state with valid card, expect Confirmation state"

**Test Completion:**
- Report: 95% transition coverage achieved, 12 defects found
- Model updated with fixes; tests regenerated for next cycle
