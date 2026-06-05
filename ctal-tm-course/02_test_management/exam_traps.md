# Chapter 2 — Test Management: Exam Traps

## Trap 1: Confusing Bottom-Up and Top-Down Estimation

**Trap:** Bottom-up = sum of task estimates. Top-down = allocate overall estimate to tasks.

**Example question:**
> A test manager estimates testing effort by first estimating the total project effort and then allocating percentages to each test phase. This is:
>
> A. Bottom-up estimation
> B. Top-down estimation
> C. Wideband Delphi
> D. Experience-based estimation

**Correct answer:** B — Estimating total first, then allocating is top-down.

---

## Trap 2: Confusing Severity with Priority

**Trap:** Severity = technical impact. Priority = business importance / fix order.

**Example question:**
> A typo on the company homepage is embarrassing to the business but does not affect functionality. This defect has:
>
> A. High severity, high priority
> B. Low severity, high priority
> C. High severity, low priority
> D. Low severity, low priority

**Correct answer:** B — Low severity (cosmetic, no functional impact) but high priority (customer-facing, brand damage).

---

## Trap 3: Confusing Likelihood and Impact in Risk Assessment

**Trap:** Risk priority = likelihood × impact. They are separate dimensions.

**Example question:**
> A risk has low likelihood but critical impact. Another risk has high likelihood but minor impact. According to risk-based testing:
>
> A. Only the high-likelihood risk should be tested
> B. The low-likelihood/critical-impact risk may require more testing than the high-likelihood/minor-impact risk
> C. Impact is irrelevant; only likelihood matters
> D. Both risks should receive equal testing effort

**Correct answer:** B — Risk priority considers both dimensions. Low likelihood × critical impact may still be a higher priority than high likelihood × minor impact.

---

## Trap 4: Thinking Independent Testing Eliminates All Communication

**Trap:** Independent testing provides objectivity but can create communication barriers. The test manager must actively manage stakeholder relationships.

**Example question:**
> A test team is completely independent from the development organization. What is the GREATEST risk?
>
> A. Testers will be too friendly with developers
> B. Communication barriers may lead to misunderstandings about requirements
> C. The team will have too much domain knowledge
> D. Testing will be completed too quickly

**Correct answer:** B — Independence can create communication gaps. The test manager must actively bridge this.

---

## Trap 5: Confusing Defect Detection Percentage with Defect Removal Efficiency

**Trap:** DDP = defects found by testing / total defects. DRE = defects found before release / total defects found ever.

**Example question:**
> 200 defects were found in testing. After release, 50 more defects were found by users. The Defect Detection Percentage (DDP) of testing is:
>
> A. 200 / 50 = 400%
> B. 200 / 250 = 80%
> C. 50 / 250 = 20%
> D. Cannot be calculated

**Correct answer:** B — DDP = defects found by testing / total defects = 200 / (200 + 50) = 80%.
