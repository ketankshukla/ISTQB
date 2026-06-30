# 📝 Mock Exam 3 — Answer Key (Extended Practice Set)

Each answer shows the **correct option**, a **rationale**, the **Learning Objective (LO)** it tests, and the **K-level**.

---

### ✔️ Q1 — Answer: D  *(FL-1.1.1, K1)*
Testing can find defects, build confidence, and prevent defects, but it can **never prove** the software is completely correct (that contradicts the principle "testing shows the presence of defects, not their absence").

### ✔️ Q2 — Answer: B  *(FL-1.5.2, K1)*
The whole-team approach improves communication and collaboration; **everyone shares responsibility for quality**. It does not reduce the skills needed or outsource testing.

### ✔️ Q3 — Answer: B  *(FL-1.3.1, K2)*
This is the principle "**early testing saves time and money**": detecting and removing defects early avoids the higher cost of fixing them later.

### ✔️ Q4 — Answer: C  *(FL-1.2.3, K2)*
A **failure** is the observable incorrect behavior when defective code runs (the crash). The error is the human mistake, the defect is the flaw in the code, and the root cause is the deepest reason behind it.

### ✔️ Q5 — Answer: B  *(FL-1.4.1, K2)*
**Test monitoring and control** compares actual progress against the plan and triggers corrective actions (e.g., re-prioritizing, re-planning) when there are deviations.

### ✔️ Q6 — Answer: B  *(FL-1.4.5, K2)*
**Independent testing** is carried out by people separated to varying degrees from the authors of the work product, improving objectivity. It does not mean refusing to communicate or always using an external company.

### ✔️ Q7 — Answer: B  *(FL-1.2.1, K2)*
Testing is necessary because it **reduces the risk of operational failures** and helps verify and validate the product. It cannot guarantee zero defects or replace development.

### ✔️ Q8 — Answer: B  *(FL-1.1.2, K2)*
Once testing reveals a failure, developers **debug** to locate and fix the underlying defect. Confirmation and regression testing happen *after* the fix.

### ✔️ Q9 — Answer: B  *(FL-2.1.2, K2)*
A good practice for all SDLCs is that **each test level has specific and distinct objectives**, ensuring appropriate coverage without unnecessary overlap.

### ✔️ Q10 — Answer: B  *(FL-2.1.3, K1)*
In **TDD**, a developer writes a (failing) test first, then writes just enough code to make it pass, then refactors — the "red-green-refactor" cycle.

### ✔️ Q11 — Answer: B  *(FL-2.1.6, K2)*
**Retrospectives** let the team reflect on what went well and what to improve, agreeing concrete improvement actions. They are about improvement, not blame.

### ✔️ Q12 — Answer: B  *(FL-2.2.2, K2)*
Security is a **quality characteristic**, so security testing is **non-functional testing** — it evaluates *how well* the system protects information rather than *what* function it performs.

### ✔️ Q13 — Answer: B  *(FL-2.2.1, K2)*
**Component (unit) testing** verifies the behavior of individual components/units, frequently in isolation using stubs/drivers or mocks.

### ✔️ Q14 — Answer: B  *(FL-2.2.3, K2)*
**Regression testing** checks that changes have not introduced unintended side effects elsewhere. Re-running a single failed test to confirm a fix is *confirmation* testing.

### ✔️ Q15 — Answer: B  *(FL-3.1.1, K1)*
Static testing can examine many **non-executing work products**: requirements, design documents, source code (read, not run), and test cases. The running application is the subject of dynamic testing.

### ✔️ Q16 — Answer: B  *(FL-3.2.5, K1)*
Reviews fail when there is **poor preparation, unclear objectives, and a blame culture**. Clear goals, skilled facilitation, and the right review type all *contribute to success*.

### ✔️ Q17 — Answer: B  *(FL-3.2.4, K2)*
In a **walkthrough**, the author typically leads participants through the work product to explain it, gather feedback, and build shared understanding.

### ✔️ Q18 — Answer: B  *(FL-3.1.3, K2)*
**Dynamic testing** requires **executing** the software to observe behavior and detect failures, whereas static testing examines work products without execution.

### ✔️ Q19 — Answer: B  *(FL-4.1.1, K2)*
**Branch testing** is a **white-box** technique (based on code structure). Equivalence partitioning and boundary value analysis are black-box; error guessing is experience-based.

### ✔️ Q20 — Answer: C  *(FL-4.4.1, K2)*
**Error guessing** uses the tester's **experience and knowledge** of where defects commonly occur to design targeted tests.

### ✔️ Q21 — Answer: B  *(FL-4.4.2, K2)*
A **test charter** defines the scope, focus, and goal of an exploratory session, giving structure without fully scripting the steps.

### ✔️ Q22 — Answer: B  *(FL-4.4.3, K2)*
**Checklist-based testing** uses experience- or standards-based lists to ensure important conditions are covered while leaving flexibility in how each item is tested.

### ✔️ Q23 — Answer: B  *(FL-4.5.1, K2)*
The "**Conversation**" (one of the 3 C's) is the discussion among business, developers, and testers that builds shared understanding of the story's intent and details.

### ✔️ Q24 — Answer: B  *(FL-4.5.2, K2)*
**Acceptance criteria** define the conditions the story must meet to be accepted as done; they guide development and provide the basis for acceptance tests.

### ✔️ Q25 — Answer: A  *(FL-4.2.1, K3)*
For the valid range 1–12: **6 is valid**, **0 is invalid** (below), and **13 is invalid** (above). Option A correctly gives one valid and two invalid values.

### ✔️ Q26 — Answer: A  *(FL-4.2.2, K3)*
**Three-value BVA** at the upper boundary (12) tests the boundary and both neighbors: **11, 12, 13**.

### ✔️ Q27 — Answer: C  *(FL-4.2.3, K3)*
A decision table with *n* binary conditions has **2ⁿ** rules; with 3 conditions that is 2³ = **8** columns before simplification.

### ✔️ Q28 — Answer: B  *(FL-4.2.4, K3)*
A transition not defined from the current state is an **invalid (undefined) transition**. Testing these (negative testing) checks the system handles them gracefully.

### ✔️ Q29 — Answer: B  *(FL-4.3.2, K3)*
Decision (branch) coverage requires the overall decision to evaluate **TRUE and FALSE**. Two test cases suffice — e.g., a=1, b=1 (true) and a=-1, b=1 (false).

### ✔️ Q30 — Answer: B  *(FL-5.3.1, K1)*
A **test metric** is a measurement such as the number of test cases executed/passed/failed, defect counts, or coverage achieved. The other options are not measurements of testing.

### ✔️ Q31 — Answer: B  *(FL-5.1.1, K2)*
A **test plan** defines objectives, scope, approach, schedule, resources, risks, and entry/exit criteria, and is a means of communication and control. It does not contain all source code or salaries.

### ✔️ Q32 — Answer: B  *(FL-5.1.3, K2)*
**Entry criteria** are preconditions for *starting* a test activity — e.g., environment ready, test data available, build deployed. Options A, C, and D are exit criteria.

### ✔️ Q33 — Answer: A  *(FL-5.2.4, K2)*
Risk analysis drives **thoroughness and scope**: high-risk areas get more rigorous techniques and deeper coverage; low-risk areas get lighter testing — focusing effort where failures matter most.

### ✔️ Q34 — Answer: B  *(FL-5.2.2, K2)*
A **project risk** relates to managing the project (people, schedule, suppliers, resources) — e.g., a **late supplier**. The others are product risks (defects in the product).

### ✔️ Q35 — Answer: B  *(FL-5.3.2, K2)*
A **test progress report** (interim/status report) communicates the current status of testing during the activity: progress against plan, risks, and impediments. The completion report comes at the end.

### ✔️ Q36 — Answer: B  *(FL-5.1.5, K3)*
Risk-based prioritization runs the highest-risk tests first: **TC1 (High/3), TC3 (Medium/2), TC2 (Low/1)** → TC1, TC3, TC2.

### ✔️ Q37 — Answer: B  *(FL-5.2.1, K3)*
Risk level = likelihood × impact = 3 × 2 = **6**.

### ✔️ Q38 — Answer: B  *(FL-5.5.1, K3)*
A high-quality defect report has a **clear unique summary, precise reproduction steps, expected vs actual results, severity/priority, and environment details** — enabling reproduction and prioritization. Vague text or a bare ID is insufficient.

### ✔️ Q39 — Answer: B  *(FL-6.1.1, K1)*
A tool that checks source code against coding standards **without executing it** is a **static analysis tool**.

### ✔️ Q40 — Answer: B  *(FL-6.2.1, K2)*
A key **risk** of automation is **underestimating maintenance effort** as the application evolves. The other options are benefits of automation.
