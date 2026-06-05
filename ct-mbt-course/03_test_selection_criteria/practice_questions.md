# Chapter 3 — Test Selection Criteria: Practice Questions

---

### Q1 (MBT-3.1, K2)

State coverage requires that:

A. Every transition is traversed
B. Every state is visited at least once
C. Every path is executed
D. Every guard condition is false

---

### Q2 (MBT-3.1, K2)

Transition coverage is stronger than state coverage because it:

A. Requires fewer test cases
B. Ensures every transition is traversed, not just every state visited
C. Tests all data combinations
D. Is easier to achieve

---

### Q3 (MBT-3.1, K2)

Transition pair coverage (2-switch) tests:

A. Individual transitions in isolation
B. Pairs of consecutive transitions
C. All possible paths through the model
D. Only the shortest paths

---

### Q4 (MBT-3.2, K2)

Boundary value testing on a model guard condition (age >= 18) would include:

A. Any random age
B. Values at the boundaries: 17, 18, 19
C. Only the minimum and maximum possible ages
D. Only ages within the valid partition

---

### Q5 (MBT-3.2, K2)

Equivalence partitioning for a guard condition divides input data into:

A. Random groups
B. Partitions where the system behaves equivalently
C. Only two groups: valid and invalid
D. Groups based on the modeler's preference

---

### Q6 (MBT-3.3, K2)

Systematic test selection differs from random selection because systematic selection:

A. Is always faster
B. Follows defined coverage criteria
C. Never finds defects
D. Requires no model

---

### Q7 (MBT-3.1, K3)

A model has a state that transitions back to itself (a loop). Achieving full path coverage is:

A. Easy and always recommended
B. Usually infeasible due to infinite paths
C. Required for MBT certification
D. Only possible with manual testing

---

### Q8 (MBT-3.1, K2)

All-transitions coverage ensures:

A. Every state is visited
B. Every transition is traversed at least once
C. Every path is executed
D. Every guard condition is true

---

### Q9 (MBT-3.2, K3)

A decision table has a condition "Order Amount > $100". Boundary value tests would include:

A. $50, $150
B. $99.99, $100, $100.01
C. $0, $100, $1000
D. Only $100

---

### Q10 (MBT-3.3, K2)

Random testing is MOST useful when:

A. Regulatory documentation is required
B. The team wants to explore unexpected behavior beyond defined coverage criteria
C. Coverage must be precisely measured
D. The model is very small

---

### Q11 (MBT-3.1, K2)

A test case that covers the path: State A → State B → State C → State D achieves:

A. Only state coverage
B. Transition coverage of the traversed transitions
C. Full path coverage for the entire model
D. No coverage

---

### Q12 (MBT-3.2, K2)

Data flow coverage focuses on:

A. The visual appearance of the model
B. How variables are defined and used
C. The number of states in the model
D. The programming language used

---

### Q13 (MBT-3.4, K2)

Longer test cases are MORE likely to:

A. Be easier to debug
B. Find defects caused by sequences of actions
C. Execute faster
D. Require fewer resources

---

### Q14 (MBT-3.5, K3)

A team has limited time and must choose coverage criteria for a critical payment system. The BEST approach is:

A. State coverage only — it is the fastest
B. Transition coverage with boundary values for high-risk areas
C. No coverage criteria — use random testing only
D. Full path coverage regardless of time constraints

---

### Q15 (MBT-3.1, K2)

The weakest coverage criterion among the following is:

A. State coverage
B. Transition coverage
C. Transition pair coverage
D. Path coverage

---

### Q16 (MBT-3.2, K2)

Def-use pair coverage in data flow testing ensures:

A. Every variable is used at least once
B. Every definition of a variable is connected to its uses
C. Every state is visited
D. Every transition is traversed

---

### Q17 (MBT-3.3, K2)

Which statement about random testing is TRUE?

A. It guarantees specific coverage levels
B. It can find defects that systematic approaches might miss
C. It is never used in professional testing
D. It requires no model

---

### Q18 (MBT-3.5, K2)

Higher coverage criteria generally produce:

A. Fewer test cases
B. More test cases with diminishing returns
C. Exactly the same number of tests
D. No additional tests

---

### Q19 (MBT-3.1, K3)

A model has 5 states and 8 transitions. The minimum number of test cases needed for transition coverage:

A. Is always exactly 8
B. Depends on the model structure — may be fewer than 8 if one test covers multiple transitions
C. Is always 5
D. Cannot be determined

---

### Q20 (MBT-3.2, K2)

Applying equivalence partitioning to a model with guard condition "x > 0 && x <= 100" produces partitions:

A. x <= 0, 0 < x <= 100, x > 100
B. x = 0, x = 50, x = 100
C. x < 0, x = 0, x > 0
D. Only one partition: valid values

---

## Answers and Rationales

### Q1
**Answer: B**

**Rationale:** State coverage = every state visited at least once.

### Q2
**Answer: B**

**Rationale:** Transition coverage > state coverage because it tests transitions, not just state visits.

### Q3
**Answer: B**

**Rationale:** Transition pair = pairs of consecutive transitions.

### Q4
**Answer: B**

**Rationale:** Boundary values = at the edges: 17 (below), 18 (boundary), 19 (above).

### Q5
**Answer: B**

**Rationale:** Equivalence partitioning = groups where behavior is equivalent.

### Q6
**Answer: B**

**Rationale:** Systematic = follows defined coverage criteria.

### Q7
**Answer: B**

**Rationale:** Loops = infinite paths = full path coverage usually infeasible.

### Q8
**Answer: B**

**Rationale:** All-transitions = every transition traversed at least once.

### Q9
**Answer: B**

**Rationale:** Boundary values at the threshold: just below, at, just above.

### Q10
**Answer: B**

**Rationale:** Random testing = explores unexpected behavior beyond defined criteria.

### Q11
**Answer: B**

**Rationale:** A→B→C→D covers transitions along that path.

### Q12
**Answer: B**

**Rationale:** Data flow = how variables are defined and used.

### Q13
**Answer: B**

**Rationale:** Longer tests = more likely to find sequence-related defects.

### Q14
**Answer: B**

**Rationale:** Critical system = stronger coverage (transition + boundaries) for high-risk areas.

### Q15
**Answer: A**

**Rationale:** State coverage is the weakest; path coverage is the strongest (when feasible).

### Q16
**Answer: B**

**Rationale:** Def-use pairs = every definition connected to its uses.

### Q17
**Answer: B**

**Rationale:** Random testing can find defects systematic approaches miss.

### Q18
**Answer: B**

**Rationale:** Higher coverage = more tests, but with diminishing returns.

### Q19
**Answer: B**

**Rationale:** Minimum tests for transition coverage depends on model structure; one test can cover multiple transitions.

### Q20
**Answer: A**

**Rationale:** Three partitions: x <= 0 (invalid), 0 < x <= 100 (valid), x > 100 (invalid).
