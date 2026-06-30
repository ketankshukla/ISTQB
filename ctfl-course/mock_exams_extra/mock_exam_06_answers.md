# 📝 Mock Exam 6 — Answer Key (Extended Practice Set)

Each answer shows the **correct option**, a **rationale**, the **Learning Objective (LO)** it tests, and the **K-level**.

---

### ✔️ Q1 — Answer: B  *(FL-1.1.1, K1)*
**Reviewing requirements and designs** (static testing) finds issues before they become coded defects — supporting the **defect-prevention** objective. Fixing code is debugging, not a test objective.

### ✔️ Q2 — Answer: B  *(FL-1.2.2, K1)*
**QA** is process-oriented: it establishes and improves processes to give confidence that quality will be achieved. Executing software and fixing defects are control/development activities.

### ✔️ Q3 — Answer: A  *(FL-1.3.1, K2)*
"**Defects cluster together**" (the Pareto effect) states that a small number of modules typically contain most of the defects, which helps focus testing.

### ✔️ Q4 — Answer: B  *(FL-1.2.3, K2)*
An **error** is the human mistake — here, **misreading the specification**. The faulty code is the defect; the runtime wrong result/crash is the failure.

### ✔️ Q5 — Answer: B  *(FL-1.4.4, K2)*
**Traceability** lets the team see which requirements are covered by tests and perform **impact analysis** when requirements or code change.

### ✔️ Q6 — Answer: B  *(FL-1.4.1, K2)*
**Test completion** archives testware, evaluates lessons learned, and produces the completion report — wrapping up the test effort.

### ✔️ Q7 — Answer: A  *(FL-1.4.2, K2)*
A **safety-critical** system needing more rigor and documentation than a trivial internal tool shows how **context** shapes the test process.

### ✔️ Q8 — Answer: B  *(FL-1.4.5, K2)*
In smaller teams or Agile contexts, **one person may take on both** the test management and testing roles. It is neither forbidden nor mandatory in all projects.

### ✔️ Q9 — Answer: B  *(FL-2.1.3, K1)*
In **test-first approaches** (TDD/ATDD/BDD), tests or examples are written **before or alongside** the code they verify, driving the implementation.

### ✔️ Q10 — Answer: B  *(FL-2.1.2, K2)*
A good practice for any SDLC is **continuous tester involvement** and a corresponding test activity for every development phase.

### ✔️ Q11 — Answer: B  *(FL-2.1.4, K2)*
**DevOps** embeds **automated tests in the CI/CD pipeline** so each change gets rapid feedback. Manual/exploratory testing and environments are still needed.

### ✔️ Q12 — Answer: B  *(FL-2.2.1, K2)*
**Integration testing** targets defects in the **interfaces and interactions** between components or systems, not single statements or documents.

### ✔️ Q13 — Answer: B  *(FL-2.2.2, K2)*
A **black-box functional** test checks behavior against the specification — valid credentials are accepted and invalid ones rejected — without examining internal code.

### ✔️ Q14 — Answer: B  *(FL-2.3.1, K2)*
**Maintenance testing** occurs when an **operational** system is **modified, migrated, or retired** — not during initial development.

### ✔️ Q15 — Answer: B  *(FL-3.2.3, K1)*
The **moderator/facilitator** runs the review effectively, mediates, and ensures the process is followed. Authoring and fixing belong to the author.

### ✔️ Q16 — Answer: B  *(FL-3.1.1, K1)*
Static testing of a user story can find **ambiguous or untestable acceptance criteria**. Runtime issues like memory leaks or slow queries require dynamic testing.

### ✔️ Q17 — Answer: B  *(FL-3.1.2, K2)*
Finding a defect during a **requirements review** is **cheaper** than finding it later in system testing, because early removal avoids downstream rework.

### ✔️ Q18 — Answer: B  *(FL-3.2.2, K2)*
"**Fixing and reporting**" logs defects, decides actions, applies fixes where appropriate, and tracks issues to closure.

### ✔️ Q19 — Answer: C  *(FL-4.1.1, K2)*
With **no specification** and reliance on expertise, you use **experience-based** techniques (e.g., error guessing, exploratory testing).

### ✔️ Q20 — Answer: B  *(FL-4.4.2, K2)*
A **test charter** states the mission/focus of a time-boxed exploratory session, providing structure without scripting every step.

### ✔️ Q21 — Answer: A  *(FL-4.4.1, K2)*
**Error guessing** targets likely problem inputs — **empty, zero, maximum, duplicate, invalid formats** — based on experience of common failures.

### ✔️ Q22 — Answer: B  *(FL-4.4.3, K2)*
Checklist-based testing is only as good as its **checklist**; items not on the list may be missed, so judgment is still required.

### ✔️ Q23 — Answer: B  *(FL-4.5.1, K2)*
"**Confirmation**" refers to the **acceptance criteria/tests** that confirm the story is complete — the third of the 3 C's (Card, Conversation, Confirmation).

### ✔️ Q24 — Answer: B  *(FL-4.5.2, K2)*
**Rule-oriented** acceptance criteria are written as a **bulleted list of rules/conditions**; the scenario-oriented form uses Given/When/Then.

### ✔️ Q25 — Answer: C  *(FL-4.2.1, K3)*
Partitions: below 15 (invalid), 15–30 (valid), above 30 (invalid) = **3 partitions**.

### ✔️ Q26 — Answer: A  *(FL-4.2.2, K3)*
**Two-value BVA** at the upper boundary 30 tests the boundary and its nearest neighbor outside the partition: **30 and 31**.

### ✔️ Q27 — Answer: B  *(FL-4.2.3, K3)*
Two binary conditions give 2² = **4** rules in the full decision table.

### ✔️ Q28 — Answer: B  *(FL-4.2.4, K3)*
There are **3 valid transitions** (Draft→Review, Review→Draft, Review→Approved); 0-switch coverage requires exercising all **3**.

### ✔️ Q29 — Answer: B  *(FL-4.3.2, K3)*
Even **without an ELSE**, branch/decision coverage requires the decision `age >= 18` to be both **TRUE and FALSE** → **2** test cases (e.g., age = 20 and age = 16).

### ✔️ Q30 — Answer: B  *(FL-5.1.4, K1)*
Wideband Delphi and planning poker are **expert-based estimation** techniques that combine the judgment of several people.

### ✔️ Q31 — Answer: B  *(FL-5.1.1, K2)*
A **test plan** is a living document that **may be updated** as the project and its risks evolve. It is not a one-time, defect-only, or completion document.

### ✔️ Q32 — Answer: B  *(FL-5.1.3, K2)*
Having executed all planned tests and met the agreed conditions describes **exit criteria** (the conditions for *stopping* testing).

### ✔️ Q33 — Answer: B  *(FL-5.2.3, K2)*
**Product risk analysis** guides **what to test, how deeply, and with which techniques and priorities**, focusing effort where failures would hurt most.

### ✔️ Q34 — Answer: B  *(FL-5.2.2, K2)*
A regulatory change that adds unplanned scope threatens the project's delivery — a **project risk** — rather than being a defect in the product itself.

### ✔️ Q35 — Answer: A  *(FL-5.3.3, K2)*
Reporting that high-severity defects remain open is **communicating test status** so stakeholders can make informed go/no-go decisions.

### ✔️ Q36 — Answer: A  *(FL-5.1.5, K3)*
Highest risk first: the two **High** sets B and C (B before C by the tie-break), then **Medium** A, then **Low** D → **B, C, A, D**.

### ✔️ Q37 — Answer: B  *(FL-5.2.1, K3)*
Risk level = likelihood × impact = 4 × 4 = **16**.

### ✔️ Q38 — Answer: B  *(FL-5.5.1, K3)*
**Severity** measures the **impact of the failure on the system**. Priority measures urgency to fix; the other options are irrelevant metadata.

### ✔️ Q39 — Answer: A  *(FL-6.1.1, K1)*
Tools that create or manage test data are **test data preparation tools**.

### ✔️ Q40 — Answer: B  *(FL-6.2.1, K2)*
Realistically, automation has **upfront and maintenance costs**, with benefits accruing over **repeated runs of stable tests** — it is not free, instant, or quality-reducing.
