# 🪤 Chapter 4 — Security Test Design and Techniques: Exam Traps

## 🪤 Trap 1: Confusing SAST, DAST, and IAST

**Trap:** SAST analyzes code without running it. DAST tests running apps from outside. IAST instruments running code.

**Example question:**
> A tool analyzes source code for hardcoded passwords without executing the application. This is:
>
> A. DAST
> B. SAST
> C. IAST
> D. Penetration testing

**Correct answer:** B — Analyzing source code without execution = SAST.

---

## 🪤 Trap 2: Thinking Black Box Testing Is Always Best

**Trap:** Each testing type has advantages. White box finds code-level issues; black box simulates real attackers. The best approach often combines them.

**Example question:**
> A team only performs black box penetration testing and misses a hardcoded API key in the source code. The lesson is:
>
> A. Black box testing is always sufficient
> B. Black box cannot find code-level issues; white box or SAST is needed for source code review
> C. The key was not a real vulnerability
> D. Penetration testing is not useful

**Correct answer:** B — Black box = external perspective. Code-level issues require white box/SAST.

---

## 🪤 Trap 3: Confusing Horizontal and Vertical Privilege Escalation

**Trap:** Horizontal = accessing another user's data at same level. Vertical = gaining higher privileges.

**Example question:**
> User A changes a URL parameter and views User B's order history. This is:
>
> A. Vertical privilege escalation
> B. Horizontal privilege escalation
> C. SQL injection
> D. Cross-site scripting

**Correct answer:** B — Same privilege level, different user's data = horizontal privilege escalation.

---

## 🪤 Trap 4: Thinking Input Validation Is Sufficient Alone

**Trap:** Input validation AND output encoding are both needed. Validation at entry point doesn't protect against all injection if output isn't encoded for its context.

**Example question:**
> An application validates all input for SQL injection but displays user comments without HTML encoding. The vulnerability is:
>
> A. There is no vulnerability because input validation prevents SQL injection
> B. XSS is still possible because output is not encoded for the HTML context
> C. The validation is wrong
> D. SQL injection is the only concern

**Correct answer:** B — Input validation for SQL doesn't protect against XSS. Output must be encoded for its context (HTML, JS, CSS, URL).

---

## 🪤 Trap 5: Confusing Fuzzing with Penetration Testing

**Trap:** Fuzzing = automated random input testing. Penetration testing = structured simulated attack. They are different techniques with different purposes.

**Example question:**
> A security team sends millions of random inputs to an API endpoint looking for crashes. This is:
>
> A. Penetration testing
> B. Fuzzing
> C. Social engineering
> D. Risk assessment

**Correct answer:** B — Random input testing to find crashes = fuzzing, not penetration testing.
