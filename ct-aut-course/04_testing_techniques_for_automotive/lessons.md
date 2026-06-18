# 📘 Chapter 4 — Testing Techniques for Automotive: Lessons

---

## 🔍 4.1 Static Testing

### 🔍 Static Analysis

| Technique | Purpose | Tools |
|-----------|---------|-------|
| **MISRA C/C++ checking** | Enforce coding standards | PC-lint, QAC, Polyspace |
| **Complexity analysis** | Identify high-risk code | Understand, LDRA |
| **Data flow analysis** | Find uninitialized variables | Polyspace, Astree |
| **Control flow analysis** | Find unreachable code | LDRA, Cantata |

### 🔎 Code Review

| Focus Area | Check |
|------------|-------|
| **Safety-critical code** | No dynamic memory allocation, bounded loops |
| **Boundary conditions** | Off-by-one errors, overflow handling |
| **Error handling** | All error paths tested |
| **Recursion** | Avoided in safety-critical code |

---

## 📏 4.2 Boundary Value Analysis

### 🔷 Application to Automotive

| Signal | Range | Boundary Values |
|--------|-------|----------------|
| **Vehicle speed** | 0-300 km/h | 0, 1, 299, 300 |
| **Engine temperature** | -40 to 150°C | -40, -39, 149, 150 |
| **Battery voltage** | 9-16V | 9, 9.1, 15.9, 16 |
| **Steering angle** | -540 to +540° | -540, -539, 539, 540 |

### 🔷 Two-Value vs Three-Value Approach

| Approach | Values Tested |
|----------|--------------|
| **Two-value** | Min, Max |
| **Three-value** | Min, Min+, Max-, Max |

---

## ➗ 4.3 Equivalence Partitioning

### 💡 Example: Gear Position

| Partition | Values | Representative |
|-----------|--------|----------------|
| **Park (P)** | P | P |
| **Reverse (R)** | R | R |
| **Neutral (N)** | N | N |
| **Drive (D)** | D | D |
| **Invalid** | Any other value | 'X' |

### 💡 Example: Vehicle Speed for Cruise Control

| Partition | Range | Test Value |
|-----------|-------|------------|
| **Too low** | < 30 km/h | 20 |
| **Valid** | 30-200 km/h | 100 |
| **Too high** | > 200 km/h | 220 |
| **Invalid** | < 0 | -10 |

---

## 🔄 4.4 State Transition Testing

### 💡 ECU State Machine Example: Powertrain Control

| State | Transitions |
|-------|-------------|
| **Init** | Key on → Self-test |
| **Self-test** | Pass → Idle; Fail → Error |
| **Idle** | Accelerator > 0 → Active |
| **Active** | Accelerator = 0 → Idle; Fault → Error |
| **Error** | Key off → Init |

### 🎨 Test Design

| Test | Path | Coverage |
|------|------|----------|
| Normal startup | Init → Self-test → Idle | Valid transition |
| Self-test failure | Init → Self-test → Error | Error handling |
| Acceleration | Idle → Active | State change |
| Coast to idle | Active → Idle | Reverse transition |
| Recovery | Error → Init → Self-test → Idle | Full recovery |

---

## ⭐ 4.5 Fault Injection

### 🧪 Types

| Type | Method | Example |
|------|--------|---------|
| **Software fault injection** | Modify variables in code | Set speed sensor to invalid value |
| **Hardware fault injection** | Disrupt hardware signals | Disconnect CAN message |
| **Network fault injection** | Corrupt or drop messages | Delay brake pedal message |

### 🎬 Fault Scenarios

| System | Fault Injected | Expected Response |
|--------|---------------|---------------------|
| **ABS** | Wheel speed sensor failure | Disable ABS, warn driver |
| **Airbag** | Crash sensor short circuit | Use backup sensor |
| **EPS** | Steering torque sensor invalid | Reduce assist, warn driver |
| **ACC** | Radar obstruction | Degrade to speed control |

---

## 🎯 4.6 Technique Selection by ASIL

| Technique | ASIL A | ASIL B | ASIL C | ASIL D |
|-----------|--------|--------|--------|--------|
| **Statement coverage** | Required | Required | Required | Required |
| **Branch coverage** | Recommended | Required | Required | Required |
| **MC/DC** | Not required | Not required | Required | Required |
| **Boundary value** | Recommended | Required | Required | Required |
| **Fault injection** | Recommended | Recommended | Required | Required |
| **Static analysis** | Recommended | Required | Required | Required |
| **Code review** | Recommended | Recommended | Required | Required |

---

## 💡 Worked Examples

### 💡 Worked Example 1: Boundary Value Test Design

**Scenario:** Test an engine temperature warning system.

| Boundary | Expected Behavior | Test |
|----------|-------------------|------|
| -40°C | Cold start, no warning | Input -40 |
| 100°C | Normal, no warning | Input 100 |
| 119°C | Warning threshold -1, no warning | Input 119 |
| 120°C | Warning threshold, warning ON | Input 120 |
| 150°C | Max, warning ON | Input 150 |

### 💡 Worked Example 2: State Transition Tests

**Scenario:** Test door lock controller.

| State | Event | Next State | Guard Condition |
|-------|-------|------------|-----------------|
| Unlocked | Lock button | Locked | Speed < 5 km/h |
| Locked | Unlock button | Unlocked | Valid key |
| Locked | Crash detected | Unlocked | Airbag deployed |
| Any | Key fob battery low | No change | Warning displayed |

**Tests:**
1. Normal lock/unlock cycle
2. Lock at high speed (should fail — guard condition)
3. Crash auto-unlock
4. Invalid key attempt

### 💡 Worked Example 3: Fault Injection Test

**Scenario:** Test EPS (Electric Power Steering) fault handling.

| Fault | Injection Method | Expected Response |
|-------|-----------------|-------------------|
| Torque sensor out of range | Set sensor value to 0xFFFF | Enter degraded mode, reduce assist |
| Motor temperature high | Set temp to 150°C | Reduce assist, warn driver |
| CAN message timeout | Stop sending steering angle | Use last valid value, limp home |
| Supply voltage low | Set voltage to 9V | Reduce assist, warn driver |
