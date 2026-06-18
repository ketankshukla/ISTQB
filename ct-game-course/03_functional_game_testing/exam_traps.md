# 🪤 Chapter 3 — Functional Game Testing: Exam Traps

## 🪤 Trap 1: Testing Only the Happy Path

**Trap:** Edge cases (zero health, full inventory, rapid input) often reveal critical bugs.

**Example question:**
> A tester verifies that attacking an enemy deals damage but never tests with zero health. The risk is:
>
> A. No risk — zero health means the player is dead
> B. The death state, death animation, and game-over flow may be untested and contain bugs
> C. Only that testing is incomplete
> D. Only that the test report is shorter

**Correct answer:** B — Edge cases must be tested.

---

## 🪤 Trap 2: Testing UI Only for Visuals

**Trap:** UI testing must include functionality, navigation, focus, and edge cases (long names, empty states).

**Example question:**
> UI testing is complete once all screens look correct. This is:
>
> A. Correct — visuals are what players see
> B. Incorrect — UI testing must also verify navigation, button functionality, data accuracy, and edge cases like empty states
> C. Only for console games
> D. Only for mobile games

**Correct answer:** B — UI = visuals + functionality + navigation.

---

## 🪤 Trap 3: AI Testing Only on Easy Difficulty

**Trap:** AI behaves differently per difficulty; all levels must be tested.

**Example question:**
> AI is tested only on normal difficulty. The likely gap is:
>
> A. No gap — normal is representative
> B. Easy and hard difficulties may have unique bugs in behavior tree parameters, accuracy, or decision logic
> C. Only that testing is faster
> D. Only that testing is cheaper

**Correct answer:** B — Test all difficulty levels.

---

## 🪤 Trap 4: Multiplayer Testing Only on LAN

**Trap:** Real-world network conditions (latency, packet loss) reveal issues LAN testing misses.

**Example question:**
> Multiplayer is tested only on a local LAN. The risk is:
>
> A. No risk — LAN matches real conditions
> B. Real-world latency, packet loss, and jitter may cause desync and gameplay issues not seen on LAN
> C. Only that testing is too fast
> D. Only that testing is too easy

**Correct answer:** B — Test with simulated real-world network conditions.

---

## 🪤 Trap 5: Assuming Save/Load Just Works

**Trap:** Save/load is complex; test all data types, corruption, and version mismatches.

**Example question:**
> A team tests save/load by saving at one location and loading. The missing tests likely include:
>
> A. Nothing — the basic test is sufficient
> B. Combat state save, inventory save, settings save, corrupt file handling, and version compatibility
> C. Only that testing is too short
> D. Only that testing is too simple

**Correct answer:** B — Save/load needs comprehensive coverage.
