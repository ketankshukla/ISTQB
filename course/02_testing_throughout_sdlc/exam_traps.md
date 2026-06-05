# Chapter 2 — Exam Traps

---

## Trap 1: Test Levels vs Test Types

This is one of the most commonly confused pairs in the entire syllabus:

- **Test levels** = WHEN/WHERE you test (component, integration, system, acceptance)
- **Test types** = WHAT you test (functional, non-functional, black-box, white-box)

Test types can be applied at ANY test level. For example:
- Functional testing at component level (unit test checking a calculation)
- Non-functional testing at system level (load test on the whole system)
- White-box testing at component level (checking branch coverage)

**Trap question pattern:** "Performance testing is an example of a test ___." Answer: test TYPE (not test level).

---

## Trap 2: Confirmation Testing vs Regression Testing

| Confirmation Testing | Regression Testing |
|---------------------|-------------------|
| Re-runs the SPECIFIC failed test after a fix | Re-runs PREVIOUSLY PASSING tests to check for side effects |
| Narrow scope (the defect) | Broad scope (everything that might be affected) |
| Verifies the fix works | Verifies nothing else broke |

**Trap:** A question describes retesting a fixed defect and asks what type of testing this is. Answer: confirmation testing (NOT regression testing).

**Trap:** A question describes running the full regression suite after a patch. Answer: regression testing (NOT confirmation testing).

You need BOTH after every fix.

---

## Trap 3: The V-Model Pairing

In the V-model, each development phase on the left maps to a test level on the right:

| Development Phase | Test Level |
|-------------------|------------|
| Business requirements | Acceptance testing |
| System requirements / design | System testing |
| Architecture / detailed design | Integration testing |
| Coding | Component testing |

**Trap:** The exam may ask which test level corresponds to a given development phase. Know the pairings.

---

## Trap 4: Component Integration vs System Integration

- **Component integration testing** = testing interfaces BETWEEN COMPONENTS within the same system (internal)
- **System integration testing** = testing interfaces BETWEEN SYSTEMS or with external services (external)

**Trap:** A question about testing the API between two microservices in the same application — this is component integration testing. A question about testing integration with a third-party payment gateway — this is system integration testing.

---

## Trap 5: Shift-Left Does Not Mean Skip Later Testing

Shift-left means starting testing activities EARLIER. It does NOT mean:
- Skipping system testing or acceptance testing
- Doing all testing before coding
- Replacing manual testing with only unit tests

It DOES mean:
- Reviewing requirements early (static testing)
- Writing tests before code (TDD/ATDD)
- Running automated tests continuously (CI)
- Getting testers involved in story refinement

---

## Trap 6: TDD vs ATDD vs BDD

| Approach | Level | Who | Format |
|----------|-------|-----|--------|
| TDD | Component (unit) | Developers | Code-level test (programmatic) |
| ATDD | System/acceptance | Developers + testers + business | Acceptance criteria turned into tests |
| BDD | Any, often system | All three roles | Given/When/Then natural language |

**Trap:** TDD is primarily a DEVELOPMENT technique (not a testing technique). The tests are a byproduct. ATDD and BDD are collaborative approaches involving business stakeholders.

**Trap:** BDD is an extension/evolution of TDD, not a replacement. The exam may present BDD as "TDD with natural language specifications."

---

## Trap 7: DevOps — What Testing Gains and Loses

**Gains:**
- Fast feedback through CI/CD pipelines
- Automated regression on every build
- Reproducible environments (infrastructure as code)
- Shift-right capabilities (monitoring in production)

**Does NOT mean:**
- Manual testing is eliminated
- Testers are no longer needed
- All testing is automated
- Quality is guaranteed by the pipeline

---

## Trap 8: Acceptance Testing Subtypes

The exam may ask you to distinguish:

- **User acceptance testing (UAT)** — validates the system meets user needs
- **Operational acceptance testing (OAT)** — validates the system meets operational needs (backup/restore, disaster recovery, installation, maintenance procedures)
- **Contractual acceptance testing** — verifies the system meets contractual requirements
- **Regulatory acceptance testing** — verifies compliance with laws, regulations, or standards
- **Alpha testing** — done at the developer's site by simulated or real users
- **Beta testing** — done at the user's site by real users in a real environment

**Trap:** OAT is performed by operations/admin staff, not business users. UAT is performed by business users, not operations staff.

---

## Trap 9: Maintenance Testing Triggers

The exam may list scenarios and ask if they trigger maintenance testing:

| Scenario | Triggers Maintenance Testing? |
|----------|------------------------------|
| New feature added to existing system | Yes (planned enhancement) |
| Bug fix deployed to production | Yes (corrective maintenance) |
| Migrating database from Oracle to PostgreSQL | Yes (migration) |
| System being retired/decommissioned | Yes (retirement — test data archival) |
| Building a brand-new system from scratch | No (this is regular development testing) |

---

## Trap 10: Retrospectives Are Not Post-Mortems

- A **retrospective** happens at the end of each iteration (regularly, not just once)
- A **post-mortem** is a one-time analysis after a project ends or a major incident occurs

The exam focuses on retrospectives as a mechanism for CONTINUOUS process improvement, not as a one-time event.

---

## Trap 11: "For Every Development Activity, There Is a Corresponding Test Activity"

This is a good practice that applies to ALL SDLC models (not just the V-model). In Agile:
- Story refinement -> test analysis
- Sprint development -> component testing
- Integration -> integration testing
- Demo/review -> acceptance testing

**Trap:** A question may imply this principle applies only to sequential models. It applies universally.
