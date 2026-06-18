# 📂 Case Study 1 — Test Strategy and Planning

## ⭐ Context

You are the Test Manager for HealthBridge, a healthcare software company developing a new patient records system. The project has the following characteristics:

- **Scope:** Web-based patient records system with mobile app
- **Team:** 8 developers, 4 testers, 1 test manager (you), 1 business analyst
- **Timeline:** 9 months to first release
- **Regulatory requirements:** HIPAA compliance (health data privacy), FDA validation for clinical decision support
- **Budget:** $1.2M total project budget, $300K allocated for testing
- **Technology:** React frontend, Java Spring Boot backend, PostgreSQL database, AWS cloud
- **Current status:** Requirements are 80% complete. Development starts in 2 weeks.

## ⭐ Task 1: Test Organization

**Question:** What test organization structure would you recommend, and why?

**Model Answer:**

**Recommended:** Matrix organization with a dedicated test team that collaborates closely with development.

**Rationale:**
- Healthcare software requires objectivity for regulatory compliance (FDA)
- Independent perspective is needed for HIPAA security testing
- However, close collaboration is needed for fast feedback in a 9-month timeline
- A matrix allows testers to report to the test manager for testing standards while working in project teams for collaboration
- For the most critical components (clinical decision support), consider external independent testing for FDA validation

**Implementation:**
- 2 testers embedded in each development team (integration)
- 1 tester focused on security and compliance (independent perspective)
- Test manager oversees overall quality and regulatory compliance
- External lab for FDA validation testing

---

## 🔢 Task 2: Test Estimation

**Question:** Estimate the testing effort for this project.

**Model Answer:**

**Approach:** Top-down estimation using percentage of development effort, refined with bottom-up for critical areas.

**Assumptions:**
- Development effort: approximately 2,400 person-days (8 devs × 9 months × ~30 days)
- Testing typically 30-40% of development effort in healthcare

**Initial Top-Down Estimate:**
```
Testing effort = 2,400 × 0.35 = 840 person-days
```

**Bottom-Up Refinement:**

| Activity | Effort (person-days) | Notes |
|----------|---------------------|-------|
| Test planning and strategy | 30 | Includes regulatory planning |
| Requirements analysis (testability) | 40 | FDA requires traceability |
| Test design | 180 | Includes security and HIPAA tests |
| Test implementation | 120 | Automation framework setup |
| Test execution — System testing | 200 | 2 rounds expected |
| Test execution — Regression | 100 | Automated + manual |
| Performance testing | 60 | Load, stress, scalability |
| Security/HIPAA testing | 80 | Encryption, access control |
| FDA validation testing | 60 | External lab coordination |
| Defect retest | 80 | Multiple cycles expected |
| Test completion | 30 | Reports, archiving |
| Contingency (15%) | 110 | Regulatory uncertainty |
| **Total** | **1,090** | |

**Conclusion:** The bottom-up estimate (1,090 days) exceeds the top-down (840 days). The higher estimate is more realistic for a regulated healthcare project. Discuss with project manager.

---

## ♟️ Task 3: Risk-Based Test Strategy

**Question:** Identify the top 5 product risks and propose how testing will mitigate them.

**Model Answer:**

| Risk | Likelihood | Impact | Priority | Mitigation Through Testing |
|------|-----------|--------|----------|---------------------------|
| Unauthorized access to patient data | Medium | Critical | 1 | Penetration testing, role-based access control testing, audit log verification |
| Data loss or corruption | Low | Critical | 2 | Backup/recovery testing, data integrity tests, disaster recovery drills |
| Clinical decision support gives wrong recommendation | Medium | Critical | 3 | Extensive clinical scenario testing, boundary testing, algorithm validation |
| System unavailable during emergency | Low | High | 4 | High availability testing, failover testing, load testing under peak conditions |
| Mobile app crashes on older devices | High | Medium | 5 | Compatibility testing on target device matrix, stability testing |

**Test Strategy Implications:**
- Allocate 40% of testing effort to security and clinical decision support
- Plan external security audit
- Design test cases covering all clinical scenarios in the requirements
- Include performance testing that simulates emergency room peak load

---

## ✅ Task 4: Entry and Exit Criteria

**Question:** Define entry and exit criteria for system testing.

**Model Answer:**

**System Testing Entry Criteria:**
- All unit tests passed (evidence provided by development team)
- Code review completed for all clinical modules
- Static analysis shows no critical or high-severity issues
- Test environment is configured and validated
- Test data is prepared and anonymized (HIPAA-compliant)
- Test plan is approved by project manager and regulatory officer

**System Testing Exit Criteria:**
- 100% of test cases executed
- 95% of test cases passed (5% may have documented workarounds)
- No critical or high-severity defects open
- All medium-severity defects have a workaround or are accepted by business
- HIPAA security tests all passed
- Performance meets defined acceptance criteria (response time < 2 seconds, supports 1,000 concurrent users)
- FDA validation report is complete and approved
- Test summary report is completed and reviewed

---

## 🛠️ Task 5: Tool Selection

**Question:** Which tools would you select for this project, and why?

**Model Answer:**

| Need | Tool Category | Selection Rationale |
|------|--------------|---------------------|
| Test management | TestRail or Xray (Jira plugin) | Jira integration, traceability, reporting |
| API testing | REST Assured + Postman | Java-based team, good for CI/CD |
| UI automation | Selenium with Page Object Model | Mature, cross-browser, supports React |
| Performance | JMeter or Gatling | Open source, AWS-compatible, good reporting |
| Security/HIPAA | OWASP ZAP + SonarQube | Static and dynamic security analysis |
| Code quality | SonarQube | Integrates with CI/CD, enforces standards |
| Mobile testing | Appium | Cross-platform mobile automation |
