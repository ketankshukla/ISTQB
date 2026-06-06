# Chapter 1 — Introduction to Finance Testing: Exam Traps

## Trap 1: Thinking Finance Testing is Just Functional Testing

**Trap:** Finance testing includes compliance, regulatory, security, and precision aspects beyond standard functional testing.

**Example question:**
> A bank tests that a loan calculator displays the correct monthly payment. This is primarily:
>
> A. Only functional testing
> B. Finance testing that includes functional accuracy, compliance, and auditability
> C. Only performance testing
> D. Only usability testing

**Correct answer:** B — Finance testing encompasses functional, compliance, and audit requirements.

---

## Trap 2: Confusing Accuracy with Precision

**Trap:** Accuracy = correct value. Precision = number of decimal places. A value can be precise but inaccurate.

**Example question:**
> A system displays an account balance as $1,000.0000 when the actual balance is $1,001.23. The system has:
>
> A. High accuracy and high precision
> B. High precision but low accuracy
> C. Low precision but high accuracy
> D. Neither accuracy nor precision

**Correct answer:** B — Many decimal places (precision) but wrong value (inaccuracy).

---

## Trap 3: Underestimating Regulatory Testing Scope

**Trap:** Regulatory testing is not optional. It is mandatory and legally enforceable.

**Example question:**
> A startup skips compliance testing because "we are small." The risk is:
>
> A. Minimal for small companies
> B. Regulatory fines, license revocation, and legal liability regardless of company size
> C. Only reputational damage
> D. Only customer complaints

**Correct answer:** B — Compliance is mandatory for all regulated entities.

---

## Trap 4: Treating Audit Trails as Optional

**Trap:** Financial systems require immutable audit trails by law. Transactions cannot be deleted.

**Example question:**
> A tester finds an incorrect transaction and deletes it from the database. This is:
>
> A. Correct testing practice
> B. A violation of financial audit requirements; should be reversed via a compensating transaction
> C. Acceptable if the tester documents it
> D. Only wrong if the amount exceeds $1,000

**Correct answer:** B — Deletion violates immutability; compensating transactions are required.

---

## Trap 5: Ignoring Stakeholder Diversity

**Trap:** Different stakeholders have different testing priorities. Traders care about speed; compliance officers care about accuracy and auditability.

**Example question:**
> A trading system optimization reduces order latency by 50% but removes detailed audit logging. The primary concern is from:
>
> A. Traders who are happy with the speed improvement
> B. Compliance officers who require complete audit trails for regulatory purposes
> C. Marketing who wants to advertise the speed
> D. HR who manages the development team

**Correct answer:** B — Compliance officers need audit trails; this change creates regulatory risk.
