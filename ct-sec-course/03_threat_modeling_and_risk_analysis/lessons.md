# Chapter 3 — Threat Modeling and Risk Analysis: Lessons

---

## 3.1 Threat Modeling

### What is Threat Modeling?

**Definition:** A structured approach to identifying and evaluating security threats to a system. It answers the question: "What can go wrong, and what should we do about it?"

**Purpose:**
- Identify threats early in design
- Prioritize security efforts based on risk
- Guide security testing focus
- Document security decisions

**When to perform:**
- During system design (shift-left)
- When architecture changes
- Before major releases
- After security incidents

### Threat Modeling Process

```
1. Define scope and assets
2. Decompose the application (diagram/data flow)
3. Identify threats (STRIDE)
4. Rate risks (DREAD or other model)
5. Plan mitigations
6. Validate and iterate
```

---

## 3.2 STRIDE Threat Classification

### Overview

STRIDE is a threat classification framework developed by Microsoft. Each letter represents a category of threat.

| Letter | Threat | Violates | Example |
|--------|--------|----------|---------|
| **S** | Spoofing | Authentication | Attacker pretends to be another user |
| **T** | Tampering | Integrity | Attacker modifies data in transit or storage |
| **R** | Repudiation | Non-repudiation | User denies performing an action; no proof exists |
| **I** | Information Disclosure | Confidentiality | Attacker gains access to sensitive data |
| **D** | Denial of Service | Availability | Attacker overloads the system |
| **E** | Elevation of Privilege | Authorization | Attacker gains higher privileges than allowed |

### Applying STRIDE to Data Flow Diagrams

For each element in a data flow diagram, ask STRIDE questions:

**Process (e.g., Login Service):**
- Spoofing: Can someone pretend to be this process?
- Tampering: Can the process logic be modified?
- Repudiation: Are actions logged?
- Information Disclosure: Does the process leak data?
- Denial of Service: Can the process be overwhelmed?
- Elevation: Can the process be used to gain higher privileges?

**Data Flow (e.g., Login Request):**
- Spoofing: Can the flow be faked?
- Tampering: Can data in transit be modified?
- Information Disclosure: Can data in transit be intercepted?
- Denial of Service: Can the flow be blocked?

**Data Store (e.g., User Database):**
- Tampering: Can stored data be modified?
- Information Disclosure: Can stored data be read?
- Denial of Service: Can access to the store be blocked?

**External Entity (e.g., User):**
- Spoofing: Can someone pretend to be a legitimate user?
- Repudiation: Can users deny their actions?

### Worked Example: STRIDE on Login Flow

**Diagram:** User → (Internet) → Login Page → Authentication Service → User Database

| Element | Threat | Description | Mitigation |
|---------|--------|-------------|------------|
| User → Login Page | Spoofing | Fake login page (phishing) | HTTPS, certificate pinning, user education |
| Login Page → Auth Service | Tampering | Modify credentials in transit | TLS 1.3, HSTS |
| Login Page → Auth Service | Information Disclosure | Credentials intercepted | Encryption, secure headers |
| Auth Service | Tampering | Modify authentication logic | Code signing, integrity checks |
| Auth Service | Repudiation | Attacker logs in, no evidence | Audit logging with timestamps |
| Auth Service → User DB | Information Disclosure | DB credentials exposed | Connection encryption, secrets management |
| User DB | Tampering | Direct DB modification | Access controls, input validation |
| User DB | Denial of Service | DB overwhelmed | Rate limiting, connection pooling |

---

## 3.3 DREAD Risk Rating

### Overview

DREAD is a risk rating model that scores threats on five factors. Each factor is rated 0-10, and the average is the overall risk score.

| Factor | Question | Low (0-3) | Medium (4-7) | High (8-10) |
|--------|----------|-----------|--------------|-------------|
| **D** — Damage | How much damage? | Minimal | Significant | Catastrophic |
| **R** — Reproducibility | How easy to reproduce? | Very difficult | Sometimes easy | Always easy |
| **E** — Exploitability | How easy to exploit? | Requires expertise | Some skill | Script kiddie |
| **A** — Affected Users | How many users? | Few | Some | Everyone |
| **D** — Discoverability | How easy to discover? | Obscure | Known to some | Obvious |

### Risk Score Calculation

```
Risk Score = (Damage + Reproducibility + Exploitability + Affected Users + Discoverability) / 5

Interpretation:
0-3: Low risk — monitor or accept
4-7: Medium risk — plan mitigation
8-10: High risk — mitigate immediately
```

### Worked Example

**Threat:** SQL injection in login form

| Factor | Rating | Justification |
|--------|--------|---------------|
| Damage | 9 | Full database compromise, PII exposure |
| Reproducibility | 10 | Can be reproduced with basic SQL injection tools |
| Exploitability | 9 | SQLMap automates exploitation |
| Affected Users | 10 | All users' data at risk |
| Discoverability | 8 | Common vulnerability, easy to test for |
| **Average** | **9.2** | **Critical — mitigate immediately** |

**Threat:** Verbose error message exposes stack trace

| Factor | Rating | Justification |
|--------|--------|---------------|
| Damage | 4 | Information leakage, aids further attacks |
| Reproducibility | 10 | Trigger error → always see stack trace |
| Exploitability | 3 | Information only, not direct exploitation |
| Affected Users | 3 | Aids targeted attacks, not all users |
| Discoverability | 7 | Visible when errors occur |
| **Average** | **5.4** | **Medium — plan mitigation** |

---

## 3.4 Attack Trees

### What is an Attack Tree?

An attack tree is a diagrammatic representation of attacks on a system, structured as a tree with the attacker's goal as the root.

**Structure:**
- **Root node:** Attacker's ultimate goal
- **Child nodes:** Sub-goals or methods to achieve parent goal
- **Leaf nodes:** Specific attack actions
- **AND nodes:** All children must be achieved
- **OR nodes:** Any child achieves the goal

### Example Attack Tree

**Goal:** Steal customer credit card data from e-commerce site

```
Steal credit card data
├── AND: Gain database access
│   ├── OR: Exploit application vulnerability
│   │   ├── SQL injection
│   │   ├── Command injection
│   │   └── Unpatched CMS vulnerability
│   ├── OR: Compromise admin credentials
│   │   ├── Phishing attack on admin
│   │   ├── Brute force admin password
│   │   └── Credential stuffing
│   └── OR: Bypass access controls
│       ├── Broken access control
│       └── Privilege escalation
├── AND: Extract data
│   ├── Query database for card numbers
│   └── Download database backup
└── AND: Exfiltrate without detection
    ├── Encrypt data before transfer
    └── Use covert channel (DNS, email)
```

**Analysis:**
- OR nodes: Attacker needs only ONE path to succeed
- AND nodes: Attacker must complete ALL steps
- Most likely path: SQL injection → query database → exfiltrate
- Mitigation priority: Address SQL injection (blocks easiest path)

### Using Attack Trees for Testing

1. **Identify test scenarios:** Each leaf node is a potential test
2. **Prioritize:** Paths with lowest AND-node difficulty = highest priority
3. **Verify mitigations:** For each node with a control, test the control
4. **Quantify:** Assign probabilities or costs to each node

---

## 3.5 Risk Calculation and Treatment

### Risk Formula

```
Risk = Likelihood × Impact
```

**Likelihood factors:**
- Threat actor motivation and capability
- Vulnerability exploitability
- Existing controls effectiveness
- Exposure of the asset

**Impact factors:**
- Financial loss
- Reputational damage
- Legal/regulatory consequences
- Operational disruption
- Data breach scope

### Risk Matrix

| Likelihood \ Impact | Low (1) | Medium (2) | High (3) |
|---------------------|---------|------------|----------|
| **Low (1)** | 1 (Low) | 2 (Low) | 3 (Medium) |
| **Medium (2)** | 2 (Low) | 4 (Medium) | 6 (High) |
| **High (3)** | 3 (Medium) | 6 (High) | 9 (Critical) |

### Risk Treatment Options

| Option | Description | When to Use |
|--------|-------------|-------------|
| **Mitigate** | Implement controls to reduce likelihood or impact | Most common; when risk exceeds appetite |
| **Accept** | Acknowledge risk but take no action | Low risk; cost of mitigation exceeds benefit |
| **Transfer** | Shift risk to another party (insurance, outsourcing) | When mitigation is impractical |
| **Avoid** | Eliminate the risk by not performing the activity | High risk with no viable mitigation |

### Risk Prioritization for Testing

**Test highest-risk areas first:**
1. Critical risk (9) → Test immediately, exhaustive testing
2. High risk (6) → Test thoroughly
3. Medium risk (3-4) → Test adequately
4. Low risk (1-2) → Test if time permits

---

## Worked Examples

### Worked Example 1: Complete Threat Model

**System:** Online banking mobile app

**Step 1 — Assets:**
- Customer credentials
- Account balances and transaction history
- Payment instructions
- PII (names, addresses, SSN)

**Step 2 — Data Flow:**
```
User → Mobile App → API Gateway → Authentication Service → Account Service → Database
                    → Transaction Service → Payment Processor
```

**Step 3 — STRIDE Analysis:**

| Element | S | T | R | I | D | E |
|---------|---|---|---|---|---|---|
| Mobile App | Y | Y | — | Y | — | — |
| API Gateway | Y | Y | — | — | Y | Y |
| Auth Service | Y | Y | Y | Y | Y | Y |
| Account Service | — | Y | Y | Y | Y | Y |
| Database | — | Y | — | Y | Y | — |

**Step 4 — DREAD Rating (top 3 threats):**

| Threat | D | R | E | A | D | Score | Priority |
|--------|---|---|---|---|---|-------|----------|
| SQL injection to DB | 10 | 10 | 9 | 10 | 8 | 9.4 | 1 |
| Credential theft via phishing | 9 | 8 | 7 | 10 | 9 | 8.6 | 2 |
| API DoS | 6 | 9 | 8 | 10 | 7 | 8.0 | 3 |

**Step 5 — Mitigations:**
- SQL injection → Parameterized queries, WAF, input validation
- Phishing → MFA, user education, anti-phishing tools
- DoS → Rate limiting, CDN, DDoS protection

**Step 6 — Testing focus:**
- Penetration testing on API endpoints
- Fuzzing on all input parameters
- Load testing for DoS resilience
- Social engineering simulation

### Worked Example 2: Attack Tree Analysis

**Goal:** Gain unauthorized access to a corporate VPN

```
Gain VPN access
├── OR: Compromise valid credentials
│   ├── AND: Obtain username
│   │   ├── Phishing email to employee
│   │   ├── Harvest from public sources (LinkedIn)
│   │   └── Buy on dark web from previous breach
│   └── AND: Obtain password
│       ├── Brute force (if no lockout)
│       ├── Password spray (common passwords)
│       ├── Keylogger on employee machine
│       └── Credential stuffing (reuse from breach)
├── OR: Exploit VPN vulnerability
│   ├── Unpatched VPN server (CVE)
│   ├── Weak encryption configuration
│   └── Misconfigured access controls
└── OR: Bypass VPN entirely
    ├── Exploit exposed internal service
    └── Compromise vendor with VPN access
```

**Analysis:**
- Easiest path: Credential stuffing (common + often no MFA)
- Highest impact: VPN vulnerability (gives access to entire network)
- Test priorities:
  1. Verify MFA is enforced on VPN
  2. Test password policy strength
  3. Verify account lockout after failed attempts
  4. Check VPN server patch level
  5. Verify no exposed internal services

### Worked Example 3: Risk-Based Test Planning

**Scenario:** Testing a healthcare patient portal with limited time (2 weeks).

**Risk assessment:**

| Feature | Threat | Likelihood | Impact | Risk | Test Effort |
|---------|--------|------------|--------|------|-------------|
| Login | Credential theft | High | High | 9 | 5 days |
| Patient records | Unauthorized access | Medium | High | 6 | 4 days |
| Appointment booking | Appointment manipulation | Low | Medium | 2 | 1 day |
| Prescription refill | Fraudulent prescriptions | Medium | High | 6 | 3 days |
| Payment | Payment fraud | Medium | High | 6 | 2 days |
| Messaging | PHI in messages | Low | Medium | 2 | 1 day |

**Test allocation (10 days total):**
- Login security: 5 days (highest risk)
- Patient records access control: 3 days
- Prescription refill validation: 2 days
- Payment security: 1 day (already covered by PCI compliance)
- Appointment + messaging: 1 day (lower risk, basic tests)

**Rationale:** Risk-based testing allocates more effort to higher-risk areas, maximizing security value within time constraints.
