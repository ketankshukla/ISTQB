# ❓ Chapter 5 — Testing Techniques in Agile: Practice Questions

---

### 🔷 Q1 (AT-5.1, K2)

Exploratory testing is BEST described as:

A. Randomly clicking through the application
B. Simultaneously designing and executing tests while learning
C. Following detailed pre-written test scripts
D. A type of automated regression testing

---

### 🔷 Q2 (AT-5.2, K2)

In Session-Based Test Management, a charter is:

A. A detailed test script
B. A mission statement defining what to explore during a session
C. A legal document authorizing testing
D. A type of automated test

---

### 🔷 Q3 (AT-5.3, K2)

Pairwise testing is used to:

A. Test every possible combination of parameters
B. Reduce the number of test cases by testing every pair of values at least once
C. Test only two parameters at a time
D. Replace exploratory testing

---

### 🔷 Q4 (AT-5.4, K2)

Performance testing in agile should:

A. Only be done at the end of the project
B. Be integrated into sprints with smoke tests and acceptance criteria
C. Be skipped to save time
D. Only be done by a separate performance team

---

### 🔷 Q5 (AT-5.5, K2)

Unit tests and component tests belong in which testing quadrant?

A. Q1 (Technology-facing, supporting programming)
B. Q2 (Business-facing, supporting programming)
C. Q3 (Business-facing, critiquing the product)
D. Q4 (Technology-facing, critiquing the product)

---

### 🔷 Q6 (AT-5.1, K3)

A tester is testing a search feature. They start with the happy path, then try special characters, then SQL injection attempts, then very long queries. This is:

A. Scripted testing
B. Exploratory testing
C. Automated testing
D. Performance testing

---

### 🔷 Q7 (AT-5.2, K3)

A tester completes a 90-minute exploratory session and then meets with the test lead to discuss what was tested and what was found. This meeting is called:

A. Sprint review
B. Debrief
C. Retrospective
D. Stand-up

---

### 🔷 Q8 (AT-5.3, K3)

A configuration has 4 browsers, 3 OS versions, and 2 languages. Full combinatorial testing requires 24 tests. Pairwise testing would require approximately:

A. 24 tests
B. 12 tests
C. 6 tests
D. 48 tests

---

### 🔷 Q9 (AT-5.4, K2)

Security scans in a CI pipeline are an example of:

A. Q2 testing
B. Q3 testing
C. Q4 testing
D. Not part of the testing quadrants

---

### 🔷 Q10 (AT-5.5, K3)

Usability testing and user acceptance testing belong in which quadrant?

A. Q1
B. Q2
C. Q3
D. Q4

---

### 🔷 Q11 (AT-5.1, K2)

Which of the following is NOT a characteristic of exploratory testing?

A. Test design and execution happen simultaneously
B. Tests adapt based on findings
C. Follows a rigid, pre-written script
D. Uses tester creativity and domain knowledge

---

### 🔷 Q12 (AT-5.2, K2)

The typical duration of an SBTM session is:

A. 5-10 minutes
B. 60-90 minutes
C. 4-8 hours
D. 1-2 days

---

### 🔷 Q13 (AT-5.3, K3)

Pairwise testing is LEAST appropriate when:

A. Testing browser compatibility
B. Testing API parameter combinations
C. Testing a safety-critical system where missing any combination could be catastrophic
D. Testing configuration options

---

### 🔷 Q14 (AT-5.4, K2)

A performance smoke test that runs on every build verifies:

A. Full system performance under peak load
B. That there are no major performance regressions
C. Only database query performance
D. Network latency only

---

### 🔷 Q15 (AT-5.5, K2)

Load and stress testing belong in which quadrant?

A. Q1
B. Q2
C. Q3
D. Q4

---

### 🔷 Q16 (AT-5.1, K3)

Tour-based exploratory testing involves:

A. Testing while traveling
B. Treating the application like a city and taking guided tours of different areas
C. Only testing tourist-facing features
D. Testing in multiple geographic locations

---

### 🔷 Q17 (AT-5.2, K3)

After an exploratory testing session, the tester should document:

A. Nothing — exploratory testing does not require documentation
B. What was tested, defects found, coverage assessment, and time spent
C. Only the defects found
D. Only the time spent

---

### 🔷 Q18 (AT-5.3, K2)

The fundamental assumption of pairwise testing is:

A. All combinations must be tested
B. Most defects are caused by interactions between two parameters
C. Only two parameters exist in any system
D. Testing more than pairs is always unnecessary

---

### 🔷 Q19 (AT-5.4, K3)

A team adds a new feature that queries a database. The tester should:

A. Only test the feature functionally
B. Test functionality AND check for performance impact
C. Leave performance testing to the end of the project
D. Assume the database is fast enough

---

### 🔷 Q20 (AT-5.5, K2)

BDD scenarios that guide development belong in which quadrant?

A. Q1
B. Q2
C. Q3
D. Q4

---

## ✔️ Answers and Rationales

### 🔷 Q1
**Answer: B**

**Rationale:** Exploratory testing involves simultaneous learning, test design, and execution.

### 🔷 Q2
**Answer: B**

**Rationale:** A charter is the mission statement that guides what to explore in an SBTM session.

### 🔷 Q3
**Answer: B**

**Rationale:** Pairwise tests all pairs of parameter values, reducing cases from exponential to manageable.

### 🔷 Q4
**Answer: B**

**Rationale:** Performance should be integrated into agile sprints, not deferred to the end.

### 🔷 Q5
**Answer: A**

**Rationale:** Unit/component tests are technology-facing and support programming (Q1).

### 🔷 Q6
**Answer: B**

**Rationale:** Adapting tests based on findings during execution is exploratory testing.

### 🔷 Q7
**Answer: B**

**Rationale:** The post-session discussion between tester and lead is the debrief.

### 🔷 Q8
**Answer: B**

**Rationale:** Pairwise typically generates significantly fewer tests than full combinations (often around 12 for these parameters).

### 🔷 Q9
**Answer: C**

**Rationale:** Security scans are technology-facing and critique the product (Q4).

### 🔷 Q10
**Answer: C**

**Rationale:** Usability and UAT are business-facing and critique the product (Q3).

### 🔷 Q11
**Answer: C**

**Rationale:** Following rigid scripts is scripted testing, not exploratory testing.

### 🔷 Q12
**Answer: B**

**Rationale:** SBTM sessions are typically 60-90 minutes — long enough to explore, short enough to stay focused.

### 🔷 Q13
**Answer: C**

**Rationale:** For safety-critical systems, missing combinations could be catastrophic. All combinations may be needed.

### 🔷 Q14
**Answer: B**

**Rationale:** Performance smoke tests catch major regressions quickly, not full load testing.

### 🔷 Q15
**Answer: D**

**Rationale:** Load/stress tests are technology-facing and critique the product (Q4).

### 🔷 Q16
**Answer: B**

**Rationale:** Tour-based testing treats the application like a city with different districts to explore.

### 🔷 Q17
**Answer: B**

**Rationale:** Session reports should document what was tested, defects, coverage, and time.

### 🔷 Q18
**Answer: B**

**Rationale:** Pairwise assumes most defects come from pairs, not higher-order interactions.

### 🔷 Q19
**Answer: B**

**Rationale:** New database features should be tested for both functionality and performance impact.

### 🔷 Q20
**Answer: B**

**Rationale:** BDD scenarios guide development and are business-facing (Q2).
