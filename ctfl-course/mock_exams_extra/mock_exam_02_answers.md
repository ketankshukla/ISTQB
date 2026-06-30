# 📝 Mock Exam 2 — Answer Key (Extended Practice Set)

Each answer shows the **correct option**, a **rationale**, the **Learning Objective (LO)** it tests, and the **K-level**.

---

### ✔️ Q1 — Answer: B  *(FL-1.2.2, K1)*
**Quality assurance** is process-oriented — it works to give confidence that the right processes are followed so quality is achieved. **Testing** is a product-oriented quality-*control* activity. They are related but not the same.

### ✔️ Q2 — Answer: B  *(FL-1.5.1, K1)*
Generic testing skills include analytical and critical thinking, attention to detail, good written and verbal communication, and relevant domain/technical knowledge. Deep programming or pure management skills alone are not sufficient.

### ✔️ Q3 — Answer: B  *(FL-1.3.1, K2)*
This is the principle "**testing shows the presence of defects, not their absence**" — testing can reveal defects but can never prove that none remain.

### ✔️ Q4 — Answer: B  *(FL-1.2.1, K2)*
Testing contributes to success by **preventing** defects (e.g., reviewing requirements), **finding** defects during execution, helping satisfy contractual/legal/regulatory requirements, and building confidence. It cannot guarantee perfection.

### ✔️ Q5 — Answer: B  *(FL-1.4.3, K2)*
**Test design** produces test cases, coverage items, and test data requirements (and sometimes the test design specification). The test plan is from planning; defect reports from execution; the completion report from completion.

### ✔️ Q6 — Answer: B  *(FL-1.4.4, K2)*
**Traceability** between the test basis and test cases enables impact analysis when requirements change, measurement of coverage, and demonstrating that requirements have been tested — improving auditability and decision-making.

### ✔️ Q7 — Answer: B  *(FL-1.4.2, K2)*
The **context** drives the test process: risks, the SDLC in use, business domain, regulatory/contractual constraints, organizational policies, and available time and resources.

### ✔️ Q8 — Answer: B  *(FL-1.1.2, K2)*
**Debugging** is a development activity that finds, analyzes, and fixes the *cause* (defect) of a failure. After a fix, **confirmation testing** checks that the defect is resolved. Testers (not debuggers) find failures.

### ✔️ Q9 — Answer: D  *(FL-2.1.3, K1)*
TDD, ATDD, and BDD are the named **test-first** approaches. **Big-bang integration** is an integration strategy, not a test-first development approach.

### ✔️ Q10 — Answer: B  *(FL-2.1.2, K2)*
A good practice for all SDLCs is to involve testers early and **review the test basis** (requirements, user stories, designs) as soon as possible to find defects when they are cheapest to fix.

### ✔️ Q11 — Answer: B  *(FL-2.1.4, K2)*
**DevOps** emphasizes continuous integration and delivery with automated tests in the pipeline for rapid feedback. It increases automation but does not remove the need for manual/exploratory testing or test environments.

### ✔️ Q12 — Answer: B  *(FL-2.1.1, K2)*
The **SDLC** shapes the timing and scope of test activities, how much test documentation is produced, and which techniques are appropriate. Agile favors continuous testing; sequential models test in defined phases.

### ✔️ Q13 — Answer: B  *(FL-2.2.1, K2)*
**Operational acceptance testing (OAT)** is a form of acceptance testing (alongside UAT, contractual/regulatory acceptance testing, and alpha/beta testing). The other options are integration or white-box techniques.

### ✔️ Q14 — Answer: B  *(FL-2.3.1, K2)*
**Maintenance testing** is triggered by modifications, **migration** (e.g., to a new platform/OS/cloud), and retirement of a system. Initial development, writing original requirements, and retrospectives are not maintenance triggers.

### ✔️ Q15 — Answer: B  *(FL-3.2.3, K1)*
The **author** owns the work product and is responsible for fixing the defects found in it. The moderator facilitates, the scribe records, and the review leader takes overall responsibility for the review.

### ✔️ Q16 — Answer: B  *(FL-3.2.1, K1)*
**Early and frequent stakeholder feedback** surfaces misunderstandings about requirements early, so the team can correct course before building the wrong thing — reducing costly late rework.

### ✔️ Q17 — Answer: B  *(FL-3.1.2, K2)*
**Static testing** detects defects early (e.g., ambiguous requirements), lowering later rework and cost. It can also find defects that are difficult to expose through dynamic execution (e.g., unreachable code, inconsistencies).

### ✔️ Q18 — Answer: B  *(FL-3.2.2, K2)*
The review process activities are: **planning → initiate review → individual review (preparation) → communication and analysis (issue/meeting) → fixing and reporting**.

### ✔️ Q19 — Answer: B  *(FL-4.1.1, K2)*
**Black-box** techniques derive tests from the specified behavior of the test object without reference to its internal structure. Deriving from code structure is white-box; intuition-only is experience-based.

### ✔️ Q20 — Answer: B  *(FL-4.4.3, K2)*
**Checklist-based testing** uses a list of items/conditions/rules (from experience, standards, or known risks) to guide testing, without fully scripted step-by-step test cases.

### ✔️ Q21 — Answer: B  *(FL-4.4.2, K2)*
**Session-based test management** structures **exploratory testing** into chartered, time-boxed sessions with debriefs, adding accountability and reporting to exploratory work.

### ✔️ Q22 — Answer: B  *(FL-4.5.1, K2)*
**INVEST** (Independent, Negotiable, Valuable, Estimable, Small, Testable) is a checklist for assessing the quality of a **user story**.

### ✔️ Q23 — Answer: B  *(FL-4.5.2, K2)*
A bulleted list of rules the feature must satisfy is the **rule-oriented** format for acceptance criteria. The "Given/When/Then" style is scenario-oriented.

### ✔️ Q24 — Answer: B  *(FL-4.3.3, K2)*
**Branch coverage subsumes statement coverage**: achieving 100% branch coverage guarantees 100% statement coverage, but 100% statement coverage does not guarantee 100% branch coverage (e.g., an `IF` with no `ELSE`).

### ✔️ Q25 — Answer: C  *(FL-4.2.1, K3)*
There are two **valid** output partitions (Fail 0–49 and Pass 50–100) and two **invalid** partitions (below 0 and above 100) = **4 partitions**.

### ✔️ Q26 — Answer: C  *(FL-4.2.2, K3)*
**Two-value BVA** tests each boundary and the value just outside it. Lower boundary: 0 and 1; upper boundary: 1000 and 1001 → **4 values** in total.

### ✔️ Q27 — Answer: C  *(FL-4.2.4, K3)*
There are **5 valid transitions** listed. 0-switch (all-transitions) coverage requires every valid transition to be exercised at least once, so all **5** must be covered.

### ✔️ Q28 — Answer: A  *(FL-4.3.1, K3)*
A single input where `total > 100` (e.g., a = 60, b = 60) executes statements 1, 2, 3, 4, and 6 — every statement. So **1** test case achieves 100% statement coverage. (Branch coverage would need 2.)

### ✔️ Q29 — Answer: B  *(FL-4.5.3, K3)*
ATDD derives test cases directly from acceptance criteria. The positive scenario maps to **entering valid credentials and verifying a successful login**. The other options contradict the criterion or test different criteria.

### ✔️ Q30 — Answer: B  *(FL-5.1.6, K1)*
The **test pyramid** has many fast, cheap, low-level (unit/component) tests at the base and progressively fewer, slower, higher-level tests toward the top (UI/end-to-end).

### ✔️ Q31 — Answer: B  *(FL-5.1.1, K2)*
A **test plan** documents scope, objectives, approach, schedule, resources, risks, and entry/exit criteria. It does not contain source code, salaries, or marketing strategy.

### ✔️ Q32 — Answer: B  *(FL-5.1.3, K2)*
**Exit criteria** define when testing can stop — e.g., planned coverage achieved and unresolved high-severity defects below a threshold. Options A, C, and D are **entry criteria** (preconditions to start).

### ✔️ Q33 — Answer: B  *(FL-5.2.3, K2)*
**Product risk analysis** guides where to focus testing, which techniques and test levels/types to apply, and how to prioritize and how thoroughly to test — concentrating effort on the highest-risk areas.

### ✔️ Q34 — Answer: B  *(FL-5.4.1, K2)*
**Configuration management** uniquely identifies, versions, and tracks test objects and testware so that tests can be reproduced and results traced to specific versions of the system and testware.

### ✔️ Q35 — Answer: B  *(FL-5.3.3, K2)*
Good status communication is **tailored to the audience**, summarizing progress against objectives, residual risks, and product quality using clear metrics and visuals — not raw counts without context, and not withholding bad news.

### ✔️ Q36 — Answer: C  *(FL-5.1.5, K3)*
Risk-based prioritization runs the highest-scoring tests first. Descending order of scores: T1 (8), T3 (5), T2 (3) → **T1, T3, T2**.

### ✔️ Q37 — Answer: A  *(FL-5.2.1, K3)*
Risk level = likelihood × impact. R1 = 4 × 3 = **12**; R2 = 2 × 5 = 10. R1 has the higher risk level.

### ✔️ Q38 — Answer: B  *(FL-5.5.1, K3)*
To reproduce a defect, the developer most needs **clear, ordered steps to reproduce, with the test data and environment/build**. Severity, ID, and date are useful metadata but do not by themselves enable reproduction.

### ✔️ Q39 — Answer: B  *(FL-6.1.1, K1)*
A capture/replay tool that runs tests is a **test execution tool**. Management, static analysis, and requirements tools serve different purposes.

### ✔️ Q40 — Answer: B  *(FL-6.2.1, K2)*
A benefit of automation is **fast, repeatable execution** of large regression suites, freeing testers for higher-value activities. Automation does not find all defects, replace test design, or remove maintenance effort.
