# 🪤 Chapter 6 — Non-Functional Testing: Exam Traps

## 🪤 Trap 1: Confusing Load Testing with Stress Testing

**Trap:** Load testing = expected load. Stress testing = beyond capacity to find breaking point.

**Example question:**
> Testing a web application with 5,000 concurrent users (the expected peak) for 2 hours is:
>
> A. Stress testing
> B. Load testing
> C. Spike testing
> D. Soak testing

**Correct answer:** B — Expected peak load for a period of time is load testing.

---

## 🪤 Trap 2: Confusing SAST and DAST

**Trap:** SAST analyzes source code without execution. DAST tests running applications.

**Example question:**
> A tool that scans source code for SQL injection vulnerabilities without executing the application is:
>
> A. DAST
> B. SAST
> C. Penetration testing
> D. Fuzz testing

**Correct answer:** B — Source code analysis without execution is SAST.

---

## 🪤 Trap 3: Thinking Performance Testing Is Only About Speed

**Trap:** Performance testing includes throughput, resource utilization, scalability, and stability under load — not just response time.

**Example question:**
> Which metric is MOST relevant for performance testing?
>
> A. Number of lines of code
> B. Response time under expected user load
> C. Cyclomatic complexity
> D. Number of test cases

**Correct answer:** B — Response time under load is a core performance metric.

---

## 🪤 Trap 4: Confusing Availability with Reliability

**Trap:** Availability = percentage of time the system is operational. Reliability = ability to operate without failure.

**Example question:**
> A system that fails frequently but recovers instantly has:
>
> A. High availability and high reliability
> B. High availability but low reliability
> C. Low availability but high reliability
> D. Low availability and low reliability

**Correct answer:** B — If recovery is instant, availability remains high. But frequent failures mean low reliability.

---

## 🪤 Trap 5: Thinking Non-Functional Testing Can Be Skipped

**Trap:** Non-functional requirements are often vague but critical. Security breaches and performance failures can be catastrophic.

**Example question:**
> A stakeholder says "non-functional testing is less important than functional testing." The technical test analyst should:
>
> A. Agree and focus only on functional tests
> B. Explain that non-functional failures (security, performance) can be equally or more damaging
> C. Skip non-functional testing to save time
> D. Leave non-functional testing to operations team

**Correct answer:** B — Non-functional failures (data breaches, outages) can have severe business impact.
