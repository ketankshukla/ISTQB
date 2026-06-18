# 🪤 Chapter 5 — Regulation Acceptance Testing: Exam Traps

## 🪤 Trap 1: Confusing RAT with Security Testing

**Trap:** RAT validates compliance with regulations. Security testing finds vulnerabilities. They overlap but have different objectives.

**Example question:**
> Testing that users can request deletion of their personal data is:
>
> A. Security testing
> B. Regulation Acceptance Testing (GDPR compliance)
> C. Performance testing
> D. Unit testing

**Correct answer:** B — Right to erasure = GDPR compliance = RAT.

---

## 🪤 Trap 2: Thinking Compliance Is Only IT's Responsibility

**Trap:** Compliance requires business, legal, and IT collaboration. Business processes, data handling, and user training are all part of compliance.

**Example question:**
> A development team implements encryption and believes GDPR compliance is complete. The missing element is:
>
> A. Nothing — encryption is sufficient
> B. Business processes (consent management, data retention, user rights) and legal documentation are also required
> C. More encryption
> D. Faster encryption

**Correct answer:** B — GDPR requires business processes (consent, retention, user rights), not just technical controls.

---

## 🪤 Trap 3: Confusing WCAG Levels

**Trap:** WCAG has three conformance levels (A, AA, AAA). Most regulations require AA. Testing for A only may miss requirements.

**Example question:**
> A government contract requires WCAG 2.1 AA compliance. The team tests only Level A criteria. The risk is:
>
> A. No risk — Level A is sufficient
> B. Level AA includes additional criteria not tested; compliance may fail
> C. Level A is harder than AA
> D. WCAG doesn't have levels

**Correct answer:** B — AA includes criteria beyond A. Testing only A means missing AA requirements.

---

## 🪤 Trap 4: Ignoring Process Compliance

**Trap:** RAT includes verifying processes (change management, training, documentation), not just the system.

**Example question:**
> An ISO 27001 audit finds that the system is secure but change management processes are not documented. The finding is:
>
> A. Not relevant — only the system matters
> B. A process compliance gap that can affect certification
> C. Only a recommendation
> D. Automatically resolved

**Correct answer:** B — ISO 27001 requires both technical and process compliance.

---

## 🪤 Trap 5: Thinking Once Certified, Always Compliant

**Trap:** Compliance is ongoing. Systems and regulations change. Regular audits and surveillance are needed.

**Example question:**
> A system passed regulatory acceptance 2 years ago with no changes made since. For the annual audit:
>
> A. No testing is needed because nothing changed
> B. Compliance must be re-verified because regulations may have changed and the system's effectiveness may have degraded
> C. Only a quick review is needed
> D. The old certificate is sufficient

**Correct answer:** B — Compliance must be continuously verified. Regulations change, and systems degrade over time.
