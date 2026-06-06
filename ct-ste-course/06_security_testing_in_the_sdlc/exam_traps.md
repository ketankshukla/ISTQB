# Chapter 6 — Security Testing in the SDLC: Exam Traps

## Trap 1: Security Testing Only in the Testing Phase

**Trap:** SSDLC integrates security throughout all phases, not just at the end.

**Example question:**
> A team adds a "security testing phase" right before release. This is:
>
> A. Good — dedicated security testing
> B. Better than nothing, but misses early design and code-level issues that are cheaper to fix
> C) Only wrong for agile
> D) Only wrong for large systems

**Correct answer:** B — Security must be integrated throughout, not bolted on at the end.

---

## Trap 2: Threat Modeling is Only for Architects

**Trap:** Threat modeling benefits from diverse perspectives — developers, testers, business analysts contribute.

**Example question:**
> Threat modeling is performed only by the security architect in isolation. The limitation is:
>
> A. Architects know best
> B. Missing developer knowledge of implementation and tester knowledge of abuse cases
> C. Only slower
> D. Only more expensive

**Correct answer:** B — Threat modeling is a collaborative activity.

---

## Trap 3: DevSecOps Means Security Team Disappears

**Trap:** DevSecOps shifts security left but still needs security expertise for guidance, complex issues, and governance.

**Example question:**
> In DevSecOps, the security team should:
>
> A. Be disbanded — developers handle everything
> B. Shift to enabling, tooling, and escalation while developers own day-to-day security
> C. Only manage compliance
> D. Only write policies

**Correct answer:** B — Security team enables; developers own operational security.

---

## Trap 4: Ignoring Security Technical Debt

**Trap:** Unmanaged security debt accumulates and creates catastrophic risk.

**Example question:**
> A team has 50 known security issues in their backlog but always prioritizes features. The result is:
>
> A. Faster feature delivery
> B. Accumulating risk that may lead to a major breach; security debt needs prioritized remediation
> C. Only slower testing
> D. Only more documentation

**Correct answer:** B — Security debt must be actively managed.

---

## Trap 5: Treating Security Requirements as Non-Testable

**Trap:** Security requirements must be specific and testable, just like functional requirements.

**Example question:**
> A requirement states "The system shall be secure." The problem is:
>
> A. It is a valid requirement
> B. It is vague and untestable; requirements should specify controls (e.g., TLS 1.3, MFA for admin)
> C. Only that it is too short
> D. Only that it needs a test case

**Correct answer:** B — Security requirements must be specific and testable.
