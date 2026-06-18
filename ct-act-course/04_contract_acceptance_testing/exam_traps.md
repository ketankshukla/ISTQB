# 🪤 Chapter 4 — Contract Acceptance Testing: Exam Traps

## 🪤 Trap 1: Confusing CAT with BAT

**Trap:** CAT validates contractual obligations. BAT validates business needs. They have different criteria sources and stakeholders.

**Example question:**
> A procurement team verifies that a vendor-delivered system matches the technical specifications in the contract. This is:
>
> A. Business Acceptance Testing
> B. Contract Acceptance Testing
> C. Operational Acceptance Testing
> D. Alpha testing

**Correct answer:** B — Contractual verification = CAT.

---

## 🪤 Trap 2: Ignoring Contractual Remedies

**Trap:** Contracts include penalties and remedies for non-compliance. CAT determines whether remedies should be invoked.

**Example question:**
> A supplier delivers a system 3 weeks late but claims the system works well. The customer should:
>
> A. Accept because the system works
> B. Evaluate against contract terms and invoke remedies (e.g., liquidated damages) if late delivery penalties apply
> C. Ignore the delay
> D. Pay a bonus

**Correct answer:** B — Contract terms govern acceptance, not just functional quality.

---

## 🪤 Trap 3: Confusing SLAs with Acceptance Criteria

**Trap:** SLAs are ongoing service commitments. Acceptance criteria are one-time validation conditions for delivery.

**Example question:**
> "System availability must be 99.9%" in a SaaS contract is:
>
> A. Only an acceptance criterion
> B. An SLA that applies throughout the contract period, not just at acceptance
> C. A test case
> D. A user story

**Correct answer:** B — Availability is typically an ongoing SLA measured continuously, not a one-time acceptance gate.

---

## 🪤 Trap 4: Thinking Outsourcing Means No Customer Testing

**Trap:** Even with outsourced development, the customer must perform acceptance testing to verify the delivered system.

**Example question:**
> A company outsources development and skips acceptance testing, relying solely on the vendor's test reports. The risk is:
>
> A. No risk — vendors always deliver quality
> B. The customer has no independent verification that the system meets their specific needs and contractual requirements
> C. The vendor will be happier
> D. Testing costs will be lower

**Correct answer:** B — Customer acceptance testing provides independent verification.

---

## 🪤 Trap 5: Confusing Milestone Payments with Acceptance

**Trap:** Payment milestones are often tied to acceptance decisions, but they are not the same thing. Acceptance is a quality decision; payment is a financial one.

**Example question:**
> A contract states 20% payment on "successful acceptance testing." The customer passes the tests but has concerns about usability. They should:
>
> A. Automatically pay because tests passed
> B. Document concerns, negotiate resolution, and only approve payment when satisfied or risks are accepted
> C. Refuse to pay anything
> D. Pay double to encourage the vendor

**Correct answer:** B — Acceptance is a business/quality decision. Test pass is one input, but not the only consideration.
