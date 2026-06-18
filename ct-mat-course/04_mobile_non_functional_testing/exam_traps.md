# 🪤 Chapter 4 — Mobile Non-Functional Testing: Exam Traps

## 🪤 Trap 1: Testing Performance Only on Flagship Devices

**Trap:** Low-end devices have slower CPUs, less RAM, and slower storage. Performance issues show up there first.

**Example question:**
> A team tests startup time only on the latest iPhone and declares it acceptable. The risk is:
>
> A. No risk — latest iPhone is representative
> B. Startup may be unacceptably slow on older/budget devices that many users have
> C. Only aesthetic issues
> D. Only security issues

**Correct answer:** B — Test performance on low-end devices for worst-case validation.

---

## 🪤 Trap 2: Ignoring Background Battery Drain

**Trap:** Apps that continue consuming resources in background drain battery even when not visible.

**Example question:**
> An app's battery usage is high even when the user hasn't opened it for hours. The most likely cause is:
>
> A. User is using the app secretly
> B. Background tasks (location, sync, refresh) not properly constrained
> C. Only the screen brightness
> D. Only network issues

**Correct answer:** B — Background tasks must be optimized and stopped when not needed.

---

## 🪤 Trap 3: Testing Network Only on Wi-Fi

**Trap:** Real users experience 3G, weak signal, and offline conditions. Testing only on fast Wi-Fi misses real issues.

**Example question:**
> A media streaming app buffers constantly on 3G but works perfectly on Wi-Fi. The testing gap is:
>
> A. No gap — Wi-Fi is the primary use case
> B. Missing network condition testing (throttling, slow speeds, offline)
> C. Only UI testing
> D. Only security testing

**Correct answer:** B — Test under various network conditions including slow speeds.

---

## 🪤 Trap 4: Confusing Root/Jailbreak Detection with Security

**Trap:** Root detection is a deterrent, not security. Real security comes from encryption and secure coding.

**Example question:**
> An app detects rooted devices and blocks them. This means:
>
> A. The app is completely secure
> B. Root detection is a control, but data must still be encrypted and APIs secured
> C. Only rooted devices are unsafe
> D. No other security needed

**Correct answer:** B — Root detection complements but doesn't replace encryption and secure coding.

---

## 🪤 Trap 5: Treating Accessibility as Optional

**Trap:** Accessibility is required by law in many jurisdictions and benefits all users (e.g., larger text).

**Example question:**
> A team skips accessibility testing because "only 2% of users need it." The issue is:
>
> A. They are correct — 2% is negligible
> B. Accessibility affects more users (temporary disabilities, situational use) and may be legally required
> C. Only slows development
> D. Only affects iOS

**Correct answer:** B — Accessibility benefits many users and is often legally required.
