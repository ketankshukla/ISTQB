# 📖 CT-SEC Glossary

## 🌟 Chapter 1 — Introduction to Security Testing

**Confidentiality:** Ensuring that information is accessible only to those authorized to have access.

**Integrity:** Safeguarding the accuracy and completeness of information and processing methods.

**Availability:** Ensuring that authorized users have access to information and associated assets when required.

**Authentication:** The process of verifying the identity of a user, device, or system.

**Authorization:** The process of granting or denying access rights to authenticated users.

**Non-repudiation:** Ensuring that a party cannot deny having performed an action.

**Vulnerability:** A weakness in an information system, system security procedures, internal controls, or implementation that could be exploited.

**Threat:** A potential cause of an unwanted incident, which may result in harm to a system or organization.

**Risk:** The potential that a given threat will exploit vulnerabilities of an asset and thereby cause harm.

**Exploit:** A piece of software, chunk of data, or sequence of commands that takes advantage of a vulnerability.

**Attack:** An attempt to destroy, expose, alter, disable, steal, or gain unauthorized access to or make unauthorized use of an asset.

## 📜 Chapter 2 — Security Testing Concepts and Principles

**Defense in Depth:** A security strategy that employs multiple layers of security controls throughout an IT system.

**Least Privilege:** The principle that users and processes should be granted only the minimum access necessary to perform their function.

**Separation of Duties:** The principle that no single person should have complete control over a critical process.

**Fail Secure (Fail Safe):** The principle that a system should default to a secure state when an error or failure occurs.

**Complete Mediation:** Every access to every object must be checked for authority.

**Economy of Mechanism:** Security designs should be as simple as possible to reduce the attack surface.

**Open Design:** Security should not depend on the secrecy of the design or implementation.

**Psychological Acceptability:** Security mechanisms should not make the system too difficult to use.

**Security Control:** A safeguard or countermeasure to avoid, detect, counteract, or minimize security risks.

**Security Requirement:** A requirement that specifies a security function or property a system must satisfy.

## 🔬 Chapter 3 — Threat Modeling and Risk Analysis

**Threat Modeling:** A structured approach to identifying and evaluating security threats to a system.

**STRIDE:** A threat classification model:
- **Spoofing:** Pretending to be someone else
- **Tampering:** Modifying data or code
- **Repudiation:** Denying having performed an action
- **Information Disclosure:** Exposing information to unauthorized parties
- **Denial of Service:** Making a system unavailable
- **Elevation of Privilege:** Gaining unauthorized access levels

**DREAD:** A risk rating model:
- **Damage potential:** How much damage could be caused?
- **Reproducibility:** How easy is it to reproduce?
- **Exploitability:** How easy is it to exploit?
- **Affected users:** How many users would be affected?
- **Discoverability:** How easy is it to discover?

**Attack Tree:** A diagrammatic representation of attacks on a system, structured as a tree with the attacker's goal as the root.

**Risk Assessment:** The process of identifying, analyzing, and evaluating risks.

**Risk Mitigation:** The process of implementing measures to reduce the likelihood or impact of risks.

**Likelihood:** The probability that a threat will exploit a vulnerability.

**Impact:** The magnitude of harm that could result from a successful attack.

## 🎯 Chapter 4 — Security Test Design and Techniques

**Penetration Testing (Pen Test):** A simulated cyberattack against a system to identify vulnerabilities.

**White Box Testing:** Testing with full knowledge of the system internals (source code, architecture).

**Black Box Testing:** Testing with no knowledge of the system internals.

**Gray Box Testing:** Testing with partial knowledge of the system.

**Fuzzing:** Automated testing technique that inputs invalid, unexpected, or random data to a program.

**SQL Injection:** An attack technique that inserts malicious SQL code into input fields to manipulate databases.

**Cross-Site Scripting (XSS):** An attack that injects malicious scripts into trusted websites.

**Cross-Site Request Forgery (CSRF):** An attack that tricks users into executing unwanted actions on a web application.

**Session Hijacking:** Taking over a user's session by stealing their session identifier.

**Brute Force Attack:** Attempting all possible passwords or keys until the correct one is found.

**Dictionary Attack:** Using a list of common passwords to attempt authentication.

**Input Validation:** Checking that user input conforms to expected formats and constraints.

**Output Encoding:** Converting output to a safe format to prevent injection attacks.

## 🔒 Chapter 5 — Security Test Execution and Evaluation

**CVSS (Common Vulnerability Scoring System):** A standardized method for rating the severity of vulnerabilities.

**CVE (Common Vulnerabilities and Exposures):** A dictionary of publicly known information security vulnerabilities.

**Exploitability:** The ease with which a vulnerability can be exploited.

**False Positive:** A result that incorrectly indicates a vulnerability exists.

**False Negative:** A failure to detect a vulnerability that actually exists.

**Security Test Report:** Documentation of security test findings, including vulnerabilities, risks, and recommendations.

**Remediation:** The process of fixing or mitigating identified vulnerabilities.

**Verification Testing:** Testing to confirm that a vulnerability has been fixed.

## 🛠️ Chapter 6 — Security Testing Tools and Automation

**SAST (Static Application Security Testing):** Analyzing source code for vulnerabilities without executing the program.

**DAST (Dynamic Application Security Testing):** Testing a running application for vulnerabilities by interacting with it.

**IAST (Interactive Application Security Testing):** Combining SAST and DAST by analyzing running code from within.

**SCA (Software Composition Analysis):** Identifying and managing open-source and third-party components and their vulnerabilities.

**WAF (Web Application Firewall):** A firewall that monitors, filters, and blocks HTTP traffic to and from a web application.

**SIEM (Security Information and Event Management):** A system that aggregates and analyzes security event data.

**Burp Suite:** A popular platform for web application security testing.

**OWASP ZAP (Zed Attack Proxy):** An open-source web application security scanner.

**Metasploit:** A penetration testing framework for developing and executing exploit code.

**Nmap:** A network scanner used to discover hosts and services on a computer network.
