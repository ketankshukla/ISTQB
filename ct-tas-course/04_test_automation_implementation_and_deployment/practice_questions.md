# ❓ Chapter 4 — Test Automation Implementation and Deployment: Practice Questions

---

### 🔷 Q1 (TAS-4.1, K2)

Coding standards in automation improve:

A. Only execution speed
B. Maintainability and collaboration
C. Only tool licensing
D. Only test count

---

### 🔷 Q2 (TAS-4.2, K2)

Tests that should run on every commit are:

A. The full regression suite
B. Fast smoke tests
C. Only manual tests
D. Only performance tests

---

### 🔷 Q3 (TAS-4.3, K2)

A flaky test is one that:

A. Always passes
B. Produces inconsistent results with the same code
C. Only runs in production
D. Only tests performance

---

### 🔷 Q4 (TAS-4.4, K2)

Parallel test execution:

A. Always improves reliability
B. Reduces total execution time but requires sufficient infrastructure
C. Only works for unit tests
D. Only increases cost

---

### 🔷 Q5 (TAS-4.1, K2)

Explicit waits are preferred over `Thread.sleep()` because:

A. They are harder to implement
B. They wait only as long as needed, speeding up tests
C. They only work on Windows
D. They only work for APIs

---

### 🔷 Q6 (TAS-4.2, K2)

Quality gates in CI/CD:

A. Slow down development unnecessarily
B. Prevent progression if criteria (like test pass rate) are not met
C. Only apply to manual testing
D. Only apply to production

---

### 🔷 Q7 (TAS-4.3, K2)

Test pass rate is calculated as:

A. Total tests / Failed tests
B. Passed tests / Total tests × 100%
C. Failed tests / Total tests × 100%
D. Execution time / Total tests

---

### 🔷 Q8 (TAS-4.4, K2)

Containerized test execution with Docker provides:

A. Only faster tests
B. Consistent environments and easy parallelization
C. Only manual testing
D. Only UI testing

---

### 🔷 Q9 (TAS-4.1, K2)

A test named `test_1` is:

A. Sufficiently descriptive
B. Poorly named — test names should describe what is being verified
C. Only for unit tests
D. Only for integration tests

---

### 🔷 Q10 (TAS-4.2, K2)

Nightly regression test execution is appropriate for:

A. Smoke tests
B. Full regression suites that take significant time
C. Only unit tests
D. Only on-demand tests

---

### 🔷 Q11 (TAS-4.3, K2)

Trend reports showing pass rate over time help identify:

A. Only today's status
B. Gradual degradation in quality or stability
C. Only tool costs
D. Only team size

---

### 🔷 Q12 (TAS-4.4, K2)

Cloud execution services (Sauce Labs, BrowserStack) are useful for:

A. Only local debugging
B. Cross-browser and cross-device testing without owning infrastructure
C. Only unit testing
D. Only security testing

---

### 🔷 Q13 (TAS-4.1, K2)

The Arrange-Act-Assert pattern:

A. Only works for databases
B. Structures tests into setup, action, and verification phases
C. Only works for mobile
D. Only works for APIs

---

### 🔷 Q14 (TAS-4.2, K2)

A build should fail in CI when:

A. Any test fails
B. Based on defined quality gates (e.g., smoke tests must pass)
C. Only when 50% fail
D. Only on Fridays

---

### 🔷 Q15 (TAS-4.3, K2)

Defect escape rate measures:

A. Only automated tests
B. Production defects as a proportion of total defects found
C. Only manual tests
D. Only test execution time

---

### 🔷 Q16 (TAS-4.4, K2)

Test scheduling should consider:

A. Only running everything constantly
B. Test duration, frequency of change, and business risk
C. Only the manager's preference
D. Only the tool's capability

---

### 🔷 Q17 (TAS-4.1, K2)

Screenshots on test failure are:

A. Optional and unnecessary
B. Essential for debugging UI test failures
C. Only for performance tests
D. Only for security tests

---

### 🔷 Q18 (TAS-4.2, K2)

Smart test selection (running only affected tests):

A. Reduces coverage
B. Speeds up feedback by focusing on relevant tests
C. Only works for monoliths
D. Only works for microservices

---

### 🔷 Q19 (TAS-4.3, K2)

A quality dashboard for management should show:

A. Individual test scripts
B. High-level trends: coverage, pass rate, defect escape rate
C. Only code repositories
D. Only tool licenses

---

### 🔷 Q20 (TAS-4.4, K2)

When a test fails due to an application bug:

A. Ignore it
B. Log a defect and quarantine the test if it blocks the pipeline
C. Delete the test
D. Only re-run manually

---

## ✔️ Answers and Rationales

### 🔷 Q1
**Answer: B**
**Rationale:** Standards = maintainability + collaboration.

### 🔷 Q2
**Answer: B**
**Rationale:** Every commit = fast smoke tests.

### 🔷 Q3
**Answer: B**
**Rationale:** Flaky = inconsistent results.

### 🔷 Q4
**Answer: B**
**Rationale:** Parallel = faster but needs infrastructure.

### 🔷 Q5
**Answer: B**
**Rationale:** Explicit waits = only as long as needed.

### 🔷 Q6
**Answer: B**
**Rationale:** Quality gates = block if criteria not met.

### 🔷 Q7
**Answer: B**
**Rationale:** Pass rate = Passed / Total × 100%.

### 🔷 Q8
**Answer: B**
**Rationale:** Docker = consistent env + parallelization.

### 🔷 Q9
**Answer: B**
**Rationale:** Test names should be descriptive.

### 🔷 Q10
**Answer: B**
**Rationale:** Nightly = full regression (slow).

### 🔷 Q11
**Answer: B**
**Rationale:** Trends = gradual degradation.

### 🔷 Q12
**Answer: B**
**Rationale:** Cloud = cross-browser without owning infra.

### 🔷 Q13
**Answer: B**
**Rationale:** AAA = Arrange, Act, Assert.

### 🔷 Q14
**Answer: B**
**Rationale:** Fail based on quality gates.

### 🔷 Q15
**Answer: B**
**Rationale:** Escape rate = production / total defects.

### 🔷 Q16
**Answer: B**
**Rationale:** Scheduling = duration, change frequency, risk.

### 🔷 Q17
**Answer: B**
**Rationale:** Screenshots = essential for UI debugging.

### 🔷 Q18
**Answer: B**
**Rationale:** Smart selection = faster feedback.

### 🔷 Q19
**Answer: B**
**Rationale:** Dashboard = high-level trends.

### 🔷 Q20
**Answer: B**
**Rationale:** App bug = log defect, quarantine if blocking.
