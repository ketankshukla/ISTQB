# Chapter 3 — Test Selection Criteria: Lessons

---

## 3.1 Coverage Criteria for State-Based Models

### State Coverage

**Definition:** Every state in the model must be visited by at least one test case.

**Also Called:** All-states coverage, 0-switch coverage (in some contexts)

**Example:**
```
States: Idle, Login, Dashboard, Error

Test Case 1: Idle → Login → Dashboard (covers Idle, Login, Dashboard)
Test Case 2: Idle → Login → Error (covers Error)

Result: All 4 states covered with 2 test cases.
```

**Strength:** Ensures every state is reachable and can be entered.

**Weakness:** Does not cover transitions or paths. A state could be entered but never exited properly.

### Transition Coverage

**Definition:** Every transition in the model must be traversed by at least one test case.

**Also Called:** All-transitions coverage

**Example:**
```
Transitions:
T1: Idle → Login (event: enter credentials)
T2: Login → Dashboard (guard: valid)
T3: Login → Error (guard: invalid)
T4: Error → Idle (event: retry)
T5: Dashboard → Idle (event: logout)

Test Case 1: Idle → Login → Dashboard → Idle (covers T1, T2, T5)
Test Case 2: Idle → Login → Error → Idle (covers T1, T3, T4)

Result: All 5 transitions covered with 2 test cases.
```

**Strength:** Ensures every transition is tested at least once.

**Weakness:** Does not test sequences of transitions (pairs, paths).

### Transition Pair Coverage (2-Switch Coverage)

**Definition:** Every pair of consecutive transitions (adjacent transition pairs) must be covered.

**Example:**
```
Possible pairs from the example above:
- T1→T2 (Idle → Login → Dashboard)
- T2→T5 (Login → Dashboard → Idle)
- T1→T3 (Idle → Login → Error)
- T3→T4 (Login → Error → Idle)

Test Case 1: Idle → Login → Dashboard → Idle (covers T1→T2, T2→T5)
Test Case 2: Idle → Login → Error → Idle (covers T1→T3, T3→T4)

Result: All 4 pairs covered.
```

**Strength:** Tests interaction between consecutive transitions.

**Weakness:** Does not cover longer paths.

### Path Coverage

**Definition:** Every path through the model is executed.

**Challenge:** Models with loops have infinite paths. Path coverage is typically limited to:
- All paths up to a certain length
- All simple paths (no repeated states)
- All paths with specific coverage of loops (0 times, 1 time, N times)

**Example (no loops):**
```
Paths in a simple model without loops:
Path 1: Start → A → B → End
Path 2: Start → A → C → End

Both paths must be executed for full path coverage.
```

**When to Use:** Small, acyclic models where complete path enumeration is feasible.

---

## 3.2 Data-Driven Selection

### Equivalence Partitioning on Models

**Definition:** Dividing input data into partitions where the system behaves equivalently, and selecting tests from each partition.

**Application to MBT:**
- Guard conditions in state machines often involve data values
- Decision tables already represent equivalence partitions
- Test data selection ensures each partition is tested

**Example:**
```
Guard condition: account_balance >= withdrawal_amount

Partitions:
1. account_balance > withdrawal_amount (sufficient funds)
2. account_balance == withdrawal_amount (exact funds)
3. account_balance < withdrawal_amount (insufficient funds)

Test data: Select values from each partition.
```

### Boundary Value Testing on Models

**Definition:** Testing at the boundaries between equivalence partitions.

**Application to MBT:**
- Boundary values of guard conditions
- Minimum and maximum values in decision tables
- Edge cases in feature combinations

**Example:**
```
Guard: age >= 18

Boundary values: 17 (just below), 18 (exact), 19 (just above)
```

### Data Flow Criteria

**Definition:** Testing based on how data is defined and used.

**Def-Use Pairs:**
- **Definition (def):** Where a variable gets a value
- **Use:** Where the variable is read/used
- **Kill:** Where the variable is destroyed/overwritten

**Coverage Types:**
- **All-defs:** Every definition is covered
- **All-uses:** Every use is covered
- **All-def-use pairs (du-pairs):** Every pair of definition and corresponding use is covered

---

## 3.3 Systematic vs. Random Selection

### Systematic Testing

**Definition:** Selecting test cases according to defined coverage criteria.

**Approach:**
1. Define coverage goal (e.g., all transitions)
2. Generate tests to meet the goal
3. Measure coverage
4. Add tests if goal not met

**Advantages:**
- Measurable coverage
- Structured and repeatable
- Easier to justify to stakeholders
- Can be automated

**Disadvantages:**
- May miss defects in uncovered areas
- Can generate large numbers of tests for complex models
- May not find unexpected behavior

### Random Testing

**Definition:** Selecting test cases randomly from the set of possible paths or inputs.

**Approach:**
1. Define the set of possible tests
2. Randomly select a subset
3. Execute and measure results

**Advantages:**
- Can find unexpected behavior
- Simple to implement
- May find defects that systematic approaches miss
- Scales to large models

**Disadvantages:**
- No guarantee of specific coverage
- Difficult to measure completeness
- May redundantly cover some areas while missing others
- Less justifiable to stakeholders

### Hybrid Approaches

Many MBT tools combine both:
- Systematic coverage for critical paths
- Random testing to explore unexpected behavior
- Risk-based selection focusing on high-risk areas

---

## 3.4 Test Case Length

### Short vs. Long Test Cases

**Short Test Cases:**
- Single transition or simple path
- Easy to debug when they fail
- Faster to execute
- May miss interaction defects

**Long Test Cases:**
- Multiple transitions, complex paths
- Can find defects caused by sequences of actions
- Harder to debug (which step failed?)
- Slower to execute

### Choosing Test Length

**Factors:**
- Test objective (unit vs. integration vs. system)
- Defect history (are defects typically in sequences?)
- Execution time constraints
- Debugging complexity

**Common Practice:**
- Generate a mix of short and medium-length tests
- Use longer tests for end-to-end scenarios
- Use shorter tests for specific transition coverage

---

## 3.5 Coverage Trade-Offs

### Coverage vs. Test Case Count

| Coverage Level | Typical Test Count | Effort | Defect Detection |
|---------------|-------------------|--------|------------------|
| State coverage | Low | Low | Basic |
| Transition coverage | Medium | Medium | Good |
| Transition pair | Higher | Higher | Better |
| Full path | Often infeasible | High | Comprehensive (for small models) |

**Key Principle:** Higher coverage generally means more tests, but with diminishing returns. The optimal coverage depends on risk, criticality, and resources.

### Risk-Based Selection

**Approach:** Apply stricter coverage to high-risk areas, lighter coverage to low-risk areas.

**Example:**
- Payment processing: Transition pair coverage + boundary values
- User profile display: State coverage only
- Admin functions: Full transition coverage

---

## Worked Examples

### Worked Example 1: Applying Coverage Criteria

**Model:**
```
[Idle] --login(valid)--> [Logged In] --view--> [Viewing] --logout--> [Idle]
[Idle] --login(invalid)--> [Error] --retry--> [Idle]
[Logged In] --delete--> [Confirm] --yes--> [Logged In]
[Confirm] --no--> [Logged In]
```

**States:** Idle, Logged In, Viewing, Error, Confirm (5 states)
**Transitions:** 7 transitions

**State Coverage (minimum tests):**
Test 1: Idle → Logged In → Viewing → Idle (covers Idle, Logged In, Viewing)
Test 2: Idle → Error → Idle (covers Error)
Test 3: Logged In → Confirm → Logged In (covers Confirm)

**Transition Coverage (minimum tests):**
Test 1: Idle → Logged In → Viewing → Idle (covers login(valid), view, logout)
Test 2: Idle → Logged In → Confirm → Logged In (covers login(valid), delete, no)
Test 3: Idle → Error → Idle (covers login(invalid), retry)
Test 4: Logged In → Confirm → Logged In (covers delete, yes)

Wait — Test 2 and Test 4 both cover some transitions. Let me optimize:

Test 1: Idle → Logged In → Viewing → Idle (login(valid), view, logout)
Test 2: Idle → Logged In → Confirm → Logged In (login(valid), delete, no)
Test 3: Idle → Error → Idle (login(invalid), retry)
Test 4: Logged In → Confirm → Logged In (delete, yes)

Actually, Test 2 covers delete and no, but not yes. Test 4 covers delete and yes.

Final optimized:
Test 1: Idle → Logged In → Viewing → Idle
Test 2: Idle → Logged In → Confirm(yes) → Logged In
Test 3: Idle → Logged In → Confirm(no) → Logged In
Test 4: Idle → Error → Idle

**Transition Pair Coverage:**
Need to cover pairs like: login→view, view→logout, logout→login, login→delete, delete→yes, delete→no, etc.

Test 1: Idle → Logged In → Viewing → Idle → Error → Idle
(Wait, Idle→Error requires login(invalid), not possible after logout)

Test 1: Idle → Logged In → Viewing → Idle (pairs: login→view, view→logout)
Test 2: Idle → Logged In → Confirm(yes) → Logged In → Viewing → Idle (pairs: login→delete, delete→yes, yes→view, view→logout)
Test 3: Idle → Logged In → Confirm(no) → Logged In → Error → Idle (pairs: login→delete, delete→no, no→login(invalid), invalid→retry)

### Worked Example 2: Boundary Values in Decision Table

**Decision Table:**

| Condition | R1 | R2 | R3 | R4 |
|-----------|----|----|----|----|
| Age >= 18? | Y | Y | N | N |
| Age <= 65? | Y | N | Y | N |
| Action: Approve | X | | | |
| Action: Senior | | X | | |
| Action: Deny | | | X | X |

**Boundary Values for Age:**
- Just below 18: 17
- Exactly 18: 18
- Just above 18: 19
- Just below 65: 64
- Exactly 65: 65
- Just above 65: 66

**Test Data Selection:**
- 17: Deny (R3)
- 18: Approve (R1)
- 19: Approve (R1)
- 64: Approve (R1)
- 65: Senior (R2)
- 66: Senior (R2)

### Worked Example 3: Systematic vs. Random

**Scenario:** A model has 100 possible paths. The team has time to run 20 tests.

**Systematic Approach:**
- Select 20 paths to achieve maximum transition coverage
- Measure: 95% transition coverage achieved
- Known: Exactly what is covered
- Risk: May miss the one transition with the critical bug

**Random Approach:**
- Randomly select 20 paths from 100
- Measure: Coverage varies per run
- Known: Less about what is missed
- Benefit: May stumble on unexpected defect in uncovered transition

**Recommended:** Hybrid
- 15 systematic tests for transition coverage
- 5 random tests for exploration
