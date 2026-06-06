# Chapter 5 — Infrastructure and Environment Testing: Practice Questions

---

### Q1 (QDO-5.1, K2)

Infrastructure as Code (IaC) should be tested because:

A. It is simpler than application code
B. Misconfigurations can cause production issues
C. It never changes
D. Only developers use it

---

### Q2 (QDO-5.2, K2)

A container vulnerability scan detects a critical CVE. The correct action is:

A. Deploy anyway if the build succeeds
B. Update the base image or dependency before deployment
C. Only document it
D. Ignore it if the application works

---

### Q3 (QDO-5.3, K2)

Environment parity means:

A. All environments are exactly the same size
B. Test environments behave like production in ways that matter for testing
C. Only production needs testing
D. Development environments are unnecessary

---

### Q4 (QDO-5.4, K2)

Configuration drift occurs when:

A. IaC definitions match the actual environment
B. Manual changes create differences between IaC and actual infrastructure
C. Only during deployments
D. Only in container images

---

### Q5 (QDO-5.1, K2)

`terraform validate` performs:

A. Production deployment
B. Syntax and configuration validation
C. Only cost estimation
D. Only security scanning

---

### Q6 (QDO-5.2, K2)

Trivy is used for:

A. Load testing
B. Container image vulnerability scanning
C. UI automation
D. Code compilation

---

### Q7 (QDO-5.3, K2)

A smoke test across all environments verifies:

A. Only production
B. That critical functionality works consistently in each environment
C. Only database performance
D. Only network latency

---

### Q8 (QDO-5.4, K2)

Disaster recovery testing should be:

A. Only documented, never executed
B. Executed regularly with realistic scenarios
C. Only for large companies
D. Only after a disaster occurs

---

### Q9 (QDO-5.1, K2)

Kubernetes readiness probes verify:

A. Only that the pod is running
B. That the pod is ready to accept traffic
C. Only network connectivity
D. Only disk space

---

### Q10 (QDO-5.2, K2)

A Helm chart test (`helm test`) runs:

A. Only linting
B. Post-deployment verification tests defined in the chart
C. Only unit tests
D. Only security scans

---

### Q11 (QDO-5.3, K2)

RTO (Recovery Time Objective) measures:

A. Time between backups
B. Maximum acceptable time to restore service after an outage
C. Time to detect an issue
D. Time to write a fix

---

### Q12 (QDO-5.4, K2)

A secret manager like HashiCorp Vault should be tested for:

A. Only storage capacity
B. Rotation capability and unauthorized access prevention
C. Only UI appearance
D. Only logging

---

### Q13 (QDO-5.1, K2)

`kubeval` validates Kubernetes manifests against:

A. Only YAML syntax
B. The official Kubernetes API schema
C. Only network policies
D. Only container images

---

### Q14 (QDO-5.2, K2)

Minimizing container image layers improves:

A. Only security
B. Build time, image size, and attack surface
C. Only color scheme
D. Only documentation

---

### Q15 (QDO-5.3, K2)

Testing environment parity should include:

A. Only the number of servers
B. OS versions, runtime versions, and configuration values
C. Only the UI
D. Only the database

---

### Q16 (QDO-5.4, K2)

A Kubernetes network policy should be tested by:

A. Only reading the YAML file
B. Verifying allowed traffic flows and denied connections
C. Only checking pod names
D. Only monitoring CPU

---

### Q17 (QDO-5.1, K2)

Checkov is a tool for:

A. Performance testing
B. IaC security and compliance scanning
C. UI automation
D. Code formatting

---

### Q18 (QDO-5.2, K2)

Scanning container images for secrets detects:

A. Only performance issues
B. Embedded credentials like API keys and passwords
C. Only UI bugs
D. Only network latency

---

### Q19 (QDO-5.3, K3)

A bug occurs in production but not staging. The first check should be:

A. Blame the developers
B. Compare environment configurations for drift or differences
C. Only check application logs
D. Only restart the service

---

### Q20 (QDO-5.4, K2)

RPO (Recovery Point Objective) measures:

A. Time to restore service
B. Maximum acceptable data loss measured in time
C. Time to detect an issue
D. Time to deploy a fix

---

## Answers and Rationales

### Q1
**Answer: B**
**Rationale:** IaC misconfigurations cause production issues.

### Q2
**Answer: B**
**Rationale:** Critical CVEs must be fixed before deployment.

### Q3
**Answer: B**
**Rationale:** Parity = similar behavior, not identical size.

### Q4
**Answer: B**
**Rationale:** Drift = manual changes differ from IaC.

### Q5
**Answer: B**
**Rationale:** `terraform validate` = syntax and config validation.

### Q6
**Answer: B**
**Rationale:** Trivy = container vulnerability scanner.

### Q7
**Answer: B**
**Rationale:** Smoke tests verify critical functionality across environments.

### Q8
**Answer: B**
**Rationale:** DR must be executed regularly with realistic scenarios.

### Q9
**Answer: B**
**Rationale:** Readiness = ready to accept traffic.

### Q10
**Answer: B**
**Rationale:** `helm test` = post-deploy verification tests.

### Q11
**Answer: B**
**Rationale:** RTO = max acceptable time to restore service.

### Q12
**Answer: B**
**Rationale:** Secret manager tests = rotation and access prevention.

### Q13
**Answer: B**
**Rationale:** `kubeval` validates against K8s API schema.

### Q14
**Answer: B**
**Rationale:** Fewer layers = better build time, size, security.

### Q15
**Answer: B**
**Rationale:** Parity includes OS, runtime, and config values.

### Q16
**Answer: B**
**Rationale:** Network policy tests verify allowed and denied traffic.

### Q17
**Answer: B**
**Rationale:** Checkov = IaC security/compliance scanner.

### Q18
**Answer: B**
**Rationale:** Secret scanning detects embedded credentials.

### Q19
**Answer: B**
**Rationale:** First check = compare environments for drift/differences.

### Q20
**Answer: B**
**Rationale:** RPO = max acceptable data loss in time.
