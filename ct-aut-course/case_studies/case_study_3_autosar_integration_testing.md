# 📂 Case Study 3 — AUTOSAR Integration Testing

## ⭐ Context

You are the Integration Test Lead for an AUTOSAR-based body control module.

**Module:** Door control (locks, windows, mirrors)
**Architecture:** AUTOSAR Classic
**ECU:** Infineon AURIX

---

## ⭐ Task 1: Test Architecture

**Question:** Design integration test architecture.

**Model Answer:**

**Test Levels:**
| Level | Scope | Environment | Tools |
|-------|-------|-------------|-------|
| SWC test | Individual components | SIL with RTE stubs | TESSY, Vector |
| RTE integration | Component interfaces | SIL with real RTE | Vector CANoe |
| BSW integration | Services + drivers | PIL | iSYSTEM, Lauterbach |
| System | Full stack | HIL | dSPACE |

---

## 🎨 Task 2: SWC Test Design

**Question:** Test a door lock SWC.

**Model Answer:**

**RTE Stubs:**
- `Rte_Read_SpeedSignal()` → returns test speed
- `Rte_Write_LockStatus()` → captures output
- `Rte_Call_DiagnosticLog()` → captures fault log

**Test Cases:**
| Test | Input | Expected Output |
|------|-------|-----------------|
| Lock at standstill | Speed = 0, Lock button = true | Lock status = LOCKED |
| Lock at speed | Speed = 10, Lock button = true | Lock status = LOCKED |
| Unlock at speed | Speed = 10, Unlock button = true | Lock status = LOCKED (guard) |
| Crash unlock | Speed = 50, Crash signal = true | Lock status = UNLOCKED |
| Invalid speed | Speed = 0xFF (invalid) | Diagnostic log, default behavior |

---

## ⭐ Task 3: Network Testing

**Question:** Test network communication.

**Model Answer:**

**CAN Message Tests:**
| Message | Cycle Time | Test |
|---------|-----------|------|
| DoorStatus | 100ms | Verify periodic transmission |
| DoorLockCmd | Event | Verify reception and action |
| Diagnostic response | On request | Verify UDS compliance |

**Error Tests:**
- Missing message (timeout)
- Corrupted CRC
- Bus off recovery
- Duplicate message handling

---

## ♟️ Task 4: Regression Strategy

**Question:** Plan regression for ongoing development.

**Model Answer:**

| Change Type | Regression Scope | Environment |
|-------------|-----------------|-------------|
| SWC logic change | Affected SWC + interfaces | SIL |
| RTE config change | All SWC interfaces | SIL + PIL |
| BSW driver change | All BSW users | PIL + HIL |
| Network database change | All network users | HIL |
| Calibration change | Affected functions | HIL + Vehicle |

**Automation:**
- SWC tests: Automated in CI (every commit)
- Integration tests: Nightly on PIL
- System tests: Per release on HIL
