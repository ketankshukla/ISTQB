# 📂 Case Study 2 — Static and Dynamic Analysis

## ⭐ Context

You are the Technical Test Analyst for TradeNet, a financial trading platform. The platform:
- Processes 10,000 trades per second at peak
- Must have 99.99% availability
- Is subject to financial regulations requiring code auditability
- Uses Java microservices architecture

## 🔍 Task 1: Static Analysis Implementation

**Question:** Design a static analysis strategy for TradeNet.

**Model Answer:**

**Tool Selection:**
- **SonarQube:** General code quality, maintainability, basic security
- **Checkmarx:** Deep security analysis (SAST) for financial compliance
- **JaCoCo:** Code coverage measurement

**Integration Points:**
1. **IDE Integration:** Developers see issues in real-time as they code
2. **Pre-commit Hooks:** Block commits with critical/blocker issues
3. **CI Pipeline:** Full scan on every build; build fails on critical issues
4. **Nightly Scan:** Comprehensive security scan with detailed reporting

**Quality Gates:**
| Gate | Criteria | Action if Failed |
|------|----------|-----------------|
| Commit | No critical/blocker issues | Block commit |
| Build | Coverage >= 80%, no new critical issues | Fail build |
| Release | Coverage >= 85%, zero high-severity security issues | Block release |

**Metrics Dashboard:**
- Cyclomatic complexity trends per microservice
- Security vulnerability counts by severity
- Technical debt estimate
- Coverage trends over time

---

## 🔬 Task 2: Complexity Analysis

**Question:** A critical trading algorithm has cyclomatic complexity of 35. What actions should you take?

**Model Answer:**

**Analysis:**
- Complexity 35 = very high risk (21-50 = high, 35 is approaching very high)
- Financial trading algorithm = critical business function
- High complexity = higher defect probability, harder to test

**Actions:**
1. **Immediate Testing:**
   - Design test cases for all basis paths (minimum 35 test cases for basis path)
   - Achieve 100% branch coverage
   - Perform decision table testing for all business rules
   - Conduct thorough code review

2. **Risk Mitigation:**
   - Add extensive logging for production monitoring
   - Implement circuit breaker pattern for failure isolation
   - Add runtime assertions for critical calculations

3. **Long-term:**
   - Plan refactoring to reduce complexity
   - Break algorithm into smaller, testable functions
   - Target complexity < 15 per function

---

## 🔬 Task 3: Dynamic Analysis for Performance

**Question:** The trading platform experiences latency spikes during market open. How would you investigate?

**Model Answer:**

**Investigation Steps:**

1. **Performance Profiling:**
   - Use JProfiler or async-profiler during market open
   - Identify methods consuming the most CPU time
   - Look for garbage collection pauses
   - Check thread contention on shared resources

2. **Memory Analysis:**
   - Capture heap dumps during spike
   - Look for objects with high allocation rates
   - Check for memory leaks in order processing
   - Analyze garbage collection logs

3. **Database Analysis:**
   - Monitor slow query log
   - Check for lock contention on trade tables
   - Verify index usage on frequently queried columns
   - Measure connection pool utilization

4. **Network Analysis:**
   - Measure latency to external market data feeds
   - Check for packet loss or retransmissions
   - Verify load balancer distribution

**Hypothesis and Testing:**
- **Hypothesis 1:** Garbage collection pauses due to high allocation rate
  - **Test:** Enable GC logging, measure pause times, tune GC algorithm
- **Hypothesis 2:** Database lock contention on trade table
  - **Test:** Monitor lock waits, analyze transaction isolation levels
- **Hypothesis 3:** Thread pool exhaustion
  - **Test:** Monitor thread pool queues, measure task wait times

---

## ⭐ Task 4: Memory Leak Investigation

**Question:** After 48 hours of operation, one microservice's memory usage grows from 200MB to 1.2GB. Investigate.

**Model Answer:**

**Investigation:**

1. **Confirm it's a leak:**
   - Memory should plateau under steady load
   - Linear growth without decrease = likely leak

2. **Heap dump analysis:**
   - Take heap dumps at 0h, 24h, and 48h
   - Compare object histograms
   - Identify class types growing over time

3. **Common causes in trading systems:**
   - **Event listeners not removed:** Market data listeners accumulate
   - **Cache without eviction:** Trade cache grows indefinitely
   - **Connection pools not released:** Database connections leaked
   - **Static collections:** Order history stored in static list

4. **Remediation:**
   - Implement weak references for listeners
   - Add cache size limits and TTL (time-to-live)
   - Ensure connections are closed in finally blocks
   - Use bounded queues for history storage

---

## ⭐ Task 5: Fault Injection for Resilience

**Question:** Design fault injection tests for the trading platform.

**Model Answer:**

| Fault | Injection Method | Expected Behavior |
|-------|-----------------|-------------------|
| Database primary failure | Kill primary DB container | Failover to replica within 5 seconds |
| Network latency to market feed | Add 500ms latency | System continues with cached data; alert generated |
| Memory exhaustion | Limit container memory to 512MB | Graceful degradation; critical trades still processed |
| Service dependency failure | Stop price calculation service | Circuit breaker opens; fallback to last known prices |
| High CPU load | Spawn CPU-intensive processes | Auto-scaling triggers; no trade loss |

**Chaos Engineering Schedule:**
- Weekly: Random service restart during low-volume period
- Monthly: Database failover during business hours
- Quarterly: Full datacenter failover simulation
