# Chapter 5 — Mobile Test Automation: Practice Questions

---

### Q1 (MAT-5.1, K2)

Appium is best described as:

A. An iOS-only testing tool
B. A cross-platform mobile automation framework using WebDriver protocol
C. An Android build tool
D. A performance monitoring tool

---

### Q2 (MAT-5.2, K2)

The Page Object Model separates:

A. Test data from test cases
B. Test logic from UI locators and page interactions
C. Only the test runner
D. Only the reporting

---

### Q3 (MAT-5.3, K2)

Accessibility IDs as locators are preferred because:

A. They are harder to implement
B. They are stable across UI changes and improve accessibility
C. They are only for iOS
D. They are only for Android

---

### Q4 (MAT-5.4, K2)

An iOS Simulator cannot test:

A. UI layout
B. Push notifications and camera behavior
C. Basic navigation
D. Text input

---

### Q5 (MAT-5.1, K2)

Espresso is designed for:

A. iOS testing
B. Android UI testing with synchronization built-in
C. Web testing
D. Performance testing

---

### Q6 (MAT-5.2, K3)

A cross-platform automation strategy using shared test code:

A. Always misses platform-specific issues
B. Simplifies maintenance but may need platform-specific branches for unique behaviors
C. Only works for iOS
D. Only works for Android

---

### Q7 (MAT-5.3, K2)

Firebase Test Lab provides:

A. Only iOS devices
B. Cloud-based testing on real and virtual Android and iOS devices
C. Only unit testing
D. Only manual testing

---

### Q8 (MAT-5.4, K2)

Real devices are MOST important for testing:

A. Only UI layouts
B. Hardware features (camera, GPS, biometrics) and performance
C. Only static screens
D. Only emulators

---

### Q9 (MAT-5.1, K2)

XCUITest is Apple's framework for:

A. Android testing
B. iOS UI testing
C. Web testing
D. Database testing

---

### Q10 (MAT-5.2, K2)

Flaky mobile UI tests are often caused by:

A. Only test data issues
B. Animations, timing, and network variability
C. Only device size
D. Only OS versions

---

### Q11 (MAT-5.3, K2)

The recommended locator strategy for cross-platform stability is:

A. XPath
B. Accessibility ID
C. Coordinates
D. Color

---

### Q12 (MAT-5.4, K2)

Disabling system animations during tests:

A. Makes tests less realistic
B. Reduces flakiness caused by timing issues
C. Only affects iOS
D. Only affects Android

---

### Q13 (MAT-5.1, K2)

Detox is particularly suited for:

A. Native iOS apps
B. React Native apps with gray-box testing capabilities
C. Only web apps
D. Only database testing

---

### Q14 (MAT-5.2, K2)

Retrying a flaky test 10 times without fixing the root cause:

A. Is best practice
B. Masks a real issue and wastes CI time
C. Only affects local runs
D. Only affects reporting

---

### Q15 (MAT-5.3, K2)

The test pyramid for mobile suggests:

A. Mostly UI tests
B. Mostly unit tests, fewer integration, fewest UI tests
C. Only UI tests
D. Only manual tests

---

### Q16 (MAT-5.4, K2)

Cloud device farms are useful for:

A. Only local development
B. Testing on many devices without owning them
C. Only unit testing
D. Only security testing

---

### Q17 (MAT-5.1, K2)

Explicit waits in automation:

A. Are slower than sleep
B. Wait for a condition rather than a fixed time, improving reliability
C. Only work on iOS
D. Only work on Android

---

### Q18 (MAT-5.2, K2)

A Page Object class should:

A. Contain test assertions
B. Encapsulate locators and actions for a single screen
C. Only contain locators
D. Only contain test data

---

### Q19 (MAT-5.3, K2)

UI Automator (Android) is best for:

A. Testing a single app's internal logic
B. Testing interactions between multiple apps or system UI
C. Only iOS apps
D. Only web apps

---

### Q20 (MAT-5.4, K2)

Mocking network responses in mobile tests:

A. Makes tests less valuable
B. Improves reliability by removing network variability
C. Only works for unit tests
D. Only works for iOS

---

## Answers and Rationales

### Q1
**Answer: B**
**Rationale:** Appium = cross-platform WebDriver framework.

### Q2
**Answer: B**
**Rationale:** POM = separates logic from locators/actions.

### Q3
**Answer: B**
**Rationale:** Accessibility IDs = stable + improve accessibility.

### Q4
**Answer: B**
**Rationale:** Simulator cannot test push notifications or camera.

### Q5
**Answer: B**
**Rationale:** Espresso = Android UI with sync.

### Q6
**Answer: B**
**Rationale:** Shared code simplifies but may need branches.

### Q7
**Answer: B**
**Rationale:** Firebase = cloud real/virtual devices.

### Q8
**Answer: B**
**Rationale:** Real devices = hardware features + performance.

### Q9
**Answer: B**
**Rationale:** XCUITest = iOS UI testing.

### Q10
**Answer: B**
**Rationale:** Flakiness = animations, timing, network.

### Q11
**Answer: B**
**Rationale:** Accessibility ID = most stable locator.

### Q12
**Answer: B**
**Rationale:** Disable animations = reduce timing flakiness.

### Q13
**Answer: B**
**Rationale:** Detox = React Native gray-box.

### Q14
**Answer: B**
**Rationale:** Retries mask issues and waste time.

### Q15
**Answer: B**
**Rationale:** Pyramid = unit > integration > UI.

### Q16
**Answer: B**
**Rationale:** Cloud farms = many devices without ownership.

### Q17
**Answer: B**
**Rationale:** Explicit waits = condition-based, reliable.

### Q18
**Answer: B**
**Rationale:** Page Object = locators + actions for one screen.

### Q19
**Answer: B**
**Rationale:** UI Automator = cross-app interactions.

### Q20
**Answer: B**
**Rationale:** Mocking = removes network variability.
