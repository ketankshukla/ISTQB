# 📘 Chapter 1 — Risk-Based Testing: Lessons

---

## ⚠️ 1.1 Risk-Based Testing from a Technical Perspective

### ⚠️ What Is Risk-Based Testing?

Risk-based testing (RBT) prioritizes test design, implementation, and execution based on the assessed risk of failure and the impact of that failure. While test managers focus on project and business risks, technical test analysts focus on **technical risks**.

### ⚠️ Technical Risks

Technical risks are risks related to the quality and behavior of the software product from a technical standpoint. The technical test analyst is particularly concerned with:

**1. Code Complexity Risks:**
- Highly complex modules are more likely to contain defects
- Complex code is harder to maintain and test
- Complex modules may have hidden interactions

**2. Technology Risks:**
- New or unproven technologies
- Complex integrations with third-party systems
- Legacy technology with limited support

**3. Security Risks:**
- Authentication and authorization vulnerabilities
- Data protection weaknesses
- Input validation failures
- Injection attacks (SQL, command, XSS)

**4. Performance Risks:**
- Slow response times under load
- Memory leaks
- Resource exhaustion
- Scalability limitations

**5. Reliability Risks:**
- System crashes or hangs
- Data corruption
- Recovery failures
- Concurrent access issues

**6. Maintainability Risks:**
- Poor code structure
- Lack of documentation
- High technical debt
- Difficult-to-test design

### ⚠️ The Technical Test Analyst's Role in Risk-Based Testing

**Risk Identification:**
- Review architecture and design documents for technical risks
- Analyze code for complexity hotspots
- Identify areas with historical defect clusters
- Assess security and performance risks

**Risk Assessment:**
- Evaluate likelihood based on complexity, technology, and history
- Evaluate impact based on system criticality and user exposure
- Calculate risk priority = likelihood x impact

**Risk Mitigation Through Testing:**
- Select appropriate test techniques for each risk type
- Allocate more testing effort to higher-risk areas
- Use static analysis to find defects early
- Use dynamic analysis to verify runtime behavior

---

## 🎯 1.2 Matching Techniques to Technical Risks

### 🎯 Risk-Based Technique Selection

| Technical Risk | Appropriate Techniques |
|----------------|----------------------|
| Complex code with many paths | Control flow testing, path coverage, cyclomatic complexity analysis |
| Data handling errors | Data flow testing, boundary value analysis, static analysis |
| Security vulnerabilities | Static security analysis (SAST), penetration testing, fuzz testing |
| Performance issues | Performance profiling, load testing, stress testing |
| Memory problems | Memory profiling, dynamic analysis, static analysis |
| Integration failures | API testing, interface testing, component testing |
| Concurrency issues | Thread safety analysis, race condition detection, stress testing |

### 💡 Example: Risk-Based Technique Selection

**Scenario:** A financial trading application has the following technical risks:

**Risk 1: Order processing module has cyclomatic complexity of 25**
- Likelihood: High (complex code)
- Impact: Critical (financial loss)
- **Selected techniques:**
  - Control flow testing with branch coverage
  - Decision table testing for business rules
  - Static analysis for additional complexity metrics

**Risk 2: User authentication uses a custom encryption algorithm**
- Likelihood: Medium (custom crypto is error-prone)
- Impact: Critical (security breach)
- **Selected techniques:**
  - Static security analysis (SAST)
  - Penetration testing
  - Threat modeling
  - Peer review by security expert

**Risk 3: System must process 10,000 trades per second**
- Likelihood: Medium (performance targets are tight)
- Impact: High (business cannot operate)
- **Selected techniques:**
  - Performance profiling to identify bottlenecks
  - Load testing at target throughput
  - Stress testing beyond target
  - Scalability testing with increasing load

**Risk 4: Third-party payment gateway integration**
- Likelihood: Medium (external dependency)
- Impact: Critical (cannot process payments)
- **Selected techniques:**
  - Interface testing
  - API testing with error simulation
  - Contract testing
  - Failover and timeout testing

---

## 🎯 1.3 Risk Identification Techniques for Technical Testers

### 🔬 FMEA (Failure Mode and Effects Analysis)

**Process:**
1. Identify all components and functions
2. For each, identify potential failure modes
3. Determine the effect of each failure
4. Assess severity, likelihood, and detectability
5. Calculate Risk Priority Number (RPN) = Severity x Likelihood x Detectability
6. Prioritize mitigation efforts

**Example FMEA for a Login Function:**

| Component | Failure Mode | Effect | Severity | Likelihood | Detectability | RPN |
|-----------|-------------|--------|----------|-----------|--------------|-----|
| Password validation | SQL injection via password field | Database breach | 10 | 6 | 3 | 180 |
| Session token | Token not invalidated on logout | Session hijacking | 8 | 5 | 4 | 160 |
| Login rate limit | Missing rate limiting | Brute force attack | 9 | 7 | 2 | 126 |
| Password hash | Weak hashing algorithm | Password cracking | 8 | 4 | 5 | 160 |

**Interpretation:**
- SQL injection (RPN 180) and weak hashing (RPN 160) are highest priority
- Testing should focus on input validation and password storage

### 🔬 Fault Tree Analysis

**Purpose:** A top-down approach to identify the combinations of events that can lead to a specific system failure.

**Process:**
1. Define the top-level failure event
2. Identify the immediate causes
3. Continue breaking down until basic events are reached
4. Use Boolean logic (AND, OR gates) to model relationships
5. Identify the minimal cut sets (smallest combination of events that cause the failure)

**Example:**
```
[SYSTEM CRASH]
    OR
    +-- [Memory Exhaustion]
    |       AND
    |       +-- [Memory Leak]
    |       +-- [Extended Uptime]
    |
    +-- [Unhandled Exception]
    |       OR
    |       +-- [Null Pointer]
    |       +-- [Divide by Zero]
    |
    +-- [Database Connection Lost]
            AND
            +-- [Network Failure]
            +-- [No Retry Logic]
```

**Testing Implications:**
- Test memory leak detection under extended operation
- Test exception handling for null inputs and division operations
- Test database connection recovery under network failure

---

## ⚠️ 1.4 Risk Mitigation through Technical Testing

### 🔷 Mitigation Strategies

**1. Prevent Defects (Shift Left):**
- Static analysis during development
- Code reviews focused on high-risk areas
- Design reviews for security and performance

**2. Detect Defects Early:**
- Component testing with white-box techniques
- Integration testing with interface validation
- Security testing before deployment

**3. Reduce Impact:**
- Error handling and recovery testing
- Failover testing
- Graceful degradation testing

**4. Monitor in Production:**
- Application performance monitoring (APM)
- Security monitoring and intrusion detection
- Error tracking and alerting

### 💡 Worked Example

**Scenario:** A new payment processing module has been identified as high-risk due to:
- Complex business rules (15 decision points)
- Financial transaction handling
- Integration with external payment gateway
- PCI DSS compliance requirements

**Risk-Based Test Plan:**

| Risk Area | Test Technique | Coverage Target |
|-----------|---------------|-------------------|
| Business rules complexity | Decision table testing + branch coverage | 100% branch coverage |
| Financial calculation accuracy | Boundary value analysis + equivalence partitioning | All boundary conditions |
| External integration | API testing with error simulation | All error responses |
| PCI DSS compliance | Static security analysis + penetration testing | No high/critical vulnerabilities |
| Performance under load | Load testing at 2x expected peak | Response time < 2 seconds |
| Data integrity | Database transaction testing | All commit/rollback scenarios |
