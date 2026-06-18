# 🪤 Chapter 2 — Security Testing Concepts and Principles: Exam Traps

## 🪤 Trap 1: Confusing Fail Secure and Fail Safe

**Trap:** Fail secure = deny access when security fails. Fail safe = allow access for physical safety. Context determines which is appropriate.

**Example question:**
> A bank vault door should default to locked if power fails. This is:
>
> A. Fail safe
> B. Fail secure
> C. Neither
> D. Both

**Correct answer:** B — Vault door locks when power fails = fail secure (security takes priority).

---

## 🪤 Trap 2: Thinking One Strong Control Is Sufficient

**Trap:** Defense in depth means multiple layers. A single strong control can still be bypassed.

**Example question:**
> An application uses a strong WAF and therefore removes input validation from application code. This violates:
>
> A. Least privilege
> B. Defense in depth
> C. Fail secure
> D. Open design

**Correct answer:** B — Relying on a single control violates defense in depth. WAF can be bypassed; application-level validation is still needed.

---

## 🪤 Trap 3: Confusing Preventive and Detective Controls

**Trap:** Preventive controls block attacks. Detective controls identify that attacks occurred. They serve different purposes.

**Example question:**
> An intrusion detection system (IDS) that alerts when an attack is detected is a:
>
> A. Preventive control
> B. Detective control
> C. Corrective control
> D. Compensating control

**Correct answer:** B — IDS alerts = detective (identifies attacks). It doesn't prevent them.

---

## 🪤 Trap 4: Confusing Security Requirements with Functional Requirements

**Trap:** Security requirements specify HOW to protect; functional requirements specify WHAT the system does.

**Example question:**
> "The system shall encrypt all passwords using bcrypt" is:
>
> A. A functional requirement
> B. A security requirement
> C. A usability requirement
> D. A performance requirement

**Correct answer:** B — Encryption of passwords = security requirement (HOW data is protected, not WHAT the system does).

---

## 🪤 Trap 5: Thinking Security Testing Happens Only at the End

**Trap:** Shift-left security means integrating security throughout the SDLC, not just before release.

**Example question:**
> A team performs security testing only one week before production release. The PRIMARY risk is:
>
> A. The tests will be too thorough
> B. Vulnerabilities discovered late are expensive to fix and may delay release
> C. Testing is more accurate at the end
> D. Users prefer last-minute security

**Correct answer:** B — Late discovery = expensive fixes, potential delays. Security should be integrated throughout the SDLC.
