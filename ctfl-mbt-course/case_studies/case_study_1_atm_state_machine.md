# 📂 Case Study 1 — ATM State Machine

## ⭐ Context

You are a Test Analyst for SecureBank, developing a new ATM system. The team has decided to use MBT for testing the ATM's state-dependent behavior.

## 📑 Requirements

**R1: Card Insertion**
- The ATM is initially idle.
- When a customer inserts a valid card, the ATM reads the card and prompts for PIN.
- When a customer inserts an invalid card, the ATM ejects the card and returns to idle.

**R2: PIN Entry**
- The customer has 3 attempts to enter the correct PIN.
- If the PIN is correct, the ATM displays the main menu.
- If the PIN is incorrect (attempt < 3), the ATM prompts for PIN again.
- If the PIN is incorrect (attempt = 3), the ATM retains the card and returns to idle.

**R3: Main Menu**
- The customer can select: Withdrawal, Balance Inquiry, Transfer, or Cancel.
- Selecting Cancel returns the card and returns to idle.

**R4: Withdrawal**
- The customer enters an amount.
- If balance >= amount, the ATM dispenses cash and prints receipt.
- If balance < amount, the ATM shows "Insufficient funds" and returns to main menu.
- The customer can cancel during withdrawal and return to main menu.

**R5: Completion**
- After any successful transaction, the ATM asks if the customer wants another transaction.
- If yes, return to main menu.
- If no, return the card and return to idle.

---

## 🔄 Task 1: Create the State Machine

Draw a state machine for the ATM system.

**Model Answer:**

**States:**
1. Idle
2. Card Inserted
3. PIN Entry (with attempt counter)
4. Main Menu
5. Withdrawal
6. Processing Withdrawal
7. Transaction Complete
8. Card Retained

**Transitions:**

| From | To | Event | Guard | Action |
|------|-----|-------|-------|--------|
| Idle | Card Inserted | Insert Card | Card valid | Read card |
| Idle | Idle | Insert Card | Card invalid | Eject card |
| Card Inserted | PIN Entry | - | - | Prompt PIN |
| PIN Entry | Main Menu | Enter PIN | PIN correct | - |
| PIN Entry | PIN Entry | Enter PIN | PIN wrong, attempt < 3 | Show error, increment attempt |
| PIN Entry | Card Retained | Enter PIN | PIN wrong, attempt = 3 | Retain card |
| Card Retained | Idle | - | - | Show message |
| Main Menu | Withdrawal | Select Withdrawal | - | - |
| Main Menu | Idle | Cancel | - | Eject card |
| Withdrawal | Processing | Enter Amount | - | Validate amount |
| Processing | Transaction Complete | Confirm | Balance >= amount | Dispense cash, print receipt |
| Processing | Main Menu | Confirm | Balance < amount | Show error |
| Processing | Main Menu | Cancel | - | Cancel |
| Transaction Complete | Main Menu | Select Yes | - | - |
| Transaction Complete | Idle | Select No | - | Eject card |

---

## ✅ Task 2: Define Selection Criteria

The team wants to achieve 1-switch coverage (transition coverage). Calculate the minimum number of test cases needed and design the test cases.

**Model Answer:**

**Total Transitions:** 15 (excluding any that might be merged)

**Minimum Test Cases for 1-Switch:** At least 15 transitions must be exercised, but some can be covered in sequence within single test cases.

**Test Suite:**

| TC | Path | Transitions Covered |
|----|------|-------------------|
| 1 | Idle → Card Inserted → PIN Entry (wrong, attempt=1) → PIN Entry (wrong, attempt=2) → PIN Entry (wrong, attempt=3) → Card Retained → Idle | T1, T5, T5, T5, T6, T7 |
| 2 | Idle → Card Inserted → PIN Entry (correct) → Main Menu → Withdrawal → Processing → Transaction Complete → Main Menu → Cancel → Idle | T1, T4, T8, T10, T11, T13, T14, T9 |
| 3 | Idle → Card Inserted → PIN Entry (correct) → Main Menu → Withdrawal → Processing (insufficient) → Main Menu → Cancel → Idle | T1, T4, T8, T10, T12, T9 |
| 4 | Idle → Idle (invalid card) | T2 |
| 5 | Idle → Card Inserted → PIN Entry (correct) → Main Menu → Withdrawal → Processing → Cancel → Main Menu → Cancel → Idle | T1, T4, T8, T10, T10, T12, T9 |

**Coverage:** All 15 transitions are covered by these 5 test cases.

---

## 📏 Task 3: Boundary Testing on Guards

Identify boundary conditions that need testing.

**Model Answer:**

**Guard: PIN attempt < 3**
- Boundary values: attempt = 2 (just below), attempt = 3 (at boundary)
- Test: Enter wrong PIN twice (attempt=2, still allowed), then wrong PIN third time (attempt=3, card retained)

**Guard: Balance >= Amount**
- Boundary values: Balance = Amount - 1 (just below), Balance = Amount (at boundary), Balance = Amount + 1 (just above)
- Test: Request withdrawal equal to balance (should succeed), request withdrawal of balance + $1 (should fail)

**Guard: Card valid / invalid**
- Boundary: Test with expired card, blocked card, and valid card

---

## 📊 Task 4: Coverage Calculation

After executing the test suite, 14 of 15 transitions were covered. One transition (Cancel during Processing) was not executed.

**Model Answer:**

**Transition Coverage:** 14/15 = 93.3%

**Missing:** Processing → Main Menu (Cancel event)

**Action:** Add a test case that cancels during withdrawal processing.

**Updated Test Suite:**

| TC | Path |
|----|------|
| 6 | Idle → Card Inserted → PIN Entry (correct) → Main Menu → Withdrawal → Processing → Cancel → Main Menu → Cancel → Idle |

**New Coverage:** 15/15 = 100%
