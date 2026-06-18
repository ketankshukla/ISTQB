# 📂 Case Study 2 — Sports Betting Platform

## ⭐ Context

You are a Test Lead at BetSure, a sports betting operator preparing to launch in the Netherlands market. Your team must test the entire platform for compliance with KSA (Kansspelautoriteit) requirements.

## ⭐ Platform Features

- Pre-match and in-play betting on football, tennis, basketball, and esports
- Fixed-odds betting with cash-out feature
- Live streaming for select events
- Player account management with KYC integration
- CRUKS (national self-exclusion register) integration
- Mobile app and responsive website

## 📑 Regulatory Requirements (Netherlands)

- Mandatory CRUKS integration before first deposit
- Strict KYC before any real-money play
- No advertising targeting young adults (18-23)
- Maximum one welcome bonus per player, capped at value
- Mandatory reality checks after 1 hour of play
- Source of funds verification for deposits over EUR 2,000 in 24 hours

---

## 🗓️ Task 1: KYC and Registration Test Plan

Design test cases for the registration and KYC workflow.

**Model Answer:**

**Registration Tests:**

| Test Case | Input | Expected Result |
|-----------|-------|----------------|
| TC-REG-01 | Valid Dutch ID, age 30 | Registration successful, KYC pending |
| TC-REG-02 | Valid ID, age 17 | Registration rejected, age verification failed |
| TC-REG-03 | Expired passport | Registration rejected, valid ID required |
| TC-REG-04 | Foreign EU ID (German) | Registration successful if valid and meets requirements |
| TC-REG-05 | CRUKS-registered player attempts registration | Registration blocked, self-exclusion message displayed |
| TC-REG-06 | Duplicate email address | Registration rejected, existing account message |

**KYC Verification Tests:**

| Test Case | Input | Expected Result |
|-----------|-------|----------------|
| TC-KYC-01 | Valid passport, matching address | KYC approved, deposit enabled |
| TC-KYC-02 | Passport photo unclear | KYC rejected, re-submission requested |
| TC-KYC-03 | Address document older than 3 months | KYC rejected, recent document required |
| TC-KYC-04 | Name mismatch between ID and utility bill | KYC rejected, matching documents required |
| TC-KYC-05 | Deposit EUR 2,500 within 24 hours | Source of funds verification triggered |

---

## ⚡ Task 2: In-Play Betting Performance Test

Design a performance test for in-play betting during a major football match.

**Model Answer:**

**Scenario:** Champions League final, 50,000 concurrent in-play bettors

**Load Test:**
- Simulate 50,000 concurrent users viewing odds
- 10,000 users placing bets per minute at peak
- Odds update every 5 seconds based on match events

**Acceptance Criteria:**
- Odds display latency < 500ms
- Bet placement latency < 1 second
- Odds update pushed to all clients within 2 seconds
- No duplicate bets processed
- No lost bets during peak load
- Cash-out values calculate within 1 second

**Stress Test:**
- Push to 100,000 concurrent users
- Identify breaking point and graceful degradation behavior
- Verify no financial inconsistencies under extreme load

---

## ⭐ Task 3: Responsible Gaming Compliance Test

Design tests for responsible gaming features.

**Model Answer:**

**Reality Check Tests:**
- Verify reminder appears after exactly 60 minutes of play
- Verify reminder displays accurate time spent, amount wagered, and net result
- Verify player must acknowledge reminder before continuing
- Verify reminder appears again after next 60-minute interval

**Deposit Limit Tests:**
- Player sets daily limit of EUR 100
- Attempt deposit of EUR 50 → accepted
- Attempt second deposit of EUR 60 → rejected, limit would be exceeded
- Attempt to increase limit to EUR 200 → requires cooling-off period (e.g., 24 hours) before increase takes effect
- Attempt to decrease limit to EUR 50 → takes effect immediately

**CRUKS Integration Tests:**
- Player registered in CRUKS attempts to log in → blocked
- Player registered in CRUKS attempts to register → blocked
- Operator's system queries CRUKS daily for updates
- New CRUKS registration is enforced within 12 hours

**Source of Funds Tests:**
- Deposit EUR 1,500 in one day → no additional verification
- Deposit EUR 2,500 in one day → source of funds check triggered
- Player provides bank statement → verified and approved
- Player fails to provide documents within 7 days → account restricted

---

## 🐞 Task 4: Identify Critical Bugs

Which bugs would be BLOCKERS for launch?

**Model Answer:**

**Blockers (cannot launch without fix):**
1. CRUKS integration not functional → violates Dutch law
2. Underage player can register → violates law, severe penalties
3. In-play bets lost during high traffic → financial and regulatory risk
4. Self-excluded player can deposit → regulatory violation
5. Cash-out calculations incorrect → financial loss and player disputes

**Major (fix immediately after launch):**
1. Reality check wording not fully compliant with KSA guidelines
2. Mobile app crashes on Android 12 (affects limited users)
3. Source of funds email sent in English instead of Dutch

**Minor (fix in next release):**
1. Slight delay in odds update animation
2. Live stream quality reduced on 3G networks
3. Minor typo in terms and conditions
