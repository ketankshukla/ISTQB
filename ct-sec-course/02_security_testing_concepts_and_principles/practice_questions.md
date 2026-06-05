# Chapter 2 — Security Testing Concepts and Principles: Practice Questions

---

### Q1 (SEC-2.1, K2)

Defense in depth means:

A. Using one very strong security control
B. Employing multiple layers of security controls so that if one fails, others still provide protection
C. Making the system as complex as possible
D. Hiding the system design from attackers

---

### Q2 (SEC-2.1, K2)

The principle of least privilege states that:

A. All users should have administrator access
B. Users should be granted only the minimum access necessary for their function
C. Security should be invisible to users
D. Security controls should be expensive

---

### Q3 (SEC-2.1, K2)

A fire exit door that unlocks when power fails is an example of:

A. Fail secure
B. Fail safe
C. Defense in depth
D. Least privilege

---

### Q4 (SEC-2.1, K2)

Complete mediation means:

A. Security checks are only performed at login
B. Every access to every object must be checked for authority
C. Users should never be challenged after authentication
D. Security checks are optional

---

### Q5 (SEC-2.2, K2)

A firewall that blocks unauthorized traffic is a:

A. Detective control
B. Preventive control
C. Corrective control
D. Compensating control

---

### Q6 (SEC-2.2, K2)

An intrusion detection system (IDS) that alerts on suspicious activity is a:

A. Preventive control
B. Detective control
C. Corrective control
D. Deterrent control

---

### Q7 (SEC-2.2, K2)

A backup system used to restore data after a ransomware attack is a:

A. Preventive control
B. Detective control
C. Corrective control
D. Deterrent control

---

### Q8 (SEC-2.3, K2)

"All passwords must be hashed with bcrypt before storage" is:

A. A functional requirement
B. A security requirement
C. A performance requirement
D. A usability requirement

---

### Q9 (SEC-2.3, K2)

A security requirements traceability matrix is used to:

A. Track project budget
B. Map security requirements to test cases and verify coverage
C. Measure application performance
D. Design user interfaces

---

### Q10 (SEC-2.4, K2)

Shift-left security means:

A. Moving security testing to the right side of the timeline
B. Integrating security activities earlier in the SDLC rather than only at the end
C. Only testing after production deployment
D. Removing security from development

---

### Q11 (SEC-2.1, K2)

Separation of duties is important because:

A. It makes systems faster
B. It prevents one person from having complete control over a critical process
C. It reduces the number of employees needed
D. It simplifies the codebase

---

### Q12 (SEC-2.1, K2)

Economy of mechanism suggests that:

A. Security systems should be as complex as possible
B. Simpler designs have fewer vulnerabilities and are easier to verify
C. More features improve security
D. Security should be expensive

---

### Q13 (SEC-2.1, K2)

The open design principle states that:

A. System design should be kept secret from everyone
B. Security should not depend on the secrecy of the design; only keys/secrets should be confidential
C. All source code should be published
D. Design documents are unnecessary

---

### Q14 (SEC-2.2, K2)

Warning banners displayed at login are an example of:

A. Preventive control
B. Detective control
C. Deterrent control
D. Corrective control

---

### Q15 (SEC-2.3, K3)

A requirement states: "Users can only access documents in their department." The test case should verify:

A. That users can access any document
B. That users in Department A cannot access Department B documents, and vice versa
C. That the login page loads
D. That passwords are encrypted

---

### Q16 (SEC-2.4, K2)

Static analysis tools (SAST) are most effectively used:

A. Only after production deployment
B. During implementation, integrated into the CI/CD pipeline
C. Only during requirements gathering
D. Never — they are ineffective

---

### Q17 (SEC-2.1, K2)

Psychological acceptability means:

A. Security mechanisms should be so strict that users cannot work
B. Security should not make the system too difficult to use, or users will bypass it
C. Only psychologists should design security
D. Security is irrelevant to usability

---

### Q18 (SEC-2.2, K2)

Physical locks on server room doors are an example of:

A. Technical control
B. Physical control
C. Administrative control
D. Detective control

---

### Q19 (SEC-2.3, K2)

Which is a security requirement rather than a functional requirement?

A. "The system shall allow users to log in"
B. "The system shall lock accounts after 5 failed login attempts"
C. "The system shall display a dashboard"
D. "The system shall export reports"

---

### Q20 (SEC-2.4, K2)

In a secure SDLC, threat modeling should be performed during:

A. Only the testing phase
B. The design phase (and revisited throughout)
C. Only after production deployment
D. Only during maintenance

---

## Answers and Rationales

### Q1
**Answer: B**

**Rationale:** Defense in depth = multiple layers of controls.

### Q2
**Answer: B**

**Rationale:** Least privilege = minimum access necessary.

### Q3
**Answer: B**

**Rationale:** Fire exit unlocks on power failure = fail safe (safety priority).

### Q4
**Answer: B**

**Rationale:** Complete mediation = every access checked for authority.

### Q5
**Answer: B**

**Rationale:** Firewall blocks = preventive control.

### Q6
**Answer: B**

**Rationale:** IDS alerts = detective control.

### Q7
**Answer: C**

**Rationale:** Backup restoration after attack = corrective control.

### Q8
**Answer: B**

**Rationale:** Password hashing = security requirement.

### Q9
**Answer: B**

**Rationale:** Traceability matrix = map requirements to test cases.

### Q10
**Answer: B**

**Rationale:** Shift-left = integrate security earlier in SDLC.

### Q11
**Answer: B**

**Rationale:** Separation of duties = prevent one person controlling critical process.

### Q12
**Answer: B**

**Rationale:** Economy of mechanism = simpler = fewer vulnerabilities.

### Q13
**Answer: B**

**Rationale:** Open design = security not dependent on secrecy of design.

### Q14
**Answer: C**

**Rationale:** Warning banners = deterrent control.

### Q15
**Answer: B**

**Rationale:** Department access restriction = test cross-department denial.

### Q16
**Answer: B**

**Rationale:** SAST most effective in CI/CD during implementation.

### Q17
**Answer: B**

**Rationale:** Psychological acceptability = security shouldn't impede usability.

### Q18
**Answer: B**

**Rationale:** Physical locks = physical control.

### Q19
**Answer: B**

**Rationale:** Account lockout = security requirement (protection mechanism).

### Q20
**Answer: B**

**Rationale:** Threat modeling in design phase, revisited throughout.
