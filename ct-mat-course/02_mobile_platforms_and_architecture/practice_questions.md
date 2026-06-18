# ❓ Chapter 2 — Mobile Platforms and Architecture: Practice Questions

---

### 🔷 Q1 (MAT-2.1, K1)

The iOS component that manages app-level lifecycle events is:

A. ViewController
B. AppDelegate
C. Activity
D. Fragment

---

### 🔷 Q2 (MAT-2.2, K1)

An Android Activity's `onPause()` is called when:

A. The app is installed
B. The activity loses user focus
C. The phone is restarted
D. Only when the app crashes

---

### 🔷 Q3 (MAT-2.3, K2)

On Android 6+, dangerous permissions are:

A. Granted at install time automatically
B. Requested at runtime with a dialog prompt
C. Never needed
D. Only for system apps

---

### 🔷 Q4 (MAT-2.4, K2)

Screen rotation on Android typically causes:

A. No change
B. Activity destruction and recreation
C. Only a visual rotation
D. App termination

---

### 🔷 Q5 (MAT-2.1, K1)

SwiftUI is:

A. An Android UI framework
B. A modern declarative UI framework for iOS
C. A web framework
D. A testing tool

---

### 🔷 Q6 (MAT-2.2, K2)

Jetpack Compose is used for:

A. iOS development
B. Modern Android UI development
C. Web development
D. Database management

---

### 🔷 Q7 (MAT-2.3, K2)

TestFlight is Apple's platform for:

A. Public app store distribution
B. Beta testing iOS apps
C. Android beta testing
D. Web app hosting

---

### 🔷 Q8 (MAT-2.4, K2)

The Android component that runs background operations without a UI is:

A. Activity
B. Service
C. Fragment
D. Intent

---

### 🔷 Q9 (MAT-2.1, K1)

An Intent in Android is used to:

A. Store data permanently
B. Request an action from another component
C. Draw UI elements
D. Compress images

---

### 🔷 Q10 (MAT-2.2, K2)

iOS location permission options include:

A. Only "Always Allow"
B. "While Using," "Always," or "Never"
C. Only "Deny"
D. Only "Ask Every Time"

---

### 🔷 Q11 (MAT-2.3, K2)

When an iOS app moves from Active to Background, it should:

A. Crash immediately
B. Save state and pause non-essential operations
C. Increase CPU usage
D. Delete all data

---

### 🔷 Q12 (MAT-2.4, K2)

Material Design is associated with:

A. iOS
B. Android
C. Windows
D. macOS

---

### 🔷 Q13 (MAT-2.1, K1)

A ViewController in iOS manages:

A. Database connections
B. A portion of the app's user interface
C. Network requests only
D. File system access

---

### 🔷 Q14 (MAT-2.2, K2)

`onSaveInstanceState()` in Android is used to:

A. Delete user data
B. Save temporary UI state before the activity is destroyed
C. Only for debugging
D. Only on app launch

---

### 🔷 Q15 (MAT-2.3, K2)

If a user denies a permission on iOS and selects "Don't Allow," the app should:

A. Crash
B. Handle gracefully and optionally guide the user to Settings
C. Keep asking every second
D. Assume permission is granted

---

### 🔷 Q16 (MAT-2.4, K2)

The Human Interface Guidelines apply to:

A. Android
B. iOS
C. Windows
D. Linux

---

### 🔷 Q17 (MAT-2.1, K1)

Jetpack Compose is to Android as ___ is to iOS:

A. UIKit
B. SwiftUI
C. React Native
D. Flutter

---

### 🔷 Q18 (MAT-2.2, K2)

A BroadcastReceiver in Android responds to:

A. Only user clicks
B. System-wide broadcast events (e.g., boot completed, battery low)
C. Only database changes
D. Only network changes

---

### 🔷 Q19 (MAT-2.3, K2)

iOS SceneDelegate (iOS 13+) handles:

A. Only app launch
B. Scene-based lifecycle for multi-window support
C. Only push notifications
D. Only camera access

---

### 🔷 Q20 (MAT-2.4, K2)

An Android Fragment is:

A. A complete standalone app
B. A reusable UI portion within an Activity
C. Only for debugging
D. Only for background tasks

---

## ✔️ Answers and Rationales

### 🔷 Q1
**Answer: B**
**Rationale:** AppDelegate manages iOS app-level lifecycle.

### 🔷 Q2
**Answer: B**
**Rationale:** `onPause()` = activity loses focus.

### 🔷 Q3
**Answer: B**
**Rationale:** Android 6+ = runtime permission prompts.

### 🔷 Q4
**Answer: B**
**Rationale:** Rotation = Activity destroy/recreate.

### 🔷 Q5
**Answer: B**
**Rationale:** SwiftUI = iOS declarative UI framework.

### 🔷 Q6
**Answer: B**
**Rationale:** Jetpack Compose = Android modern UI.

### 🔷 Q7
**Answer: B**
**Rationale:** TestFlight = iOS beta testing.

### 🔷 Q8
**Answer: B**
**Rationale:** Service = background operations.

### 🔷 Q9
**Answer: B**
**Rationale:** Intent = request action from component.

### 🔷 Q10
**Answer: B**
**Rationale:** iOS location = While Using, Always, Never.

### 🔷 Q11
**Answer: B**
**Rationale:** Background = save state, pause operations.

### 🔷 Q12
**Answer: B**
**Rationale:** Material Design = Android.

### 🔷 Q13
**Answer: B**
**Rationale:** ViewController = UI management.

### 🔷 Q14
**Answer: B**
**Rationale:** `onSaveInstanceState()` = save UI state.

### 🔷 Q15
**Answer: B**
**Rationale:** Handle gracefully, guide to Settings.

### 🔷 Q16
**Answer: B**
**Rationale:** HIG = iOS guidelines.

### 🔷 Q17
**Answer: B**
**Rationale:** Jetpack Compose (Android) ≈ SwiftUI (iOS).

### 🔷 Q18
**Answer: B**
**Rationale:** BroadcastReceiver = system-wide events.

### 🔷 Q19
**Answer: B**
**Rationale:** SceneDelegate = scene lifecycle, multi-window.

### 🔷 Q20
**Answer: B**
**Rationale:** Fragment = reusable UI portion in Activity.
