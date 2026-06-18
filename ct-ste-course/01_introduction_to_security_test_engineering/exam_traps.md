# 🪤 Chapter 1 — Introduction to Security Test Engineering: Exam Traps

## 🪤 Trap 1: Confusing Security Testing with Penetration Testing

**Trap:** Penetration testing is one type of security testing. Security testing also includes SAST, DAST, code review, and compliance validation.

**Example question:**
> "Security testing" and "penetration testing" are:
>
> A. The same thing
> B. Penetration testing is one subset of security testing
> C. Only for web apps
> D. Only for networks

**Correct answer:** B — Penetration testing ⊂ Security testing.

---

## 🪤 Trap 2: Thinking Security is Only About Confidentiality

**Trap:** The CIA triad has three parts. Ignoring integrity or availability creates blind spots.

**Example question:**
> A system encrypts all data and has strong access controls but allows anyone to modify audit logs. The missing element is:
>
> A. Confidentiality
> B. Integrity — audit logs must be tamper-proof
> C. Only authentication
> D. Only authorization

**Correct answer:** B — Integrity ensures data is not improperly altered.

---

## 🪤 Trap 3: Believing Security Testing Happens at the End

**Trap:** Shift-left security testing finds issues earlier when they're cheaper to fix.

**Example question:**
> A team performs security testing only before release. The risk is:
>
> A. None — end testing is thorough
> B. Late discovery of issues when they are expensive to fix
> C. Only slower releases
> D. Only more documentation

**Correct answer:** B — Security testing should start early and continue throughout.

---

## 🪤 Trap 4: Underestimating Insider Threats

**Trap:** Insiders have legitimate access and knowledge. They are often overlooked in threat modeling.

**Example question:**
> A company focuses all security testing on external hackers. They are likely neglecting:
>
> A. Nothing — external threats are the only real threats
> B. Insider threats from employees, contractors, and partners with legitimate access
> C. Only script kiddies
> D. Only nation-states

**Correct answer:** B — Insiders are a significant threat vector.

---

## 🪤 Trap 5: Treating OWASP Top 10 as a Checklist

**Trap:** The OWASP Top 10 is a starting point, not exhaustive. Other vulnerabilities exist.

**Example question:**
> A team verifies their application against the OWASP Top 10 and declares it secure. The flaw is:
>
> A. No flaw — the Top 10 covers everything
> B. The Top 10 is a starting point; other vulnerabilities and business logic flaws may exist
> C. Only that they need OWASP Top 20
> D. Only that they missed the latest version

**Correct answer:** B — OWASP Top 10 ≠ complete security.
