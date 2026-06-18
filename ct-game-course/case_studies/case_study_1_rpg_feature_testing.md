# 📂 Case Study 1 — RPG Feature Testing

## ⭐ Context

You are the QA Lead for a new fantasy RPG.

**Features:**
- Character creation (race, class, appearance)
- Quest system (main, side, daily)
- Combat (melee, magic, stealth)
- Inventory (equipment, consumables, materials)
- Skill trees (three branches per class)
- Save/load (manual + auto-save)

**Platforms:** PC, PlayStation, Xbox
**Rating Target:** ESRB T / PEGI 12

---

## ♟️ Task 1: Test Strategy

**Question:** Design a test strategy for the RPG.

**Model Answer:**

**Test Levels:**
| Level | Focus | Environment |
|-------|-------|-------------|
| Unit | Combat formulas, XP calculation, drop tables | Host PC |
| Integration | Inventory + save, quest + NPC, skill + combat | Dev build |
| System | Full quest chains, character progression | Test build |
| Compliance | TRC/XR items, rating compliance | Staging build |
| Acceptance | End-to-end playthrough, fun evaluation | Release candidate |

**Techniques:**
- Equivalence partitioning: Character stats (min, normal, max)
- Boundary value: Inventory capacity, skill prerequisites
- State transition: Quest states (inactive, active, complete, failed)

---

## ⭐ Task 2: Combat System Test Cases

**Question:** Design test cases for the combat system.

**Model Answer:**

| Test | Input | Expected |
|------|-------|----------|
| Normal attack | Sword, enemy HP 100 | Damage = weapon + strength - armor |
| Critical hit | 20% crit chance, roll succeeds | Damage x 2, crit visual |
| Miss | 80% miss chance, roll fails | 0 damage, miss visual |
| Elemental weakness | Fire spell vs ice enemy | Damage x 1.5 |
| Elemental resistance | Fire spell vs fire enemy | Damage x 0.5 |
| Stealth attack | Undetected, dagger | Damage x 3, break stealth |
| AoE spell | 3 enemies in radius | All take damage |
| Self-damage | Explosion too close | Player takes reduced damage |

---

## 🔄 Task 3: Quest System States

**Question:** Map quest state transitions.

**Model Answer:**

| State | Event | Next State |
|-------|-------|------------|
| Inactive | Player meets prerequisites | Available |
| Available | Player accepts | Active |
| Active | Objective completed | Completed |
| Active | Player fails objective | Failed |
| Active | Player abandons | Inactive |
| Completed | Player turns in | Rewarded |

**Tests:**
1. Normal completion path
2. Failure and retry
3. Abandon and re-accept
4. Complete prerequisite quest unlocks next quest
5. Auto-accept on story progression

---

## ⭐ Task 4: Rating Compliance

**Question:** Verify T/12 rating compliance.

**Model Answer:**

| Content | Check | Status |
|---------|-------|--------|
| Violence | Animated blood, no gore | Pass |
| Language | Mild profanity only | Pass |
| Sexual content | Mild suggestive themes | Pass |
| Alcohol | Reference only, no gameplay | Pass |
| Gambling | None | Pass |
| Dark themes | Moderate fantasy violence | Pass |

**Action items:**
- Remove one instance of strong language in dialogue
- Adjust blood particle effect to be less realistic
