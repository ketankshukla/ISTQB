# 📂 Case Study 1 — ADAS Feature Testing

## ⭐ Context

You are the Test Lead for an Adaptive Cruise Control (ACC) system in a new vehicle platform.

**Feature:**
- Maintain set speed when no vehicle ahead
- Follow vehicle ahead at adjustable distance
- Automatic braking to avoid collision
- Resume after lead vehicle moves

**ASIL:** B (speed control), D (emergency braking)

---

## ♟️ Task 1: Test Strategy

**Question:** Design a test strategy for the ACC system.

**Model Answer:**

**Test Levels:**
| Level | Environment | Focus |
|-------|-------------|-------|
| Unit | SIL | Sensor fusion algorithm, PID controller |
| Integration | HIL | Radar + camera interface, vehicle bus |
| System | HIL + Vehicle | Full ACC scenarios, safety cases |
| Acceptance | Test track | Customer validation |

**Safety Testing:**
- Fault injection: Radar obstruction, camera failure
- Boundary tests: Minimum/maximum following distance
- Emergency braking: Collision avoidance scenarios

---

## 🎨 Task 2: Test Case Design

**Question:** Design test cases using appropriate techniques.

**Model Answer:**

**Equivalence Partitioning — Set Speed:**
| Partition | Range | Test Value |
|-----------|-------|------------|
| Too low | < 30 km/h | 20 |
| Valid | 30-200 km/h | 80, 120 |
| Too high | > 200 km/h | 220 |
| Invalid | < 0 | -10 |

**Boundary Value — Following Distance:**
| Boundary | Action |
|----------|--------|
| Min distance (1.0s) | Maintain gap |
| Min-1 (0.9s) | Alert + brake |
| Max distance (2.5s) | Maintain gap |
| Max+1 (2.6s) | Accelerate to close gap |

**State Transition — ACC Modes:**
| State | Event | Next State |
|-------|-------|------------|
| Off | Driver activates | Standby |
| Standby | Set speed pressed | Active CC |
| Active CC | Vehicle detected | Active ACC |
| Active ACC | Lead vehicle stops | Holding |
| Holding | Lead vehicle moves | Active ACC |
| Any | Cancel pressed | Off |

---

## ⭐ Task 3: Fault Injection

**Question:** Design fault injection tests for safety.

**Model Answer:**

| Fault | Method | Expected Response |
|-------|--------|-------------------|
| Radar failure | Disconnect radar CAN message | Degrade to speed-only, warn driver |
| Camera obstruction | Cover camera lens | Use radar only, reduced confidence |
| Braking system fault | Inject DTC from ABS | Disable ACC, warn driver |
| CAN bus error | Corrupt speed message | Use redundant sensor, limp mode |

---

## 📊 Task 4: Coverage and Reporting

**Question:** Define coverage requirements and reporting.

**Model Answer:**

**Coverage:**
| Module | ASIL | Statement | Branch | MC/DC |
|--------|------|-----------|--------|-------|
| Sensor fusion | B | 100% | 100% | — |
| Emergency brake | D | 100% | 100% | 100% |
| HMI display | QM | 80% | 80% | — |

**Report:**
| Metric | Target | Current | Status |
|--------|--------|---------|--------|
| Test pass rate | 95% | 97% | Pass |
| Coverage (ASIL D) | 100% | 100% | Pass |
| Open defects | < 5 | 3 | Pass |
| Fault injection tests | 100% | 100% | Pass |
