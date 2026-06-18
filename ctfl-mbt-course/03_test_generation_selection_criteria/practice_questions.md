# ❓ Chapter 3 — Selection Criteria: Practice Questions

---

### 🔷 Q1 (MBT-3.1, K2)

0-switch coverage in a state machine means:

A. Every transition is exercised at least once
B. Every state is visited at least once
C. Every pair of consecutive transitions is exercised
D. Every path from initial to final state is executed

---

### 🔷 Q2 (MBT-3.1, K2)

1-switch coverage is also known as:

A. State coverage
B. Transition coverage
C. Transition pair coverage
D. Path coverage

---

### 🔷 Q3 (MBT-3.1, K2)

2-switch coverage requires:

A. Every state is visited once
B. Every transition is exercised once
C. Every pair of consecutive transitions is exercised
D. Every variable is tested at its boundary

---

### 🔷 Q4 (MBT-3.1, K3)

A state machine has 6 states and 8 transitions. What is the minimum number of test cases for 1-switch coverage?

A. 6
B. 8
C. 10
D. 14

---

### 🔷 Q5 (MBT-3.2, K2)

A guard condition "amount >= 50" in a state machine should be tested at boundary values:

A. 0, 50, 100
B. 49, 50, 51
C. 50 only
D. 1, 50, 99

---

### 🔷 Q6 (MBT-3.1, K3)

A test suite achieves 100% 2-switch coverage. Which of the following is guaranteed?

A. Only 2-switch coverage
B. 1-switch and 0-switch coverage
C. Only 0-switch coverage
D. Full path coverage

---

### 🔷 Q7 (MBT-3.1, K3)

A state machine has 10 transitions, but 2 are unreachable. The maximum achievable transition coverage is:

A. 100%
B. 80%
C. 20%
D. 0%

---

### 🔷 Q8 (MBT-3.1, K2)

Which coverage criterion provides the MOST thorough testing but requires the LARGEST test suite?

A. 0-switch
B. 1-switch
C. 2-switch
D. Full path coverage

---

### 🔷 Q9 (MBT-3.1, K3)

A state machine has states: S1, S2, S3. Transitions: S1→S2, S2→S3, S1→S3, S3→S1. How many test cases are needed for minimum 1-switch coverage?

A. 3
B. 4
C. 5
D. 6

---

### 🔷 Q10 (MBT-3.3, K2)

The trade-off between higher coverage and test suite size means that:

A. Higher coverage always requires fewer tests
B. Higher coverage typically requires more tests
C. Coverage and test suite size are unrelated
D. Lower coverage always finds more defects

---

### 🔷 Q11 (MBT-3.2, K2)

Boundary testing on model variables is applied to:

A. Only output variables
B. Variables in guard conditions
C. State names
D. Event names

---

### 🔷 Q12 (MBT-3.1, K3)

A test suite covers 12 out of 15 transitions. The transition coverage is:

A. 60%
B. 75%
C. 80%
D. 85%

---

### 🔷 Q13 (MBT-3.1, K2)

Transition pair coverage is another name for:

A. 0-switch coverage
B. 1-switch coverage
C. 2-switch coverage
D. State coverage

---

### 🔷 Q14 (MBT-3.3, K2)

An infeasible path in a state machine is:

A. A path that takes too long to execute
B. A path that cannot be executed in the real system
C. A path with too many transitions
D. A path that generates too many tests

---

### 🔷 Q15 (MBT-3.1, K3)

For a safety-critical system, which coverage criterion is MOST appropriate?

A. 0-switch
B. 1-switch
C. 2-switch
D. State coverage only

---

### 🔷 Q16 (MBT-3.1, K3)

A state machine has 5 states, all reachable. The minimum test cases for 0-switch coverage is:

A. 5
B. 4
C. 3
D. 2

---

### 🔷 Q17 (MBT-3.2, K3)

A guard condition "counter < 5" should be tested with values:

A. 4, 5, 6
B. 0, 5, 10
C. 5 only
D. 1, 3, 5

---

### 🔷 Q18 (MBT-3.1, K2)

Which statement about coverage criteria is TRUE?

A. 2-switch coverage implies 1-switch coverage
B. 0-switch coverage implies 1-switch coverage
C. 1-switch coverage implies 2-switch coverage
D. Coverage criteria are unrelated

---

### 🔷 Q19 (MBT-3.3, K2)

Unreachable states in a state machine affect:

A. Only the model's appearance
B. The maximum achievable state coverage
C. The number of events
D. The model's colors in the diagram

---

### 🔷 Q20 (MBT-3.1, K3)

A test suite achieves 100% 1-switch coverage and 70% 2-switch coverage. What does this mean?

A. All states are visited, but some transition pairs are missing
B. All transitions are exercised, but some consecutive transition pairs are not
C. All paths are executed
D. The test suite is incomplete and should be discarded

---

## ✔️ Answers and Rationales

### 🔷 Q1
**Answer: B**

**Rationale:** 0-switch = state coverage (visit every state).

### 🔷 Q2
**Answer: B**

**Rationale:** 1-switch = transition coverage (exercise every transition).

### 🔷 Q3
**Answer: C**

**Rationale:** 2-switch = transition pair coverage (every pair of consecutive transitions).

### 🔷 Q4
**Answer: B**

**Rationale:** Minimum for 1-switch = number of transitions = 8 (assuming all reachable).

### 🔷 Q5
**Answer: B**

**Rationale:** Boundary values: just below (49), at (50), just above (51).

### 🔷 Q6
**Answer: B**

**Rationale:** 2-switch implies 1-switch, which implies 0-switch.

### 🔷 Q7
**Answer: B**

**Rationale:** 8 reachable / 10 total = 80% maximum achievable.

### 🔷 Q8
**Answer: D**

**Rationale:** Full path coverage is most thorough but requires the largest test suite.

### 🔷 Q9
**Answer: B**

**Rationale:** 4 transitions. Minimum test cases = 4 (each transition must be exercised at least once).

### 🔷 Q10
**Answer: B**

**Rationale:** Higher coverage (more elements to exercise) requires more tests.

### 🔷 Q11
**Answer: B**

**Rationale:** Boundary testing applies to variables in guard conditions.

### 🔷 Q12
**Answer: C**

**Rationale:** 12/15 = 80% coverage.

### 🔷 Q13
**Answer: C**

**Rationale:** Transition pair coverage = 2-switch coverage.

### 🔷 Q14
**Answer: B**

**Rationale:** Infeasible paths cannot be executed in the real system.

### 🔷 Q15
**Answer: C**

**Rationale:** Safety-critical systems benefit from higher coverage (2-switch).

### 🔷 Q16
**Answer: A**

**Rationale:** 0-switch minimum = number of states = 5.

### 🔷 Q17
**Answer: A**

**Rationale:** Boundary values for < 5: just below (4), at boundary (5), just above (6).

### 🔷 Q18
**Answer: A**

**Rationale:** Higher-level coverage implies lower-level coverage. 2-switch → 1-switch → 0-switch.

### 🔷 Q19
**Answer: B**

**Rationale:** Unreachable states reduce maximum achievable state coverage.

### 🔷 Q20
**Answer: B**

**Rationale:** 100% 1-switch = all transitions covered. 70% 2-switch = some transition pairs missing.
