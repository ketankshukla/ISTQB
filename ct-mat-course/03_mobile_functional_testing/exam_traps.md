# 🪤 Chapter 3 — Mobile Functional Testing: Exam Traps

## 🪤 Trap 1: Testing Only on Emulators

**Trap:** Emulators don't perfectly replicate real device behavior (performance, gestures, sensors). Real device testing is essential.

**Example question:**
> A team tests all gestures on the iOS Simulator and declares gesture testing complete. The risk is:
>
> A. No risk — simulator is identical to device
> B. Real devices may have different touch sensitivity, latency, and edge-case behavior
> C. Only slower testing
> D. Only more expensive testing

**Correct answer:** B — Real devices have different behavior than simulators.

---

## 🪤 Trap 2: Ignoring Small Screen Sizes

**Trap:** Testing only on large phones misses layout issues on smaller screens where many users still exist.

**Example question:**
> A "Buy Now" button is placed at the bottom of a 6.7" screen. On a 4.7" iPhone SE, it is hidden behind the keyboard. This indicates:
>
> A. Expected behavior
> B. Missing small-screen testing; layout should adapt to all supported sizes
> C. Only a cosmetic issue
> D. Only on Android

**Correct answer:** B — Layout must adapt to all supported screen sizes.

---

## 🪤 Trap 3: Testing Orientation Only Once

**Trap:** Orientation changes can happen at any time. Test during user interactions, not just on launch.

**Example question:**
> An app is tested in portrait and landscape separately but not during form entry. The risk is:
>
> A. No risk — separate testing is sufficient
> B. Data loss or UI breakage when rotation occurs during user input
> C. Only performance issues
> D. Only security issues

**Correct answer:** B — Rotation during form entry can cause data loss if not handled.

---

## 🪤 Trap 4: Confusing Universal Links with Custom Schemes

**Trap:** Universal/App Links use standard HTTPS URLs; custom schemes use app-specific prefixes. Different fallback behavior.

**Example question:**
> A link `https://example.com/item/123` that opens directly in the app (or falls back to browser) is:
>
> A. A custom URL scheme
> B. A Universal Link (iOS) or App Link (Android)
> C. Only for email
> D. Only for push notifications

**Correct answer:** B — HTTPS links that open in app = Universal/App Links.

---

## 🪤 Trap 5: Forgetting Update Migration Testing

**Trap:** Users update from old versions. Data and settings must migrate correctly.

**Example question:**
> An app update changes the local database schema but doesn't include a migration script. Users updating from v1.0 will experience:
>
> A. No issues
> B. Data loss or crash on first launch after update
> C. Only slower startup
> D. Only UI changes

**Correct answer:** B — Schema changes require migration scripts for existing users.
