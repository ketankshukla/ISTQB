# 📘 Chapter 3 — Functional Game Testing: Lessons

---

## ⭐ 3.1 Core Mechanics Testing

### 🔷 Definition

Core mechanics are the fundamental interactive systems that define gameplay.

### 🔷 Testing Approach

| Element | Tests |
|---------|-------|
| **Movement** | Walk, run, jump, crouch, sprint in all directions |
| **Combat** | Attack, defend, use items, damage calculation |
| **Interaction** | Use objects, talk to NPCs, open doors |
| **Inventory** | Add, remove, equip, drop, sort |
| **Abilities** | Activate, cooldown, combo, resource cost |

### 📏 Boundary and Edge Cases

| Scenario | Test |
|----------|------|
| Minimum resource | Use ability with exactly enough mana |
| Zero resource | Use ability with zero mana |
| Maximum stack | Add item when inventory full |
| Rapid input | Mash attack button repeatedly |
| State transition | Jump while attacking while taking damage |

---

## ⭐ 3.2 UI and Menu Testing

### 🔷 Navigation

| Test | Verification |
|------|-------------|
| Menu flow | All paths between screens work |
| Button mapping | Controller/keyboard shortcuts functional |
| Focus management | Highlight moves correctly with input |
| Cancel/Back | Returns to previous screen |

### 🗃️ Data Display

| Element | Check |
|---------|-------|
| **Health bar** | Updates correctly on damage/heal |
| **Score/currency** | Increments/decrements accurately |
| **Minimap** | Accurate player and objective positions |
| **Tooltips** | Correct information, no truncation |

### 🔷 Edge Cases

| Scenario | Expected |
|----------|----------|
| Long player name | Display truncated or scrolled |
| Maximum score | No overflow, displays correctly |
| Empty inventory | Shows empty state, no crash |
| Rapid menu open/close | Stable, no memory leak |

---

## 🤖 3.3 AI Testing

### 🔷 Behavior Trees

| Node Type | Test |
|-----------|------|
| **Selector** | AI picks highest priority action |
| **Sequence** | All steps execute in order |
| **Decorator** | Conditions correctly gate behavior |

### 🤖 AI Test Scenarios

| Scenario | Expected Behavior |
|----------|-------------------|
| Player in range | AI detects and engages |
| Player hides | AI searches, then returns to patrol |
| Low health | AI flees or calls for help |
| Friendly fire | AI avoids hitting allies |
| Obstructed path | AI finds alternate route |

### 🪜 Difficulty Levels

| Difficulty | AI Behavior Change |
|------------|-------------------|
| Easy | Slower reaction, lower accuracy, more health for player |
| Normal | Balanced behavior |
| Hard | Faster reaction, higher accuracy, flanking behavior |

---

## 💡 3.4 Multiplayer Testing

### 🔷 Synchronization

| Aspect | Test |
|--------|------|
| **State sync** | All clients show same game state |
| **Lag compensation** | Hit detection feels fair |
| **Reconciliation** | Client prediction corrects gracefully |
| **Host migration** | Game continues if host drops |

### 🔷 Network Conditions

| Condition | Test |
|-----------|------|
| **High latency** | No desync, playable experience |
| **Packet loss** | Graceful degradation |
| **Jitter** | Smooth interpolation |
| **Disconnect** | Proper handling, no crash |

### 🔷 Cheat Prevention

| Cheat | Countermeasure |
|-------|---------------|
| **Speed hack** | Server validates movement speed |
| **Aim bot** | Server-side hit validation |
| **Item duplication** | Server authorizes all transactions |
| **Map hack** | Server only sends visible enemies |

---

## ⭐ 3.5 Save/Load Testing

### 🗃️ Save Data Scope

| Data Type | Test |
|-----------|------|
| **Player state** | Position, health, inventory, stats |
| **World state** | Completed quests, destroyed objects |
| **Settings** | Graphics, audio, controls |
| **Time** | Play time, timestamps |

### 🔷 Edge Cases

| Scenario | Test |
|----------|------|
| **Save during combat** | Load returns to correct state |
| **Corrupt save file** | Game handles gracefully |
| **Multiple saves** | No cross-contamination |
| **Cloud save** | Syncs correctly across devices |
| **Version mismatch** | Old save with new game version |

---

## 📈 3.6 Progression and Economy

### 📈 Progression Systems

| System | Tests |
|--------|-------|
| **Experience/leveling** | Correct XP calculation, level thresholds |
| **Skill trees** | Prerequisites enforced, effects applied |
| **Unlocks** | Conditions met = unlock available |
| **Achievements** | Trigger correctly, no premature unlock |

### 🔷 Economy Systems

| Element | Tests |
|---------|-------|
| **Currency** | Accurate earn/spend, no duplication |
| **Loot drops** | Within defined ranges, RNG seeded |
| **Trading** | Both inventories update atomically |
| **Market/Auction** | List, bid, buy, cancel functions |

---

## 💡 Worked Examples

### 💡 Worked Example 1: Combat System Test

**Scenario:** Test an RPG combat system.

| Test | Steps | Expected |
|------|-------|----------|
| Basic attack | Press attack vs enemy | Damage dealt, enemy health reduced |
| Critical hit | Attack with high crit chance | Damage multiplied, crit visual plays |
| Miss | Attack with low accuracy | No damage, miss visual |
| Elemental weakness | Fire spell vs ice enemy | Increased damage |
| Elemental resistance | Fire spell vs fire enemy | Reduced or zero damage |
| Death | Reduce enemy HP to 0 | Death animation, loot drops, XP awarded |

### 💡 Worked Example 2: Multiplayer Lag Test

**Scenario:** Test FPS multiplayer under poor network.

| Condition | Client 1 Action | Client 2 Sees | Verification |
|-----------|----------------|---------------|--------------|
| 200ms latency | Shoot at moving target | Hit registered | Lag compensation works |
| 10% packet loss | Rapid movement | Smooth position | Interpolation handles gaps |
| Host quits | Game continues | Migrates to new host | Host migration works |

### 💡 Worked Example 3: Save/Load Regression

**Scenario:** Verify save compatibility after update.

| Save Version | Game Version | Expected |
|-------------|-------------|----------|
| v1.0 | v1.1 | Loads, new features accessible |
| v1.1 | v1.0 | Reject or migrate with warning |
| Corrupt | v1.1 | Error message, offer new game |
| Cloud v1.1 | Local v1.0 | Prompt update or use older save |
