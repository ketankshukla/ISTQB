# Chapter 4 — Performance Test Execution and Monitoring: Exam Traps

## Trap 1: Forgetting to Warm Up Before Testing

**Trap:** Cold systems (empty caches, cold JVMs) give artificially slow results. Warm-up is essential before collecting metrics.

**Example question:**
> A team starts measuring response times immediately when the test begins. The initial results show 5-second response times, but by minute 5, response times are 1 second. The BEST explanation is:
>
> A. The system is broken
> B. The system needed warm-up time (cache population, JIT compilation) before stabilizing
> C. The test is invalid
> D. The users are getting faster

**Correct answer:** B — Cold systems need warm-up. Metrics should be collected after warm-up is complete.

---

## Trap 2: Monitoring Only the Application Server

**Trap:** Bottlenecks can be in the database, network, load balancer, or even the load generator itself. Monitor all tiers.

**Example question:**
> A team monitors only the application server and sees 40% CPU. Response times are slow. They conclude the application code is efficient and the slowness is normal. They may have missed:
>
> A. Nothing — 40% CPU means no bottleneck
> B. The database, network, or load generator may be the actual bottleneck
> C. The test is too short
> D. The users are too slow

**Correct answer:** B — Low CPU on the app server doesn't mean no bottleneck. Database, disk, network, or the load generator could be saturated.

---

## Trap 3: Confusing a Resource's Percentage with Queue Length

**Trap:** 80% CPU might be okay briefly, but a CPU queue length > 2 per core indicates actual contention.

**Example question:**
> A server shows 75% CPU utilization. The test lead concludes there is no CPU bottleneck. However, the CPU queue length is 12 on a 4-core server. This indicates:
>
> A. No bottleneck — CPU is only 75%
> B. A CPU bottleneck — queue length of 3 per core (> 2) means threads are waiting for CPU
> C. The monitoring tool is broken
> D. The application is I/O bound

**Correct answer:** B — Queue length of 12 on 4 cores = 3 per core. > 2 per core indicates CPU contention.

---

## Trap 4: Ignoring the Load Generator as a Bottleneck

**Trap:** If the load generator is saturated, it cannot send requests fast enough, making the server look better than it is.

**Example question:**
> Response times in test results are acceptable, but the load generator's CPU is at 95%. The most likely issue is:
>
> A. The server is performing well
> B. The load generator is saturated and not sending enough requests; results are invalid
> C. The test script is too efficient
> D. The monitoring interval is too short

**Correct answer:** B — Saturated load generator = invalid results. The server may actually be slower under real load.

---

## Trap 5: Running Tests Without Environment Stability Checks

**Trap:** Unstable environments (other tests running, deployments, known issues) produce invalid results. Always verify environment health first.

**Example question:**
> A performance test shows erratic results with sudden spikes in response time. The MOST likely cause is:
>
> A. The application has a random bug
> B. Another process or test was running on the environment, or the environment was not stable
> C. The users are behaving randomly
> D. This is normal performance variation

**Correct answer:** B — Erratic results often indicate environment instability. Verify no other processes are interfering.
