# Chapter 1 — Risk-Based Testing: Practice Questions

---

### Q1 (TTA-1.1, K2)

Which of the following is a TECHNICAL risk that a technical test analyst would focus on?

A. The project deadline may be missed
B. The authentication module uses a custom encryption algorithm
C. The testing budget is insufficient
D. The product manager is unavailable

---

### Q2 (TTA-1.2, K3)

A module has high cyclomatic complexity and handles financial transactions. The MOST appropriate combination of test techniques is:

A. Usability testing and exploratory testing
B. Control flow testing with branch coverage and decision table testing
C. Only manual regression testing
D. Compatibility testing on different browsers

---

### Q3 (TTA-1.1, K2)

FMEA (Failure Mode and Effects Analysis) is:

A. A top-down technique starting from system failure
B. A bottom-up technique analyzing component failure modes
C. A type of performance testing
D. A tool for automated test execution

---

### Q4 (TTA-1.2, K3)

A system must process 50,000 transactions per second. Which test technique is MOST appropriate for this risk?

A. Static code analysis
B. Load testing and performance profiling
C. Code review
D. Unit testing with mock objects

---

### Q5 (TTA-1.3, K2)

Fault tree analysis is characterized by:

A. Analyzing each component for potential failure modes
B. Starting with a top-level failure and identifying contributing events
C. Testing the system under maximum load
D. Reviewing code for style violations

---

### Q6 (TTA-1.2, K3)

A web application has a high risk of SQL injection attacks. The MOST appropriate testing techniques are:

A. Usability testing and accessibility testing
B. Static security analysis (SAST) and penetration testing
C. Performance testing and load testing
D. Compatibility testing on mobile devices

---

### Q7 (TTA-1.3, K3)

In FMEA, the Risk Priority Number (RPN) is calculated as:

A. Severity + Likelihood + Detectability
B. Severity x Likelihood x Detectability
C. Severity / (Likelihood x Detectability)
D. Likelihood - Detectability

---

### Q8 (TTA-1.1, K2)

Which of the following is NOT typically a technical risk?

A. High code complexity
B. Memory leak in the server component
C. Project schedule slippage
D. Weak input validation

---

### Q9 (TTA-1.2, K3)

A module with many concurrent threads has a high risk of race conditions. The MOST appropriate test technique is:

A. Static analysis for thread safety
B. Usability testing
C. Accessibility testing
D. Compatibility testing

---

### Q10 (TTA-1.3, K2)

The primary purpose of risk-based testing from a technical perspective is to:

A. Reduce the testing budget
B. Focus technical testing effort on areas with the highest technical risk
C. Eliminate all project risks
D. Replace manual testing with automated testing

---

### Q11 (TTA-1.2, K3)

A legacy system integration has a high risk of interface failures. The MOST appropriate test technique is:

A. Unit testing of individual components
B. Interface testing and contract testing
C. Usability testing
D. Performance profiling

---

### Q12 (TTA-1.1, K2)

Which of the following risks would MOST likely be identified through static analysis?

A. Slow database queries under load
B. Uninitialized variables and unreachable code
C. Poor user interface design
D. Incomplete requirements

---

### Q13 (TTA-1.3, K3)

In fault tree analysis, a "minimal cut set" is:

A. The smallest set of basic events that cause the top-level failure
B. The maximum number of events that can occur simultaneously
C. A technique for reducing test cases
D. A method for calculating code coverage

---

### Q14 (TTA-1.2, K3)

A system has a high risk of data corruption during system crashes. Which test technique is MOST appropriate?

A. Recovery testing and data integrity testing
B. Usability testing
C. Cosmetic testing
D. Browser compatibility testing

---

### Q15 (TTA-1.1, K2)

A technical test analyst's contribution to risk identification includes:

A. Setting the project budget
B. Reviewing architecture and code for technical risks
C. Hiring additional testers
D. Defining the project schedule

---

### Q16 (TTA-1.2, K3)

A new algorithm with unproven performance characteristics presents a risk. The MOST appropriate test technique is:

A. Manual regression testing
B. Performance profiling and benchmarking
C. Cosmetic inspection
D. Documentation review

---

### Q17 (TTA-1.3, K2)

Which statement about risk-based testing is TRUE?

A. All risks should be tested with equal effort
B. Higher-risk areas should receive more testing effort
C. Risk-based testing eliminates the need for test planning
D. Only project managers can identify risks

---

### Q18 (TTA-1.2, K3)

A system has a high risk of buffer overflow vulnerabilities. The MOST appropriate test techniques are:

A. Buffer overflow testing and static security analysis
B. Usability testing and user surveys
C. Performance testing only
D. Compatibility testing on different platforms

---

### Q19 (TTA-1.1, K2)

Technical debt is an example of:

A. A project risk
B. A technical risk related to maintainability
C. A business risk
D. An external risk

---

### Q20 (TTA-1.3, K3)

A fault tree uses Boolean logic to:

A. Calculate code coverage
B. Model the relationships between events that lead to system failure
C. Generate test cases automatically
D. Measure cyclomatic complexity

---

## Answers and Rationales

### Q1
**Answer: B**

**Rationale:** Custom encryption algorithms are a technical risk (security). Deadlines (A), budgets (C), and staffing (D) are project risks.

### Q2
**Answer: B**

**Rationale:** High complexity requires control flow/branch coverage. Financial transactions require decision table testing for business rules.

### Q3
**Answer: B**

**Rationale:** FMEA is a bottom-up technique analyzing each component for potential failure modes and their effects.

### Q4
**Answer: B**

**Rationale:** High transaction volume is a performance risk. Load testing and performance profiling are the appropriate techniques.

### Q5
**Answer: B**

**Rationale:** Fault tree analysis starts with a top-level failure and works backward to identify contributing events.

### Q6
**Answer: B**

**Rationale:** SQL injection is a security risk. SAST finds code-level vulnerabilities; penetration testing finds exploitable weaknesses.

### Q7
**Answer: B**

**Rationale:** RPN = Severity x Likelihood x Detectability. It multiplies the three factors.

### Q8
**Answer: C**

**Rationale:** Project schedule slippage is a project/business risk, not a technical risk.

### Q9
**Answer: A**

**Rationale:** Race conditions are a concurrency risk. Static analysis can detect thread safety issues.

### Q10
**Answer: B**

**Rationale:** Risk-based testing focuses effort on highest-risk areas. It does not eliminate all risks or reduce budgets.

### Q11
**Answer: B**

**Rationale:** Interface/contract testing validates that systems communicate correctly — appropriate for integration risks.

### Q12
**Answer: B**

**Rationale:** Static analysis finds code-level issues like uninitialized variables and unreachable code without execution.

### Q13
**Answer: A**

**Rationale:** A minimal cut set is the smallest combination of basic events that, if they all occur, cause the top-level failure.

### Q14
**Answer: A**

**Rationale:** Recovery testing verifies system behavior after crashes. Data integrity testing verifies data correctness.

### Q15
**Answer: B**

**Rationale:** Technical test analysts identify technical risks by reviewing architecture, design, and code.

### Q16
**Answer: B**

**Rationale:** Unproven algorithm performance requires profiling and benchmarking to measure actual behavior.

### Q17
**Answer: B**

**Rationale:** Risk-based testing allocates more effort to higher-risk areas. Equal effort (A) would be inefficient.

### Q18
**Answer: A**

**Rationale:** Buffer overflow vulnerabilities require targeted overflow testing and static security analysis.

### Q19
**Answer: B**

**Rationale:** Technical debt (poor code quality, shortcuts) is a maintainability risk — a technical risk.

### Q20
**Answer: B**

**Rationale:** Fault trees use Boolean logic (AND/OR gates) to model how events combine to cause system failure.
