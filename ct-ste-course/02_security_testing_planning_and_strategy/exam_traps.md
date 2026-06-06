# Chapter 2 — Security Testing Planning and Strategy: Exam Traps

## Trap 1: Testing Everything Equally

**Trap:** Risk-based testing prioritizes high-impact areas. Not all features need the same security effort.

**Example question:**
> A team applies the same depth of security testing to the contact form and the payment processing module. The better approach is:
>
> A. Equal testing is fair
> B. Risk-based prioritization — payment processing needs deeper testing due to higher impact
> C. Only test the contact form
> D. Only test payment processing

**Correct answer:** B — Risk determines test depth.

---

## Trap 2: Black-Box Only Testing

**Trap:** Black-box simulates attackers but misses issues visible in code. White-box and grey-box provide additional coverage.

**Example question:**
> A company relies solely on black-box penetration testing. They may miss:
>
> A. Nothing — black-box is comprehensive
> B. Vulnerabilities visible in source code, configuration errors, and design flaws
> C. Only SQL injection
> D. Only XSS

**Correct answer:** B — Combine approaches for thorough coverage.

---

## Trap 3: Treating Compliance as Security

**Trap:** Meeting compliance requirements doesn't mean the system is secure. Compliance is a minimum baseline.

**Example question:**
> An application passes all PCI-DSS audits but has a critical unpatched vulnerability. This shows:
>
> A. The application is secure
> B. Compliance is necessary but not sufficient for security
> C. Only the auditors were wrong
> D. Only the vulnerability scanner failed

**Correct answer:** B — Compliance ≠ security.

---

## Trap 4: No Remediation Planning

**Trap:** Finding vulnerabilities without fixing them is pointless. The strategy must include remediation and verification.

**Example question:**
> A security test report lists 50 vulnerabilities but no one is assigned to fix them. The test was:
>
> A. Successful
> B. Incomplete — testing without remediation planning wastes effort
> C. Only too expensive
> D. Only too early

**Correct answer:** B — Testing must include remediation.

---

## Trap 5: Ignoring Third-Party Components

**Trap:** Vulnerable dependencies are a major attack vector. They must be in scope.

**Example question:**
> A team tests their custom code but skips checking library versions. The risk is:
>
> A. No risk — libraries are safe
> B. Known vulnerabilities in dependencies may be exploited (log4j, etc.)
> C. Only performance issues
> D. Only licensing issues

**Correct answer:** B — Dependencies must be scanned.
