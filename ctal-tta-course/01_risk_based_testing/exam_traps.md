# 🪤 Chapter 1 — Risk-Based Testing: Exam Traps

## 🪤 Trap 1: Confusing Technical Risks with Project/Business Risks

**Trap:** Technical test analysts focus on code, technology, security, and performance risks. Schedule and budget risks are project management concerns.

**Example question:**
> A technical test analyst is reviewing a new module. Which of the following is a TECHNICAL risk they should focus on?
>
> A. The project deadline may be missed
> B. The module uses a complex algorithm with 25 decision points
> C. The testing budget is insufficient
> D. The business analyst is on vacation

**Correct answer:** B — Code complexity is a technical risk. Deadlines (A), budgets (C), and staffing (D) are project risks.

---

## 🪤 Trap 2: Thinking All Risks Require the Same Testing Approach

**Trap:** Different technical risks require different testing techniques. One-size-fits-all testing is inefficient.

**Example question:**
> A system has a high-risk security component and a high-risk performance component. The test analyst should:
>
> A. Use the same test techniques for both components
> B. Select security-focused techniques for the security component and performance-focused techniques for the performance component
> C. Only test the security component because it is more important
> D. Only test the performance component because it is easier to measure

**Correct answer:** B — Different risks require different, appropriate techniques.

---

## 🪤 Trap 3: Confusing FMEA with Fault Tree Analysis

**Trap:** FMEA is bottom-up (component-by-component failure analysis). Fault tree analysis is top-down (starting from a system failure and working backward).

**Example question:**
> A technique that starts with a top-level system failure and breaks it down into contributing events is called:
>
> A. FMEA
> B. Fault tree analysis
> C. Risk matrix analysis
> D. Decision table testing

**Correct answer:** B — Fault tree analysis is top-down. FMEA is bottom-up.

---

## 🪤 Trap 4: Thinking Risk Priority Number (RPN) Is the Only Factor

**Trap:** RPN = Severity x Likelihood x Detectability. However, some organizations may weight severity more heavily, or have mandatory actions for certain severity levels regardless of RPN.

**Example question:**
> A failure mode has Severity=10, Likelihood=2, Detectability=2 (RPN=40). Another has Severity=5, Likelihood=5, Detectability=5 (RPN=125). Which should typically receive MORE attention?
>
> A. The one with RPN=125 because it has a higher overall number
> B. The one with Severity=10 because severity represents the worst-case impact
> C. Neither — RPN is the only factor
> D. Both equally because they are both risks

**Correct answer:** B — Severity=10 (catastrophic) usually warrants attention even with lower likelihood. Many standards require action on high-severity items.

---

## 🪤 Trap 5: Forgetting That Technical Test Analysts Contribute to Risk Identification

**Trap:** Technical test analysts participate in risk identification by analyzing architecture, design, and code — not just executing tests after risks are identified.

**Example question:**
> When should a technical test analyst first contribute to risk identification?
>
> A. After all tests have been executed
> B. During requirements and design review
> C. Only during test execution
> D. After the product is released

**Correct answer:** B — Technical test analysts should identify risks early, during requirements and design review, to influence testing approach.
