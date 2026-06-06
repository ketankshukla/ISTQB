# Chapter 6 — Mobile Testing Tools and Environment: Exam Traps

## Trap 1: Thinking Device Farms Replace All Real Devices

**Trap:** Device farms provide access but may have queueing delays and limited hardware features. Own key devices for debugging.

**Example question:**
> A team uses a device farm for all testing and owns no physical devices. The risk is:
>
> A. No risk — device farms are sufficient
> B. Debugging specific device issues is harder without immediate physical access; queue delays slow iteration
> C. Only higher cost
> D. Only slower CI

**Correct answer:** B — Own critical devices for debugging; use farms for breadth.

---

## Trap 2: Confusing TestFlight Internal and External Testing

**Trap:** Internal = team members (up to 100). External = public beta (up to 10,000). Different purposes and review requirements.

**Example question:**
> A company wants 5,000 customers to beta test their iOS app before launch. They should use:
>
> A. TestFlight Internal Testing
> B. TestFlight External Testing with a public link
> C. Only the App Store
> D. Only ad-hoc distribution

**Correct answer:** B — External Testing supports up to 10,000 public testers.

---

## Trap 3: Ignoring Production Performance Data

**Trap:** Xcode Organizer and Android Vitals provide real production performance. Ignoring them misses real-world issues.

**Example question:**
> A team relies only on lab performance tests and ignores Xcode Organizer metrics. They may miss:
>
> A. Nothing — lab tests are sufficient
> B. Real-world performance variations across device types, OS versions, and usage patterns
> C. Only unit test failures
> D. Only security issues

**Correct answer:** B — Production metrics reveal real-world performance.

---

## Trap 4: Using ADB Only for Installation

**Trap:** ADB is powerful for logs, screenshots, input simulation, and system inspection. Underutilizing it limits debugging.

**Example question:**
> A tester installs APKs via ADB but never uses `adb logcat`. For debugging crashes, they are:
>
> A. Fully equipped
> B. Missing the primary tool for diagnosing Android crashes and errors
> C. Only missing screenshots
D. Only missing network data

**Correct answer:** B — `adb logcat` is essential for crash diagnosis.

---

## Trap 5: Treating Beta Testing as Optional

**Trap:** Beta testing catches real-world issues (network, devices, user behavior) that lab testing misses.

**Example question:**
> A team skips beta testing and releases directly to production. The risk is:
>
> A. No risk — internal testing is sufficient
> B. Missing real-world device, network, and user behavior issues that beta testers would catch
> C. Only slower time to market
> D. Only more documentation

**Correct answer:** B — Beta testing catches issues internal testing misses.
