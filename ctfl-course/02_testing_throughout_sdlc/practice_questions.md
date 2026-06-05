# Chapter 2 — Practice Questions

15 original ISTQB-style questions covering Chapter 2 learning objectives.

---

## Questions

### Q1 (FL-2.1.1, K2)

A company uses the V-model for developing safety-critical software. Which statement BEST describes how this SDLC model affects testing?

A. Testing only happens after all coding is complete
B. Each development phase has a corresponding test level, and test planning for each level begins during the associated development phase
C. Testing is limited to acceptance testing only
D. Test automation is required at all levels

---

### Q2 (FL-2.1.2, K1)

Which of the following is a good testing practice that applies regardless of the chosen SDLC model?

A. All testing must be automated
B. Testers should only be involved after development is complete
C. For every development activity, there is a corresponding test activity
D. Test documentation is unnecessary in iterative models

---

### Q3 (FL-2.1.3, K1)

In Test-Driven Development (TDD), what is the correct sequence of steps?

A. Write code -> write test -> refactor
B. Write test -> write code to pass the test -> refactor
C. Refactor -> write test -> write code
D. Write code -> refactor -> write test

---

### Q4 (FL-2.1.3, K1)

Which test-first approach involves developers, testers, and business representatives collaborating to define acceptance tests before development begins?

A. Test-Driven Development (TDD)
B. Acceptance Test-Driven Development (ATDD)
C. Regression-Driven Development
D. Exploratory testing

---

### Q5 (FL-2.1.4, K2)

How does a DevOps approach PRIMARILY affect testing?

A. It eliminates the need for any manual testing
B. It integrates automated testing into the continuous integration/delivery pipeline, providing fast feedback on code changes
C. It replaces all testers with developers
D. It removes the need for regression testing

---

### Q6 (FL-2.1.5, K2)

Which of the following is an example of the shift-left approach?

A. Performing acceptance testing only after all system testing is complete
B. Reviewing requirements and writing acceptance tests before development starts
C. Deferring all testing to a dedicated test phase at the end of the project
D. Running performance tests only in production

---

### Q7 (FL-2.1.6, K2)

A Scrum team holds a retrospective at the end of each sprint. During the retrospective, the team notes that defects in date-handling logic have appeared in the last three sprints.

What is the MOST appropriate action based on this finding?

A. Ignore it because defects are inevitable
B. Identify the root cause of the recurring date-handling defects and introduce a preventive measure (e.g., a date-handling checklist or additional unit tests for date logic)
C. Stop testing date-related functionality
D. Assign blame to the developer who wrote the date logic

---

### Q8 (FL-2.2.1, K2)

Which test level focuses on verifying that the interfaces between components within the same system work correctly?

A. Component testing
B. Component integration testing
C. System integration testing
D. Acceptance testing

---

### Q9 (FL-2.2.1, K2)

An e-commerce company is testing whether its payment system correctly communicates with an external bank API. At which test level does this testing occur?

A. Component testing
B. Component integration testing
C. System integration testing
D. System testing

---

### Q10 (FL-2.2.1, K2)

During acceptance testing, the PRIMARY objective is to:

A. Achieve 100% code coverage
B. Find as many defects as possible in individual components
C. Determine whether the system meets user/stakeholder needs and is fit for purpose
D. Verify that all internal interfaces work correctly

---

### Q11 (FL-2.2.2, K2)

A test team is evaluating the response time of a web application under 1000 concurrent users. This is an example of:

A. Functional testing
B. Non-functional testing
C. White-box testing
D. Confirmation testing

---

### Q12 (FL-2.2.2, K2)

Which statement about test types is CORRECT?

A. Functional testing can only be performed at the system test level
B. Non-functional testing is only performed after all functional testing is complete
C. Test types can be applied at any test level
D. White-box testing is a test level, not a test type

---

### Q13 (FL-2.2.3, K2)

After a developer fixes a defect in the search functionality, a tester re-executes the specific test case that originally revealed the failure. The test now passes. What type of testing did the tester perform?

A. Regression testing
B. Confirmation testing
C. Smoke testing
D. Exploratory testing

---

### Q14 (FL-2.2.3, K2)

After the same defect fix described in Q13, the test team also runs the full automated test suite covering the product catalog, shopping cart, and checkout flow. What type of testing is this?

A. Confirmation testing
B. Acceptance testing
C. Regression testing
D. Component testing

---

### Q15 (FL-2.3.1, K2)

An organization is migrating its customer database from an on-premise server to a cloud platform. Testing is needed to verify that data integrity is maintained and that dependent applications continue to function correctly.

This is an example of:

A. Acceptance testing for a new system
B. Maintenance testing triggered by a migration
C. Component testing of the database
D. Regression testing of the development pipeline

---

### Q16 (FL-2.3.1, K2)

What is the PRIMARY purpose of impact analysis in the context of maintenance testing?

A. To determine how many testers are needed for the project
B. To identify which areas of the system could be affected by a change and what testing is needed
C. To calculate the total number of defects in the system
D. To determine whether to cancel the project

---

### Q17 (FL-2.1.5, K2)

Which of the following is NOT a benefit of the shift-left approach?

A. Defects are found earlier when they are cheaper to fix
B. Requirements quality improves through early tester involvement
C. All defects are guaranteed to be found before coding begins
D. Defect amplification is reduced because root causes are addressed sooner

---

---

## Answers and Rationales

### Q1 — Answer: B

- **B is correct.** In the V-model, each development phase (requirements, design, coding) has a corresponding test level, and test planning begins during the associated development phase.
- A is wrong: In the V-model, test planning and design start during development phases, not after all coding.
- C is wrong: The V-model includes all test levels, not just acceptance.
- D is wrong: Automation is not mandated by the V-model.

### Q2 — Answer: C

- **C is correct.** This is explicitly stated in the CTFL syllabus as a good practice for all SDLC models.
- A is wrong: Not all testing needs to be automated.
- B is wrong: Early tester involvement is a good practice (shift-left).
- D is wrong: Documentation level varies but is never "unnecessary."

### Q3 — Answer: B

- **B is correct.** TDD follows: write a failing test -> write minimal code to pass -> refactor.
- A, C, D represent incorrect orderings.

### Q4 — Answer: B

- **B is correct.** ATDD involves three roles (developer, tester, business) collaborating to define acceptance tests before coding.
- A is wrong: TDD is developer-focused at the unit level.
- C is wrong: Not a real recognized approach.
- D is wrong: Exploratory testing is not test-first.

### Q5 — Answer: B

- **B is correct.** DevOps integrates automated testing into CI/CD pipelines for fast, continuous feedback.
- A is wrong: DevOps does not eliminate all manual testing.
- C is wrong: DevOps does not replace testers with developers.
- D is wrong: Regression testing is MORE important in DevOps, not eliminated.

### Q6 — Answer: B

- **B is correct.** Reviewing requirements and writing tests before development is a classic shift-left activity.
- A is wrong: Sequential late testing is the opposite of shift-left.
- C is wrong: Deferring testing is the opposite of shift-left.
- D is wrong: Testing only in production is shift-right, not shift-left.

### Q7 — Answer: B

- **B is correct.** Retrospectives drive process improvement by identifying root causes and introducing preventive measures.
- A is wrong: Ignoring recurring patterns defeats the purpose of retrospectives.
- C is wrong: Stopping testing is counterproductive.
- D is wrong: Retrospectives focus on process improvement, not blame.

### Q8 — Answer: B

- **B is correct.** Component integration testing verifies interfaces between components within the same system.
- A is wrong: Component testing tests units in isolation.
- C is wrong: System integration testing tests interfaces between systems.
- D is wrong: Acceptance testing validates user/business needs.

### Q9 — Answer: C

- **C is correct.** Testing the interface between your system and an external bank API is system integration testing.
- B is wrong: Component integration is internal to one system.
- D is wrong: System testing focuses on the complete system's behavior, not specifically on external interfaces.

### Q10 — Answer: C

- **C is correct.** Acceptance testing primarily validates that the system meets user/stakeholder needs and is fit for purpose.
- A is wrong: Code coverage is a white-box concern, typically at component level.
- B is wrong: Finding defects in components is the objective of component testing.
- D is wrong: Interface verification is an integration testing objective.

### Q11 — Answer: B

- **B is correct.** Response time under load is a non-functional quality characteristic (performance).
- A is wrong: Functional testing checks what the system does, not how fast.
- C is wrong: White-box testing examines internal structure.
- D is wrong: Confirmation testing re-tests a fixed defect.

### Q12 — Answer: C

- **C is correct.** Test types (functional, non-functional, black-box, white-box) can be applied at any test level.
- A is wrong: Functional testing applies at all levels.
- B is wrong: Non-functional testing can happen alongside or before functional testing.
- D is wrong: White-box testing is a test type, not a level.

### Q13 — Answer: B

- **B is correct.** Re-executing the specific failed test after a fix to confirm the fix works is confirmation testing (re-testing).
- A is wrong: Regression testing checks for unintended side effects, not the specific fix.
- C is wrong: Smoke testing checks basic build stability.
- D is wrong: Exploratory testing is unscripted, charter-based exploration.

### Q14 — Answer: C

- **C is correct.** Running previously passing tests in other areas after a change to detect unintended side effects is regression testing.
- A is wrong: Confirmation testing only re-runs the specific failed test.
- B is wrong: This is not acceptance testing.
- D is wrong: This is not limited to component level.

### Q15 — Answer: B

- **B is correct.** Testing triggered by a platform migration of an existing operational system is maintenance testing.
- A is wrong: This is not a new system; it is an existing one being migrated.
- C is wrong: This is broader than component testing.
- D is wrong: This is not about the development pipeline.

### Q16 — Answer: B

- **B is correct.** Impact analysis determines what areas could be affected by a change and what testing is required.
- A is wrong: Staffing decisions are part of test planning, not impact analysis.
- C is wrong: Defect counting is test monitoring.
- D is wrong: Project cancellation is a management decision.

### Q17 — Answer: C

- **C is correct (this is NOT a benefit).** Shift-left cannot guarantee all defects are found before coding — no approach can guarantee finding all defects (Principle 1).
- A is wrong (it IS a benefit): Finding defects earlier reduces cost.
- B is wrong (it IS a benefit): Early tester involvement improves requirements.
- D is wrong (it IS a benefit): Addressing root causes early prevents amplification.
