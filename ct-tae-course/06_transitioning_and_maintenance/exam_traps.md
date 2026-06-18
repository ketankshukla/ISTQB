# 🪤 Chapter 6 — Transitioning and Maintenance: Exam Traps

## 🪤 Trap 1: Thinking All Maintenance Is Corrective

**Trap:** Most maintenance is adaptive (responding to SUT changes), not corrective (fixing bugs). Perfective maintenance improves the TAS.

**Example question:**
> A team updates all Page Objects after the SUT's login screen is redesigned. This is:
>
> A. Corrective maintenance
> B. Adaptive maintenance
> C. Perfective maintenance
> D. No maintenance is needed

**Correct answer:** B — Updating for SUT changes is adaptive maintenance. Corrective would be fixing a bug in the TAS. Perfective would be improving design.

---

## 🪤 Trap 2: Keeping Tests Forever

**Trap:** Tests should be retired when they are obsolete, redundant, or more expensive than valuable. Keeping them wastes time and erodes trust.

**Example question:**
> A team has 50 tests that have passed for 2 years without finding a defect and test a low-risk feature. The tests break frequently due to minor UI changes. The team should:
>
> A. Keep all tests because more tests are always better
> B. Consider retiring or reducing the frequency of these low-value, high-maintenance tests
> C. Assign a dedicated engineer to fix them daily
> D. Run them more frequently to catch defects

**Correct answer:** B — Tests with poor value-to-maintenance ratio should be retired or deprioritized.

---

## 🪤 Trap 3: Ignoring Legacy Automation Until It Fails Completely

**Trap:** Legacy automation should be proactively managed. Waiting until it is completely broken makes remediation much harder.

**Example question:**
> A team's legacy automation suite has 20% flakiness and requires 50% of a TAE's time to keep running. The BEST approach is:
>
> A. Ignore it until it stops working entirely
> B. Assess whether to refactor, replace, or retire the legacy suite
> C. Hire another TAE to maintain it
> D. Delete all the legacy tests immediately

**Correct answer:** B — Proactive assessment and a planned remediation strategy is best. Ignoring (A) or deleting blindly (D) are poor choices.

---

## 🪤 Trap 4: Thinking Manual Testers Can Immediately Maintain Automation

**Trap:** Maintaining automation requires programming skills, debugging skills, and tool expertise. Training is essential.

**Example question:**
> A company lays off all TAEs and asks manual testers to maintain the existing automation. The MOST likely result is:
>
> A. The automation quality improves
> B. The automation deteriorates due to skill gaps
> C. Manual testers become better testers
> D. The automation maintenance cost drops to zero

**Correct answer:** B — Maintenance requires technical skills that manual testers may not have without training.

---

## 🪤 Trap 5: Not Planning for Maintenance in Sprint Capacity

**Trap:** Maintenance should be planned as part of sprint capacity. Ignoring it leads to accumulating technical debt and flaky tests.

**Example question:**
> A team allocates 100% of automation capacity to creating new tests, with no time for maintenance. After 6 months:
>
> A. The automation suite is in excellent condition
> B. The suite likely has accumulated technical debt, flaky tests, and outdated scripts
> C. They have more tests, so coverage is perfect
> D. Maintenance is not needed in agile

**Correct answer:** B — Without maintenance capacity, technical debt accumulates, leading to brittle, unreliable automation.
