# Chapter 2 — Automotive Software Basics: Lessons

---

## 2.1 ECU Architecture

### Components

| Component | Function |
|-----------|----------|
| **Microcontroller** | Executes software, processes inputs |
| **Memory (Flash/RAM)** | Stores program and runtime data |
| **Inputs (Sensors)** | Measure physical quantities |
| **Outputs (Actuators)** | Control physical devices |
| **Communication interface** | Connects to vehicle networks |

### Software Layers

| Layer | Description |
|-------|-------------|
| **Application** | Control algorithms, state machines |
| **Runtime Environment** | AUTOSAR RTE, message passing |
| **Basic Software** | Communication, diagnostics, storage |
| **Operating System** | Task scheduling, resource management |
| **Microcontroller drivers** | Hardware abstraction |

---

## 2.2 Vehicle Networks in Detail

### CAN (Controller Area Network)

| Attribute | Value |
|-----------|-------|
| **Speed** | Up to 1 Mbps |
| **Topology** | Multi-master bus |
| **Reliability** | Error detection and retransmission |
| **Use** | Engine, chassis, body control |

### LIN (Local Interconnect Network)

| Attribute | Value |
|-----------|-------|
| **Speed** | Up to 20 kbps |
| **Cost** | Very low (single wire) |
| **Master** | Single master, multiple slaves |
| **Use** | Doors, seats, lights |

### FlexRay

| Attribute | Value |
|-----------|-------|
| **Speed** | Up to 10 Mbps |
| **Determinism** | Time-triggered + event-triggered |
| **Redundancy** | Dual channel support |
| **Use** | Brake-by-wire, steering |

### Ethernet

| Attribute | Value |
|-----------|-------|
| **Speed** | 100 Mbps - 1 Gbps |
| **Bandwidth** | High for cameras and infotainment |
| **Protocols** | TCP/IP, SOME/IP, DDS |
| **Use** | ADAS, infotainment, diagnostics |

---

## 2.3 ASIL Levels

### Definition

Automotive Safety Integrity Level — risk classification for automotive hazards.

### Levels

| Level | Risk | Example | Testing Rigor |
|-------|------|---------|---------------|
| **ASIL D** | Highest | Steering, braking | Most rigorous |
| **ASIL C** | High | Airbags | Very rigorous |
| **ASIL B** | Medium | Headlights | Rigorous |
| **ASIL A** | Low | Wiper control | Moderate |
| **QM** | No safety | Infotainment | Standard |

### ASIL Determination

| Factor | Options | Impact |
|--------|---------|--------|
| **Severity (S)** | S0-S3 | Injury potential |
| **Exposure (E)** | E0-E4 | Likelihood of scenario |
| **Controllability (C)** | C0-C3 | Driver can prevent harm? |

---

## 2.4 Safety-Critical vs QM

| Characteristic | Safety-Critical (ASIL A-D) | QM |
|----------------|---------------------------|-----|
| **Testing depth** | Extensive (MIL, SIL, PIL, HIL) | Standard |
| **Traceability** | Full requirements-trace | Basic |
| **Documentation** | Extensive | Standard |
| **Code coverage** | MC/DC for ASIL D | Statement/branch |
| **Review rigor** | Formal inspections | Peer review |

---

## 2.5 V-Model for Automotive

### Levels

| Development | Testing |
|-------------|---------|
| **System design** | Vehicle testing |
| **Subsystem design** | Integration testing (HIL) |
| **Component design** | Component testing (SIL/PIL) |
| **Unit design** | Unit testing (MIL) |

---

## Worked Examples

### Worked Example 1: Network Selection

| Function | Requirements | Network |
|----------|-------------|---------|
| Engine sensors | Reliable, moderate speed | CAN |
| Door switches | Simple, low cost | LIN |
| Camera data | High bandwidth | Ethernet |
| Brake control | Deterministic, fast | FlexRay |

### Worked Example 2: ASIL Determination

| Function | Severity | Exposure | Controllability | ASIL |
|----------|----------|----------|-----------------|------|
| Steering assist | S3 | E4 | C3 | D |
| Headlights | S1 | E2 | C2 | A |
| Infotainment | S0 | E1 | C0 | QM |

### Worked Example 3: ECU Classification

| ECU | Function | Criticality | ASIL |
|-----|----------|-------------|------|
| Engine control | Fuel injection | High | C/D |
| Infotainment | Radio, navigation | Low | QM |
| ABS | Anti-lock braking | High | D |
| Door control | Locks, windows | Medium | A/B |
