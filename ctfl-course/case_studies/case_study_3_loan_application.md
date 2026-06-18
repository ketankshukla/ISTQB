# 📂 Case Study 3: Online Loan Application

## ⭐ System Description

A financial services company offers personal loans through an online application form. The system collects applicant information, performs eligibility checks, calculates an interest rate, and produces a loan offer or rejection.

---

## 📑 Requirements Specification

### 🔷 REQ-LOAN-001: Applicant Age
- Minimum age: 21 years
- Maximum age: 65 years
- Age is calculated from date of birth to current date

### 🔷 REQ-LOAN-002: Loan Amount
- Minimum loan: $5,000
- Maximum loan: $50,000
- Must be in increments of $1,000

### 🔷 REQ-LOAN-003: Loan Term
- Minimum term: 12 months
- Maximum term: 60 months
- Must be in increments of 6 months (12, 18, 24, 30, 36, 42, 48, 54, 60)

### 🔷 REQ-LOAN-004: Employment Status
- Applicant must be employed (full-time, part-time, or self-employed)
- Unemployed applicants are immediately rejected

### 🔷 REQ-LOAN-005: Interest Rate Calculation
The interest rate depends on the combination of loan amount and credit score:

| Credit Score | Loan $5K-$20K | Loan $20K+ |
|--------------|---------------|------------|
| Excellent (750+) | 5.9% | 6.9% |
| Good (650-749) | 8.9% | 9.9% |
| Fair (550-649) | 12.9% | 14.9% |
| Poor (below 550) | Rejected | Rejected |

### 🔷 REQ-LOAN-006: Monthly Payment Display
The system shall display the calculated monthly payment using standard amortization formula before the applicant confirms.

### 🔷 REQ-LOAN-007: Application Submission
- All required fields must be completed before submission
- Upon successful submission, display application reference number
- Send confirmation email with offer details

---

## ⭐ User Stories

**US-1: Apply for Loan**
```
As a potential borrower,
I want to apply for a personal loan online,
So that I can get funds without visiting a branch.
```

Acceptance Criteria:
- Given I am 21-65 years old and employed, When I complete all required fields and submit, Then I see my loan offer with interest rate and monthly payment
- Given I am under 21, When I enter my date of birth, Then I see "You must be at least 21 years old"
- Given my credit score is below 550, When the system checks eligibility, Then I see "Application declined"
- Given I request a loan amount not in $1000 increments, When I submit, Then I see a validation error

---

## 🎯 Applying Test Techniques

### ➗ 1. Equivalence Partitioning on Age (REQ-LOAN-001)

| Partition | Range | Expected | Valid/Invalid |
|-----------|-------|----------|---------------|
| P1 | Age < 21 | Rejected: too young | Invalid |
| P2 | Age 21 to 65 | Eligible (if other criteria met) | Valid |
| P3 | Age > 65 | Rejected: too old | Invalid |
| P4 | Invalid DOB (future date, impossible date) | Validation error | Invalid |

### ➗ 2. Equivalence Partitioning on Loan Amount (REQ-LOAN-002)

| Partition | Range | Expected | Valid/Invalid |
|-----------|-------|----------|---------------|
| P1 | Amount < $5,000 | Error: below minimum | Invalid |
| P2 | $5,000 to $50,000, multiple of $1,000 | Accepted | Valid |
| P3 | Amount > $50,000 | Error: above maximum | Invalid |
| P4 | Not multiple of $1,000 (e.g., $7,500) | Error: invalid increment | Invalid |

### 🔷 3. BVA on Loan Amount

| Value | Expected | Boundary Position |
|-------|----------|-------------------|
| $4,000 | Invalid (below min, but also not multiple issue) | Below lower |
| $5,000 | Valid minimum | Lower boundary |
| $50,000 | Valid maximum | Upper boundary |
| $51,000 | Invalid (above max) | Above upper |

### 🔷 4. BVA on Credit Score Thresholds (for interest rate)

| Value | Expected Rate Category | Boundary |
|-------|------------------------|----------|
| 549 | Rejected (Poor) | Just below 550 |
| 550 | Fair (12.9% / 14.9%) | At 550 boundary |
| 649 | Fair | Just below 650 |
| 650 | Good (8.9% / 9.9%) | At 650 boundary |
| 749 | Good | Just below 750 |
| 750 | Excellent (5.9% / 6.9%) | At 750 boundary |

### 🗂️ 5. Decision Table for Interest Rate (REQ-LOAN-005)

**Conditions:**
- C1: Credit score category (Excellent / Good / Fair / Poor)
- C2: Loan amount category ($5K-$20K / $20K+)

**Decision Table:**

| | R1 | R2 | R3 | R4 | R5 | R6 | R7 |
|---|---|---|---|---|---|---|---|
| C1: Score | Excellent | Excellent | Good | Good | Fair | Fair | Poor |
| C2: Amount | $5K-$20K | $20K+ | $5K-$20K | $20K+ | $5K-$20K | $20K+ | - |
| Rate | 5.9% | 6.9% | 8.9% | 9.9% | 12.9% | 14.9% | Rejected |

**7 test cases** (R7 has "don't care" for amount since application is rejected regardless).

**Test data:**

| TC | Credit Score | Loan Amount | Expected Rate |
|----|--------------|-------------|---------------|
| TC1 | 780 | $10,000 | 5.9% |
| TC2 | 780 | $30,000 | 6.9% |
| TC3 | 700 | $15,000 | 8.9% |
| TC4 | 700 | $25,000 | 9.9% |
| TC5 | 600 | $10,000 | 12.9% |
| TC6 | 600 | $35,000 | 14.9% |
| TC7 | 500 | $10,000 | Rejected |

### 🔄 6. State Transition for Application Process

**States:**
- S1: Form Entry (applicant filling in details)
- S2: Validation Complete (all fields valid)
- S3: Eligibility Check (credit score and employment verified)
- S4: Offer Presented (rate and payment displayed)
- S5: Application Submitted (confirmed by applicant)
- S6: Rejected (eligibility failed)

**Transitions:**

| From | Event | To |
|------|-------|----|
| S1 | Submit form | S2 (if valid) or S1 (if validation errors) |
| S2 | System runs eligibility | S3 |
| S3 | Eligible | S4 |
| S3 | Not eligible | S6 |
| S4 | Applicant accepts offer | S5 |
| S4 | Applicant declines/cancels | S1 |
| S6 | Applicant acknowledged | S1 (can try new application) |

**0-switch coverage: 7 transitions -> minimum 3 test paths:**
- Path 1: S1 -> S2 -> S3 -> S4 -> S5 (happy path)
- Path 2: S1 -> S1 (validation fail) + S3 -> S6 -> S1 (rejection)
- Path 3: S4 -> S1 (applicant cancels)

---

## ⚠️ Risk-Based Test Approach

| ID | Risk | Likelihood | Impact | Level |
|----|------|------------|--------|-------|
| R1 | Interest rate calculated incorrectly | 3 | 5 | 15 High |
| R2 | Age validation allows underage applicants | 2 | 5 | 10 High |
| R3 | Monthly payment calculation error | 3 | 4 | 12 High |
| R4 | Credit score boundary mishandled (549 treated as Fair) | 3 | 4 | 12 High |
| R5 | Loan amount increment validation missing | 2 | 3 | 6 Medium |
| R6 | Confirmation email not sent | 2 | 2 | 4 Low |

**Testing priority:** R1, R4, R3, R2, R5, R6

**Test strategy for top risks:**
- R1: Decision table covering all score/amount combinations + BVA at boundaries
- R4: BVA specifically at 549/550, 649/650, 749/750
- R3: Verify calculation with known inputs against amortization formula
- R2: BVA at age 20/21 and 65/66 boundaries

---

## 💡 Statement/Branch Coverage Example

**Interest rate lookup code:**

```
1: function getInterestRate(creditScore, loanAmount) {
2:     if (creditScore < 550) {
3:         return "REJECTED"
4:     }
5:     if (loanAmount <= 20000) {
6:         tier = "LOW"
7:     } else {
8:         tier = "HIGH"
9:     }
10:    if (creditScore >= 750) {
11:        if (tier == "LOW") {
12:            return 5.9
13:        } else {
14:            return 6.9
15:        }
16:    } else if (creditScore >= 650) {
17:        if (tier == "LOW") {
18:            return 8.9
19:        } else {
20:            return 9.9
21:        }
22:    } else {
23:        if (tier == "LOW") {
24:            return 12.9
25:        } else {
26:            return 14.9
27:        }
28:    }
29: }
```

**Branches:** Line 2(T/F), Line 5(T/F), Line 10(T/F), Line 11(T/F), Line 16(T/F), Line 17(T/F), Line 23(T/F) = 14 branches

**For 100% branch coverage, need test cases hitting every T/F outcome:**

| TC | creditScore | loanAmount | Path | Returns |
|----|-------------|------------|------|---------|
| TC1 | 500 | 10000 | L2T -> REJECTED | REJECTED |
| TC2 | 800 | 15000 | L2F, L5T, L10T, L11T | 5.9 |
| TC3 | 800 | 30000 | L2F, L5F, L10T, L11F | 6.9 |
| TC4 | 700 | 15000 | L2F, L5T, L10F, L16T, L17T | 8.9 |
| TC5 | 700 | 30000 | L2F, L5F, L10F, L16T, L17F | 9.9 |
| TC6 | 580 | 15000 | L2F, L5T, L10F, L16F, L23T | 12.9 |
| TC7 | 580 | 30000 | L2F, L5F, L10F, L16F, L23F | 14.9 |

**7 test cases for 100% branch coverage (14/14 branches).**

---

## 🐞 Sample Defect Report

```
ID:             BUG-LOAN-118
Title:          Applicant aged exactly 65 is rejected with "too old" 
                message despite 65 being within valid range
Severity:       Medium
Priority:       High
Component:      Age Validation / Eligibility Module
Environment:    Chrome 122, Production-like staging environment
Steps:
1. Enter date of birth that makes applicant exactly 65 years old today
2. Complete all other fields with valid data (employed, score 700, $10K loan)
3. Submit application
Expected: Application proceeds to eligibility check (age 21-65 inclusive per REQ-LOAN-001)
Actual: Error message "You must be 65 or younger to apply" displayed, application blocked
Analysis: Likely off-by-one error — code probably uses (age < 65) instead of (age <= 65)
Related Req: REQ-LOAN-001
```

---

## ❓ Reflection Questions

1. The interest rate boundary at $20,000 loan amount — should a $20,000 loan get the lower-tier rate or the higher-tier rate? How would you test this ambiguity?

2. How would EP + BVA work together for the loan term field (12, 18, 24, 30, 36, 42, 48, 54, 60 months)?

3. What additional experience-based (error guessing) tests would you add for the date-of-birth field?

4. How does the decision table technique complement EP/BVA in this case study?

---

## ⭐ Worked Solutions

**1.** REQ-LOAN-005 shows the boundary as "$5K-$20K" vs "$20K+". This is ambiguous: does $20,000 exactly fall in the first category or the second? A good tester would: (a) file a defect against the requirement for ambiguity, (b) test $20,000 specifically and observe which rate is applied, (c) test $19,999 and $20,001 as BVA boundaries. This is a classic case where BVA reveals a requirements ambiguity that EP alone would miss.

**2.** The loan term is a discrete set of valid values (12, 18, 24, ..., 60) rather than a continuous range. EP partitions: Valid = {12, 18, 24, 30, 36, 42, 48, 54, 60}; Invalid = any other value (e.g., 15, 11, 61, 0, negative). BVA applies at the edges of the valid set: 11 (below min), 12 (min), 60 (max), 61 (above max), and at increment boundaries (e.g., 13, 17, 19 are invalid despite being within the numeric range).

**3.** Error guessing for DOB: (a) February 29 in non-leap year; (b) Future date; (c) Very old date (120+ years); (d) Exactly today (age 0); (e) Date with ambiguous format (01/02/2000 — is it Jan 2 or Feb 1?); (f) Person who turns 21 tomorrow vs today; (g) Person who turns 66 tomorrow (today is their last valid day); (h) Invalid dates like 2024-13-01 or 2024-02-30.

**4.** EP/BVA identify individual input boundaries (score boundaries, amount boundaries, age boundaries). The decision table shows how these inputs COMBINE to produce different outcomes (the interest rate grid). Without the decision table, you might test each input in isolation but miss that the combination of score=650 + amount=$20,001 produces a different rate than score=650 + amount=$19,999. The decision table ensures all meaningful combinations are explicitly tested.
