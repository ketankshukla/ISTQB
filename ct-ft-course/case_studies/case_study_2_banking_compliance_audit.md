# Case Study 2 — Banking Compliance Audit

## Context

You are the Compliance Test Manager for SecureBank, preparing for an external SOX audit of the loan origination system.

**System:**
- Customer applies for personal loans online
- System calculates risk score, interest rate, and maximum loan amount
- Loans require credit committee approval above $50,000
- All decisions logged for audit

**Audit Requirements:**
- SOX 404: Internal controls over financial reporting
- All loan data must be immutable after booking
- Segregation of duties: Originator cannot approve
- IT general controls: Change management, access control

---

## Task 1: Control Testing Plan

**Question:** Design tests for SOX controls in the loan system.

**Model Answer:**

| Control ID | Control Description | Test Procedure | Expected Result |
|------------|---------------------|----------------|-----------------|
| SOX-001 | Loan booking requires dual approval above $50K | Submit $60K loan with single approval | System blocks; requires second approver |
| SOX-002 | All loan data immutable after booking | Attempt to modify booked loan amount | System rejects; audit log records attempt |
| SOX-003 | Credit scoring model changes require CAB approval | Deploy model change without CAB ticket | Deployment blocked by change management |
| SOX-004 | Only authorized users can access production data | Attempt access with unauthorized role | Access denied; security log generated |
| SOX-005 | End-of-day loan balances reconcile to GL | Run reconciliation report | All balances match within $0.01 |

---

## Task 2: Segregation of Duties

**Question:** Test that a loan officer cannot approve their own loans.

**Model Answer:**

**Test Steps:**
1. Login as Loan Officer A
2. Create and submit a loan application
3. Attempt to approve the same loan
4. Expected: System blocks approval with message "Originator cannot approve"
5. Login as Loan Officer B
6. Attempt to approve Loan Officer A's loan
7. Expected: Approval succeeds

**Additional Tests:**
- Test that Loan Officer A cannot modify loan terms after submission
- Verify that approver identity is recorded in audit log
- Confirm that system enforces the rule at API level (not just UI)

---

## Task 3: Data Immutability

**Question:** Verify that booked loans cannot be altered.

**Model Answer:**

**Valid Operations:**
- View loan details
- Generate statements
- Process payments (new transactions added, original unchanged)
- Mark as defaulted (status change with audit reason)

**Blocked Operations:**
- Change principal amount
- Modify interest rate
- Alter customer information
- Delete loan record

**Audit Requirements:**
- Every view access logged (read audit)
- Every status change logged with before/after values
- Audit logs themselves are immutable
- Retention: 7 years per banking regulations

---

## Task 4: Audit Evidence Package

**Question:** Prepare the evidence package for the external auditor.

**Model Answer:**

| Evidence | Description | Status |
|----------|-------------|--------|
| Control test results | All 25 SOX controls tested with pass/fail | 24 Pass, 1 Pass with remediation |
| User access review | Quarterly review of all production access | Current, no exceptions |
| Change tickets | All production changes in past year | 100% have CAB approval |
| Reconciliation reports | EOD loan to GL reconciliation | 365 days, zero breaks |
| Penetration test | Annual security assessment | Pass, 2 medium findings addressed |
| Code review logs | All loan system changes peer-reviewed | 100% reviewed |

**Finding:** One medium finding — model version tracking could be clearer. Remediation: Add model version to all loan decision records.
