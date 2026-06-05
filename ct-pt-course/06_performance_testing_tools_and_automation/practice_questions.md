# Chapter 6 — Performance Testing Tools and Automation: Practice Questions

---

### Q1 (PT-6.1, K2)

Apache JMeter is an example of:

A. A commercial performance testing tool
B. An open-source performance testing tool
C. A proprietary database
D. A network monitoring tool

---

### Q2 (PT-6.2, K2)

Correlation in performance testing scripts is used to:

A. Connect multiple test tools
B. Extract dynamic values from responses for use in subsequent requests
C. Compare test results
D. Generate random data

---

### Q3 (PT-6.2, K2)

Parameterization in a performance test script means:

A. Using hard-coded values for all users
B. Using variable data for different virtual users
C. Removing all data from requests
D. Recording user actions

---

### Q4 (PT-6.3, K2)

A performance gate in CI/CD is:

A. A physical security gate
B. An automated check that prevents deployment if performance degrades beyond a threshold
C. A manual approval step
D. A network firewall

---

### Q5 (PT-6.1, K2)

Which is a PRIMARY advantage of cloud-based performance testing?

A. It is always free
B. On-demand scaling to very large loads without maintaining infrastructure
C. It requires no internet connection
D. It only works for small applications

---

### Q6 (PT-6.2, K2)

A recorded performance test script typically requires:

A. No further modification before running with load
B. Cleanup, parameterization, and correlation before it can be used for realistic load testing
C. Only a different tool
D. Only more users

---

### Q7 (PT-6.1, K3)

A team needs to test a REST API with JSON payloads and integrate with Jenkins. The BEST tool choice is likely:

A. A GUI-only tool with no scripting support
B. k6 or JMeter with strong API and CI/CD support
C. A tool that only supports desktop applications
D. A manual testing approach

---

### Q8 (PT-6.4, K2)

A PRIMARY challenge of cloud-based performance testing is:

A. It is too fast
B. Security concerns and the need to allow traffic from cloud IPs
C. It requires no budget
D. It only supports HTTP

---

### Q9 (PT-6.2, K2)

Think time in a script should:

A. Always be zero for maximum load
B. Simulate realistic pauses between user actions
C. Be ignored by the tool
D. Only be used in stress tests

---

### Q10 (PT-6.3, K2)

Performance regression detection in CI/CD requires:

A. Running tests only once
B. Storing baseline results and comparing current results against them
C. Manual review of every commit
D. No monitoring

---

### Q11 (PT-6.1, K2)

Distributed testing means:

A. Testing from a single machine
B. Distributing load generation across multiple machines to simulate higher load
C. Testing only distributed systems
D. Running tests at random times

---

### Q12 (PT-6.2, K2)

Which scripting approach gives the most control and maintainability?

A. Recorded scripts used without modification
B. Hand-coded scripts with proper parameterization and correlation
C. Scripts with hard-coded credentials
D. Scripts that include all browser resources

---

### Q13 (PT-6.4, K2)

Geographic distribution of load in cloud testing is useful for:

A. Testing from only one location
B. Measuring latency and performance from regions where actual users are located
C. Reducing the total load
D. Avoiding CDN testing

---

### Q14 (PT-6.1, K2)

LoadRunner is an example of:

A. An open-source tool
B. A commercial enterprise performance testing tool
C. A database monitoring tool
D. A code coverage tool

---

### Q15 (PT-6.3, K2)

Running a small smoke performance test on every commit is an example of:

A. Load testing
B. Continuous performance validation
C. Stress testing
D. Volume testing

---

### Q16 (PT-6.2, K2)

A session ID returned in a login response and used in subsequent requests requires:

A. No special handling
B. Correlation to extract and reuse the dynamic value
C. Hard-coding the same ID for all users
D. Removing the session ID from all requests

---

### Q17 (PT-6.1, K2)

Gatling is known for:

A. Being a GUI-only tool
B. High performance and efficiency in generating load, with developer-friendly scripting
C. Only supporting desktop applications
D. Requiring no scripting

---

### Q18 (PT-6.3, K2)

A performance test that fails the CI/CD pipeline because P95 response time increased by 30% is an example of:

A. A false positive
B. A performance gate preventing regression
C. An incorrect configuration
D. A network issue

---

### Q19 (PT-6.4, K2)

Cloud-based testing is LEAST suitable when:

A. Testing a public-facing website
B. The system is behind strict firewalls with no exceptions for cloud IPs
C. Geographic distribution is needed
D. Very large load is required

---

### Q20 (PT-6.1, K3)

When selecting a performance testing tool, the PRIMARY factor should be:

A. Whether it is the most expensive
B. Whether it supports your protocols, load requirements, integration needs, and team skills
C. Whether it has the prettiest reports
D. Whether it is open-source

---

## Answers and Rationales

### Q1
**Answer: B**

**Rationale:** JMeter = open-source performance testing tool.

### Q2
**Answer: B**

**Rationale:** Correlation = extract dynamic values for subsequent requests.

### Q3
**Answer: B**

**Rationale:** Parameterization = variable data for different virtual users.

### Q4
**Answer: B**

**Rationale:** Performance gate = automated check blocking deployment on degradation.

### Q5
**Answer: B**

**Rationale:** Cloud = on-demand scaling without infrastructure maintenance.

### Q6
**Answer: B**

**Rationale:** Recorded scripts need cleanup, parameterization, correlation.

### Q7
**Answer: B**

**Rationale:** REST API + Jenkins = k6 or JMeter (API + CI/CD support).

### Q8
**Answer: B**

**Rationale:** Cloud challenge = security, whitelisting cloud IPs.

### Q9
**Answer: B**

**Rationale:** Think time = simulate realistic pauses between actions.

### Q10
**Answer: B**

**Rationale:** Regression detection = baseline comparison over time.

### Q11
**Answer: B**

**Rationale:** Distributed testing = multiple machines generating load.

### Q12
**Answer: B**

**Rationale:** Hand-coded = most control and maintainability.

### Q13
**Answer: B**

**Rationale:** Geographic distribution = test from user locations.

### Q14
**Answer: B**

**Rationale:** LoadRunner = commercial enterprise tool.

### Q15
**Answer: B**

**Rationale:** Smoke test per commit = continuous performance validation.

### Q16
**Answer: B**

**Rationale:** Session ID in response → subsequent requests = correlation.

### Q17
**Answer: B**

**Rationale:** Gatling = high performance, efficient, developer-friendly.

### Q18
**Answer: B**

**Rationale:** P95 +30% fails pipeline = performance gate working.

### Q19
**Answer: B**

**Rationale:** Strict firewalls without exceptions = cloud least suitable.

### Q20
**Answer: B**

**Rationale:** Tool selection = protocols, load, integration, team skills.
