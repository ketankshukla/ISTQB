# ❓ Chapter 2 — MBT Modeling: Practice Questions

---

### 🔷 Q1 (MBT-2.1, K2)

In a state machine, a transition is triggered by:

A. A state
B. An event
C. An action
D. A guard condition

---

### 🔷 Q2 (MBT-2.1, K3)

A state machine has 5 states and 7 transitions. What is the minimum number of test cases needed for 0-switch coverage (state coverage)?

A. 5
B. 7
C. 8
D. 12

---

### 🔷 Q3 (MBT-2.1, K2)

A guard condition in a state machine:

A. Always causes a transition to occur
B. Must be true for a transition to be enabled
C. Is the action performed during a transition
D. Is the starting state of the machine

---

### 🔷 Q4 (MBT-2.2, K2)

A decision table has 4 binary conditions. How many rules are in the full table before removing impossible rules?

A. 8
B. 12
C. 16
D. 20

---

### 🔷 Q5 (MBT-2.2, K3)

In a decision table, two rules have identical conditions and identical actions. These rules are:

A. Impossible rules
B. Redundant rules
C. Invalid rules
D. Boundary rules

---

### 🔷 Q6 (MBT-2.1, K3)

Which model type is MOST appropriate for testing a system with complex state-dependent behavior?

A. Decision table
B. State machine
C. Data flow diagram
D. Entity-relationship diagram

---

### 🔷 Q7 (MBT-2.2, K2)

In a decision table, "Order total > $100" is:

A. An action
B. A condition
C. A rule
D. An event

---

### 🔷 Q8 (MBT-2.1, K2)

An action in a state machine is:

A. A condition that must be true for a transition
B. A behavior performed when entering, leaving, or transitioning between states
C. The trigger that causes a state change
D. The starting point of the machine

---

### 🔷 Q9 (MBT-2.2, K3)

A decision table has conditions: A (2 values), B (3 values), C (2 values). After analysis, 2 rules are identified as impossible. How many valid test cases are needed?

A. 10
B. 8
C. 12
D. 6

---

### 🔷 Q10 (MBT-2.3, K2)

Which specification is BEST suited for modeling with a decision table?

A. "The system has idle, processing, and completed states"
B. "Discount is 10% if member AND order > $100; 5% if member only; 0% otherwise"
C. "The user logs in, searches for products, and checks out"
D. "Data flows from input to processing to output"

---

### 🔷 Q11 (MBT-2.1, K3)

For 1-switch coverage (transition coverage) in a state machine, the minimum number of test cases must cover:

A. Every state at least once
B. Every transition at least once
C. Every pair of consecutive transitions
D. Every possible path

---

### 🔷 Q12 (MBT-2.4, K2)

Model validation is important because:

A. It ensures the model generates the maximum number of tests
B. A bad model will generate incorrect or incomplete tests
C. It eliminates the need for test execution
D. It makes the model more complex

---

### 🔷 Q13 (MBT-2.2, K2)

A "don't care" condition in a decision table means:

A. The condition is not important and can be removed
B. The condition's value does not affect the action for that rule
C. The condition is always false
D. The condition is impossible

---

### 🔷 Q14 (MBT-2.1, K2)

A state machine diagram is being created for a login system. Which element represents "User enters password"?

A. A state
B. An event
C. A guard
D. An action

---

### 🔷 Q15 (MBT-2.3, K2)

A use case model is MOST appropriate for:

A. Testing combinations of business rules
B. Testing user interactions and system responses
C. Testing state-dependent behavior
D. Testing data transformations

---

### 🔷 Q16 (MBT-2.1, K3)

A state machine has states: Idle, Active, Suspended, Terminated. Which is the event and which is the guard in: "Timeout occurs after 30 minutes of inactivity → transition from Active to Suspended"?

A. Event: Timeout; Guard: 30 minutes of inactivity
B. Event: Active; Guard: Timeout
C. Event: Suspended; Guard: 30 minutes
D. Event: Inactivity; Guard: Timeout

---

### 🔷 Q17 (MBT-2.2, K3)

A decision table for loan approval has: Credit Score (High/Medium/Low), Income (Sufficient/Insufficient), Existing Debt (Yes/No). How many rules are in the full table?

A. 6
B. 8
C. 12
D. 18

---

### 🔷 Q18 (MBT-2.1, K2)

An entry action in a state machine is performed:

A. When leaving the state
B. When entering the state
C. During the transition to another state
D. Only at system startup

---

### 🔷 Q19 (MBT-2.2, K2)

Which of the following is NOT a component of a decision table?

A. Condition
B. Action
C. Rule
D. Transition

---

### 🔷 Q20 (MBT-2.4, K2)

When validating a state machine model, the MOST important check is:

A. That the model has more states than the real system
B. That the model accurately reflects the behavior of the real system
C. That the model uses the most complex notation possible
D. That the model generates the maximum number of tests

---

## ✔️ Answers and Rationales

### 🔷 Q1
**Answer: B**

**Rationale:** Events trigger transitions in state machines.

### 🔷 Q2
**Answer: A**

**Rationale:** 0-switch coverage requires visiting every state at least once. Minimum = number of states = 5.

### 🔷 Q3
**Answer: B**

**Rationale:** Guard conditions must be true for a transition to be enabled.

### 🔷 Q4
**Answer: C**

**Rationale:** For n binary conditions, rules = 2^n. For 4 conditions: 2^4 = 16.

### 🔷 Q5
**Answer: B**

**Rationale:** Identical conditions and actions = redundant rules. They can be merged.

### 🔷 Q6
**Answer: B**

**Rationale:** State-dependent behavior is best modeled with state machines.

### 🔷 Q7
**Answer: B**

**Rationale:** "Order total > $100" is a condition, not an action.

### 🔷 Q8
**Answer: B**

**Rationale:** Actions are behaviors performed when entering, leaving, or transitioning between states.

### 🔷 Q9
**Answer: A**

**Rationale:** Full table: 2 × 3 × 2 = 12 rules. After removing 2 impossible: 12 - 2 = 10 valid test cases.

### 🔷 Q10
**Answer: B**

**Rationale:** Business rules with multiple interacting conditions are best modeled with decision tables.

### 🔷 Q11
**Answer: B**

**Rationale:** 1-switch coverage = every transition exercised at least once.

### 🔷 Q12
**Answer: B**

**Rationale:** Model quality directly impacts test quality. A bad model generates bad tests.

### 🔷 Q13
**Answer: B**

**Rationale:** "Don't care" means the condition's value doesn't affect the action for that rule.

### 🔷 Q14
**Answer: B**

**Rationale:** "User enters password" is an event that triggers a transition.

### 🔷 Q15
**Answer: B**

**Rationale:** Use cases model user interactions with the system.

### 🔷 Q16
**Answer: A**

**Rationale:** Event is "Timeout"; guard is "30 minutes of inactivity".

### 🔷 Q17
**Answer: C**

**Rationale:** Rules = 3 × 2 × 2 = 12. Multiply the values of each condition.

### 🔷 Q18
**Answer: B**

**Rationale:** Entry actions are performed when entering a state.

### 🔷 Q19
**Answer: D**

**Rationale:** Transition is a state machine component, not a decision table component.

### 🔷 Q20
**Answer: B**

**Rationale:** The model must accurately reflect the real system's behavior to generate valid tests.
