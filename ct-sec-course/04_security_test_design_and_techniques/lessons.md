# Chapter 4 — Security Test Design and Techniques: Lessons

---

## 4.1 Penetration Testing

### What is Penetration Testing?

A simulated cyberattack against a system to identify vulnerabilities that an attacker could exploit.

### Types of Penetration Testing

| Type | Knowledge | Use Case |
|------|-----------|----------|
| **Black box** | No internal knowledge | Simulates external attacker; tests exposed surfaces |
| **Gray box** | Partial knowledge (user credentials, documentation) | Simulates insider threat or compromised user |
| **White box** | Full knowledge (source code, architecture) | Comprehensive vulnerability discovery; tests internal logic |

### Penetration Testing Phases

**1. Planning and Reconnaissance:**
- Define scope, goals, and rules of engagement
- Gather publicly available information (OSINT)
- Map attack surface

**2. Scanning:**
- Identify live hosts, open ports, services
- Discover web applications, APIs, and endpoints
- Enumerate users, shares, and resources

**3. Vulnerability Analysis:**
- Identify known vulnerabilities (CVE scanning)
- Analyze application behavior
- Map vulnerabilities to potential exploits

**4. Exploitation:**
- Attempt to exploit identified vulnerabilities
- Verify vulnerabilities are real (not false positives)
- Maintain access for further testing (if scoped)

**5. Post-Exploitation:**
- Determine value of compromised access
- Attempt privilege escalation
- Identify additional targets from compromised system
- Maintain persistence (if scoped)

**6. Reporting:**
- Document findings with evidence
- Rate severity using CVSS
- Provide remediation recommendations

### Penetration Testing vs. Vulnerability Scanning

| Aspect | Vulnerability Scan | Penetration Test |
|--------|-----------------|------------------|
| Depth | Automated, surface-level | Manual, deep analysis |
| Exploitation | No | Yes (verifies exploitability) |
| False positives | Higher | Lower (exploitation confirms) |
| Cost | Lower | Higher |
| Frequency | Regular (monthly/quarterly) | Periodic (annual/major release) |

---

## 4.2 Authentication Testing

### Password Strength Testing

**Test for weak password policies:**
- Does the system accept "password", "123456", "qwerty"?
- Is there a minimum length? (NIST recommends 8+ but allows longer)
- Are common passwords rejected? (check against breached password lists)

**Brute force testing:**
- Attempt 1,000 common passwords against one account
- Check if account is locked after N failed attempts
- Verify lockout duration and notification

**Credential stuffing testing:**
- Use username/password pairs from previous breaches
- Check if the system detects and blocks suspicious login patterns
- Verify MFA is triggered for unknown devices/locations

### Multi-Factor Authentication (MFA) Testing

**Test MFA enforcement:**
- Can MFA be bypassed by manipulating the request?
- Is MFA required for all sensitive operations or just login?
- Can the MFA challenge be skipped by accessing deep links directly?

**Test MFA mechanisms:**
- **SMS/Email OTP:** Can codes be intercepted? Are they predictable? Is there rate limiting?
- **TOTP (Time-based OTP):** Is the secret stored securely? Is there tolerance for time drift?
- **Push notifications:** Can users be tricked into approving malicious requests?
- **Biometric:** Can it be bypassed with photos, recordings, or prosthetics?

### Session Management Testing

**Session token analysis:**
- Are tokens random and unpredictable?
- Can tokens be guessed or brute-forced?
- Are tokens transmitted securely (HttpOnly, Secure, SameSite flags)?

**Session fixation testing:**
- Log in with attacker-provided session ID
- Verify the ID changes after authentication

**Session timeout testing:**
- Leave session idle; verify it expires
- Close browser; verify session is invalidated (or not, depending on "remember me")
- Attempt to use token after logout

---

## 4.3 Authorization Testing

### Horizontal Privilege Escalation

**Definition:** Accessing another user's resources at the same privilege level.

**Example:**
- User A views their account at `/account?id=123`
- User A changes URL to `/account?id=124` (User B's account)
- If User B's data is displayed → horizontal escalation

**Test approach:**
- Access resources with different IDs (sequential, random)
- Verify each user can only access their own data
- Test with multiple parallel sessions

### Vertical Privilege Escalation

**Definition:** Gaining higher privileges than authorized.

**Example:**
- Regular user accesses admin functionality at `/admin/users`
- Non-manager approves expense reports
- Employee modifies salary data

**Test approach:**
- Access admin endpoints with regular user credentials
- Attempt to perform privileged operations
- Check for hidden endpoints or parameters that enable admin features

### Insecure Direct Object References (IDOR)

**Definition:** Exposing internal implementation objects (database keys, file paths) to users without access control.

**Example:**
- Download invoice at `/download?file=invoice_1234.pdf`
- Change to `/download?file=invoice_9999.pdf` (another user's invoice)

**Test approach:**
- Modify object references in URLs, parameters, headers
- Verify access controls are enforced server-side
- Test with tokens/IDs from other users

---

## 4.4 Input Validation and Output Encoding

### Input Validation Testing

**Test types:**

| Input Type | Test Examples |
|------------|---------------|
| **SQL Injection** | `' OR '1'='1`, `'; DROP TABLE users; --` |
| **Command Injection** | `; cat /etc/passwd`, `| whoami` |
| **XSS** | `<script>alert('xss')</script>`, `<img src=x onerror=alert(1)>` |
| **Path Traversal** | `../../../etc/passwd`, `..\..\windows\system32\config\sam` |
| **LDAP Injection** | `*)(uid=*))(&(uid=*` |
| **XML Injection/XXE** | `<!DOCTYPE foo [<!ENTITY xxe SYSTEM "file:///etc/passwd">]>` |
| **NoSQL Injection** | `{"$gt": ""}` |
| **Buffer Overflow** | Input exceeding expected length |
| **Format String** | `%s%s%s%s%n` |
| **Integer Overflow** | Maximum integer values |

**Validation approaches to test for:**
- **Whitelist:** Only allow known good input (preferred)
- **Blacklist:** Reject known bad input (insufficient alone)
- **Type checking:** Verify data type (integer, date, email)
- **Length checking:** Enforce minimum/maximum length
- **Range checking:** Enforce numeric ranges
- **Pattern matching:** Regex validation

### Output Encoding Testing

**Verify encoding for context:**
- **HTML context:** `&lt;script&gt;` not `<script>`
- **JavaScript context:** `\x3cscript\x3e`
- **URL context:** `%3Cscript%3E`
- **CSS context:** `\3c script\3e`
- **SQL context:** Parameterized queries, not string concatenation

**Test:** Inject special characters and verify they are rendered harmlessly in the appropriate context.

---

## 4.5 Fuzzing

### What is Fuzzing?

Fuzzing is an automated testing technique that inputs invalid, unexpected, or random data to a program to find crashes, memory leaks, or unexpected behavior.

### Types of Fuzzing

**Mutation-based (Dumb Fuzzing):**
- Start with valid input samples
- Randomly mutate (bit flip, byte insertion, deletion)
- No knowledge of input format

**Generation-based (Smart Fuzzing):**
- Understand input format (protocol, file format)
- Generate inputs that conform to structure but with edge cases
- More efficient, better coverage

**Coverage-guided Fuzzing:**
- Instrument the target to measure code coverage
- Prioritize inputs that reach new code paths
- Iteratively mutate high-coverage inputs

### Fuzzing Targets

| Target | Example |
|--------|---------|
| Web applications | Form inputs, API parameters, headers |
| File parsers | Image parsers, document viewers |
| Network protocols | TCP/IP stacks, custom protocols |
| APIs | REST endpoints, GraphQL queries |
| Command-line tools | Arguments, environment variables |

---

## 4.6 Static and Dynamic Analysis

### SAST (Static Application Security Testing)

**What it analyzes:** Source code, bytecode, or binary without executing the program.

**What it finds:**
- Hardcoded credentials
- SQL injection vulnerabilities in code
- Insecure cryptographic implementations
- Buffer overflow risks
- Insecure API usage

**When to use:** During development, in CI/CD pipelines.

**Limitations:**
- High false positive rate
- Cannot find runtime issues (session management, business logic flaws)
- Requires access to source code

### DAST (Dynamic Application Security Testing)

**What it analyzes:** Running application from the outside, like an attacker.

**What it finds:**
- Runtime vulnerabilities (XSS, SQL injection in running app)
- Authentication weaknesses
- Session management issues
- Configuration errors
- Information disclosure

**When to use:** In test/staging environments, before production.

**Limitations:**
- Cannot find code-level issues without triggering them
- Lower code coverage than SAST
- May miss vulnerabilities behind authentication

### IAST (Interactive Application Security Testing)

**What it does:** Combines SAST and DAST by instrumenting the running application to observe code behavior during dynamic testing.

**Advantages:**
- Lower false positives than SAST
- More coverage than DAST alone
- Can trace vulnerabilities to specific lines of code
- Understands data flow through the application

**When to use:** During functional testing, in test environments.

### Comparison

| Aspect | SAST | DAST | IAST |
|--------|------|------|------|
| Execution | No | Yes | Yes (instrumented) |
| Source code needed | Yes | No | Yes |
| False positives | High | Low | Very low |
| Coverage | All code | Executed paths | Executed code |
| CI/CD integration | Early | Later (needs running app) | During testing |
| Business logic flaws | No | Sometimes | Yes |

---

## Worked Examples

### Worked Example 1: Authentication Test Design

**Scenario:** Test a web application login system.

| Test Case | Input | Expected Result |
|-----------|-------|---------------|
| Valid login | Correct username/password | Access granted, session created |
| Invalid password | Correct username, wrong password | Access denied, generic error |
| SQL injection in password | `admin' OR '1'='1` | Access denied, no database error exposed |
| Brute force | 100 failed attempts | Account locked after N attempts |
| Weak password | Password = "123456" | Registration rejected or warning |
| Session fixation | Attacker's session ID before login | New session ID after login |
| Logout | Click logout | Session invalidated, back button doesn't restore access |
| Concurrent sessions | Login from two browsers | Allowed or second login terminates first (per policy) |
| Password reset | Request reset for valid email | Reset link sent, token expires, single-use |
| MFA bypass | Skip MFA parameter in request | Request rejected or MFA still required |

### Worked Example 2: Input Validation Test Matrix

**Scenario:** Test a search function that queries a database.

| Test | Input | Expected Behavior | Vulnerability if Fails |
|------|-------|-------------------|------------------------|
| Normal input | "laptop" | Returns laptop results | — |
| SQL injection | "'; DROP TABLE products; --" | Sanitized or rejected; no error | SQL injection |
| XSS attempt | "<script>alert(1)</script>" | Encoded in response; no script execution | Stored/reflected XSS |
| Path traversal | "../../../etc/passwd" | Rejected or sanitized | Path traversal |
| Oversized input | 10,000 characters | Truncated or rejected | Buffer overflow, DoS |
| Unicode | "<img src=x onerror=alert(1)>" | Properly encoded | XSS via encoding bypass |
| Null byte | "file.php%00.jpg" | Rejected | Null byte injection |
| Special chars | `!@#$%^&*()_+-=[]{}|;':",./<>?` | Properly handled | Injection or parser issues |

### Worked Example 3: Authorization Test Design

**Scenario:** An e-commerce admin panel with roles: Admin, Manager, Viewer.

| Role | Operation | Admin | Manager | Viewer | Unauthenticated |
|------|-----------|-------|---------|--------|----------------|
| View orders | GET /orders | ✓ | ✓ | ✓ | ✗ |
| Update order | PUT /orders/{id} | ✓ | ✓ | ✗ | ✗ |
| Delete order | DELETE /orders/{id} | ✓ | ✗ | ✗ | ✗ |
| View user list | GET /users | ✓ | ✓ | ✗ | ✗ |
| Modify user role | PUT /users/{id}/role | ✓ | ✗ | ✗ | ✗ |
| View audit logs | GET /audit | ✓ | ✗ | ✗ | ✗ |
| Access config | GET /config | ✓ | ✗ | ✗ | ✗ |

**Test cases:**
1. Each role attempts all operations → verify expected access
2. Horizontal: Manager A tries to access Manager B's draft orders → denied
3. Vertical: Manager tries admin-only operations → denied
4. IDOR: Viewer changes URL from `/orders/123` to `/orders/124` → verify access control
5. Hidden endpoint: Unauthenticated access to `/admin` → redirected to login
