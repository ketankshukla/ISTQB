# Chapter 4 — Performance Test Execution and Monitoring: Lessons

---

## 4.1 Test Execution Phases

### Initialization

**Purpose:** Prepare the environment before load is applied.

**Activities:**
- Start all required services and systems
- Verify environment health (all systems green)
- Pre-populate caches (warm-up)
- Reset test data to known state
- Verify monitoring tools are collecting data

**Why Warm-Up Matters:**
- Cold JVMs need time to optimize (JIT compilation)
- Empty caches cause artificially high initial response times
- Database connection pools need to establish connections
- Application caches need to populate

**Example Warm-Up:**
- Send 100 requests at low load
- Wait for CPU/memory to stabilize
- Verify response times are consistent before starting the real test

### Ramp-Up

**Purpose:** Gradually add virtual users to avoid overwhelming the system suddenly.

**Approaches:**
- **Linear ramp-up:** Add users at a constant rate (e.g., 10 users/minute)
- **Stepped ramp-up:** Add users in groups (e.g., +100 every 5 minutes)
- **Exponential ramp-up:** Accelerate user addition

**Why Ramp-Up Matters:**
- Sudden full load can cause connection pool exhaustion
- Gradual ramp-up reveals when performance degrades
- Some systems need time to scale (auto-scaling, cache warming)

**Example:**
```
Minute 0-10:   0 → 1,000 users
Minute 10-20:  1,000 → 2,000 users
Minute 20-30:  2,000 → 5,000 users (target)
```

### Steady State

**Purpose:** Maintain target load for a sustained period to collect meaningful metrics.

**Characteristics:**
- Load remains constant (or follows a defined pattern)
- Duration is long enough to gather statistically significant data
- All systems should be operating at their expected capacity

**Duration Guidelines:**
- Load test: 15-60 minutes
- Endurance test: Hours to days
- Stress test: Until failure or until degradation threshold is met

**What to Observe:**
- Response time stability (should plateau, not continuously increase)
- Resource utilization (should be stable, not growing)
- Error rate (should be low and stable)

### Ramp-Down

**Purpose:** Gradually remove load to observe system behavior as demand decreases.

**Observations:**
- Does response time improve immediately?
- Are resources released properly?
- Are there lingering effects from the load?

**Example:**
```
Minute 60-65: 5,000 → 3,000 users
Minute 65-70: 3,000 → 1,000 users
Minute 70-75: 1,000 → 0 users
```

### Teardown

**Purpose:** Clean up after the test.

**Activities:**
- Collect and save all test results
- Stop monitoring tools
- Archive logs
- Reset environment for next test
- Document any environment issues encountered

---

## 4.2 What to Monitor During Execution

### Server-Level Monitoring

**CPU:**
- **% Processor Time:** Overall CPU usage. Sustained > 80% = potential bottleneck.
- **% User Time vs. % System Time:** High system time = OS overhead, context switching
- **Queue Length:** Number of threads waiting for CPU. > 2 per core = CPU bottleneck.

**Memory:**
- **Available Memory:** Free RAM. Low values may cause swapping.
- **Used Memory:** Should be stable during steady state. Growing = possible leak.
- **Page Faults/sec:** High rate indicates memory pressure.
- **Swap Usage:** Any swap usage = memory pressure (very bad for performance).

**Disk I/O:**
- **% Disk Time:** Time disk is busy. Sustained > 80% = disk bottleneck.
- **Disk Queue Length:** Number of pending I/O operations. > 2 = disk bottleneck.
- **Read/Write throughput:** MB/s being read/written.
- **IOPS:** Input/output operations per second.

**Network:**
- **% Network Utilization:** Bandwidth usage. > 70% = potential bottleneck.
- **Packets/sec:** Network packet rate.
- **Packet loss:** Any loss = network issue.
- **Latency:** Round-trip time between nodes.

### Application-Level Monitoring

**Database:**
- **Active connections:** Should be below pool maximum
- **Query execution time:** Slow queries = optimization needed
- **Lock waits:** High = concurrency issues
- **Cache hit ratio:** Low = insufficient cache or poor queries
- **Transactions/sec:** Database throughput

**Thread Pools:**
- **Active threads:** Should be below maximum
- **Queue length:** Pending requests waiting for threads
- **Rejected requests:** Pool exhausted = incoming requests rejected

**Connection Pools:**
- **Used connections:** How many are in use
- **Available connections:** How many are idle
- **Wait time:** Time requests wait for a connection

**JVM (Java Applications):**
- **Heap usage:** Should be stable with regular GC
- **GC frequency and duration:** Frequent or long GC = memory or tuning issue
- **Thread count:** Unexpected growth = thread leak

### Client/Load Generator Monitoring

**Important:** Monitor the load generator too!

**Indicators the Load Generator Is the Bottleneck:**
- CPU on load generator > 80%
- Network on load generator saturated
- Response times increase but server metrics are healthy

**Solution:**
- Add more load generator machines (distributed testing)
- Reduce logging on the load generator
- Use more efficient scripting

---

## 4.3 Bottleneck Detection

### What Is a Bottleneck?

A bottleneck is a resource or component that limits overall system performance because it cannot process load as fast as other components.

**Analogy:** A highway with one lane closed. Traffic backs up at the bottleneck regardless of how many lanes are open before and after.

### Common Bottlenecks and Indicators

**CPU Bottleneck:**
- CPU > 80% sustained
- CPU queue length > 2 per core
- Response time increases linearly with load
- **Fix:** Optimize code, add CPU, parallelize processing

**Memory Bottleneck:**
- Memory growing unbounded (in endurance tests)
- High page fault rate
- Swap usage increasing
- **Fix:** Fix memory leaks, add RAM, optimize data structures

**Disk I/O Bottleneck:**
- Disk queue length > 2
- Disk time > 80%
- Database queries slow despite low CPU
- **Fix:** Use SSD, add caching, optimize queries, partition data

**Network Bottleneck:**
- Network utilization > 70%
- Packet loss
- High latency between tiers
- **Fix:** Increase bandwidth, compress data, use CDN, optimize payload sizes

**Database Bottleneck:**
- High query execution times
- Connection pool exhaustion
- Lock contention
- High disk I/O on database server
- **Fix:** Add indexes, optimize queries, increase connection pool, shard database

**Application Code Bottleneck:**
- High CPU but low throughput
- Specific methods consuming excessive time
- Thread contention
- **Fix:** Profile code, optimize algorithms, reduce synchronization

### Bottleneck Analysis Process

**Step 1: Identify the Symptom**
- Response times increasing?
- Errors appearing?
- Specific transactions slow?

**Step 2: Check Resource Metrics**
- Which resource is saturated? (CPU, memory, disk, network)
- Which server is saturated? (app, database, web)

**Step 3: Drill Down**
- If CPU: Which process? Which thread? Which method?
- If disk: Which files? Which queries?
- If memory: Which objects are growing?

**Step 4: Correlate**
- Does the bottleneck correspond to a specific transaction type?
- Does it appear at a specific load level?

**Step 5: Validate**
- Run an isolation test on the suspected component
- Confirm the bottleneck by relieving it (temporarily add resources)

---

## 4.4 Test Execution Constraints

### Time Windows

**Production-Like Environment:**
- Often shared with other teams
- May only be available during specific windows
- Weekend or overnight slots common

**Planning:**
- Schedule tests during allocated windows
- Have rollback plan if environment is needed urgently
- Prioritize tests in case time is cut short

### Data Reset Needs

**Why Reset:**
- Database grows during tests (orders, logs)
- User accounts may be locked or depleted
- Cached data affects subsequent tests

**Approaches:**
- Database snapshot/restore before each test
- Transaction rollback (if test transactions are isolated)
- Data cleanup scripts after each test

### External Dependencies

**Challenges:**
- External APIs have rate limits
- Payment gateways may block test transactions
- Third-party services may have their own performance issues

**Mitigations:**
- Mock external services when possible
- Coordinate with external teams for test windows
- Use test/sandbox environments for external services

### Environment Stability

**Prerequisites:**
- Environment must be stable before starting
- No deployments or configuration changes during test
- No other tests running simultaneously
- Monitoring tools operational

**Health Check:**
- Verify all services are running
- Run a small baseline test to confirm environment is healthy
- Check for known issues in the environment

---

## Worked Examples

### Worked Example 1: Monitoring During a Load Test

**Scenario:** Running a load test of 5,000 concurrent users on an e-commerce site.

**Monitoring Dashboard:**

| Metric | Minute 10 | Minute 30 | Minute 60 | Assessment |
|--------|-----------|-----------|-----------|------------|
| Concurrent Users | 5,000 | 5,000 | 5,000 | Target met |
| RPS | 450 | 440 | 420 | Declining |
| Avg Response Time | 1.2s | 1.8s | 2.5s | Degrading |
| P95 Response Time | 2.0s | 3.5s | 5.0s | Degrading |
| Error Rate | 0.1% | 0.3% | 1.2% | Increasing |
| App Server CPU | 55% | 65% | 75% | Rising |
| App Server Memory | 6GB | 6GB | 6GB | Stable |
| Database CPU | 40% | 60% | 85% | Bottleneck! |
| DB Connection Pool | 80/100 | 95/100 | 100/100 | Saturated |
| Disk Queue Length | 1 | 3 | 8 | Bottleneck! |

**Analysis:**
1. Response time degrading over time at constant load
2. Database CPU climbing to 85%
3. Connection pool saturated at 100/100
4. Disk queue length increasing dramatically

**Conclusion:** Database is the bottleneck. Likely causes:
- Missing index on a frequently queried table
- Too few database connections configured
- Slow queries causing disk thrashing

### Worked Example 2: Load Generator Bottleneck

**Scenario:** A single machine is generating load for a test.

**Observations:**
- Target: 10,000 concurrent users
- Server metrics: CPU 30%, Memory 40%, Response time 500ms
- BUT: Response time reported by load tool = 5 seconds

**Load Generator Check:**
- Load generator CPU: 95%
- Load generator network: 80%
- Load generator memory: 90%

**Conclusion:** The load generator is the bottleneck, not the server!

**Fix:**
- Add 4 more load generator machines
- Distribute 2,500 users per machine
- Re-run test
- New result: Server response time = 500ms (correct)

### Worked Example 3: Warm-Up Impact

**Scenario:** Two identical tests, one with warm-up, one without.

**Without Warm-Up:**
```
Minute 1:  Response time = 8 seconds (cold JVM, empty cache)
Minute 2:  Response time = 5 seconds (JIT compiling)
Minute 3:  Response time = 3 seconds (cache populating)
Minute 4:  Response time = 1.5 seconds (stabilized)
```

**With Warm-Up (100 requests before measurement):**
```
Minute 1:  Response time = 1.5 seconds (already warmed up)
Minute 2:  Response time = 1.5 seconds (stable)
Minute 3:  Response time = 1.5 seconds (stable)
Minute 4:  Response time = 1.5 seconds (stable)
```

**Lesson:** Without warm-up, initial results are misleading. Always warm up before collecting metrics.
