# Chapter 3 — Automotive Testing Process: Lessons

---

## 3.1 Test Planning

### Elements

| Element | Description |
|---------|-------------|
| **Scope** | What functions and ECUs to test |
| **Test levels** | MIL, SIL, PIL, HIL, vehicle |
| **ASIL targets** | Coverage requirements per ASIL |
| **Resources** | Tools, environment, personnel |
| **Schedule** | Milestones aligned with development |
| **Risks** | Technical, schedule, resource risks |

### Plan Contents

| Section | Content |
|---------|---------|
| **Objectives** | What the testing aims to achieve |
| **Scope** | In-scope and out-of-scope items |
| **Strategy** | How testing will be performed |
| **Environment** | Hardware and software needs |
| **Schedule** | Timeline and dependencies |
| **Entry/exit criteria** | When to start and stop |

---

## 3.2 Requirements Traceability

### Definition

Ability to trace requirements through design, implementation, and testing.

### Traceability Matrix

| Requirement | Design | Code | Test Case | Test Result |
|-------------|--------|------|-----------|-------------|
| REQ-001: Brake within 2s | ARCH-005 | brake.c | TC-BRAKE-01 | PASS |
| REQ-002: Speed limit warning | ARCH-012 | speed.c | TC-SPEED-03 | PASS |

### Importance

| Benefit | Explanation |
|---------|-------------|
| **Coverage** | Ensure all requirements are tested |
| **Impact analysis** | Identify affected tests when requirements change |
| **Audit evidence** | Demonstrate compliance |
| **Debugging** | Link failures to requirements |

---

## 3.3 Test Levels in Automotive

| Level | Description | When |
|-------|-------------|------|
| **MIL** | Model-in-the-Loop: Test simulation models | Early design |
| **SIL** | Software-in-the-Loop: Test compiled code on PC | Development |
| **PIL** | Processor-in-the-Loop: Test on target processor | Integration |
| **HIL** | Hardware-in-the-Loop: Test ECU with simulated environment | System test |
| **Vehicle** | Test in real vehicle | Acceptance |

### Comparison

| Level | Speed | Cost | Fidelity | When to Use |
|-------|-------|------|----------|-------------|
| **MIL** | Fast | Low | Low | Algorithm development |
| **SIL** | Fast | Low | Medium | Software verification |
| **PIL** | Medium | Medium | Medium | Target compatibility |
| **HIL** | Medium | High | High | System integration |
| **Vehicle** | Slow | Highest | Highest | Final validation |

---

## 3.4 Verification vs Validation

| Aspect | Verification | Validation |
|--------|-------------|------------|
| **Question** | Did we build it right? | Did we build the right thing? |
| **Focus** | Compliance with specification | Meeting user needs |
| **Methods** | Reviews, static analysis, testing | User testing, vehicle trials |
| **Timing** | Throughout development | At milestones and end |

---

## 3.5 Static Testing in Automotive

| Technique | Purpose | ASIL Relevance |
|-----------|---------|---------------|
| **Requirements review** | Ensure completeness, consistency | All |
| **Design review** | Validate architecture | All |
| **Code review** | Find defects, ensure standards | High ASIL |
| **Static analysis** | Automated code checking | All |
| **Model checking** | Verify state machines | High ASIL |

---

## Worked Examples

### Worked Example 1: Test Level Selection

| Scenario | Level | Reason |
|----------|-------|--------|
| Algorithm design | MIL | Fast iteration, no hardware |
| Software unit test | SIL | Fast, on PC |
| Target compiler check | PIL | Verify target behavior |
| ECU with sensors/actuators | HIL | Real hardware, simulated plant |
| Final sign-off | Vehicle | Real-world validation |

### Worked Example 2: Traceability Example

| Requirement | Design | Implementation | Test |
|-------------|--------|----------------|------|
| Brake force proportional to pedal | Brake controller architecture | brake_force.c | TC-BRAKE-01, TC-BRAKE-02 |
| ABS activation < 200ms | ABS state machine | abs_control.c | TC-ABS-01 |

### Worked Example 3: Coverage Requirements

| ASIL | Statement | Branch | MC/DC |
|------|-----------|--------|-------|
| QM | Yes | Optional | No |
| A | Yes | Yes | No |
| B | Yes | Yes | Recommended |
| C | Yes | Yes | Yes |
| D | Yes | Yes | Yes (mandatory) |
