# Case Study 2 — Sprint Testing

## Context

You are the tester on a Scrum team building a mobile banking app. The team is in Sprint 3, with a 2-week sprint cycle. The product owner has prioritized 6 user stories for this sprint.

## Sprint 3 User Stories

**US-301: View Account Balance**
- As a customer, I want to view my account balance so that I know my available funds.
- Acceptance criteria: Balance displays within 2 seconds, updates after transactions, shows both available and pending balances.

**US-302: Transfer Between Own Accounts**
- As a customer, I want to transfer money between my own accounts so that I can manage my funds.
- Acceptance criteria: Transfer completes within 5 seconds, confirmation displayed, balance updated, minimum transfer $1, maximum $10,000 per day.

**US-303: Transaction History**
- As a customer, I want to view my transaction history so that I can track my spending.
- Acceptance criteria: Shows last 50 transactions, filterable by date and amount, exportable to CSV.

**US-304: Biometric Login**
- As a customer, I want to log in using my fingerprint so that I can access my account quickly.
- Acceptance criteria: Fingerprint authentication on supported devices, fallback to PIN, secure token storage.

**US-305: Push Notifications**
- As a customer, I want to receive push notifications for transactions so that I am aware of account activity.
- Acceptance criteria: Notification within 10 seconds of transaction, configurable alert types, respect Do Not Disturb settings.

**US-306: Profile Update**
- As a customer, I want to update my contact information so that the bank can reach me.
- Acceptance criteria: Update email and phone, validation of formats, confirmation message sent.

---

## Task 1: Test Strategy for the Sprint

Design a testing approach for Sprint 3 that covers all 6 stories.

**Model Answer:**

**Sprint Planning (Day 1):**
- Review all 6 stories for testability.
- Identify dependencies: US-302 requires US-301 (balance must be visible). US-305 requires US-302 (transaction must complete to trigger notification).
- Estimate testing effort: ~40 hours of testing across the sprint.

**Three Amigos Meetings (Days 1-2):**

**US-301 (View Balance):**
- Edge cases: What if account has negative balance? What if network is slow?
- Non-functional: Response time under 2 seconds (performance test).

**US-302 (Transfer):**
- Edge cases: Transfer exactly $1, exactly $10,000, $10,001 (should reject).
- Security: Verify no amount manipulation via API.

**US-303 (Transaction History):**
- Edge cases: Empty history for new accounts, 51st transaction (pagination), date range spanning month boundary.

**US-304 (Biometric Login):**
- Edge cases: Unsupported device, fingerprint not recognized, token expiration.
- Security: Verify token is not stored in plaintext.

**US-305 (Push Notifications):**
- Edge cases: App in background, app closed, device offline when notification sent (queue and deliver when online).

**US-306 (Profile Update):**
- Edge cases: Invalid email format, duplicate phone number, simultaneous updates from web and mobile.

**Testing Activities During Sprint:**

| Days | Activity | Stories |
|------|----------|---------|
| 1-2 | Write BDD acceptance tests, set up test data | All |
| 2-4 | Pair with developers testing US-301, US-306 | 301, 306 |
| 3-5 | Exploratory testing on US-301, US-306 as they complete | 301, 306 |
| 4-6 | Pair with developers testing US-302, US-303 | 302, 303 |
| 5-7 | Exploratory testing on US-302, US-303 | 302, 303 |
| 6-8 | Pair with developers testing US-304, US-305 | 304, 305 |
| 7-9 | Exploratory testing on US-304, US-305 | 304, 305 |
| 8-10 | Regression testing, sprint review prep | All |

**Test Types Applied:**

| Story | Functional | Non-Functional | Security | Usability |
|-------|-----------|----------------|----------|-----------|
| US-301 | Balance display | Performance (<2s) | — | Layout, readability |
| US-302 | Transfer logic | Performance (<5s) | API validation | Error messages |
| US-303 | History display | Export performance | — | Filtering UX |
| US-304 | Login flow | — | Token storage | Fallback UX |
| US-305 | Notification delivery | Timing (<10s) | — | Do Not Disturb |
| US-306 | Update logic | — | Input validation | Confirmation UX |

---

## Task 2: BDD Acceptance Tests

Write BDD scenarios for US-302 (Transfer Between Own Accounts).

**Model Answer:**

```gherkin
Feature: Transfer Between Own Accounts

  Scenario: Successful transfer within limits
    Given the checking account has balance $500
    And the savings account has balance $1000
    When the customer transfers $200 from checking to savings
    Then the checking account balance should be $300
    And the savings account balance should be $1200
    And a confirmation message should be displayed

  Scenario: Transfer at daily maximum
    Given the customer has already transferred $9,999 today
    When the customer transfers $1 from checking to savings
    Then the transfer should be successful
    And the daily transfer total should be $10,000

  Scenario: Transfer exceeds daily maximum
    Given the customer has already transferred $9,000 today
    When the customer transfers $1,001 from checking to savings
    Then an error "Daily transfer limit exceeded" should be displayed
    And no funds should be transferred

  Scenario: Transfer below minimum
    Given the checking account has balance $500
    When the customer transfers $0.50 from checking to savings
    Then an error "Minimum transfer is $1" should be displayed

  Scenario: Insufficient funds
    Given the checking account has balance $100
    When the customer transfers $200 from checking to savings
    Then an error "Insufficient funds" should be displayed
    And no funds should be transferred
```

---

## Task 3: Risk-Based Testing

The sprint is halfway through and 2 developers are sick. The team can only complete 4 of the 6 stories. Which 2 stories should be deferred, and why?

**Model Answer:**

**Priority 1 — Must Complete (Highest Business Value + Risk):**

1. **US-301 (View Balance):** Core functionality. The app is useless without it. High business value.
2. **US-302 (Transfer):** Core functionality. Financial transaction — high risk if defective. Regulatory implications.
3. **US-304 (Biometric Login):** Security feature. Authentication must work correctly. Fallback to PIN ensures accessibility.
4. **US-306 (Profile Update):** Required for regulatory compliance (up-to-date contact info). Low risk but necessary.

**Priority 2 — Can Defer (Lower Immediate Value):**

5. **US-303 (Transaction History):** Important but not core. Users can view balance (US-301) without history. Can be deferred to Sprint 4.
6. **US-305 (Push Notifications):** Enhancement. Nice to have but not critical for basic functionality. Can be deferred to Sprint 4.

**Rationale:** Core functionality (balance, transfer, login) and compliance (profile update) take precedence over enhancements (history, notifications). Transaction history and notifications can be added later without breaking the core experience.

---

## Task 4: Exploratory Testing Charters

Write test charters for exploratory testing of US-304 (Biometric Login).

**Model Answer:**

**Charter 1: Supported Devices and Scenarios**
- Mission: Explore biometric login on all supported device types (iPhone with Face ID, Android with fingerprint, older devices without biometric support).
- Approach: Test on physical devices and simulators. Verify fingerprint enrollment, recognition, and fallback.
- Duration: 60 minutes

**Charter 2: Security and Edge Cases**
- Mission: Explore the security of biometric authentication and identify edge cases where it might fail or be bypassed.
- Approach: Test with unregistered fingerprints, after device restart, when app is killed and restarted, with wrong fingerprint multiple times.
- Duration: 60 minutes

**Charter 3: Fallback and User Experience**
- Mission: Explore the fallback to PIN and overall user experience of the login flow.
- Approach: Test fallback from biometric to PIN, error messages, retry behavior, accessibility (screen reader compatibility).
- Duration: 45 minutes
