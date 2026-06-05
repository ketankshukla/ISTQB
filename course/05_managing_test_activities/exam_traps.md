# Chapter 5 — Exam Traps

---

## Trap 1: Project Risk vs Product Risk

This is a favorite ISTQB distinction:

- **Project risk** = threatens the project (schedule, budget, resources, scope)
- **Product risk** = threatens the quality of the product (functional defects, performance, security)

**Trap question pattern:** A scenario describes "the test environment will not be ready on time." Is this a project risk or product risk? Answer: **Project risk** (it affects the schedule/ability to test, not the product quality itself).

Another scenario: "The payment module may have security vulnerabilities." Answer: **Product risk** (it directly threatens product quality).

---

## Trap 2: Entry Criteria vs Exit Criteria

- **Entry criteria** = preconditions to START testing (test environment ready, test basis available, code deployed)
- **Exit criteria** = conditions to STOP testing (coverage achieved, no critical defects open, report produced)

**Trap:** In Agile, entry criteria map to **Definition of Ready (DoR)** and exit criteria map to **Definition of Done (DoD)**. The exam may use either terminology.

**Common mistake:** Confusing "test plan approved" (entry criterion — needed before you start) with "test summary report produced" (exit criterion — needed when you finish).

---

## Trap 3: Severity vs Priority

| | Severity | Priority |
|---|---|---|
| Defined by | Testers (technical assessment) | Management/business (business urgency) |
| Measures | Technical impact of the defect | How urgently it needs to be fixed |
| Can differ? | Yes — a critical crash in a rarely-used admin feature may be high severity but low priority |

**Trap:** The exam may describe a cosmetic defect on the company's homepage that the CEO wants fixed immediately. Severity = Low (cosmetic). Priority = High (CEO demand). These are NOT the same.

---

## Trap 4: Risk Level Calculation

Risk level = Likelihood x Impact

**Trap:** The exam may give you a table of risks with likelihood and impact scores and ask you to identify the highest-risk item. Simply multiply L x I and pick the highest.

**Do not confuse:** "Most likely" is not the same as "highest risk." A very likely event with negligible impact has lower risk than an unlikely event with catastrophic impact.

---

## Trap 5: Test Pyramid — Direction Matters

- **Base (bottom):** MANY fast, cheap unit/component tests
- **Top:** FEW slow, expensive UI/E2E tests

**Trap:** An "inverted pyramid" or "ice cream cone" (many UI tests, few unit tests) is described as an ANTI-PATTERN, not a recommended approach.

**Trap:** The test pyramid does NOT say UI testing is unnecessary — it says there should be FEWER of them relative to lower-level tests.

---

## Trap 6: Testing Quadrants — All Four Are Needed

No single quadrant is sufficient:
- Q1 (technology-facing, support) — guides development
- Q2 (business-facing, support) — validates features
- Q3 (business-facing, critique) — evaluates user experience
- Q4 (technology-facing, critique) — evaluates quality attributes

**Trap:** A question asking "which quadrant includes performance testing?" Answer: Q4 (technology-facing, critique product).

**Trap:** A question asking "which quadrant includes exploratory testing?" Answer: Q3 (business-facing, critique product).

---

## Trap 7: Metrics Are for Information, Not Punishment

The ISTQB perspective: metrics should provide objective information for decision-making. They should NOT be used to judge individual performance (e.g., "this developer has the most bugs — they must be fired").

**Trap:** If a question asks about the purpose of defect metrics, the correct answer involves informing decisions and improving processes — not evaluating or punishing individuals.

---

## Trap 8: Test Reports — Audience Matters

| Report Type | Audience | Content Focus |
|-------------|----------|---------------|
| Progress report (interim) | Team, project manager | Current status, blockers, risks |
| Completion report (summary) | Stakeholders, management | Overall assessment, residual risk, ship/no-ship recommendation |

**Trap:** A question about what information should be in a test report for executives — they want high-level summary, risk assessment, and recommendations. They do NOT want detailed test case logs or step-by-step execution data.

---

## Trap 9: Configuration Management — What It Covers

CM covers ALL work products, including testware:
- Source code
- Test cases, test scripts, test data
- Test plans and reports
- Environment configurations
- Requirements documents

**Trap:** The exam may ask "Why is CM important for testing?" Correct answers include: reproducibility of defects, traceability to specific versions, ensuring all testers use the correct version of testware, and ability to roll back if needed.

---

## Trap 10: Defect Report — Must Include Expected AND Actual Result

A defect report without both expected and actual results is INCOMPLETE:
- **Expected result** — what SHOULD have happened (based on requirements)
- **Actual result** — what DID happen (the observed failure)

**Trap:** The exam may present defect reports with missing fields and ask which is most critical. The steps to reproduce, expected result, and actual result are the most essential fields (after the identifier and title).

---

## Trap 11: Estimation — Expert vs Metrics-Based

- **Expert-based** (Planning Poker, Wideband Delphi) = relies on human judgment
- **Metrics-based** = relies on historical data from past projects

**Trap:** Planning Poker is expert-based even though it uses numbers/cards — the numbers represent expert judgment, not measured data.

---

## Trap 12: Risk-Based Testing Does Not Mean Testing Only High-Risk Areas

Risk-based testing means PROPORTIONAL effort:
- High-risk areas: extensive testing (many techniques, early execution)
- Medium-risk areas: standard testing
- Low-risk areas: basic testing (not NO testing)

**Trap:** Any answer suggesting low-risk areas are skipped entirely is typically wrong. They receive LESS testing, not zero testing (unless explicitly accepted by stakeholders as residual risk).

---

## Trap 13: The Test Plan Is a Living Document

In Agile contexts, the test plan is NOT a one-time document created at the start:
- It evolves as the project progresses
- In Agile, test planning happens each sprint/iteration
- The plan is updated based on new information, risks, and retrospective outcomes

**Trap:** Any answer implying the test plan is fixed and unchangeable once written is wrong.
