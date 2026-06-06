# Chapter 1 — Introduction to Acceptance Testing: Exam Traps

## Trap 1: Confusing Acceptance Testing with System Testing

**Trap:** Acceptance testing validates business needs; system testing validates technical specifications. They have different objectives, audiences, and criteria.

**Example question:**
> A tester verifies that the system correctly handles 10,000 concurrent users. This is:
>
> A. Acceptance testing
> B. System testing
> C. Integration testing
> D. Unit testing

**Correct answer:** B — Performance/load validation = system testing. Acceptance testing would focus on whether users can complete their business tasks under normal conditions.

---

## Trap 2: Thinking Acceptance Criteria Are Just System Requirements

**Trap:** Acceptance criteria are business-focused and testable by users. System requirements are technical and detailed.

**Example question:**
> "The system shall use TLS 1.3 for all communications" is:
>
> A. An acceptance criterion
> B. A system requirement
> C. Both
> D. Neither

**Correct answer:** B — This is a technical implementation detail = system requirement. An acceptance criterion would be "Customer data is protected during transmission" (business-focused, testable).

---

## Trap 3: Confusing Alpha and Beta Testing

**Trap:** Alpha = internal, controlled, developer's site. Beta = external, real-world, user's site.

**Example question:**
> A software company invites 500 existing customers to test a new feature on their own devices. This is:
>
> A. Alpha testing
> B. Beta testing
> C. UAT
> D. OAT

**Correct answer:** B — External users, real-world environment = beta testing. Alpha would be internal.

---

## Trap 4: Thinking Acceptance Testing Is Only UAT

**Trap:** Acceptance testing includes UAT, OAT, CAT, and RAT. UAT is just one type.

**Example question:**
> A team validates that backup and recovery procedures work before releasing a new system. This is:
>
> A. UAT
> B. OAT
> C. Alpha testing
> D. Integration testing

**Correct answer:** B — Operational aspects (backup/recovery) = Operational Acceptance Testing (OAT).

---

## Trap 5: Ignoring Stakeholder Roles

**Trap:** Business representatives define criteria and make acceptance decisions. Developers and testers support but don't decide.

**Example question:**
> The development team decides whether a system passes acceptance testing. This is:
>
> A. Correct — developers know the system best
> B. Incorrect — acceptance decisions should be made by business representatives or authorized stakeholders, not developers
> C. Only true for agile teams
> D. Required by ISTQB

**Correct answer:** B — Acceptance decisions must be independent and made by business stakeholders to avoid conflicts of interest.
