# ❓ Chapter 3 — Threat Modeling and Risk Analysis: Practice Questions

---

### 🔷 Q1 (SEC-3.1, K2)

The PRIMARY purpose of threat modeling is to:

A. Replace penetration testing
B. Identify and evaluate security threats early in design
C. Remove all vulnerabilities
D. Increase system complexity

---

### 🔷 Q2 (SEC-3.2, K2)

In STRIDE, "Spoofing" violates:

A. Integrity
B. Authentication
C. Confidentiality
D. Availability

---

### 🔷 Q3 (SEC-3.2, K2)

An attacker modifies data in transit. This STRIDE threat is:

A. Spoofing
B. Tampering
C. Repudiation
D. Information Disclosure

---

### 🔷 Q4 (SEC-3.2, K2)

A user denies performing a transaction and there is no proof. This is:

A. Spoofing
B. Tampering
C. Repudiation
D. Elevation of Privilege

---

### 🔷 Q5 (SEC-3.2, K3)

A web application allows users to access other users' profiles by changing the user ID in the URL. The STRIDE category is:

A. Spoofing
B. Tampering
C. Information Disclosure
D. Elevation of Privilege

---

### 🔷 Q6 (SEC-3.3, K2)

In DREAD, "Exploitability" measures:

A. How much damage is caused
B. How easy it is to exploit the vulnerability
C. How many users are affected
D. How easy it is to discover

---

### 🔷 Q7 (SEC-3.3, K3)

DREAD scores: Damage=9, Reproducibility=10, Exploitability=8, Affected Users=9, Discoverability=9. The risk score is:

A. 45
B. 9.0
C. 10
D. 8

---

### 🔷 Q8 (SEC-3.4, K2)

In an attack tree, an OR node means:

A. All child attacks must succeed
B. Any one child attack achieves the goal
C. At least two child attacks must succeed
D. No child attacks are valid

---

### 🔷 Q9 (SEC-3.4, K2)

In an attack tree, an AND node means:

A. Any one child attack achieves the goal
B. All child attacks must succeed
C. The easiest child attack is chosen
D. No child attacks are needed

---

### 🔷 Q10 (SEC-3.5, K2)

Risk is calculated as:

A. Threat + Vulnerability
B. Likelihood × Impact
C. Control - Asset Value
D. Attack × Defense

---

### 🔷 Q11 (SEC-3.5, K2)

A risk with low likelihood and low impact should typically be:

A. Mitigated immediately
B. Accepted or monitored
C. Transferred to insurance
D. Avoided by shutting down

---

### 🔷 Q12 (SEC-3.5, K2)

Risk treatment options include all EXCEPT:

A. Mitigate
B. Accept
C. Transfer
D. Ignore completely without documentation

---

### 🔷 Q13 (SEC-3.2, K3)

An attacker crashes a web server by sending millions of requests. The STRIDE category is:

A. Spoofing
B. Tampering
C. Denial of Service
D. Elevation of Privilege

---

### 🔷 Q14 (SEC-3.3, K2)

Which DREAD factor measures "How many users would be affected?"

A. Damage
B. Reproducibility
C. Affected Users
D. Discoverability

---

### 🔷 Q15 (SEC-3.4, K3)

In an attack tree, the leaf nodes represent:

A. The attacker's ultimate goal
B. Specific attack actions
C. Sub-goals
D. Mitigation controls

---

### 🔷 Q16 (SEC-3.2, K2)

An attacker gains admin privileges through a bug in the application. The STRIDE category is:

A. Spoofing
B. Tampering
C. Denial of Service
D. Elevation of Privilege

---

### 🔷 Q17 (SEC-3.5, K3)

A vulnerability has likelihood=3 (high) and impact=2 (medium). The risk score on a 3x3 matrix is:

A. 3
B. 5
C. 6
D. 9

---

### 🔷 Q18 (SEC-3.1, K2)

Threat modeling should be performed:

A. Only during the testing phase
B. During design and revisited when architecture changes
C. Only after a security incident
D. Only once at the beginning of the project

---

### 🔷 Q19 (SEC-3.4, K2)

Attack trees help testers by:

A. Replacing all security tests
B. Identifying test scenarios based on attacker paths
C. Eliminating the need for risk assessment
D. Reducing the number of vulnerabilities

---

### 🔷 Q20 (SEC-3.5, K2)

Transferring risk to an insurance company is an example of:

A. Risk mitigation
B. Risk acceptance
C. Risk transfer
D. Risk avoidance

---

## ✔️ Answers and Rationales

### 🔷 Q1
**Answer: B**

**Rationale:** Threat modeling = identify and evaluate threats early in design.

### 🔷 Q2
**Answer: B**

**Rationale:** Spoofing = pretending to be someone else = authentication violation.

### 🔷 Q3
**Answer: B**

**Rationale:** Modifying data = tampering = integrity violation.

### 🔷 Q4
**Answer: C**

**Rationale:** Denying action with no proof = repudiation.

### 🔷 Q5
**Answer: D**

**Rationale:** Accessing unauthorized resources = elevation of privilege.

### 🔷 Q6
**Answer: B**

**Rationale:** Exploitability = ease of exploitation.

### 🔷 Q7
**Answer: B**

**Rationale:** DREAD = average: (9+10+8+9+9)/5 = 45/5 = 9.0.

### 🔷 Q8
**Answer: B**

**Rationale:** OR node = any one child achieves the goal.

### 🔷 Q9
**Answer: B**

**Rationale:** AND node = all children must succeed.

### 🔷 Q10
**Answer: B**

**Rationale:** Risk = likelihood × impact.

### 🔷 Q11
**Answer: B**

**Rationale:** Low × low = low risk = accept or monitor.

### 🔷 Q12
**Answer: D**

**Rationale:** Ignoring without documentation is not valid risk treatment.

### 🔷 Q13
**Answer: C**

**Rationale:** Crashing server = Denial of Service.

### 🔷 Q14
**Answer: C**

**Rationale:** Affected Users = number of users affected.

### 🔷 Q15
**Answer: B**

**Rationale:** Leaf nodes = specific attack actions.

### 🔷 Q16
**Answer: D**

**Rationale:** Gaining higher privileges = Elevation of Privilege.

### 🔷 Q17
**Answer: C**

**Rationale:** 3 × 2 = 6.

### 🔷 Q18
**Answer: B**

**Rationale:** Threat modeling in design, revisited on changes.

### 🔷 Q19
**Answer: B**

**Rationale:** Attack trees identify test scenarios from attacker paths.

### 🔷 Q20
**Answer: C**

**Rationale:** Insurance = risk transfer.
