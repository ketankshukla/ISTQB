# Chapter 4 — Dynamic Analysis: Lessons

---

## 4.1 What Is Dynamic Analysis?

**Definition:** Dynamic analysis is the examination of software behavior during execution. It monitors the running program to detect issues that cannot be found through static analysis.

**Static vs. Dynamic Analysis:**

| Aspect | Static Analysis | Dynamic Analysis |
|--------|----------------|-----------------|
| Execution | Not required | Required |
| Finds | Code structure, potential defects | Runtime behavior, actual defects |
| Examples | Static analysis tools, linters | Profilers, debuggers, monitors |
| Timing | During development/compile time | During test execution or production |

---

## 4.2 Memory Profiling

### What Is Memory Profiling?

Memory profiling monitors how a program uses memory during execution, including:
- Memory allocation and deallocation
- Heap usage over time
- Memory leaks
- Object lifecycles
- Memory fragmentation

### Types of Memory Issues

**1. Memory Leaks:**
- Memory is allocated but never freed
- The program's memory usage grows continuously over time
- Eventually causes application slowdown or crash
- Common causes: unreleased objects, unclosed resources, forgotten event listeners

**Detection:**
- Monitor heap size over extended operation
- If heap grows without bound = memory leak
- Use tools that track allocation call stacks

**2. Memory Corruption:**
- Writing to memory that the program does not own
- Can cause crashes, data corruption, or security vulnerabilities
- Common causes: buffer overflows, use-after-free, dangling pointers

**Detection:**
- Memory debuggers (Valgrind, AddressSanitizer)
- Runtime checks on memory access

**3. Excessive Memory Allocation:**
- Allocating more memory than necessary
- Can cause garbage collection pauses or out-of-memory errors
- Common causes: loading entire datasets, unnecessary object creation

### Memory Profiling Tools

| Tool | Language | Purpose |
|------|----------|---------|
| Valgrind (Memcheck) | C/C++ | Memory leak detection, uninitialized memory access |
| AddressSanitizer | C/C++, others | Memory corruption detection (buffer overflow, use-after-free) |
| Heaptrack | C++ | Heap memory profiling |
| Visual Studio Profiler | .NET, C++ | Memory allocation tracking |
| JProfiler | Java | Heap analysis, memory leak detection |
| YourKit | Java, .NET | Memory and CPU profiling |
| Chrome DevTools | JavaScript | Heap snapshots, allocation tracking |

### Memory Profiling Techniques

**1. Heap Snapshots:**
- Capture the state of the heap at a point in time
- Compare snapshots over time to find growing objects
- Identify which objects are consuming the most memory

**2. Allocation Tracking:**
- Track every memory allocation and deallocation
- Identify allocation hotspots
- Find objects that are allocated frequently but live short lives

**3. Leak Detection:**
- Identify objects that should have been garbage collected but weren't
- Track object references to find why objects are retained
- Monitor for patterns of unreleased resources

### Worked Example: Detecting a Memory Leak

**Scenario:** A web application runs for 24 hours. Memory usage is monitored:

| Time | Heap Size |
|------|-----------|
| 0 hours | 100 MB |
| 4 hours | 150 MB |
| 8 hours | 220 MB |
| 12 hours | 310 MB |
| 16 hours | 430 MB |
| 20 hours | 580 MB |
| 24 hours | 760 MB |

**Analysis:**
- Memory is growing continuously (not plateauing)
- Growth rate is approximately linear
- This indicates a memory leak

**Investigation:**
1. Take heap snapshots at 0, 12, and 24 hours
2. Compare snapshots to find object types growing
3. If `UserSession` objects are growing, check if sessions are being properly cleaned up
4. If `CacheEntry` objects are growing, check if cache has an eviction policy

---

## 4.3 Performance Profiling

### What Is Performance Profiling?

Performance profiling monitors the execution of a program to identify:
- Which methods/functions consume the most CPU time
- I/O bottlenecks (disk, network)
- Thread contention and blocking
- Garbage collection overhead

### Types of Performance Profiling

**1. CPU Profiling:**
- Measures time spent in each function/method
- Identifies "hotspots" — functions consuming the most CPU
- Two approaches:
  - **Sampling profiler:** Periodically records the call stack (low overhead)
  - **Instrumentation profiler:** Adds timing code to each method (high overhead, more accurate)

**2. I/O Profiling:**
- Measures disk read/write operations
- Measures network latency and throughput
- Identifies slow database queries

**3. Thread Profiling:**
- Identifies thread contention (threads waiting for locks)
- Detects deadlocks
- Measures thread pool utilization

### Performance Bottlenecks

**Common Bottlenecks:**

| Symptom | Likely Cause | Tool |
|---------|-------------|------|
| Slow response time | Inefficient algorithm | CPU profiler |
| High CPU usage | Tight loop or recursion | CPU profiler |
| Slow database queries | Missing indexes, N+1 queries | Database profiler |
| Slow startup | Excessive initialization | CPU profiler |
| Application freezes | Deadlock, infinite wait | Thread profiler |
| Frequent pauses | Garbage collection | Memory/heap profiler |

### Performance Profiling Tools

| Tool | Language | Purpose |
|------|----------|---------|
| perf | Linux | System-wide CPU profiling |
| gprof | C/C++ | Function-level timing |
| Visual Studio Profiler | .NET, C++ | CPU and memory profiling |
| JProfiler | Java | CPU, memory, thread profiling |
| dotTrace | .NET | Performance profiling |
| Chrome DevTools | JavaScript | CPU profiling, flame charts |
| New Relic / Dynatrace | Multiple | Application performance monitoring (APM) |

### Analyzing Profiling Results

**Flame Charts/Graphs:**
- Visual representation of call stacks
- Wider bars = more time spent
- Quickly identifies the deepest/hottest code paths

**Example Analysis:**
```
80% of CPU time in getCustomerOrders()
  -> 60% in executeQuery()
    -> 40% in database network wait
    -> 20% in result set processing
  -> 20% in data transformation
```

**Optimization Priority:**
1. Optimize the database query (40% savings)
2. Optimize result processing (20% savings)
3. Total potential improvement: 60% of 80% = 48% overall

---

## 4.4 Code Coverage Measurement

### Instrumentation

To measure coverage during execution, the code is "instrumented" — additional tracking code is added:
- Before each statement, a counter is incremented
- At each branch, which path was taken is recorded
- For MC/DC, which conditions affected the outcome is tracked

**Types of Instrumentation:**
- **Source code instrumentation:** Modify source code before compilation
- **Bytecode/IL instrumentation:** Modify compiled intermediate code
- **Binary instrumentation:** Modify machine code at runtime

### Coverage Tools

| Tool | Language | Coverage Types |
|------|----------|---------------|
| JaCoCo | Java | Statement, branch, method, class, MC/DC |
| Cobertura | Java | Statement, branch |
| Coverage.py | Python | Statement, branch |
| Istanbul (nyc) | JavaScript | Statement, branch, function |
| gcov/lcov | C/C++ | Statement, branch |
| dotCover | .NET | Statement, branch |

### Coverage Reports

Typical coverage report:
```
Package: com.example.service
  Class: OrderService
    Method Coverage: 85% (17/20 methods)
    Statement Coverage: 78% (156/200 statements)
    Branch Coverage: 65% (52/80 branches)
    Uncovered lines: 45, 67-89, 120
```

**Using Coverage Data:**
- Identify untested code (potential risk areas)
- Ensure critical paths are covered
- Set coverage thresholds as quality gates
- Note: 100% coverage does not mean 0 defects

---

## 4.5 Fault Injection

### What Is Fault Injection?

Fault injection is the deliberate introduction of errors into a system to test its error handling and recovery capabilities.

**Types of Fault Injection:**

**1. Hardware Fault Injection:**
- Simulate memory corruption
- Inject CPU errors
- Simulate network failures
- Simulate disk failures

**2. Software Fault Injection:**
- Corrupt method return values
- Throw unexpected exceptions
- Modify environment variables
- Simulate timeout conditions

**3. Network Fault Injection:**
- Introduce network latency
- Drop packets
- Partition network (split-brain scenarios)
- Simulate bandwidth limitations

### Chaos Engineering

Chaos engineering is the discipline of experimenting on a system to build confidence in its capability to withstand turbulent conditions.

**Principles:**
1. Start with a hypothesis about system behavior
2. Introduce realistic failures
3. Observe system behavior
4. Improve resilience based on findings

**Tools:**
- **Chaos Monkey (Netflix):** Randomly terminates production instances
- **Gremlin:** Comprehensive chaos engineering platform
- **Chaos Mesh:** Kubernetes-specific chaos engineering

### Worked Example: Fault Injection Test

**Scenario:** Test how a payment service handles database failures.

**Hypothesis:** If the primary database becomes unavailable, the service will failover to the replica within 5 seconds.

**Test:**
1. Start payment service with primary and replica databases
2. Inject fault: disconnect primary database
3. Monitor: measure time to failover, check for data loss
4. Verify: transactions continue on replica, no errors exposed to users

**Results:**
- If failover takes 10 seconds → hypothesis failed, needs optimization
- If 5% of transactions fail → insufficient error handling
- If no data loss and failover in 3 seconds → hypothesis confirmed

---

## 4.6 Runtime Monitoring

### Application Performance Monitoring (APM)

APM tools monitor applications in production to:
- Track response times
- Monitor error rates
- Measure throughput
- Alert on anomalies

**Key Metrics:**
- **Apdex:** User satisfaction score based on response times
- **Throughput:** Requests per minute
- **Error rate:** Percentage of failed requests
- **Latency:** Response time percentiles (p50, p95, p99)

### Logging and Alerting

**Structured Logging:**
- Log events in a machine-readable format (JSON)
- Include context: request ID, user ID, timestamp
- Enables correlation across distributed systems

**Alerting Thresholds:**
- Error rate > 1% → Alert
- Response time p95 > 2 seconds → Alert
- Memory usage > 90% → Alert

---

## Worked Examples

### Worked Example 1: Performance Profiling

**Scenario:** An e-commerce search page takes 5 seconds to load.

**Profiling Results:**
- 60% of time in `SearchService.queryDatabase()`
- 20% of time in `ResultFormatter.toJSON()`
- 15% of time in network transfer
- 5% in other operations

**Optimization:**
1. Add database index on search fields (potential 60% reduction)
2. Optimize JSON serialization (potential 20% reduction)
3. Implement caching for common queries

### Worked Example 2: Memory Leak Detection

**Scenario:** A Java application crashes with OutOfMemoryError after 6 hours.

**Heap Dump Analysis:**
- 80% of heap consumed by `EventListener` objects
- These objects are referenced by a static list
- List is never cleared

**Fix:**
- Use `WeakReference` for listeners, or
- Implement proper listener unregistration, or
- Use event bus with automatic cleanup

### Worked Example 3: Coverage-Guided Testing

**Scenario:** A module has 60% statement coverage.

**Coverage Report Shows:**
- `errorHandling()` method: 0% coverage
- `edgeCases()` branch: never executed
- `logging()` statements: partially covered

**Actions:**
1. Add test cases for error conditions
2. Test boundary values for edge cases
3. Verify logging output in existing tests
