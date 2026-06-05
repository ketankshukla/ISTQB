# Chapter 3 — Selection Criteria: Exam Traps

## Trap 1: Confusing 0-Switch and 1-Switch Coverage

**Trap:** 0-switch = state coverage. 1-switch = transition coverage.

**Example question:**
> 1-switch coverage in a state machine means:
>
> A. Every state is visited at least once
> B. Every transition is exercised at least once
> C. Every pair of consecutive transitions is exercised
> D. Every possible path is executed

**Correct answer:** B — 1-switch = transition coverage.

---

## Trap 2: Thinking 100% Coverage Is Always Achievable

**Trap:** Infeasible paths may make 100% coverage impossible.

**Example question:**
> A state machine has 10 transitions, but 2 transitions are unreachable due to implementation constraints. What is the maximum achievable transition coverage?
>
> A. 100%
> B. 80%
> C. 20%
> D. 0%

**Correct answer:** B — Only 8 of 10 transitions are reachable. Maximum = 8/10 = 80%.

---

## Trap 3: Confusing Coverage Criteria Hierarchy

**Trap:** Higher switch numbers require more tests. 2-switch includes 1-switch, which includes 0-switch.

**Example question:**
> A test suite achieves 100% 2-switch coverage. What other coverage levels are guaranteed?
>
> A. Only 2-switch
> B. 1-switch and 0-switch
> C. Only 0-switch
> D. None

**Correct answer:** B — 2-switch implies all transition pairs, which implies all transitions (1-switch), which implies all states (0-switch).

---

## Trap 4: Forgetting Boundary Testing on Guard Variables

**Trap:** Guard conditions in state machines often have boundary values that need testing.

**Example question:**
> A state machine transition has guard "count >= 3". Which values should be tested at the boundary?
>
> A. 0, 3, 10
> B. 2, 3, 4
> C. 1, 5, 10
> D. Only 3

**Correct answer:** B — 2 (just below), 3 (at boundary), 4 (just above).
