# Chapter 5 — Infrastructure and Environment Testing: Lessons

---

## 5.1 Infrastructure as Code (IaC) Testing

### What is IaC?

Infrastructure as Code is the practice of managing and provisioning infrastructure through machine-readable definition files rather than physical hardware configuration.

### Common IaC Tools

| Tool | Type | Best For |
|------|------|----------|
| **Terraform** | Declarative, multi-cloud | Cloud resources (VMs, networks, databases) |
| **CloudFormation** | Declarative, AWS-only | AWS-native environments |
| **Ansible** | Procedural, agentless | Configuration and application deployment |
| **Pulumi** | Declarative, programmable | Teams preferring general-purpose languages |

### IaC Testing Levels

**Static analysis:**
- Linting (terraform validate, cfn-lint)
- Security scanning (Checkov, tfsec)
- Cost estimation (infracost)

**Plan review:**
- Review Terraform plan before apply
- Verify no unintended destruction
- Check resource changes match expectations

**Integration testing:**
- Deploy to temporary environment
- Verify resources created correctly
- Test connectivity and permissions

**Compliance testing:**
- Verify encryption is enabled
- Confirm access controls are restrictive
- Validate tagging policies

---

## 5.2 Container and Kubernetes Testing

### Container Image Testing

| Test | Purpose | Tool |
|------|---------|------|
| **Vulnerability scan** | Detect known CVEs in base image and dependencies | Trivy, Clair, Snyk |
| **Size check** | Ensure image isn't bloated | docker images |
| **Layer audit** | Minimize layers for efficiency | docker history |
| **Secret scan** | Detect embedded credentials | truffleHog, git-secrets |

### Kubernetes Manifest Testing

**Static checks:**
- `kubectl apply --dry-run=client` — validate syntax
- kubeval / kubeconform — validate against Kubernetes API schema
- polaris — check for security and reliability best practices

**Dynamic checks:**
- Deploy to test cluster
- Verify pods start correctly
- Test readiness and liveness probes
- Validate resource limits and requests

### Helm Chart Testing

- `helm lint` — check chart syntax
- `helm template` — render and inspect generated manifests
- `helm test` — run post-deployment verification tests

---

## 5.3 Environment Parity

### Why Parity Matters

| Aspect | Dev | Test | Prod |
|--------|-----|------|------|
| OS version | Ubuntu 20.04 | Ubuntu 20.04 | Ubuntu 20.04 |
| Kubernetes version | 1.28 | 1.28 | 1.28 |
| Database version | PostgreSQL 15 | PostgreSQL 15 | PostgreSQL 15 |
| Environment variables | Same structure | Same structure | Same structure |
| Network topology | Simplified | Production-like | Full |

### Drift Detection

- Compare actual infrastructure state to IaC definitions
- Alert when manual changes are detected
- Tools: Terraform drift detection, AWS Config, Azure Policy

### Testing Parity

1. **Automated comparison:** Script compares environment configurations
2. **Smoke tests:** Same tests run in all environments
3. **Data parity:** Test data represents production patterns (anonymized)

---

## 5.4 Configuration Management Testing

### Configuration Sources

| Source | Example | Risk |
|--------|---------|------|
| Environment variables | `DB_HOST`, `API_KEY` | Missing or incorrect values |
| Config files | `appsettings.json` | Wrong file deployed |
| Secret managers | AWS Secrets Manager, Vault | Unauthorized access |
| Feature flags | LaunchDarkly, Unleash | Wrong flag state |

### Testing Approaches

- **Validation:** All required configs present and valid
- **Default checks:** No dangerous defaults (e.g., debug mode off in prod)
- **Secret rotation:** Verify secrets can be rotated without downtime
- **Cross-reference:** Config values match between application and infrastructure

---

## 5.5 Network and Security Policy Testing

### Network Policy Testing

- Verify allowed traffic paths (pod-to-pod, ingress, egress)
- Test denied paths produce expected blocks
- Validate load balancer and ingress configuration

### Security Policy Testing

- RBAC (Role-Based Access Control) permissions
- Pod Security Standards (PSS) / Pod Security Policies (PSP)
- Service mesh policies (mTLS, access control)

---

## 5.6 Disaster Recovery Testing

### DR Scenarios

| Scenario | Test | Target |
|----------|------|--------|
| **Region failure** | Failover to secondary region | RTO < 1 hour |
| **Database corruption** | Restore from backup | RPO < 15 minutes |
| **Complete environment loss** | Rebuild from IaC + backups | RTO < 4 hours |
| **Ransomware attack** | Isolate, restore clean backups | RTO < 8 hours |

### DR Testing Best Practices

- Schedule regular DR drills (quarterly)
- Document and time every step
- Test with realistic data volumes
- Verify application functionality post-recovery
- Update runbooks based on lessons learned

---

## Worked Examples

### Worked Example 1: Terraform Testing

**Scenario:** Validate a Terraform module for an AWS VPC.

**Tests:**
1. **Static:** `terraform validate` — syntax check
2. **Security:** `checkov --file main.tf` — no security issues
3. **Plan review:** `terraform plan` — creates 1 VPC, 2 subnets, 1 NAT gateway
4. **Integration:** Deploy to temporary account
   - Verify CIDR block matches specification
   - Confirm subnets in correct AZs
   - Test internet gateway attachment
5. **Cleanup:** `terraform destroy` — all resources removed

### Worked Example 2: Container Security Scan

**Scenario:** Scan a Java application Docker image.

**Results:**
| Severity | Count | Action |
|----------|-------|--------|
| Critical | 2 | Fix immediately — log4j vulnerability |
| High | 5 | Fix before production |
| Medium | 12 | Schedule fixes |
| Low | 30 | Accept risk |

**Resolution:**
- Update base image from `openjdk:11` to `openjdk:11-jre-slim`
- Remove unnecessary packages (curl, wget)
- Update log4j to patched version

### Worked Example 3: Environment Parity Check

**Scenario:** A bug only occurs in production, not in staging.

**Investigation:**
| Check | Staging | Production | Match |
|-------|---------|------------|-------|
| Kubernetes version | 1.27 | 1.28 | No |
| Database parameter `max_connections` | 100 | 200 | No |
| Feature flag `new_algorithm` | true | true | Yes |
| CPU limits | 1 core | 2 cores | No |

**Root cause:** Database connection pool exhaustion in staging (100 max) masks the race condition that appears in production (200 max, higher concurrency).

**Fix:** Align staging `max_connections` to 200 and reproduce the issue.
