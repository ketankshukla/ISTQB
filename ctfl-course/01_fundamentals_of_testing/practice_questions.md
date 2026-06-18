# ❓ Chapter 1 — Practice Questions

15 original ISTQB-style questions covering Chapter 1 learning objectives. Each question is tagged with its LO and K-level.

**Instructions:** Select the single best answer unless otherwise stated. After attempting all questions, check your answers against the rationales at the end of this file.

---

## ❓ Questions

### 🔷 Q1 (FL-1.1.1, K1)

Which of the following is a valid objective of testing?

A. To prove that the software is free of defects
B. To reduce the level of risk of inadequate software quality
C. To replace the need for reviews and static analysis
D. To guarantee that all user requirements are met

---

### 🔷 Q2 (FL-1.1.2, K2)

A tester executes a test case and observes that the calculated shipping cost is incorrect. The tester logs a defect report. A developer then examines the code and finds the formula uses the wrong weight variable. The developer fixes the formula.

Which statement BEST describes the roles of testing and debugging in this scenario?

A. Testing identified the root cause; debugging confirmed the failure
B. Testing revealed the failure; debugging located and removed the defect
C. Testing fixed the defect; debugging verified the fix
D. Testing and debugging are different names for the same activity

---

### 🔷 Q3 (FL-1.2.1, K2)

Why does finding defects early in the software development lifecycle typically reduce overall project cost?

A. Because early defects are always less severe than late defects
B. Because fewer work products have been built on top of the flawed artifact, so less rework is needed
C. Because testing tools are cheaper to run in early phases
D. Because developers are more focused during the early phases

---

### 🔷 Q4 (FL-1.2.2, K1)

Which statement BEST describes the relationship between testing and quality assurance?

A. Testing is the same as quality assurance
B. Testing is a preventive activity; quality assurance is a detective activity
C. Testing is a form of quality control that contributes to quality assurance
D. Quality assurance is a subset of testing

---

### 🔷 Q5 (FL-1.2.3, K2)

A business analyst writes a requirement that states "the discount shall be 10%." The actual business rule is 15%. A developer implements 10% as stated. During system testing, a customer scenario shows the wrong discount.

In ISTQB terminology, which of the following is correct?

A. The business analyst made an error; the requirement contains a defect; the wrong discount at runtime is a failure
B. The developer made an error; the code contains a defect; the requirement is a failure
C. The requirement is a failure; the code is an error; the wrong discount is a defect
D. The business analyst made a failure; the requirement contains an error; the wrong discount is a defect

---

### 🔷 Q6 (FL-1.3.1, K2)

A test team has been running the same regression test suite for six consecutive releases without finding any new defects, though new defects are occasionally reported by users in production.

Which testing principle BEST explains this situation?

A. Testing shows the presence, not the absence, of defects
B. Exhaustive testing is impossible
C. Tests wear out (pesticide paradox)
D. Absence-of-defects fallacy

---

### 🔷 Q7 (FL-1.3.1, K2)

Analysis of defect data from a large project shows that 80% of all failures originate from 3 out of 25 modules.

Which testing principle does this illustrate?

A. Early testing saves time and money
B. Defects cluster together
C. Testing is context dependent
D. Exhaustive testing is impossible

---

### 🔷 Q8 (FL-1.3.1, K2)

A software product has been thoroughly tested, has zero known defects, yet users abandon it within a week of release because it does not solve their actual problem.

Which testing principle is MOST relevant?

A. Testing shows the presence of defects, not the absence
B. Exhaustive testing is impossible
C. Absence-of-defects fallacy
D. Tests wear out (pesticide paradox)

---

### 🔷 Q9 (FL-1.4.1, K2)

During which test activity are test conditions identified and prioritized?

A. Test planning
B. Test analysis
C. Test design
D. Test implementation

---

### 🔷 Q10 (FL-1.4.3, K2)

Which of the following is testware produced during the test implementation activity?

A. Test conditions
B. Test plan
C. Test procedures and automated scripts
D. Test completion report

---

### 🔷 Q11 (FL-1.4.4, K2)

A requirement changes after system testing has begun. The test manager needs to quickly determine which test cases are affected.

Which practice makes this possible?

A. Risk-based testing
B. Maintaining traceability between requirements and test cases
C. Regression testing
D. The whole-team approach

---

### 🔷 Q12 (FL-1.4.5, K2)

In an Agile team, who is typically responsible for deciding the overall test approach, scope, and schedule for a release?

A. The testing role
B. The test management role
C. Only the product owner
D. Only the Scrum master

---

### 🔷 Q13 (FL-1.5.1, K1)

Which of the following is an example of a generic skill required for testing?

A. Ability to write production code in Java
B. Attention to detail and critical thinking
C. Authority to approve product releases
D. Expertise in database administration

---

### 🔷 Q14 (FL-1.5.2, K1)

Which statement BEST describes the whole-team approach?

A. Only dedicated testers are responsible for quality
B. Every team member shares responsibility for quality, and anyone with appropriate skills can perform testing activities
C. Developers must always perform acceptance testing
D. The whole team must pass the ISTQB exam

---

### 🔷 Q15 (FL-1.5.3, K2)

What is a potential DRAWBACK of having a highly independent test team that is separate from the development team?

A. The test team has a different perspective and may find more defects
B. Communication barriers may slow down feedback and reduce collaboration
C. The test team can challenge requirements objectively
D. The test team can verify compliance with standards more effectively

---

### 🔷 Q16 (FL-1.3.1, K2)

A project manager asks the test lead: "Can you confirm that after your testing is complete, the system will have no bugs?"

Which testing principle should the test lead use to explain why this is not possible?

A. Testing is context dependent
B. Testing shows the presence, not the absence, of defects
C. Defects cluster together
D. Early testing saves time and money

---

### 🔷 Q17 (FL-1.2.3, K2)

A defect exists in a module that is never executed during normal system operation. No failure has been observed related to this defect.

Which statement is CORRECT?

A. Since there is no failure, there is no defect
B. A defect can exist without causing a failure
C. A defect always leads to a failure
D. This situation represents an error but not a defect

---

---

## ✔️ Answers and Rationales

### ✔️ Q1 — Answer: B

- **B is correct.** Reducing the level of risk of inadequate software quality is a recognized test objective per the CTFL syllabus.
- A is wrong: Testing cannot prove software is defect-free (Principle 1).
- C is wrong: Testing complements reviews; it does not replace them.
- D is wrong: Testing cannot guarantee all requirements are met; it provides confidence, not a guarantee.

### ✔️ Q2 — Answer: B

- **B is correct.** Testing identified the incorrect output (failure). Debugging (the developer's work) located the wrong variable and fixed it.
- A is wrong: Testing revealed the failure, not the root cause. Debugging found the cause.
- C is wrong: Testing does not fix defects. Confirmation testing verifies the fix, but that is still testing, not debugging.
- D is wrong: They are distinct activities.

### ✔️ Q3 — Answer: B

- **B is correct.** Early defects are cheaper because less subsequent work has been built on the flawed foundation, so less rework is required.
- A is wrong: Early defects are not necessarily less severe; they may be very severe requirements defects.
- C is wrong: Tool cost is not the relevant factor.
- D is wrong: Developer focus is not the ISTQB-stated reason.

### ✔️ Q4 — Answer: C

- **C is correct.** Testing is a quality control activity that provides data contributing to the broader quality assurance effort.
- A is wrong: Testing and QA are not the same.
- B is wrong: QA is preventive (process-focused); testing has both detective and preventive aspects.
- D is wrong: QA encompasses testing, not the other way around.

### ✔️ Q5 — Answer: A

- **A is correct.** The BA's misunderstanding is the error. The incorrect requirement is a defect in a work product. The wrong discount observed during execution is a failure.
- B is wrong: The developer implemented the requirement correctly as written; the error was the BA's.
- C is wrong: Terminology is misapplied.
- D is wrong: A failure is runtime behavior, not a human action.

### ✔️ Q6 — Answer: C

- **C is correct.** The pesticide paradox explains that repeating the same tests stops finding new defects because the tests have "worn out."
- A is wrong: This principle is about what testing can/cannot prove, not about test suite effectiveness over time.
- B is wrong: Exhaustive testing is about the impossibility of testing all combinations, not about repeated execution.
- D is wrong: The absence-of-defects fallacy is about meeting user needs, not test suite staleness.

### ✔️ Q7 — Answer: B

- **B is correct.** Defects cluster together — a few modules contain most of the defects.
- A is wrong: This is about when to test, not where defects concentrate.
- C is wrong: Context dependency is about adapting the approach to the situation.
- D is wrong: Exhaustive testing impossibility is not about clustering.

### ✔️ Q8 — Answer: C

- **C is correct.** The absence-of-defects fallacy states that a system can be defect-free yet useless if it does not meet user needs.
- A is wrong: This principle is about testing's inability to prove absence of defects.
- B is wrong: Exhaustive testing impossibility is unrelated to user satisfaction.
- D is wrong: Pesticide paradox is about test repetition.

### ✔️ Q9 — Answer: B

- **B is correct.** Test analysis is where the test basis is analyzed and test conditions are identified and prioritized.
- A is wrong: Test planning defines scope and approach but does not identify test conditions.
- C is wrong: Test design creates test cases from already-identified conditions.
- D is wrong: Test implementation prepares procedures and data for execution.

### ✔️ Q10 — Answer: C

- **C is correct.** Test procedures (manual scripts) and automated test scripts are produced during test implementation.
- A is wrong: Test conditions come from test analysis.
- B is wrong: The test plan comes from test planning.
- D is wrong: The completion report comes from test completion.

### ✔️ Q11 — Answer: B

- **B is correct.** Traceability links requirements to test cases, enabling quick identification of affected tests when a requirement changes.
- A is wrong: Risk-based testing helps prioritize but does not directly map requirements to test cases.
- C is wrong: Regression testing re-runs tests but traceability is needed to know WHICH tests.
- D is wrong: The whole-team approach is about shared responsibility, not traceability.

### ✔️ Q12 — Answer: B

- **B is correct.** The test management role is responsible for the overall test approach, scope, and schedule.
- A is wrong: The testing role handles analysis, design, and execution, not overall planning.
- C is wrong: The product owner prioritizes features, not test planning.
- D is wrong: The Scrum master facilitates process, not test strategy.

### ✔️ Q13 — Answer: B

- **B is correct.** Attention to detail and critical thinking are explicitly listed as generic testing skills.
- A is wrong: Writing production code is a development skill, not a generic testing skill.
- C is wrong: Release approval is a management responsibility.
- D is wrong: DBA expertise is specialized, not a generic testing skill.

### ✔️ Q14 — Answer: B

- **B is correct.** The whole-team approach means quality is everyone's responsibility and testing tasks can be performed by any capable team member.
- A is wrong: This is the opposite of the whole-team approach.
- C is wrong: Developers may participate in but do not always perform acceptance testing.
- D is wrong: This is unrelated to the concept.

### ✔️ Q15 — Answer: B

- **B is correct.** A key drawback of high independence is potential communication barriers and slower feedback between testers and developers.
- A, C, and D are all BENEFITS of independence, not drawbacks. The question asks for a drawback.

### ✔️ Q16 — Answer: B

- **B is correct.** Principle 1 states that testing can show defects are present but cannot prove they are absent.
- A is wrong: Context dependency is about approach variation.
- C is wrong: Clustering is about defect distribution.
- D is wrong: Early testing is about timing, not proof of correctness.

### ✔️ Q17 — Answer: B

- **B is correct.** A defect in unexecuted code exists in the work product but does not cause a failure because it is never triggered.
- A is wrong: The defect exists regardless of whether it causes a failure.
- C is wrong: Not all defects lead to failures (e.g., dead code).
- D is wrong: The flaw in the code is a defect (the error was the human mistake that introduced it).
