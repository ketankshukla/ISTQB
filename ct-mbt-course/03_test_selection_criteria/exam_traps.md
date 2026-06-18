# 🪤 Chapter 3 — Test Selection Criteria: Exam Traps

## 📊 Trap 1: Thinking State Coverage Is Sufficient

**Trap:** State coverage only visits each state. It does not test transitions or paths. Transition coverage is stronger.

**Example question:**
> A team achieves 100% state coverage. This means:
>
> A. All transitions have been tested
> B. Every state has been visited at least once, but transitions and paths may not be fully tested
> C. All possible paths through the model have been executed
> D. The model is guaranteed to be correct

**Correct answer:** B — State coverage is the weakest criterion. It does not guarantee transition or path coverage.

---

## 📊 Trap 2: Confusing Transition Coverage and Transition Pair Coverage

**Trap:** Transition coverage = each transition once. Transition pair = each adjacent pair of transitions.

**Example question:**
> A test suite covers every individual transition in a model. However, the defect was in a sequence of two transitions. The missing coverage is:
>
> A. State coverage
> B. Transition pair coverage
> C. Path coverage
> D. Boundary value coverage

**Correct answer:** B — Transition pair coverage tests sequences of two transitions. The defect was in a sequence, not a single transition.

---

## 📊 Trap 3: Thinking Full Path Coverage Is Always Achievable

**Trap:** Models with loops have infinite paths. Full path coverage is usually infeasible and is limited to bounded lengths or simple paths.

**Example question:**
> A state machine has a loop (a state can transition back to itself). The team plans to achieve "full path coverage." This is:
>
> A. Easy — just run enough tests
> B. Usually infeasible because loops create infinite paths
> C. Required for all MBT projects
> D. Only possible with online MBT

**Correct answer:** B — Loops create infinite paths. Full path coverage is limited to bounded lengths or simple paths.

---

## 🪤 Trap 4: Thinking Random Testing Is Always Inferior

**Trap:** Random testing can find defects systematic approaches miss. It is a valid complement, not a replacement.

**Example question:**
> A team uses only systematic test selection. They achieve 100% transition coverage but miss a defect. Random testing might have found it because:
>
> A. Random testing is always better
> B. Random testing explores unexpected paths that systematic criteria may not cover
> C. Systematic testing is useless
> D. The model was wrong

**Correct answer:** B — Random testing can explore unexpected paths beyond defined coverage criteria.

---

## 🪤 Trap 5: Confusing Equivalence Partitioning and Boundary Value Testing

**Trap:** Equivalence partitioning selects one representative from each partition. Boundary value testing tests at the edges between partitions.

**Example question:**
> A guard condition checks age >= 21. Equivalence partitioning would select test values:
>
> A. 20, 21, 22
> B. 15 (from below partition), 25 (from above partition)
> C. 18, 21, 30
> D. 0, 50, 100

**Correct answer:** B — Equivalence partitioning = one representative from each partition (below 21, 21 and above). Boundary values would be 20, 21, 22.
