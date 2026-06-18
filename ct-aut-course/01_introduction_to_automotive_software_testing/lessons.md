# 📘 Chapter 1 — Introduction to Automotive Software Testing: Lessons

---

## ⭐ 1.1 Automotive Software Landscape

### 🔷 Modern Vehicle Architecture

A modern vehicle contains 70-100+ Electronic Control Units (ECUs) connected via multiple networks.

| Domain | Examples | ECU Count |
|--------|----------|-----------|
| **Powertrain** | Engine control, transmission | 5-10 |
| **Chassis** | Braking, steering, suspension | 5-10 |
| **Body** | Doors, windows, seats, climate | 15-25 |
| **Infotainment** | Navigation, radio, connectivity | 3-5 |
| **ADAS** | Adaptive cruise, lane keeping, parking | 5-10 |
| **Safety** | Airbags, ABS, ESP | 5-10 |

### 🔷 Software Growth

- Modern vehicles contain 100+ million lines of code
- More than a Boeing 787 or modern smartphone
- Software is a key differentiator for OEMs

---

## ⭐ 1.2 ECUs and Vehicle Networks

### 🔷 ECU (Electronic Control Unit)

- Embedded computer with microcontroller
- Runs real-time operating system (RTOS)
- Connected to sensors and actuators
- Communicates over vehicle networks

### 🔷 Vehicle Networks

| Network | Speed | Use Case | Topology |
|---------|-------|----------|----------|
| **CAN** | Up to 1 Mbps | Powertrain, chassis | Bus |
| **CAN FD** | Up to 8 Mbps | Modern CAN replacement | Bus |
| **LIN** | Up to 20 kbps | Doors, seats, lights | Bus |
| **FlexRay** | Up to 10 Mbps | Braking, steering | Dual channel |
| **Ethernet** | 100 Mbps - 1 Gbps | ADAS, infotainment, OTA | Star |

### 🔷 Communication Patterns

| Pattern | Description |
|---------|-------------|
| **Periodic** | ECU broadcasts signal at fixed interval (e.g., engine speed every 10ms) |
| **Event-based** | ECU sends message when event occurs (e.g., door opened) |
| **Request-response** | Diagnostic tool requests data from ECU |

---

## ⭐ 1.3 Safety-Critical Software

### 🔷 Characteristics

| Characteristic | Implication for Testing |
|---------------|------------------------|
| **Real-time requirements** | Must respond within strict deadlines |
| **Deterministic behavior** | Same inputs produce same outputs |
| **Fail-safe operation** | Graceful degradation on failure |
| **High reliability** | Extremely low failure rates required |
| **Long lifecycle** | 10-15 years in production |

### ⚠️ Risk of Software Failures

| System | Failure Consequence |
|--------|---------------------|
| **Brake control** | Loss of braking, accident |
| **Steering assist** | Unintended steering, loss of control |
| **Airbag control** | Failure to deploy, injury |
| **Throttle control** | Unintended acceleration |

---

## 📐 1.4 Automotive V-Model

### 🔷 Phases

```
System Requirements → System Design → Software Requirements → Software Design → Implementation
        ↓                     ↓                    ↓                   ↓                ↓
   System Tests ←     Integration Tests ←    Software Tests ←   Unit Tests ←    Code
```

### 🔷 Correspondence

| Left Side (Development) | Right Side (Testing) |
|-------------------------|---------------------|
| System requirements | System acceptance test |
| System design | System integration test |
| Software requirements | Software qualification test |
| Software architecture | Software integration test |
| Software detailed design | Software unit test |
| Code | Static analysis, code review |

---

## 🔗 1.5 Traceability

### 🔗 Why Traceability Matters

| Benefit | Description |
|---------|-------------|
| **Coverage** | Ensure all requirements are tested |
| **Impact analysis** | Identify affected tests when requirements change |
| **Compliance** | Prove to auditors that safety requirements are verified |
| **Debugging** | Trace test failures back to requirements |

### 🔗 Traceability Matrix

| Requirement | Design | Code | Test Case | Result |
|-------------|--------|------|-----------|--------|
| REQ-001: Brake within 2s | ARCH-005 | brake.c | TC-BRK-001 | Pass |
| REQ-002: Airbag deploy < 10ms | ARCH-012 | airbag.c | TC-AIR-003 | Pass |

---

## 💡 Worked Examples

### 💡 Worked Example 1: Network Selection

**Scenario:** Choose network for a door control system.

| Factor | Analysis |
|--------|----------|
| Data rate | Low (door open/close, window position) |
| Cost | Must be low for mass production |
| Wiring | Simple, lightweight |

**Decision:** LIN bus
- Low cost, sufficient for door functions
- Master-slave architecture fits door ECU topology

### 💡 Worked Example 2: V-Model Mapping

**Scenario:** Map an adaptive cruise control feature through the V-model.

| V-Model Phase | Artifact | Test |
|---------------|----------|------|
| System requirements | "ACC shall maintain distance to vehicle ahead" | System acceptance: Verify on test track |
| Software requirements | "Calculate target speed based on radar distance" | Software qualification: Verify calculation |
| Software design | Speed control algorithm | Software integration: Test algorithm with sensor data |
| Unit design | PID controller module | Unit test: Verify PID output |

### 💡 Worked Example 3: Traceability Impact

**Scenario:** Requirement "brake light illuminates within 100ms" changes to 50ms.

**Traceability identifies:**
- Design: Brake light control module
- Code: `brake_light.c`, line 45
- Tests: TC-BL-001, TC-BL-002

**Action:** Update code and re-run identified tests.
