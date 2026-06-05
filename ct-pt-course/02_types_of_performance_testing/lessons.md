# Chapter 2 — Types of Performance Testing: Lessons

---

## 2.1 Load Testing

### Definition

**Load Testing** evaluates system behavior under expected normal and peak load conditions. The goal is to validate that the system meets performance requirements under anticipated workload.

### Objectives

- Validate response time under normal load
- Verify throughput targets are met
- Identify bottlenecks before production
- Validate system capacity for expected users
- Establish baseline for regression testing

### Test Conditions

- **Normal load:** Expected average daily usage
- **Peak load:** Maximum expected usage (e.g., Black Friday, tax deadline)
- **Duration:** Typically short to medium (minutes to hours)
- **Ramp-up:** Gradual increase to target load

### Example Scenarios

**Scenario 1 — E-Commerce Normal Load:**
- 1,000 concurrent users browsing
- 200 users actively adding to cart
- 50 users checking out
- Expected response time: < 2 seconds for page loads

**Scenario 2 — E-Commerce Peak Load:**
- 10,000 concurrent users during sale
- 2,000 users adding to cart
- 500 users checking out simultaneously
- Expected response time: < 3 seconds

### Key Metrics

- Response time at different load levels
- Throughput (orders per minute)
- Error rate
- Resource utilization at peak

---

## 2.2 Stress Testing

### Definition

**Stress Testing** evaluates system behavior beyond normal operational capacity, often to the point of failure. The goal is to find the breaking point and observe recovery.

### Objectives

- Determine the maximum capacity before failure
- Identify how the system fails (graceful degradation vs. crash)
- Test recovery mechanisms after overload
- Find resource limits (memory, connections, threads)
- Validate error handling under extreme load

### Test Conditions

- **Load:** Beyond expected maximum (150%, 200%, 300% of peak)
- **Duration:** Until failure or significant degradation
- **Ramp-up:** Rapid increase beyond normal capacity

### Types of Stress Testing

**Gradual Stress:**
- Slowly increase load beyond normal until failure
- Identifies the exact breaking point
- Example: Increase concurrent users from 10,000 to 50,000 in increments

**Spike Stress (Sudden Overload):**
- Abruptly apply extreme load
- Tests immediate reaction to overload
- Example: Suddenly send 100,000 requests in 1 minute

### Example Scenario

**Banking Application:**
- Normal peak: 5,000 concurrent users
- Stress test: 15,000 concurrent users
- Observe:
  - At 8,000: Response time increases to 5 seconds
  - At 12,000: Database connection pool exhausted
  - At 15,000: Application server crashes
- **Recovery test:** After crash, restart and verify data integrity

### Key Metrics

- Breaking point (users/requests at failure)
- Behavior at failure (error messages, data loss, recovery time)
- Resource exhaustion points

---

## 2.3 Endurance Testing (Soak Testing)

### Definition

**Endurance Testing** (also called Soak Testing) evaluates system behavior under a typical workload sustained over an extended period. The goal is to identify issues that develop over time.

### Objectives

- Detect memory leaks
- Identify resource exhaustion over time
- Find connection pool or thread pool depletion
- Discover log file growth causing disk issues
- Validate stability for systems that run continuously

### Test Conditions

- **Load:** Normal expected load (not peak, not minimal)
- **Duration:** Extended — hours, days, or even weeks
- **Monitoring:** Continuous resource monitoring

### Issues Typically Found

**Memory Leaks:**
- Memory usage grows steadily over time
- Eventually causes out-of-memory errors or slowdowns
- Common cause: Objects not being garbage collected

**Resource Exhaustion:**
- File handles not being closed
- Database connections not being released
- Thread pools filling up

**Log File Growth:**
- Uncontrolled logging fills disk
- Disk full causes system failures

**Cache Issues:**
- Cache grows without bounds
- Performance degrades as cache lookup slows

### Example Scenario

**SaaS Application:**
- 500 concurrent users for 72 hours
- Monitor memory every hour
- Hour 1: Memory = 4GB
- Hour 12: Memory = 6GB
- Hour 24: Memory = 8GB
- Hour 48: Memory = 12GB
- Hour 72: Memory = 16GB, system crashes

**Analysis:** Memory growing at ~160MB/hour = memory leak. Developers investigate and find unclosed session objects.

### Key Metrics

- Memory usage trend over time
- Resource utilization trends
- Response time degradation over time
- Error rate increase over time

---

## 2.4 Spike Testing

### Definition

**Spike Testing** evaluates system behavior when subjected to sudden, extreme increases in load. The goal is to determine how the system handles unexpected surges.

### Objectives

- Test reaction to sudden traffic surges
- Validate auto-scaling mechanisms
- Test queue handling and request buffering
- Identify circuit breakers and throttling behavior
- Ensure the system doesn't crash on sudden demand

### Test Conditions

- **Load pattern:** Sudden jump from low/normal to very high
- **Duration:** Short spike, then return to normal
- **Frequency:** May repeat to test recovery between spikes

### Example Scenarios

**News Website (Breaking News):**
- Normal: 1,000 users/minute
- Spike: Sudden jump to 50,000 users/minute when breaking news hits
- Observe: Does the CDN handle it? Does the origin server crash?

**Ticket Sale Opening:**
- Normal: 100 users/minute
- Spike: 10,000 users/minute when tickets go on sale
- Observe: Does the queueing system work? Are users dropped?

**API with Viral Content:**
- Normal: 500 API calls/minute
- Spike: 20,000 API calls/minute when content goes viral
- Observe: Does rate limiting kick in? Is the database overwhelmed?

### Key Metrics

- Response time during spike
- Error rate during spike
- Recovery time after spike
- Number of dropped requests

---

## 2.5 Volume Testing

### Definition

**Volume Testing** evaluates system performance with large volumes of data. The goal is to test how the system behaves when databases and files are very large.

### Objectives

- Test database performance with millions of records
- Evaluate query execution time with large datasets
- Test file system performance with large files
- Identify indexing and partitioning needs
- Validate storage and retrieval of large objects

### Test Conditions

- **Data volume:** Production-scale or larger datasets
- **Transactions:** Normal transaction mix but on large data
- **Duration:** Long enough to process significant data volumes

### Example Scenarios

**E-Commerce Search:**
- Database: 10 million products
- Test: Search for products with various filters
- Measure: Query execution time, index effectiveness

**Reporting System:**
- Database: 5 years of transaction history (100 million rows)
- Test: Generate monthly summary report
- Measure: Report generation time, temporary space usage

**File Upload Service:**
- Test: Upload 10,000 files of varying sizes
- Measure: Upload speed, storage efficiency, retrieval speed

### Key Metrics

- Query execution time vs. data size
- Index efficiency (full table scans vs. index scans)
- Storage growth rate
- Backup and restore time

---

## 2.6 Scalability Testing

### Definition

**Scalability Testing** evaluates the system's ability to scale by adding resources or users. The goal is to determine whether the system scales linearly, sub-linearly, or not at all.

### Objectives

- Determine if adding resources improves performance proportionally
- Identify scaling bottlenecks (database, network, architecture)
- Validate horizontal scaling (adding servers)
- Validate vertical scaling (adding CPU/memory)
- Evaluate cost-effectiveness of scaling

### Types of Scalability

**Vertical Scaling (Scale Up):**
- Adding more CPU, memory, or disk to a single server
- Limited by hardware maximums
- Example: Upgrade from 16-core to 64-core server

**Horizontal Scaling (Scale Out):**
- Adding more servers to a cluster
- Requires architecture support (load balancing, statelessness)
- Example: Add 5 more application servers

### Scalability Patterns

**Linear Scaling:**
- Double resources → Double capacity
- Ideal but rare

**Sub-Linear Scaling:**
- Double resources → Less than double capacity
- Common due to coordination overhead, shared resources

**No Scaling:**
- Adding resources doesn't help
- Indicates a bottleneck that isn't resource-related (e.g., single-threaded code)

### Example Scenario

**Web Application Scaling Test:**

| Servers | Concurrent Users | Avg Response Time | CPU per Server |
|---------|-------------------|-------------------|----------------|
| 1 | 1,000 | 500ms | 80% |
| 2 | 2,000 | 520ms | 78% |
| 4 | 4,000 | 580ms | 75% |
| 8 | 6,000 | 900ms | 85% |

**Analysis:**
- 1→2 servers: Near-linear scaling (2x users, similar response time)
- 4→8 servers: Sub-linear (only 1.5x users despite doubling servers)
- Bottleneck likely at database or shared cache layer

### Key Metrics

- Throughput per resource unit
- Response time vs. resources added
- Cost per transaction at different scales

---

## 2.7 Configuration Testing

### Definition

**Configuration Testing** evaluates system performance under different hardware, software, or network configurations. The goal is to find the optimal setup for performance.

### Objectives

- Compare different hardware configurations
- Evaluate different software versions or settings
- Test network topology changes
- Determine optimal JVM/database settings
- Validate performance on different platforms

### Example Scenarios

**Database Configuration:**
- Test with different connection pool sizes (20, 50, 100, 200)
- Measure: Which pool size gives best response time without wasting resources?

**JVM Settings:**
- Test with different heap sizes (4GB, 8GB, 16GB)
- Test with different GC algorithms
- Measure: Which configuration has fewest pauses?

**Network Configuration:**
- Test with different CDN providers
- Test with different load balancer algorithms (round-robin, least-connections)
- Measure: Which gives best response time?

### Key Metrics

- Performance comparison across configurations
- Resource efficiency per configuration
- Cost per configuration

---

## 2.8 Isolation Testing

### Definition

**Isolation Testing** evaluates individual components in isolation to identify which component contributes to performance issues. The goal is to pinpoint the problematic component.

### Objectives

- Determine if a bottleneck is in the application, database, or network
- Test components with controlled inputs
- Eliminate variables to isolate the cause
- Validate third-party component performance

### Example Scenario

**Slow Login:**
- Test database query alone: 50ms
- Test authentication service alone: 100ms
- Test full login flow: 2,000ms
- **Analysis:** Neither database nor service alone is slow. The issue is likely in integration (network between them, serialization, or session management).

### Key Metrics

- Component response time in isolation
- Component resource usage in isolation
- Comparison: component alone vs. component in full system

---

## 2.9 Test Type Selection

### When to Use Each Test Type

| Test Type | Use When | Don't Use When |
|-----------|----------|----------------|
| Load | Validating expected performance | Testing beyond breaking point |
| Stress | Finding breaking point, recovery | Routine regression testing |
| Endurance | Testing for memory leaks, long-term stability | Short-duration tests |
| Spike | Sudden traffic surges expected | Gradual, predictable growth |
| Volume | Large data sets expected | Small data, few records |
| Scalability | Planning capacity expansion | Validating a fixed capacity |
| Configuration | Optimizing setup | The configuration is fixed |
| Isolation | Pinpointing a bottleneck | System-level validation |

### Combining Test Types

A comprehensive performance test strategy often combines multiple types:

**Example Strategy for E-Commerce:**
1. **Load test:** Validate performance at normal and peak load
2. **Stress test:** Find breaking point beyond peak
3. **Endurance test:** Run at normal load for 48 hours to check for leaks
4. **Spike test:** Simulate flash sale opening
5. **Volume test:** Test with production-size product catalog
6. **Scalability test:** Verify auto-scaling during peak

---

## Worked Examples

### Worked Example 1: Selecting the Right Test Type

**Scenario:** A hospital's patient records system must handle 500 concurrent users during the day. The system runs 24/7 and must not lose data.

**Recommended Tests:**
1. **Load test:** 500 concurrent users, typical transaction mix
2. **Endurance test:** 300 concurrent users for 72 hours (memory leak detection)
3. **Stress test:** 1,000 users to find breaking point (with data integrity verification)
4. **Volume test:** 10 million patient records (query performance)

**NOT recommended:** Spike testing (unless emergencies cause sudden surges)

### Worked Example 2: Stress vs. Endurance

**Scenario:** A team wants to test a new payment gateway.

**Stress Test Plan:**
- Start at normal load: 100 transactions/minute
- Increase by 50% every 5 minutes
- Continue until errors exceed 1% or response time > 10 seconds
- Expected outcome: Find that database locks at 500 transactions/minute

**Endurance Test Plan:**
- Run at normal load: 100 transactions/minute
- Duration: 24 hours
- Monitor: Memory, connections, disk space
- Expected outcome: Memory grows from 2GB to 8GB over 24 hours (leak found)

**Key Difference:**
- Stress = how much can it handle before breaking?
- Endurance = does it stay healthy over time at normal load?

### Worked Example 3: Scalability Analysis

**Scenario:** A messaging app wants to scale from 10,000 to 100,000 concurrent users.

**Test Results:**

| App Servers | Message Queue | DB Servers | Max Users | Avg Response |
|-------------|-------------|------------|-----------|--------------|
| 2 | 1 | 1 | 10,000 | 200ms |
| 4 | 1 | 1 | 15,000 | 350ms |
| 4 | 2 | 1 | 18,000 | 400ms |
| 4 | 2 | 2 | 35,000 | 250ms |
| 8 | 2 | 2 | 40,000 | 300ms |
| 8 | 4 | 2 | 70,000 | 280ms |
| 8 | 4 | 4 | 100,000 | 220ms |

**Analysis:**
- Adding app servers alone hit the database bottleneck at 15,000 users
- Adding message queues helped but database was still the limit
- Database scaling was the key enabler
- Final architecture: 8 app servers, 4 message queues, 4 database servers
