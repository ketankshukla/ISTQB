<!-- ISTQB-BEAUTIFY-V1 -->
<style>
html, body {
  background-color: #000000 !important;
  color: #F5F5F5 !important;
}
body {
  font-size: 19px !important;
  line-height: 1.85 !important;
  font-family: 'Segoe UI', 'Trebuchet MS', Verdana, sans-serif !important;
  padding: 24px 44px !important;
  letter-spacing: 0.2px;
}
h1 { color: #FFD700 !important; font-size: 2.7em !important; font-weight: 800 !important; border-bottom: 3px solid #FF5252 !important; padding-bottom: 0.25em; }
h2 { color: #00E5FF !important; font-size: 2.05em !important; font-weight: 800 !important; border-bottom: 2px solid #00E5FF !important; padding-bottom: 0.2em; }
h3 { color: #69F0AE !important; font-size: 1.6em !important; font-weight: 700 !important; }
h4 { color: #FF80AB !important; font-size: 1.35em !important; font-weight: 700 !important; }
h5 { color: #FFAB40 !important; font-size: 1.2em !important; font-weight: 700 !important; }
h6 { color: #B388FF !important; font-size: 1.1em !important; font-weight: 700 !important; }
p, li, td, th, span, div { font-size: 1em !important; color: #F5F5F5 !important; }
strong, b { color: #FFEB3B !important; }
em, i { color: #FF8A65 !important; }
a { color: #40C4FF !important; text-decoration: underline; }
a:hover { color: #80D8FF !important; }
code { color: #FF4081 !important; background: transparent !important; font-size: 0.95em !important; }
pre { background: transparent !important; border: 1px solid #555 !important; border-radius: 8px; padding: 14px !important; }
pre code { color: #80CBC4 !important; }
blockquote { color: #B0BEC5 !important; border-left: 5px solid #FFD700 !important; background: transparent !important; padding-left: 18px; font-style: italic; }
table { border-collapse: collapse !important; background: transparent !important; }
th { color: #FFD700 !important; border: 2px solid #00E5FF !important; background: transparent !important; padding: 8px 12px !important; }
td { color: #F5F5F5 !important; border: 1px solid #607D8B !important; background: transparent !important; padding: 8px 12px !important; }
hr { border: none; border-top: 2px dashed #FF5252 !important; margin: 1.5em 0; }
ul li::marker { color: #69F0AE !important; font-size: 1.1em; }
ol li::marker { color: #00E5FF !important; font-weight: bold; }
</style>
# 📂 Case Study 4: User Login and Account Lockout

## ⭐ System Description

A web application has a login system with security features including account lockout after multiple failed attempts, password complexity requirements, and session management.

---

## 📑 Requirements Specification

### 🔷 REQ-LOGIN-001: Credentials
- Username: email address format (must contain @ and a valid domain)
- Password: 8-64 characters, must contain at least one uppercase letter, one lowercase letter, one digit, and one special character

### 🔷 REQ-LOGIN-002: Authentication
- Valid username + valid password -> login successful, redirect to dashboard
- Valid username + invalid password -> "Invalid credentials" (generic message)
- Invalid/unknown username -> same "Invalid credentials" message (do not reveal whether account exists)

### 🔷 REQ-LOGIN-003: Account Lockout
- After 5 consecutive failed login attempts for the same account, lock the account for 30 minutes
- Display message "Account locked. Try again after 30 minutes."
- After lockout expires, the attempt counter resets
- A successful login at any point before lockout resets the counter

### 🗂️ REQ-LOGIN-004: Session Management
- Session timeout: 30 minutes of inactivity
- Maximum concurrent sessions per user: 3
- If a 4th session is initiated, the oldest session is terminated

### 🔷 REQ-LOGIN-005: Password Reset
- "Forgot password" link sends a reset email to the registered address
- Reset link expires after 24 hours
- Reset link can only be used once

---

## ⭐ User Stories

**US-1: Secure Login**
```
As a registered user,
I want to log in securely with my email and password,
So that only I can access my account.
```

Acceptance Criteria:
- Given I enter my correct email and password, When I click "Login", Then I am redirected to my dashboard
- Given I enter a wrong password, When I click "Login", Then I see "Invalid credentials" and my failed attempt counter increments
- Given my account is locked, When I try to login with correct credentials, Then I see the lockout message and cannot access my account
- Given my account was locked 30 minutes ago, When I try to login with correct credentials, Then login succeeds and the counter resets

**US-2: Account Lockout Protection**
```
As the system,
I want to lock accounts after repeated failed attempts,
So that brute-force attacks are prevented.
```

Acceptance Criteria:
- Given I have entered the wrong password 4 times, When I enter the wrong password a 5th time, Then my account is locked for 30 minutes
- Given I have entered the wrong password 3 times, When I enter the correct password, Then login succeeds and the counter resets to 0
- Given my account is locked, When the 30-minute lockout period expires, Then I can attempt login again with a fresh counter

---

## 🎯 Applying Test Techniques

### ➗ 1. Equivalence Partitioning on Username Field

| Partition | Description | Example | Valid/Invalid |
|-----------|-------------|---------|---------------|
| P1 | Valid email format, registered account | user@domain.com | Valid |
| P2 | Valid email format, NOT registered | unknown@domain.com | Invalid (auth will fail) |
| P3 | Missing @ symbol | userdomain.com | Invalid (format) |
| P4 | Missing domain | user@ | Invalid (format) |
| P5 | Empty field | "" | Invalid |
| P6 | Contains spaces | "user @domain.com" | Invalid (format) |

### ➗ 2. Equivalence Partitioning on Password Field

| Partition | Description | Example | Valid/Invalid |
|-----------|-------------|---------|---------------|
| P1 | Meets all complexity requirements, correct | "P@ssw0rd!" | Valid |
| P2 | Meets complexity, but wrong password | "Wr0ng!Pass" | Invalid (wrong) |
| P3 | Too short (< 8 chars) | "Ab1!" | Invalid (format) |
| P4 | Too long (> 64 chars) | 65+ character string | Invalid (format) |
| P5 | Missing uppercase | "p@ssw0rd!" | Invalid (format) |
| P6 | Missing lowercase | "P@SSW0RD!" | Invalid (format) |
| P7 | Missing digit | "P@ssword!" | Invalid (format) |
| P8 | Missing special character | "Passw0rds" | Invalid (format) |
| P9 | Empty field | "" | Invalid |

### 📏 3. Boundary Value Analysis on Password Length

| Value | Length | Expected | Boundary |
|-------|--------|----------|----------|
| 7 chars | 7 | Invalid: too short | Below lower |
| 8 chars | 8 | Valid (if complexity met) | Lower boundary |
| 64 chars | 64 | Valid (if complexity met) | Upper boundary |
| 65 chars | 65 | Invalid: too long | Above upper |

### 🔄 4. State Transition for Account Lockout (REQ-LOGIN-003)

**States:**
- S0: Active (0 failed attempts)
- S1: 1 Failed Attempt
- S2: 2 Failed Attempts
- S3: 3 Failed Attempts
- S4: 4 Failed Attempts
- S5: Locked (5 failed attempts reached)
- S6: Lockout Expired (after 30 min)

**State Transition Table:**

| Current State | Event | Next State | Action |
|---------------|-------|------------|--------|
| S0 | Correct password | S0 | Login successful |
| S0 | Wrong password | S1 | "Invalid credentials" |
| S1 | Correct password | S0 | Login successful, counter reset |
| S1 | Wrong password | S2 | "Invalid credentials" |
| S2 | Correct password | S0 | Login successful, counter reset |
| S2 | Wrong password | S3 | "Invalid credentials" |
| S3 | Correct password | S0 | Login successful, counter reset |
| S3 | Wrong password | S4 | "Invalid credentials, 1 attempt remaining" |
| S4 | Correct password | S0 | Login successful, counter reset |
| S4 | Wrong password | S5 | "Account locked for 30 minutes" |
| S5 | Any login attempt | S5 | "Account locked" (no change) |
| S5 | 30 minutes elapsed | S6 | Lockout expires |
| S6 | Correct password | S0 | Login successful |
| S6 | Wrong password | S1 | Counter starts fresh |

**Valid transitions: 14**

**0-switch coverage test cases:**

| TC | Path | Key Transitions Covered |
|----|------|------------------------|
| TC1 | S0 -> correct -> S0 | Happy path login |
| TC2 | S0 -> wrong -> S1 -> correct -> S0 | Recovery after 1 failure |
| TC3 | S0 -> wrong -> S1 -> wrong -> S2 -> wrong -> S3 -> wrong -> S4 -> wrong -> S5 | Full lockout path |
| TC4 | S5 -> attempt -> S5 | Login during lockout blocked |
| TC5 | S5 -> 30min -> S6 -> correct -> S0 | Recovery after lockout |
| TC6 | S6 -> wrong -> S1 | Fresh counter after lockout |
| TC7 | S2 -> correct -> S0 | Recovery from mid-count |
| TC8 | S3 -> correct -> S0 | Recovery from 3 failures |
| TC9 | S4 -> correct -> S0 | Recovery from 4 failures |

All 14 transitions covered in 9 test cases. (Several can be combined into longer paths.)

### 🗂️ 5. Decision Table for Login Outcome

**Conditions:**
- C1: Username format valid?
- C2: Account exists?
- C3: Account locked?
- C4: Password correct?

| | R1 | R2 | R3 | R4 | R5 | R6 |
|---|---|---|---|---|---|---|
| C1: Format valid | F | T | T | T | T | T |
| C2: Account exists | - | F | T | T | T | T |
| C3: Account locked | - | - | - | T | F | F |
| C4: Password correct | - | - | - | - | T | F |
| Format error | X | | | | | |
| "Invalid credentials" | | X | X | | | X |
| "Account locked" | | | | X | | |
| Login successful | | | | | X | |

Notes: R2 and R3 both show "Invalid credentials" (intentionally identical to avoid revealing whether account exists). R3 covers the case where account exists but is not locked — wait, that should go to R5/R6. Let me restructure:

**Simplified (correct) decision table:**

| | R1 | R2 | R3 | R4 | R5 |
|---|---|---|---|---|---|
| C1: Valid format | F | T | T | T | T |
| C2: Account exists + not locked | - | F | T | T | T |
| C3: Correct password | - | - | - | T | F |
| C4: Account locked | - | - | T (locked) | - | - |
| Show format error | X | | | | |
| Show "Invalid credentials" | | X | | | X |
| Show "Account locked" | | | X | | |
| Login successful | | | | X | |
| Increment fail counter | | | | | X |

**5 rules -> 5 test cases.**

---

## ⚠️ Risk-Based Test Approach

| ID | Risk | Likelihood | Impact | Level |
|----|------|------------|--------|-------|
| R1 | Lockout bypass allows brute-force attacks | 2 | 5 | 10 High |
| R2 | Error message reveals account existence | 3 | 4 | 12 High |
| R3 | Lockout counter not reset on successful login | 3 | 3 | 9 Medium |
| R4 | Lockout timer inaccurate (unlocks too early/late) | 2 | 3 | 6 Medium |
| R5 | Session not terminated after timeout | 2 | 4 | 8 Medium |
| R6 | Password reset link usable multiple times | 2 | 4 | 8 Medium |

**Testing priorities:**
1. R2: Verify identical error messages for "wrong password" vs "unknown user"
2. R1: Full state transition testing of lockout mechanism
3. R3: Verify counter reset after successful login mid-sequence
4. R5: Session timeout testing
5. R6: Reset link single-use enforcement
6. R4: Timer accuracy (may need test with time manipulation)

---

## 💡 Statement/Branch Coverage Example

**Lockout check code:**

```
1: function attemptLogin(username, password, failedAttempts, lockedUntil) {
2:     currentTime = now()
3:     if (lockedUntil != null && currentTime < lockedUntil) {
4:         return { status: "LOCKED", message: "Account locked" }
5:     }
6:     account = findAccount(username)
7:     if (account == null) {
8:         return { status: "FAIL", message: "Invalid credentials" }
9:     }
10:    if (account.password != hash(password)) {
11:        newAttempts = failedAttempts + 1
12:        if (newAttempts >= 5) {
13:            lockAccount(username, currentTime + 30min)
14:            return { status: "LOCKED", message: "Account locked" }
15:        }
16:        updateFailCount(username, newAttempts)
17:        return { status: "FAIL", message: "Invalid credentials" }
18:    }
19:    resetFailCount(username)
20:    createSession(username)
21:    return { status: "SUCCESS", message: "Welcome" }
22: }
```

**Executable statements:** Lines 2, 3, 4, 6, 7, 8, 10, 11, 12, 13, 14, 16, 17, 19, 20, 21 = 16 statements

**Branches:**
- Line 3: T/F (2)
- Line 7: T/F (2)
- Line 10: T/F (2)
- Line 12: T/F (2)
- Total: 8 branches

**Test cases for 100% branch coverage:**

| TC | Scenario | Branches Covered |
|----|----------|------------------|
| TC1 | Account locked, time not expired | L3T |
| TC2 | Unknown username | L3F, L7T |
| TC3 | Known user, wrong password, attempts < 5 | L3F, L7F, L10T, L12F |
| TC4 | Known user, wrong password, attempts = 4 (becomes 5) | L3F, L7F, L10T, L12T |
| TC5 | Known user, correct password | L3F, L7F, L10F |

**5 test cases -> 8/8 branches = 100% branch coverage.**

---

## 🗓️ Sample Test Plan Excerpt

**Scope:** Login module (REQ-LOGIN-001 through REQ-LOGIN-005)

**High-priority tests:** Lockout mechanism (state transitions), credential validation, error message consistency

**Entry criteria:**
- Login module deployed to test environment
- Test accounts created (various states: active, locked, expired)
- Email service configured in test mode

**Exit criteria:**
- All state transition paths tested
- All EP/BVA boundary cases passed
- No security-related defects open
- Error messages verified for information leakage

---

## 🐞 Sample Defect Report

```
ID:             BUG-LOGIN-205
Title:          Different error messages for invalid username vs 
                invalid password reveal whether an account exists
Severity:       High
Priority:       Critical (security vulnerability)
Component:      Authentication Module
Environment:    Staging server, Chrome 122, Windows 11
Steps:
1. Attempt login with an unregistered email (notauser@test.com) 
   and any password
2. Observe error message
3. Attempt login with a registered email (realuser@test.com) 
   and a wrong password
4. Observe error message
Expected: Both attempts show identical message "Invalid credentials" 
          (per REQ-LOGIN-002: do not reveal account existence)
Actual:
- Step 2 shows: "No account found with this email"
- Step 4 shows: "Incorrect password"
Impact: An attacker can enumerate valid accounts by observing which 
        message appears, facilitating targeted brute-force attacks
Related Req: REQ-LOGIN-002
```

---

## ❓ Reflection Questions

1. Why is the state transition technique particularly well-suited for testing the lockout mechanism?

2. If you added a CAPTCHA after 3 failed attempts (before lockout at 5), how would the state diagram change?

3. What negative tests would error guessing suggest for the "Forgot Password" feature?

4. How do the EP partitions for username complement the state transition testing of the lockout?

---

## ⭐ Worked Solutions

**1.** The lockout mechanism is inherently stateful — the system behaves differently depending on how many previous failures have occurred. State transition testing naturally models this counting behavior, making it easy to verify that: (a) the counter increments correctly, (b) the counter resets on success, (c) the lockout triggers at exactly 5, not 4 or 6, (d) the lockout duration is correct, and (e) recovery works properly. Without modeling states, you might miss transitions like "successful login after 3 failures resets counter."

**2.** Adding CAPTCHA after 3 failures introduces a new state (S3-CAPTCHA) between S3 and S4. The diagram gains transitions: S3 -> wrong -> S3-CAPTCHA (show CAPTCHA), S3-CAPTCHA -> CAPTCHA correct + password wrong -> S4, S3-CAPTCHA -> CAPTCHA wrong -> S3-CAPTCHA (retry CAPTCHA), S3-CAPTCHA -> CAPTCHA correct + password correct -> S0. This adds complexity that requires additional test cases for the new CAPTCHA-related transitions.

**3.** Error guessing for "Forgot Password": (a) Request reset for unregistered email — should not reveal account absence; (b) Click reset link after 24h — should show "expired"; (c) Click reset link twice — second use should fail; (d) Modify the reset URL/token — should be rejected; (e) Request multiple resets in rapid succession — should rate-limit; (f) Reset to a password identical to the old one — should that be allowed?; (g) Reset link with an already-locked account — should still work (lockout is for login, not password reset).

**4.** EP on username covers FORMAT validation (does the system accept/reject various input patterns), while state transition covers BEHAVIORAL logic (what happens over time with repeated attempts). Together they test different dimensions: EP verifies the system rejects malformed inputs immediately, while state transition verifies the system correctly tracks and responds to sequences of valid-format but wrong-credential attempts. Both are needed for comprehensive login testing.
