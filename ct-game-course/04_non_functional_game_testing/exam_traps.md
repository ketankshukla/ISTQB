# Chapter 4 — Non-Functional Game Testing: Exam Traps

## Trap 1: Testing Performance Only on High-End Hardware

**Trap:** Games must meet performance targets on minimum spec hardware.

**Example question:**
> A game is performance tested only on the lead developer's high-end PC. The risk is:
>
> A. No risk — high-end is representative
> B. Performance on minimum spec hardware may be unacceptable; testing must cover all target configurations
> C. Only that frame rate is higher
> D. Only that loading is faster

**Correct answer:** B — Test all hardware tiers.

---

## Trap 2: Assuming Stability After Short Sessions

**Trap:** Memory leaks and crashes often appear only after extended play.

**Example question:**
> A game passes all tests after 30 minutes of play. This proves:
>
> A. The game is stable
> B. Only that it's stable for 30 minutes; extended sessions (2-4+ hours) may reveal memory leaks and crashes
> C. Only that tutorial works
> D. Only that menus work

**Correct answer:** B — Stability needs long-session testing.

---

## Trap 3: Localization is Just Translation

**Trap:** Localization includes text fitting, audio, cultural appropriateness, and formatting.

**Example question:**
> Localization testing only checks that translated text appears in-game. Missing tests likely include:
>
> A. Nothing — translation is the main task
> B. Text truncation, font support, RTL layout, audio sync, and cultural appropriateness
> C. Only grammar checking
> D. Only spell checking

**Correct answer:** B — Localization is broader than translation.

---

## Trap 4: Accessibility is Optional

**Trap:** Accessibility expands audience and may be legally required; it's not optional.

**Example question:**
> Accessibility features are nice-to-have and can be cut if the schedule is tight. This is:
>
> A. Correct — core gameplay is more important
> B. Incorrect — accessibility expands audience, may be legally required, and should be planned from the start
> C. Only for AAA games
> D. Only for mobile games

**Correct answer:** B — Accessibility is essential, not optional.

---

## Trap 5: 30 FPS is Always Acceptable

**Trap:** Target frame rate depends on genre and platform. VR needs 90+ FPS; competitive shooters need 60+ FPS.

**Example question:**
> A VR game targets 30 FPS. The problem is:
>
> A. No problem — 30 FPS is standard
> B. VR requires 90+ FPS to prevent motion sickness and maintain comfort
> C. Only that the game looks less smooth
> D. Only that the GPU works less

**Correct answer:** B — VR needs high frame rate for comfort.
