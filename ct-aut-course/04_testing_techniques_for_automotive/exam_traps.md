# 🪤 Chapter 4 — Testing Techniques for Automotive: Exam Traps

## 🪤 Trap 1: Using Only Functional Testing for Safety-Critical Code

**Trap:** Safety-critical code needs structural coverage (branch, MC/DC) and fault injection, not just functional tests.

**Example question:**
> A team tests brake control software only with functional test cases (apply brake, verify stop). For ASIL D, they also need:
>
> A. Nothing — functional tests are sufficient
> B. MC/DC coverage, fault injection, and boundary value analysis
> C. Only more functional tests
> D. Only performance tests

**Correct answer:** B — ASIL D requires rigorous structural and fault testing.

---

## 🪤 Trap 2: Boundary Values at Type Limits Only

**Trap:** Boundary values are at specification limits, not just data type limits.

**Example question:**
> A vehicle speed sensor uses a uint16 (0-65535). The test boundary values should be:
>
> A. 0, 1, 65534, 65535 (type limits)
> B. 0, 1, 299, 300 (specification limits, assuming max speed 300 km/h)
> C. Only 0 and 65535
> D. Only 300

**Correct answer:** B — Boundaries are at specification limits.

---

## 🪤 Trap 3: Ignoring Invalid Equivalence Partitions

**Trap:** Invalid partitions often reveal robustness issues.

**Example question:**
> Equivalence partitioning for gear position includes only P, R, N, D. The missing partition is:
>
> A. Nothing — those are all gears
> B. Invalid values that test how the system handles unexpected input
> C. Only S (sport mode)
D. Only L (low mode)

**Correct answer:** B — Invalid partitions test robustness.

---

## 🪤 Trap 4: Testing Only Happy Path State Transitions

**Trap:** State machines must be tested for error paths, guard conditions, and unexpected events.

**Example question:**
> A door lock state machine is tested for lock → unlock → lock. Missing tests likely include:
>
> A. Nothing — the cycle is complete
> B. Crash auto-unlock, invalid key attempts, and guard condition violations
> C. Only speed variation
> D. Only battery voltage

**Correct answer:** B — Test error paths and guards.

---

## 🪤 Trap 5: Fault Injection Replaces Normal Testing

**Trap:** Fault injection supplements but doesn't replace normal functional and structural testing.

**Example question:**
> A team performs extensive fault injection but skips boundary value and coverage testing. The risk is:
>
> A. No risk — fault injection is comprehensive
> B. Normal operational boundaries and code paths may not be adequately tested
> C. Only that tests are too long
> D. Only that tests are too expensive

**Correct answer:** B — Fault injection supplements, not replaces, other techniques.
