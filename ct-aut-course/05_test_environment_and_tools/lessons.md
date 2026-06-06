# Chapter 5 — Test Environment and Tools: Lessons

---

## 5.1 XIL — Everything in the Loop

### MIL (Model in the Loop)

| Aspect | Description |
|--------|-------------|
| **What** | Simulation using mathematical models |
| **When** | Early development, algorithm design |
| **Speed** | Fast (non-real-time) |
| **Cost** | Low |
| **Tools** | MATLAB/Simulink, ASCET |

### SIL (Software in the Loop)

| Aspect | Description |
|--------|-------------|
| **What** | Production code compiled for host PC |
| **When** | Unit testing, integration testing |
| **Speed** | Fast (faster than real-time possible) |
| **Cost** | Low |
| **Tools** | MATLAB, dSPACE, Vector |

### PIL (Processor in the Loop)

| Aspect | Description |
|--------|-------------|
| **What** | Production code running on target processor |
| **When** | Integration testing, timing verification |
| **Speed** | Real-time |
| **Cost** | Medium (target hardware needed) |
| **Tools** | Lauterbach, iSYSTEM |

### HIL (Hardware in the Loop)

| Aspect | Description |
|--------|-------------|
| **What** | Real ECU connected to simulated vehicle |
| **When** | System testing, safety testing |
| **Speed** | Real-time |
| **Cost** | High (dedicated hardware) |
| **Tools** | dSPACE, Vector, NI PXI |

### Selection Guide

| Test Goal | Recommended Environment |
|-----------|------------------------|
| Algorithm validation | MIL |
| Unit testing | SIL |
| Timing verification | PIL |
| System integration | HIL |
| End-to-end validation | Vehicle |

---

## 5.2 Vehicle Test Environment

### Test Tracks

| Type | Purpose |
|------|---------|
| **Proving ground** | Controlled environment for repeatable tests |
| **Public roads** | Real-world validation (with permits) |
| **HiL with vehicle dynamics** | Simulate driving scenarios |

### Instrumentation

| Sensor | Measurement |
|--------|------------|
| **GPS/RTK** | Position, speed |
| **IMU** | Acceleration, rotation |
| **Camera/Lidar** | Object detection, distance |
| **CAN logger** | Network traffic recording |

---

## 5.3 Diagnostic Tools and Protocols

### UDS (Unified Diagnostic Services)

| Service | Function |
|---------|----------|
| **Read DTC** | Retrieve diagnostic trouble codes |
| **Clear DTC** | Reset fault memory |
| **Read data** | Get live sensor values |
| **Routine control** | Trigger test routines |
| **ECU flashing** | Update software |

### OBD (On-Board Diagnostics)

- Standardized diagnostic interface
- Required for emissions compliance
- PIDs (Parameter IDs) for standard data

### Diagnostic Tools

| Tool | Purpose |
|------|---------|
| **Vector CANoe/CANalyzer** | Network analysis, simulation |
| **INCA/ETAS** | Measurement and calibration |
| **ODIS/VCDS** | OEM diagnostic tools |
| **J2534 pass-thru** | Generic OEM interface |

---

## 5.4 Test Tools

### Test Automation

| Tool | Purpose |
|------|---------|
| **Tessy** | Unit testing for embedded C |
| **Cantata** | Unit and integration testing |
| **Vector vTESTstudio** | Test case design and automation |
| **ECU-TEST** | Test automation for HIL and SIL |

### Network Tools

| Tool | Purpose |
|------|---------|
| **Vector CANoe** | CAN/LIN simulation, analysis, testing |
| **PCAN** | USB CAN interface |
| **BusMaster** | Open-source CAN analyzer |

### Measurement

| Tool | Purpose |
|------|---------|
| **INCA** | ECU measurement and calibration |
| **ETAS** | Measurement, calibration, diagnostics |
| **ATI VISION** | Data acquisition and calibration |

---

## 5.5 Calibration and Flashing

### Calibration (CAL)

| Aspect | Description |
|--------|-------------|
| **What** | Adjusting parameters without code change |
| **Example** | Fuel map, torque limit, PID gains |
| **Format** | HEX, A2L (ASAP2) |
| **Tools** | INCA, ETAS, CANape |

### Flashing

| Aspect | Description |
|--------|-------------|
| **What** | Writing new software to ECU memory |
| **Protocol** | UDS 0x34/0x36/0x37 services |
| **Security** | Signature verification, seed-key |
| **Rollback** | Keep previous version for recovery |

---

## 5.6 Environment Configuration Management

### Configuration Items

| Item | Why Controlled |
|------|-------------|
| **ECU software version** | Tests must match software |
| **Calibration data** | Different cals = different behavior |
| **HIL plant model** | Model version affects results |
| **Test scripts** | Must match test specification |
| **Network databases (DBC/LDF)** | Define signal meanings |

### Version Control

- All test artifacts under version control
- Tag configurations for each test campaign
- Baseline for regression comparison

---

## Worked Examples

### Worked Example 1: Environment Selection

**Scenario:** Test a new engine control algorithm.

| Phase | Environment | Rationale |
|-------|-------------|-----------|
| Algorithm design | MIL (Simulink) | Fast iteration, no code |
| Code generation | SIL | Verify generated code behavior |
| Timing check | PIL | Verify execution time on target |
| System integration | HIL | Test with simulated sensors and actuators |
| Validation | Vehicle | Real-world behavior confirmation |

### Worked Example 2: Diagnostic Scenario

**Scenario:** Investigate an intermittent fault.

**Steps:**
1. Read DTCs — UDS service 0x19
2. Check freeze frame data (conditions when fault occurred)
3. Monitor live data during reproduction
4. Run routine control to trigger component test
5. Clear DTC and verify repair

### Worked Example 3: Calibration Test

**Scenario:** Verify that a new fuel map calibration improves efficiency without affecting emissions.

**Tests:**
1. Baseline test with old calibration
2. Test with new calibration
3. Compare fuel consumption, torque, and emissions
4. Verify OBD monitors don't trigger
5. Document delta and approve if within limits
