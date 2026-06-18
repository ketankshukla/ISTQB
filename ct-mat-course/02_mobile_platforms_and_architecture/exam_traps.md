# 🪤 Chapter 2 — Mobile Platforms and Architecture: Exam Traps

## 🪤 Trap 1: Confusing iOS and Android Lifecycles

**Trap:** iOS uses AppDelegate/SceneDelegate; Android uses Activity callbacks. Different states, different testing.

**Example question:**
> A screen rotation on Android triggers:
>
> A. Nothing
> B. Activity destruction and recreation (onDestroy → onCreate)
> C. Only a visual change
> D. App termination

**Correct answer:** B — Android destroys and recreates Activity on rotation.

---

## 🪤 Trap 2: Thinking All Permissions Work the Same

**Trap:** iOS and Android have different permission models. iOS prompts once; Android has runtime permissions.

**Example question:**
> On Android 10+, a user denies location permission twice and checks "Don't ask again." The app should:
>
> A. Crash
> B. Guide the user to Settings to manually enable
> C. Keep prompting every launch
> D. Assume permission is granted

**Correct answer:** B — "Don't ask again" means runtime prompt won't work; Settings is the only option.

---

## 🪤 Trap 3: Ignoring Background State Differences

**Trap:** iOS is more restrictive with background execution than Android. Testing background behavior differs.

**Example question:**
> An iOS app needs to download a large file. The best approach is:
>
> A. Start download and expect it to complete in background
> B. Use background transfer service (URLSession with background configuration)
> C. Keep app foreground until download completes
> D. Disable background execution

**Correct answer:** B — iOS requires specific background services for downloads.

---

## 🪤 Trap 4: Testing UI Without Platform Guidelines

**Trap:** Each platform has specific UI patterns. Cross-platform apps that ignore guidelines get rejected or poor ratings.

**Example question:**
> An iOS app places the "Back" button at the bottom of the screen like Android. The risk is:
>
> A. No risk — users adapt
> B. Poor user experience and potential App Store rejection for not following Human Interface Guidelines
> C. Only cosmetic
> D. Only on iPad

**Correct answer:** B — iOS back button belongs in top-left per HIG.

---

## 🪤 Trap 5: Assuming Configuration Changes Don't Affect State

**Trap:** Configuration changes (rotation, theme, language) destroy and recreate Activities on Android. State must be explicitly saved.

**Example question:**
> A user fills a form, rotates the phone, and the form is empty. The issue is:
>
> A. Expected behavior
> B. Missing state preservation; Activity was recreated without saving/restoring form data
> C. Only a visual bug
> D. Only on tablets

**Correct answer:** B — Android recreates Activity; save state in `onSaveInstanceState()`.
