# 📂 Case Study 1 — Risk-Based Testing and White-Box Techniques

## ⭐ Context

You are the Technical Test Analyst for HealthBridge, a healthcare software company developing a new patient records system. The system includes:

- **Patient data module:** Stores personal health information (PHI)
- **Order processing module:** Processes medication and lab orders
- **Billing module:** Calculates and processes insurance claims
- **Integration layer:** Connects to external pharmacies and labs

## ⚠️ Task 1: Technical Risk Identification

**Question:** Identify the top 5 technical risks for this system.

**Model Answer:**

| Risk ID | Technical Risk | Likelihood | Impact | Priority |
|---------|-------------|-----------|--------|----------|
| R1 | Patient data is accessed without authorization (security) | Medium | Critical | Very High |
| R2 | Order processing fails under peak load (performance) | Medium | High | High |
| R3 | Billing calculation errors due to complex business rules (functional) | High | Critical | Very High |
| R4 | Integration failures with external pharmacy systems (reliability) | Medium | High | High |
| R5 | Data corruption during system crashes (reliability) | Low | Critical | High |

---

## 🎯 Task 2: White-Box Technique Selection

**Question:** For each identified risk, select appropriate white-box or technical test techniques.

**Model Answer:**

| Risk | Selected Techniques | Rationale |
|------|-------------------|-----------|
| R1 (Security) | SAST, penetration testing, input validation testing | Find vulnerabilities in code and at runtime |
| R2 (Performance) | Performance profiling, load testing | Identify bottlenecks and validate throughput |
| R3 (Billing logic) | Decision table testing, branch coverage, boundary value analysis | Complex rules require structured testing |
| R4 (Integration) | Interface testing, contract testing, error simulation | Validate external system interactions |
| R5 (Data corruption) | Recovery testing, transaction integrity testing | Verify data persistence after failures |

---

## 📊 Task 3: Coverage Analysis

**Question:** The `calculateInsuranceClaim` function has the following code:
```
function calculateInsuranceClaim(amount, isCovered, deductible) {
    if (amount <= 0) {
        return 0;
    }
    if (!isCovered) {
        return 0;
    }
    claim = amount - deductible;
    if (claim < 0) {
        claim = 0;
    }
    return claim;
}
```

What is the cyclomatic complexity? What is the minimum number of test cases for 100% branch coverage?

**Model Answer:**

**Cyclomatic Complexity:**
- Decision points: 3 (`amount <= 0`, `!isCovered`, `claim < 0`)
- V(G) = 3 + 1 = 4

**Branch Coverage Minimum Test Cases:**

| Test Case | amount | isCovered | deductible | Branches Covered |
|-----------|--------|-----------|------------|-----------------|
| TC1 | -10 | true | 100 | amount <= 0: true |
| TC2 | 500 | false | 100 | amount <= 0: false, isCovered: false |
| TC3 | 500 | true | 100 | amount <= 0: false, isCovered: true, claim < 0: false |
| TC4 | 500 | true | 600 | amount <= 0: false, isCovered: true, claim < 0: true |

**Minimum: 4 test cases** (but could be optimized if some tests cover multiple new branches).

Actually, let's verify:
- TC1 covers: `amount <= 0` = true
- TC2 covers: `amount <= 0` = false, `isCovered` = false
- TC3 covers: `amount <= 0` = false, `isCovered` = true, `claim < 0` = false
- TC4 covers: `claim < 0` = true

All branches are covered with 4 test cases. Can we do it in 3?
- Need: amount<=0 (T and F), isCovered (T and F), claim<0 (T and F)
- To get claim<0=true, need amount > 0, isCovered=true, deductible > amount
- That test also gives amount<=0=false, isCovered=true
- So: TC1(amount=-10), TC2(amount=500, isCovered=false), TC4(amount=500, isCovered=true, deductible=600)
- Missing: isCovered=true + claim<0=false (i.e., normal successful claim)
- Need one more: TC3(amount=500, isCovered=true, deductible=100)

So minimum is 4. Wait, can TC2 be eliminated? We need isCovered=false somewhere. Could we have a test with amount<=0=false and isCovered=false? Yes, that's TC2. Could that same test also cover something else? No, because it returns 0 early.

Minimum = 4 test cases.

---

## 🔍 Task 4: Static Analysis Recommendations

**Question:** What static analysis checks would you recommend for this healthcare system?

**Model Answer:**

| Check Category | Specific Checks | Severity |
|----------------|-----------------|----------|
| Security | Hardcoded credentials, weak cryptography, SQL injection patterns | Blocker |
| Privacy | Logging of PHI, unencrypted data storage | Blocker |
| Reliability | Null pointer dereferences, unhandled exceptions | Critical |
| Maintainability | Cyclomatic complexity > 10, duplicate code | Major |
| Standards | HIPAA coding standards, naming conventions | Minor |

---

## 🛠️ Task 5: Test Tool Selection

**Question:** Select tools for the testing activities identified.

**Model Answer:**

| Activity | Tool | Reason |
|----------|------|--------|
| Unit testing | JUnit + Mockito | Java ecosystem, mocking for isolation |
| Coverage | JaCoCo | Branch and MC/DC coverage for Java |
| Static analysis | SonarQube + Checkmarx | Quality + security scanning |
| Performance | JMeter + JProfiler | Load testing + profiling |
| Security testing | OWASP ZAP + Burp Suite | DAST for web vulnerabilities |
