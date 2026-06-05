# Case Study 3 — Non-Functional Testing

## Context

You are the Technical Test Analyst for ShopMax, an e-commerce platform preparing for the holiday shopping season. Last year, the site crashed on Black Friday, resulting in $2M in lost sales.

**System Architecture:**
- React frontend, Node.js backend, PostgreSQL database
- Redis cache, RabbitMQ message queue
- Hosted on AWS with auto-scaling

**Last Year's Incident:**
- Site became unresponsive at 50,000 concurrent users
- Database connection pool exhausted
- No useful error messages for users
- Recovery took 4 hours

## Task 1: Performance Test Strategy

**Question:** Design a comprehensive performance test strategy for the holiday season.

**Model Answer:**

**Performance Requirements:**
| Metric | Requirement |
|--------|-------------|
| Peak concurrent users | 100,000 |
| Response time (p95) | < 2 seconds |
| Throughput | > 2,000 orders/minute |
| Error rate | < 0.1% |
| Availability | 99.95% |

**Test Types and Scenarios:**

| Test Type | Scenario | Load | Duration |
|-----------|----------|------|----------|
| Load | Normal shopping day | 30,000 users | 2 hours |
| Load | Black Friday peak | 100,000 users | 4 hours |
| Stress | Beyond peak to breaking point | 150,000 users | 30 min |
| Soak | Sustained holiday load | 60,000 users | 72 hours |
| Spike | Flash sale announcement | 5,000 → 80,000 in 2 min | 15 min |
| Scalability | Auto-scaling validation | 20,000 → 100,000 | 1 hour |

**Key User Journeys to Test:**
1. Browse products → View product → Add to cart → Checkout
2. Search → Filter → View product → Add to cart
3. Login → View order history → Reorder
4. Guest checkout (highest volume)

**Test Data:**
- 1 million products in catalog
- Realistic search terms from analytics
- Varying cart sizes (1-20 items)
- Mix of payment methods

---

## Task 2: Security Testing for E-Commerce

**Question:** Design security testing for the payment and checkout flow.

**Model Answer:**

**Threat Model:**
1. **Payment card data theft**
2. **Session hijacking**
3. **Order manipulation**
4. **Price tampering**
5. **Inventory manipulation**

**Security Test Plan:**

| Vulnerability | Test Technique | Tool |
|---------------|---------------|------|
| SQL injection in search | SAST + DAST + manual injection | SonarQube + OWASP ZAP |
| XSS in product reviews | DAST + manual payload testing | OWASP ZAP |
| Insecure payment transmission | SSL/TLS verification, certificate validation | SSL Labs, manual |
| Session fixation | Session token analysis | Burp Suite |
| Price manipulation via request tampering | Request interception and modification | Burp Suite, Postman |
| CSRF on add-to-cart | Token validation tests | Manual + automated |
| IDOR on order viewing | ID enumeration tests | Burp Suite |

**PCI DSS Compliance Testing:**
- Card data is never stored (only tokenized)
- All card data transmission is encrypted (TLS 1.2+)
- Access logs track all card data access
- Vulnerability scans quarterly

---

## Task 3: Reliability and Recovery Testing

**Question:** Design reliability tests to prevent last year's 4-hour outage.

**Model Answer:**

**Failure Scenarios:**

| Component | Failure | Expected Recovery |
|-----------|---------|-----------------|
| Web server | 50% of web servers fail | Traffic routes to remaining servers; no data loss |
| Database primary | Primary DB crashes | Automatic failover to replica within 30 seconds |
| Redis cache | Cache cluster failure | Database serves requests (slower but functional) |
| Payment gateway | External gateway timeout | Queue transactions; retry with exponential backoff |
| Message queue | RabbitMQ failure | Graceful degradation; synchronous processing |

**Recovery Tests:**
1. **Database Failover:**
   - Simulate primary DB crash during peak load
   - Measure failover time
   - Verify no lost transactions
   - Check data consistency

2. **Circuit Breaker Testing:**
   - Simulate payment gateway timeout
   - Verify circuit opens after threshold
   - Verify fallback behavior
   - Verify circuit closes when service recovers

3. **Graceful Degradation:**
   - Disable product recommendations
   - Verify core checkout still works
   - Verify appropriate user messaging

**Availability Calculation:**
```
Target: 99.95% availability
Allowed downtime per year: 0.05% x 8760 hours = 4.38 hours
Last year: 4 hours outage on one day
This year target: < 1 hour total outage during holiday season
```

---

## Task 4: Compatibility Testing

**Question:** Design compatibility testing for the e-commerce site.

**Model Answer:**

**Browser Matrix:**

| Browser | Windows | macOS | iOS | Android |
|---------|---------|-------|-----|---------|
| Chrome (latest + prev) | Must test | Must test | — | Must test |
| Safari (latest) | — | Must test | Must test | — |
| Firefox (latest + prev) | Should test | Should test | — | — |
| Edge (latest) | Should test | — | — | — |

**Device Testing:**
- Desktop: 1920x1080, 1366x768
- Tablet: iPad (various sizes)
- Mobile: iPhone (various sizes), popular Android devices

**Test Areas:**
- Product image display and zoom
- Shopping cart responsiveness
- Checkout form usability on small screens
- Payment widget rendering
- Touch interaction (swipe, tap)

**Backward Compatibility:**
- Verify existing user accounts work
- Verify saved addresses and payment methods load
- Verify order history displays correctly

---

## Task 5: Monitoring and Alerting

**Question:** Define monitoring and alerting for the holiday season.

**Model Answer:**

**Key Metrics to Monitor:**

| Metric | Warning Threshold | Critical Threshold |
|--------|-------------------|-------------------|
| Response time (p95) | > 1.5 seconds | > 3 seconds |
| Error rate | > 0.05% | > 0.5% |
| CPU utilization | > 70% | > 90% |
| Memory utilization | > 80% | > 95% |
| Database connections | > 80% pool | > 95% pool |
| Queue depth | > 1,000 messages | > 10,000 messages |
| Concurrent users | > 80,000 | > 95,000 |

**Alerting Escalation:**
1. **Warning:** Slack notification to on-call engineer
2. **Critical:** Page on-call engineer + manager
3. **Severity-1:** War room activation + business stakeholder notification

**Dashboards:**
- Real-time: Current traffic, response times, error rates
- Trend: Hourly/daily comparisons to last year
- Capacity: Resource utilization vs. limits
- Business: Orders/minute, revenue, cart abandonment
