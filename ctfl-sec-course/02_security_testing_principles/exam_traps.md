# Chapter 2 — Security Testing Principles: Exam Traps

## Trap 1: Preventive Controls are Sufficient

**Trap:** Need preventive, detective, AND corrective controls for defense in depth.

**Example question:**
> Strong authentication prevents all security incidents. This is:
>
> A. Correct — good authentication stops attackers
> B. Incorrect — authentication alone is not enough; detective controls (monitoring) and corrective controls (incident response) are also needed
> C. Only for external users
> D. Only for internal users

**Correct answer:** B — Defense in depth requires multiple control types.

---

## Trap 2: Risk is Only About Impact

**Trap:** Risk = Likelihood x Impact. Both matter.

**Example question:**
> A vulnerability with catastrophic impact is always the highest priority. This is:
>
> A. Correct — impact determines everything
> B. Incorrect — risk depends on both likelihood and impact; a high-impact but extremely unlikely vulnerability may be lower priority than a medium-impact, high-likelihood one
> C. Only for financial systems
> D. Only for healthcare

**Correct answer:** B — Risk = likelihood + impact.

---

## Trap 3: Threat Modeling is Only for Security Teams

**Trap:** Threat modeling should involve architects, developers, and testers.

**Example question:**
> Threat modeling is performed exclusively by security specialists after development is complete. This is:
>
> A. Correct — security experts know the threats best
> B. Incorrect — threat modeling should involve the whole team and occur during design, not after development
> C. Only for large organizations
> D. Only for government

**Correct answer:** B — Threat modeling = design phase + whole team.

---

## Trap 4: Encryption Solves All Security Problems

**Trap:** Encryption provides confidentiality; integrity and availability need separate controls.

**Example question:**
> Encrypting all data at rest and in transit fully protects the system. This is:
>
> A. Correct — encryption is the best security control
> B. Incorrect — encryption protects confidentiality but not integrity (needs hashing/signatures) or availability (needs redundancy/failover)
> C. Only for cloud
> D. Only for on-premise

**Correct answer:** B — Encryption ≠ complete security.

---

## Trap 5: Security Requirements are Implicit

**Trap:** Security requirements must be explicit, testable, and traceable.

**Example question:**
> Security requirements don't need to be documented separately since security is common sense. This is:
>
> A. Correct — everyone knows security is important
> B. Incorrect — security requirements must be explicit, testable, and traceable just like functional requirements
> C. Only for agile teams
> D. Only for waterfall teams

**Correct answer:** B — Security requirements must be explicit.
