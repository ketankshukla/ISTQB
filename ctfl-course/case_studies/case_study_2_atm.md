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
# 📂 Case Study 2: ATM Cash Withdrawal

## ⭐ System Description

A bank ATM (Automated Teller Machine) allows customers to withdraw cash from their accounts. The ATM validates the card and PIN, checks available balance, dispenses cash, and updates the account.

---

## 📑 Requirements Specification

### 🔷 REQ-ATM-001: Card Validation
The ATM shall accept cards with a valid magnetic stripe or chip. Cards that are expired, reported stolen, or unreadable shall be rejected with an appropriate message.

### 🔷 REQ-ATM-002: PIN Authentication
- The customer must enter a 4-digit PIN
- Maximum 3 incorrect PIN attempts before the card is retained
- After each incorrect attempt, the system displays remaining attempts
- After successful PIN entry, the customer accesses the main menu

### 🔷 REQ-ATM-003: Withdrawal Amounts
- Minimum withdrawal: $20
- Maximum withdrawal per transaction: $500
- Withdrawal must be in multiples of $20
- Daily withdrawal limit: $1000 (cumulative across transactions)

### 🔷 REQ-ATM-004: Balance Check
- The withdrawal amount must not exceed the available account balance
- If insufficient funds, display "Insufficient balance" and return to menu

### 🔷 REQ-ATM-005: Cash Dispensing
- The ATM dispenses the requested amount in the largest denomination available
- If the ATM cannot dispense the exact amount (insufficient bills), display an error and offer the nearest lower amount
- Update the account balance immediately after dispensing

### 🔷 REQ-ATM-006: Receipt
- The customer is asked "Would you like a receipt?"
- If yes, print a receipt showing: date, time, amount withdrawn, remaining balance
- If no or timeout (30 seconds), eject card without receipt

---

## ⭐ User Stories

**US-1: Withdraw Cash**
```
As an account holder,
I want to withdraw cash from the ATM,
So that I have physical money for purchases.
```

Acceptance Criteria:
- Given I have entered my correct PIN, When I request $100, Then $100 is dispensed and my balance decreases by $100
- Given my balance is $50, When I request $100, Then I see "Insufficient balance" and no cash is dispensed
- Given I have already withdrawn $800 today, When I request $300, Then I see "Daily limit exceeded" (would total $1100)
- Given I request $35, When I confirm, Then I see "Amount must be a multiple of $20"

---

## 🎯 Applying Test Techniques

### ➗ 1. Equivalence Partitioning on Withdrawal Amount (REQ-ATM-003)

**Partitions for amount:**

| Partition | Range | Expected | Valid/Invalid |
|-----------|-------|----------|---------------|
| P1 | Amount < $20 | Error: below minimum | Invalid |
| P2 | $20 to $500, multiple of $20 | Accepted (if balance/limit OK) | Valid |
| P3 | Amount > $500 | Error: exceeds max per transaction | Invalid |
| P4 | $20 to $500 but NOT multiple of $20 | Error: not a valid denomination | Invalid |
| P5 | Non-numeric or negative | Error: invalid input | Invalid |

**Test cases:**

| TC | Amount | Expected Result | Partition |
|----|--------|-----------------|-----------|
| TC1 | $10 | Error: below minimum | P1 |
| TC2 | $100 | Cash dispensed | P2 |
| TC3 | $600 | Error: exceeds maximum | P3 |
| TC4 | $75 | Error: not multiple of $20 | P4 |
| TC5 | -$50 | Error: invalid input | P5 |

### 📏 2. Boundary Value Analysis on Withdrawal Limits

**Transaction boundaries ($20 minimum, $500 maximum):**

| Value | Expected | Position |
|-------|----------|----------|
| $0 | Invalid (below minimum) | Below lower boundary |
| $20 | Valid (minimum) | Lower boundary |
| $500 | Valid (maximum) | Upper boundary |
| $520 | Invalid (above maximum) | Above upper boundary |

**Daily limit boundary ($1000 cumulative):**

| Previous Today | Request | Total Would Be | Expected |
|----------------|---------|----------------|----------|
| $980 | $20 | $1000 | Valid (exactly at limit) |
| $980 | $40 | $1020 | Invalid: daily limit exceeded |
| $0 | $500 | $500 | Valid (within limit) |

### 🗂️ 3. Decision Table for Withdrawal Authorization

**Conditions:**
- C1: PIN correct?
- C2: Amount valid (multiple of $20, within $20-$500)?
- C3: Sufficient balance?
- C4: Within daily limit?

**Decision Table:**

| | R1 | R2 | R3 | R4 | R5 |
|---|---|---|---|---|---|
| C1: PIN correct | T | T | T | T | F |
| C2: Amount valid | T | T | T | F | - |
| C3: Sufficient balance | T | T | F | - | - |
| C4: Within daily limit | T | F | - | - | - |
| Dispense cash | X | | | | |
| Error: daily limit | | X | | | |
| Error: insufficient balance | | | X | | |
| Error: invalid amount | | | | X | |
| Card retained / account locked | | | | | X* |

*Note: R5 assumes 3rd incorrect attempt.

**After collapsing: 5 rules -> 5 test cases.**

### 🔄 4. State Transition for PIN Entry (REQ-ATM-002)

**States:**
- S1: Card Inserted (waiting for PIN)
- S2: Authenticated (main menu)
- S3: First Wrong PIN (2 attempts left)
- S4: Second Wrong PIN (1 attempt left)
- S5: Card Retained (blocked after 3rd wrong)

**State Transition Table:**

| Current State | Event | Next State | Action |
|---------------|-------|------------|--------|
| S1 | Correct PIN | S2 | Display main menu |
| S1 | Wrong PIN | S3 | Display "Incorrect, 2 attempts remaining" |
| S3 | Correct PIN | S2 | Display main menu |
| S3 | Wrong PIN | S4 | Display "Incorrect, 1 attempt remaining" |
| S4 | Correct PIN | S2 | Display main menu |
| S4 | Wrong PIN | S5 | Display "Card retained", retain card |
| S5 | (any) | S5 | System locked, card not returned |

**Valid transitions: 7**

**0-switch coverage (minimum test cases):**

| TC | Path | Transitions |
|----|------|-------------|
| TC1 | S1 -> correct -> S2 | 1 |
| TC2 | S1 -> wrong -> S3 -> correct -> S2 | 2 |
| TC3 | S1 -> wrong -> S3 -> wrong -> S4 -> correct -> S2 | 2 |
| TC4 | S1 -> wrong -> S3 -> wrong -> S4 -> wrong -> S5 | 2 |

4 test cases cover all 7 transitions.

**Invalid transition tests (negative):**
- In S2 (authenticated), entering PIN again should not be possible
- In S5 (retained), entering PIN should have no effect

---

## ⚠️ Risk-Based Test Approach

| ID | Risk | Likelihood | Impact | Level | Testing Action |
|----|------|------------|--------|-------|----------------|
| R1 | Cash dispensed without deducting balance | 2 | 5 | 10 High | Verify balance update after every withdrawal |
| R2 | PIN bypass allows unauthorized access | 1 | 5 | 5 Medium | Security testing: attempt menu access without PIN |
| R3 | Daily limit not enforced across transactions | 3 | 4 | 12 High | Multiple withdrawals in sequence, verify cumulative check |
| R4 | Card retained on first wrong PIN (too aggressive) | 2 | 4 | 8 Medium | State transition testing: verify exact 3 attempts |
| R5 | Amount validation accepts non-multiples of $20 | 3 | 3 | 9 Medium | EP/BVA on amount field |
| R6 | Receipt printer jam causes transaction hang | 2 | 3 | 6 Low | Test receipt timeout behavior |

**Priority order:** R3, R1, R4, R5, R2, R6

---

## 💡 Statement/Branch Coverage Example

**Simplified withdrawal validation code:**

```
1: function validateWithdrawal(amount, balance, todayTotal, dailyLimit) {
2:     if (amount < 20 || amount > 500) {
3:         return "INVALID_RANGE"
4:     }
5:     if (amount % 20 != 0) {
6:         return "NOT_MULTIPLE"
7:     }
8:     if (amount > balance) {
9:         return "INSUFFICIENT_BALANCE"
10:    }
11:    if (todayTotal + amount > dailyLimit) {
12:        return "DAILY_LIMIT_EXCEEDED"
13:    }
14:    return "APPROVED"
15: }
```

**Executable statements:** Lines 2, 3, 5, 6, 8, 9, 11, 12, 14 = 9 statements

**Branches:** Lines 2(T/F), 5(T/F), 8(T/F), 11(T/F) = 8 branches

**Test cases for 100% branch coverage:**

| TC | amount | balance | todayTotal | dailyLimit | Result | Branches |
|----|--------|---------|------------|------------|--------|----------|
| TC1 | 10 | 1000 | 0 | 1000 | INVALID_RANGE | 2T |
| TC2 | 60 | 1000 | 0 | 1000 | APPROVED | 2F, 5F, 8F, 11F |
| TC3 | 55 | 1000 | 0 | 1000 | NOT_MULTIPLE | 2F, 5T |
| TC4 | 100 | 50 | 0 | 1000 | INSUFFICIENT_BALANCE | 2F, 5F, 8T |
| TC5 | 100 | 1000 | 950 | 1000 | DAILY_LIMIT_EXCEEDED | 2F, 5F, 8F, 11T |

5 test cases achieve 100% branch coverage (8/8 branches) and 100% statement coverage (9/9 statements).

---

## 🐞 Sample Defect Report

```
ID:             BUG-ATM-042
Title:          Daily withdrawal limit not enforced when second 
                transaction occurs within 30 seconds of first
Severity:       Critical
Priority:       Critical
Component:      Withdrawal Authorization Module
Environment:    ATM Model X100, Software v2.4.1, connected to 
                core banking test environment
Steps:
1. Insert card, authenticate with correct PIN
2. Withdraw $500 (successful, balance deducted)
3. Immediately (within 30 seconds) request another $500 withdrawal
4. Observe result
Expected: "Daily limit exceeded" error (total would be $1000, 
          but a subsequent $500 would exceed the $1000 limit...
          wait, $500+$500 = $1000 which equals the limit exactly)
          CORRECTION: Withdraw $600 first, then $500.
          Actually with given limits: withdraw $500, then $520.
          Expected: $520 exceeds max per transaction anyway.
          Better test: withdraw $500, then withdraw $500 again.
          $500 + $500 = $1000 = daily limit. Should be allowed.
          Then withdraw $20 more. Total would be $1020. Should fail.
          
Revised Steps:
1. Insert card, authenticate with correct PIN
2. Withdraw $500 (successful)
3. Return to menu, withdraw $500 again (successful, total $1000)
4. Return to menu, withdraw $20 (total would be $1020)
Expected: "Daily limit exceeded" error on step 4
Actual: $20 dispensed, account debited, total for day = $1020
Related Req: REQ-ATM-003 (daily limit $1000)
```

---

## ❓ Reflection Questions

1. Why must BVA be applied to the DAILY limit separately from the per-transaction limit?

2. How would you test the scenario where the ATM runs out of $20 bills mid-transaction?

3. The PIN state machine has 7 valid transitions. What invalid transitions should you test, and why?

4. If you had to choose between EP and BVA for the withdrawal amount, which would give you more confidence and why?

---

## ⭐ Worked Solutions

**1.** The per-transaction limit ($500) and daily limit ($1000) are independent constraints with different boundaries. A customer might make a $500 withdrawal (within per-transaction limit) and then another $500 (also within per-transaction limit), but together they hit the daily limit. BVA at the daily boundary catches defects where the cumulative check is missing or incorrect. Without it, you might pass all per-transaction tests but miss cumulative failures.

**2.** This is an environmental/hardware scenario best covered by error guessing. Test cases: (a) Request $100 but ATM has only 3 x $20 bills remaining — verify it offers $60 as alternative; (b) Request $20 with zero bills remaining — verify appropriate error; (c) Mid-dispense jam — verify the transaction is rolled back and balance not deducted. This requires either a hardware test environment or simulator.

**3.** Invalid transitions to test: (a) From S2 (authenticated), attempting to enter PIN again; (b) From S5 (retained), attempting any action; (c) From S1, attempting to access the menu without entering PIN; (d) From S3, pressing "Cancel" — should return the card. Invalid transition testing verifies that the system correctly REJECTS events that should not be possible in the current state.

**4.** BVA provides higher confidence because the most common defects in range validation are off-by-one errors at boundaries. EP tells you that $100 and $200 are both valid (same partition), but BVA tests $20 (minimum boundary) and $500 (maximum boundary) specifically, which is where off-by-one bugs hide. However, both together are best — EP identifies what to test broadly, BVA focuses on the critical edge values.
