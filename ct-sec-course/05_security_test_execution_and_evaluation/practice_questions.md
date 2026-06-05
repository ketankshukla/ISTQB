# Chapter 5 — Security Test Execution and Evaluation: Practice Questions

---

### Q1 (SEC-5.1, K2)

CVSS stands for:

A. Common Verification Security System
B. Common Vulnerability Scoring System
C. Certified Vulnerability Scanning Standard
D. Comprehensive Verification Scanning Service

---

### Q2 (SEC-5.1, K2)

In CVSS v3.1, the base score considers:

A. Only the impact on confidentiality
B. The intrinsic characteristics of a vulnerability (exploitability and impact)
C. Only the temporal factors
D. Only the environmental factors

---

### Q3 (SEC-5.1, K2)

A CVSS base score of 9.5 indicates:

A. Low severity
B. Medium severity
C. High severity
D. Critical severity

---

### Q4 (SEC-5.2, K2)

When prioritizing vulnerabilities, the MOST important additional factor beyond CVSS is:

A. The color of the vulnerability report
B. Whether the affected system is internet-facing and contains sensitive data
C. The day of the week
D. The tester's opinion

---

### Q5 (SEC-5.3, K2)

A security test report should include all EXCEPT:

A. Executive summary
B. Technical findings with evidence
C. Remediation guidance
D. Marketing materials for the testing company

---

### Q6 (SEC-5.4, K2)

After fixing a vulnerability, the next step should be:

A. Close the ticket immediately
B. Verification testing to confirm the fix works and no regressions were introduced
C. Delete all test data
D. Announce the vulnerability publicly

---

### Q7 (SEC-5.5, K2)

A false positive is:

A. A vulnerability that exists but was not detected
B. A test result that incorrectly indicates a vulnerability exists when it does not
C. A correct detection of a real vulnerability
D. A missed test case

---

### Q8 (SEC-5.5, K2)

A false negative is:

A. A reported vulnerability that doesn't exist
B. A failure to detect a vulnerability that actually exists
C. A correct rejection of a non-vulnerability
D. An intentional test failure

---

### Q9 (SEC-5.1, K2)

The CVSS metric "Privileges Required" measures:

A. What privileges the attacker needs before exploiting the vulnerability
B. What privileges the attacker gains after exploitation
C. How many users are affected
D. The complexity of the attack

---

### Q10 (SEC-5.2, K3)

A vulnerability with CVSS 8.5 exists on an internal-only system with no sensitive data. Another vulnerability with CVSS 6.0 is on the public-facing login page. For remediation priority:

A. Fix the 8.5 first because CVSS is higher
B. Fix the 6.0 first because it is publicly accessible and more likely to be exploited
C. Both have equal priority
D. Neither needs fixing

---

### Q11 (SEC-5.3, K2)

A good security finding description should:

A. Be vague to avoid giving attackers ideas
B. Be specific, include evidence, affected component, and impact
C. Only mention the vulnerability name
D. Never include reproduction steps

---

### Q12 (SEC-5.4, K2)

Regression testing after a security fix ensures:

A. The fix works
B. The fix didn't break existing functionality
C. Both A and B
D. Neither A nor B

---

### Q13 (SEC-5.1, K2)

CVSS temporal metrics account for:

A. Only the code quality
B. Factors that change over time: exploit code availability, remediation level, report confidence
C. Only the number of users
D. Only the network location

---

### Q14 (SEC-5.5, K2)

Which is MORE dangerous to an organization's security posture?

A. False positives
B. False negatives
C. They are equally dangerous
D. Neither is dangerous

---

### Q15 (SEC-5.2, K2)

A vulnerability is being actively exploited in the wild. This factor should:

A. Be ignored
B. Increase remediation priority regardless of CVSS score
C. Decrease priority
D. Only matter if CVSS is above 9

---

### Q16 (SEC-5.3, K2)

The executive summary of a security report should:

A. Include every technical detail
B. Provide a high-level overview of risk posture, key findings, and recommendations for leadership
C. Only list tool names used
D. Be omitted to save time

---

### Q17 (SEC-5.1, K2)

A CVSS scope of "Changed" means:

A. The vulnerability only affects the vulnerable component
B. The vulnerability can affect resources beyond the vulnerable component's authority
C. The vulnerability has been patched
D. The vulnerability is in a test environment

---

### Q18 (SEC-5.4, K2)

Verification testing after applying a WAF rule to block SQL injection should confirm:

A. Only that the WAF is running
B. That SQL injection payloads are blocked AND legitimate traffic still works
C. That the application code was fixed
D. That logs are being generated

---

### Q19 (SEC-5.5, K2)

To reduce false positives from SAST tools:

A. Accept all findings as real
B. Tune rules, verify manually, and maintain a whitelist of accepted patterns
C. Never use SAST tools
D. Only scan production code

---

### Q20 (SEC-5.2, K2)

A risk matrix combines:

A. Only CVSS scores
B. Likelihood and impact to determine risk priority
C. Only vulnerability counts
D. Only test duration

---

## Answers and Rationales

### Q1
**Answer: B**

**Rationale:** CVSS = Common Vulnerability Scoring System.

### Q2
**Answer: B**

**Rationale:** Base score = intrinsic exploitability and impact characteristics.

### Q3
**Answer: D**

**Rationale:** 9.0-10.0 = Critical severity.

### Q4
**Answer: B**

**Rationale:** Environment context (internet-facing, sensitive data) is critical for prioritization.

### Q5
**Answer: D**

**Rationale:** Marketing materials = not a security report component.

### Q6
**Answer: B**

**Rationale:** After fix = verification testing to confirm fix and check regressions.

### Q7
**Answer: B**

**Rationale:** False positive = reported vulnerability that doesn't exist.

### Q8
**Answer: B**

**Rationale:** False negative = missed detection of real vulnerability.

### Q9
**Answer: A**

**Rationale:** Privileges Required = attacker privileges needed before exploitation.

### Q10
**Answer: B**

**Rationale:** Publicly accessible vulnerability is more exploitable regardless of lower CVSS.

### Q11
**Answer: B**

**Rationale:** Good finding = specific, with evidence, component, and impact.

### Q12
**Answer: C**

**Rationale:** Regression testing = fix works AND didn't break functionality.

### Q13
**Answer: B**

**Rationale:** Temporal metrics = changing factors (exploit availability, patch status).

### Q14
**Answer: B**

**Rationale:** False negatives = silent misses = more dangerous than false positives.

### Q15
**Answer: B**

**Rationale:** Active exploitation = higher priority regardless of CVSS.

### Q16
**Answer: B**

**Rationale:** Executive summary = high-level overview for leadership.

### Q17
**Answer: B**

**Rationale:** Scope Changed = affects resources beyond vulnerable component.

### Q18
**Answer: B**

**Rationale:** WAF verification = blocks attacks AND allows legitimate traffic.

### Q19
**Answer: B**

**Rationale:** Reduce false positives = tune rules, manual verification, whitelist patterns.

### Q20
**Answer: B**

**Rationale:** Risk matrix = likelihood × impact for prioritization.
