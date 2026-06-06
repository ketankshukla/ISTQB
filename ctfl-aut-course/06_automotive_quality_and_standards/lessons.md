# Chapter 6 — Automotive Quality and Standards: Lessons

---

## 6.1 ISO 26262

### Scope

Functional safety standard for electrical and electronic systems in road vehicles.

### Parts Relevant to Testing

| Part | Content |
|------|---------|
| **Part 4: Product development** | System-level design and verification |
| **Part 5: Hardware** | Hardware design and verification |
| **Part 6: Software** | Software design, implementation, and verification |

### Testing Requirements

| ASIL | Unit Test | Integration Test | System Test |
|------|-----------|------------------|-------------|
| **QM** | Recommended | Recommended | Recommended |
| **A** | Highly recommended | Highly recommended | Highly recommended |
| **B** | Required | Highly recommended | Highly recommended |
| **C** | Required | Required | Highly recommended |
| **D** | Required | Required | Required |

### Safety Mechanisms

| Mechanism | Purpose |
|-----------|---------|
| **Watchdog** | Detect software hangs |
| **ECU monitoring** | Check plausibility of outputs |
| **Safe state** | Defined behavior on failure |
| **Diverse software** | Two independent implementations |

---

## 6.2 ASPICE

### Definition

Automotive SPICE — process assessment model for automotive software development.

### Process Categories

| Category | Processes |
|----------|-----------|
| **Primary life cycle** | Acquisition, supply, development |
| **Supporting life cycle** | QA, verification, validation |
| **Organizational life cycle** | Management, process improvement |

### Capability Levels

| Level | Description |
|-------|-------------|
| **0** | Incomplete |
| **1** | Performed — process achieves its purpose |
| **2** | Managed — process is planned and monitored |
| **3** | Established — process is defined and followed |
| **4** | Predictable — process is measured and controlled |
| **5** | Innovating — continuous improvement |

### Testing Process (SUP.4)

| Activity | Output |
|----------|--------|
| **Plan testing** | Test plan |
| **Design tests** | Test specification |
| **Execute tests** | Test results |
| **Evaluate results** | Test report |

---

## 6.3 AUTOSAR

### Architecture

| Layer | Components |
|-------|-----------|
| **Application (ASW)** | Software components |
| **Runtime Environment (RTE)** | Component communication |
| **Basic Software (BSW)** | Communication, storage, diagnostics |
| **Microcontroller** | Hardware abstraction |

### Benefits for Testing

| Benefit | Explanation |
|---------|-------------|
| **Portability** | Software reusable across ECUs |
| **Standardization** | Consistent interfaces |
| **Testability** | RTE enables mocking of components |
| **Tooling** | Standard tool support |

---

## 6.4 Quality Metrics

### Code Metrics

| Metric | Target | Purpose |
|--------|--------|---------|
| **Code coverage** | Per ASIL requirements | Verify thoroughness |
| **Cyclomatic complexity** | < 10 per function | Maintainability |
| **Defect density** | Trending down | Quality improvement |
| **Static analysis warnings** | Zero critical | Code quality |

### Process Metrics

| Metric | Purpose |
|--------|---------|
| **Test execution rate** | Schedule adherence |
| **Defect escape rate** | Effectiveness of testing |
| **Review defect density** | Early defect detection |
| **Requirement volatility** | Stability of scope |

---

## 6.5 Audit Readiness

### Preparation

| Element | Action |
|---------|--------|
| **Traceability** | Requirements linked to tests and results |
| **Documentation** | Test plans, reports, review records |
| **Evidence** | Coverage reports, defect logs |
| **Process adherence** | Follow defined processes |

### Common Audit Findings

| Finding | Root Cause |
|---------|------------|
| **Missing traceability** | Poor requirements management |
| **Incomplete testing** | Inadequate planning |
| **Outdated documents** | No configuration management |
| **No coverage evidence** | Missing tool reports |

---

## Worked Examples

### Worked Example 1: ISO 26262 Test Planning

| ASIL | Unit | Integration | System | Coverage |
|------|------|-------------|--------|----------|
| D | Required | Required | Required | Statement, Branch, MC/DC |
| B | Required | Highly rec. | Highly rec. | Statement, Branch |
| QM | Recommended | Recommended | Recommended | Statement (optional) |

### Worked Example 2: ASPICE Assessment

| Process | Level 1 | Level 2 | Level 3 |
|---------|---------|---------|---------|
| Testing | Tests exist | Planned and tracked | Defined process followed |

### Worked Example 3: Quality Dashboard

| Metric | Current | Target | Status |
|--------|---------|--------|--------|
| Statement coverage | 92% | 100% | Yellow |
| Branch coverage | 85% | 100% | Yellow |
| MC/DC | 100% | 100% | Green |
| Cyclomatic complexity > 10 | 3 | 0 | Red |
