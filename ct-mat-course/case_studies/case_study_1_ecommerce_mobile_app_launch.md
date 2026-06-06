# Case Study 1 — E-Commerce Mobile App Launch

## Context

You are the Test Lead for ShopFast, an e-commerce company launching its first mobile app.

**Features:**
- Product browsing and search
- Shopping cart and checkout
- Payment integration (credit card, Apple Pay, Google Pay)
- Order tracking and notifications
- User accounts and wishlists

**Target Platforms:**
- iOS 15+ (iPhone and iPad)
- Android 10+ (phones and tablets)

**Launch Timeline:** 8 weeks

---

## Task 1: Test Planning

**Question:** Create a mobile test strategy for the launch.

**Model Answer:**

**Scope:**
- In scope: All user-facing features, payment flows, push notifications
- Out of scope: Backend-only changes (covered by API testing)

**Device Selection:**

| Priority | Devices | Rationale |
|----------|---------|-----------|
| P1 | iPhone 14, 13, SE; Samsung S23, Pixel 7 | Top market share |
| P2 | iPad, Galaxy Tab; Xiaomi Redmi | Tablet and budget coverage |
| P3 | OnePlus, older iPhone 11 | Additional coverage |

**Testing Types:**

| Type | Focus | Phase |
|------|-------|-------|
| Functional | Core flows (browse, cart, checkout) | Sprint |
| Compatibility | Screen sizes, OS versions | Pre-release |
| Performance | Startup, scrolling, checkout speed | Continuous |
| Security | Payment data, authentication | Pre-release |
| Usability | First-time user experience | Beta |
| Accessibility | VoiceOver/TalkBack navigation | Pre-release |

---

## Task 2: Payment Flow Testing

**Question:** Design comprehensive payment tests.

**Model Answer:**

| Test Case | Scenario | Expected Result |
|-----------|----------|-----------------|
| TC-01 | Valid credit card | Payment succeeds; order confirmed |
| TC-02 | Invalid card number | Error before processing; no charge |
| TC-03 | Insufficient funds | Declined gracefully; cart preserved |
| TC-04 | Apple Pay (iOS) | Authenticate with Face ID; payment succeeds |
| TC-05 | Google Pay (Android) | Fingerprint auth; payment succeeds |
| TC-06 | Network timeout during payment | Graceful error; no duplicate charge; retry option |
| TC-07 | App killed during payment | Order status queryable; no duplicate |
| TC-08 | Payment success + push notification | Notification received; tap opens order details |

---

## Task 3: Performance Benchmarks

**Question:** Define and test performance requirements.

**Model Answer:**

| Metric | Target | Test Method |
|--------|--------|-------------|
| Cold start | < 3s | Measure on iPhone SE and budget Android |
| Product page load | < 1.5s | Throttled 3G network |
| Checkout completion | < 5s | End-to-end timing |
| App size | < 50MB | APK/IPA analyzer |
| Memory usage | < 150MB | Profiler during browsing session |

**Results:**
- Cold start: 2.8s on iPhone SE, 3.2s on Xiaomi (target met with minor Android optimization needed)
- Product page: 1.2s on Wi-Fi, 2.1s on 3G (acceptable)
- App size: 42MB (pass)

---

## Task 4: Go-Live Decision

**Question:** Evaluate readiness for app store submission.

**Model Answer:**

| Criterion | Threshold | Actual | Status |
|-----------|-----------|--------|--------|
| Functional tests | 100% pass | 98% pass | Pass (2 minor bugs deferred) |
| Performance | All targets met | 4/5 met | Pass with Android optimization note |
| Security scan | Zero critical | Zero critical | Pass |
| Beta feedback | 4.0+ rating | 4.3 rating | Pass |
| Crash-free rate | > 99% | 99.2% | Pass |
| Accessibility | All screens navigable | Pass | Pass |

**Decision:** GO with conditional release

**Conditions:**
- Week 1: Phased rollout (10% of users)
- Monitor crash rate and performance metrics
- Apply Android startup optimization in patch v1.0.1
