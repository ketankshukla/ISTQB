# Case Study 2 — Risk-Based Testing

## Context

You are the Test Manager for PayFast, a fintech startup launching a new mobile payment app. The app allows users to:
- Link bank accounts and credit cards
- Send money to other users
- Pay merchants via QR code
- View transaction history

The app must comply with PCI DSS (Payment Card Industry Data Security Standard). The CEO wants to launch in 4 months.

## Current Situation

- Development is 60% complete
- First internal build available for testing
- Budget is tight; the CEO has asked you to "test smart" and focus on what matters most
- You have 2 testers and 1 automation engineer
- Previous testing found 47 defects, mostly UI-related

## Task 1: Risk Identification

**Question:** Identify product risks for the PayFast app and categorize them.

**Model Answer:**

**Product Risks:**

| Risk ID | Risk Description | Category |
|---------|-----------------|----------|
| R01 | Unauthorized money transfer (fraud) | Security |
| R02 | Payment card data is stolen or leaked | Security/Compliance |
| R03 | Money transfer sent to wrong recipient | Functional |
| R04 | Transaction amount is incorrect | Functional |
| R05 | App crashes during payment | Reliability |
| R06 | QR code payment fails in poor network conditions | Reliability |
| R07 | Transaction history shows incorrect data | Functional |
| R08 | User cannot unlink a compromised bank account | Functional |
| R09 | App is too slow during peak usage (e.g., Black Friday) | Performance |
| R10 | Payment notification is not sent | Functional |

---

## Task 2: Risk Assessment

**Question:** Assess likelihood and impact for each risk. Which 5 risks should receive the MOST testing effort?

**Model Answer:**

| Risk ID | Likelihood (1-5) | Impact (1-5) | Risk Priority | Rank |
|---------|-------------------|--------------|---------------|------|
| R01 | 3 | 5 | 15 | 1 |
| R02 | 2 | 5 | 10 | 3 |
| R03 | 3 | 4 | 12 | 2 |
| R04 | 2 | 5 | 10 | 3 |
| R05 | 3 | 3 | 9 | 5 |
| R06 | 4 | 3 | 12 | 2 |
| R07 | 3 | 3 | 9 | 5 |
| R08 | 2 | 4 | 8 | 6 |
| R09 | 3 | 4 | 12 | 2 |
| R10 | 3 | 2 | 6 | 7 |

**Top 5 Risks (by priority):**
1. R01 — Unauthorized money transfer (priority 15)
2. R03 — Wrong recipient (priority 12)
3. R06 — QR payment in poor network (priority 12)
4. R09 — Slow during peak usage (priority 12)
5. R02 — Card data stolen (priority 10) and R04 — Incorrect amount (priority 10) — tie

---

## Task 3: Risk-Based Test Planning

**Question:** Given your limited resources (2 testers + 1 automation engineer, 4 months), how would you allocate testing effort?

**Model Answer:**

**Effort Allocation by Risk:**

| Risk Rank | Testing Focus | Effort Allocation | Test Activities |
|-----------|--------------|-------------------|----------------|
| 1 (R01) | Security / Fraud prevention | 30% | Penetration testing, session management, authentication, authorization, fraud detection rules |
| 2 (R03, R04) | Payment accuracy | 25% | End-to-end payment flows, boundary testing on amounts, recipient validation, reconciliation |
| 3 (R06) | Reliability under poor network | 15% | Network simulation (slow, intermittent, offline), retry logic, timeout handling |
| 4 (R09) | Performance under load | 15% | Load testing, stress testing, scalability testing |
| 5 (R02) | PCI DSS compliance | 10% | Data encryption testing, tokenization verification, audit logging |
| 6-7 (R05, R07, R08, R10) | Remaining functionality | 5% | UI testing, transaction history, account management, notifications |

**Automation Strategy:**
- Automate smoke tests for every build (security login, basic payment flow)
- Automate regression tests for high-risk areas
- Manual testing for security penetration and exploratory testing
- Performance testing automated with JMeter scripts

---

## Task 4: Monitoring and Control

**Question:** You are halfway through the test execution phase. The following metrics are observed:

| Metric | Target | Actual |
|--------|--------|--------|
| Test cases executed | 200 | 120 |
| Pass rate | 95% | 82% |
| Critical defects found | 5 | 12 |
| Critical defects fixed | 5 | 4 |
| Security tests completed | 100% | 60% |
| Performance tests completed | 100% | 40% |

What control actions would you take?

**Model Answer:**

**Analysis:**
- Execution is behind (60% complete vs. expected 50% — actually slightly ahead of linear schedule, but security and performance are severely behind)
- Pass rate is concerning (82% vs. 95% target)
- Critical defect backlog is growing (12 found, only 4 fixed = 8 open)
- Security and performance testing are behind schedule — these are the highest-risk areas

**Control Actions:**

1. **Escalate critical defects immediately:**
   - Schedule daily standup with development lead
   - Prioritize security and payment accuracy defects
   - Suspend new feature development if needed to focus on fixes

2. **Reallocate resources to security and performance:**
   - Pull one tester from UI testing to focus on security tests
   - Have the automation engineer prioritize performance test scripts
   - Consider bringing in a security consultant for 1-2 weeks

3. **Extend or intensify testing in high-risk areas:**
   - Do NOT reduce security or performance testing scope
   - If needed, defer low-risk UI testing to a post-launch patch
   - Request overtime or weekend testing if team is willing

4. **Communicate with stakeholders:**
   - Inform CEO and product manager of the quality risks
   - Propose a 2-week schedule extension to complete critical testing
   - Present risk of launching without adequate security/performance testing

5. **Update risk assessment:**
   - Likelihood of R01 (fraud) and R02 (data theft) is now HIGHER because security testing is incomplete
   - Update stakeholders that these risks may not be adequately mitigated by launch
