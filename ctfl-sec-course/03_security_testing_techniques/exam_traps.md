# Chapter 3 — Security Testing Techniques: Exam Traps

## Trap 1: SAST and DAST are Interchangeable

**Trap:** SAST = static (source code); DAST = dynamic (running app). They find different issues.

**Example question:**
> SAST and DAST find exactly the same vulnerabilities. This is:
>
> A. Correct — both find security issues
> B. Incorrect — SAST finds code-level issues (hardcoded passwords, insecure functions) while DAST finds runtime issues (injection, misconfiguration); they are complementary
> C. Only for web apps
> D. Only for mobile apps

**Correct answer:** B — They are complementary.

---

## Trap 2: Penetration Testing is Only Black Box

**Trap:** Pen testing can be black, grey, or white box depending on objectives.

**Example question:**
> Penetration testing always simulates an external attacker with no knowledge of the system. This is:
>
> A. Correct — that's the definition
> B. Incorrect — penetration testing can be black box (no knowledge), grey box (limited), or white box (full knowledge) depending on the assessment goals
> C. Only for government
> D. Only for finance

**Correct answer:** B — Three types exist.

---

## Trap 3: Automated Tools Replace Manual Review

**Trap:** Automated tools catch many issues but miss business logic and complex vulnerabilities.

**Example question:**
> Automated security scanners can replace manual code review. This is:
>
> A. Correct — scanners are more thorough
> B. Incorrect — automated tools miss business logic flaws and complex vulnerabilities that require human analysis
> C. Only for small codebases
> D. Only for large codebases

**Correct answer:** B — Manual review still needed.

---

## Trap 4: Fuzz Testing is Only Random

**Trap:** Fuzzing includes random, mutation, and generation-based approaches.

**Example question:**
> Fuzz testing only sends completely random data to applications. This is:
>
> A. Correct — randomness is the point
> B. Incorrect — fuzzing includes random, mutation (modifying valid inputs), and generation (creating from specs) approaches
> C. Only for network protocols
> D. Only for file formats

**Correct answer:** B — Multiple fuzzing types.

---

## Trap 5: Security Testing Only Happens in Test Environments

**Trap:** Some techniques (SAST) happen in dev; others (DAST) in test; monitoring happens in production.

**Example question:**
> Security testing should only be performed in dedicated test environments. This is:
>
> A. Correct — never test in production
> B. Incorrect — SAST happens during development, DAST in test, and continuous monitoring in production; each has its place
> C. Only for external apps
> D. Only for internal apps

**Correct answer:** B — Security testing spans environments.
