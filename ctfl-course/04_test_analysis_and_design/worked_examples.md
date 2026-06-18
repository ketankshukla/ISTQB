<!-- ISTQB-BEAUTIFY-V1 -->
<style>
html, body {
  background-color: #000000 !important;
  color: #F5F5F5 !important;
}
body {
  font-size: 19px !important;
  line-height: 1.85 !important;
  font-family: 'Segoe UI', 'Trebuchet MS', Verdana, sans-serif !important;
  padding: 24px 44px !important;
  letter-spacing: 0.2px;
}
h1 { color: #FFD700 !important; font-size: 2.7em !important; font-weight: 800 !important; border-bottom: 3px solid #FF5252 !important; padding-bottom: 0.25em; }
h2 { color: #00E5FF !important; font-size: 2.05em !important; font-weight: 800 !important; border-bottom: 2px solid #00E5FF !important; padding-bottom: 0.2em; }
h3 { color: #69F0AE !important; font-size: 1.6em !important; font-weight: 700 !important; }
h4 { color: #FF80AB !important; font-size: 1.35em !important; font-weight: 700 !important; }
h5 { color: #FFAB40 !important; font-size: 1.2em !important; font-weight: 700 !important; }
h6 { color: #B388FF !important; font-size: 1.1em !important; font-weight: 700 !important; }
p, li, td, th, span, div { font-size: 1em !important; color: #F5F5F5 !important; }
strong, b { color: #FFEB3B !important; }
em, i { color: #FF8A65 !important; }
a { color: #40C4FF !important; text-decoration: underline; }
a:hover { color: #80D8FF !important; }
code { color: #FF4081 !important; background: transparent !important; font-size: 0.95em !important; }
pre { background: transparent !important; border: 1px solid #555 !important; border-radius: 8px; padding: 14px !important; }
pre code { color: #80CBC4 !important; }
blockquote { color: #B0BEC5 !important; border-left: 5px solid #FFD700 !important; background: transparent !important; padding-left: 18px; font-style: italic; }
table { border-collapse: collapse !important; background: transparent !important; }
th { color: #FFD700 !important; border: 2px solid #00E5FF !important; background: transparent !important; padding: 8px 12px !important; }
td { color: #F5F5F5 !important; border: 1px solid #607D8B !important; background: transparent !important; padding: 8px 12px !important; }
hr { border: none; border-top: 2px dashed #FF5252 !important; margin: 1.5em 0; }
ul li::marker { color: #69F0AE !important; font-size: 1.1em; }
ol li::marker { color: #00E5FF !important; font-weight: bold; }
</style>
# 💡 Chapter 4 — Worked Examples

Step-by-step examples for all K3 techniques. Work through each one by hand before checking the solution.

---

## 💡 EQUIVALENCE PARTITIONING — Worked Examples

### 💡 Example EP-1: Online Ticket Quantity

**Requirement:** An online ticket booking system accepts a quantity of tickets between 1 and 10 (inclusive). The quantity must be a positive integer.

**Step 1: Identify the input and its constraints.**
- Input: ticket quantity
- Valid range: 1 to 10 (integer)

**Step 2: Identify equivalence partitions.**

| Partition | Description | Example Value | Valid/Invalid |
|-----------|-------------|---------------|---------------|
| P1 | Quantity below minimum (less than 1) | 0 | Invalid |
| P2 | Quantity within valid range (1 to 10) | 5 | Valid |
| P3 | Quantity above maximum (greater than 10) | 15 | Invalid |
| P4 | Non-integer input | 3.5 | Invalid |
| P5 | Non-numeric input | "abc" | Invalid |

**Step 3: Select representative test values.**

| Test Case | Input | Expected Result | Partition Covered |
|-----------|-------|-----------------|-------------------|
| TC1 | 0 | Error: quantity too low | P1 |
| TC2 | 5 | Booking accepted | P2 |
| TC3 | 15 | Error: quantity too high | P3 |
| TC4 | 3.5 | Error: not a whole number | P4 |
| TC5 | "abc" | Error: invalid input | P5 |

**Minimum test cases for full EP coverage: 5** (one per partition).

---

### 💡 Example EP-2: Shipping Discount by Order Value

**Requirement:** A store applies shipping discounts based on order value:
- Orders under $50: no discount (full shipping fee)
- Orders $50 to $99.99: 25% shipping discount
- Orders $100 and above: free shipping

**Step 1: Identify partitions from the three rules.**

| Partition | Range | Expected Outcome | Valid/Invalid |
|-----------|-------|------------------|---------------|
| P1 | order < $0 | Error/impossible | Invalid |
| P2 | $0 to $49.99 | No discount | Valid |
| P3 | $50 to $99.99 | 25% discount | Valid |
| P4 | $100 and above | Free shipping | Valid |

**Step 2: Select test values.**

| Test Case | Order Value | Expected Result | Partition |
|-----------|-------------|-----------------|-----------|
| TC1 | -$5.00 | Error | P1 |
| TC2 | $30.00 | Full shipping fee | P2 |
| TC3 | $75.00 | 25% shipping discount | P3 |
| TC4 | $150.00 | Free shipping | P4 |

---

### 💡 Example EP-3: Username Validation

**Requirement:** Username must be 3 to 20 characters, containing only letters and digits, starting with a letter.

**Partitions:**

| Partition | Description | Example | Valid/Invalid |
|-----------|-------------|---------|---------------|
| P1 | Length < 3 | "ab" | Invalid |
| P2 | Length 3 to 20, starts with letter, alphanumeric only | "john123" | Valid |
| P3 | Length > 20 | "abcdefghijklmnopqrstu" (21 chars) | Invalid |
| P4 | Starts with digit | "1john" | Invalid |
| P5 | Contains special characters | "john@123" | Invalid |
| P6 | Empty string | "" | Invalid |

**Minimum test cases: 6.**

---

## 💡 BOUNDARY VALUE ANALYSIS — Worked Examples

### 💡 Example BVA-1: Age Field (Two-Value BVA)

**Requirement:** An insurance form accepts age values from 18 to 65 (inclusive integers).

**Step 1: Identify boundaries.**
- Lower boundary: 18
- Upper boundary: 65

**Step 2: Apply two-value BVA (boundary + nearest neighbor outside).**

| Boundary | Values to Test | Expected Result |
|----------|---------------|-----------------|
| Lower | 17 (just below) | Invalid — too young |
| Lower | 18 (boundary) | Valid |
| Upper | 65 (boundary) | Valid |
| Upper | 66 (just above) | Invalid — too old |

**Total test values: 4**

---

### 💡 Example BVA-2: Password Length

**Requirement:** Password must be between 8 and 30 characters (inclusive).

**Boundaries:** 8 (lower), 30 (upper)

| Test Value | Position | Expected |
|------------|----------|----------|
| 7 characters | Below lower boundary | Invalid — too short |
| 8 characters | Lower boundary | Valid |
| 30 characters | Upper boundary | Valid |
| 31 characters | Above upper boundary | Invalid — too long |

**Total: 4 test values.**

---

### 💡 Example BVA-3: Combined EP + BVA — Ticket Quantity

**Requirement:** Quantity 1 to 10 (integers).

**EP partitions:** <1, 1-10, >10

**BVA (two-value) at each boundary:**

| Boundary | Values | Expected |
|----------|--------|----------|
| Between P1 and P2 | 0 (invalid), 1 (valid) | Reject 0, accept 1 |
| Between P2 and P3 | 10 (valid), 11 (invalid) | Accept 10, reject 11 |

**BVA test set: {0, 1, 10, 11}** — 4 values covering all boundaries.

Note: This is a SUBSET of what EP alone would require (EP needs one value per partition, BVA specifically targets the edges).

---

## 💡 DECISION TABLE TESTING — Worked Examples

### 💡 Example DT-1: Online Store Free Shipping and Loyalty Discount

**Business rules:**
- If the order total is $100+ AND the customer has a loyalty card, they get free shipping AND a 10% discount
- If the order total is $100+ but no loyalty card, they get free shipping only (no discount)
- If the order total is under $100 but they have a loyalty card, they get a 5% discount but pay shipping
- If under $100 and no loyalty card, they pay full price with shipping

**Step 1: Identify conditions and actions.**

Conditions:
- C1: Order >= $100?
- C2: Has loyalty card?

Actions:
- A1: Free shipping
- A2: 10% discount
- A3: 5% discount
- A4: Standard shipping charge

**Step 2: Build the decision table (2 conditions = 2^2 = 4 rules max).**

| | R1 | R2 | R3 | R4 |
|---|---|---|---|---|
| C1: Order >= $100 | T | T | F | F |
| C2: Has loyalty card | T | F | T | F |
| A1: Free shipping | X | X | | |
| A2: 10% discount | X | | | |
| A3: 5% discount | | | X | |
| A4: Standard shipping | | | X | X |

**Step 3: Derive test cases (one per rule).**

| TC | Order Total | Loyalty Card | Expected Outcome |
|----|-------------|--------------|------------------|
| TC1 | $150 | Yes | Free shipping + 10% discount |
| TC2 | $120 | No | Free shipping, no discount |
| TC3 | $80 | Yes | 5% discount + standard shipping |
| TC4 | $45 | No | Full price + standard shipping |

**Minimum test cases: 4** (no collapsing possible — all conditions matter in all rules).

---

### 💡 Example DT-2: Login with Collapsing

**Business rules:**
- Valid username AND valid password -> Login successful
- Valid username AND invalid password -> Error "wrong password"
- Invalid username (regardless of password) -> Error "user not found"

**Conditions:**
- C1: Valid username?
- C2: Valid password?

**Full table (2^2 = 4 rules):**

| | R1 | R2 | R3 | R4 |
|---|---|---|---|---|
| C1: Valid username | T | T | F | F |
| C2: Valid password | T | F | T | F |
| Login successful | X | | | |
| Error: wrong password | | X | | |
| Error: user not found | | | X | X |

**Collapsing:** R3 and R4 produce the same actions regardless of C2 (password does not matter if username is invalid). Collapse to:

| | R1 | R2 | R3* |
|---|---|---|---|
| C1: Valid username | T | T | F |
| C2: Valid password | T | F | - (don't care) |
| Login successful | X | | |
| Error: wrong password | | X | |
| Error: user not found | | | X |

**Minimum test cases after collapsing: 3.**

---

### 💡 Example DT-3: Insurance Premium (3 Conditions)

**Conditions:**
- C1: Age >= 25?
- C2: Clean driving record?
- C3: Insured for > 2 years?

**Actions:**
- Standard premium
- 10% discount
- 20% discount
- 5% surcharge

**Rules (2^3 = 8 maximum):**

| | R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 |
|---|---|---|---|---|---|---|---|---|
| C1: Age >= 25 | T | T | T | T | F | F | F | F |
| C2: Clean record | T | T | F | F | T | T | F | F |
| C3: Insured > 2yrs | T | F | T | F | T | F | T | F |
| 20% discount | X | | | | | | | |
| 10% discount | | X | X | | X | | | |
| Standard premium | | | | X | | X | | |
| 5% surcharge | | | | | | | X | X |

**Collapsing opportunity:** R7 and R8 both result in 5% surcharge regardless of C3. Collapse:

R7* = Age < 25, no clean record, don't care about tenure -> 5% surcharge

**After collapsing: 7 rules -> 7 test cases minimum.**

---

## 💡 STATE TRANSITION TESTING — Worked Examples

### 💡 Example ST-1: ATM PIN Entry

**Description:** An ATM allows 3 attempts to enter the correct PIN. After 3 incorrect attempts, the card is blocked.

**States:**
- S1: Card Inserted (waiting for PIN)
- S2: PIN Verified (access granted)
- S3: First Incorrect Attempt
- S4: Second Incorrect Attempt
- S5: Card Blocked

**State Transition Diagram (ASCII):**

```
         correct PIN
S1 ----------------------> S2 (Access Granted)
 |
 | wrong PIN
 v
S3 (1st wrong)
 |         \
 | wrong    \ correct PIN
 v           \
S4 (2nd wrong) ---------> S2
 |         \
 | wrong    \ correct PIN
 v           \
S5 (Blocked) -----------> [cannot recover without bank reset]
              S4 ---------> S2
```

**State Transition Table:**

| Current State | Event | Next State | Action |
|---------------|-------|------------|--------|
| S1 | Correct PIN | S2 | Grant access |
| S1 | Wrong PIN | S3 | Display "incorrect, 2 attempts left" |
| S3 | Correct PIN | S2 | Grant access |
| S3 | Wrong PIN | S4 | Display "incorrect, 1 attempt left" |
| S4 | Correct PIN | S2 | Grant access |
| S4 | Wrong PIN | S5 | Block card, retain card |
| S5 | Any input | S5 | Display "card blocked" |

**Valid transitions: 7**

**0-switch coverage test cases (cover every valid transition once):**

| TC | Path | Transitions Covered |
|----|------|---------------------|
| TC1 | S1 -> correct -> S2 | S1-S2 |
| TC2 | S1 -> wrong -> S3 -> correct -> S2 | S1-S3, S3-S2 |
| TC3 | S1 -> wrong -> S3 -> wrong -> S4 -> correct -> S2 | S3-S4, S4-S2 |
| TC4 | S1 -> wrong -> S3 -> wrong -> S4 -> wrong -> S5 | S4-S5 |
| TC5 | S5 -> any -> S5 | S5-S5 |

All 7 transitions covered with 5 test cases. (Some paths share initial transitions — in practice 3-4 paths suffice if we count shared transitions.)

**Minimum for 0-switch: 3 test paths can cover all 7 transitions:**
- Path A: S1 -> S2 (correct PIN first try)
- Path B: S1 -> S3 -> S2 (wrong then correct)
- Path C: S1 -> S3 -> S4 -> S5 (wrong, wrong, wrong -> blocked)
- Wait — this misses S4 -> S2. So add:
- Path D: S1 -> S3 -> S4 -> S2 (wrong, wrong, correct)

**Minimum: 4 test cases for full 0-switch coverage.**

---

### 💡 Example ST-2: Online Order Status

**States:** New, Confirmed, Shipped, Delivered, Cancelled

**Transitions:**

| From | Event | To |
|------|-------|----|
| New | Payment received | Confirmed |
| New | Customer cancels | Cancelled |
| Confirmed | Item dispatched | Shipped |
| Confirmed | Customer cancels (before dispatch) | Cancelled |
| Shipped | Delivery confirmed | Delivered |

**Invalid transitions (should not be possible):**
- Delivered -> New (cannot restart)
- Cancelled -> Shipped (cannot ship a cancelled order)
- Shipped -> Cancelled (too late to cancel after dispatch)

**0-switch coverage: 5 valid transitions -> need test cases covering all 5.**

| TC | Path |
|----|------|
| TC1 | New -> Confirmed -> Shipped -> Delivered |
| TC2 | New -> Cancelled |
| TC3 | Confirmed -> Cancelled |

TC1 covers 3 transitions, TC2 covers 1, TC3 covers 1. Total: 3 test cases for 0-switch.

---

### 💡 Example ST-3: User Account Lock (with Counter)

**Requirement:** After 5 failed login attempts within 30 minutes, account is locked for 15 minutes.

**States:** Active, Warning (1-4 failed), Locked, Cooldown-Reset

This can be modeled with states S0 (active), S1-S4 (1-4 failures), S5 (locked).

**Key transitions for 0-switch coverage:** Correct login from each warning state returns to S0. Fifth failure goes to Locked.

---

## 💡 STATEMENT AND BRANCH COVERAGE — Worked Examples

### 💡 Example WB-1: Simple If-Statement

```
1: function calculateDiscount(total, isMember) {
2:     discount = 0
3:     if (total > 100) {
4:         discount = 10
5:     }
6:     if (isMember) {
7:         discount = discount + 5
8:     }
9:     return discount
10: }
```

**Executable statements:** Lines 2, 3(decision), 4, 6(decision), 7, 9 = 6 statements

**Branches:**
- Line 3: TRUE (enter if-body), FALSE (skip)
- Line 6: TRUE (enter if-body), FALSE (skip)
- Total branches: 4

**For 100% statement coverage:**
- We need to execute lines 4 and 7 (both if-bodies)
- Test case: total=150, isMember=true -> executes lines 2,3,4,6,7,9 = all 6 statements
- **One test case achieves 100% statement coverage**

**But does it achieve 100% branch coverage?**
- It covers: line 3 TRUE, line 6 TRUE
- It does NOT cover: line 3 FALSE, line 6 FALSE
- Branch coverage: 2/4 = 50%

**For 100% branch coverage:**
- TC1: total=150, isMember=true -> covers line 3 TRUE, line 6 TRUE
- TC2: total=50, isMember=false -> covers line 3 FALSE, line 6 FALSE
- Together: 4/4 branches = 100% branch coverage (and also 100% statement coverage)

**Minimum test cases: 2 for 100% branch coverage; 1 for 100% statement coverage.**

---

### 💡 Example WB-2: If-Else Chain

```
1: function getGrade(score) {
2:     if (score >= 90) {
3:         grade = "A"
4:     } else if (score >= 70) {
5:         grade = "B"
6:     } else {
7:         grade = "C"
8:     }
9:     return grade
10: }
```

**Branches:**
- Line 2: TRUE (score >= 90) -> line 3
- Line 2: FALSE -> line 4
- Line 4: TRUE (score >= 70) -> line 5
- Line 4: FALSE -> line 7
- Total: 4 branches

**For 100% branch coverage:**
- TC1: score=95 -> line 2 TRUE (executes line 3)
- TC2: score=80 -> line 2 FALSE, line 4 TRUE (executes line 5)
- TC3: score=50 -> line 2 FALSE, line 4 FALSE (executes line 7)
- **3 test cases for 100% branch coverage**

**Statement coverage with these 3 TCs:** Lines 2,3,4,5,7,9 all executed = 100%

---

### 💡 Example WB-3: Loop with Early Exit

```
1: function findFirst(array, target) {
2:     i = 0
3:     while (i < length(array)) {
4:         if (array[i] == target) {
5:             return i
6:         }
7:         i = i + 1
8:     }
9:     return -1
10: }
```

**Branches:**
- Line 3: TRUE (enter loop), FALSE (skip loop / exit loop)
- Line 4: TRUE (found target), FALSE (not found, continue)
- Total: 4 branches

**For 100% branch coverage:**
- TC1: array=[3,7,5], target=7 -> enters loop (line 3 TRUE), first iteration line 4 FALSE, second iteration line 4 TRUE, returns 1
- TC2: array=[], target=7 -> line 3 FALSE immediately (empty array), returns -1

Wait — TC1 covers line 3 TRUE, line 4 TRUE, and line 4 FALSE. TC2 covers line 3 FALSE.
Together: all 4 branches covered.

**Minimum: 2 test cases for 100% branch coverage.**

---

## 💡 ATDD — Worked Examples

### 💡 Example ATDD-1: Shopping Cart Maximum Quantity

**User Story:**
```
As a customer,
I want to add up to 20 of the same item to my cart,
So that I can buy in bulk for my team.
```

**Acceptance Criteria:**
1. A customer can add between 1 and 20 units of any item to the cart
2. If the customer tries to add more than 20, the system shows an error and keeps the quantity at 20
3. If the customer enters 0 or a negative number, the system shows an error and does not add the item
4. The cart total updates in real time when quantity changes

**Deriving test cases from acceptance criteria:**

From AC1 (valid range):
- TC1: Add 1 unit -> item added with quantity 1 (lower boundary)
- TC2: Add 10 units -> item added with quantity 10 (mid-range)
- TC3: Add 20 units -> item added with quantity 20 (upper boundary)

From AC2 (above maximum):
- TC4: Add 21 units -> error displayed, quantity remains at 20
- TC5: Add 99 units -> error displayed, quantity remains at 20

From AC3 (below minimum):
- TC6: Add 0 units -> error displayed, item not added
- TC7: Add -1 units -> error displayed, item not added

From AC4 (real-time update):
- TC8: Change quantity from 5 to 8 -> cart total updates immediately without page refresh
- TC9: Change quantity from 8 to 3 -> cart total decreases immediately

---

### 💡 Example ATDD-2: Password Reset (Given/When/Then)

**User Story:**
```
As a registered user,
I want to reset my password via email,
So that I can regain access if I forget my password.
```

**Acceptance Criteria (Gherkin format):**

```
Scenario 1: Successful password reset request
Given the user is on the login page
When the user clicks "Forgot Password" and enters their registered email
Then the system sends a reset link to that email
And a confirmation message is displayed

Scenario 2: Invalid email address
Given the user is on the forgot-password page
When the user enters an email not registered in the system
Then the system displays "Email not found" error
And no reset email is sent

Scenario 3: Reset link expiration
Given the user received a password reset email
When the user clicks the reset link after 24 hours
Then the system displays "Link expired" error
And the user is prompted to request a new link

Scenario 4: Successful password change
Given the user clicked a valid (non-expired) reset link
When the user enters a new password meeting complexity requirements
Then the password is updated
And the user can log in with the new password
```

**Test cases derived:**
- TC1-TC4: One test per scenario above (the happy paths)
- TC5: User enters empty email -> validation error
- TC6: User enters malformed email (missing @) -> validation error
- TC7: New password does not meet complexity rules -> error shown, password not changed
- TC8: User reuses the same reset link twice -> second use fails ("already used")

---

### 💡 Example ATDD-3: Flight Booking Seat Selection

**User Story:**
```
As a traveler,
I want to select my preferred seat during booking,
So that I can choose a window or aisle seat.
```

**Acceptance Criteria:**
1. Available seats are displayed on an interactive seat map
2. Occupied seats are clearly marked and cannot be selected
3. The user can select exactly one seat per passenger
4. Premium seats show an additional fee before selection
5. Selection is confirmed only after the user clicks "Confirm Seat"

**Test cases:**
- TC1: All available seats are visible and clickable on the map (AC1)
- TC2: Clicking an occupied seat does nothing / shows "unavailable" tooltip (AC2)
- TC3: Selecting a second seat for the same passenger deselects the first (AC3)
- TC4: Premium seat shows "+$45" label; total updates when selected (AC4)
- TC5: Seat is not locked until "Confirm Seat" is clicked; another user can take it first (AC5)
- TC6: User clicks "Confirm Seat" -> seat assignment is saved and shown on boarding pass (AC5)
- TC7: User navigates away before confirming -> seat is released back to available pool (AC5, negative)

---

## 🎯 Summary: Technique Selection Guide

| Technique | Best For | Key Deliverable |
|-----------|----------|-----------------|
| EP | Any input domain with distinct groups | Partition table + one test per partition |
| BVA | Numeric or ordered ranges | Boundary value list (2 per boundary) |
| Decision Table | Complex business logic with multiple conditions | Decision table + one test per rule |
| State Transition | Systems with distinct states and events | State diagram/table + transition-covering paths |
| Statement Coverage | Ensuring all code is executed | Coverage % + minimum test set |
| Branch Coverage | Ensuring all decision outcomes are tested | Coverage % + minimum test set |
| ATDD | User stories with acceptance criteria | Given/When/Then tests before development |
