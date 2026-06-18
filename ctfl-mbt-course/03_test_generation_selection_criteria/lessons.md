# 📘 Chapter 3 — Selection Criteria for Test Case Generation: Lessons

---

## 📊 3.1 State Transition Coverage Criteria

### 📊 What are Switch Coverages?

Switch coverage criteria define how many consecutive transitions must be exercised by test cases. They are hierarchical — higher switch numbers require more tests and provide more coverage.

**0-Switch Coverage (State Coverage):**
- Every state in the state machine is visited at least once.
- Minimum test cases = number of states (if reachable).
- Also called "state coverage."

**1-Switch Coverage (Transition Coverage):**
- Every transition in the state machine is exercised at least once.
- Minimum test cases = number of transitions (if all are reachable).
- Also called "transition coverage."

**2-Switch Coverage (Transition Pair Coverage):**
- Every pair of consecutive transitions is exercised at least once.
- For every transition A→B and every transition B→C, the sequence A→B→C must be tested.
- Also called "transition pair coverage" or "adjacent transition coverage."

### 💡 Example: Calculating Coverage

**State Machine:**

```
    [S1] --a--> [S2] --c--> [S4]
      |              |
      | b            | d
      v              v
    [S3] <----------
```

**States:** S1, S2, S3, S4 (4 states)

**Transitions:**
- T1: S1 → S2 (event a)
- T2: S1 → S3 (event b)
- T3: S2 → S4 (event c)
- T4: S2 → S3 (event d)

**0-Switch (State Coverage):**
- Need to visit S1, S2, S3, S4
- Test case: S1 → S2 → S4 (covers S1, S2, S4) + S1 → S3 (covers S3)
- Minimum: 2 test cases

**1-Switch (Transition Coverage):**
- Need to exercise T1, T2, T3, T4
- Test case 1: S1 → S2 → S4 (covers T1, T3)
- Test case 2: S1 → S3 (covers T2)
- Test case 3: S2 → S3 (covers T4)
- Minimum: 3 test cases

**2-Switch (Transition Pair Coverage):**
- Need to exercise all pairs of consecutive transitions
- From S1: T1 followed by T3 (S1→S2→S4) or T1 followed by T4 (S1→S2→S3)
- From S1: T2 ends at S3 (no outgoing from S3 shown)
- Pairs: (T1,T3), (T1,T4), (T2,none)
- Minimum: 2 test cases cover the pairs: S1→S2→S4 and S1→S2→S3

### 📊 Coverage Calculation

**Coverage % = (Covered Elements / Total Elements) × 100**

Example:
- Total transitions = 10
- Covered transitions = 8
- Transition coverage = (8/10) × 100 = 80%

---

## 📏 3.2 Boundary Testing on Models

### 📏 Boundary Testing Applied to State Machines

State machines often include variables that affect guards. Boundary testing on these variables ensures that transitions occur correctly at boundary values.

**Example:**
A guard condition "Balance >= 100" defines a boundary at 100.

**Boundary Test Cases:**
- Balance = 99 (just below boundary) → Guard is false, transition does not occur
- Balance = 100 (at boundary) → Guard is true, transition occurs
- Balance = 101 (just above boundary) → Guard is true, transition occurs

### 🔷 Variables in Guards

Common variables that require boundary testing in state machines:
- Counters (attempts, items, notifications)
- Timers (timeouts, durations)
- Thresholds (balance limits, age limits, amount limits)
- Flags (boolean conditions that change state)

---

## 📊 3.3 Coverage Criteria Selection

### 📊 Choosing the Right Coverage Criterion

| Criterion | Test Suite Size | Defect Detection | When to Use |
|-----------|----------------|-----------------|-------------|
| 0-switch (state) | Small | Low | Smoke testing, quick sanity checks |
| 1-switch (transition) | Medium | Medium | Standard regression testing |
| 2-switch (transition pair) | Large | High | Critical systems, safety-critical |
| Full path | Very large | Very high | Ultra-critical systems (rarely practical) |

**Trade-off:** Higher coverage requires more tests, which takes more time to execute and maintain.

### 🔷 Infeasible Paths

Some paths through a model may be impossible to execute in the real system due to:
- Implementation constraints not captured in the model
- Physical limitations (e.g., "water level above max" in a tank that physically cannot overflow)
- Logical impossibilities (e.g., "account is both active and closed")

**Impact on Coverage:**
- Infeasible paths reduce achievable coverage
- Coverage targets should account for infeasible paths
- 100% coverage may be impossible if infeasible paths exist

---

## 💡 Worked Examples

### 💡 Worked Example 1: Coverage Calculation

**State Machine:**

```
[Idle] --Login--> [Logged In] --Search--> [Searching]
   |                  |                         |
   |--Logout          |--Logout                 |--Results
   |                  |                         |
   v                  v                         v
[Idle]            [Idle]                  [Results]
```

**States:** Idle, Logged In, Searching, Results (4 states)

**Transitions:**
1. Idle → Logged In (Login, valid credentials)
2. Idle → Idle (Logout)
3. Logged In → Searching (Search)
4. Logged In → Idle (Logout)
5. Searching → Results (Results returned)

**Total states = 4, Total transitions = 5**

**Test Suite A:**
- TC1: Idle → Logged In → Searching → Results
- TC2: Idle → Idle (Logout without login)

**Coverage Analysis:**
- States covered: Idle, Logged In, Searching, Results = 4/4 = 100% state coverage
- Transitions covered: T1, T3, T5, T2 = 4/5 = 80% transition coverage
- Missing: T4 (Logged In → Idle)

**Test Suite B (improved):**
- TC1: Idle → Logged In → Searching → Results
- TC2: Idle → Logged In → Idle (Logout)
- TC3: Idle → Idle (Logout)

**Coverage Analysis:**
- States: 4/4 = 100%
- Transitions: 5/5 = 100%

### 💡 Worked Example 2: Transition Pair Coverage

**State Machine:**

```
[Idle] --a--> [Active] --b--> [Processing] --c--> [Complete]
                |              |
                | d            | e
                v              v
            [Suspended]    [Error]
```

**Transitions:**
1. Idle → Active (a)
2. Active → Processing (b)
3. Processing → Complete (c)
4. Active → Suspended (d)
5. Processing → Error (e)

**Transition Pairs to Cover (2-switch):**
- (T1, T2): Idle → Active → Processing
- (T1, T4): Idle → Active → Suspended
- (T2, T3): Active → Processing → Complete
- (T2, T5): Active → Processing → Error

**Minimum Test Cases for 2-switch:**
- TC1: Idle → Active → Processing → Complete (covers T1-T2, T2-T3)
- TC2: Idle → Active → Suspended (covers T1-T4)
- TC3: Idle → Active → Processing → Error (covers T1-T2 again, T2-T5)

Note: TC1 and TC3 both cover the pair (T1, T2). Some pairs may be covered by multiple test cases.
