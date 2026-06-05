# Chapter 2 — Agile Testing Methods and Techniques: Lessons

---

## 2.1 Test Levels in Agile

### Test Automation Pyramid

The **test automation pyramid** illustrates the ideal distribution of automated tests in agile:

```
       /\
      /  \  <- UI Tests (few, slow, brittle)
     /----\
    /      \ <- Integration/API Tests (moderate)
   /--------\
  /          \ <- Unit Tests (many, fast, reliable)
 /------------\
```

**The Pyramid Explained:**

| Layer | Proportion | Speed | Cost to Maintain | When They Fail |
|-------|-----------|-------|-----------------|----------------|
| **Unit Tests** | Many (70-80%) | Fast (milliseconds) | Low | Indicate specific code issue |
| **Integration Tests** | Some (15-20%) | Moderate (seconds) | Medium | Indicate interface issue |
| **UI Tests** | Few (5-10%) | Slow (minutes) | High | Could be UI, logic, or data issue |

**Why the Pyramid Shape?**

- **Unit tests are fast and cheap:** They run in milliseconds, isolate defects precisely, and are inexpensive to maintain. You want many of them.
- **UI tests are slow and expensive:** They take minutes to run, are brittle (break with UI changes), and when they fail, you don't know if it's the UI, the logic, or the data. You want few of them.
- **Integration tests are in the middle:** They verify that components work together without the overhead of a full UI.

**Common Anti-Pattern: The Ice Cream Cone**

```
       /\
      /  \  <- UI Tests (too many!)
     /----\
    /      \ <- Integration Tests (moderate)
   /--------\
  /          \ <- Unit Tests (too few!)
```

An "ice cream cone" has too many UI tests and too few unit tests. This is inefficient because:
- Tests are slow and delay feedback
- Defect localization is poor
- Maintenance cost is high

**Test Levels in Agile Context:**

**Unit Testing:**
- Written by developers using TDD
- Run on every code commit via CI
- Verify individual units in isolation
- Mock external dependencies

**Integration Testing:**
- Verify components work together
- Test APIs, databases, message queues
- May be written by developers or testers
- Often run in CI after unit tests pass

**System Testing:**
- Verify the complete system meets requirements
- Includes functional and non-functional tests
- Often automated at the API/service level
- Exploratory testing at the UI level

**Acceptance Testing:**
- Verify the system meets business needs
- Often written in BDD format (Given-When-Then)
- Executed by or with business stakeholders
- May be automated or manual

---

## 2.2 Test Types in Agile

### Functional Testing in Agile

**Functional testing** verifies that the system does what it is supposed to do.

In agile, functional testing is:
- **Driven by user stories:** Each story has acceptance criteria that define expected behavior.
- **Automated where possible:** Acceptance tests are automated and run in CI.
- **Performed continuously:** As each story is completed, it is functionally tested.
- **Confirmed in sprint review:** Stakeholders verify that completed stories meet their needs.

### Non-Functional Testing in Agile

**Non-functional testing** verifies how well the system performs (performance, security, usability, reliability).

In agile, non-functional testing is:
- **Considered in definition of done:** Performance, security, and accessibility criteria may be part of the DoD.
- **Automated where possible:** Performance tests and security scans run in CI/CD.
- **Addressed by specialists:** Performance engineers or security experts may be consulted.
- **Evaluated incrementally:** Each increment is tested for non-functional qualities, not just at release.

### Regression Testing in Agile

**Regression testing** ensures that changes have not broken existing functionality.

In agile, regression testing is:
- **Critical:** With frequent changes, regression risk is high.
- **Highly automated:** Manual regression every sprint is impractical.
- **Fast:** The automated regression suite must run quickly (ideally under 10 minutes for unit/integration, under 1 hour for full suite).
- **Continuous:** Regression tests run on every build.

### Confirmation Testing in Agile

**Confirmation testing** (re-testing) verifies that a defect fix works.

In agile, confirmation testing is:
- **Immediate:** When a defect is fixed, it is confirmed within the same sprint.
- **Automated:** The test that found the defect becomes part of the regression suite.
- **Collaborative:** Developers and testers confirm fixes together, often pairing.

---

## 2.3 Acceptance Test-Driven Development (ATDD)

### What is ATDD?

ATDD is a collaborative practice where the team defines acceptance tests before development begins. It ensures that:
- Requirements are understood by all team members before coding starts.
- Tests are designed from the user's perspective.
- The team has a shared definition of "done" for each story.

**ATDD Workflow (The 5 D's):**

1. **Discuss:** Business, developer, and tester discuss the story and identify examples.
2. **Distill:** Examples are refined into concrete, testable acceptance criteria.
3. **Develop:** Code is written to make the acceptance tests pass.
4. **Deliver:** The feature is delivered with passing acceptance tests.
5. **Demo:** The feature is demonstrated to stakeholders.

**Benefits of ATDD:**
- Shared understanding before development
- Tests are ready when development starts
- Acceptance criteria are explicit and unambiguous
- Reduces rework due to misunderstood requirements
- Living documentation in the form of executable tests

**Example ATDD Session:**

**Story:** "As a customer, I want to apply a discount code so that I pay less."

**Discussion (Three Amigos):**
- Business: "The discount should be 10% for codes starting with SAVE."
- Developer: "What if the code is expired?"
- Tester: "What if the code is used twice?"

**Distilled Acceptance Criteria:**
- Valid code (SAVE10) → 10% discount applied
- Expired code → Error: "Code expired"
- Already used code → Error: "Code already used"
- Invalid code → Error: "Invalid code"
- Empty code → No discount (no error)

**Develop:** Code is written to pass these tests.

**Deliver:** Feature is released with passing tests.

**Demo:** Stakeholders verify the feature works as expected.

---

## 2.4 Behavior-Driven Development (BDD)

### What is BDD?

BDD is a development approach that uses natural language constructs to express the behavior of a system. It evolved from TDD and is closely related to ATDD.

**BDD Syntax: Given-When-Then**

```gherkin
Feature: Discount Code Application

  Scenario: Valid discount code
    Given the customer has items totaling $100 in their cart
    When the customer applies discount code "SAVE10"
 Then the total should be $90

  Scenario: Expired discount code
    Given the customer has items totaling $100 in their cart
    When the customer applies expired discount code "SAVE10"
    Then an error "Code expired" should be displayed
    And the total should remain $100
```

**BDD Tools:**
- Cucumber (Ruby, Java, JavaScript)
- SpecFlow (.NET)
- Behat (PHP)
- JBehave (Java)

**BDD vs. TDD vs. ATDD:**

| | TDD | ATDD | BDD |
|---|---|------|-----|
| **Who** | Developer | Team (business, dev, tester) | Team |
| **Level** | Unit | Acceptance | Acceptance/System |
| **Focus** | Code correctness | Business requirements | Behavior from user perspective |
| **Format** | Code (xUnit) | Tests + criteria | Given-When-Then |
| **Audience** | Developers | Team + stakeholders | Team + stakeholders |

**Key Relationship:**
- BDD is a refinement of ATDD that uses specific Given-When-Then syntax.
- ATDD and BDD both operate at the acceptance level, while TDD operates at the unit level.
- All three are complementary: TDD for developers, ATDD/BDD for acceptance.

**Scenario Outlines (Parameterized Scenarios):**

```gherkin
Scenario Outline: Discount code validation
  Given the customer has items totaling $<total> in their cart
  When the customer applies discount code "<code>"
  Then the result should be "<result>"

  Examples:
    | total | code   | result          |
    | 100   | SAVE10 | Total: $90      |
    | 100   | EXPIRED| Error: Expired  |
    | 100   | INVALID| Error: Invalid  |
```

---

## 2.5 Specification by Example

### What is Specification by Example?

Specification by Example (SbE) is a collaborative approach where teams define requirements using concrete examples rather than abstract statements. It ensures:
- Shared understanding of requirements
- Unambiguous acceptance criteria
- Living documentation in the form of executable specifications

**SbE Workflow:**

1. **Collaborative specification:** Business, developers, and testers discuss requirements using concrete examples.
2. **Refine examples:** Ambiguous or incomplete examples are refined until they are clear and testable.
3. **Automate examples:** Examples are automated as acceptance tests.
4. **Validate against examples:** The system is validated against the automated examples.
5. **Living documentation:** The examples serve as documentation that stays current.

**Abstract vs. Concrete Examples:**

| Abstract (Bad) | Concrete (Good) |
|---------------|----------------|
| "The system should validate discount codes" | "Code SAVE10 gives 10% off. Code EXPIRED shows 'Code expired'." |
| "Users should be able to log in" | "User 'john' with password 'Pass123!' logs in and sees dashboard." |
| "The system handles errors gracefully" | "Database timeout shows 'Please try again' and logs error code 5001." |

**Benefits of SbE:**
- Reduces ambiguity in requirements
- Creates shared understanding
- Produces executable documentation
- Reduces rework
- Enables business stakeholders to validate requirements

---

## 2.6 Exploratory Testing

### What is Exploratory Testing in Agile?

Exploratory testing is simultaneous learning, test design, and test execution. In agile, it is essential because:
- Requirements are not fully known upfront.
- Fast feedback is needed beyond what automated tests provide.
- Human judgment is needed for usability, workflow, and edge cases.

**Exploratory Testing in Agile Context:**

Unlike traditional projects where exploratory testing may be unplanned, in agile it is:
- **Structured by charters:** Each session has a mission.
- **Time-boxed:** Sessions are limited to 60-120 minutes.
- **Documented:** Findings are recorded in session reports.
- **Integrated:** Performed throughout the sprint, not just at the end.

**Session-Based Test Management (SBTM) in Agile:**

1. **Create test charters:** Define the mission for each exploratory session.
2. **Time-box sessions:** Typically 60-90 minutes per session.
3. **Execute and learn:** Tester explores, learns, and tests simultaneously.
4. **Record findings:** Bugs, questions, coverage notes, and risks.
5. **Report:** Session reports capture what was tested, what was found, and time spent.

**Example Test Charters for Agile:**

- "Explore the checkout flow with various payment methods to find defects in payment processing"
- "Explore the admin dashboard's user management features for security vulnerabilities"
- "Explore search functionality with different query types to assess result relevance"

**When to Use Exploratory Testing in Agile:**

- **New features:** Before automated tests exist, exploratory testing finds initial defects.
- **Complex features:** Where requirements are unclear or likely to change.
- **Usability testing:** Human judgment needed for user experience.
- **Regression areas:** Where automated tests exist but may miss edge cases.
- **Risk-based testing:** High-risk areas get more exploratory attention.

**Exploratory Testing vs. Automated Testing in Agile:**

| | Automated Testing | Exploratory Testing |
|---|---|---|
| **Purpose** | Regression prevention, fast feedback | Discovering new information, usability |
| **Speed** | Fast (milliseconds to minutes) | Slower (human-paced) |
| **Repeatability** | High | Low |
| **Best for** | Known requirements, stable features | New features, complex workflows |
| **In agile** | Runs in CI/CD on every build | Performed throughout sprint by testers |

---

## 2.7 Collaboration in Agile Testing

### Three Amigos

The **Three Amigos** is a meeting involving:
- **Business representative** (product owner, BA) — knows what is needed
- **Developer** — knows how to build it
- **Tester** — knows what could go wrong

**Purpose:** Discuss and clarify a user story before implementation, ensuring shared understanding and identifying edge cases.

**Outcome:**
- Shared understanding of the story
- Identified edge cases and risks
- Clarified acceptance criteria
- Agreement on "done" for the story

### Pairing Practices

**Developer-Tester Pairing:**
- Tester and developer work together on a story.
- Tester provides test ideas while developer writes code.
- Immediate feedback on testability and edge cases.

**Tester-Business Pairing:**
- Tester and product owner refine acceptance criteria.
- Tester ensures criteria are testable and unambiguous.
- Business representative clarifies business rules.

### Reviewing Practices

**Reviewing Unit Tests:**
- Testers review developers' unit tests for completeness.
- Ensure edge cases are covered.
- Verify test names are descriptive.

**Reviewing Acceptance Tests:**
- Developers and business representatives review acceptance tests.
- Verify they accurately reflect requirements.
- Ensure they are automatable.

---

## Worked Examples

### Worked Example 1: Writing BDD Scenarios

**Story:** "As a bank customer, I want to withdraw cash from an ATM so that I can access my money."

**Write BDD scenarios using Given-When-Then:**

```gherkin
Feature: ATM Cash Withdrawal

  Scenario: Successful withdrawal with sufficient balance
    Given the account balance is $500
    And the ATM has sufficient cash
    When the customer requests $100
    Then the ATM dispenses $100
    And the account balance is updated to $400
    And a receipt is printed

  Scenario: Insufficient funds
    Given the account balance is $50
    When the customer requests $100
    Then an error "Insufficient funds" is displayed
    And no cash is dispensed
    And the balance remains $50

  Scenario: ATM out of cash
    Given the account balance is $500
    And the ATM has $0 available
    When the customer requests $100
    Then an error "ATM out of cash" is displayed
    And no cash is dispensed
```

**Key points:**
- Each scenario has a clear, descriptive name
- Given sets up the context
- When describes the action
- Then describes the expected outcomes
- Multiple Then steps are allowed with "And"

### Worked Example 2: Test Automation Pyramid Application

**Scenario:** A team is automating tests for an e-commerce application. They have:
- 200 automated UI tests (Selenium)
- 50 integration tests (API)
- 100 unit tests (JUnit)

**Task:** Assess the distribution against the test automation pyramid and recommend improvements.

**Analysis:**

Current distribution:
- Unit: 100 (28%)
- Integration: 50 (14%)
- UI: 200 (56%)

This is an **ice cream cone** — too many UI tests, too few unit tests.

**Recommendations:**
1. **Increase unit tests to 500+** (target 70-80% of total)
2. **Increase integration tests to 200** (target 15-20%)
3. **Reduce UI tests to 100** (target 5-10%)
4. **Move tests down the pyramid:**
   - UI tests that verify business logic → Move to integration tests
   - Integration tests that verify single units → Move to unit tests
   - Keep only true end-to-end UI tests (checkout flow, critical paths)

**Benefits of improved distribution:**
- Faster feedback (unit tests run in seconds)
- Easier maintenance (UI tests are brittle)
- Better defect localization (unit test failure = specific code issue)
- Lower cost (unit tests are cheaper to write and maintain)

### Worked Example 3: ATDD Workflow

**Story:** "As a user, I want to reset my password so that I can regain access to my account."

**Step 1: Discuss (Three Amigos)**
- Business: "User enters email, gets a reset link."
- Developer: "Link expires after 24 hours. What if email doesn't exist?"
- Tester: "What if user clicks link twice? What if link is expired?"

**Step 2: Distill (Acceptance Criteria)**
- Valid email → Reset link sent
- Invalid email → Generic message (don't reveal if email exists for security)
- Valid link within 24 hours → Password reset page displayed
- Expired link → Error: "Link expired, request new link"
- Already used link → Error: "Link already used"
- Password strength requirements → Min 8 chars, 1 uppercase, 1 digit

**Step 3: Develop**
- Developer writes code to implement password reset
- Tester writes automated acceptance tests
- Tests run in CI on every commit

**Step 4: Deliver**
- Feature is deployed to staging
- Acceptance tests pass
- Security review completed

**Step 5: Demo**
- Product owner verifies the feature
- Stakeholders confirm it meets needs
- Feedback collected for future improvements
