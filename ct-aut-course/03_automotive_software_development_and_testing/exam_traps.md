# Chapter 3 — Automotive Software Development and Testing: Exam Traps

## Trap 1: Skipping Unit Testing for Integration Testing

**Trap:** Unit testing catches issues early. Skipping it makes integration harder.

**Example question:**
> A team skips unit testing and goes straight to HIL integration testing. The likely result is:
>
> A. Faster overall testing
> B. Integration failures caused by untested component defects; debugging is harder in complex environments
> C. Only more expensive HIL time
> D. Only more documentation

**Correct answer:** B — Unit testing catches issues before expensive integration.

---

## Trap 2: Testing Without Configuration Management

**Trap:** Without CM, tests may run against wrong code versions, producing invalid results.

**Example question:**
> A team runs system tests but doesn't track which code version is in the ECU. The risk is:
>
> A. No risk — tests are the same
> B. Test results may not be reproducible or traceable to a specific version
> C. Only slower execution
> D. Only more storage

**Correct answer:** B — CM ensures reproducibility.

---

## Trap 3: Treating OTA Like Fresh Installation

**Trap:** OTA must handle partial states, rollback, and compatibility with unupdated ECUs.

**Example question:**
> OTA update testing is identical to initial installation testing. This is:
>
> A. Correct — installation is installation
> B. Incorrect — OTA requires rollback testing, compatibility with partial updates, and verification of update integrity
> C. Only wrong for safety systems
> D. Only wrong for infotainment

**Correct answer:** B — OTA has unique testing requirements.

---

## Trap 4: One-Way Traceability Only

**Trap:** Bidirectional traceability is needed for both coverage and impact analysis.

**Example question:**
> A team maintains links from requirements to tests but not from tests to requirements. The missing capability is:
>
> A. Nothing — forward traceability is sufficient
> B. Impact analysis when tests fail and determining which requirements are affected
> C. Only for compliance
> D. Only for management reporting

**Correct answer:** B — Backward traceability supports impact analysis.

---

## Trap 5: Same Regression Suite for Every Change

**Trap:** Risk-based regression selects tests based on change impact, not runs everything every time.

**Example question:**
> A team runs the full 500-test regression suite for every minor code change. A better approach is:
>
> A. Continue — thoroughness is good
> B. Risk-based selection: run tests affected by the change, with higher coverage for safety-critical areas
> C. Only run unit tests
> D. Only skip regression entirely

**Correct answer:** B — Risk-based regression optimizes effort.
