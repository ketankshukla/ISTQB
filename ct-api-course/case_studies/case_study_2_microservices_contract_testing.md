# Case Study 2 — Microservices Contract Testing

## Context

You are the API Test Architect for BankConnect, a digital banking platform with 40 microservices.

**Architecture:**
- API Gateway (Kong) → 40 microservices
- Services: Accounts, Transactions, Payments, Loans, Notifications, Auth, etc.
- Each service has its own REST API
- 8 development teams, each owning 4-6 services
- Current state:
  - Integration tests take 4 hours to run
  - Test environment is unstable (services frequently down)
  - "Integration hell" — deploys often break other teams' services
  - No contract testing in place
  - API changes cause cascading failures

## Task 1: Problem Analysis

**Question:** Analyze why integration testing is failing at BankConnect.

**Model Answer:**

**Problems with Current Integration Testing:**

| Problem | Impact |
|---------|--------|
| 4-hour test suite | Slow feedback, run infrequently |
| Unstable test environment | False failures erode trust |
| Tight coupling in tests | Cannot test services independently |
| No contract definitions | Teams make breaking changes unknowingly |
| Cascading failures | One broken service blocks all teams |
| Long defect diagnosis | Hard to determine which service caused failure |

**Root Cause:**
Tight coupling between services in testing. Integration tests require all 40 services to be running and stable. This is unrealistic and creates a bottleneck.

---

## Task 2: Contract Testing Strategy

**Question:** Design a contract testing strategy for BankConnect.

**Model Answer:**

**Selected Approach:** Consumer-Driven Contract Testing with Pact

**Architecture:**
```
Service A (Consumer)
  |
  writes contract expectations
  |
  tests against mock provider
  |
  publishes contract to Pact Broker

Service B (Provider)
  |
  retrieves contract from Pact Broker
  |
  verifies contract in its own CI pipeline
  |
  publishes verification results
```

**Implementation Plan:**

| Phase | Duration | Activities |
|-------|----------|------------|
| 1. Pilot | Month 1 | Select 2 critical service pairs (Payments → Accounts, Frontend → Auth). Implement Pact tests. Set up Pact Broker. |
| 2. Expansion | Months 2-4 | Roll out to 10 most critical service pairs. Train teams. |
| 3. Full Coverage | Months 5-6 | Roll out to all 40 services. |
| 4. Optimization | Ongoing | Reduce integration test scope. Use contract tests as primary gate. |

**Pact Broker Setup:**
- Centralized contract repository
- Webhook notifications when contracts break
- Can-I-Deploy tool to check if provider is safe to deploy

---

## Task 3: Consumer Test Example

**Question:** Write a consumer contract test for the Notifications service consuming the Transactions service.

**Model Answer:**

**Scenario:** When a transaction is completed, the Notifications service needs transaction details to send an email.

**Consumer (Notifications Service) Test:**
```javascript
const { Pact } = require('@pact-foundation/pact');

const provider = new Pact({
    consumer: 'NotificationsService',
    provider: 'TransactionsService',
    port: 1234
});

describe('Transaction Notifications Contract', () => {
    beforeAll(() => provider.setup());
    afterAll(() => provider.finalize());

    it('receives transaction details on completion', async () => {
        await provider.addInteraction({
            state: 'transaction 456 is completed',
            uponReceiving: 'get completed transaction details',
            withRequest: {
                method: 'GET',
                path: '/transactions/456',
                headers: { 'Authorization': 'Bearer test-token' }
            },
            willRespondWith: {
                status: 200,
                headers: { 'Content-Type': 'application/json' },
                body: {
                    transactionId: 456,
                    accountId: 123,
                    amount: 100.00,
                    currency: 'USD',
                    type: 'transfer',
                    status: 'completed',
                    completedAt: '2024-01-15T10:30:00Z'
                }
            }
        });

        const transaction = await notificationsService
            .getTransactionDetails(456);
        
        expect(transaction.transactionId).toBe(456);
        expect(transaction.status).toBe('completed');
        expect(transaction.amount).toBe(100.00);
    });
});
```

**Key Contract Points:**
- Response must include `transactionId`, `accountId`, `amount`, `currency`, `type`, `status`, `completedAt`
- `status` must be `"completed"`
- `amount` must be a number
- `completedAt` must be a valid ISO 8601 datetime

---

## Task 4: Provider Verification

**Question:** Design the provider verification process for the Transactions service.

**Model Answer:**

**Provider Verification Script:**
```bash
#!/bin/bash
# Run in Transactions Service CI pipeline

pact-verifier \
    --provider TransactionsService \
    --provider-app-version $CI_COMMIT_SHA \
    --provider-branch $CI_BRANCH \
    --publish-verification-results \
    --pact-broker-base-url https://pact-broker.bankconnect.internal \
    --enable-pending \
    --consumer-version-selectors '{"mainBranch": true}'
```

**Verification Steps:**
1. Start Transactions Service with test database
2. Seed database with test data matching Pact states
3. Run Pact verifier against all consumer contracts
4. Publish results to Pact Broker
5. Fail CI if any contract verification fails

**State Management:**
```javascript
// Provider state setup
const stateHandlers = {
    'transaction 456 is completed': async () => {
        await db.transactions.insert({
            id: 456,
            accountId: 123,
            amount: 100.00,
            currency: 'USD',
            type: 'transfer',
            status: 'completed',
            completedAt: '2024-01-15T10:30:00Z'
        });
    }
};
```

---

## Task 5: Deployment Safety with Can-I-Deploy

**Question:** How does BankConnect use contract testing to make deployment safer?

**Model Answer:**

**Can-I-Deploy Workflow:**
```
Team A wants to deploy Transactions Service v2.5.0
  |
  1. Run provider verification in CI
  |
  2. Publish verification results to Pact Broker
  |
  3. Before deploying to production, run:
     pact-broker can-i-deploy \
       --pacticipant TransactionsService \
       --version $CI_COMMIT_SHA \
       --to-environment production
  |
  4. Pact Broker checks:
     - Have all consumers verified this version?
     - Are all verifications passing?
  |
  5. If YES → deploy safely
     If NO → block deployment, fix issues
```

**Benefits:**
- Prevents deployment of breaking changes
- Catches contract violations in CI, not production
- Teams can deploy independently with confidence

---

## Task 6: Reducing Integration Tests

**Question:** How should BankConnect adjust its integration test strategy after implementing contract testing?

**Model Answer:**

**Integration Test Reduction Plan:**

| Test Type | Before | After (6 months) | Rationale |
|-----------|--------|-----------------|-----------|
| Full integration suite | 4 hours | 30 minutes | Contract tests cover format contracts |
| Smoke tests | Minimal | Expanded | Quick health check of all services |
| Critical path integration | All | Key flows only | E2E tests for most important user journeys |
| Contract tests | 0 | All service pairs | Replace format validation in integration tests |

**Remaining Integration Tests:**
- User registration → login → create account → transfer money (E2E)
- Payment processing with real payment gateway (in sandbox)
- Report generation with large datasets

**Rule:** If a scenario can be covered by contract tests, remove it from integration tests.
