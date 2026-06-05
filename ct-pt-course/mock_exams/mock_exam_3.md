# CT-PT Mock Exam 3

**Instructions:**
- 40 questions, 60 minutes, single best answer, no negative marking

---

### Q1

The PRIMARY objective of performance testing is to:

A. Find all functional defects in the application
B. Determine if a system meets speed, scalability, and stability requirements under workload
C. Verify the user interface design
D. Ensure the code compiles without errors

---

### Q2

Latency is BEST described as:

A. The time to process a request on the server
B. The time a request spends in queues before being processed
C. The total time from request to response
D. The time to render a page in the browser

---

### Q3

Resource utilization metrics include all EXCEPT:

A. CPU percentage
B. Memory usage
C. Number of test scripts written
D. Disk I/O queue length

---

### Q4

During load testing, if response times increase proportionally with user count, this is:

A. Linear degradation (acceptable within limits)
B. A sudden failure
C. Optimal performance
D. A memory leak

---

### Q5

A spike test is MOST appropriate when validating:

A. Sustained load over 24 hours
B. The system's ability to handle sudden traffic surges
C. Database performance with large datasets
D. Memory stability over time

---

### Q6

A system running at 100% CPU shows response times of 10 seconds. A likely tuning action is:

A. Increase think time in the test script
B. Profile the application to find CPU-intensive operations and optimize them
C. Add more users to the test
D. Reduce the test duration

---

### Q7

Which is NOT a typical phase of a performance test execution?

A. Ramp-up
B. Steady state
C. Code review
D. Ramp-down

---

### Q8

Application-level monitoring includes tracking:

A. Server room temperature
B. Thread pool usage, database connections, and cache hit ratios
C. The number of employees in the office
D. Network cable lengths

---

### Q9

A "hockey stick" curve on a response time graph (flat then sharply rising) indicates:

A. Perfect linear scalability
B. A threshold where performance degrades rapidly as a bottleneck is reached
C. A memory leak
D. Optimal caching behavior

---

### Q10

If the network utilization between the application and database servers is 80%, a likely issue is:

A. Insufficient database indexes
B. Excessive data transfer between tiers, possibly due to fetching unnecessary data
C. The application server has too much RAM
D. The database is underutilized

---

### Q11

A code profiler shows method `calculateTax()` uses 45% of CPU time. The BEST action is:

A. Ignore it unless users complain
B. Optimize or cache the results of this method
C. Add more application servers
D. Increase the database connection pool

---

### Q12

The PRIMARY purpose of a baseline performance test is to:

A. Compare future test results against a known reference point
B. Find the breaking point
C. Test with maximum possible load
D. Generate stress on the system

---

### Q13

In a CI/CD pipeline, a performance smoke test should:

A. Run for 8 hours
B. Run quickly with light load to catch major regressions on every build
C. Replace all functional tests
D. Only run before major releases

---

### Q14

Cloud-based performance testing is LEAST suitable when:

A. Geographic distribution is needed
B. The system is behind strict firewalls with no exceptions for cloud IPs
C. Very large load is required
D. Realistic network conditions are desired

---

### Q15

A hand-coded performance test script is generally preferred over a recorded script when:

A. The tester has no technical skills
B. The scenario involves APIs and requires precise control over requests
C. The application has a complex GUI with many images
D. The test needs to be created in 5 minutes

---

### Q16

Correlation is required in a script when:

A. The server returns dynamic values that must be used in subsequent requests
B. The test has only one virtual user
C. The application has no session management
D. The tester wants to use static data

---

### Q17

A performance regression detected in CI/CD means:

A. The code is functionally broken
B. A recent code change has degraded performance compared to the baseline
C. The test environment is wrong
D. The tool needs updating

---

### Q18

Which is a benefit of using cloud-based load generators?

A. No cost whatsoever
B. Ability to generate load from multiple geographic locations without maintaining hardware
C. They always produce more accurate results
D. They never require security considerations

---

### Q19

If all virtual users in a test use the exact same login credentials, the test is:

A. Realistic and valid
B. Likely flawed because it does not represent real-world usage and may hit cache unrealistically
C. Required for all tools
D. More efficient

---

### Q20

A performance testing tool selection should consider all EXCEPT:

A. Protocol support for the application under test
B. The tool's color scheme
C. Scalability and reporting capabilities
D. Integration with existing CI/CD and monitoring tools

---

### Q21

The difference between speed testing and load testing is:

A. There is no difference
B. Speed testing measures response time under light load; load testing validates behavior under expected workload
C. Speed testing uses more users
D. Load testing is only for databases

---

### Q22

A system shows throughput of 500 TPS with 1,000 users and 1,000 TPS with 4,000 users. This is:

A. Linear scalability
B. Sub-linear scalability
C. Super-linear scalability
D. No scalability

---

### Q23

During endurance testing, if memory grows from 4GB to 8GB over 48 hours and does not recover, this indicates:

A. Normal behavior
B. A probable memory leak
C. Efficient garbage collection
D. Optimal performance

---

### Q24

A report for executives should focus on:

A. Detailed SQL query execution plans
B. High-level results, business impact, and go/no-go recommendations
C. Individual virtual user logs
D. Network packet captures

---

### Q25

Which is an example of an environmental constraint during performance testing?

A. The tester is not certified
B. Firewall rules blocking load generator traffic
C. The application is too new
D. The test scripts are too long

---

### Q26

A warm-up period in a performance test should:

A. Be skipped to save time
B. Allow caches to populate, connections to establish, and JIT compilation to complete
C. Only include logging in
D. Be the longest phase of the test

---

### Q27

Load testing a login page with 5,000 users where each user logs in once and then logs out is:

A. A realistic endurance test
B. An unrealistic load test because users typically perform multiple actions in a session
C. A perfect stress test
D. A volume test

---

### Q28

If a test run shows errors starting exactly when the database connection pool reaches its maximum, the conclusion is:

A. The application code has bugs
B. The connection pool size is a bottleneck
C. The load generator is broken
D. The network is too slow

---

### Q29

Monitoring thread pool usage in the application server helps identify:

A. Network bandwidth issues
B. Whether application threads are the bottleneck
C. Disk space problems
D. User interface rendering issues

---

### Q30

A performance test result showing consistent P90 response times over 4 hours but steadily increasing P99 times suggests:

A. All users have the same experience
B. A small number of users are experiencing intermittent severe delays
C. The test is invalid
D. The system is perfectly stable

---

### Q31

Which is a valid reason to use a read replica database during load testing?

A. To make the test more complex
B. To offload read traffic from the primary database and observe if it improves performance
C. Because write operations should also go to the replica
D. To reduce the number of load generators needed

---

### Q32

If disk I/O is at 100% and response time is high, but CPU and memory are low, the bottleneck is:

A. CPU
B. Disk I/O
C. Network
D. Memory

---

### Q33

A performance test tool that generates load by simulating real browser behavior is called:

A. A protocol-level tool
B. A browser-level or user-level tool
C. A database monitoring tool
D. A code coverage tool

---

### Q34

The PRIMARY risk of running performance tests directly against production is:

A. It is always the best practice
B. It may impact real users and business operations
C. It is too expensive
D. It produces less accurate results

---

### Q35

A test shows 100% CPU on the application server and 30% CPU on the database. The tuning priority should be:

A. Add database indexes
B. Optimize application code or add application servers
C. Increase database connection pool
D. Add more RAM to the database

---

### Q36

A bell-shaped arrival pattern is typical for:

A. Systems with constant load 24/7
B. Business applications with morning login surges and afternoon peaks
C. Automated batch processes
D. Systems with only one user

---

### Q37

During a performance test, monitoring the database for slow queries is BEST done using:

A. CPU monitoring only
B. Database profiling or slow query logs
C. Network packet sniffing
D. Manual code review during the test

---

### Q38

A team observes that response times improve after the first few minutes of a test, even though load is constant. The likely explanation is:

A. The load generator is failing
B. System caches are warming up
C. The database is shrinking
D. Users are leaving the system

---

### Q39

If a load test shows errors but the server CPU is only 40%, a likely cause is:

A. The server has plenty of capacity
B. A non-CPU bottleneck such as connection limits, locks, or memory
C. The test is not running
D. The response times are excellent

---

### Q40

Performance testing should begin:

A. Only after the application is fully complete and in production
B. As early as possible in the development lifecycle, with increasing depth as features stabilize
C. Only when users complain about slowness
D. Only when the full production environment is available

---

## End of Mock Exam 3
