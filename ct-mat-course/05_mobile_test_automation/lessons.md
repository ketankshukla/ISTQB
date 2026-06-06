# Chapter 5 — Mobile Test Automation: Lessons

---

## 5.1 Mobile Automation Frameworks

### Framework Comparison

| Framework | Platform | Language | Best For |
|-----------|----------|----------|----------|
| **Appium** | iOS, Android | Multi-language (Java, Python, JS, etc.) | Cross-platform, existing Selenium skills |
| **Espresso** | Android | Kotlin/Java | Fast, reliable Android testing; white-box |
| **XCUITest** | iOS | Swift/Objective-C | Fast, reliable iOS testing; Apple-supported |
| **UI Automator** | Android | Java | Cross-app interaction testing |
| **Detox** | iOS, Android | JavaScript | React Native apps; gray-box testing |
| **Flutter Driver** | iOS, Android (Flutter) | Dart | Flutter-specific apps |

### Selection Criteria

- **App type:** Native, hybrid, or cross-platform framework?
- **Team skills:** What languages does the team know?
- **Test speed:** How fast must tests run?
- **Reliability:** How flaky are the tests?
- **CI integration:** Easy to run in pipeline?

---

## 5.2 Page Object Model for Mobile

### Structure

```
pages/
  login_page.py
  home_page.py
  profile_page.py
tests/
  test_login.py
  test_profile.py
```

### Example

```python
class LoginPage:
    def __init__(self, driver):
        self.driver = driver
        self.username_field = (MobileBy.ACCESSIBILITY_ID, "username")
        self.password_field = (MobileBy.ACCESSIBILITY_ID, "password")
        self.login_button = (MobileBy.ACCESSIBILITY_ID, "login")
    
    def login(self, username, password):
        self.driver.find_element(*self.username_field).send_keys(username)
        self.driver.find_element(*self.password_field).send_keys(password)
        self.driver.find_element(*self.login_button).click()
```

### Benefits

- Separation of test logic from UI locators
- Reusable page methods across tests
- Easier maintenance when UI changes

---

## 5.3 Cross-Platform Automation

### Strategies

| Strategy | Approach | Trade-off |
|----------|----------|-----------|
| **Single framework** | Appium with shared test code | Simpler maintenance but may miss platform-specific issues |
| **Separate frameworks** | Espresso for Android, XCUITest for iOS | Best reliability but duplicated effort |
| **Shared page objects** | Common interface, platform-specific implementations | Balance of reuse and platform coverage |

### Cross-Platform Locators

| Strategy | Example |
|----------|---------|
| **Accessibility ID** | `accessibility id=loginButton` (recommended) |
| **XPath** | `//android.widget.Button[@text='Login']` (fragile) |
| **ID** | `id=com.example.app:id/login_button` |

**Best practice:** Use accessibility IDs — stable across platforms and improve accessibility.

---

## 5.4 Emulator, Simulator, and Real Device

| Type | Pros | Cons |
|------|------|------|
| **Emulator (Android)** | Fast setup, snapshots, simulate hardware | Not identical to real device performance |
| **Simulator (iOS)** | Fast, good for UI layout testing | Cannot test push notifications, camera |
| **Real Device** | True user experience, all hardware features | Slower setup, device management, cost |

### Testing Strategy

| Test Type | Recommended Environment |
|-----------|------------------------|
| **Development** | Emulator/Simulator |
| **CI pipeline** | Emulator/Simulator cloud (Firebase, AWS Device Farm) |
| **Pre-release** | Representative real devices |
| **Performance** | Real devices (especially low-end) |
| **Hardware features** | Real devices (camera, GPS, biometrics) |

---

## 5.5 CI/CD Integration

### Pipeline Stages

```yaml
stages:
  - build
  - unit-test
  - integration-test
  - ui-test-emulator
  - ui-test-real-device
  - deploy-beta
```

### Cloud Device Services

| Service | Provider | Notes |
|---------|----------|-------|
| **Firebase Test Lab** | Google | Android and iOS; free tier available |
| **AWS Device Farm** | Amazon | Extensive device selection |
| **BrowserStack App Automate** | BrowserStack | Good CI integration |
| **Sauce Labs** | Sauce Labs | Cross-browser + mobile |

### Challenges

- **Flakiness:** Mobile UI tests are inherently flaky due to animations, timing, and device variability
- **Speed:** UI tests are slower than unit tests; parallelize where possible
- **Stability:** Device farms may have queueing delays

---

## 5.6 Managing Flaky Tests

### Causes of Flakiness

| Cause | Solution |
|-------|----------|
| **Animations** | Disable animations during tests (developer settings) |
| **Timing** | Use explicit waits, not sleep |
| **Network** | Mock or stub network responses |
| **State** | Clean app state before each test |
| **Resource contention** | Run tests sequentially or isolate resources |

### Retry Strategy

```python
@pytest.mark.flaky(rerun=2)
def test_payment_flow():
    # Test will retry up to 2 times on failure
```

**Caution:** Retries mask real issues. Use as temporary measure while investigating root cause.

---

## Worked Examples

### Worked Example 1: Framework Selection

**Scenario:** Select automation for a React Native app.

| Option | Pros | Cons |
|--------|------|------|
| **Appium** | Cross-platform, language flexibility | Slower, more flaky |
| **Detox** | Built for React Native, gray-box, faster | JavaScript only, iOS setup complex |
| **Espresso + XCUITest** | Most reliable | Two codebases, more effort |

**Decision:** Detox
- Built specifically for React Native
- Gray-box access improves reliability
- Team knows JavaScript

### Worked Example 2: Page Object Implementation

**Scenario:** Implement POM for an e-commerce app checkout flow.

```python
class CartPage:
    checkout_button = (MobileBy.ID, "checkout_button")
    
    def proceed_to_checkout(self):
        self.driver.find_element(*self.checkout_button).click()
        return CheckoutPage(self.driver)

class CheckoutPage:
    payment_method = (MobileBy.ID, "payment_method")
    place_order = (MobileBy.ID, "place_order")
    
    def select_payment(self, method):
        self.driver.find_element(*self.payment_method).click()
        self.driver.find_element(MobileBy.XPATH, f"//text[@text='{method}']").click()
    
    def place_order(self):
        self.driver.find_element(*self.place_order).click()
        return OrderConfirmationPage(self.driver)
```

**Test:**
```python
def test_checkout_flow(driver):
    cart = CartPage(driver)
    checkout = cart.proceed_to_checkout()
    checkout.select_payment("Credit Card")
    confirmation = checkout.place_order()
    assert confirmation.order_successful()
```

### Worked Example 3: CI Pipeline Configuration

**Scenario:** Run Android UI tests on every PR.

```yaml
ui-test:
  image: circleci/android:api-30
  steps:
    - checkout
    - run: ./gradlew assembleDebug assembleAndroidTest
    - run:
        name: Run UI tests on Firebase
        command: |
          gcloud firebase test android run \
            --type instrumentation \
            --app app/build/outputs/apk/debug/app-debug.apk \
            --test app/build/outputs/apk/androidTest/debug/app-debug-androidTest.apk \
            --device model=Pixel3,version=30,locale=en,orientation=portrait
    - store_test_results:
        path: test-results/
```

**Results:**
- Tests run on real Pixel 3 in Google data center
- Results uploaded to CI artifact
- Video and logs available for debugging failures
