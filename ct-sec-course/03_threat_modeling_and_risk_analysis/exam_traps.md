# 🪤 Chapter 3 — Threat Modeling and Risk Analysis: Exam Traps

## 🪤 Trap 1: Confusing STRIDE Categories

**Trap:** Each STRIDE letter maps to a specific security property violation. Mixing them up is common.

**Example question:**
> An attacker modifies a user's shipping address after order submission. This is a STRIDE:
>
> A. Spoofing threat
> B. Tampering threat
> C. Repudiation threat
> D. Information Disclosure threat

**Correct answer:** B — Modifying data = tampering = integrity violation. Spoofing = identity, Repudiation = denial, Information Disclosure = confidentiality.

---

## 🪤 Trap 2: Adding STRIDE Ratings Instead of Averaging

**Trap:** DREAD calculates the AVERAGE of the five factors, not the sum.

**Example question:**
> A DREAD analysis gives scores: Damage=8, Reproducibility=10, Exploitability=9, Affected Users=10, Discoverability=8. The risk score is:
>
> A. 45 (sum of all)
> B. 9 (average)
> C. 10 (highest)
> D. 8 (lowest)

**Correct answer:** B — DREAD = average: (8+10+9+10+8)/5 = 45/5 = 9.

---

## 🪤 Trap 3: Confusing AND and OR Nodes in Attack Trees

**Trap:** OR nodes mean any one path succeeds. AND nodes mean all paths must succeed. This affects likelihood calculation.

**Example question:**
> In an attack tree, a node with three OR children means the attacker:
>
> A. Must complete all three child attacks
> B. Only needs to succeed at one of the three child attacks
> C. Must complete at least two
> D. Cannot use any of them

**Correct answer:** B — OR = any one child achieves the parent goal. AND = all children required.

---

## 🪤 Trap 4: Ignoring Likelihood in Risk Calculation

**Trap:** Risk requires both likelihood AND impact. High impact with low likelihood may not be the highest priority.

**Example question:**
> A threat has catastrophic impact (10) but requires a nation-state actor with physical access (likelihood 1). Another threat has moderate impact (5) but is easily exploited by anyone (likelihood 9). The higher priority is:
>
> A. The catastrophic impact threat (10 × 1 = 10)
> B. The easily exploited threat (5 × 9 = 45)
> C. Both are equal
> D. Neither requires testing

**Correct answer:** B — Risk = likelihood × impact. 45 > 10, so the easily exploited threat is higher priority.

---

## 🪤 Trap 5: Thinking All Risks Must Be Mitigated

**Trap:** Risk treatment includes accept, transfer, and avoid — not just mitigate. Low risks may be accepted.

**Example question:**
> A low-risk issue (score 2) would cost $500,000 to fix and provides minimal security benefit. The BEST treatment is:
>
> A. Mitigate at any cost
> B. Accept the risk and document the decision
> C. Ignore it completely without documentation
> D. Shut down the system

**Correct answer:** B — Low risk with high mitigation cost = accept with documentation. Ignoring without documentation is not proper risk management.
