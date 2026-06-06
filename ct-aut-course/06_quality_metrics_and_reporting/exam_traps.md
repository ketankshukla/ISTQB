# Chapter 6 — Quality Metrics and Reporting: Exam Traps

## Trap 1: 100% Coverage Means No Bugs

**Trap:** Coverage measures what was executed, not correctness of assertions or completeness of scenarios.

**Example question:**
> A module achieves 100% MC/DC coverage. This guarantees:
>
> A. The module has no defects
> B. All conditions were exercised, but logic errors and missing requirements may still exist
> C. Only that the code is fast
> D. Only that the code is secure

**Correct answer:** B — Coverage ≠ correctness.

---

## Trap 2: Reporting Only Pass Rate

**Trap:** Pass rate without coverage context can be misleading. 100% pass with 50% coverage is concerning.

**Example question:**
> A test report shows 98% pass rate. Without coverage information, this might hide:
>
> A. Nothing — 98% is excellent
> B. Low coverage — many code paths may be untested despite few failures
> C. Only that tests are too easy
> D. Only that testers are skilled

**Correct answer:** B — Pass rate must be viewed with coverage.

---

## Trap 3: Skipping Coverage for "Generated Code"

**Trap:** Generated code runs in the vehicle and must be tested and covered like hand-written code.

**Example question:**
> A team excludes auto-generated code from coverage analysis. The risk is:
>
> A. No risk — generated code is correct by design
> B. Generated code may contain defects and runs in production; it needs testing and coverage
> C. Only that coverage numbers are lower
> D. Only that auditors complain

**Correct answer:** B — Generated code needs testing too.

---

## Trap 4: Treating Defect Density as the Only Quality Measure

**Trap:** High defect density in low-ASIL code may be less concerning than one defect in ASIL D code.

**Example question:**
> A dashboard UI module (QM) has 5 defects/KLOC while a brake module (ASIL D) has 0.2 defects/KLOC. The conclusion should be:
>
> A. The brake module has worse quality because it has fewer defects
> B. Both need attention, but the brake module's lower defect rate is appropriate for its higher ASIL; investigate if any defect is critical
> C. Only the UI module needs fixing
> D. Only the brake module needs fixing

**Correct answer:** B — Consider ASIL and criticality, not just density.

---

## Trap 5: Preparing Audit Evidence Only Before the Audit

**Trap:** Audit evidence must be maintained continuously, not created just before the audit.

**Example question:**
> A team scrambles to create traceability matrices two days before an audit. The result is:
>
> A. Perfectly fine — evidence is evidence
> B. Likely incomplete and unreliable; traceability should be maintained throughout development
> C. Only that the team works hard
> D. Only that the audit takes longer

**Correct answer:** B — Continuous traceability maintenance is required.
