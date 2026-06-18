# 📂 Case Study 3 — Cross-Platform Social Media App

## ⭐ Context

You are the QA Manager for Connectify, a social media startup building a React Native app.

**Features:**
- User profiles and posts
- Photo/video sharing
- Real-time chat
- Push notifications
- Content feed with infinite scroll

**Challenge:** Limited budget, small team, need to test both iOS and Android efficiently.

---

## ♟️ Task 1: Cross-Platform Test Strategy

**Question:** Design an efficient cross-platform testing strategy.

**Model Answer:**

**Approach:** Shared automated tests with platform-specific branches

| Layer | Strategy | Tool |
|-------|----------|------|
| **Unit tests** | Shared Jest tests for business logic | Jest |
| **API tests** | Shared REST API validation | Postman / Newman |
| **UI tests** | Detox for shared flows; XCUITest + Espresso for native features | Detox, XCUITest, Espresso |
| **Visual tests** | Screenshot comparison per platform | Percy / Applitools |

**Device Strategy:**
- CI: Emulators/simulators + Firebase Test Lab
- Pre-release: 2 physical devices per platform (latest + budget)
- Beta: TestFlight (iOS) + Google Play Open (Android)

---

## ⭐ Task 2: Chat Feature Testing

**Question:** Test real-time chat functionality.

**Model Answer:**

| Test Case | Scenario | Verification |
|-----------|----------|--------------|
| TC-01 | Send text message | Delivered status, recipient receives |
| TC-02 | Send image | Upload progress, thumbnail, full image |
| TC-03 | Offline send | Queued, sent when online, "sent from queue" status |
| TC-04 | Typing indicator | Shows "typing..." when other user types |
| TC-05 | Push notification | Notification received; tap opens chat |
| TC-06 | Message deletion | Removed from both sides; no trace |
| TC-07 | Group chat | All members receive; leave group functional |
| TC-08 | Background to foreground | New messages loaded; scroll position maintained |

---

## ⚡ Task 3: Feed Performance

**Question:** Validate infinite scroll feed performance.

**Model Answer:**

**Test Setup:**
- 1,000 posts in feed
- Scroll at moderate speed (2 screens per second)
- Measure on budget Android (Xiaomi Redmi) and older iPhone (iPhone 11)

**Metrics:**

| Metric | Target | Xiaomi | iPhone 11 |
|--------|--------|--------|-----------|
| Frame rate (FPS) | > 50 | 45 | 55 |
| Memory growth | < 20MB/100 posts | 18MB | 15MB |
| Image load time | < 500ms | 600ms | 400ms |
| Crash-free scroll | 100% | 100% | 100% |

**Findings:**
- Xiaomi drops to 45 FPS; investigate image decoding on main thread
- Image load on Xiaomi is 600ms; implement progressive JPEG or WebP

**Actions:**
- Move image decoding to background thread
- Implement image caching with LRU
- Use WebP format for smaller file sizes

---

## 🗓️ Task 4: Beta Launch Plan

**Question:** Plan the beta launch and monitoring.

**Model Answer:**

**Week 1-2: Internal Testing**
- 50 employees via TestFlight Internal and Google Play Internal
- Focus: Critical bugs, crash reporting

**Week 3-4: Closed Beta**
- 500 invited users via TestFlight External + Google Play Closed
- Focus: Usability, performance on real devices

**Week 5-6: Open Beta**
- 5,000 users via Google Play Open; 2,000 via TestFlight Public Link
- Focus: Scale testing, ratings feedback

**Monitoring:**
| Metric | Tool | Alert Threshold |
|--------|------|-----------------|
| Crash-free sessions | Firebase Crashlytics | < 99% |
| Startup time | Custom logging | > 3s cold start |
| API error rate | Backend monitoring | > 0.5% |
| User rating | App Store / Play Console | < 4.0 |
| Chat delivery rate | Backend analytics | < 99.5% |

**Go/No-Go Criteria:**
- Crash-free rate > 99%: GO
- Average rating > 4.0: GO
- No P1 bugs open: GO
- API stability confirmed: GO
