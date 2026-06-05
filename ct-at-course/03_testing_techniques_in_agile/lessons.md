# Chapter 3 — Testing Techniques in Agile: Lessons

---

## 3.1 Exploratory Testing

### What Is Exploratory Testing?

**Definition:** Simultaneous learning about the software, test design, and test execution.

**Key Characteristics:**
- Tester designs and executes tests in real-time
- Learning feeds back into new test ideas
- Not random — guided by skill, risk, and mission
- Heavily reliant on tester expertise and creativity

**Exploratory Testing Is NOT:**
- Ad-hoc testing (unstructured, no planning)
- Random clicking
- A replacement for all structured testing
- Only manual — can include tools to assist

**When to Use:**
- New features with unknown behavior
- Complex areas requiring deep investigation
- Finding defects that scripted tests miss
- After automation covers known paths
- Time-boxed sessions for focused investigation

### Session-Based Test Management (SBTM)

**Structure:**
1. **Charter:** Mission for the session — what to test, why, and how
2. **Time-box:** Fixed duration (e.g., 60-90 minutes)
3. **Test Design and Execution:** Simultaneous during session
4. **Debrief:** Review findings with stakeholders
5. **Log:** Document what was tested, what was found, issues

**Example Charter:**
```
Mission: Explore the checkout flow to find defects related to 
payment validation, discount application, and error handling.

Approach: Try valid and invalid payment methods, apply various 
discount codes, trigger edge cases (0 balance, max discount, 
expired cards).

Duration: 90 minutes
```

**Session Report Template:**
- Date, tester, charter
- Environment and setup
- Test notes (what was tried)
- Defects found
- Issues/questions raised
- Coverage areas
- Time spent on: test design, execution, setup, bug reporting

---

## 3.2 Behavior-Driven Development (BDD)

### Concept

BDD is a **collaborative approach** where behaviors of the system are specified in a shared, ubiquitous language that is understandable by all stakeholders.

**Three Amigos Meeting:**
- Business representative (what problem are we solving?)
- Developer (how will we build it?)
- Tester (what could go wrong?)

**Together they define scenarios that describe the expected behavior.**

### Given/When/Then Format

```
Feature: User login

  Scenario: Successful login with valid credentials
    Given the user is on the login page
    When they enter valid username "alice" and password "secret"
    And click the "Login" button
    Then they are redirected to the dashboard
    And a welcome message "Hello, Alice" is displayed

  Scenario: Failed login with invalid password
    Given the user is on the login page
    When they enter username "alice" and invalid password "wrong"
    And click the "Login" button
    Then an error message "Invalid credentials" is displayed
    And the user remains on the login page
```

**Benefits:**
- Shared understanding across team and stakeholders
- Scenarios serve as living documentation
- Executable specifications when automated
- Reduces ambiguity in requirements

### BDD vs. TDD

| Aspect | BDD | TDD |
|--------|-----|-----|
| Level | System/acceptance level | Unit level |
| Focus | Behavior from user perspective | Code correctness |
| Collaboration | Business, dev, tester together | Primarily developer |
| Language | Ubiquitous language (Given/When/Then) | Unit test assertions |
| Output | Executable specifications | Unit tests |

---

## 3.3 Acceptance Test-Driven Development (ATDD)

### Concept

ATDD is a practice where **acceptance tests are written before implementation**, driving development and clarifying requirements.

**Workflow:**
1. Discuss: Team discusses the story and defines acceptance criteria
2. Distill: Write acceptance tests based on criteria
3. Develop: Implement code to make tests pass
4. Demo: Verify tests pass and demonstrate to stakeholders

**Key Principle:** Tests define the requirements. If the test passes, the requirement is met.

**Benefits:**
- Requirements are clarified before coding
- Tests are ready when development is done
- No "test lag" at the end of the sprint
- Shared understanding of "done"

### ATDD Example

**Story:** As a customer, I want to apply a discount code so that I can save money.

**Acceptance Tests (written before implementation):**
```
Test 1: Valid 10% discount applied
  Input: Order total $100, code "SAVE10"
  Expected: Total becomes $90

Test 2: Invalid code rejected
  Input: Order total $100, code "INVALID"
  Expected: Error "Invalid discount code", total remains $100

Test 3: Expired code rejected
  Input: Order total $100, code "OLD50" (expired)
  Expected: Error "Code expired", total remains $100
```

**Development proceeds until all tests pass.**

---

## 3.4 Test-Driven Development (TDD)

### The Red-Green-Refactor Cycle

**Step 1: Red — Write a failing test**
```java
@Test
public void testDiscountCalculation() {
    Order order = new Order(100.0);
    order.applyDiscount("SAVE10");
    assertEquals(90.0, order.getTotal(), 0.01);
}
// This test fails because applyDiscount is not yet implemented
```

**Step 2: Green — Write minimal code to pass**
```java
public void applyDiscount(String code) {
    if ("SAVE10".equals(code)) {
        this.total = this.total * 0.9;
    }
}
// Test passes now
```

**Step 3: Refactor — Clean up the code**
```java
public void applyDiscount(String code) {
    Discount discount = discountRepository.findByCode(code);
    if (discount != null && discount.isValid()) {
        this.total = this.total * (1 - discount.getPercentage());
    }
}
// Still passes all tests, but cleaner design
```

### TDD Benefits

- **Design improvement:** Writing tests first forces better design
- **Regression safety:** Comprehensive test suite prevents breaking changes
- **Documentation:** Tests document how code should be used
- **Confidence:** Developers can refactor safely
- **Fewer defects:** Issues caught at unit level

### TDD in Agile

- **Developers write unit tests** using TDD
- **Testers may pair with developers** on complex tests
- **Testers focus on higher-level tests:** integration, system, exploratory
- **TDD is NOT a replacement** for all testing — it complements other techniques

---

## 3.5 Test Automation Pyramid

### The Pyramid Model

```
        /\  UI / E2E Tests (few)
       /  \  Slow, brittle, expensive
      /----\
     /  API \  Integration / Service Tests (some)
    / Tests \  Medium speed, cost
   /----------\
  /   Unit     \  Unit Tests (many)
 /   Tests      \  Fast, reliable, cheap
/----------------\
```

**Unit Tests (Base — Many):**
- Test individual units (functions, methods, classes)
- Fast: milliseconds per test
- Reliable: no external dependencies
- Written by developers using TDD
- Should be the majority of automated tests

**Integration / API Tests (Middle — Some):**
- Test interactions between components or services
- Test business logic through APIs
- Medium speed: seconds per test
- Written by developers and testers
- Fewer than unit tests, more than UI tests

**UI / E2E Tests (Top — Few):**
- Test complete user flows through the UI
- Slow: seconds to minutes per test
- Brittle: break with UI changes
- Written by testers and TAEs
- Minimal number — only critical user journeys

### The Ice Cream Cone Anti-Pattern

```
        /\  Unit Tests (few)
       /  \
      /----\
     /  API \  Integration Tests (some)
    / Tests \  
   /----------\
  /    E2E     \  E2E Tests (many)
 /   Tests      \  Slow, brittle, expensive
/----------------\
```

**Problems:**
- Slow feedback — suite takes hours to run
- High maintenance — every UI change breaks tests
- Expensive — cloud execution costs
- Low confidence — flaky tests erode trust

**Solution:** Push tests down the pyramid. Convert UI tests to API tests where possible. Add more unit tests.

---

## 3.6 Agile Testing Quadrants

### Brian Marick's Quadrants

```
                 Technology-Facing
                      /
        Q1          /          Q2
    (Support      /        (Support
     the team)    /          the team)
                  /
    Automated  /    Manual
    Unit &     /    Integration
    Component  /    & System
               /
  -------------/------------- Business-Facing
               /
    Automated  /    Manual
    E2E &    /     Exploratory
    Acceptance/    & Usability
               /
        Q3          \          Q4
    (Critique      \        (Critique
     the product)  \         the product)
                   \
                 Business-Facing
```

**Q1 — Technology-Facing, Support the Team (Automated):**
- Unit tests, component tests
- TDD
- Fast feedback for developers
- Written by developers

**Q2 — Business-Facing, Support the Team (Manual + Automated):**
- Integration tests, system tests
- Story tests, functional tests
- Demo scripts
- Written by testers and developers

**Q3 — Business-Facing, Critique the Product (Manual):**
- Exploratory testing
- Usability testing
- User acceptance testing
- Alpha/beta testing
- Done by testers and users

**Q4 — Technology-Facing, Critique the Product (Tools):**
- Performance testing
- Security testing
- Reliability testing
- Done by specialists with tools

### Using the Quadrants

**Balanced Testing:**
- A healthy agile team has tests in all four quadrants
- Too much Q3 and not enough Q1 = slow feedback, technical debt
- Too much Q1 and not enough Q3 = missed user-facing defects

**Iteration Planning:**
- Plan tests from all relevant quadrants for each story
- Q1 tests happen continuously (TDD)
- Q2 tests happen during the sprint
- Q3 tests happen before release
- Q4 tests happen periodically or for specific stories

---

## Worked Examples

### Worked Example 1: Exploratory Testing Charter

**Story:** Shopping cart feature

**Charter:**
```
Mission: Explore the shopping cart functionality to identify 
defects in add/remove items, quantity updates, price calculations, 
and persistence across sessions.

Approach: 
- Add single and multiple items
- Update quantities (valid and invalid values)
- Remove items individually and clear cart
- Check cart after logout/login
- Apply discounts and verify calculations
- Test with large numbers (boundary values)

Duration: 90 minutes
```

**Session Notes:**
```
10:00 - Started. Added item A ($10) to cart. Cart shows $10. OK.
10:05 - Added item B ($20). Cart shows $30. OK.
10:10 - Changed quantity of item A to 0. Item removed. Total $20. OK.
10:15 - Added 100 of item A. Cart shows $1020. OK.
10:20 - Added item C ($15), applied 10% discount. Cart shows $918. 
        Wait — calculation seems wrong. 
        Expected: ($1020 + $15) * 0.9 = $931.50
        Actual: $918
        BUG: Discount may not apply to new items correctly.
```

### Worked Example 2: BDD Scenario for Story

**Story:** Password reset

**Scenarios:**
```
Feature: Password Reset

  Scenario: Successful password reset
    Given the user is on the forgot password page
    When they enter a registered email "alice@example.com"
    And click "Send Reset Link"
    Then a reset email is sent within 5 minutes
    And a confirmation message is displayed

  Scenario: Unregistered email
    Given the user is on the forgot password page
    When they enter an unregistered email "unknown@example.com"
    And click "Send Reset Link"
    Then a generic confirmation message is displayed
    And no email is sent (to prevent email enumeration)
```

**Note:** The second scenario prevents email enumeration — a security consideration built into the BDD scenario.

### Worked Example 3: Quadrant Analysis

**Scenario:** A team has 500 UI tests, 50 API tests, and 100 unit tests. Their test suite takes 3 hours to run.

**Analysis:**
- Inverted pyramid (ice cream cone)
- Too many UI tests (Q2/Q3) and too few unit tests (Q1)
- Missing performance tests (Q4)
- Limited exploratory testing (Q3)

**Recommendation:**
1. Audit UI tests — which can move to API level?
2. Add unit tests for business logic currently tested only through UI
3. Add performance tests for critical paths
4. Schedule regular exploratory testing sessions
5. Target: 500 unit, 200 API, 50 UI
