# Chapter 4 — Testing Techniques for Automotive: Practice Questions

---

### Q1 (AuT-4.1, K2)

MISRA C/C++ checking is a form of:

A. Dynamic testing
B. Static testing
C. Only manual testing
D. Only performance testing

---

### Q2 (AuT-4.2, K2)

Boundary value analysis for a signal with range 0-100 should test:

A. Only 0 and 100
B. 0, 1, 99, 100
C. Only 50
D. Only -1 and 101

---

### Q3 (AuT-4.3, K2)

Equivalence partitioning for a valid speed range of 0-200 km/h should include:

A. Only 0 and 200
B. Valid, too low, too high, and invalid partitions
C. Only 100
D. Only 0, 50, 100, 150, 200

---

### Q4 (AuT-4.4, K2)

State transition testing for an ECU should include:

A. Only normal transitions
B. Normal, error, and guard condition violations
C. Only initial state
D. Only final state

---

### Q5 (AuT-4.1, K2)

Static analysis tools like Polyspace can find:

A. Only runtime errors
B. Potential runtime issues through code analysis without execution
C. Only UI issues
D. Only network issues

---

### Q6 (AuT-4.2, K2)

For ASIL D, MC/DC coverage is:

A. Optional
B. Required
C. Only for hardware
D. Only for system tests

---

### Q7 (AuT-4.3, K2)

An invalid equivalence partition tests:

A. Normal operation
B. System robustness against unexpected input
C. Only performance
D. Only usability

---

### Q8 (AuT-4.4, K2)

Fault injection testing for ABS might:

A. Only test normal braking
B. Simulate a wheel speed sensor failure
C. Only test on dry pavement
D. Only test at low speed

---

### Q9 (AuT-4.1, K2)

Code review in automotive should focus on:

A. Only coding style
B. Safety-critical paths, boundary conditions, and error handling
C. Only comments
D. Only variable names

---

### Q10 (AuT-4.2, K2)

Three-value boundary analysis tests:

A. Only min and max
B. Min, min+, max-, max
C. Only average values
D. Only random values

---

### Q11 (AuT-4.3, K2)

Equivalence partitioning reduces test cases by:

A. Testing every possible value
B. Grouping values that should be treated the same
C. Only testing boundaries
D. Only testing invalid values

---

### Q12 (AuT-4.4, K2)

A state transition table should document:

A. Only states
B. States, events, transitions, and guard conditions
C. Only events
D. Only outputs

---

### Q13 (AuT-4.1, K2)

Dynamic memory allocation in safety-critical automotive code:

A. Is encouraged
B. Is generally prohibited (MISRA rule)
C. Only for infotainment
D. Only for testing

---

### Q14 (AuT-4.2, K2)

For a temperature sensor with range -40 to 150°C, boundary tests should include:

A. Only data type limits
B. -40, -39, 149, 150
C. Only 0 and 150
D. Only -40 and 150

---

### Q15 (AuT-4.3, K2)

A partition for "engine off" in a state machine is:

A. Only a state
B. A valid partition of engine operating modes
C. Only an event
D. Only a transition

---

### Q16 (AuT-4.4, K2)

Hardware fault injection might involve:

A. Only code changes
B. Disconnecting a sensor or corrupting a signal
C. Only UI testing
D. Only database testing

---

### Q17 (AuT-4.1, K2)

Static analysis for complexity identifies:

A. Only syntax errors
B. High-risk code that may be hard to test and maintain
C. Only performance issues
D. Only security issues

---

### Q18 (AuT-4.2, K2)

For ASIL B, branch coverage is:

A. Optional
B. Required
C. Only for unit tests
D. Only for system tests

---

### Q19 (AuT-4.3, K2)

Testing an invalid gear position like 'X' verifies:

A. Normal operation
B. Error handling for invalid input
C. Only performance
D. Only fuel economy

---

### Q20 (AuT-4.4, K2)

State transition coverage for ASIL C and D requires:

A. Only some transitions
B. All transitions including error paths
C. Only normal paths
D. Only initial state coverage

---

## Answers and Rationales

### Q1
**Answer: B**
**Rationale:** MISRA = static testing.

### Q2
**Answer: B**
**Rationale:** BVA = 0, 1, 99, 100.

### Q3
**Answer: B**
**Rationale:** EP = valid + too low + too high + invalid.

### Q4
**Answer: B**
**Rationale:** State = normal + error + guards.

### Q5
**Answer: B**
**Rationale:** Static analysis = finds issues without execution.

### Q6
**Answer: B**
**Rationale:** MC/DC = required for ASIL D.

### Q7
**Answer: B**
**Rationale:** Invalid EP = robustness.

### Q8
**Answer: B**
**Rationale:** Fault injection = simulate sensor failure.

### Q9
**Answer: B**
**Rationale:** Code review = safety + boundaries + errors.

### Q10
**Answer: B**
**Rationale:** Three-value = min, min+, max-, max.

### Q11
**Answer: B**
**Rationale:** EP = group same-treated values.

### Q12
**Answer: B**
**Rationale:** Table = states + events + transitions + guards.

### Q13
**Answer: B**
**Rationale:** Dynamic allocation = prohibited in safety-critical.

### Q14
**Answer: B**
**Rationale:** Boundary = spec limits, not type limits.

### Q15
**Answer: B**
**Rationale:** Engine off = valid partition.

### Q16
**Answer: B**
**Rationale:** Hardware FI = disconnect/corrupt signals.

### Q17
**Answer: B**
**Rationale:** Complexity = high-risk code.

### Q18
**Answer: B**
**Rationale:** Branch = required ASIL B+.

### Q19
**Answer: B**
**Rationale:** Invalid = error handling.

### Q20
**Answer: B**
**Rationale:** ASIL C/D = all transitions including errors.
