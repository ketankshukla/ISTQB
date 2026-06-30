# 📝 Mock Exam 4 — Answer Key (Extended Practice Set)

Each answer shows the **correct option**, a **rationale**, the **Learning Objective (LO)** it tests, and the **K-level**.

---

### ✔️ Q1 — Answer: B  *(FL-1.2.2, K1)*
**Quality control (QC)** is product-oriented — activities like testing that identify defects in work products. **Quality assurance (QA)** is process-oriented — establishing confidence that suitable processes are followed.

### ✔️ Q2 — Answer: B  *(FL-1.1.1, K1)*
Typical objectives include **evaluating work products** (e.g., reviewing requirements and code) and **verifying/validating** the software. Testing does not aim to increase defects, block release, or replace stakeholder decisions.

### ✔️ Q3 — Answer: B  *(FL-1.3.1, K2)*
The **absence-of-errors fallacy** warns that a system can be nearly defect-free yet **still fail to meet users' needs** — so fixing many defects does not guarantee success.

### ✔️ Q4 — Answer: B  *(FL-1.2.3, K2)*
A **root cause** is the deepest underlying reason that, if removed, prevents recurrence. It is distinct from the failure (the symptom) and the defect (the flaw).

### ✔️ Q5 — Answer: A  *(FL-1.4.3, K2)*
**Test planning** produces the **test plan**. Execution logs and defect reports come from test execution; detailed test cases come from test design.

### ✔️ Q6 — Answer: B  *(FL-1.4.4, K2)*
**Traceability** supports coverage assessment, impact analysis when requirements change, and auditing — adding real value beyond documentation for its own sake.

### ✔️ Q7 — Answer: B  *(FL-1.4.2, K2)*
The test process must be **tailored to context**: the risks, the SDLC, the business domain, regulatory needs, and project constraints. It is not identical everywhere.

### ✔️ Q8 — Answer: B  *(FL-1.5.3, K2)*
A **benefit** of independence is that independent testers bring objectivity, recognize different failures, and can **challenge assumptions**. (A drawback would be isolation; developers still retain responsibility for quality.)

### ✔️ Q9 — Answer: B  *(FL-2.1.3, K1)*
**BDD** expresses behavior as **Given/When/Then** scenarios in business-readable language, fostering shared understanding among business, developers, and testers.

### ✔️ Q10 — Answer: B  *(FL-2.1.2, K2)*
A good practice for all SDLCs is to **involve testers early**, including in requirements and design reviews, to catch defects when they are cheapest to fix.

### ✔️ Q11 — Answer: A  *(FL-2.1.5, K2)*
**Shift-left** means doing test activities **earlier** — e.g., static analysis and reviewing requirements before code exists — rather than waiting until after release.

### ✔️ Q12 — Answer: B  *(FL-2.2.2, K2)*
**Functional testing** evaluates **what** the system does — its functions/behavior against requirements. Speed and maintainability are non-functional concerns; code structure relates to white-box testing.

### ✔️ Q13 — Answer: B  *(FL-2.2.1, K2)*
**System testing** evaluates the behavior and capabilities of the **whole, integrated system**, typically against system requirements.

### ✔️ Q14 — Answer: A  *(FL-2.3.1, K2)*
When a system is **retired**, maintenance testing may verify **data migration/archiving** and restore procedures. The other options describe initial development, not maintenance.

### ✔️ Q15 — Answer: B  *(FL-3.2.3, K1)*
The **scribe/recorder** documents the issues, defects, and decisions raised during the review. Leading is the moderator's job; fixing is the author's; authoring the product is also the author's.

### ✔️ Q16 — Answer: B  *(FL-3.2.1, K1)*
**Early stakeholder feedback** validates that the team is building the **right product** and aligns expectations, reducing the risk and cost of late changes.

### ✔️ Q17 — Answer: B  *(FL-3.1.2, K2)*
**Static testing** examines work products early to find defects (ambiguities, inconsistencies, omissions) **before they propagate**, lowering downstream cost. It does not require execution.

### ✔️ Q18 — Answer: B  *(FL-3.2.2, K2)*
During **individual review (preparation)**, each reviewer examines the work product alone to identify potential defects — typically where most defects are found.

### ✔️ Q19 — Answer: B  *(FL-4.1.1, K2)*
**Black-box** = based on specifications/behavior; **white-box** = based on internal structure; **experience-based** = based on the tester's knowledge, skills, and intuition.

### ✔️ Q20 — Answer: B  *(FL-4.3.3, K2)*
**White-box testing** can reveal **untested or dead code** and structural defects and lets you measure code coverage — value that black-box testing alone cannot provide. It complements, not replaces, black-box testing.

### ✔️ Q21 — Answer: B  *(FL-4.4.2, K2)*
In **exploratory testing**, learning, test design, and execution happen **concurrently**, often guided by charters. It can absolutely find defects and is not merely for documentation.

### ✔️ Q22 — Answer: B  *(FL-4.4.1, K2)*
**Error guessing** uses experience to target likely failure points — empty values, very long strings, special characters, boundaries — rather than deriving cases from a model or coverage.

### ✔️ Q23 — Answer: B  *(FL-4.5.3, K3)*
In **ATDD**, the team collaboratively writes acceptance tests **before development**, based on the acceptance criteria; these tests then drive development and serve as confirmation.

### ✔️ Q24 — Answer: B  *(FL-4.5.2, K2)*
The **Given/When/Then** structure is the **scenario-oriented** format for acceptance criteria.

### ✔️ Q25 — Answer: B  *(FL-4.2.1, K3)*
The valid partition is 18–65, so **40 is valid**. 17 is below the range; 66 and 70 are above it (all invalid).

### ✔️ Q26 — Answer: A  *(FL-4.2.2, K3)*
**Two-value BVA** tests the boundary value and its nearest neighbor in the adjacent partition. For the lower boundary 18, that is **17 and 18**. (Three-value BVA would add 19.)

### ✔️ Q27 — Answer: C  *(FL-4.2.3, K3)*
With 2 binary conditions, the full decision table has 2² = **4** rules.

### ✔️ Q28 — Answer: B  *(FL-4.2.4, K3)*
There are **2 valid transitions** (coin and push). 0-switch coverage requires every valid transition to be exercised at least once, so both must be covered.

### ✔️ Q29 — Answer: B  *(FL-4.3.1, K3)*
Statements 3 ("pass") and 5 ("fail") lie on **mutually exclusive branches** of the IF/ELSE. To execute both, you need one input with score ≥ 50 and one with score < 50 → **2** test cases.

### ✔️ Q30 — Answer: B  *(FL-5.1.4, K1)*
Estimation techniques include **expert-based** approaches (e.g., planning poker, Wideband Delphi) and **metrics-based** approaches (e.g., extrapolation from historical data). The others are test design techniques.

### ✔️ Q31 — Answer: B  *(FL-5.1.7, K2)*
The **testing quadrants** help ensure a **balanced mix** of tests across the business-facing/technology-facing axis and the supporting-the-team/critiquing-the-product axis.

### ✔️ Q32 — Answer: B  *(FL-5.1.3, K2)*
**Entry criteria** are the **preconditions** that must be satisfied before a test activity can sensibly begin (e.g., environment ready, test data available).

### ✔️ Q33 — Answer: B  *(FL-5.2.3, K2)*
For a **high-risk** module, the team should **allocate more effort and more rigorous techniques** — concentrating testing where the impact of failure is greatest.

### ✔️ Q34 — Answer: B  *(FL-5.2.2, K2)*
A late or unready **test environment** is a **project risk** (it threatens the project's ability to deliver), not a defect in the product.

### ✔️ Q35 — Answer: B  *(FL-5.3.2, K2)*
A **test completion report** is aimed at **stakeholders, management, and sometimes the customer**, summarizing results and residual risk to support end-of-activity decisions.

### ✔️ Q36 — Answer: A  *(FL-5.1.5, K3)*
Highest risk first: F1 (9), F3 (7), then F2 and F4 (both 4) with the tie broken by lower feature number → F2 before F4. Order: **F1, F3, F2, F4**.

### ✔️ Q37 — Answer: B  *(FL-5.2.1, K3)*
Risk level = likelihood × impact. R1 = 2 × 4 = 8; R2 = 3 × 3 = **9**. R2 is higher.

### ✔️ Q38 — Answer: B  *(FL-5.5.1, K3)*
A good defect report is written so **anyone** can understand the problem, **reproduce** it, and **assess its impact** — which means clear steps and environment info, not hidden or omitted details.

### ✔️ Q39 — Answer: A  *(FL-6.1.1, K1)*
**Test management tools** support planning, tracking, and managing test activities, testware, and traceability.

### ✔️ Q40 — Answer: B  *(FL-6.2.1, K2)*
A benefit of automation is **consistent, repeatable execution** of large suites, quickly and often. It does not remove the need for testers, eliminate maintenance, or guarantee defect-free software.
