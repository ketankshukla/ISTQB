# 🪤 Chapter 2 — MBT Modeling: Exam Traps

## 🪤 Trap 1: Confusing Events with States

**Trap:** Events are triggers that cause transitions. States are conditions the system is in.

**Example question:**
> In a state machine, "Enter PIN" is an example of:
>
> A. A state
> B. An event
> C. A guard condition
> D. An action

**Correct answer:** B — "Enter PIN" is an event that triggers a transition.

---

## 🪤 Trap 2: Forgetting Guard Conditions in State Machines

**Trap:** A transition may have a guard condition that must be true for the transition to occur.

**Example question:**
> A transition is drawn from "Checking Balance" to "Sufficient Funds" with the label "Balance >= Amount". This label represents:
>
> A. An event
> B. A guard condition
> C. An action
> D. A state

**Correct answer:** B — "Balance >= Amount" is a guard condition.

---

## 🪤 Trap 3: Confusing Decision Table Conditions with Actions

**Trap:** Conditions are inputs/states. Actions are outputs/behaviors.

**Example question:**
> In a decision table, "Customer is a VIP member" is:
>
> A. An action
> B. A condition
> C. A rule
> D. An impossible combination

**Correct answer:** B — "Customer is a VIP member" is a condition.

---

## 🪤 Trap 4: Thinking All Model Combinations Are Valid

**Trap:** Some combinations in decision tables may be impossible. These should be identified and excluded.

**Example question:**
> A decision table has 3 binary conditions. Theoretically there are 8 rules, but 2 combinations can never occur in practice. How many test cases should be generated?
>
> A. 8
> B. 6
> C. 4
> D. 2

**Correct answer:** B — 8 - 2 = 6 valid rules.

---

## 🪤 Trap 5: Assuming a Single Model Type Fits All

**Trap:** Different specifications require different model types.

**Example question:**
> A system has complex state-dependent behavior (login states, session states, error states). Which model type is MOST appropriate?
>
> A. Decision table
> B. State machine
> C. Data flow diagram
> D. Class diagram

**Correct answer:** B — State-dependent behavior is best modeled with state machines.
