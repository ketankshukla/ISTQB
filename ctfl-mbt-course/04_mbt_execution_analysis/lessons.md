# Chapter 4 — MBT Test Execution and Analysis: Lessons

---

## 4.1 Making Abstract Tests Executable

### Abstract vs. Concrete Test Cases

**Abstract Test Case:**
- Generated directly from the model
- Describes the sequence of states and transitions
- May not have specific input values
- Example: "From Idle state, trigger Login event with valid credentials, verify transition to Logged In state"

**Concrete Test Case:**
- Executable against the real system
- Contains specific input values, preconditions, and expected results
- Example: "Enter username 'john_doe' and password 'Pass123!', click Login, verify dashboard page is displayed"

### Concretization Process

**Step 1: Map Model Elements to System Elements**
- Model state "Idle" → System condition: User is on login page
- Model event "Login" → System action: Click login button
- Model guard "Valid credentials" → System check: Username exists and password matches

**Step 2: Add Specific Input Values**
- Abstract: "Enter valid PIN" → Concrete: "Enter PIN 1234"
- Abstract: "Enter invalid PIN" → Concrete: "Enter PIN 9999"

**Step 3: Define Preconditions**
- System must be in the correct initial state
- Required test data must exist
- Environment must be configured appropriately

**Step 4: Define Expected Results**
- Model prediction: Transition to "PIN OK" state → Concrete: Account page is displayed
- Model prediction: Stay in "Card Inserted" state → Concrete: Error message "Invalid PIN" displayed

**Step 5: Define Postconditions**
- System state after test execution
- Cleanup requirements (e.g., log out, reset data)

### Example Concretization

**Abstract Test (from state machine):**
```
State: Idle
Event: Insert Card
Guard: Card is valid
Next State: Card Inserted
Action: Read card
```

**Concrete Test:**
```
Precondition: ATM is in idle state, screen shows "Please insert card"
Input: Insert test card #1234-5678-9012-3456
Expected Result: Screen changes to "Enter PIN", card is read
Postcondition: System is in "Card Inserted" state
```

---

## 4.2 Coverage Measurement

### Types of Coverage in MBT

**Model Coverage:**
- Measures how much of the model is exercised
- State coverage, transition coverage, transition pair coverage

**Code Coverage:**
- Measures how much of the implementation code is executed
- Statement coverage, branch coverage, path coverage

**Requirement Coverage:**
- Measures how many requirements are tested
- Traceability from model elements to requirements

### Coverage Reporting

**What to Report:**
- Coverage percentage achieved vs. target
- Number of states/transitions/pairs covered
- Number of infeasible elements identified
- Trends over time (is coverage improving?)

**Example Coverage Report:**

| Criterion | Target | Achieved | Status |
|-----------|--------|----------|--------|
| State Coverage | 100% | 100% | Pass |
| Transition Coverage | 100% | 95% | Fail |
| Transition Pair Coverage | 90% | 85% | Fail |

**Actions from Coverage Report:**
- Add tests for uncovered transitions
- Investigate why coverage targets are not met
- Review model for unreachable states or infeasible paths

---

## 4.3 Defect Analysis in MBT

### Types of Defects Found Through MBT

**1. Model-System Mismatch:**
- The model predicted one behavior, but the system behaved differently
- Could indicate: defect in the system OR defect in the model

**2. Missing Requirements:**
- The model revealed behavior not documented in requirements
- Could indicate: incomplete requirements or unintended system behavior

**3. Unreachable States:**
- States in the model that cannot be reached in the real system
- Could indicate: dead code, model error, or missing requirements

**4. Infeasible Paths:**
- Paths in the model that cannot be executed in the real system
- Could indicate: model over-simplification or incorrect guards

### Defect Classification

| Defect Type | Cause | Action |
|-------------|-------|--------|
| System defect | System does not match requirements | Fix system |
| Model defect | Model does not match requirements | Fix model |
| Requirement defect | Requirement is ambiguous or wrong | Fix requirement |
| Test defect | Test case is incorrect | Fix test case |

### When a Test Fails

**Step 1: Verify the test is correct**
- Is the concrete test aligned with the abstract test?
- Are the expected results correct?

**Step 2: Check if the model is correct**
- Does the model reflect the actual requirements?
- Is the model missing a state or transition?

**Step 3: Determine the root cause**
- If the model is correct → System defect
- If the model is wrong → Model defect or requirement defect

---

## 4.4 Handling Infeasible Paths and Unreachable States

### Infeasible Paths

An **infeasible path** is a sequence of transitions in the model that cannot occur in the real system.

**Common Causes:**
- Guard conditions in the model are not mutually exclusive in reality
- Implementation constraints prevent certain sequences
- Model abstraction omits real-world limitations

**Handling:**
- Document infeasible paths
- Exclude them from coverage calculations
- Update the model if the path should be feasible
- Add a comment explaining why the path is infeasible

### Unreachable States

An **unreachable state** is a state in the model that cannot be reached from the initial state.

**Common Causes:**
- Missing transitions in the model
- Implementation does not support reaching that state
- Model copied from a different system version

**Handling:**
- Verify whether the state should be reachable
- If yes: Add missing transitions or fix implementation
- If no: Remove the state from the model or mark as deprecated

---

## Worked Example: Coverage Analysis

**Scenario:** A test suite was generated from an ATM state machine and executed.

**Results:**
- 50 tests executed
- 48 passed, 2 failed
- Coverage: 100% states, 95% transitions, 80% transition pairs

**Analysis:**

**Coverage Gap:**
- Missing 5% transition coverage: 1 transition not exercised
- Missing 20% transition pair coverage: Several pairs not exercised

**Failed Tests:**
- Test 23: Model predicted "Card retained" after 3 invalid PINs, but system ejected card
  - Analysis: Model correct, system defect (retention logic broken)
- Test 41: Model predicted "Insufficient funds" message, but system showed generic error
  - Analysis: System defect (error message mapping incorrect)

**Recommendations:**
1. Fix system defects in card retention and error messaging
2. Add 1 test to cover the missing transition
3. Add 3 tests to cover missing transition pairs
4. Re-run tests after fixes
