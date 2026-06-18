# 📘 Chapter 3 — Testing Software Quality Characteristics: Lessons

---

## 🌟 3.1 Quality Characteristics Overview

### 💎 ISO 25010 Quality Model

The ISO/IEC 25010 standard defines a quality model for software products. It organizes software quality into 8 characteristics, each with sub-characteristics.

**The 8 Quality Characteristics:**

1. **Functional Suitability** (Accuracy, Completeness, Appropriateness)
2. **Performance Efficiency** (Time Behavior, Resource Utilization, Capacity)
3. **Compatibility** (Co-existence, Interoperability)
4. **Usability** (Appropriateness, Learnability, Operability, User Error Protection, User Interface Aesthetics, Accessibility)
5. **Reliability** (Maturity, Availability, Fault Tolerance, Recoverability)
6. **Security** (Confidentiality, Integrity, Non-repudiation, Accountability, Authenticity)
7. **Maintainability** (Modularity, Reusability, Analysability, Modifiability, Testability)
8. **Portability** (Adaptability, Installability, Replaceability)

**For the CTAL-TA exam, the syllabus focuses on:**
- Accuracy (under Functional Suitability)
- Suitability (under Functional Suitability)
- Interoperability (under Compatibility)
- Security
- Reliability
- Efficiency (Performance Efficiency)
- Maintainability
- Portability

**Functional vs. Non-Functional Testing:**

| Functional Testing | Non-Functional Testing |
|---|---|
| Tests what the system DOES | Tests how well the system DOES it |
| Based on requirements and specifications | Based on quality characteristics and standards |
| Validates features and functions | Validates qualities and attributes |
| Examples: login, search, checkout | Examples: speed, security, reliability, usability |

---

## ⭐ 3.2 Accuracy Testing

### 🔷 What is Accuracy? (K2)

Accuracy is the degree to which a product provides the **correct results** with the required precision.

**Sub-characteristics:**
- **Functional correctness:** The system produces correct results for given inputs
- **Precision:** Results are accurate to the required number of decimal places or units

**Testing Accuracy:**
- Define expected results with known correct answers
- Compare actual results against expected results
- Use test oracles (sources of expected results)
- Test edge cases where precision matters (financial calculations, scientific measurements)

**Example:**
> A banking system calculates compound interest. The expected result for $10,000 at 5% for 1 year is $10,512.70 (rounded to 2 decimal places).
>
> Test: Input $10,000, 5%, 1 year → Verify output = $10,512.70

**Test Techniques for Accuracy:**
- EP and BVA on input ranges
- Decision tables for complex calculation rules
- Comparison with reference implementations or manual calculations
- Testing with extreme values that test precision limits

**Common Defects in Accuracy:**
- Rounding errors in financial calculations
- Floating-point precision issues
- Incorrect formulas or algorithms
- Unit conversion errors
- Truncation instead of rounding

---

## ⭐ 3.3 Suitability Testing

### 🔷 What is Suitability? (K2)

Suitability is the degree to which a product provides functions that meet stated and implied needs of users when used under specified conditions.

**Sub-characteristics:**
- **Functional completeness:** All required functions are provided
- **Functional appropriateness:** Functions facilitate task completion

**Testing Suitability:**
- Verify all requirements are implemented
- Verify functions work appropriately for the intended context
- Test that the system supports all stated user goals
- Identify missing or incomplete features

**Example:**
> An e-commerce system must support: browsing, search, cart, checkout, payment, order tracking.
>
> Suitability test: Verify each function exists and supports the user's shopping workflow.

**Test Techniques for Suitability:**
- Requirements coverage analysis
- Use case testing (main and alternative flows)
- Checklist-based testing against requirements
- User acceptance testing

**Common Defects in Suitability:**
- Missing features specified in requirements
- Features that don't match user needs
- Inappropriate defaults or workflows
- Incomplete support for business processes

---

## ⭐ 3.4 Interoperability Testing

### 🔷 What is Interoperability? (K2)

Interoperability is the degree to which a product can exchange information with other products and mutually use the information that has been exchanged.

**Sub-characteristics:**
- **Interoperability:** Exchange and use information with other systems
- **Co-existence:** Operate alongside other products without adverse effects

**Testing Interoperability:**
- Test data exchange between systems (file formats, APIs, protocols)
- Test operation in environments with other software
- Verify backward and forward compatibility
- Test integration with third-party systems

**Example:**
> A CRM system must integrate with an email marketing platform via REST API.
>
> Interoperability test: Verify data sync (contacts, campaigns), error handling, data format compliance, API version compatibility.

**Test Techniques for Interoperability:**
- Interface testing (API contract testing)
- Data format validation (XML, JSON, CSV schema validation)
- Protocol compliance testing
- End-to-end integration testing
- Version compatibility testing

**Common Defects in Interoperability:**
- Data format mismatches
- Protocol version incompatibilities
- Character encoding issues
- API schema changes breaking integrations
- Missing error handling for integration failures

---

## 🔒 3.5 Security Testing

### 🔒 What is Security? (K2, K3)

Security is the degree to which a product protects information and data so that persons or other products have the degree of data access appropriate to their types and levels of authorization.

**Sub-characteristics:**
- **Confidentiality:** Data is accessible only to authorized persons
- **Integrity:** Unauthorized modification of data is prevented
- **Availability:** Authorized access is provided when required
- **Non-repudiation:** Actions or events can be proven to have taken place
- **Accountability:** Actions of an entity can be traced uniquely to the entity
- **Authenticity:** Identity of a subject or resource can be proved

**Testing Security:**

**1. Confidentiality Testing:**
- Verify access controls (authentication and authorization)
- Test that users cannot access data they are not authorized to see
- Test role-based access control (RBAC)
- Verify data encryption (in transit and at rest)
- Test session management (timeout, token expiration)

**2. Integrity Testing:**
- Verify data cannot be modified by unauthorized users
- Test input validation (prevent injection attacks)
- Verify checksums and digital signatures
- Test concurrency control (prevent race conditions)
- Verify audit trails log all modifications

**3. Availability Testing:**
- Test denial-of-service resilience
- Verify backup and recovery procedures
- Test failover mechanisms
- Measure uptime and response under load

**Common Security Vulnerabilities to Test:**

| Vulnerability | Test Approach |
|--------------|--------------|
| SQL Injection | Input invalid SQL in form fields; verify rejection |
| XSS (Cross-Site Scripting) | Input scripts in text fields; verify sanitization |
| CSRF | Attempt unauthorized state-changing requests |
| Broken Authentication | Test password policies, session fixation, brute force |
| Sensitive Data Exposure | Verify encryption, check for data in logs/URLs |
| Broken Access Control | Attempt to access admin functions as regular user |
| Security Misconfiguration | Verify default settings, unnecessary features disabled |
| Insecure Deserialization | Test object deserialization with malicious payloads |

**Security Testing Techniques:**
- Penetration testing (ethical hacking)
- Vulnerability scanning (automated tools)
- Code review for security patterns
- Fuzz testing (random input to find crashes/vulnerabilities)
- Threat modeling (identifying potential attack vectors)

**Security Testing Tools:**
- OWASP ZAP (web app vulnerability scanner)
- Burp Suite (web proxy and scanner)
- Nessus (network vulnerability scanner)
- Metasploit (penetration testing framework)
- SonarQube (static analysis with security rules)

**Common Defects in Security:**
- Missing input validation
- Weak password policies
- Session tokens in URLs
- Sensitive data in logs
- Missing encryption for data in transit
- Privilege escalation vulnerabilities
- Information leakage in error messages

---

## ⭐ 3.6 Reliability Testing

### 🔷 What is Reliability? (K2, K3)

Reliability is the degree to which a product performs specified functions under specified conditions for a specified period of time.

**Sub-characteristics:**
- **Maturity:** Frequency of failure due to faults in the software
- **Availability:** System is operational and accessible when required
- **Fault Tolerance:** System operates as intended despite hardware or software faults
- **Recoverability:** Ability to recover data and restore the system after failure

**Testing Reliability:**

**1. Maturity Testing:**
- Measure defect density over time
- Track mean time between failures (MTBF)
- Conduct stability testing (long-running tests)
- Monitor for memory leaks and resource exhaustion

**2. Availability Testing:**
- Measure uptime percentage (e.g., 99.9% = 8.76 hours downtime/year)
- Test scheduled maintenance windows
- Verify redundant systems take over during failures

**3. Fault Tolerance Testing:**
- Simulate component failures (disconnect database, kill services)
- Verify graceful degradation
- Test redundancy mechanisms
- Verify error handling under failure conditions

**4. Recoverability Testing:**
- Test backup and restore procedures
- Verify data consistency after recovery
- Test disaster recovery scenarios
- Measure recovery time objective (RTO) and recovery point objective (RPO)

**Reliability Metrics:**

| Metric | Formula | What It Measures |
|--------|---------|-----------------|
| MTBF | Total operational time / Number of failures | Average time between failures |
| MTTR | Total repair time / Number of repairs | Average time to repair |
| Availability | MTBF / (MTBF + MTTR) | Percentage of time system is available |
| Defect Density | Defects found / Size (KLOC, FP) | Number of defects per unit of size |
| Failure Rate | Number of failures / Total time | Frequency of failures |

**Test Techniques for Reliability:**
- Stress testing (push beyond normal limits)
- Endurance testing (long-duration tests)
- Failover testing (simulate component failure)
- Recovery testing (test backup/restore)
- Chaos engineering (random failure injection)

**Common Defects in Reliability:**
- Memory leaks
- Resource exhaustion (connections, file handles, disk space)
- Race conditions in concurrent systems
- Unhandled exceptions causing crashes
- Data corruption during failures
- Incomplete recovery procedures

---

## ⭐ 3.7 Efficiency Testing

### 🔷 What is Efficiency? (K2, K3)

Efficiency (Performance Efficiency) is the performance relative to the amount of resources used under stated conditions.

**Sub-characteristics:**
- **Time Behavior:** Response and processing times
- **Resource Utilization:** Amount and types of resources used
- **Capacity:** Maximum limits of the product

**Testing Efficiency:**

**1. Time Behavior Testing:**
- Measure response times for user actions
- Measure transaction processing times
- Test under various load levels
- Identify bottlenecks in processing

**2. Resource Utilization Testing:**
- Monitor CPU usage during operations
- Monitor memory consumption
- Monitor disk I/O and network bandwidth
- Identify resource leaks

**3. Capacity Testing:**
- Determine maximum number of concurrent users
- Determine maximum data volume handled
- Test database size limits
- Test file upload size limits

**Types of Performance Testing:**

| Test Type | Purpose | When to Use |
|-----------|---------|-------------|
| Load Testing | Test system under expected load | Validate performance at normal capacity |
| Stress Testing | Test system beyond expected load | Identify breaking points and graceful degradation |
| Endurance Testing | Test system under sustained load | Find memory leaks and degradation over time |
| Spike Testing | Test sudden load increases | Validate handling of traffic spikes |
| Volume Testing | Test with large data volumes | Validate database and storage performance |
| Scalability Testing | Test ability to scale up/down | Validate architecture for growth |

**Performance Metrics:**

| Metric | Description | Target Example |
|--------|-------------|---------------|
| Response Time | Time from request to response | < 2 seconds for page load |
| Throughput | Transactions per second | 1000 transactions/second |
| Concurrent Users | Simultaneous active users | Support 10,000 concurrent users |
| CPU Utilization | Percentage of CPU used | < 70% at peak load |
| Memory Usage | RAM consumed | < 8GB at peak load |
| Error Rate | Failed requests percentage | < 0.1% |

**Performance Testing Tools:**
- JMeter (load testing)
- LoadRunner (enterprise load testing)
- Gatling (code-based load testing)
- Apache Bench (simple HTTP benchmarking)
- New Relic / Dynatrace (application performance monitoring)

**Common Defects in Efficiency:**
- Slow database queries (missing indexes, N+1 queries)
- Memory leaks
- Inefficient algorithms (O(n^2) where O(n) is possible)
- Blocking operations in asynchronous contexts
- Unnecessary network calls
- Large resource files (images, scripts) not optimized

---

## 🤖 3.8 Maintainability Testing

### 🤖 What is Maintainability? (K2)

Maintainability is the degree of effectiveness and efficiency with which a product can be modified to improve it, correct it, or adapt it to changes in environment, requirements, or functional specifications.

**Sub-characteristics:**
- **Modularity:** System is composed of discrete components
- **Reusability:** Assets can be used in other systems
- **Analysability:** Ease of assessing the impact of changes
- **Modifiability:** Ease of making changes
- **Testability:** Ease of testing the system

**Testing Maintainability:**

**1. Analysability Testing:**
- Review code structure and documentation
- Assess traceability from requirements to code
- Evaluate logging and monitoring capabilities
- Verify error messages are meaningful

**2. Modifiability Testing:**
- Make controlled changes and measure time required
- Assess coupling and cohesion
- Verify configuration-driven behavior (not hard-coded)
- Test that changes don't have unexpected side effects

**3. Testability Testing:**
- Verify hooks and interfaces for testing exist
- Assess controllability (can you set the system to a desired state?)
- Assess observability (can you see what the system is doing?)
- Verify test automation is feasible

**Maintainability Testing Techniques:**
- Static analysis (code complexity, coupling, cohesion)
- Code reviews
- Change impact analysis
- Technical debt assessment

**Maintainability Metrics:**

| Metric | Description |
|--------|-------------|
| Cyclomatic Complexity | Number of independent paths through code |
| Lines of Code (LOC) | Size of modules |
| Code Duplication | Percentage of duplicated code |
| Coupling Between Objects | Dependencies between modules |
| Comment Density | Ratio of comments to code |

**Common Defects in Maintainability:**
- High cyclomatic complexity
- Tight coupling between modules
- Lack of documentation
- Hard-coded values
- Monolithic architecture
- Inconsistent coding standards

---

## ⭐ 3.9 Portability Testing

### 🔷 What is Portability? (K2)

Portability is the degree of effectiveness and efficiency with which a product can be transferred from one hardware, software, or other operational usage environment to another.

**Sub-characteristics:**
- **Adaptability:** Can the system be adapted for different environments?
- **Installability:** Ease of installation in specified environments
- **Replaceability:** Can the system replace another system?

**Testing Portability:**

**1. Adaptability Testing:**
- Test on different operating systems
- Test with different browsers
- Test with different database versions
- Test with different hardware configurations

**2. Installability Testing:**
- Test installation on clean systems
- Test upgrade from previous versions
- Test uninstallation and reinstallation
- Test silent/automated installation
- Verify installation documentation accuracy

**3. Replaceability Testing:**
- Test migration from legacy systems
- Verify data conversion accuracy
- Test coexistence with previous version
- Verify backward compatibility

**Portability Testing Techniques:**
- Cross-browser testing
- Cross-platform testing
- Installation testing
- Migration testing
- Compatibility testing

**Common Defects in Portability:**
- OS-specific file paths (e.g., Windows backslashes vs. Unix forward slashes)
- Browser-specific features not supported
- Database-specific SQL syntax
- Hard-coded screen resolutions
- Missing dependencies on target systems

---

## 💡 Worked Examples — Applying Chapter 3 Concepts

### 💡 Worked Example 1: Selecting Quality Characteristics

**Scenario:** A hospital is deploying a new patient monitoring system. The system must:
1. Correctly calculate medication dosages based on patient weight
2. Send alerts to nurses' mobile devices when vital signs are abnormal
3. Integrate with the existing electronic health record (EHR) system
4. Protect patient data from unauthorized access
5. Continue operating during network outages
6. Support 500 concurrent patient monitors
7. Allow nurses to customize alert thresholds

**Task:** For each requirement, identify the primary quality characteristic being tested and suggest appropriate test types.

**Answers:**

| Requirement | Quality Characteristic | Test Types |
|---|---|---|
| 1. Correct medication dosages | **Accuracy** | Functional correctness testing, BVA on weight ranges, reference calculation comparison |
| 2. Alerts to mobile devices | **Reliability** (Availability) | End-to-end testing, notification delivery testing, timeout testing |
| 3. EHR integration | **Interoperability** | API testing, data format validation, error handling for integration failures |
| 4. Patient data protection | **Security** (Confidentiality) | Access control testing, penetration testing, encryption verification |
| 5. Operation during outages | **Reliability** (Fault Tolerance) | Failover testing, offline mode testing, graceful degradation testing |
| 6. 500 concurrent monitors | **Efficiency** (Capacity) | Load testing, stress testing, resource utilization monitoring |
| 7. Customizable thresholds | **Maintainability** (Modifiability) | Configuration testing, change impact testing |

**Key exam insight:** One requirement may test multiple characteristics. The "primary" characteristic is the one most directly addressed.

---

### 💡 Worked Example 2: Security Testing Scenario

**Scenario:** An online banking application has the following features:
- User login with username and password
- View account balances
- Transfer funds between own accounts
- Transfer funds to external accounts (requires additional authentication)
- Download statements as PDF
- Update personal information

**Task:** For each feature, identify a security risk and propose a test to verify the security control.

**Answers:**

| Feature | Security Risk | Security Test |
|---|---|---|
| User login | Brute force password guessing | Test account lockout after 3 failed attempts |
| View balances | Session hijacking | Test that session expires after inactivity; test session token regeneration |
| Internal transfer | CSRF attack | Test that transfers require valid CSRF token; test direct POST without token fails |
| External transfer | Unauthorized large transfers | Test that external transfers require additional authentication (OTP, etc.) |
| Download PDF | Sensitive data exposure in logs | Verify PDF generation does not log account numbers; verify URL does not expose file path |
| Update info | Privilege escalation | Test that users can only update their own information, not others' |

**Key exam insight:** Security testing requires thinking like an attacker. For each feature, ask: "How could someone abuse this?"

---

### 💡 Worked Example 3: Performance Testing Design

**Scenario:** An e-commerce website must handle Black Friday traffic. Expected peak: 50,000 concurrent users, 5,000 orders per minute, 95% of page loads under 2 seconds.

**Task:** Design a performance test strategy that validates all requirements.

**Answer:**

**1. Load Testing (Normal Peak):**
- Simulate 50,000 concurrent users browsing products
- Measure response times for: homepage, product page, cart, checkout
- Verify 95% of page loads are under 2 seconds
- Measure throughput: orders per minute

**2. Stress Testing (Beyond Peak):**
- Gradually increase to 75,000 concurrent users
- Identify the breaking point where response times exceed 2 seconds
- Observe graceful degradation (does the site show a queue page or crash?)
- Measure recovery time after load returns to normal

**3. Endurance Testing (Sustained Load):**
- Run 50,000 concurrent users for 8 hours
- Monitor for memory leaks (memory should not grow unbounded)
- Monitor for connection pool exhaustion
- Verify database performance does not degrade over time

**4. Spike Testing (Sudden Traffic):**
- Simulate traffic going from 5,000 to 50,000 users in 5 minutes
- Verify auto-scaling triggers correctly
- Verify CDN and caching handle the spike
- Measure time to stabilize after spike

**5. Capacity Testing (Data Volume):**
- Test with product catalog of 1,000,000 products
- Test search with large result sets
- Verify database query performance at scale

**Metrics to Collect:**
- Response time (50th, 95th, 99th percentile)
- Throughput (requests/second, orders/minute)
- Error rate
- CPU and memory utilization
- Database query execution time
- Network bandwidth utilization

**Key exam insight:** Different performance test types validate different aspects. Load testing validates requirements. Stress testing finds limits. Endurance testing finds degradation. Spike testing validates handling of sudden traffic.
