# Chapter 4 — Mobile Non-Functional Testing: Lessons

---

## 4.1 Performance Testing

### App Startup Time

| Start Type | Definition | Target |
|------------|-----------|--------|
| **Cold start** | App not in memory | < 3 seconds |
| **Warm start** | App in memory but activity recreated | < 2 seconds |
| **Hot start** | App resumed from background | < 1.5 seconds |

**Testing approach:**
- Measure with Android Profiler, Xcode Instruments
- Test on low-end devices (worst case)
- Identify blocking operations during startup

### Memory Usage

| Metric | Concern | Tool |
|--------|---------|------|
| **Heap size** | Excessive allocation | Android Studio Memory Profiler, Xcode |
| **Memory leaks** | Objects not released | LeakCanary (Android), Instruments (iOS) |
| **Graphics memory** | Large images/textures | GPU profiling |

**Testing scenarios:**
- Long usage sessions (1+ hours)
- Rapid screen navigation
- Large data loading (images, lists)
- Background/foreground switching

### CPU Usage

- Sustained high CPU = battery drain and device heat
- Test during: scrolling, animations, data processing
- Target: CPU spikes are brief, not sustained

---

## 4.2 Battery Consumption Testing

### Battery Drains

| Cause | How to Test | Mitigation |
|-------|-------------|------------|
| **GPS always on** | Monitor location service usage | Use "while using" permission |
| **Background refresh** | Check background task frequency | Batch and defer background work |
| **Animations** | Test with animations on/off | Reduce or disable for low battery |
| **Network polling** | Monitor network activity | Use push instead of polling |
| **Wake locks** | Check if screen stays on unnecessarily | Release wake locks promptly |

### Testing Approach

1. **Baseline:** Measure battery usage for 30 minutes of typical use
2. **Stress:** Measure during intensive operations (video, GPS)
3. **Comparison:** Compare against previous version or competitor
4. **Real-world:** Test with actual user journeys over hours

**Tools:**
- Android: Battery Historian, Energy Profiler
- iOS: Xcode Energy Log, Instruments

---

## 4.3 Network Testing

### Network Conditions

| Condition | How to Simulate | Test Focus |
|-----------|----------------|------------|
| **Fast Wi-Fi** | Office network | Baseline performance |
| **Slow 3G** | Network throttling (Charles Proxy, Xcode) | Loading states, timeouts |
| **Intermittent** | Toggle Wi-Fi on/off | Retry logic, error handling |
| **Offline** | Airplane mode | Offline functionality, caching |

### Offline Testing

**What to test:**
- Cached content display
- Form submission queueing
- Read-only operations when offline
- Graceful error messages
- Sync when connection restored

---

## 4.4 Mobile Security Testing

### OWASP Mobile Top 10 (MASVS)

| Risk | Description | Test |
|------|-------------|------|
| **M1: Improper Platform Usage** | Misuse of platform features (intents, permissions) | Verify correct use of platform APIs |
| **M2: Insecure Data Storage** | Storing sensitive data insecurely | Check local storage encryption |
| **M3: Insecure Communication** | Unencrypted data transmission | Verify TLS, certificate pinning |
| **M4: Insecure Authentication** | Weak or missing authentication | Test auth flows, token handling |
| **M5: Insufficient Cryptography** | Weak encryption implementation | Verify algorithm strength |
| **M6: Insecure Authorization** | Missing access controls | Test role-based access |
| **M7: Client Code Quality** | Code-level vulnerabilities | SAST, input validation |
| **M8: Code Tampering** | Modified app binaries | Verify app signing, root detection |
| **M9: Reverse Engineering** | App decompilation | Obfuscation, anti-debugging |
| **M10: Extraneous Functionality** | Hidden debug features | Verify no debug endpoints in production |

### Testing Tools

| Tool | Purpose |
|------|---------|
| **MobSF** | Mobile security testing framework |
| **Frida** | Dynamic instrumentation for testing |
| **Objection** | Runtime mobile exploration |
| **OWASP ZAP** | Proxy for traffic analysis |

---

## 4.5 Usability and Accessibility Testing

### Usability Testing

- **First-time user experience:** Can users complete core tasks without help?
- **Efficiency:** How quickly can expert users complete tasks?
- **Error recovery:** Can users recover from mistakes?
- **Satisfaction:** Would users recommend the app?

### Accessibility Testing

| Feature | iOS | Android | Test |
|---------|-----|---------|------|
| **Screen reader** | VoiceOver | TalkBack | Navigate app with eyes closed |
| **Dynamic type** | Larger text sizes | Font size in settings | Text scales without truncation |
| **Reduce motion** | Accessibility setting | Accessibility setting | Animations disabled gracefully |
| **High contrast** | Increase contrast | High contrast text | UI remains usable |
| **Switch control** | External switches | Switch access | App operable without touch |

**Accessibility checklist:**
- All images have alt text
- All interactive elements labeled
- Color not sole indicator of state
- Focus order is logical
- Touch targets meet minimum size

---

## 4.6 Environmental Testing

### Conditions to Test

| Condition | How to Test |
|-----------|-------------|
| **Low battery (< 20%)** | Enable low power mode |
| **Storage full** | Fill device storage |
| **High temperature** | Test after heavy usage |
| **Bright sunlight** | Outdoor visibility of screen |
| **Noisy environment** | Audio alerts and haptics |
| **One-handed use** | Reachability of top controls |

---

## Worked Examples

### Worked Example 1: Startup Time Analysis

**Scenario:** A social media app takes 5 seconds to cold start.

**Analysis:**
| Phase | Time | Optimization |
|-------|------|--------------|
| App launch | 0.8s | Acceptable |
| SDK initialization (analytics, crashlytics) | 1.5s | Lazy-load non-critical SDKs |
| API call for feed | 2.0s | Show cached content first; refresh in background |
| Image preloading | 0.7s | Remove; load images lazily |

**Result:** After optimization: 2.3s cold start

### Worked Example 2: Battery Drain Investigation

**Scenario:** Users report battery drain after update.

**Investigation:**
| Suspect | Evidence | Finding |
|---------|----------|---------|
| GPS | Battery Historian shows location active 80% of time | Bug: location tracking not stopping when app backgrounded |
| Background refresh | High network usage every 2 minutes | Unnecessary: change to every 15 minutes |
| Animations | No significant impact | Not the cause |

**Fix:**
- Stop location updates on `onPause()` / `sceneWillResignActive()`
- Reduce background sync interval to 15 minutes

### Worked Example 3: Security Assessment

**Scenario:** Test a banking app's data storage.

| Test | Method | Result | Status |
|------|--------|--------|--------|
| Local database encryption | Examine SQLite file with adb | Not encrypted | **FAIL** |
| Keychain/Keystore usage | Review code / runtime analysis | Correctly used for tokens | **PASS** |
| Logcat/console output | Monitor during sensitive operations | Password visible in logs | **FAIL** |
| Certificate pinning | Proxy with custom cert | App rejects connection | **PASS** |
| Root/jailbreak detection | Test on rooted device | App blocks access | **PASS** |

**Remediation:**
- Encrypt local database with SQLCipher
- Remove password from logs; log only transaction IDs
