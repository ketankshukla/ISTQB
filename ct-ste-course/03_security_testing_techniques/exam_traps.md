# Chapter 3 — Security Testing Techniques: Exam Traps

## Trap 1: SAST Finds All Security Issues

**Trap:** SAST only finds code-level issues. Runtime, configuration, and business logic issues need DAST or manual testing.

**Example question:**
> A team runs SAST and has zero findings. They conclude the application is secure. The flaw is:
>
> A. They should celebrate
> B. SAST doesn't find runtime, configuration, or logical vulnerabilities
> C. Only that they need better SAST rules
> D. Only that they need to run it again

**Correct answer:** B — SAST is one layer; combine with DAST, IAST, and manual testing.

---

## Trap 2: DAST Replaces Manual Penetration Testing

**Trap:** DAST finds common vulnerabilities but misses business logic flaws and complex attack chains.

**Example question:**
> A team relies entirely on DAST for security. They are likely missing:
>
> A. Nothing — DAST is comprehensive
> B. Business logic flaws, multi-step attack chains, and complex authorization issues
> C. Only SQL injection
> D. Only XSS

**Correct answer:** B — DAST + manual testing = better coverage.

---

## Trap 3: Fuzzing is Only for File Parsers

**Trap:** Fuzzing applies to any input surface: APIs, network protocols, CLIs, not just file formats.

**Example question:**
> Fuzzing is only useful for testing file format parsers like PDF readers. This is:
>
> A. Correct
> B. Incorrect — fuzzing applies to APIs, protocols, CLIs, and any input surface
> C. Only true for mutation-based fuzzing
> D. Only false for web applications

**Correct answer:** B — Fuzz any input surface.

---

## Trap 4: Output Encoding is Optional if Input Validation Exists

**Trap:** Defense in depth requires both input validation AND output encoding.

**Example question:**
> A team validates all inputs but doesn't encode outputs. The risk is:
>
> A. No risk — input validation is sufficient
> B. Data from other sources (databases, APIs) may still cause XSS if not encoded on output
> C. Only SQL injection
> D. Only CSRF

**Correct answer:** B — Output encoding is essential defense in depth.

---

## Trap 5: Session Tokens Must Always Be Complex Random Strings

**Trap:** Tokens must be unpredictable and properly managed, not just complex.

**Example question:**
> A team uses 128-character random session tokens but never invalidates them on logout. The issue is:
>
> A. Tokens aren't complex enough
> B. Session management is broken — tokens must be invalidated on logout and expire after inactivity
> C. Only that they need shorter tokens
> D. Only that they need encryption

**Correct answer:** B — Token management matters as much as randomness.
