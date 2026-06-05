# CT-PT Glossary

Key terms and definitions for the CT-PT exam, organized by chapter relevance.

---

## Performance Testing Fundamentals

**Performance Testing**
Testing to determine the performance of a software product, including speed, scalability, and stability characteristics under a particular workload.

**Non-Functional Testing**
Testing of non-functional requirements such as performance, reliability, usability, and security.

**Response Time**
The elapsed time between a user's request and the system's response. Typically measured from the client perspective.

**Latency**
The time delay between the cause and effect in a system. Often used for network delay.

**Throughput**
The number of transactions processed per unit of time. Examples: requests per second, pages per minute.

**Resource Utilization**
The degree to which system resources (CPU, memory, disk, network) are used during test execution.

**Bottleneck**
A resource or component that limits overall system performance because it cannot handle the load efficiently.

**Concurrent Users**
Users actively accessing the system at the same time. May include both active (sending requests) and idle (think time) users.

**Simultaneous Users**
Users sending requests at exactly the same moment. A subset of concurrent users.

**Think Time**
The time a user spends between actions (e.g., reading a page before clicking a link). Simulates realistic user behavior.

**Ramp-Up Time**
The duration over which virtual users are gradually added to the test until the target load is reached.

**Ramp-Down Time**
The duration over which virtual users are gradually removed from the test.

**Steady State**
The period during a performance test when the target load is maintained consistently.

---

## Types of Performance Testing

**Load Testing**
Testing to evaluate system behavior under expected normal and peak load conditions.

**Stress Testing**
Testing beyond normal operational capacity to determine how the system behaves at and beyond its breaking point. Also evaluates recovery after failure.

**Endurance Testing (Soak Testing)**
Testing with a typical workload sustained over an extended period to identify issues like memory leaks, resource exhaustion, or gradual degradation.

**Spike Testing**
Testing with sudden, extreme increases in load to determine how the system handles unexpected surges.

**Volume Testing**
Testing with large volumes of data to evaluate system performance and behavior with extensive datasets.

**Scalability Testing**
Testing to determine the system's ability to scale up or out by adding resources (CPU, memory, servers) or users.

**Configuration Testing**
Testing with different hardware, software, or network configurations to determine optimal setup.

**Isolation Testing**
Testing individual components in isolation to identify which component contributes to performance issues.

---

## Planning and Design

**Workload Model**
A representation of the expected user behavior, including user profiles, transaction mix, think time, and arrival patterns.

**User Profile**
A description of a type of user, including the actions they perform and the frequency of those actions.

**Transaction Mix**
The proportion of different types of transactions performed during a test (e.g., 70% browse, 20% search, 10% purchase).

**Key Performance Indicator (KPI)**
A measurable value that demonstrates how effectively a system is achieving performance objectives.

**Service Level Agreement (SLA)**
A formal agreement between service provider and customer defining expected service levels, including performance targets.

**Service Level Objective (SLO)**
A specific target within an SLA, such as "95% of requests respond in under 2 seconds."

**Baseline**
A measurement taken under known conditions, used as a reference point for comparison.

**Benchmark**
A standard test used to compare system performance against a reference or competitor.

**Performance Test Environment**
The hardware, software, and network setup used for performance testing. Should be representative of production.

**Production-Like Environment**
A test environment that closely mirrors production in hardware, software, configuration, and data.

**Scaled-Down Environment**
A smaller version of production used for testing, with results extrapolated.

**Scaled-Up Environment**
A larger or more powerful environment than production, used to test future capacity needs.

---

## Execution and Monitoring

**CPU Utilization**
The percentage of processing capacity being used. Sustained > 80% often indicates a bottleneck.

**Memory Utilization**
The amount of RAM being used. Growing unbounded may indicate a memory leak.

**Disk I/O**
Read/write operations to storage. High queue lengths indicate disk bottleneck.

**Network Utilization**
The percentage of available network bandwidth being used. Saturation causes delays.

**Database Monitoring**
Tracking database metrics: query execution time, connection pool usage, lock contention, cache hit ratio.

**Application Performance Monitoring (APM)**
Tools that monitor application performance in real-time, tracking transactions, code-level performance, and dependencies.

**Heap Memory**
The portion of memory used for dynamic allocation. Heap growth in endurance tests may indicate leaks.

**Garbage Collection (GC)**
Automatic memory management that reclaims unused memory. Frequent or long GC pauses impact performance.

**Connection Pool**
A cache of database connections maintained for reuse. Exhaustion causes requests to wait.

**Thread Pool**
A pool of worker threads for processing requests. Saturation causes queuing.

---

## Analysis and Reporting

**Root Cause Analysis**
The process of identifying the underlying cause of a performance issue, not just the symptoms.

**Performance Tuning**
Adjusting system components (hardware, software, configuration) to improve performance.

**Percentile Response Time**
The response time below which a given percentage of requests fall. 90th percentile means 90% of requests are faster than this value.

**Average Response Time**
The arithmetic mean of all response times. Can be skewed by outliers.

**Median Response Time**
The middle value of all response times. Less sensitive to outliers than average.

**Standard Deviation**
A measure of response time variability. High standard deviation indicates inconsistent performance.

**Error Rate**
The percentage of requests that fail or return errors during a test.

**Capacity**
The maximum load a system can handle while meeting performance requirements.

**Degradation**
A gradual decline in performance over time, often seen in endurance tests.

**Saturation**
The point at which a resource is fully utilized and cannot accept additional load, causing queuing.

---

## Tools and Automation

**Load Generator**
A tool or system that simulates virtual users to create load on the SUT.

**Scripting**
Writing test scenarios that define user actions, data, and validation points for performance tests.

**Correlation**
The process of extracting dynamic values (e.g., session IDs) from responses and using them in subsequent requests.

**Parameterization**
Using variable data for test inputs (e.g., different usernames, search terms) to simulate realistic usage.

**Recording**
Capturing user actions in a browser or application to generate a performance test script automatically.

**Headless Testing**
Running performance tests without a graphical user interface, typically faster and more scalable.

**Distributed Testing**
Running load generators across multiple machines to generate higher load from different locations.

**Performance Regression Test**
A performance test executed repeatedly to detect performance degradation introduced by changes.

**Performance Gate**
An automated check in CI/CD that fails a build if performance degrades beyond a threshold.

**Cloud-Based Performance Testing**
Using cloud infrastructure to generate load, enabling on-demand scaling and geographic distribution.

---

## Abbreviations

| Abbreviation | Meaning |
|-------------|---------|
| PT | Performance Testing |
| SUT | System Under Test |
| SLA | Service Level Agreement |
| SLO | Service Level Objective |
| KPI | Key Performance Indicator |
| APM | Application Performance Monitoring |
| GC | Garbage Collection |
| CPU | Central Processing Unit |
| RAM | Random Access Memory |
| I/O | Input/Output |
| CI/CD | Continuous Integration / Continuous Delivery |
| UI | User Interface |
| API | Application Programming Interface |
| TPS | Transactions Per Second |
| RPS | Requests Per Second |
| P90 | 90th Percentile |
| P95 | 95th Percentile |
| P99 | 99th Percentile |
