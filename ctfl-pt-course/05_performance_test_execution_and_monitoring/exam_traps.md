# 🪤 Chapter 5 — Performance Test Execution and Monitoring: Exam Traps

## 🪤 Trap 1: Monitoring Only the Application Server

**Trap:** Must monitor all tiers: web, app, database, network, and client.

**Example question:**
> Monitoring the application server is sufficient for performance analysis. This is:
>
> A. Correct — the app server is the main component
> B. Incorrect — bottlenecks can occur in the database, network, or client; all tiers must be monitored
> C. Only for simple apps
> D. Only for complex apps

**Correct answer:** B — Monitor all tiers.

---

## 🪤 Trap 2: Anomalies Should Be Ignored

**Trap:** Anomalies often indicate real issues that need investigation.

**Example question:**
> A sudden spike in response time during a steady-state test is probably just noise and can be ignored. This is:
>
> A. Correct — steady state has natural variation
> B. Incorrect — sudden spikes often indicate real issues (GC pause, lock contention, external dependency slowdown) that should be investigated
> C. Only for short tests
> D. Only for long tests

**Correct answer:** B — Investigate anomalies.

---

## 🪤 Trap 3: Test Environment Doesn't Need Documentation

**Trap:** Undocumented environments lead to irreproducible results.

**Example question:**
> Performance test environments don't need detailed documentation since tests are about the application. This is:
>
> A. Correct — environment is secondary
> B. Incorrect — environment configuration significantly affects results; documentation ensures reproducibility
> C. Only for cloud
> D. Only for on-premise

**Correct answer:** B — Document everything.

---

## 🪤 Trap 4: One Monitoring Tool is Enough

**Trap:** Different tools capture different metrics; APM + system monitor + database monitor are often needed.

**Example question:**
> A single monitoring tool captures all necessary performance metrics. This is:
>
> A. Correct — modern tools are comprehensive
> B. Incorrect — different tools capture different layers (APM for application, system monitors for OS, database tools for queries)
> C. Only for small systems
> D. Only for large systems

**Correct answer:** B — Multiple tools for different layers.

---

## 🪤 Trap 5: Tests Can Run Without Smoke Test

**Trap:** Smoke tests validate scripts and environment before full test execution.

**Example question:**
> A full performance test can start immediately without a smoke test. This is:
>
> A. Correct — smoke tests waste time
> B. Incorrect — smoke tests validate scripts, environment, and basic functionality before investing time in full tests
> C. Only for experienced teams
> D. Only for new teams

**Correct answer:** B — Always smoke test first.
