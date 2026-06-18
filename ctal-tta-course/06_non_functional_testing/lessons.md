# 📘 Chapter 6 — Non-Functional Testing: Lessons

---

## ⚡ 6.1 Performance Testing

### 🧪 Performance Testing Types

**1. Load Testing:**
- Tests system behavior under expected user load
- Validates response times, throughput, resource utilization at normal capacity
- **Goal:** Does the system meet performance requirements under normal load?
- **Example:** Test with 1,000 concurrent users (expected peak)

**2. Stress Testing:**
- Tests system behavior beyond normal capacity
- Finds the breaking point and observes recovery
- **Goal:** What happens when the system is overloaded?
- **Example:** Gradually increase to 10,000 users until system fails

**3. Soak Testing (Endurance Testing):**
- Tests system behavior over an extended period under expected load
- Detects memory leaks, resource exhaustion, gradual degradation
- **Goal:** Does the system remain stable over time?
- **Example:** Run at 80% capacity for 72 hours

**4. Spike Testing:**
- Tests sudden, extreme increases in load
- Simulates traffic bursts (e.g., flash sales, viral content)
- **Goal:** Can the system handle sudden traffic spikes?
- **Example:** Jump from 100 to 5,000 users in 1 minute

**5. Scalability Testing:**
- Tests the system's ability to handle increasing load by adding resources
- Validates horizontal/vertical scaling
- **Goal:** Can the system scale to meet growing demand?
- **Example:** Add servers and measure if throughput increases proportionally

**6. Volume Testing:**
- Tests system behavior with large volumes of data
- Database performance with millions of records
- **Goal:** Does the system handle large datasets efficiently?

### 📊 Performance Metrics

| Metric | Definition | Target Example |
|--------|-----------|----------------|
| Response Time | Time from request to response | < 2 seconds for 95% of requests |
| Throughput | Number of requests processed per unit time | > 1,000 transactions/second |
| Latency | Time before the first response byte | < 100 ms |
| Resource Utilization | CPU, memory, disk, network usage | CPU < 70%, Memory < 80% |
| Error Rate | Percentage of failed requests | < 0.1% |
| Concurrent Users | Number of simultaneous active users | Support 10,000 |

### ⚡ Performance Test Environment

**Requirements:**
- Production-like hardware and network
- Production-like data volumes
- Realistic user behavior patterns
- Isolated from production (no impact on live users)

**Environment Types:**
- **Dedicated performance environment:** Replicates production
- **Scaled-down environment:** Smaller but proportionally representative
- **Cloud-based on-demand:** Spin up for testing, tear down after

### 🎨 Performance Test Design

**1. Define Performance Requirements:**
- Response time thresholds
- Throughput targets
- Concurrent user limits
- Resource utilization limits

**2. Design Realistic Scenarios:**
- Most common user journeys
- Business-critical transactions
- Peak load patterns
- Mix of read/write operations

**3. Create Test Scripts:**
- Parameterize data to avoid caching effects
- Include think time (pauses between user actions)
- Simulate realistic user behavior patterns

**4. Execute and Monitor:**
- Start with baseline (single user)
- Gradually increase load
- Monitor system metrics throughout
- Record results at each load level

**5. Analyze and Report:**
- Identify bottlenecks
- Compare against requirements
- Recommend optimizations

---

## 🔒 6.2 Security Testing

### 🧪 Security Testing Types

**1. SAST (Static Application Security Testing):**
- Analyzes source code without execution
- Finds vulnerabilities in code (injection points, weak crypto, hardcoded secrets)
- **When:** During development, in CI/CD pipeline
- **Tools:** SonarQube, Checkmarx, Fortify

**2. DAST (Dynamic Application Security Testing):**
- Tests running application by simulating attacks
- Finds exploitable vulnerabilities (XSS, SQL injection, insecure configuration)
- **When:** In test environment, before deployment
- **Tools:** OWASP ZAP, Burp Suite

**3. Penetration Testing:**
- Manual or automated simulation of real-world attacks
- Attempts to exploit vulnerabilities to assess impact
- **When:** Before major releases, annually for compliance
- **Tools:** Metasploit, manual testing by security experts

**4. Vulnerability Scanning:**
- Automated scanning for known vulnerabilities
- Checks against databases of known issues (CVE)
- **When:** Regularly, continuously in production
- **Tools:** Nessus, Qualys, OpenVAS

**5. Fuzz Testing:**
- Sends random, malformed, or unexpected inputs to the application
- Discovers crashes, memory corruption, or unhandled exceptions
- **When:** During development and testing
- **Tools:** AFL, Peach Fuzzer, libFuzzer

### 🔒 Common Security Vulnerabilities

| Vulnerability | Description | Test Technique |
|---------------|-------------|----------------|
| SQL Injection | Inserting SQL commands via user input | DAST, manual injection tests, parameterized query review |
| XSS (Cross-Site Scripting) | Injecting malicious scripts into web pages | DAST, input validation testing, output encoding review |
| CSRF (Cross-Site Request Forgery) | Forcing users to perform unwanted actions | Token validation tests, state change verification |
| Authentication Bypass | Gaining access without valid credentials | Brute force testing, session manipulation, direct URL access |
| Insecure Direct Object Reference | Accessing unauthorized resources by modifying references | ID manipulation tests, authorization boundary testing |
| Sensitive Data Exposure | Transmitting or storing sensitive data without protection | Encryption verification, secure transmission testing |
| Security Misconfiguration | Default settings, unnecessary features, error messages | Configuration review, hardening checklists |
| Broken Access Control | Users accessing resources beyond their permissions | Role-based access testing, privilege escalation tests |

### 🔒 Security Testing Process

**Phase 1: Planning**
- Define scope (what to test, what to exclude)
- Identify compliance requirements (PCI DSS, HIPAA, GDPR)
- Obtain authorization (penetration testing requires permission)

**Phase 2: Discovery**
- Map application attack surface
- Identify entry points and data flows
- Inventory technologies and frameworks

**Phase 3: Vulnerability Assessment**
- Run automated scans (SAST, DAST)
- Manual code review for critical components
- Configuration review

**Phase 4: Exploitation**
- Attempt to exploit identified vulnerabilities
- Assess impact of successful exploitation
- Document proof of concept

**Phase 5: Reporting**
- Classify vulnerabilities by severity
- Provide remediation guidance
- Risk assessment for each finding

---

## ⭐ 6.3 Reliability Testing

### 🔷 Reliability Concepts

**Reliability:** The ability of a system to operate without failure under given conditions for a given time.

**Availability:** The percentage of time the system is operational.
```
Availability = MTBF / (MTBF + MTTR)
```
Where:
- MTBF = Mean Time Between Failures
- MTTR = Mean Time To Repair/Recover

### 🧪 Reliability Testing Types

**1. Availability Testing:**
- Measures uptime vs. downtime
- Validates the system meets availability targets (e.g., 99.9% = 8.76 hours downtime/year)
- **Technique:** Monitor system over extended period

**2. Recovery Testing:**
- Verifies the system recovers correctly from failures
- Tests backup/restore procedures
- **Scenarios:**
  - Database crash and restart
  - Server failure and failover
  - Network partition and reconnection
  - Power loss and restart

**3. Failover Testing:**
- Verifies backup systems take over when primary fails
- Measures failover time
- **Technique:** Simulate primary system failure, verify backup takes over

**4. Disaster Recovery Testing:**
- Tests complete system recovery from catastrophic failure
- Validates data integrity after recovery
- **Technique:** Restore from backups to clean environment

### 📊 Reliability Metrics

| Metric | Definition | Example Target |
|--------|-----------|----------------|
| MTBF | Mean Time Between Failures | > 720 hours |
| MTTR | Mean Time To Repair | < 1 hour |
| Availability | Uptime percentage | 99.95% |
| Error Rate | Failures per transaction | < 0.01% |

---

## ⭐ 6.4 Compatibility Testing

### 🧪 Compatibility Testing Types

**1. Browser Compatibility:**
- Test on different browsers (Chrome, Firefox, Safari, Edge)
- Test different versions of each browser
- Check rendering, JavaScript, CSS compatibility

**2. Operating System Compatibility:**
- Test on different OS versions (Windows 10/11, macOS, Linux distributions)
- Check installation, file paths, system calls

**3. Device Compatibility:**
- Test on different devices (desktop, tablet, mobile)
- Check responsive design, touch interactions, screen sizes

**4. Backward Compatibility:**
- New version works with old data/formats
- Old clients work with new API versions

**5. Forward Compatibility:**
- Old version tolerates new data/formats
- Graceful handling of unknown features

**6. Network Compatibility:**
- Works on different network speeds (3G, 4G, 5G, Wi-Fi)
- Handles intermittent connectivity

### ♟️ Compatibility Testing Strategy

**Matrix Approach:**

| Browser | Windows 10 | Windows 11 | macOS | iOS | Android |
|---------|-----------|-----------|-------|-----|---------|
| Chrome  | Must test | Must test | Must test | N/A | Must test |
| Firefox | Must test | Must test | Must test | N/A | N/A |
| Safari  | N/A | N/A | Must test | Must test | N/A |
| Edge    | Must test | Must test | N/A | N/A | N/A |

**Prioritization:**
- Test most common combinations first
- Use analytics to determine most-used platforms
- Automate compatibility tests where possible

---

## 🖱️ 6.5 Usability and Accessibility Testing

### 🖱️ Usability Testing

Usability testing evaluates how easy the system is to learn and use.

**Key Attributes (ISO 9241):**
- **Learnability:** How easy is it for users to accomplish basic tasks?
- **Efficiency:** How quickly can users perform tasks?
- **Memorability:** How easily can users reestablish proficiency after a period of not using it?
- **Errors:** How many errors do users make, and how severe are they?
- **Satisfaction:** How pleasant is it to use?

**Technical Test Analyst's Role:**
- Test error handling and error messages
- Test input validation and feedback
- Test keyboard navigation and shortcuts
- Test response times for interactive elements

### 🔷 Accessibility Testing

Accessibility testing ensures the application can be used by people with disabilities.

**WCAG 2.1 Principles (POUR):**
- **Perceivable:** Information must be presentable in ways users can perceive
- **Operable:** Interface components must be operable by all users
- **Understandable:** Information and UI operation must be understandable
- **Robust:** Content must work with current and future assistive technologies

**Technical Test Analyst's Role:**
- Test with screen readers (NVDA, JAWS, VoiceOver)
- Test keyboard-only navigation (no mouse)
- Check color contrast ratios
- Verify ARIA labels and roles
- Test zoom and text resizing

---

## 💡 Worked Examples

### 💡 Worked Example 1: Performance Test Design

**Scenario:** An e-commerce site must handle Black Friday traffic.

**Requirements:**
- Peak: 50,000 concurrent users
- Response time: < 2 seconds for 95% of requests
- Throughput: > 5,000 orders/minute
- Availability: 99.9%

**Test Plan:**

| Test Type | Load | Duration | Goal |
|-----------|------|----------|------|
| Baseline | 1 user | — | Establish baseline response time |
| Load | 50,000 users | 2 hours | Validate performance at peak |
| Stress | 100,000 users | 30 min | Find breaking point |
| Soak | 30,000 users | 72 hours | Detect memory leaks |
| Spike | 1,000 → 50,000 in 2 min | 15 min | Handle sudden traffic burst |

### 💡 Worked Example 2: Security Test Scenarios

**Scenario:** Test a web application login system.

| Test | Technique | Expected Result |
|------|-----------|-----------------|
| SQL injection in username | DAST, manual | Input sanitized, no database error |
| Brute force password | Automated script | Account locked after 5 attempts |
| XSS in search field | DAST | Script sanitized, not executed |
| Session hijacking | Manual | Session invalidated on logout |
| Direct URL access | Manual | Unauthorized access blocked |
| Password strength | Static review | Minimum complexity enforced |

### 💡 Worked Example 3: Reliability Calculation

**Given:**
- System runs for 720 hours
- 2 failures occurred
- Total repair time = 3 hours

**Calculations:**
```
MTBF = 720 hours / 2 failures = 360 hours
MTTR = 3 hours / 2 failures = 1.5 hours
Availability = 360 / (360 + 1.5) = 360 / 361.5 = 99.58%
```
