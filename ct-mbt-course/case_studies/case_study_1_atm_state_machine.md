# Case Study 1 — ATM State Machine

## Context

You are the Test Lead for BankSecure, developing a new ATM system. The team has decided to use model-based testing for the core transaction workflow.

**System:** ATM (Automated Teller Machine)
**Features:** Card insertion, PIN validation, balance inquiry, withdrawal, deposit, transfer, PIN change
**Team:** 3 testers, 2 developers, 1 business analyst
**Timeline:** 6 months to release

## The Model

The team has created the following UML state machine for the ATM:

```
States:
S1: Idle (screen shows "Insert Card")
S2: Card Inserted (reading card data)
S3: PIN Entry (waiting for PIN)
S4: PIN Validating (verifying PIN)
S5: Main Menu (balance, withdrawal, deposit, transfer, PIN change)
S6: Balance Inquiry (displaying balance)
S7: Withdrawal (selecting amount)
S8: Deposit (accepting cash)
S9: Transfer (selecting destination and amount)
S10: PIN Change (entering new PIN)
S11: Transaction Processing (communicating with bank)
S12: Transaction Complete (dispensing cash/receipt)
S13: Card Ejected (returning card)
S14: Error (displaying error message)

Transitions:
T1: S1 → S2 (event: insert card)
T2: S2 → S3 (event: card read successfully)
T3: S2 → S14 (event: invalid card)
T4: S3 → S4 (event: enter PIN)
T5: S4 → S5 (guard: PIN correct; action: reset attempt counter)
T6: S4 → S3 (guard: PIN incorrect, attempts < 3; action: increment counter)
T7: S4 → S13 (guard: PIN incorrect, attempts == 3; action: lock card)
T8: S5 → S6 (event: select balance)
T9: S5 → S7 (event: select withdrawal)
T10: S5 → S8 (event: select deposit)
T11: S5 → S9 (event: select transfer)
T12: S5 → S10 (event: select PIN change)
T13: S5 → S13 (event: cancel)
T14: S6 → S5 (event: continue)
T15: S7 → S11 (guard: amount <= balance; event: confirm)
T16: S7 → S14 (guard: amount > balance; event: confirm)
T17: S7 → S5 (event: cancel)
T18: S8 → S11 (event: confirm deposit)
T19: S8 → S5 (event: cancel)
T20: S9 → S11 (event: confirm transfer)
T21: S9 → S5 (event: cancel)
T22: S10 → S5 (guard: new PIN valid; event: confirm)
T23: S10 → S14 (guard: new PIN invalid)
T24: S10 → S5 (event: cancel)
T25: S11 → S12 (guard: transaction approved)
T26: S11 → S14 (guard: transaction declined)
T27: S12 → S13 (event: complete)
T28: S14 → S13 (event: acknowledge error)
T29: S13 → S1 (event: card removed)
```

---

## Task 1: Coverage Analysis

**Question:** Calculate the minimum number of test cases needed for state coverage and transition coverage.

**Model Answer:**

**State Coverage:**
- 14 states total
- Minimum tests: A path that visits all states

Test 1: S1 → S2 → S3 → S4 → S5 → S6 → S5 → S7 → S11 → S12 → S13 → S1
(Covers: S1, S2, S3, S4, S5, S6, S7, S11, S12, S13)

Missing: S8, S9, S10, S14

Test 2: S1 → S2 → S3 → S4 → S5 → S8 → S11 → S12 → S13 → S1
(Covers: S8)

Test 3: S1 → S2 → S3 → S4 → S5 → S9 → S11 → S12 → S13 → S1
(Covers: S9)

Test 4: S1 → S2 → S3 → S4 → S5 → S10 → S5 → ...
(Covers: S10)

Test 5: S1 → S2 → S14 → S13 → S1
(Covers: S14)

**Minimum: 5 test cases for state coverage.**

**Transition Coverage:**
- 29 transitions total
- Need to trace each transition at least once

Optimized paths:
Test 1: S1→S2→S3→S4→S5→S6→S5→S7→S11→S12→S13→S1
(Covers: T1, T2, T4, T5, T8, T14, T9, T15, T25, T27, T13, T29)

Test 2: S1→S2→S3→S4→S3→S4→S13→S1
(Covers: T1, T2, T4, T6, T4, T7, T29)

Test 3: S1→S2→S14→S13→S1
(Covers: T1, T3, T28, T29)

Test 4: S5→S8→S11→S14→S13→S1
(Covers: T10, T18, T26, T28, T29)

Test 5: S5→S9→S5→S10→S5
(Covers: T11, T20, T21, T12, T22, T24)

And so on... Transition coverage requires more careful path planning but is achievable with approximately 8-10 test cases.

---

## Task 2: Selection Criteria Design

**Question:** Design test selection criteria for different risk levels.

**Model Answer:**

**High-Risk Areas (financial transactions):**
- Withdrawal (T15, T16, T7, T25, T26)
- Transfer (T20, T26)
- PIN validation (T5, T6, T7)

**Criteria for High-Risk:**
- Transition coverage for all transaction paths
- Transition pair coverage for: S4→S5→S7, S4→S5→S9, S7→S11→S12, S7→S11→S14
- Boundary values: amount = 0, amount = balance, amount = balance + 1

**Medium-Risk Areas (balance, deposit, PIN change):**
- Balance inquiry (T8, T14)
- Deposit (T10, T18, T19)
- PIN change (T12, T22, T23, T24)

**Criteria for Medium-Risk:**
- Transition coverage
- State coverage

**Low-Risk Areas (basic flow):**
- Card reading, menu navigation

**Criteria for Low-Risk:**
- State coverage only

**Combined Strategy:**
| Area | Coverage | Additional Tests |
|------|----------|-----------------|
| Withdrawal/Transfer | All transitions + boundary values + error paths | 15 tests |
| PIN validation | All transitions + 3-attempt lockout | 8 tests |
| Deposit/Balance/PIN change | Transition coverage | 10 tests |
| Basic flow | State coverage | 5 tests |

---

## Task 3: Concretization

**Question:** Create a concrete test case from an abstract test for withdrawal.

**Model Answer:**

**Abstract Test:**
```
Path: S1 → S2 → S3 → S4 → S5 → S7 → S11 → S12 → S13 → S1
Transitions: T1, T2, T4, T5, T9, T15, T25, T27, T29
```

**Concretization:**

Test Data:
- Card: Test card #4532-1234-5678-9012 (valid, PIN: 1234)
- Account balance: $5,000
- Withdrawal amount: $200

**Concrete Test Case:**
```
Test: TC-WITHDRAWAL-001 - Valid Withdrawal
Precondition: ATM is operational, test card has $5,000 balance

Step 1: Insert test card into card slot
  Expected: ATM beeps, screen shows "Reading card..."
  Verify: State = S2

Step 2: Wait for card read
  Expected: Screen shows "Enter PIN"
  Verify: State = S3

Step 3: Enter PIN "1234" on keypad
  Expected: Screen briefly shows "Validating..."
  Verify: State = S4

Step 4: Wait for validation
  Expected: Screen shows main menu (Balance, Withdrawal, Deposit, Transfer, PIN Change)
  Verify: State = S5

Step 5: Press "Withdrawal" button
  Expected: Screen shows "Enter amount: $___"
  Verify: State = S7

Step 6: Enter amount "200"
  Expected: Screen shows "Confirm: Withdraw $200?"
  Verify: State = S7 (confirmation sub-state)

Step 7: Press "Confirm"
  Expected: Screen shows "Processing..."
  Verify: State = S11

Step 8: Wait for bank response
  Expected: Screen shows "Transaction approved. Please take cash."
  Verify: State = S12
  Verify: Cash dispenser outputs $200

Step 9: Take cash and receipt
  Expected: Screen shows "Please take your card"
  Verify: State = S13
  Verify: Card is ejected

Step 10: Remove card
  Expected: Screen returns to "Insert Card"
  Verify: State = S1

Postcondition: Card balance = $4,800; receipt printed
```

---

## Task 4: Failure Analysis

**Question:** A withdrawal test fails. The ATM shows "Processing..." indefinitely. Analyze possible causes.

**Model Answer:**

**Symptom:** Test reaches S11 (Transaction Processing) but never transitions to S12 or S14.

**Possible Causes:**

1. **SUT Defect:**
   - Bank communication module has a timeout bug
   - Network connection to bank server is down
   - Transaction processing logic has an infinite loop

2. **Environment Issue:**
   - Bank simulator not running
   - Network configuration incorrect for test environment
   - Test database has locking issues

3. **Concretization Error:**
   - Test data (card number) not recognized by bank simulator
   - Amount format incorrect for the ATM protocol

4. **Model Issue:**
   - Model assumes processing completes within a time limit, but no timeout is modeled
   - Missing transition for timeout scenario

**Diagnostic Steps:**
1. Check ATM logs for error messages
2. Verify bank simulator is running and responding
3. Test with a different card/amount to isolate data issues
4. Check network connectivity between ATM and bank simulator
5. Review model for missing timeout/exception transitions

**Fix:**
- If SUT bug: Log defect, fix timeout handling
- If environment: Start simulator, fix network config
- If concretization: Update test data mapping
- If model: Add timeout transition S11 → S14
