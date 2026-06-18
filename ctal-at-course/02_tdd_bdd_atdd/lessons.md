# 📘 Chapter 2 — TDD, BDD, and ATDD: Lessons

---

## ⭐ 2.1 Test-Driven Development (TDD)

### 🔷 What Is TDD?

TDD is a development practice where tests are written **before** the production code. It follows a short, repeating cycle.

### 🔷 The TDD Cycle: Red → Green → Refactor

**Step 1: Red — Write a failing test**
- Write a test that defines the desired behavior
- The test should fail because the feature doesn't exist yet
- This confirms the test is actually testing something
- Run the test suite and see it fail

**Step 2: Green — Write minimal code to pass**
- Write the simplest possible code to make the test pass
- Don't worry about elegance — just make it pass
- Run the test suite and see it pass
- All previous tests should still pass (no regressions)

**Step 3: Refactor — Improve the code**
- Clean up the code while keeping all tests passing
- Remove duplication, improve naming, simplify logic
- Run the test suite after each small refactoring step
- If tests fail, undo and try a different refactoring

**Repeat:** Continue the cycle for each new behavior.

### 🔷 TDD Benefits

1. **Design improvement:** Writing tests first forces testable design (loose coupling, high cohesion)
2. **Confidence:** A comprehensive test suite gives confidence to refactor and add features
3. **Documentation:** Tests describe what the code should do
4. **Fewer defects:** Defects are caught immediately when the test fails
5. **Faster debugging:** When a test fails, you know exactly what behavior broke

### 🔷 TDD Rules

1. Write no production code except to pass a failing test
2. Write only enough of a test to demonstrate a failure
3. Write only enough production code to pass the test

### 💡 Example: TDD for a Calculator

**Step 1 — Red:**
```
Test: add(2, 3) should return 5
Result: FAIL (method add does not exist)
```

**Step 2 — Green:**
```
Code: function add(a, b) { return 5; }
Result: PASS (hardcoded, but test passes)
```

**Step 3 — Refactor:**
Wait — the test only covers one case. Add another test first.

**Next Red:**
```
Test: add(1, 1) should return 2
Result: FAIL (hardcoded 5 returns 5, not 2)
```

**Next Green:**
```
Code: function add(a, b) { return a + b; }
Result: PASS (both tests pass)
```

**Refactor:**
- The code is already simple and correct
- Tests are clear
- No refactoring needed yet

---

## ⭐ 2.2 Behavior-Driven Development (BDD)

### 🔷 What Is BDD?

BDD is an agile practice that encourages collaboration between developers, testers, and business stakeholders. Tests are written in a **natural language format** that everyone can understand.

### 🔷 BDD Format: Given / When / Then

```
Given [precondition / context]
When [action / event]
Then [expected outcome]
```

**Example:**
```
Given a user has a balance of $100
When the user withdraws $30
Then the balance should be $70
And a receipt should be printed
```

### 🛠️ BDD Tools

BDD scenarios are written in a language like **Gherkin** and executed by tools that translate them into test code.

| Tool | Language | Framework |
|------|----------|-----------|
| **Cucumber** | Ruby, Java, JavaScript, etc. | Multiple |
| **SpecFlow** | .NET | NUnit/xUnit |
| **Behave** | Python | pytest |
| **JBehave** | Java | JUnit |
| **CucumberJS** | JavaScript | Various |

**How it works:**
1. Business analyst writes scenarios in Gherkin
2. Developer/tester writes "step definitions" that map Given/When/Then to code
3. Scenarios are executed as automated tests
4. Results are reported in business-readable format

### 🔷 BDD Benefits

1. **Shared understanding:** Business, testers, and developers use the same language
2. **Living documentation:** Scenarios describe behavior and are always up-to-date
3. **Focus on behavior:** Not "how it works" but "what it should do"
4. **Regression suite:** BDD scenarios become automated acceptance tests

### 🔷 BDD vs. TDD

| Aspect | TDD | BDD |
|--------|-----|-----|
| Focus | Unit-level implementation | Behavior of the system |
| Audience | Developers | Whole team (business + dev + test) |
| Language | Programming language | Natural language (Given/When/Then) |
| Scope | Single unit/function | Feature or user story |
| Written by | Developers | Collaborative (whole team) |

**Relationship:** BDD is a form of TDD at a higher level. BDD scenarios can drive the development of features, and TDD can be used within each feature for unit-level tests.

---

## 🤝 2.3 Acceptance Test-Driven Development (ATDD)

### 🔷 What Is ATDD?

ATDD is a practice where the **whole team collaborates** to define acceptance criteria and acceptance tests **before** development begins.

### 🔷 The ATDD Workshop ("Three Amigos")

**Participants:**
- **Developer:** Understands technical feasibility
- **Tester:** Identifies test scenarios and edge cases
- **Business representative / PO:** Defines business value and acceptance criteria

**Process:**
1. Select a user story from the backlog
2. Discuss and clarify the story
3. Define acceptance criteria together
4. Write acceptance tests in a shared format
5. Agree on the tests before development starts

**Example Workshop Discussion:**

**Story:** "As a customer, I want to apply a discount code so that I receive a reduced price."

**Business:** "The discount should be 10% for code SAVE10."

**Developer:** "Should the discount apply to the subtotal or the total including tax?"

**Business:** "Subtotal only."

**Tester:** "What happens if the code is expired? What if it's already been used? What if it's case-sensitive?"

**Business:** "Expired codes should show 'Code expired.' Used codes show 'Code already used.' Codes are not case-sensitive."

**Resulting Acceptance Tests:**
```
Given a cart with subtotal $100
When the customer applies code "SAVE10"
Then the total should be $90

Given a cart with subtotal $100
When the customer applies expired code "OLD10"
Then an error "Code expired" should display

Given a cart with subtotal $100
When the customer applies already-used code "SAVE10"
Then an error "Code already used" should display
```

### 🔷 ATDD Benefits

1. **Shared understanding:** Everyone agrees on what "done" means before coding
2. **Fewer defects:** Edge cases are identified before implementation
3. **Faster feedback:** Tests are ready as soon as code is written
4. **Better estimates:** Team understands the scope before estimating

### 🔷 ATDD vs. BDD vs. TDD

| Practice | Level | Participants | Output |
|----------|-------|--------------|--------|
| **ATDD** | Acceptance / Feature | Whole team (business, dev, test) | Acceptance criteria + acceptance tests |
| **BDD** | Feature / Scenario | Whole team | Scenarios in Given/When/Then |
| **TDD** | Unit | Developer | Unit tests |

**Relationship:**
- ATDD defines WHAT to build (acceptance level)
- BDD describes HOW the feature should behave (scenario level)
- TDD implements the feature with unit tests (code level)
- Together: ATDD → BDD → TDD (outer to inner)

---

## 🏃 2.4 The Testing Pyramid in Agile

### 🔷 The Pyramid

```
        /\  E2E Tests (few)
       /  \  Slow, expensive, fragile
      /----\
     /  API \  Integration Tests (some)
    / Tests \  Medium speed, medium cost
   /----------\
  /   Unit     \  Unit Tests (many)
 /   Tests      \  Fast, cheap, reliable
/----------------\
```

**Unit Tests:**
- Test individual units in isolation
- Fast (milliseconds per test)
- Reliable (no external dependencies)
- Written by developers using TDD

**Integration Tests:**
- Test interactions between components
- Medium speed (seconds per test)
- Test API contracts, database interactions
- Written by developers and testers

**End-to-End (E2E) Tests:**
- Test complete user flows through the UI
- Slow (seconds to minutes per test)
- Fragile (break with UI changes)
- Written by testers, fewer in number

### 🔷 The Ice Cream Cone Anti-Pattern

```
        /\  Unit Tests (few)
       /  \
      /----\
     /  API \  Integration Tests (some)
    / Tests \  
   /----------\
  /    E2E     \  E2E Tests (many)
 /   Tests      \  Slow, expensive, fragile
/----------------\
```

**Problems with the Ice Cream Cone:**
- Too many E2E tests = slow feedback
- E2E tests are brittle and break frequently
- Bugs are found late in the pipeline
- Difficult to maintain

**Solution:** Push tests down the pyramid. Replace some E2E tests with integration or unit tests.

---

## ❓ 2.5 Selecting the Right Practice

### ❓ When to Use Each Practice

**Use TDD when:**
- Writing new code or features
- You want to improve code design
- You need confidence to refactor
- The behavior is well-understood

**Use BDD when:**
- Collaboration between business and technical team is needed
- You need shared understanding of feature behavior
- You want living documentation
- Stakeholders need to review and approve scenarios

**Use ATDD when:**
- Starting a new user story or feature
- You need to clarify requirements before coding
- The team needs to agree on acceptance criteria
- You want to catch misunderstandings early

### ❓ Combining Practices

**For a new user story:**
1. **ATDD workshop:** Define acceptance criteria with business, dev, and test
2. **BDD scenarios:** Write Given/When/Then scenarios for each acceptance criterion
3. **TDD for each scenario:** Developer writes unit tests, then implementation
4. **Integration tests:** Verify components work together
5. **E2E tests:** Verify the complete user flow (minimal)

---

## 💡 Worked Examples

### 💡 Worked Example 1: TDD Cycle

**Feature:** Password validation function

**Red 1:**
```
Test: isValidPassword("Abc1!") → should return true
Result: FAIL (function does not exist)
```

**Green 1:**
```
Code: function isValidPassword(pw) { return true; }
Result: PASS (hardcoded)
```

**Red 2:**
```
Test: isValidPassword("abc") → should return false (too short, no number, no special char)
Result: FAIL (returns true)
```

**Green 2:**
```
Code: function isValidPassword(pw) {
    return pw.length >= 5 && /[0-9]/.test(pw) && /[!@#$%]/.test(pw);
}
Result: PASS
```

**Refactor:**
```
Code: function isValidPassword(pw) {
    const hasMinLength = pw.length >= 5;
    const hasNumber = /[0-9]/.test(pw);
    const hasSpecial = /[!@#$%]/.test(pw);
    return hasMinLength && hasNumber && hasSpecial;
}
Result: PASS (clearer, but behavior unchanged)
```

### 💡 Worked Example 2: BDD Scenario

**Feature:** User login

**Scenario 1 — Successful login:**
```
Given a registered user with email "user@example.com" and password "Secret1!"
When the user enters valid credentials and clicks "Login"
Then the user should be redirected to the dashboard
And a welcome message should display
```

**Scenario 2 — Invalid password:**
```
Given a registered user with email "user@example.com" and password "Secret1!"
When the user enters email "user@example.com" and password "wrong"
Then an error message "Invalid credentials" should display
And the user should remain on the login page
```

**Scenario 3 — Locked account:**
```
Given a registered user with email "user@example.com" and password "Secret1!"
And the user has failed login 5 times in the last hour
When the user enters valid credentials and clicks "Login"
Then an error message "Account locked" should display
```

### 💡 Worked Example 3: ATDD Workshop Output

**Story:** "As a shopper, I want to filter products by price range so that I can find items within my budget."

**Acceptance Criteria (agreed in workshop):**
1. User can enter minimum and maximum price
2. Only products within the range are displayed
3. If no products match, show "No results found"
4. Price range filter can be combined with category filter
5. Invalid input (negative, non-numeric) shows an error

**Acceptance Tests:**
```
Given products priced at $10, $25, $50, $100
When the user filters by price range $20 to $60
Then products priced $25 and $50 should display
And products priced $10 and $100 should not display

Given products priced at $10, $25
When the user filters by price range $50 to $100
Then "No results found" should display

Given the user enters minimum price "-10"
Then an error "Minimum price cannot be negative" should display
```
