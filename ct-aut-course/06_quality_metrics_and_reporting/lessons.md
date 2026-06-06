# Chapter 6 — Quality Metrics and Reporting: Lessons

---

## 6.1 Code Coverage Metrics

### Types

| Metric | Definition | ASIL Requirement |
|--------|-----------|------------------|
| **Statement coverage** | % of executable statements executed | All ASIL |
| **Branch coverage** | % of decision branches executed | ASIL B+ |
| **MC/DC (Modified Condition/Decision Coverage)** | Each condition independently affects outcome | ASIL C/D |

### Statement Coverage

- Formula: (Executed statements / Total statements) × 100
- Target: 100% for safety-critical code
- Gaps indicate untested code paths

### Branch Coverage

- Formula: (Executed branches / Total branches) × 100
- Target: 100% for ASIL B+
- Catches missing else paths

### MC/DC

- Each condition in a decision must independently affect the outcome
- Example: `if (A && B)` requires:
  - A=true, B=true → true
  - A=true, B=false → false
  - A=false, B=true → false
- Most rigorous coverage criterion

---

## 6.2 Defect Metrics

### Defect Density

- Formula: Defects per KLOC (thousand lines of code)
- Compare across modules to identify risky areas

### Defect Detection Rate

- Formula: Defects found / total defects (including post-release)
- Higher rate = better pre-release testing

### Defect Removal Efficiency

- Formula: Defects found pre-release / Total defects
- Target: > 90% for safety-critical software

### Defect Aging

| Age | Action |
|-----|--------|
| < 1 week | Normal resolution |
| 1-2 weeks | Monitor closely |
| > 2 weeks | Escalate for safety-critical |

---

## 6.3 Test Execution Metrics

| Metric | Formula | Purpose |
|--------|---------|---------|
| **Test pass rate** | Passed / Total × 100 | Overall quality indicator |
| **Test execution rate** | Executed / Planned × 100 | Schedule adherence |
| **Automation rate** | Automated / Total × 100 | Efficiency indicator |
| **Mean time to fix** | Total fix time / Number of defects | Responsiveness |

### Coverage vs Pass Rate

- High coverage + low pass rate = many bugs found (testing is effective)
- High coverage + high pass rate = quality is good
- Low coverage + high pass rate = insufficient testing

---

## 6.4 Coverage Analysis

### Analyzing Coverage Gaps

| Gap Type | Cause | Action |
|----------|-------|--------|
| **Missing tests** | No test case exists | Write test |
| **Unreachable code** | Defensive coding, error paths | Verify with static analysis |
| **Tool limitation** | Optimized code not instrumentable | Manual verification |
| **Excluded code** | Third-party, generated | Document exclusion |

### Coverage Report Content

| Section | Description |
|---------|-------------|
| **Summary** | Overall coverage percentage |
| **Module breakdown** | Coverage by file/function |
| **Uncovered lines** | List of lines not executed |
| **Trend** | Coverage change over time |

---

## 6.5 Test Reporting

### Report Types

| Audience | Content | Frequency |
|----------|---------|-----------|
| **Test team** | Detailed execution, defects, coverage | Daily |
| **Project management** | Pass rate, schedule, risks | Weekly |
| **Quality assurance** | Coverage, defect trends, compliance | Per milestone |
| **Customer/OEM** | High-level status, open issues | Per release |
| **Auditor** | Traceability, coverage evidence, process compliance | On demand |

### Report Structure

1. Executive summary
2. Test scope and environment
3. Execution summary (pass/fail/block)
4. Coverage analysis
5. Defect summary
6. Risk assessment
7. Recommendations

---

## 6.6 Audit Readiness

### What Auditors Look For

| Area | Evidence |
|------|----------|
| **Process compliance** | ASPICE assessment results |
| **Traceability** | Requirements → Tests matrix |
| **Coverage** | Coverage reports with ASIL mapping |
| **Defect management** | Closed-loop defect tracking |
| **Change control** | Approved changes with impact analysis |

### Preparation

- Maintain traceability in real-time
- Archive test results with configuration info
- Document deviations with justification
- Keep calibration records
- Retain test environment specifications

---

## Worked Examples

### Worked Example 1: Coverage Calculation

**Scenario:** Module has 100 statements, 20 branches, 4 conditions.

| Test Set | Statements | Branches | MC/DC |
|----------|-----------|----------|-------|
| Test A | 80 (80%) | 15 (75%) | 2/4 (50%) |
| Test B + A | 95 (95%) | 18 (90%) | 3/4 (75%) |
| Test C + B + A | 100 (100%) | 20 (100%) | 4/4 (100%) |

**For ASIL D:** All three coverage types must reach 100%.

### Worked Example 2: Defect Analysis

**Scenario:** Analysis of defects found in a release.

| Module | KLOC | Defects | Density | ASIL |
|--------|------|---------|---------|------|
| Brake control | 10 | 2 | 0.2 | D |
| Infotainment | 50 | 15 | 0.3 | QM |
| Climate control | 20 | 1 | 0.05 | A |

**Action:** Infotainment has higher density but lower safety impact. Still investigate root cause.

### Worked Example 3: Audit Evidence

**Scenario:** Prepare for ISO 26262 audit.

**Evidence package:**
| Standard Requirement | Evidence |
|---------------------|----------|
| 6.4.5 Software unit testing | Unit test reports, coverage reports |
| 6.4.7 Software integration testing | Integration test plan, results |
| 8.4.1 Configuration management | CM records, baselines |
| 8.4.4 Change management | Change requests, impact analysis |
| 9.5.1 ASIL decomposition | Decomposition analysis, independence evidence |
