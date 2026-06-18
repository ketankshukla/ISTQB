# 📂 Case Study 2 — ISO 26262 Compliance Project

## ⭐ Context

You are the Quality Manager for an ECU supplier implementing ISO 26262 for a power steering system.

**System:** Electric Power Steering (EPS)
**ASIL:** D
**Customer:** Major OEM requiring ISO 26262 compliance evidence

---

## ⭐ Task 1: HARA

**Question:** Perform Hazard Analysis and Risk Assessment.

**Model Answer:**

| Hazard | Scenario | S | E | C | ASIL | Safety Goal |
|--------|----------|---|---|---|------|-------------|
| Unintended steering torque | Software fault applies torque | S3 | E4 | C3 | D | Prevent unintended steering assistance |
| Loss of steering assist | Motor failure | S2 | E4 | C2 | C | Maintain steering capability |
| Steering delay | Slow response to input | S2 | E3 | C2 | B | Ensure timely steering response |

---

## 🗓️ Task 2: Test Planning

**Question:** Plan tests for ASIL D software.

**Model Answer:**

**Required Techniques (per ISO 26262-6 Table 7):**
| Technique | Required | Implementation |
|-----------|----------|----------------|
| Statement coverage | Highly recommended | 100% target |
| Branch coverage | Highly recommended | 100% target |
| MC/DC | Recommended | 100% target (ASIL D) |
| Fault injection | Recommended | Torque sensor, motor faults |
| Back-to-back test | Recommended | MIL vs SIL vs HIL |
| Code review | Highly recommended | All safety-critical code |

---

## 🔗 Task 3: Traceability

**Question:** Establish and maintain traceability.

**Model Answer:**

| Safety Goal | FSR | TSR | Code | Unit Test | Integration | System |
|-------------|-----|-----|------|-----------|-------------|--------|
| SG-001: Prevent unintended torque | FSR-003: Limit max torque | TSR-012: Torque clamp | torque_limit.c | TC-001, TC-002 | IT-005 | ST-003 |
| SG-002: Maintain steering | FSR-007: Backup motor | TSR-020: Motor switch | motor_ctrl.c | TC-010, TC-011 | IT-010 | ST-007 |

**Tool:** IBM DOORS with links to Vector CANoe test reports.

---

## ⭐ Task 4: Audit Preparation

**Question:** Prepare evidence for OEM audit.

**Model Answer:**

**Evidence Package:**
| Standard Clause | Evidence | Location |
|-----------------|----------|----------|
| 6.4.5 Unit testing | Unit test reports, coverage (100% MC/DC) | `\tests\unit\reports\` |
| 6.4.7 Integration testing | Integration test plan, results | `\tests\integration\` |
| 6.4.8 Software testing | System test report, HIL logs | `\tests\system\` |
| 8.4.1 CM records | Baselines, change history | `\cm\records\` |
| 9.5.1 ASIL decomposition | Decomposition analysis, independence proof | `\safety\decomp\` |

**Gap Analysis:**
- Missing: Independent code review for one module
- Action: Schedule review, document results
