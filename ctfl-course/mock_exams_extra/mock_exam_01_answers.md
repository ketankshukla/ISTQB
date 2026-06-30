# 📝 Mock Exam 1 — Answer Key (Extended Practice Set)

Each answer shows the **correct option**, a **rationale**, the **Learning Objective (LO)** it tests, and the **K-level**.

---

### ✔️ Q1 — Answer: B  *(FL-1.1.1, K1)*
Typical test objectives include preventing defects (e.g., via reviews), finding defects, building confidence, and reducing risk to an acceptable level. Testing can never *prove* the absence of defects (A, C), and it does not replace a development process (D).

### ✔️ Q2 — Answer: B  *(FL-1.2.3, K2)*
An **error** is the human mistake (the misunderstanding). It introduces a **defect** (the flaw in the code). When that defective code is executed, it produces a **failure** (the observable wrong result). Hence: error → defect → failure.

### ✔️ Q3 — Answer: B  *(FL-1.3.1, K2)*
The principle "tests wear out" (the **pesticide paradox**) states that repeating the same tests stops finding new defects; tests must be reviewed and revised. Defect clustering (A) is about where defects concentrate, not test repetition.

### ✔️ Q4 — Answer: B  *(FL-1.4.1, K2)*
**Test analysis** identifies *what to test* — the test conditions — from the test basis. Planning produces the test plan, implementation prepares testware/test data, and completion reports and archives.

### ✔️ Q5 — Answer: B  *(FL-1.4.5, K2)*
The **test management role** is responsible for planning, monitoring, and control of the test activities. The **testing role** carries out analysis, design, implementation, and execution. One person may take on both in some contexts.

### ✔️ Q6 — Answer: B  *(FL-1.1.2, K2)*
**Testing** can trigger failures that reveal defects. **Debugging** is the development activity that finds, analyzes, and removes the cause (the defect). They are different activities, usually performed by different roles.

### ✔️ Q7 — Answer: B  *(FL-1.5.2, K1)*
In the **whole-team approach**, everyone shares responsibility for quality and any team member with the right knowledge can take on a task. It does not remove testers (C) or centralize testing (D).

### ✔️ Q8 — Answer: B  *(FL-1.5.3, K2)*
A benefit of independence is objectivity, but a **drawback** is potential isolation from the development team, communication problems, and the independent team becoming a bottleneck. A, C, and D describe benefits.

### ✔️ Q9 — Answer: A  *(FL-2.1.3, K1)*
The test-first approaches named in the syllabus are **Test-Driven Development (TDD), Acceptance Test-Driven Development (ATDD), and Behavior-Driven Development (BDD)**. The others are lifecycle models or test levels.

### ✔️ Q10 — Answer: B  *(FL-2.1.2, K2)*
Good practices for all SDLCs include: every development activity has a corresponding test activity; each test level has specific objectives; test analysis and design begin during the corresponding development phase; and testers are involved early. A, C, and D contradict these.

### ✔️ Q11 — Answer: B  *(FL-2.1.5, K2)*
**Shift-left** means performing testing activities earlier — reviewing requirements, writing tests before code, static analysis — to find defects sooner when they are cheaper to fix.

### ✔️ Q12 — Answer: B  *(FL-2.2.1, K2)*
Integration testing is commonly split into **component integration testing** (interfaces between components) and **system integration testing** (interfaces between systems/services).

### ✔️ Q13 — Answer: B  *(FL-2.2.2, K2)*
Measuring response time under load tests a quality characteristic (performance), which is **non-functional testing** — *how well* the system behaves, not *what* it does.

### ✔️ Q14 — Answer: B  *(FL-2.2.3, K2)*
Re-running the failed test to verify the fix is **confirmation testing**. Running related tests to ensure no new defects were introduced elsewhere is **regression testing**. Confirmation comes first.

### ✔️ Q15 — Answer: C  *(FL-3.1.1, K1)*
Static testing can examine virtually **any readable work product**: requirements, user stories, design documents, source code, test plans, user guides, contracts, and more.

### ✔️ Q16 — Answer: B  *(FL-3.2.5, K1)*
Success factors include clear objectives, the right review type for the context, adequate time, manageable chunks, and a culture that focuses on the work product (not blaming the author). A, C, and D undermine reviews.

### ✔️ Q17 — Answer: B  *(FL-3.1.3, K2)*
**Static testing** examines work products without executing code and finds defects directly. **Dynamic testing** executes the software and detects failures (symptoms). The two are complementary.

### ✔️ Q18 — Answer: D  *(FL-3.2.4, K2)*
An **inspection** is the most formal review type: trained moderator, defined roles, formal entry/exit criteria, mandatory preparation, defined process, and metrics collection for improvement.

### ✔️ Q19 — Answer: C  *(FL-4.1.1, K2)*
**Experience-based techniques** rely on the tester's knowledge, skills, and intuition — for example error guessing, exploratory testing, and checklist-based testing. A describes white-box; B describes black-box.

### ✔️ Q20 — Answer: B  *(FL-4.3.3, K2)*
White-box testing exercises the code's structure, can reveal behavior not described in the specification, and lets you measure structural coverage (e.g., statement and branch coverage). It complements, not replaces, black-box testing.

### ✔️ Q21 — Answer: C  *(FL-4.4.1, K2)*
**Error guessing** uses the tester's experience to anticipate likely mistakes and failure-prone areas (empty inputs, zero, boundaries, special characters) and to design tests targeting them.

### ✔️ Q22 — Answer: B  *(FL-4.4.2, K2)*
In **exploratory testing**, test design, execution, and learning happen at the same time. It is structured through test charters and time-boxed sessions; it can be (and often is) documented and complements scripted testing.

### ✔️ Q23 — Answer: B  *(FL-4.5.1, K2)*
The "**3 C's**" of a user story are **Card** (the written story), **Conversation** (the discussion that fleshes it out), and **Confirmation** (the acceptance criteria).

### ✔️ Q24 — Answer: B  *(FL-4.5.2, K2)*
"Given / When / Then" is the **scenario-oriented** (behavior-driven) format for acceptance criteria. The other common format is **rule-oriented** (a bulleted list of rules).

### ✔️ Q25 — Answer: C  *(FL-4.2.1, K3)*
For a bounded numeric range, equivalence partitioning yields one **valid** partition (0–100) and two **invalid** partitions (below 0 and above 100) = **3 partitions** minimum. (Additional partitions such as non-integer could be added for more thoroughness, but 3 is the minimum for this integer range.)

### ✔️ Q26 — Answer: A  *(FL-4.2.2, K3)*
**Three-value BVA** tests the boundary and the values on either side of it. For the lower boundary 10, that is **9, 10, 11**. (Two-value BVA would test only 9 and 10.)

### ✔️ Q27 — Answer: D  *(FL-4.2.3, K3)*
A full decision table with *n* independent binary conditions has **2ⁿ** rules. With 4 conditions: 2⁴ = **16** columns before any collapsing of redundant rules.

### ✔️ Q28 — Answer: B  *(FL-4.2.4, K3)*
**0-switch (all-transitions) coverage** requires every valid transition to be exercised at least once. With 9 valid transitions, all **9** must be covered. (The number of *test cases* can be fewer because one path covers several transitions, but at least 9 transitions must be exercised.)

### ✔️ Q29 — Answer: B  *(FL-4.3.2, K3)*
The single `IF x > 0` decision has a TRUE and a FALSE outcome. Covering both branches needs **2** test cases (e.g., x = 5 and x = -1). Note that 100% *statement* coverage needs only 1 test case (x > 0), which illustrates that branch coverage subsumes statement coverage.

### ✔️ Q30 — Answer: B  *(FL-5.1.6, K1)*
The **test pyramid** recommends the most tests at the **unit/component** layer (fast, cheap, stable) and the fewest at the UI/end-to-end layer (slow, brittle, expensive).

### ✔️ Q31 — Answer: B  *(FL-5.1.1, K2)*
A **test plan** documents objectives, scope, approach, schedule, resources, risks, and entry/exit criteria, and is a key communication tool. It is not a defect list (A) or a final verdict (D), and it does not replace risk analysis (C).

### ✔️ Q32 — Answer: A  *(FL-5.1.3, K2)*
**Definition of Ready** acts like **entry criteria** (a story is ready to be worked on); **Definition of Done** acts like **exit criteria** (the work is complete). 

### ✔️ Q33 — Answer: B  *(FL-5.1.7, K2)*
The **testing quadrants** use two axes: **business-facing vs technology-facing**, and **supporting the team (guiding development) vs critiquing the product**. They help ensure a balanced mix of test types and levels.

### ✔️ Q34 — Answer: C  *(FL-5.2.2, K2)*
A **product risk** is a risk that the *product* may fail to satisfy needs (e.g., the payment module miscalculating totals). A, B, and D are **project risks** (people, environment, budget, schedule).

### ✔️ Q35 — Answer: B  *(FL-5.3.2, K2)*
A **test completion report** summarizes the testing performed for an activity/level/project at its end — what was achieved against objectives, residual risks, and lessons learned — for stakeholders. (A progress report is produced *during* testing.)

### ✔️ Q36 — Answer: B  *(FL-5.1.5, K3)*
Risk-based prioritization runs the highest-risk tests first. Ordering the risk levels in descending order: T2 (9), T3 (6), T1 (4), T4 (2) → **T2, T3, T1, T4**.

### ✔️ Q37 — Answer: C  *(FL-5.2.1, K3)*
Risk level = likelihood × impact. R1 = 3 × 1 = 3; R2 = 1 × 3 = 3. The computed **risk levels are equal**. (Their treatment or priority might still differ, but the numeric risk level is the same.)

### ✔️ Q38 — Answer: B  *(FL-5.5.1, K3)*
A useful defect report must let a developer reproduce and understand the problem: **steps to reproduce, expected result, actual result, and the environment/build** (plus a unique ID, severity, and priority). A single screenshot or just a name/date is insufficient.

### ✔️ Q39 — Answer: B  *(FL-6.1.1, K1)*
Recognized tool categories include **test management, static testing/analysis, test design and data preparation, test execution, and performance/monitoring** tools. The other options are not test tools.

### ✔️ Q40 — Answer: C  *(FL-6.2.1, K2)*
A key **risk** of automation is **over-reliance** and **high maintenance cost** when the application changes frequently (plus underestimating setup effort). A, B, and D are benefits of automation.
