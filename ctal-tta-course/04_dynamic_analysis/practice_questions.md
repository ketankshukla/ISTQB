# Chapter 4 — Dynamic Analysis: Practice Questions

---

### Q1 (TTA-4.1, K2)

Which of the following requires code execution?

A. Static analysis
B. Dynamic analysis
C. Code review
D. Linting

---

### Q2 (TTA-4.2, K3)

An application's memory usage grows linearly over several hours without decreasing. This is MOST likely:

A. Normal behavior
B. A memory leak
C. Memory corruption
D. Efficient memory management

---

### Q3 (TTA-4.3, K2)

A sampling profiler is preferred over an instrumentation profiler when:

A. Maximum accuracy is required
B. Minimal overhead is required (e.g., production monitoring)
C. Line-by-line timing is needed
D. Memory allocation tracking is needed

---

### Q4 (TTA-4.4, K2)

Code coverage measurement during execution is accomplished by:

A. Reading the source code
B. Instrumenting the code to track execution paths
C. Manual observation of test execution
D. Reviewing test scripts

---

### Q5 (TTA-4.2, K3)

Which tool is MOST appropriate for detecting buffer overflows at runtime?

A. SonarQube
B. AddressSanitizer
C. Checkstyle
D. PMD

---

### Q6 (TTA-4.1, K2)

Which of the following CANNOT be found by dynamic analysis?

A. Memory leak
B. Unreachable code
C. Performance bottleneck
D. Thread deadlock

---

### Q7 (TTA-4.5, K2)

Fault injection is used to:

A. Automatically fix defects
B. Test system resilience by introducing deliberate errors
C. Generate test cases automatically
D. Measure code complexity

---

### Q8 (TTA-4.3, K3)

A CPU profiling flame chart shows that 70% of time is spent in `processOrder()`. The MOST appropriate action is:

A. Optimize all methods equally
B. Investigate and optimize `processOrder()` first
C. Ignore it because it is a core business function
D. Add more hardware

---

### Q9 (TTA-4.2, K2)

Memory corruption is BEST detected by:

A. Static analysis tools
B. Memory debuggers that monitor access at runtime
C. Code reviews
D. Unit testing with mock objects

---

### Q10 (TTA-4.4, K2)

A coverage report shows 100% branch coverage. This means:

A. The code has no defects
B. Every branch (true/false) of every decision was executed
C. Every possible path was executed
D. The code is fully optimized

---

### Q11 (TTA-4.5, K3)

A team simulates a database outage to verify the application fails over correctly. This is:

A. Regression testing
B. Fault injection
C. Load testing
D. Static analysis

---

### Q12 (TTA-4.3, K2)

Which metric is MOST useful for identifying application performance in production?

A. Source lines of code
B. p95 response time
C. Cyclomatic complexity
D. Comment ratio

---

### Q13 (TTA-4.2, K3)

An application crashes after running for 8 hours with an OutOfMemoryError. Investigation reveals unreleased session objects. The BEST fix is:

A. Increase the heap size
B. Implement proper session cleanup or use weak references
C. Restart the application every 4 hours
D. Ignore it because it only happens after 8 hours

---

### Q14 (TTA-4.1, K2)

Dynamic analysis is MOST valuable for finding:

A. Coding standard violations
B. Runtime behavior issues (memory, performance, concurrency)
C. Dead code
D. Syntax errors

---

### Q15 (TTA-4.5, K2)

Chaos engineering is BEST described as:

A. Randomly breaking code to cause failures
B. Deliberately introducing failures to build confidence in system resilience
C. Testing without any plan or hypothesis
D. A type of static analysis

---

## Answers and Rationales

### Q1
**Answer: B**

**Rationale:** Dynamic analysis examines behavior during execution. Static analysis, code review, and linting do not require execution.

### Q2
**Answer: B**

**Rationale:** Linear growth in memory usage without decrease is the classic symptom of a memory leak.

### Q3
**Answer: B**

**Rationale:** Sampling profilers have lower overhead because they periodically sample rather than instrumenting every method.

### Q4
**Answer: B**

**Rationale:** Code coverage is measured by instrumenting code to track which paths are executed during testing.

### Q5
**Answer: B**

**Rationale:** AddressSanitizer is a dynamic tool that detects buffer overflows, use-after-free, and other memory errors at runtime.

### Q6
**Answer: B**

**Rationale:** Unreachable code cannot be found by dynamic analysis because it is never executed. Static analysis finds unreachable code.

### Q7
**Answer: B**

**Rationale:** Fault injection introduces deliberate errors to test system resilience and error handling.

### Q8
**Answer: B**

**Rationale:** Profiling identifies hotspots. The method consuming the most time should be investigated first for optimization.

### Q9
**Answer: B**

**Rationale:** Memory corruption occurs at runtime. Memory debuggers (Valgrind, AddressSanitizer) monitor access to detect violations.

### Q10
**Answer: B**

**Rationale:** Branch coverage means every branch outcome (true/false) of every decision was executed. It does not mean no defects or all paths.

### Q11
**Answer: B**

**Rationale:** Simulating a database outage is deliberately introducing a runtime fault to test resilience — fault injection.

### Q12
**Answer: B**

**Rationale:** p95 response time measures the latency experienced by 95% of users — a key production performance metric.

### Q13
**Answer: B**

**Rationale:** Proper cleanup or weak references addresses the root cause. Increasing heap size (A) only delays the crash.

### Q14
**Answer: B**

**Rationale:** Dynamic analysis finds runtime behavior issues like memory, performance, and concurrency problems.

### Q15
**Answer: B**

**Rationale:** Chaos engineering deliberately introduces controlled failures to validate system resilience, not random destruction.
