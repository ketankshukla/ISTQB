# ❓ Chapter 1 — Introduction to MBT: Practice Questions

---

### 🔷 Q1 (MBT-1.1, K2)

Which statement BEST describes Model-Based Testing?

A. Testing performed by human models to find defects
B. Test cases are generated from models describing system behavior
C. Testing that only uses mathematical models
D. Manual testing guided by test scripts

---

### 🔷 Q2 (MBT-1.2, K2)

The PRIMARY purpose of creating a model in MBT is to:

A. Replace the need for requirements
B. Provide an abstract representation from which tests can be generated
C. Document code for developers
D. Eliminate the need for testers

---

### 🔷 Q3 (MBT-1.3, K2)

Which of the following is a PRIMARY benefit of MBT?

A. Eliminates the need for all manual testing
B. Systematic test coverage based on selection criteria
C. Reduces the need for requirements documentation
D. Automatically fixes defects in the code

---

### 🔷 Q4 (MBT-1.3, K2)

A test case generated from a model that lacks specific input values is called:

A. A concrete test case
B. An abstract test case
C. An executable test script
D. A selection criterion

---

### 🔷 Q5 (MBT-1.3, K2)

Which of the following is a LIMITATION of MBT?

A. It requires effort to create and maintain the model
B. It cannot be used for state-dependent systems
C. It always generates more tests than needed
D. It eliminates the need for test execution

---

### 🔷 Q6 (MBT-1.1, K2)

In the MBT process, which step comes AFTER test generation?

A. Model creation
B. Test execution
C. Selection criteria definition
D. Requirements analysis

---

### 🔷 Q7 (MBT-1.2, K2)

A model that serves as the source of expected results for generated tests is called:

A. A concrete test case
B. A test oracle
C. A selection criterion
D. An unreachable state

---

### 🔷 Q8 (MBT-1.3, K2)

Which system is MOST appropriate for MBT?

A. A simple static web page with no user interaction
B. An ATM with multiple states and complex state transitions
C. A one-time proof-of-concept prototype
D. A system with completely random behavior

---

### 🔷 Q9 (MBT-1.3, K2)

Creating a model often reveals ambiguities in requirements. This demonstrates which benefit of MBT?

A. Faster test execution
B. Early defect detection
C. Reduced tool costs
D. Elimination of manual testing

---

### 🔷 Q10 (MBT-1.3, K2)

When requirements change, the MOST efficient approach in MBT is to:

A. Keep the old model and manually update tests
B. Update the model and regenerate tests
C. Discard the model and create a new one
D. Stop using MBT

---

### 🔷 Q11 (MBT-1.1, K2)

Which of the following is NOT a typical model type used in MBT?

A. State machine
B. Decision table
C. Use case diagram
D. Network topology map

---

### 🔷 Q12 (MBT-1.3, K2)

MBT is LEAST appropriate for which type of testing?

A. Testing state-dependent behavior
B. Testing combinations of business rules
C. Testing user experience and aesthetics
D. Testing transition sequences

---

### 🔷 Q13 (MBT-1.2, K2)

Traceability in MBT means:

A. Tests can be traced back to model elements and requirements
B. All test cases are executed in sequence
C. The model is traced onto paper
D. Defects are traced to developers

---

### 🔷 Q14 (MBT-1.3, K2)

A team spends 2 weeks creating a model for a system that will be replaced in 1 month. This is:

A. A good investment because all models are valuable
B. Likely not cost-effective due to the short system lifespan
C. Required for all MBT projects
D. The only way to test the system

---

### 🔷 Q15 (MBT-1.3, K2)

The quality of generated tests in MBT depends most directly on:

A. The speed of the test generation tool
B. The quality and accuracy of the model
C. The number of testers on the team
D. The programming language used

---

## ✔️ Answers and Rationales

### 🔷 Q1
**Answer: B**

**Rationale:** MBT generates test cases from models describing system behavior.

### 🔷 Q2
**Answer: B**

**Rationale:** The model is an abstract representation of behavior used for test generation.

### 🔷 Q3
**Answer: B**

**Rationale:** Systematic coverage based on criteria is a primary MBT benefit. It does not eliminate manual testing (A) or fix defects (D).

### 🔷 Q4
**Answer: B**

**Rationale:** Abstract test cases lack specific values. Concrete test cases are executable with specific inputs.

### 🔷 Q5
**Answer: A**

**Rationale:** MBT requires modeling effort, which is a known limitation. MBT is well-suited for state-dependent systems (B).

### 🔷 Q6
**Answer: B**

**Rationale:** MBT process: Requirements → Model → Selection Criteria → Test Generation → Test Execution → Analysis.

### 🔷 Q7
**Answer: B**

**Rationale:** A test oracle provides expected results. In MBT, the model often serves as the oracle.

### 🔷 Q8
**Answer: B**

**Rationale:** ATM state-dependent behavior is ideal for MBT. Simple pages (A), prototypes (C), and random systems (D) are not suitable.

### 🔷 Q9
**Answer: B**

**Rationale:** Requiring ambiguities during modeling is early defect detection — a key MBT benefit.

### 🔷 Q10
**Answer: B**

**Rationale:** Updating the model and regenerating tests is the MBT approach to change. Much faster than manual updates.

### 🔷 Q11
**Answer: D**

**Rationale:** State machines, decision tables, and use case diagrams are common MBT models. Network topology is not a behavioral model.

### 🔷 Q12
**Answer: C**

**Rationale:** User experience and aesthetics are not well-suited to MBT. Behavioral and rules testing (A, B, D) are ideal.

### 🔷 Q13
**Answer: A**

**Rationale:** Traceability in MBT links tests to model elements and requirements.

### 🔷 Q14
**Answer: B**

**Rationale:** MBT upfront effort may not pay off for short-lived systems. ROI improves with longer system lifespan.

### 🔷 Q15
**Answer: B**

**Rationale:** A bad model generates bad tests. Model quality is the most direct factor in generated test quality.
