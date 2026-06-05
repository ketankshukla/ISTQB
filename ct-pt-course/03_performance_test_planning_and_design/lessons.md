# Chapter 3 — Performance Test Planning and Design: Lessons

---

## 3.1 Performance Test Strategy

### Defining the Strategy

A performance test strategy defines:
- **Objectives:** What are we trying to achieve?
- **Scope:** Which features/scenarios will be tested?
- **Test types:** Load, stress, endurance, etc.
- **KPIs:** What metrics will define success?
- **Environment:** Where will tests run?
- **Schedule:** When will tests execute?
- **Risks:** What could prevent successful testing?

### Objectives

**Common Performance Test Objectives:**

1. **Validate SLAs:** "Does the system meet its response time commitments?"
2. **Identify bottlenecks:** "What limits performance first?"
3. **Determine capacity:** "How many users can the system support?"
4. **Compare configurations:** "Which setup performs best?"
5. **Verify tuning:** "Did the optimization work?"
6. **Regression detection:** "Did the new release degrade performance?"

### Scope Definition

**In Scope:**
- Critical user journeys (login, search, checkout)
- High-frequency transactions
- Resource-intensive operations
- Integration points with external systems

**Out of Scope (examples):**
- Low-frequency admin functions
- Features not yet implemented
- Third-party systems outside your control (may be mocked)

### Risk Factors

| Risk | Mitigation |
|------|------------|
| Production-like environment unavailable | Use scaled environment with extrapolation |
| Insufficient test data | Generate realistic synthetic data |
| Unrealistic workload model | Analyze production logs, interview users |
| External dependencies | Mock or stub external services |
| Short timeframe | Prioritize critical scenarios |

---

## 3.2 Workload Modeling

### What Is a Workload Model?

A workload model represents the expected user behavior, including:
- Number and types of users
- Actions they perform
- Frequency of actions
- Timing between actions (think time)
- Patterns of arrival (steady, ramp-up, peak hours)

### User Profiles

**Definition:** A description of a type of user and their typical behavior.

**Example — E-Commerce:**

**Profile: Browser**
- Percentage: 60% of users
- Actions: View homepage, browse categories, view products
- Think time: 10-30 seconds between actions
- Session duration: 5 minutes

**Profile: Searcher**
- Percentage: 25% of users
- Actions: Search, filter results, view product details
- Think time: 5-15 seconds
- Session duration: 10 minutes

**Profile: Buyer**
- Percentage: 15% of users
- Actions: Search, add to cart, checkout, payment
- Think time: 15-60 seconds (especially during checkout)
- Session duration: 15 minutes

### Transaction Mix

**Definition:** The proportion of different transaction types during a test.

**Example:**
```
Homepage load:        40%
Product search:       25%
Product detail view:  20%
Add to cart:           10%
Checkout:              5%
```

**Why It Matters:**
- Different transactions consume different resources
- Checkout is more database-intensive than browsing
- A realistic mix reveals real bottlenecks

### Think Time

**Definition:** The simulated delay between user actions, representing reading, decision-making, or data entry.

**Approaches:**
- **Fixed think time:** Constant delay (e.g., 10 seconds)
- **Random think time:** Random within a range (e.g., 5-15 seconds)
- **Gaussian distribution:** Random with most values near the mean

**Impact:**
- Zero think time = unrealistic stress on system
- Too much think time = not enough load
- Realistic think time = accurate simulation

### Arrival Patterns

**Steady Arrival:**
- Users arrive at a constant rate
- Example: 10 new users per minute continuously

**Ramp-Up:**
- Users are added gradually over time
- Example: Start with 10 users, add 10 every minute until 1,000

**Stepped:**
- Load increases in discrete steps
- Example: 100 users for 10 min, then 200 for 10 min, then 300

**Peak/Hourly Pattern:**
- Load varies to simulate business hours
- Example: Low at night, ramp up at 9 AM, peak at noon, decline at 6 PM

---

## 3.3 Performance Scenarios

### What Is a Performance Scenario?

A performance scenario defines a specific test case with:
- User profile
- Transaction mix
- Load level (number of users)
- Duration
- Acceptance criteria

### Scenario Design

**Scenario 1: Normal Load**
```
Name: Normal Business Hours
Users: 500 concurrent
Profile: 60% Browser, 25% Searcher, 15% Buyer
Think time: 5-30 seconds (random)
Duration: 1 hour
Acceptance: 95% of requests < 2 seconds, error rate < 0.1%
```

**Scenario 2: Peak Load**
```
Name: Black Friday Peak
Users: 5,000 concurrent
Profile: 40% Browser, 35% Searcher, 25% Buyer
Think time: 3-15 seconds (shorter, more urgent)
Duration: 2 hours
Acceptance: 90% of requests < 3 seconds, error rate < 1%
```

**Scenario 3: Endurance**
```
Name: Weekend Sustained Load
Users: 300 concurrent (low but sustained)
Profile: 70% Browser, 20% Searcher, 10% Buyer
Think time: 10-60 seconds
Duration: 48 hours
Acceptance: Memory growth < 10%, no errors after 24 hours
```

### Critical Scenarios

**How to Identify:**
1. Analyze production logs for most frequent transactions
2. Interview business stakeholders about critical user journeys
3. Identify resource-intensive operations (reports, imports)
4. Consider integration points (external APIs, databases)

**Example Critical Scenarios:**
- Login during peak hours (authentication service load)
- Search with complex filters (database query load)
- Checkout with payment processing (integration dependency)
- Report generation (CPU and memory intensive)

---

## 3.4 Key Performance Indicators (KPIs)

### Response Time KPIs

**Average Response Time:**
- The arithmetic mean of all response times
- Easy to calculate but skewed by outliers
- Example: [1s, 1s, 1s, 10s] → Average = 3.25s (misleading)

**Median Response Time:**
- The middle value when all times are sorted
- Less sensitive to outliers
- Example: [1s, 1s, 1s, 10s] → Median = 1s

**Percentile Response Times:**
- **90th percentile (P90):** 90% of requests are faster than this
- **95th percentile (P95):** 95% of requests are faster
- **99th percentile (P99):** 99% of requests are faster
- Best for SLAs because they capture the worst-performing users

**Example:**
```
Response times (sorted, ms): 100, 150, 200, 250, 300, 400, 500, 800, 1000, 5000
Average: 820ms
Median (50th): 350ms
P90: 1000ms (9th value out of 10)
P95: ~3000ms (between 1000 and 5000)
P99: ~4800ms
```

**SLA Example:** "95% of search requests must complete within 2 seconds."
→ P95 search response time must be < 2,000ms.

### Throughput KPIs

**Requests Per Second (RPS):**
- Total requests divided by test duration
- Example: 180,000 requests in 1 hour = 50 RPS

**Transactions Per Second (TPS):**
- Business transactions completed per second
- Example: 3,600 orders in 1 hour = 1 TPS

**Pages Per Minute (PPM):**
- Web pages loaded per minute

### Resource Utilization KPIs

**CPU Utilization:**
- Target: Sustained < 70-80%
- Spike: Brief periods > 80% may be acceptable

**Memory Utilization:**
- Target: Stable, not growing over time
- Warning: Growth > 10% over test duration

**Disk I/O:**
- Disk queue length < 2 (per disk)
- % Disk time < 80%

**Network:**
- Utilization < 70% of bandwidth
- No packet loss

### Error Rate KPI

**Definition:** Percentage of requests that fail.

**Targets:**
- Load testing: < 0.1%
- Stress testing: < 5% (acceptable under stress)
- Spike testing: May be higher during the spike itself

### Concurrent Users KPI

**Definition:** Number of users actively on the system.

**Important:** Concurrent users ≠ simultaneous users. With think time, only a fraction are actively sending requests.

---

## 3.5 Acceptance Criteria

### Defining Pass/Fail Criteria

**Response Time Criteria:**
- "P95 login response time < 1 second under 1,000 concurrent users"
- "P99 checkout response time < 5 seconds under peak load"

**Throughput Criteria:**
- "System processes minimum 100 orders per minute"
- "Search API handles 500 RPS with < 2 second response"

**Resource Criteria:**
- "CPU utilization remains below 80% at peak load"
- "Memory usage does not grow more than 5% over 24 hours"

**Error Rate Criteria:**
- "Error rate < 0.1% during normal load testing"
- "No data loss or corruption under any test condition"

### Baseline and Benchmark

**Baseline:**
- Measurement under known conditions before changes
- Used for comparison in regression testing
- Example: "Current baseline: P95 = 1.2s at 500 users"

**Benchmark:**
- Comparison against a standard or competitor
- Example: "Our checkout is 30% faster than competitor X"

---

## 3.6 Test Data

### Requirements for Performance Test Data

**Realistic:**
- Data should reflect production patterns
- Realistic search terms, product names, user names
- Realistic data distributions (most users in certain regions, etc.)

**Sufficient Volume:**
- Database should contain production-scale data
- Volume testing may require even more data

**Varied:**
- Don't use the same data for every virtual user
- Parameterize inputs (different usernames, search terms, product IDs)

**Secure:**
- Never use production data with real customer information
- Anonymize or generate synthetic data

### Data Generation Approaches

**Synthetic Data Generation:**
- Tools generate realistic but fake data
- Example: Fake user profiles, fake transactions
- Benefits: No privacy concerns, controlled data distribution

**Production Data Masking:**
- Copy production data but anonymize sensitive fields
- Example: Replace real names with generated names, scramble IDs
- Benefits: Realistic data patterns
- Risk: May still contain sensitive information if not done carefully

**Data Seeding:**
- Pre-load test databases with required data before tests
- Reset data between test runs for consistency

---

## 3.7 Environment Planning

### Production-Like Environment

**Ideal:** Test on hardware identical to production.

**Why It Matters:**
- Different CPU speeds affect processing time
- Different network topology affects latency
- Different database configurations affect query performance

### Scaled Environments

**Scaled-Down:**
- Smaller than production
- Results must be extrapolated
- Risk: Extrapolation may not be linear
- Use when: Production environment is too expensive for testing

**Scaled-Up:**
- Larger or more powerful than production
- Used for future capacity testing
- Use when: Planning infrastructure upgrades

### Environment Components

**Required Components:**
- Application servers (matching production configuration)
- Database (with production-scale data)
- Load balancers (if used in production)
- Network (similar latency and bandwidth)
- External services (real or mocked)

**Mocking External Services:**
- Use when external service is unavailable or expensive to test against
- Create stubs that simulate realistic response times
- Risk: Mock may not reflect real service behavior under load

---

## Worked Examples

### Worked Example 1: Workload Model

**Scenario:** An online travel booking site.

**Production Analysis:**
- Daily active users: 50,000
- Peak concurrent users: 5,000
- Average session: 15 minutes

**User Profiles:**

| Profile | % | Key Actions | Think Time |
|---------|---|-------------|------------|
| Explorer | 50% | Search flights, view deals, browse destinations | 15-45s |
| Comparison Shopper | 30% | Search, compare prices, view details | 10-30s |
| Booker | 15% | Search, select, enter details, payment | 20-90s |
| Admin | 5% | Manage bookings, run reports | 30-120s |

**Transaction Mix:**
```
Flight search:     35%
Hotel search:      25%
View deal details: 20%
Price comparison:  10%
Booking start:      5%
Payment:            3%
Report generation:  2%
```

**Load Profile:**
- Ramp up: 0 to 5,000 users over 30 minutes
- Steady state: 5,000 users for 1 hour
- Ramp down: 5,000 to 0 over 15 minutes

### Worked Example 2: KPI Definition

**Scenario:** Define KPIs for a healthcare patient portal.

**Business Requirements:**
- Doctors must access patient records quickly during appointments
- The system must handle morning login surge (all staff log in at 8 AM)
- The system runs 24/7 and cannot have extended downtime

**KPIs:**

| KPI | Target | Measurement |
|-----|--------|-------------|
| P95 login time | < 2 seconds | Under normal load (500 concurrent) |
| P99 login time | < 5 seconds | Under morning surge (2,000 concurrent) |
| Patient record load | < 1 second | P95 under normal load |
| System availability | 99.9% | Measured over 30 days |
| Error rate | < 0.01% | During all load tests |
| Memory growth | < 5% over 48h | During endurance test |

### Worked Example 3: Test Data Planning

**Scenario:** Testing a banking transfer feature.

**Data Requirements:**
- 1,000,000 customer accounts (production scale)
- Accounts with various balances (small, medium, large)
- Various transfer types (internal, external, international)
- Various currencies (USD, EUR, GBP, JPY)

**Synthetic Data Generation:**
```
Account generation:
- Account ID: Sequential, formatted as per production
- Balance: Random between $0 and $1,000,000, with 80% under $50,000 (realistic distribution)
- Currency: 60% USD, 20% EUR, 15% GBP, 5% JPY
- Account type: 70% checking, 25% savings, 5% business

Transfer scenarios:
- Internal transfer: Same bank, different account
- External transfer: Different bank
- International: Different currency
- Amount: Random, with most under $10,000
```

**Data Security:**
- All names: Synthetic (e.g., "Test User 12345")
- All SSNs: Fake, non-existent numbers
- No real customer data used
