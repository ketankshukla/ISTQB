# 🪤 Chapter 6 — Performance Testing Tools and Automation: Exam Traps

## 🪤 Trap 1: Thinking Recorded Scripts Are Ready to Run

**Trap:** Recorded scripts require cleanup, parameterization, and correlation before they can be used for load testing.

**Example question:**
> A tester records a user session and immediately runs it with 1,000 virtual users. Most requests fail. The MOST likely reason is:
>
> A. The tool is broken
> B. Recorded scripts contain hard-coded dynamic values (session IDs, tokens) that need correlation, and may include unnecessary static resources
> C. The server is offline
> D. Recording doesn't work for web applications

**Correct answer:** B — Recorded scripts always need correlation (for dynamic values) and cleanup (removing unnecessary requests).

---

## 🪤 Trap 2: Confusing Commercial and Open-Source Tool Selection

**Trap:** The "best" tool depends on requirements, not on whether it's commercial or open-source.

**Example question:**
> A team insists on using a commercial tool because "open-source tools are not reliable." This belief is:
>
> A. Correct — commercial tools are always better
> B. Incorrect — many open-source tools (JMeter, Gatling, k6) are widely used in production and may be more suitable depending on requirements
> C. Required by ISTQB standards
> D. Only true for small projects

**Correct answer:** B — Tool selection should be based on fit for purpose, not commercial vs. open-source prejudice.

---

## 🪤 Trap 3: Thinking Cloud Testing Is Always Cheaper

**Trap:** Cloud testing has per-use costs. For frequent testing, on-premises may be more cost-effective. For occasional large tests, cloud is often cheaper.

**Example question:**
> A team runs performance tests daily (100 tests/year) and chooses cloud testing at $200/test. After a year, they spent $20,000. An on-premises solution would have cost $15,000 upfront. The lesson is:
>
> A. Cloud is always cheaper
> B. For very frequent testing, on-premises may be more cost-effective despite higher upfront cost
> C. On-premises is always cheaper
> D. Cost doesn't matter for performance testing

**Correct answer:** B — Cloud pay-per-use adds up for frequent tests. On-premises may be cheaper for high-frequency testing.

---

## 🪤 Trap 4: Running Performance Tests Without a Performance Gate in CI/CD

**Trap:** Without automated performance gates, performance regressions slip into production unnoticed.

**Example question:**
> A team runs performance tests manually once per month. They frequently discover performance regressions in production. The BEST improvement is:
>
> A. Run tests more frequently manually
> B. Integrate automated performance tests with gates into CI/CD to catch regressions before deployment
> C. Don't run performance tests at all
> D. Only test after production deployment

**Correct answer:** B — Automated gates in CI/CD catch regressions before they reach production.

---

## 🪤 Trap 5: Forgetting to Parameterize Test Data

**Trap:** All virtual users using the same data creates unrealistic cache behavior and database conflicts.

**Example question:**
> A performance test script logs in with username "testuser" for all 1,000 virtual users. The problem is:
>
> A. No problem — this is efficient
> B. Unrealistic — all users hit the same cached data; does not represent real load distribution and may cause database locking on the same account
> C. It makes the script run faster
> D. It is required by all tools

**Correct answer:** B — Same data for all users = unrealistic. Parameterization ensures each user has unique data.
