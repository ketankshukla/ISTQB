# Chapter 1 — Introduction to Security Testing: Exam Traps

## Trap 1: Confusing Confidentiality and Integrity

**Trap:** Confidentiality = keeping data secret. Integrity = keeping data accurate and unmodified. They are distinct properties.

**Example question:**
> A system prevents unauthorized users from reading data but allows them to modify it. This is a failure of:
>
> A. Confidentiality
> B. Integrity
> C. Availability
> D. Authentication

**Correct answer:** B — Preventing unauthorized reading = confidentiality maintained. Allowing unauthorized modification = integrity failed.

---

## Trap 2: Thinking Functional Testing Covers Security

**Trap:** Functional testing verifies that features work correctly; it does not verify they resist attacks.

**Example question:**
> A login feature passes all functional tests (valid login works, invalid login fails). Can we conclude it is secure?
>
> A. Yes — functional tests prove security
> B. No — functional tests do not verify resistance to attacks like SQL injection, brute force, or session hijacking
> C. Only if performance tests also pass
> D. Yes, if usability tests pass

**Correct answer:** B — Functional tests do not test attack resistance. Security testing requires adversarial thinking.

---

## Trap 3: Confusing Authentication and Authorization

**Trap:** Authentication verifies identity. Authorization determines what the identified user can do.

**Example question:**
> A user successfully logs in with valid credentials but cannot access a resource they should have permission for. This is a problem with:
>
> A. Authentication
> B. Authorization
> C. Availability
> D. Confidentiality

**Correct answer:** B — Login succeeded = authentication worked. Missing access = authorization issue.

---

## Trap 4: Thinking Security Is Only About Confidentiality

**Trap:** Security encompasses confidentiality, integrity, AND availability. Focusing only on one misses the bigger picture.

**Example question:**
> A backup system stores encrypted copies of all data but takes 48 hours to restore. The PRIMARY security concern is:
>
> A. Confidentiality — backups are encrypted
> B. Integrity — data is copied correctly
> C. Availability — 48-hour recovery time may violate business continuity requirements
> D. Non-repudiation

**Correct answer:** C — Encrypted backups = confidentiality. 48-hour recovery = availability concern.

---

## Trap 5: Confusing Threats and Vulnerabilities

**Trap:** A threat is a potential attacker or event. A vulnerability is a weakness that can be exploited. They are not the same.

**Example question:**
> An unpatched web server is vulnerable to a known exploit. The unpatched server is the:
>
> A. Threat
> B. Vulnerability
> C. Risk
> D. Exploit

**Correct answer:** B — The unpatched server is the weakness = vulnerability. The attacker using the exploit is the threat.
