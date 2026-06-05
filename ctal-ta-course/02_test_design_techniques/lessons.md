# Chapter 2 — Test Design Techniques: Lessons

---

## 2.1 Specification-Based Techniques

Specification-based (black-box) techniques derive test cases from specifications, requirements, user stories, or other external descriptions of the software. You do not need to know the internal code structure.

---

### 2.1.1 Equivalence Partitioning (EP)

**What is Equivalence Partitioning?**

Equivalence partitioning divides the input domain into groups (partitions) where the system is expected to behave the same way for all values within the group. Instead of testing every possible value, you test one representative value from each partition.

**Why it works:** If the system handles one value in a partition correctly, it will likely handle all values in that partition correctly. If it fails for one value, it will likely fail for all.

**Types of Partitions:**
- **Valid partitions:** Input values that the system should accept and process normally
- **Invalid partitions:** Input values that the system should reject or handle as errors

**How to Apply EP:**
1. Identify all input conditions and their ranges
2. For each condition, divide the range into valid and invalid partitions
3. Identify one representative test case for each partition
4. Write test cases for each representative value

**Example: Age Input Field**

> Specification: "The system accepts user ages between 18 and 65 inclusive for registration."

**Partitions:**

| Partition | Range | Type | Representative Value |
|-----------|-------|------|---------------------|
| Valid | 18 - 65 | Valid | 25 |
| Invalid | < 18 | Invalid | 17 |
| Invalid | > 65 | Invalid | 66 |
| Invalid | Non-numeric | Invalid | "abc" |
| Invalid | Empty | Invalid | "" |

**Number of EP test cases:** 5 (one per partition)

**Important Rule:** For each input condition, test at least one valid partition and at least one invalid partition.

**Multiple Input Conditions:**

When there are multiple input conditions, derive partitions for each condition independently.

**Example: Login with Username and Password**

> Specification: "Username: 5-20 characters, alphanumeric. Password: 8-30 characters, at least one uppercase, one lowercase, one digit."

Partitions for Username: Valid (5-20 alphanumeric), Invalid (<5, >20, non-alphanumeric, empty)
Partitions for Password: Valid (8-30 with uppercase, lowercase, digit), Invalid (<8, >30, missing uppercase, missing lowercase, missing digit, empty)

**Counting EP Test Cases:**

For n input conditions with v valid partitions and i invalid partitions each:
- **Weak EP (normal):** Test each partition of each condition at least once. Minimum = max(v for all conditions) + sum(i for all conditions)
- **Strong EP:** Test all combinations of valid partitions plus one invalid partition per condition.

For the CTAL-TA exam, you typically need strong EP (all valid combinations) + one invalid per condition.

**Common Mistakes in EP:**
1. **Forgetting invalid partitions:** Testing only valid inputs misses error handling
2. **Merging independent conditions:** Username and password should have separate partitions
3. **Testing multiple invalid conditions at once:** If both username AND password are invalid, you don't know which caused rejection
4. **Not considering data type partitions:** Non-numeric, empty, null, whitespace

---

### 2.1.2 Boundary Value Analysis (BVA)

**What is Boundary Value Analysis?**

Boundary value analysis tests the boundaries between partitions. Defects cluster at boundaries due to off-by-one errors, loop conditions, and array index issues.

**2-Value BVA (Standard):**

For a range [min, max], test: min-1, min, max, max+1

For the age example (18-65):
- Test: 17, 18, 65, 66

**3-Value BVA (Extended):**

For a range [min, max], test: min-1, min, min+1, max-1, max, max+1

For the age example (18-65):
- Test: 17, 18, 19, 64, 65, 66

**When to use 2-value vs. 3-value:**
- **2-value:** Standard approach, sufficient for most cases
- **3-value:** Higher risk, complex boundary logic, or when explicitly required

**BVA for Multiple Variables:**

Apply BVA to each variable independently while keeping other variables at nominal values (single fault assumption).

**Example: Rectangle Dimensions**

> Specification: "A rectangle has width (1-100) and height (1-100). Calculate area."

2-Value BVA for width: 0, 1, 100, 101
2-Value BVA for height: 0, 1, 100, 101

| Test Case | Width | Height | Expected |
|-----------|-------|--------|----------|
| W-min-1 | 0 | 50 | Reject (invalid width) |
| W-min | 1 | 50 | Area = 50 |
| W-max | 100 | 50 | Area = 5000 |
| W-max+1 | 101 | 50 | Reject (invalid width) |
| H-min-1 | 50 | 0 | Reject (invalid height) |
| H-min | 50 | 1 | Area = 50 |
| H-max | 50 | 100 | Area = 5000 |
| H-max+1 | 50 | 101 | Reject (invalid height) |

**Total test cases:** 8 (4 for width + 4 for height)

**BVA for Output Boundaries:**

Test boundary conditions for outputs too.

> Specification: "Discount is 10% of order total, capped at $100 maximum."

Output boundary: $100 maximum discount
- Test: Order total = $999 → discount = $99.90 (just under boundary)
- Test: Order total = $1000 → discount = $100 (at boundary)
- Test: Order total = $1001 → discount = $100 (capped)

**Common Mistakes in BVA:**
1. **Using BVA without EP:** BVA assumes partitions exist
2. **Forgetting the boundary itself:** Testing min-1 and max+1 but not min and max
3. **Testing multiple boundaries simultaneously:** Changing both width and height to boundaries violates single-fault assumption
4. **Not considering data type boundaries:** Max int, empty string, max string length
5. **Confusing BVA with EP:** EP tests one value per partition. BVA tests boundary values.

---

### 2.1.3 Decision Table Testing

**What is Decision Table Testing?**

Decision table testing is used when system behavior depends on combinations of conditions. It is especially powerful for business rules with multiple interacting conditions.

**Structure:**
- **Conditions:** Inputs or system states that affect the outcome (top section)
- **Actions:** Outputs or behaviors resulting from conditions (bottom section)
- **Rules:** Columns representing unique combinations of conditions and their actions

**How to Build a Decision Table:**
1. Identify all conditions that affect the outcome
2. Identify all possible actions
3. Create rules for all combinations of conditions (2^n rules for n binary conditions)
4. Mark which actions occur for each rule
5. Identify and remove impossible rules
6. Identify and merge redundant rules
7. Create test cases for each remaining rule

**Example: Insurance Premium Calculation**

> Specification: "Premium is calculated based on: Age (<25, 25-65, >65), Driving record (clean, violations), Vehicle type (standard, sports)."

**Correct Conditions (binary):**
1. Age < 25 (Y/N)
2. Age 25-65 (Y/N)
3. Age > 65 (Y/N)
4. Record: clean (Y/N)
5. Record: violations (Y/N)
6. Vehicle: standard (Y/N)
7. Vehicle: sports (Y/N)

Wait — Age conditions are mutually exclusive. Better approach: treat Age as a single condition with 3 values, or restructure.

**Simpler Correct Approach:**

Conditions as independent binary:
1. Age category = <25 (Y/N)
2. Age category = 25-65 (Y/N)
3. Age category = >65 (Y/N)
4. Record = clean (Y/N)
5. Vehicle = standard (Y/N)

But this creates impossible rules (e.g., Age<25=Y AND Age25-65=Y).

**Best Practice:** Use conditions that can independently be true or false, or use a single multi-valued condition.

**Revised Example — Simpler Problem:**

> Specification: "A customer gets free shipping if they are a VIP member AND the order is over $50. They get a 10% discount if they have a coupon."

**Conditions:**
1. VIP member (Y/N)
2. Order > $50 (Y/N)
3. Has coupon (Y/N)

**Rules:** 2 x 2 x 2 = 8 rules

| | R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 |
|---|---|---|---|---|---|---|---|---|
| VIP | Y | Y | Y | Y | N | N | N | N |
| Order>$50 | Y | Y | N | N | Y | Y | N | N |
| Coupon | Y | N | Y | N | Y | N | Y | N |
| Free shipping | X | X | - | - | - | - | - | - |
| 10% discount | X | - | X | - | X | - | X | - |
| Regular shipping | - | - | X | X | X | X | X | X |

**Test Cases:** 8 (one per rule)

**Impossible Rules:**

An impossible rule is a combination that can never occur.

**Example:**
> Conditions: "Customer is new" and "Customer has 5-year purchase history"

Any rule with both = Y is impossible.

**Redundant Rules:**

Two rules are redundant if they have the same conditions and same actions. Merge them.

**Don't Care Conditions:**

When a condition does not affect the outcome for certain rules, use "-" (don't care) to reduce the table.

**Common Mistakes in Decision Tables:**
1. **Missing conditions:** Forgetting a condition that affects the outcome
2. **Missing actions:** Not capturing all possible behaviors
3. **Counting wrong:** For n conditions with 2 values each, there are 2^n rules
4. **Not removing impossible rules:** Testing impossible combinations wastes effort
5. **Confusing conditions and actions:** Conditions are inputs/states. Actions are outputs.

---

### 2.1.4 State Transition Testing

**What is State Transition Testing?**

State transition testing is used when the system's behavior depends on its current state and the events that occur. It is ideal for systems with memory, workflows, or state-dependent logic.

**Key Concepts:**
- **State:** A condition or mode of the system (e.g., Idle, Logged In, Processing)
- **Event:** An input or trigger that causes a transition (e.g., "Enter valid password")
- **Transition:** A change from one state to another caused by an event
- **Action:** An output or behavior that occurs during a transition
- **Guard condition:** A condition that must be true for a transition to occur

**Example: Login System**

```
[Idle] --valid login--> [Logged In]
[Idle] --invalid login (attempt<3)--> [Idle]
[Idle] --invalid login (attempt=3)--> [Locked]
[Logged In] --logout--> [Idle]
[Locked] --admin unlock--> [Idle]
```

**State Transition Table:**

| Current State | Event | Guard | Next State | Action |
|--------------|-------|-------|-----------|--------|
| Idle | Valid login | - | Logged In | Display dashboard |
| Idle | Invalid login | Attempt < 3 | Idle | Show error, increment counter |
| Idle | Invalid login | Attempt = 3 | Locked | Show locked message |
| Logged In | Logout | - | Idle | Clear session |
| Locked | Admin unlock | - | Idle | Clear counter |

**Coverage Criteria:**
1. **0-switch coverage (State coverage):** Every state is visited at least once
2. **1-switch coverage (Transition coverage):** Every valid transition is exercised at least once
3. **2-switch coverage:** Every sequence of two valid transitions is exercised

**For the CTAL-TA exam, you need to know 0-switch and 1-switch coverage.**

**Counting Transitions:**
- Number of states (for 0-switch coverage)
- Number of valid transitions (for 1-switch coverage)
- Number of invalid transitions (for robustness testing)

**Example: ATM System**

States: Idle, Card Inserted, PIN Entered, Account Selected, Transaction Complete, Card Retained

Valid transitions:
- Idle → Card Inserted (insert card)
- Card Inserted → PIN Entered (enter PIN)
- Card Inserted → Idle (eject card)
- PIN Entered → Account Selected (valid PIN)
- PIN Entered → Card Retained (3 invalid PINs)
- Account Selected → Transaction Complete (perform transaction)
- Account Selected → Idle (cancel)
- Transaction Complete → Idle (eject card)

**Test Cases for 1-Switch Coverage:**

| Test Case | Path | Transitions |
|-----------|------|------------|
| TC1 | Idle → Card Inserted → PIN Entered → Account Selected → Transaction Complete → Idle | 5 transitions |
| TC2 | Idle → Card Inserted → Idle | 2 transitions |
| TC3 | Idle → Card Inserted → PIN Entered → Card Retained | 3 transitions |
| TC4 | Idle → Card Inserted → PIN Entered → Account Selected → Idle | 4 transitions |

**Invalid Transitions:**
- Idle → Account Selected (without inserting card)
- PIN Entered → Transaction Complete (without selecting account)
- Card Retained → Idle (without admin intervention)

**Common Mistakes in State Transition Testing:**
1. **Missing states:** Forgetting error states, timeout states, or cancellation states
2. **Missing transitions:** Not capturing all valid events from each state
3. **Ignoring guard conditions:** Testing transitions without checking if guards are met
4. **Confusing states and events:** States are conditions; events are triggers
5. **Forgetting invalid transitions:** Testing only valid paths misses robustness issues

---

### 2.1.5 Use Case Testing

**What is Use Case Testing?**

Use case testing derives test cases from use cases, which describe interactions between actors and the system to achieve a goal.

**Use Case Structure:**
1. **Name:** Brief description of the goal
2. **Actors:** Who interacts with the system
3. **Preconditions:** What must be true before the use case starts
4. **Main (Basic) Flow:** The normal, successful path
5. **Alternative Flows:** Variations that still succeed
6. **Exception Flows:** Error conditions that prevent goal achievement
7. **Postconditions:** What is true after the use case completes

**Deriving Test Cases from Use Cases:**
1. Test the main flow (happy path)
2. Test each alternative flow
3. Test each exception flow
4. Test preconditions (what happens if they are not met?)
5. Test postconditions (verify the expected end state)

**Example: Withdraw Cash (ATM)**

**Actors:** Bank Customer
**Preconditions:** Customer has a valid card and knows PIN. ATM has cash available.

**Main Flow:**
1. Customer inserts card
2. System validates card
3. System prompts for PIN
4. Customer enters PIN
5. System validates PIN
6. System displays account options
7. Customer selects "Withdraw Cash"
8. System prompts for amount
9. Customer enters amount
10. System checks balance
11. System dispenses cash
12. System prints receipt
13. System ejects card

**Alternative Flows:**
- A1: Customer cancels at any step → return card
- A2: Customer selects "Check Balance" instead of withdraw → show balance, return to step 6
- A3: Customer requests amount exceeding single-transaction limit → show error, return to step 8

**Exception Flows:**
- E1: Invalid card → retain card, notify bank
- E2: Invalid PIN (3 attempts) → retain card
- E3: Insufficient funds → show error, return to step 6
- E4: ATM out of cash → show error, return to step 6
- E5: System timeout → cancel transaction, return card

**Test Cases:**

| ID | Flow | Description |
|---|---|---|
| UC-01 | Main | Valid withdrawal with sufficient funds |
| UC-02 | Alt A1 | Cancel after PIN entry |
| UC-03 | Alt A2 | Check balance then withdraw |
| UC-04 | Alt A3 | Request amount over limit |
| UC-05 | Exc E1 | Insert invalid card |
| UC-06 | Exc E2 | Enter invalid PIN 3 times |
| UC-07 | Exc E3 | Request amount exceeding balance |
| UC-08 | Exc E4 | Withdraw when ATM is empty |
| UC-09 | Exc E5 | Timeout during transaction |
| UC-10 | Pre | Attempt withdrawal without card |

**Common Mistakes in Use Case Testing:**
1. **Only testing the main flow:** Alternative and exception flows often contain the most defects
2. **Forgetting preconditions:** What happens if preconditions are not met?
3. **Not verifying postconditions:** The system may complete the flow but leave data incorrect
4. **Missing combinations:** Alternative flows may interact (e.g., check balance + timeout)

---

### 2.1.6 Combinatorial Testing

**What is Combinatorial Testing?**

Combinatorial testing is used when a system has multiple input parameters that can interact. Instead of testing all possible combinations, it selects a subset that provides good coverage.

**The Problem:**

If a system has 10 parameters with 5 values each, there are 5^10 = 9,765,625 possible combinations. Testing all is impossible.

**Pairwise Testing (All-Pairs):**

Pairwise testing ensures that every pair of parameter values is tested at least once. Research shows most defects are caused by interactions between two parameters.

**Example: Web Form**

Parameters:
- Browser: Chrome, Firefox, Safari (3 values)
- OS: Windows, Mac, Linux (3 values)
- JavaScript: Enabled, Disabled (2 values)
- Cookies: Enabled, Disabled (2 values)

Full combinations: 3 × 3 × 2 × 2 = 36
Pairwise combinations: ~9

| TC | Browser | OS | JavaScript | Cookies |
|---|---|---|---|---|
| 1 | Chrome | Windows | Enabled | Enabled |
| 2 | Chrome | Mac | Disabled | Disabled |
| 3 | Chrome | Linux | Enabled | Disabled |
| 4 | Firefox | Windows | Disabled | Enabled |
| 5 | Firefox | Mac | Enabled | Disabled |
| 6 | Firefox | Linux | Disabled | Enabled |
| 7 | Safari | Windows | Enabled | Enabled |
| 8 | Safari | Mac | Disabled | Disabled |
| 9 | Safari | Linux | Enabled | Disabled |

**When to Use Combinatorial Testing:**
- Configuration testing (different hardware/software combinations)
- Multi-parameter business rules
- Testing with many independent variables
- When exhaustive testing is infeasible

**Common Mistakes in Combinatorial Testing:**
1. **Using pairwise when higher-order interactions are critical:** If 3-way interactions cause defects, use 3-wise
2. **Including dependent parameters:** If parameters are not independent, combinatorial testing may generate impossible combinations
3. **Ignoring high-risk combinations:** Always add tests for high-risk combinations

---

## 2.2 Defect-Based Techniques

### 2.2.1 Error Guessing

**What is Error Guessing?**

Error guessing is a technique where the tester uses experience and intuition to guess where defects are likely to be found. It is not systematic but is highly effective when performed by experienced testers.

**How it Works:**
1. Draw on past experience with similar systems
2. Consider common defect patterns (divide by zero, null pointers, buffer overflows, off-by-one errors)
3. Think like a developer — where would you make a mistake?
4. Test those areas specifically

**Example Error Guessing Checklist:**
- Empty or null inputs
- Maximum length strings
- Special characters in text fields
- Leading/trailing whitespace
- Division by zero
- Date boundaries (end of month, leap year)
- Negative numbers where positive expected
- Concurrent access to shared resources
- Resource exhaustion (memory, disk, connections)

**When to Use Error Guessing:**
- Supplement to systematic techniques (never as the primary technique)
- When specifications are incomplete or informal
- When time is limited and risk-based selection is needed
- When testing areas known to be historically defect-prone

**Limitations:**
- Not systematic or repeatable
- Depends heavily on tester experience
- Cannot measure coverage
- May miss defects in unfamiliar areas

---

### 2.2.2 Checklist-Based Testing

**What is Checklist-Based Testing?**

Checklist-based testing uses a predefined list of items to verify. It is more structured than error guessing but less formal than specification-based techniques.

**Example Checklists:**

**Installation Testing Checklist:**
- [ ] Installation completes without errors
- [ ] Default settings are reasonable
- [ ] Uninstall removes all files and registry entries
- [ ] Upgrade from previous version preserves data
- [ ] Installation on minimum hardware works
- [ ] Silent/headless installation works

**When to Use Checklists:**
- Regression testing of standard scenarios
- Smoke testing
- Acceptance testing
- Areas where formal techniques are not cost-effective

---

## 2.3 Experience-Based Techniques

### 2.3.1 Exploratory Testing

**What is Exploratory Testing?**

Exploratory testing is simultaneous learning, test design, and test execution. The tester designs tests while executing them, using information from previous tests to guide the next tests.

**Key Characteristics:**
1. **Simultaneous activities:** Design and execution happen together
2. **Learning-driven:** Each test teaches more about the system
3. **Adaptable:** Test strategy adapts based on findings
4. **Skill-dependent:** Effectiveness depends on tester knowledge
5. **Not random:** It is structured by the tester's expertise

**Session-Based Test Management (SBTM):**

SBTM structures exploratory testing into time-boxed sessions:
1. **Test Charter:** A mission statement for the session
2. **Time Box:** Fixed duration (60-120 minutes)
3. **Session Report:** Notes on what was tested, what was found, issues, coverage

**Example Test Charters:**
- "Explore the checkout flow with different payment methods to find defects in payment processing"
- "Explore the admin panel's user management features for security vulnerabilities"
- "Explore the search functionality with various query types to assess result accuracy"

**When to Use Exploratory Testing:**
- When specifications are incomplete or changing rapidly
- When time is limited and risk-based testing is needed
- To supplement formal testing with creative exploration
- To investigate areas where defects have been found
- In agile teams where requirements emerge during development

**When NOT to Use as Primary:**
- Safety-critical systems (formal techniques required)
- Regulatory compliance testing (documentation and traceability needed)
- Areas requiring high repeatability and coverage measurement

**Exploratory Testing vs. Ad Hoc Testing:**

| | Exploratory Testing | Ad Hoc Testing |
|---|---|---|
| Structure | Structured by test charters and tester skill | Unstructured, no planning |
| Documentation | Session notes, charters, findings | Minimal or none |
| Skill required | High | Low |
| Repeatability | Session can be repeated with notes | Not repeatable |
| Purpose | Find defects, learn system, assess quality | Quick check, unplanned |

---

## Worked Examples — Applying Chapter 2 Techniques

### Worked Example 1: EP + BVA Combined

**Specification:** "A temperature monitoring system accepts temperature readings in Celsius. Valid range is -50°C to +150°C. Readings are stored as integers."

**Task:** Apply EP and 3-value BVA. Count total test cases.

**EP Partitions:**
- Valid: -50 to +150
- Invalid: < -50
- Invalid: > +150
- Invalid: Non-integer
- Invalid: Empty/Null

**3-Value BVA for Valid Range:**
- Lower boundary: -51, -50, -49
- Upper boundary: +149, +150, +151

**Test Cases:**
1. -51 (EP invalid + BVA min-1)
2. -50 (EP valid boundary + BVA min)
3. -49 (BVA min+1)
4. 0 (EP valid nominal)
5. +149 (BVA max-1)
6. +150 (EP valid boundary + BVA max)
7. +151 (EP invalid + BVA max+1)
8. "abc" (EP invalid non-integer)
9. "" (EP invalid empty)

**Total: 9 test cases**

---

### Worked Example 2: Decision Table

**Specification:** "A loyalty program gives discounts based on membership level and purchase amount."
- Bronze: No discount
- Silver: 5% for purchases >= $100
- Gold: 10% for purchases >= $100, additional 5% for purchases > $500 (total 15%)

**Conditions:**
1. Membership: Bronze / Silver / Gold
2. Purchase: <$100 / $100-$500 / >$500

**Rules:** 3 × 3 = 9 rules

| | R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 | R9 |
|---|---|---|---|---|---|---|---|---|---|
| Bronze | Y | Y | Y | N | N | N | N | N | N |
| Silver | N | N | N | Y | Y | Y | N | N | N |
| Gold | N | N | N | N | N | N | Y | Y | Y |
| <$100 | Y | N | N | Y | N | N | Y | N | N |
| $100-$500 | N | Y | N | N | Y | N | N | Y | N |
| >$500 | N | N | Y | N | N | Y | N | N | Y |
| **Actions** | | | | | | | | | |
| No discount | X | - | - | X | - | - | X | - | - |
| 5% discount | - | X | X | - | X | X | - | - | - |
| 10% discount | - | - | - | - | - | - | - | X | - |
| 15% discount | - | - | - | - | - | - | - | - | X |

**Test Cases:** 9 (one per rule)

**Key insight:** Notice that Bronze members never get discounts regardless of purchase amount. Silver members get 5% for all purchases >= $100. Gold members get 10% for $100-$500 and 15% for >$500.

---

### Worked Example 3: State Transition

**Specification:** "A document review system allows users to submit documents, which are then reviewed. Documents can be in states: Draft, Submitted, Under Review, Approved, Rejected."

**Events:**
- Submit: Draft → Submitted
- Start Review: Submitted → Under Review
- Approve: Under Review → Approved
- Reject: Under Review → Rejected
- Revise: Rejected → Draft
- Withdraw: Submitted → Draft

**States:** Draft, Submitted, Under Review, Approved, Rejected
**Valid Transitions:** 6

**0-Switch Coverage (visit every state):**
TC1: Draft → Submitted → Under Review → Approved (covers 4 states)
TC2: Draft → Submitted → Under Review → Rejected → Draft (covers remaining state)

**1-Switch Coverage (every transition):**
TC1: Draft → Submitted → Under Review → Approved
TC2: Draft → Submitted → Under Review → Rejected → Draft
TC3: Submitted → Draft (withdraw)
TC4: Under Review → Approved
TC5: Under Review → Rejected

**Invalid Transitions to test:**
- Draft → Under Review (cannot skip Submitted)
- Approved → Rejected (cannot change after approval)
- Rejected → Approved (must go through Draft and Submitted first)

---

### Worked Example 4: Technique Selection

**Scenario:** A new e-commerce checkout system has the following requirements:
1. "Users can check out as guests or registered users"
2. "Shipping cost is calculated based on weight (0-50kg) and destination (domestic, international)"
3. "Payment methods: credit card, PayPal, bank transfer"
4. "Discount codes can be applied if valid and not expired"
5. "Order confirmation email is sent after successful payment"

**Task:** Select the most appropriate test design technique(s) for each requirement and justify your choice.

**Answers:**

**Req 1: Guest vs. Registered checkout**
- **Technique:** Decision Table Testing
- **Why:** There are multiple interacting conditions (guest/registered, saved addresses, payment methods available). A decision table captures all combinations.

**Req 2: Shipping cost based on weight and destination**
- **Technique:** Equivalence Partitioning + Boundary Value Analysis
- **Why:** Weight is a numeric range (0-50kg). EP partitions valid/invalid weights. BVA tests the boundaries (0, 50, 51). Destination is categorical (domestic/international).

**Req 3: Payment methods**
- **Technique:** EP (valid methods) + Error Guessing (invalid cards, expired PayPal, insufficient funds)
- **Why:** Payment methods are discrete choices. EP covers each valid method. Error guessing covers common payment failures.

**Req 4: Discount codes**
- **Technique:** State Transition Testing
- **Why:** A discount code goes through states: Not Applied → Applied (Valid) → Applied (Invalid/Expired). The state depends on events (enter code, submit order).

**Req 5: Order confirmation email**
- **Technique:** Use Case Testing
- **Why:** This is a workflow with a main path (successful order → email sent) and alternatives (failed order → no email). Use cases capture the flow.

**Key exam insight:** Most real-world scenarios require multiple techniques. The exam tests whether you can match the specification structure to the right technique.
