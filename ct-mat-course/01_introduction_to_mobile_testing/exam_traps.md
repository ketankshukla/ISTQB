# Chapter 1 — Introduction to Mobile Testing: Exam Traps

## Trap 1: Treating Mobile Testing Like Desktop Testing

**Trap:** Mobile has unique challenges: fragmentation, gestures, interruptions, network variability, battery constraints.

**Example question:**
> A tester applies the same test approach used for a web application to a mobile app. The risk is:
>
> A. No risk — testing is testing
> B. Missing mobile-specific issues like gesture handling, interruption behavior, and battery drain
> C. Only slower testing
> D. Only more documentation

**Correct answer:** B — Mobile testing requires mobile-specific techniques.

---

## Trap 2: Confusing Native, Hybrid, and Web Apps

**Trap:** Native = platform-specific code. Hybrid = web in native wrapper. Web = browser-based. Different testing approaches.

**Example question:**
> An app built with React Native is:
>
> A. A pure web app
> B. A cross-platform native app with a single codebase
> C. A hybrid app using a WebView
> D. Only for Android

**Correct answer:** B — React Native compiles to native code; not a WebView hybrid.

---

## Trap 3: Testing Only on the Latest Devices

**Trap:** Many users run older OS versions and budget devices. Testing only latest misses real-world issues.

**Example question:**
> A team tests only on iPhone 15 Pro and Samsung Galaxy S23. The risk is:
>
> A. No risk — these are the best devices
> B. Missing issues on older devices, smaller screens, and budget hardware that many users have
> C. Only slower execution
> D. Only fewer test cases

**Correct answer:** B — Test on representative range of devices users actually have.

---

## Trap 4: Ignoring App Store Guidelines

**Trap:** App stores have specific requirements. Non-compliance leads to rejection.

**Example question:**
> An iOS app is submitted without a privacy policy URL. The likely result is:
>
> A. Automatic approval
> B. App Store rejection due to guideline violation
> C. Only a warning
> D. Approval with conditions

**Correct answer:** B — Privacy policy is mandatory for App Store submission.

---

## Trap 5: Forgetting Interruption Scenarios

**Trap:** Mobile apps are constantly interrupted. Not testing interruptions leads to crashes and data loss.

**Example question:**
> A banking app crashes when the user receives a phone call during a fund transfer. This indicates missing:
>
> A. Unit tests
> B. Interruption testing
> C. Security testing
> D. Performance testing

**Correct answer:** B — Interruptions (calls, notifications) must be tested.
