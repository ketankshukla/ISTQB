# Chapter 2 — Automotive Standards and Regulations: Lessons

---

## 2.1 ISO 26262 — Functional Safety

### Overview

ISO 26262 is the international standard for functional safety of electrical/electronic systems in production vehicles.

### Parts

| Part | Content |
|------|---------|
| **Part 1: Vocabulary** | Definitions and abbreviations |
| **Part 2: Management of functional safety** | Organizational aspects |
| **Part 3: Concept phase** | Hazard analysis and risk assessment |
| **Part 4: Product development: system level** | System-level safety |
| **Part 5: Product development: hardware level** | Hardware safety |
| **Part 6: Product development: software level** | Software safety |
| **Part 7: Production and operation** | Manufacturing and service |
| **Part 8: Supporting processes** | Configuration, change management |
| **Part 9: ASIL-oriented and safety-oriented analysis** | Decomposition, coexistence |
| **Part 10: Guidelines** | Interpretation and examples |
| **Part 11: Application to semiconductors** | IC-specific guidance |
| **Part 12: Adaptation for motorbikes** | Two-wheeler scope |

### Safety Lifecycle

```
HARA → Safety Goals → Functional Safety Concept → Technical Safety Concept →
Software Safety Requirements → Software Design → Implementation → Testing →
Integration → Validation → Release
```

---

## 2.2 ASIL — Automotive Safety Integrity Level

### Definition

ASIL is a risk classification scheme defined by ISO 26262. It determines the rigor required for development and testing.

### ASIL Levels

| ASIL | Severity | Exposure | Controllability | Rigor |
|------|----------|----------|-----------------|-------|
| **QM** | Low | Low | Controllable | Quality management only |
| **A** | Medium | Low | Medium | Low rigor |
| **B** | Medium | Medium | Medium | Medium rigor |
| **C** | High | High | Medium | High rigor |
| **D** | High | High | Difficult | Highest rigor |

### Determining ASIL

Three factors:
- **Severity (S):** How bad is the harm? (S1-S3)
- **Exposure (E):** How likely is the situation? (E1-E4)
- **Controllability (C):** Can the driver control the situation? (C1-C3)

**Example:** Brake failure at highway speed = ASIL D (S3, E4, C3)

### ASIL Decomposition

- High ASIL requirements can be decomposed into redundant lower-ASIL requirements
- Example: ASIL D → two ASIL B(D) elements with independence

---

## 2.3 ASPICE

### Definition

Automotive SPICE (ASPICE) is a process assessment model for software development in the automotive industry.

### Process Dimensions

| Dimension | Description |
|-----------|-------------|
| **Primary lifecycle** | Acquisition, supply, engineering, support |
| **Organizational** | Management, improvement, reuse |

### Capability Levels

| Level | Name | Description |
|-------|------|-------------|
| **0** | Incomplete | Process not performed or fails objectives |
| **1** | Performed | Process achieves its purpose |
| **2** | Managed | Process is planned and monitored |
| **3** | Established | Process uses defined organizational standards |
| **4** | Predictable | Process is quantitatively managed |
| **5** | Innovating | Process continuously improves |

### Relevance to Testing

- **Level 1:** Tests are performed
- **Level 2:** Test plans, test monitoring
- **Level 3:** Defined test process across projects
- **Level 4:** Test metrics and quantitative management
- **Level 5:** Continuous test process improvement

---

## 2.4 AUTOSAR

### Definition

AUTOSAR (AUTomotive Open System ARchitecture) is a standardized software architecture for automotive ECUs.

### Layers

| Layer | Description |
|-------|-------------|
| **Application (ASW)** | Software components implementing functionality |
| **Runtime Environment (RTE)** | Interface layer between components |
| **Basic Software (BSW)** | Hardware abstraction, communication, storage, diagnostics |
| **Microcontroller** | Hardware layer |

### Testing Implications

- Software components (SWCs) can be tested independently
- RTE interfaces enable stub/mock-based testing
- BSW testing requires hardware or emulator

---

## 2.5 Other Standards

| Standard | Focus |
|----------|-------|
| **SAE J3061** | Cybersecurity for vehicles |
| **ISO/SAE 21434** | Cybersecurity engineering |
| **UN ECE R155/R156** | Cybersecurity and software update regulations |
| **MISRA C/C++** | Coding standards for safety-critical C/C++ |

---

## Worked Examples

### Worked Example 1: ASIL Determination

**Scenario:** Evaluate ASIL for power steering system.

| Factor | Assessment | Rating |
|--------|-----------|--------|
| Severity | Loss of steering at high speed → severe injury | S3 |
| Exposure | Highway driving → high probability | E4 |
| Controllability | Driver may not be able to control → difficult | C3 |

**ASIL:** D (S3 + E4 + C3 = D)

**Testing implication:**
- MC/DC coverage required
- Extensive fault injection testing
- Independent code review

### Worked Example 2: ASPICE Assessment

**Scenario:** Assess testing process maturity.

| Practice | Current | Gap | Target |
|----------|---------|-----|--------|
| Test strategy exists | Yes | — | Level 1 |
| Test plans reviewed | Sometimes | No formal review | Level 2 |
| Test process defined | No | Create standard process | Level 3 |
| Test metrics collected | No | Define and collect | Level 4 |

### Worked Example 3: AUTOSAR Testing

**Scenario:** Test an AUTOSAR software component.

**Approach:**
1. Test SWC logic with RTE stubs (no hardware needed)
2. Test RTE interface compliance
3. Test BSW integration on target hardware
4. Test end-to-end on HIL (Hardware in the Loop)
