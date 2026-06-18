# ❓ Chapter 6 — Transitioning and Maintenance: Practice Questions

---

### 🔷 Q1 (TAE-6.1, K2)

Transitioning from manual to automated testing on an existing project is called:

A. Greenfield transition
B. Brownfield transition
C. Migration
D. Retirement

---

### 🔷 Q2 (TAE-6.2, K2)

Updating a test script to accommodate a renamed button on the SUT is:

A. Corrective maintenance
B. Adaptive maintenance
C. Perfective maintenance
D. No maintenance

---

### 🔷 Q3 (TAE-6.2, K2)

Refactoring a test script to improve readability and reduce duplication is:

A. Corrective maintenance
B. Adaptive maintenance
C. Perfective maintenance
D. Retirement

---

### 🔷 Q4 (TAE-6.3, K2)

A test should be retired when:

A. It has passed 100 times in a row
B. The feature it tests has been removed from the SUT
C. It takes longer than 1 minute to run
D. It was written by a former employee

---

### 🔷 Q5 (TAE-6.2, K3)

A TAE spends most of their time updating tests because the SUT's UI changes frequently. This is primarily:

A. Corrective maintenance
B. Adaptive maintenance
C. Perfective maintenance
D. Not maintenance at all

---

### 🔷 Q6 (TAE-6.1, K3)

A team automates a new project using TDD from day one. This is:

A. Brownfield transition
B. Greenfield transition
C. Legacy migration
D. Big-bang deployment

---

### 🔷 Q7 (TAE-6.4, K2)

Legacy automation is BEST described as:

A. Brand new automation using the latest tools
B. Existing automation that is difficult to maintain and may use outdated practices
C. Automation that has never been run
D. Manual testing that has been documented

---

### 🔷 Q8 (TAE-6.3, K3)

A team's TAS uses a commercial tool that the vendor is discontinuing. The BEST action is:

A. Continue using it indefinitely
B. Plan migration to a supported tool before support ends
C. Switch to manual testing immediately
D. Buy 10 years of extra licenses

---

### 🔷 Q9 (TAE-6.2, K2)

Fixing a bug in the test framework that causes intermittent false positives is:

A. Corrective maintenance
B. Adaptive maintenance
C. Perfective maintenance
D. Transition work

---

### 🔷 Q10 (TAE-6.1, K3)

During a brownfield transition, the team should:

A. Immediately stop all manual testing
B. Maintain both manual and automated tests during the transition period
C. Delete all manual tests before automation is ready
D. Only automate new features

---

### 🔷 Q11 (TAE-6.4, K2)

Which strategy is BEST for a large legacy suite that is poorly structured but has good coverage?

A. Full rewrite
B. Incremental refactoring
C. Delete all legacy tests
D. Ignore the legacy and build new tests only

---

### 🔷 Q12 (TAE-6.3, K2)

A test that verifies a feature no one uses and that breaks weekly is a candidate for:

A. More frequent execution
B. Retirement
C. Being the first test in the suite
D. Conversion to a manual test

---

### 🔷 Q13 (TAE-6.2, K3)

A team should allocate approximately what percentage of automation capacity to maintenance?

A. 0%
B. 10%
C. 20-30%
D. 100%

---

### 🔷 Q14 (TAE-6.1, K2)

Migration (replacing an existing TAS) is BEST characterized as:

A. Adding automation to a project with no existing automation
B. Replacing an outdated TAS with a new one
C. Moving tests from manual to automated
D. Retiring all tests and starting over

---

### 🔷 Q15 (TAE-6.4, K3)

A legacy automation suite uses record/replay, has no abstraction, and breaks daily. The team wants to keep the coverage. The BEST approach is:

A. Continue fixing the record/replay scripts daily
B. Build a new TAS with proper architecture and gradually migrate key tests
C. Delete all tests and return to manual testing
D. Buy a more expensive tool that supports record/replay

---

### 🔷 Q16 (TAE-6.2, K2)

Adding parallel execution to reduce test suite runtime is:

A. Corrective maintenance
B. Adaptive maintenance
C. Perfective maintenance
D. Retirement

---

### 🔷 Q17 (TAE-6.3, K2)

When retiring a test, the team should FIRST:

A. Delete the test immediately
B. Assess whether removing it creates coverage gaps
C. Inform competitors
D. Rewrite it in a different language

---

### 🔷 Q18 (TAE-6.1, K3)

A company acquires another company and must integrate their test automation. This is BEST described as:

A. Greenfield transition
B. Brownfield transition
C. Migration
D. Maintenance

---

### 🔷 Q19 (TAE-6.4, K2)

Which skill is MOST important for maintaining test automation?

A. Graphic design
B. Debugging and root cause analysis
C. Sales and marketing
D. Accounting

---

### 🔷 Q20 (TAE-6.2, K3)

A TAE fixes a test that fails because the expected result was incorrectly coded. This is:

A. Corrective maintenance
B. Adaptive maintenance
C. Perfective maintenance
D. Test retirement

---

## ✔️ Answers and Rationales

### 🔷 Q1
**Answer: B**

**Rationale:** Brownfield = adding automation to an existing project. Greenfield = new project.

### 🔷 Q2
**Answer: B**

**Rationale:** Accommodating SUT changes is adaptive maintenance.

### 🔷 Q3
**Answer: C**

**Rationale:** Improving readability is perfective maintenance.

### 🔷 Q4
**Answer: B**

**Rationale:** Tests for removed features are obsolete and should be retired.

### 🔷 Q5
**Answer: B**

**Rationale:** Frequent UI changes require adaptive maintenance.

### 🔷 Q6
**Answer: B**

**Rationale:** New project from day one = greenfield transition.

### 🔷 Q7
**Answer: B**

**Rationale:** Legacy automation = existing, difficult to maintain, often outdated.

### 🔷 Q8
**Answer: B**

**Rationale:** Plan migration before support ends to avoid being stranded.

### 🔷 Q9
**Answer: A**

**Rationale:** Fixing a bug in the TAS is corrective maintenance.

### 🔷 Q10
**Answer: B**

**Rationale:** During transition, both manual and automated tests must be maintained.

### 🔷 Q11
**Answer: B**

**Rationale:** Good coverage but poor structure = incremental refactoring is best.

### 🔷 Q12
**Answer: B**

**Rationale:** Low-value, high-maintenance tests should be retired.

### 🔷 Q13
**Answer: C**

**Rationale:** 20-30% of capacity should be reserved for maintenance.

### 🔷 Q14
**Answer: B**

**Rationale:** Migration = replacing an existing TAS with a new one.

### 🔷 Q15
**Answer: B**

**Rationale:** Building a proper TAS and migrating key tests is the sustainable solution.

### 🔷 Q16
**Answer: C**

**Rationale:** Adding parallel execution improves performance = perfective.

### 🔷 Q17
**Answer: B**

**Rationale:** Assess coverage gaps before deleting. Immediate deletion risks losing protection.

### 🔷 Q18
**Answer: C**

**Rationale:** Integrating existing automation from an acquisition is a migration.

### 🔷 Q19
**Answer: B**

**Rationale:** Debugging and root cause analysis is the most critical maintenance skill.

### 🔷 Q20
**Answer: A**

**Rationale:** Fixing an incorrect expected result is correcting a defect in the TAS.
