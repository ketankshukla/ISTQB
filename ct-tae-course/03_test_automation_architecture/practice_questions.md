# ❓ Chapter 3 — Test Automation Architecture: Practice Questions

---

### 🔷 Q1 (TAE-3.1, K2)

The Test Automation Architecture (TAA) is BEST described as:

A. The executable code that runs tests
B. The conceptual design defining structure, components, and interfaces
C. The test management tool used to track results
D. The CI/CD pipeline configuration

---

### 🔷 Q2 (TAE-3.2, K2)

Which TAA layer is responsible for creating or selecting test cases?

A. Test Generation Layer
B. Test Definition Layer
C. Test Execution Layer
D. Test Adaptation Layer

---

### 🔷 Q3 (TAE-3.2, K2)

Which TAA layer interfaces directly with the System Under Test (SUT)?

A. Test Generation Layer
B. Test Definition Layer
C. Test Execution Layer
D. Test Adaptation Layer

---

### 🔷 Q4 (TAE-3.3, K2)

Testware includes all EXCEPT:

A. Test scripts
B. Test data
C. The SUT source code
D. Expected results

---

### 🔷 Q5 (TAE-3.4, K2)

Separation of concerns in a TAA means:

A. Each layer has a single, focused responsibility
B. All layers are combined into one monolithic component
C. Concerns are shared equally across all layers
D. Only one person can work on the TAA at a time

---

### 🔷 Q6 (TAE-3.4, K3)

A team puts database connection strings directly in 100 test scripts. When the database moves to a new server, all 100 scripts must be updated. This is an example of:

A. Good abstraction
B. Tight coupling and lack of separation of concerns
C. Proper testware organization
D. Efficient test design

---

### 🔷 Q7 (TAE-3.2, K3)

In a BDD framework (Cucumber), the Gherkin feature files belong in which TAA layer?

A. Test Generation Layer
B. Test Definition Layer
C. Test Execution Layer
D. Test Adaptation Layer

---

### 🔷 Q8 (TAE-3.3, K2)

A test harness is:

A. The collection of stubs and drivers needed to execute tests
B. The CI/CD pipeline
C. The test management tool
D. The production environment

---

### 🔷 Q9 (TAE-3.4, K3)

The PRIMARY benefit of abstraction in the TAA is:

A. It makes the code longer
B. Changes in one layer do not cascade to other layers
C. It eliminates the need for documentation
D. It makes testing slower

---

### 🔷 Q10 (TAE-3.1, K2)

The relationship between TAA and TAS is:

A. They are the same thing
B. TAA is the conceptual design; TAS is the implementation
C. TAS is the design; TAA is the implementation
D. There is no relationship

---

### 🔷 Q11 (TAE-3.2, K3)

A tool that automatically generates test cases from a state machine model operates primarily in which layer?

A. Test Generation Layer
B. Test Definition Layer
C. Test Execution Layer
D. Test Adaptation Layer

---

### 🔷 Q12 (TAE-3.3, K2)

Expected results in testware are used to:

A. Generate test data
B. Compare against actual results to determine pass/fail
C. Configure the test environment
D. Document the SUT requirements

---

### 🔷 Q13 (TAE-3.4, K3)

A team uses the Page Object Model. The UI changes the locator for the login button from ID to CSS selector. The impact is:

A. All test scripts must be updated
B. Only the Page Object class needs updating
C. The Test Generation Layer must be redesigned
D. The entire TAA must be rebuilt

---

### 🔷 Q14 (TAE-3.2, K2)

The Test Execution Layer is responsible for:

A. Writing test scenarios in natural language
B. Running tests and capturing results
C. Interacting with the SUT's database
D. Generating test data from models

---

### 🔷 Q15 (TAE-3.3, K3)

Which of the following is an example of loose coupling?

A. Test scripts contain hard-coded SQL queries
B. Test scripts call a DatabaseHelper class that encapsulates all SQL
C. Every test directly opens its own browser window
D. Test data is embedded in every test script

---

### 🔷 Q16 (TAE-3.1, K2)

A well-designed TAA should enable:

A. Tight coupling between all layers
B. Reuse of components across projects
C. Monolithic design for simplicity
D. Hard-coding all configuration values

---

### 🔷 Q17 (TAE-3.4, K3)

The DRY (Don't Repeat Yourself) principle in test automation means:

A. Tests should never be repeated
B. Common functionality should be extracted into reusable libraries
C. Each test should be completely unique
D. Tests should not use any libraries

---

### 🔷 Q18 (TAE-3.2, K2)

An interface between the Test Definition Layer and Test Execution Layer typically passes:

A. Raw HTTP requests
B. Executable test scripts or commands
C. Database connection strings
D. UI element locators

---

### 🔷 Q19 (TAE-3.3, K2)

Configuration files in testware should contain:

A. Test assertions and expected results
B. Environment-specific settings like URLs and timeouts
C. The SUT's source code
D. Test execution logs

---

### 🔷 Q20 (TAE-3.4, K3)

A team combines test logic, UI interaction, and database verification into a single 500-line test script. This violates:

A. The principle of separation of concerns
B. The principle of tight coupling
C. No principle — this is good design
D. The test pyramid

---

## ✔️ Answers and Rationales

### 🔷 Q1
**Answer: B**

**Rationale:** TAA is the conceptual/structural design. TAS is the implementation.

### 🔷 Q2
**Answer: A**

**Rationale:** Test Generation Layer creates or selects test cases.

### 🔷 Q3
**Answer: D**

**Rationale:** Test Adaptation Layer interfaces with the SUT.

### 🔷 Q4
**Answer: C**

**Rationale:** SUT source code is not testware. Testware includes scripts, data, harnesses, and expected results.

### 🔷 Q5
**Answer: A**

**Rationale:** Separation of concerns means each layer has a focused responsibility.

### 🔷 Q6
**Answer: B**

**Rationale:** Hard-coding connection strings creates tight coupling between tests and infrastructure.

### 🔷 Q7
**Answer: B**

**Rationale:** Gherkin files define test cases in an executable format — this is the Test Definition Layer.

### 🔷 Q8
**Answer: A**

**Rationale:** A test harness is the collection of stubs and drivers needed to execute tests.

### 🔷 Q9
**Answer: B**

**Rationale:** Abstraction hides implementation details, isolating changes to specific layers.

### 🔷 Q10
**Answer: B**

**Rationale:** TAA is the conceptual design (blueprint). TAS is the implemented solution.

### 🔷 Q11
**Answer: A**

**Rationale:** Generating test cases from models is a Test Generation Layer activity.

### 🔷 Q12
**Answer: B**

**Rationale:** Expected results are compared against actual results to determine pass/fail.

### 🔷 Q13
**Answer: B**

**Rationale:** POM isolates locators in page classes. Only the page object needs updating.

### 🔷 Q14
**Answer: B**

**Rationale:** Test Execution Layer runs tests and captures results.

### 🔷 Q15
**Answer: B**

**Rationale:** Encapsulating SQL in a helper class creates loose coupling between tests and database.

### 🔷 Q16
**Answer: B**

**Rationale:** A well-designed TAA enables reuse of components across projects.

### 🔷 Q17
**Answer: B**

**Rationale:** DRY means extracting common functionality into reusable libraries, not repeating it.

### 🔷 Q18
**Answer: B**

**Rationale:** The Definition Layer passes executable scripts/commands to the Execution Layer.

### 🔷 Q19
**Answer: B**

**Rationale:** Configuration files contain environment-specific settings, not test logic or source code.

### 🔷 Q20
**Answer: A**

**Rationale:** Combining multiple concerns into one script violates separation of concerns.
