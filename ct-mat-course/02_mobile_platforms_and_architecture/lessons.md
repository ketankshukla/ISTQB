# Chapter 2 — Mobile Platforms and Architecture: Lessons

---

## 2.1 iOS Architecture

### Key Components

| Component | Purpose |
|-----------|---------|
| **UIKit** | Traditional UI framework (UIViewController, UIViews) |
| **SwiftUI** | Modern declarative UI framework |
| **AppDelegate** | App-level lifecycle events (launch, background, terminate) |
| **SceneDelegate** | Scene-based lifecycle (iOS 13+ multi-window) |
| **ViewController** | Manages a portion of the app's interface |
| **Storyboard/XIB** | Visual UI layout files |

### App Lifecycle (iOS)

```
Not Running → Inactive → Active → Background → Suspended → Terminated
```

| State | Description | Testing Focus |
|-------|-------------|---------------|
| **Not Running** | App not loaded | Cold start time, data initialization |
| **Inactive** | App foreground but not receiving events | Transition handling |
| **Active** | App foreground and interactive | Core functionality testing |
| **Background** | App running in background | Background tasks, audio, location |
| **Suspended** | App in memory but not executing | State preservation, memory pressure |
| **Terminated** | App removed from memory | Graceful shutdown, data save |

### Testing Implications

- **State restoration:** Verify app returns to correct screen after backgrounding
- **Memory warnings:** Test behavior when system requests memory release
- **Scene management:** Multi-window apps (iPad) handle multiple scenes

---

## 2.2 Android Architecture

### Key Components

| Component | Purpose |
|-----------|---------|
| **Activity** | Single focused screen user interacts with |
| **Fragment** | Reusable UI portion within an Activity |
| **Service** | Background operation without UI |
| **BroadcastReceiver** | Responds to system-wide events |
| **ContentProvider** | Shares data between apps |
| **Intent** | Messaging object for requesting actions |

### App Lifecycle (Android)

```
onCreate → onStart → onResume → [Running] → onPause → onStop → onDestroy
```

| Callback | When Called | Testing Focus |
|----------|-----------|---------------|
| **onCreate()** | Activity first created | Initialization, saved state restore |
| **onStart()** | Activity becomes visible | UI preparation |
| **onResume()** | Activity gains user focus | Resume operations, refresh data |
| **onPause()** | Activity loses focus | Save critical data, stop animations |
| **onStop()** | Activity no longer visible | Release resources |
| **onDestroy()** | Activity being destroyed | Cleanup, cancel operations |

### Testing Implications

- **Configuration changes:** Screen rotation triggers destroy/create sequence
- **Process death:** System may kill app; test state restoration with `onSaveInstanceState()`
- **Background limitations:** Android 8+ limits background services

---

## 2.3 Permission Models

### iOS Permissions

| Permission Type | Behavior |
|-----------------|----------|
| **Camera/Microphone** | One-time prompt; user can change in Settings |
| **Location** | "While Using" or "Always" options; prompt on first use |
| **Notifications** | User must explicitly allow; settings configurable |
| **Photo Library** | "Selected Photos," "All Photos," or "None" |

**Testing:**
- Test with permission granted, denied, and later revoked
- Verify graceful handling when permission is denied
- Check app behavior when permission is revoked while app is running

### Android Permissions

| Protection Level | Examples | Behavior |
|------------------|----------|----------|
| **Normal** | Internet, Bluetooth | Granted at install |
| **Dangerous** | Camera, Location, Contacts | Runtime prompt (Android 6+) |
| **Special** | System alert window | Requires special settings |

**Testing:**
- Test with "Allow," "Deny," "Ask every time" (Android 11+)
- Verify "Don't ask again" behavior
- Test with permission revoked via Settings

---

## 2.4 Platform-Specific UI Guidelines

### iOS Human Interface Guidelines

- **Navigation:** Back button in top-left, tab bar at bottom
- **Controls:** Switches (not checkboxes), pickers (not dropdowns)
- **Typography:** San Francisco font family
- **Safe areas:** Respect notch, home indicator, rounded corners

### Android Material Design

- **Navigation:** Up button in app bar, bottom navigation optional
- **Controls:** Checkboxes, radio buttons, dropdown menus
- **Typography:** Roboto font family
- **System bars:** Status bar, navigation bar handling

### Testing Implications

- **UI consistency:** iOS app should feel iOS-native; Android should feel Android-native
- **Navigation patterns:** Different back navigation behavior
- **Control types:** Use platform-appropriate controls

---

## Worked Examples

### Worked Example 1: Lifecycle Testing

**Scenario:** A user fills a form, switches to another app, then returns.

**iOS Test:**
1. User enters data in form
2. App moves to background (scene disconnects)
3. App returns to foreground (scene reconnects)
4. **Verify:** Form data is preserved

**Android Test:**
1. User enters data in form
2. Trigger configuration change (rotate screen)
3. **Verify:** Activity recreated but form data preserved via `onSaveInstanceState()`

### Worked Example 2: Permission Denial

**Scenario:** Test camera permission denial in a document scanner app.

| Platform | Test Case | Expected Result |
|----------|-----------|-------------------|
| **iOS** | User taps "Don't Allow" on first launch | App shows explanation; scanner button disabled or redirects to Settings |
| **Android** | User denies camera permission | App should show rationale; if denied twice, guide to Settings |
| **Both** | Permission revoked while app running | App should detect change and prompt on next camera use |

### Worked Example 3: Background State Testing

**Scenario:** A messaging app receives a push notification while in background.

**Test Cases:**
1. **Background state:** App receives push → notification displayed → tap opens correct conversation
2. **Suspended state:** App was suspended → push wakes app briefly → notification saved
3. **Terminated state:** App was killed → push launches app → notification processed on startup
4. **Do Not Disturb:** Push received but notification suppressed → in-app badge updated

---

## Platform Comparison Summary

| Aspect | iOS | Android |
|--------|-----|---------|
| Language | Swift, Objective-C | Kotlin, Java |
| UI Framework | UIKit, SwiftUI | XML layouts, Jetpack Compose |
| App Store | App Store (review required) | Google Play (automated + spot checks) |
| Permissions | Prompt at first use | Runtime prompt (API 23+) |
| Background | Strict limits | Some flexibility (with restrictions) |
| Updates | Users update quickly | Fragmentation; slower adoption |
| Testing distribution | TestFlight | Internal/Closed/Open tracks |
