# Chapter 3 — Automotive Software Development and Testing: Lessons

---

## 3.1 Automotive Development Lifecycle

### Phases

| Phase | Activities | Testing Activities |
|-------|------------|-------------------|
| **Requirements** | Define system and software requirements | Review for testability; plan test strategy |
| **Architecture** | Define software architecture | Plan integration tests |
| **Design** | Detailed design of components | Plan unit tests |
| **Implementation** | Code software components | Unit testing, static analysis |
| **Integration** | Combine components | Integration testing |
| **System test** | Test complete system | System functional and safety tests |
| **Acceptance** | Customer validation | Acceptance tests on target vehicle |

### Agile in Automotive

- **Challenges:** Safety documentation, long supplier chains, hardware dependencies
- **Adaptations:** Agile for non-safety features; V-model for safety-critical; hybrid approaches
- **SAFe/Scrum of Scrums:** Scaling agile across OEM and suppliers

---

## 3.2 Test Levels

### Unit Testing

| Aspect | Description |
|--------|-------------|
| **Scope** | Single function or module |
| **Environment** | Host PC (SIL) or target (cross-compiled) |
| **Coverage** | Statement, branch, MC/DC (for high ASIL) |
| **Tools** | Tessy, Cantata, GoogleTest (for C++) |

### Integration Testing

| Aspect | Description |
|--------|-------------|
| **Scope** | Multiple components or layers |
| **Environment** | PIL (on processor) or HIL |
| **Focus** | Interfaces, data flow, timing |
| **Stub/mock use** | Common for dependent components |

### System Testing

| Aspect | Description |
|--------|-------------|
| **Scope** | Complete software in ECU |
| **Environment** | HIL or vehicle |
| **Focus** | Requirements verification, safety behavior |
| **Types** | Functional, safety, network, diagnostic |

### Acceptance Testing

| Aspect | Description |
|--------|-------------|
| **Scope** | Customer requirements |
| **Environment** | Vehicle or test track |
| **Focus** | Real-world validation, user acceptance |
| **Participants** | OEM, supplier, sometimes regulatory body |

---

## 3.3 Traceability

### Bidirectional Traceability

```
Requirements → Design → Code → Tests
     ↑_________↑________↑______↑
```

**Forward traceability:** Requirement → Test (ensures coverage)
**Backward traceability:** Test → Requirement (ensures no unnecessary tests)

### Traceability Tools

| Tool Type | Examples |
|-----------|----------|
| **ALM** | IBM DOORS, Polarion, Jama |
| **Test management** | Vector CANoe, dSPACE, ETAS |
| **Issue tracking** | Jira, CodeBeamer |

### Traceability Maintenance

- Update links when requirements change
- Review traceability in change control boards
- Generate coverage reports for audits

---

## 3.4 Configuration Management

### Items Under Configuration Control

| Item | Rationale |
|------|-----------|
| **Requirements** | Baseline for testing |
| **Design documents** | Basis for test design |
| **Source code** | What is being tested |
| **Test cases** | Must match code version |
| **Test data** | Reproducibility |
| **Test environment** | Consistent results |
| **Test results** | Audit trail |

### Baselines

| Baseline | When Established |
|----------|-----------------|
| **Functional baseline** | Requirements approved |
| **Allocated baseline** | Design approved |
| **Product baseline** | Code and tests approved |

---

## 3.5 Software Releases and Updates

### Release Types

| Type | Description |
|------|-------------|
| **Development release** | Internal testing |
| **Integration release** | System integration |
| **Production release** | Vehicle production |
| **Service release** | Field update |

### OTA (Over-the-Air) Updates

| Challenge | Testing Implication |
|-----------|-------------------|
| **Rollback capability** | Test rollback to previous version |
| **Partial updates** | Test ECU-by-ECU updates |
| **Security** | Verify update authenticity |
| **Compatibility** | Test interaction between old and new versions |

---

## 3.6 Regression Testing

### Strategy

| Level | Scope | Frequency |
|-------|-------|-----------|
| **Unit regression** | Affected modules | Every code change |
| **Integration regression** | Affected interfaces | Weekly |
| **System regression** | Full system | Per release |
| **Vehicle regression** | End-to-end | Per major release |

### Selection Criteria

- Code changes and impact analysis
- ASIL level (higher ASIL = more regression)
- Previous defect history
- Safety-critical functions

---

## Worked Examples

### Worked Example 1: Test Level Selection

**Scenario:** Test a new brake control algorithm.

| Level | Test | Environment | Coverage |
|-------|------|-------------|----------|
| Unit | PID controller output | SIL | MC/DC (ASIL D) |
| Integration | Brake pedal → actuator command | PIL | Interface coverage |
| System | Emergency braking scenario | HIL | Requirements coverage |
| Acceptance | Track testing with test vehicle | Vehicle | Real-world validation |

### Worked Example 2: Traceability Impact Analysis

**Scenario:** Requirement "Brake light response time < 100ms" changes to 50ms.

**Traceability identifies:**
- Design: Brake light control module, timer configuration
- Code: `brake_light.c`, function `set_light_on()`
- Unit tests: TC-BL-001 (response time)
- System tests: TC-SYS-045 (brake light visibility)

**Actions:**
1. Update code timer value
2. Re-run unit tests with new threshold
3. Re-run system tests
4. Update test documentation

### Worked Example 3: OTA Update Testing

**Scenario:** Update infotainment system OTA.

**Tests:**
1. Download integrity (checksum)
2. Installation on target hardware
3. Rollback to previous version
4. Functionality after update
5. Compatibility with vehicle network
6. Security (signed update verification)
