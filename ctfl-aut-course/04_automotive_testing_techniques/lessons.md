# Chapter 4 — Automotive Testing Techniques: Lessons

---

## 4.1 Dynamic Testing Techniques

### Equivalence Partitioning

| Input Range | Partition | Test Value |
|-------------|-----------|------------|
| Speed 0-120 km/h | Valid | 60 |
| Speed > 120 km/h | Invalid | 150 |
| Speed < 0 | Invalid | -10 |

### Boundary Value Analysis

| Boundary | Test Value |
|----------|------------|
| 0 | 0, 1, -1 |
| 120 | 120, 121, 119 |

### State Transition Testing

| State | Event | Next State | Action |
|-------|-------|------------|--------|
| Off | Power on | Standby | Initialize |
| Standby | Brake pressed | Active | Enable braking |
| Active | Speed = 0 | Standby | Disable braking |

---

## 4.2 Code Coverage

### Statement Coverage

| Definition | Every executable statement executed at least once |
|------------|---------------------------------------------------|
| **Strength** | Basic, easy to achieve |
| **Weakness** | Misses missing branches |

### Branch Coverage

| Definition | Every decision branch (true/false) executed |
|------------|---------------------------------------------|
| **Strength** | Tests both outcomes of decisions |
| **Weakness** | Misses compound conditions |

### MC/DC (Modified Condition/Decision Coverage)

| Definition | Each condition independently affects decision outcome |
|------------|------------------------------------------------------|
| **Required for** | ASIL C and D |
| **Strength** | Thorough testing of compound conditions |
| **Weakness** | Requires many test cases |

### Coverage Requirements by ASIL

| ASIL | Statement | Branch | MC/DC |
|------|-----------|--------|-------|
| QM | Recommended | Optional | No |
| A | Required | Recommended | No |
| B | Required | Required | Recommended |
| C | Required | Required | Required |
| D | Required | Required | Required |

---

## 4.3 Fault Injection Testing

### Definition

Deliberately introducing faults to test error handling and robustness.

### Types

| Type | Fault | Purpose |
|------|-------|---------|
| **Software** | Corrupt variables | Test error handling |
| **Hardware** | Disconnect sensor | Test fallback behavior |
| **Communication** | Corrupt messages | Test protocol robustness |
| **Environment** | Extreme temperatures | Test operating limits |

### Example

| Fault Injected | Expected Response |
|----------------|---------------------|
| Speed sensor disconnect | Use backup sensor, set DTC |
| Invalid CAN message | Ignore message, log error |
| Memory corruption | Enter safe state |

---

## 4.4 Back-to-Back Testing

### Definition

Comparing outputs from different implementations or environments for the same inputs.

### Scenarios

| Reference | Test Subject | Purpose |
|-----------|-------------|---------|
| MIL model | SIL code | Verify code implements model |
| SIL code | PIL code | Verify target compilation |
| Specification | Implementation | Verify compliance |

---

## 4.5 Regression Testing

### Purpose

Ensure changes do not break existing functionality.

### Automotive Considerations

| Aspect | Consideration |
|--------|-------------|
| **Scope** | All affected ECUs and interfaces |
| **Data** | Calibration changes need retest |
| **Environment** | Same HIL setup for consistency |
| **Traceability** | Link to changed requirements |

---

## Worked Examples

### Worked Example 1: MC/DC Test Cases

| Condition A | Condition B | Decision | Test Case |
|-------------|-------------|----------|-----------|
| T | T | T | 1 |
| T | F | F | 2 |
| F | T | F | 3 |

Each condition independently affects the outcome.

### Worked Example 2: Fault Injection Scenario

| Fault | System Response | Assessment |
|-------|-----------------|------------|
| Sensor short circuit | Switch to redundant sensor | PASS |
| CAN bus off | Enter limp mode | PASS |
| Power fluctuation | Reset and reinitialize | PASS |

### Worked Example 3: Back-to-Back Comparison

| Input | MIL Output | SIL Output | Match |
|-------|------------|------------|-------|
| Speed=50, Brake=on | Decel=3.2 m/s2 | Decel=3.2 m/s2 | YES |
| Speed=100, Brake=on | Decel=5.1 m/s2 | Decel=5.0 m/s2 | NO |

Mismatch triggers investigation.
