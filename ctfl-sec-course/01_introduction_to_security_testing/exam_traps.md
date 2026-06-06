# Chapter 1 — Introduction to Security Testing: Exam Traps

## Trap 1: Security Testing is Only Penetration Testing

**Trap:** Security testing includes code review, vulnerability scanning, risk analysis, and more.

**Example question:**
> Security testing is synonymous with penetration testing. This is:
>
> A. Correct — they are the same
> B. Incorrect — security testing includes penetration testing, code review, vulnerability scanning, and risk analysis
> C. Only for web applications
> D. Only for networks

**Correct answer:** B — Pen testing is one technique among many.

---

## Trap 2: Only Security Experts Can Do Security Testing

**Trap:** All testers can perform basic security testing using tools and checklists.

**Example question:**
> Security testing must be performed exclusively by specialized security professionals. This is:
>
> A. Correct — only experts can find vulnerabilities
> B. Incorrect — all testers can perform basic security testing; experts are needed for advanced penetration testing
> C. Only for financial systems
> D. Only for government systems

**Correct answer:** B — Security testing is everyone's responsibility.

---

## Trap 3: Security Testing Happens at the End

**Trap:** Security must be integrated throughout the SDLC (SSDLC).

**Example question:**
> Security testing should be the final phase before release. This is:
>
> A. Correct — it's the final check
> B. Incorrect — security should be integrated from requirements through production; late testing is expensive
> C. Only for agile
> D. Only for DevOps

**Correct answer:** B — Security from the start (SSDLC).

---

## Trap 4: Vulnerability Equals Risk

**Trap:** Risk = likelihood x impact. A vulnerability only becomes a risk when a threat can exploit it.

**Example question:**
> An unpatched server in an isolated network with no sensitive data is high risk. This is:
>
> A. Correct — unpatched always = high risk
> B. Incorrect — risk depends on likelihood of exploitation and impact; isolated + no sensitive data = lower risk
> C. Only for external servers
> D. Only for internal servers

**Correct answer:** B — Risk = threat + vulnerability + impact.

---

## Trap 5: Encryption Ensures All Three CIA Properties

**Trap:** Encryption provides confidentiality; integrity and availability need separate controls.

**Example question:**
> Using TLS encryption ensures confidentiality, integrity, and availability. This is:
>
> A. Correct — encryption protects everything
> B. Incorrect — TLS provides confidentiality and integrity; availability requires redundancy, failover, and DDoS protection
> C. Only for banking
> D. Only for healthcare

**Correct answer:** B — Encryption ≠ availability.
