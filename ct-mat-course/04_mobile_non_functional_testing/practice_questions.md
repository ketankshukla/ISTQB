# Chapter 4 — Mobile Non-Functional Testing: Practice Questions

---

### Q1 (MAT-4.1, K2)

Cold start time for a mobile app should ideally be:

A. Under 5 seconds
B. Under 3 seconds
C. Under 10 seconds
D. Under 1 minute

---

### Q2 (MAT-4.2, K2)

High battery drain is often caused by:

A. Only bright screens
B. Background tasks like GPS, frequent polling, and wake locks
C. Only app size
D. Only network speed

---

### Q3 (MAT-4.3, K2)

Offline testing should verify:

A. Only that the app crashes
B. Cached content, error messages, and sync on reconnection
C. Only login functionality
D. Only push notifications

---

### Q4 (MAT-4.4, K2)

OWASP MASVS focuses on:

A. Desktop security
B. Mobile application security risks and verification
C. Only network protocols
D. Only database encryption

---

### Q5 (MAT-4.1, K2)

Memory leak testing is important because:

A. It only affects startup
B. Leaks accumulate over time causing slowdowns and crashes
C. It only affects UI colors
D. It is only a cosmetic issue

---

### Q6 (MAT-4.2, K3)

To reduce battery drain from location services:

A. Always request "Always" permission
B. Use "While Using" and stop updates when backgrounded
C. Poll every 10 seconds
D. Never use GPS

---

### Q7 (MAT-4.3, K2)

Network throttling in testing simulates:

A. Only fast Wi-Fi
B. Slow or intermittent network conditions
C. Only offline mode
D. Only 5G speeds

---

### Q8 (MAT-4.4, K2)

Storing passwords in plain text in local storage is:

A. Acceptable for convenience
B. A critical security violation
C. Only a minor issue
D. Only for debugging

---

### Q9 (MAT-4.1, K2)

Testing with VoiceOver/TalkBack verifies:

A. Only volume levels
B. Screen reader accessibility and navigation
C. Only color contrast
D. Only font size

---

### Q10 (MAT-4.2, K2)

Battery Historian is a tool for:

A. Code compilation
B. Analyzing Android battery usage
C. UI design
D. Network routing

---

### Q11 (MAT-4.3, K2)

A "Reduce Motion" accessibility setting should:

A. Be ignored
B. Disable or reduce animations gracefully
C. Only affect text size
D. Only affect sound

---

### Q12 (MAT-4.4, K2)

Certificate pinning prevents:

A. Slow connections
B. Man-in-the-middle attacks on TLS connections
C. Only UI bugs
D. Only memory leaks

---

### Q13 (MAT-4.1, K2)

Testing on low-end devices is important because:

A. They are more expensive
B. They reveal performance issues that flagship devices hide
C. They have better screens
D. They are the only devices allowed

---

### Q14 (MAT-4.2, K2)

Push notifications instead of polling reduce:

A. Only server load
B. Both server load and device battery consumption
C. Only app size
D. Only development time

---

### Q15 (MAT-4.3, K2)

Testing with airplane mode verifies:

A. Only that the app closes
B. Offline behavior and graceful error handling
C. Only cloud sync
D. Only in-app purchases

---

### Q16 (MAT-4.4, K2)

A memory leak is detected when:

A. App uses some memory
B. Memory is allocated but never released, growing over time
C. Only during startup
D. Only when the app closes

---

### Q17 (MAT-4.1, K2)

Accessibility testing benefits:

A. Only blind users
B. Users with disabilities and situational limitations (sunlight, one-handed use)
C. Only elderly users
D. Only children

---

### Q18 (MAT-4.2, K2)

High CPU usage causes:

A. Only faster processing
B. Battery drain and device heating
C. Only better graphics
D. Only network issues

---

### Q19 (MAT-4.3, K2)

Testing app behavior when storage is full verifies:

A. Only download speed
B. Graceful handling when saving data fails
C. Only UI colors
D. Only network connectivity

---

### Q20 (MAT-4.4, K2)

MobSF is used for:

A. Performance testing
B. Mobile security testing
C. UI automation
D. Database design

---

## Answers and Rationales

### Q1
**Answer: B**
**Rationale:** Cold start target = under 3 seconds.

### Q2
**Answer: B**
**Rationale:** Battery drain = background tasks, GPS, polling.

### Q3
**Answer: B**
**Rationale:** Offline = cached content, errors, sync.

### Q4
**Answer: B**
**Rationale:** MASVS = mobile security risks.

### Q5
**Answer: B**
**Rationale:** Leaks accumulate → slowdowns/crashes.

### Q6
**Answer: B**
**Rationale:** "While Using" + stop on background = save battery.

### Q7
**Answer: B**
**Rationale:** Throttling = slow/intermittent networks.

### Q8
**Answer: B**
**Rationale:** Plain text passwords = critical security violation.

### Q9
**Answer: B**
**Rationale:** VoiceOver/TalkBack = screen reader testing.

### Q10
**Answer: B**
**Rationale:** Battery Historian = Android battery analysis.

### Q11
**Answer: B**
**Rationale:** Reduce Motion = disable/reduce animations.

### Q12
**Answer: B**
**Rationale:** Pinning = prevents MITM attacks.

### Q13
**Answer: B**
**Rationale:** Low-end devices reveal hidden performance issues.

### Q14
**Answer: B**
**Rationale:** Push = reduces server load and battery.

### Q15
**Answer: B**
**Rationale:** Airplane mode = offline behavior testing.

### Q16
**Answer: B**
**Rationale:** Leak = allocated but never released.

### Q17
**Answer: B**
**Rationale:** Accessibility = disabilities + situational limits.

### Q18
**Answer: B**
**Rationale:** High CPU = battery drain and heat.

### Q19
**Answer: B**
**Rationale:** Full storage = graceful save failure handling.

### Q20
**Answer: B**
**Rationale:** MobSF = mobile security testing.
