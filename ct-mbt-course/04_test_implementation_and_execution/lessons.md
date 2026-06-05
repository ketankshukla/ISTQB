# Chapter 4 — Test Implementation and Execution: Lessons

---

## 4.1 Abstract vs. Concrete Test Cases

### Abstract Test Case

**Definition:** A test case described at the model level without specific data or implementation details.

**Characteristics:**
- Describes the sequence of states/transitions
- Uses symbolic or generic data
- Independent of the SUT implementation
- Generated directly from the model

**Example:**
```
Abstract Test Case: Login Flow
1. Start in "Idle" state
2. Trigger "enter credentials" transition
3. Verify transition to "Logged In" state
4. Trigger "logout" transition
5. Verify transition to "Idle" state
```

### Concrete Test Case

**Definition:** An executable test case with specific data, preconditions, and expected results mapped to the SUT.

**Characteristics:**
- Contains actual input values
- Maps to specific UI elements, API endpoints, or functions
- Includes expected outputs
- Can be executed against the SUT

**Example:**
```
Concrete Test Case: Login Flow
Precondition: User "testuser" exists with password "TestPass123!"
1. Navigate to login page (https://app.example.com/login)
2. Enter username: "testuser"
3. Enter password: "TestPass123!"
4. Click "Login" button
5. Expected: Redirect to dashboard page (https://app.example.com/dashboard)
6. Click "Logout" link
7. Expected: Redirect to login page
```

### Comparison

| Aspect | Abstract Test | Concrete Test |
|--------|--------------|---------------|
| Data | Symbolic/generic | Specific values |
| Implementation | Independent | Mapped to SUT |
| Executability | Not directly executable | Executable |
| Source | Generated from model | Created by concretization |
| Maintenance | Update model | Update concretization |

---

## 4.2 Concretization

### Definition

**Concretization** is the process of transforming abstract test cases into concrete, executable test cases.

**What Concretization Adds:**
1. **Data values:** Replace symbolic inputs with actual test data
2. **UI mappings:** Map model actions to specific UI elements or API calls
3. **Preconditions:** Set up the required state before test execution
4. **Expected results:** Map model states to observable SUT outputs
5. **Environment setup:** Configure test environment, databases, services

### Concretization Process

**Step 1: Data Selection**
```
Abstract: "Enter valid username and password"
Concrete: "Enter username='john_doe', password='SecurePass123!'"
```

**Step 2: UI/API Mapping**
```
Abstract: "Trigger login transition"
Concrete: "Click the 'Sign In' button on the login page" or "POST /api/login with credentials"
```

**Step 3: Oracle Mapping**
```
Abstract: "Verify Logged In state"
Concrete: "Assert that URL is /dashboard and 'Welcome' message is displayed"
```

**Step 4: Environment Setup**
```
Abstract: "User exists in system"
Concrete: "Insert user record into test database before test execution"
```

### Automated Concretization

**Approach:** Use scripts or tools to automatically map abstract tests to concrete implementations.

**Benefits:**
- Faster than manual concretization
- Consistent mapping
- Can be re-run when the SUT changes

**Challenges:**
- Requires upfront investment in mapping rules
- UI changes may break mappings
- Complex mappings may need manual intervention

---

## 4.3 Test Execution Approaches

### Manual Execution

**Description:** Human tester follows the concrete test case and observes results.

**When to Use:**
- Exploratory testing scenarios
- Complex UI interactions that are hard to automate
- Early testing before automation is ready
- Tests that require human judgment

**Challenges:**
- Time-consuming
- Inconsistent execution
- Difficult to reproduce exactly

### Automated Execution

**Description:** Test scripts execute against the SUT automatically.

**Tools:**
- UI automation: Selenium, Playwright, Cypress
- API testing: REST Assured, Postman, Karate
- Unit testing: JUnit, pytest, NUnit

**When to Use:**
- Regression testing
- Large test suites
- CI/CD pipelines
- Repetitive tests

**Benefits:**
- Fast and repeatable
- Can run unattended
- Consistent execution

### Simulator-Based Execution

**Description:** Tests execute against a simulator that imitates the SUT or its environment.

**When to Use:**
- SUT not yet available (testing against a model)
- Dangerous or expensive real-world testing
- Isolating components for testing
- Load testing without affecting production

**Example:**
Testing flight control software using a flight simulator instead of a real aircraft.

---

## 4.4 The Oracle Problem in MBT

### What Is the Oracle Problem?

**Definition:** Determining the expected outcome for a given test input. For complex systems, knowing what "correct" behavior looks like is difficult.

**In MBT:**
The model serves as the oracle:
- Model predicts the next state given an input
- Test checks if the SUT reaches the predicted state
- If not, there is a discrepancy

**Example:**
```
Model: Idle --login(valid)--> Logged In
Test: Execute login with valid credentials
Oracle: SUT should be in "Logged In" state (dashboard displayed)
Result: If dashboard is displayed → PASS; if error page shown → FAIL
```

### Types of Oracles in MBT

**1. Model as Oracle:**
- The model predicts expected behavior
- Most common in MBT
- Requires the model to be correct

**2. Reference Implementation:**
- Compare SUT against a known-good implementation
- Useful when migrating or refactoring

**3. Requirements-Based Oracle:**
- Expected results derived from formal requirements
- Manual specification of expected outputs

**4. Statistical Oracle:**
- Expected results are probabilistic
- Used for non-deterministic systems

**5. Metamorphic Relations:**
- Expected relationship between inputs and outputs
- "If input increases by X, output should increase by Y"

### Handling Non-Determinism

**Challenge:** Some systems have non-deterministic behavior (same input may produce different outputs).

**Solutions:**
- Define acceptable output sets rather than single expected outputs
- Use statistical oracles
- Run tests multiple times
- Model the non-determinism explicitly

---

## 4.5 Test Failure Analysis

### When a Test Fails

A test failure in MBT can be caused by:

**1. SUT Defect (Bug in the System):**
- The SUT does not behave as specified
- Most common cause of test failures
- **Action:** Log a defect, fix the SUT, re-run test

**2. Model Defect (Bug in the Model):**
- The model does not correctly represent the intended behavior
- Model may be outdated or incorrectly specified
- **Action:** Fix the model, regenerate tests, re-run

**3. Concretization Error:**
- The mapping from abstract to concrete test is wrong
- Wrong data values, wrong UI elements, wrong API endpoints
- **Action:** Fix the concretization logic, re-run

**4. Environment Issue:**
- Test environment not set up correctly
- External services unavailable, database not populated
- **Action:** Fix environment, re-run

**5. Test Tool Issue:**
- Automation script has a bug
- Timing issues, race conditions
- **Action:** Fix the test script, re-run

### Diagnostic Process

**Step 1: Reproduce the Failure**
- Run the test again to confirm it is consistent
- Check if it is a flaky test (intermittent)

**Step 2: Analyze the Discrepancy**
- What did the model predict?
- What did the SUT actually do?
- Where exactly do they diverge?

**Step 3: Determine the Root Cause**
- Is the model correct? (Check requirements)
- Is the concretization correct? (Check mappings and data)
- Is the SUT correct? (Check code, logs)
- Is the environment correct? (Check setup, dependencies)

**Step 4: Fix and Verify**
- Fix the identified root cause
- Re-run the test to confirm it passes
- Check that the fix does not break other tests

---

## Worked Examples

### Worked Example 1: Concretization

**Abstract Test Case:**
```
State: Cart
Action: Apply discount code
Guard: Valid code
Expected: Discount applied, total updated
```

**Concretization Steps:**

1. **Data Selection:**
   - Valid code: "SAVE20" (20% off)
   - Invalid code: "INVALID"
   - Expired code: "OLD10"

2. **UI Mapping:**
   - Navigate to cart page: `/cart`
   - Discount input field: `#discount-code`
   - Apply button: `#apply-discount`
   - Total display: `.cart-total`

3. **Expected Results:**
   - Valid: Total reduced by 20%, message "Discount applied"
   - Invalid: Total unchanged, message "Invalid code"
   - Expired: Total unchanged, message "Code expired"

4. **Preconditions:**
   - User logged in
   - Cart contains items totaling $100
   - Test user has no existing discounts

**Concrete Test Case:**
```
Test: Valid Discount Code
Precondition: User "testuser" logged in, cart total = $100
1. Navigate to /cart
2. Enter "SAVE20" in #discount-code
3. Click #apply-discount
4. Expected: .cart-total displays "$80.00"
5. Expected: Message "Discount applied" visible
```

### Worked Example 2: Failure Analysis

**Scenario:** A generated test fails.

**Test:** Login with valid credentials → Expected: Dashboard
**Actual:** Error page "Invalid credentials"

**Analysis:**

1. **Check concretization:**
   - Username: "testuser" — correct mapping?
   - Password: "Test123!" — correct mapping?
   - Login button: `#login-btn` — correct element?

2. **Check model:**
   - Model says: valid credentials → Logged In
   - Is "testuser" with "Test123!" valid per requirements?
   - Check requirements document: Yes, this user exists

3. **Check SUT:**
   - Check application logs: "User testuser not found"
   - Check database: User exists but was deleted in recent migration

**Root Cause:** Environment issue — test database not populated with required test user after migration.

**Fix:** Update test setup script to create "testuser" before each test run.

### Worked Example 3: Oracle Challenge

**Scenario:** Testing a recommendation engine.

**Model:** User views Product A → Recommended Products state shows related items

**Challenge:** What exactly should be in "related items"? The model cannot predict the exact algorithm output.

**Solutions:**

1. **Set-Based Oracle:**
   - Expected: Recommendations contain at least 3 items
   - Expected: Recommendations do not include Product A itself
   - Expected: All recommended items are in stock

2. **Metamorphic Oracle:**
   - If user views Product A then Product B, recommendations should update
   - If user clears history, recommendations should reset

3. **Statistical Oracle:**
   - Expected: 80% of recommendations are in the same category
   - Run test 10 times, check consistency
