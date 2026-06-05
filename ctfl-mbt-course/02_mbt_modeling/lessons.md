# Chapter 2 — MBT Modeling: Lessons

---

## 2.1 State Machines in MBT

### What is a State Machine?

A state machine (finite state machine or FSM) is a model that represents system behavior as a set of states, transitions between states, and events that trigger transitions.

**Components of a State Machine:**

1. **States:** Distinct modes or conditions of the system
   - Initial state: Where the system starts
   - Final state: Where the system ends (optional)
   - Active state: The current state at any point in time

2. **Transitions:** Arrows connecting states, representing possible changes
   - Each transition has a source state and a target state

3. **Events:** Triggers that cause transitions
   - Events can come from user actions, system conditions, or timers
   - Example: "Insert Card", "Enter PIN", "Press Cancel"

4. **Guard Conditions:** Boolean conditions that must be true for a transition to occur
   - Example: "PIN is correct", "Balance >= withdrawal amount"
   - If the guard is false, the transition cannot be taken

5. **Actions:** Behaviors that occur when a transition is taken
   - Entry action: Performed when entering a state
   - Exit action: Performed when leaving a state
   - Transition action: Performed when taking a transition
   - Example: "Dispense cash", "Print receipt", "Eject card"

### Example: ATM State Machine

```
                    [Idle]
                      |
            Insert Card |
                      v
              [Card Inserted]
                      |
            Enter PIN | Invalid PIN (attempt < 3)
            (valid)   +------------------>
              |                         |
              v                         |
           [PIN OK]                     |
              |                         |
   Select Transaction|                   |
              |                         |
              v                         |
         [Processing]                   |
              |                         |
   Complete | Cancel |                  |
              |      |                  |
              v      v                  v
          [Complete]  [Idle]      [Card Retained]
```

**States:** Idle, Card Inserted, PIN OK, Processing, Complete, Card Retained

**Transitions:**
- Idle → Card Inserted (Event: Insert Card)
- Card Inserted → PIN OK (Event: Enter PIN, Guard: PIN valid)
- Card Inserted → Card Inserted (Event: Enter PIN, Guard: Invalid PIN, attempt < 3)
- Card Inserted → Card Retained (Event: Enter PIN, Guard: Invalid PIN, attempt = 3)
- PIN OK → Processing (Event: Select Transaction)
- Processing → Complete (Event: Complete)
- Processing → Idle (Event: Cancel)
- Complete → Idle (Event: Eject Card)

### State Machine Diagrams vs. Tables

**State Transition Table:**

| Current State | Event | Guard | Next State | Action |
|--------------|-------|-------|-----------|--------|
| Idle | Insert Card | - | Card Inserted | Read card |
| Card Inserted | Enter PIN | Valid | PIN OK | Verify PIN |
| Card Inserted | Enter PIN | Invalid, attempt<3 | Card Inserted | Show error |
| Card Inserted | Enter PIN | Invalid, attempt=3 | Card Retained | Retain card |
| PIN OK | Select Transaction | - | Processing | Start transaction |
| Processing | Complete | - | Complete | Process result |
| Processing | Cancel | - | Idle | Cancel transaction |

### Deriving State Machines from Requirements

**Step 1: Identify States**
Look for nouns or conditions in requirements:
- "The system is idle"
- "The card is inserted"
- "The PIN is verified"
- "The transaction is processing"

**Step 2: Identify Events**
Look for user actions or system triggers:
- "User inserts card"
- "User enters PIN"
- "User selects transaction"
- "User cancels"

**Step 3: Identify Transitions**
Map which events cause state changes:
- What happens when the user enters PIN? → PIN verified or invalid
- What happens when the user cancels? → Return to idle

**Step 4: Add Guards**
Add conditions that must be met:
- PIN must be valid to proceed
- Attempts must be < 3 before card is retained
- Balance must be sufficient for withdrawal

**Step 5: Add Actions**
Add system behaviors:
- Dispense cash on successful withdrawal
- Print receipt on completion
- Eject card on completion or cancel

---

## 2.2 Decision Tables in MBT

### What is a Decision Table?

A decision table is a tabular model representing combinations of conditions and corresponding actions. It is especially useful for modeling complex business rules with multiple interacting conditions.

**Components:**

1. **Conditions:** Inputs or system states that affect the outcome
2. **Actions:** System behaviors or outputs that result from the conditions
3. **Rules:** Columns representing unique combinations of conditions

### Example: Banking Transaction Approval

**Conditions:**
1. Account balance >= transaction amount (Y/N)
2. Daily limit not exceeded (Y/N)
3. Account is active (Y/N)
4. Transaction is from trusted device (Y/N)

**Actions:**
- Approve transaction
- Decline: insufficient funds
- Decline: daily limit exceeded
- Decline: account inactive
- Request additional verification

**Decision Table:**

| Conditions | R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 |
|---|---|---|---|---|---|---|---|---|
| Balance >= Amount | Y | Y | Y | Y | N | N | N | N |
| Daily limit OK | Y | Y | N | N | Y | Y | N | N |
| Account active | Y | N | Y | N | Y | N | Y | N |
| Trusted device | Y | N | Y | N | Y | N | Y | N |
| **Actions** | | | | | | | | |
| Approve | X | - | - | - | - | - | - | - |
| Decline: insufficient | - | - | - | - | X | X | X | X |
| Decline: limit | - | - | X | X | - | - | - | - |
| Decline: inactive | - | X | - | X | - | X | - | X |
| Request verification | - | - | - | - | - | - | - | - |

**Note:** In this simplified example, additional rules would be needed for verification requests.

### Decision Table Considerations

**Impossible Rules:**
Some combinations may be impossible in practice. For example, an inactive account may never have sufficient balance. These should be marked and removed from test generation.

**Redundant Rules:**
If two rules have the same conditions and the same actions, they can be merged.

**Don't Care Conditions:**
When a condition does not affect the outcome, use "-" (don't care) to reduce the table size.

---

## 2.3 Other Model Types

### Process Models

Process models (flowcharts, activity diagrams) represent workflows as sequences of activities with decision points. They are useful for:
- Business process testing
- Workflow validation
- End-to-end scenario testing

**Components:**
- Start/End nodes
- Activities (process steps)
- Decision points (branches)
- Parallel activities (forks/joins)

### Use Case Models

Use cases describe interactions between actors and the system. In MBT:
- Main flow → primary path tests
- Alternative flows → alternative path tests
- Exception flows → error handling tests

### Choosing the Right Model

| Specification Type | Recommended Model | Why |
|-------------------|-------------------|-----|
| State-dependent behavior | State machine | Captures modes and transitions |
| Business rules with conditions | Decision table | Captures condition combinations |
| Workflows and processes | Process model | Captures sequences and branches |
| User interactions | Use case model | Captures actor-system interactions |
| Data transformations | Data flow model | Captures input-output mappings |

---

## 2.4 Model Validation

### Why Validate the Model?

A model that does not match the real system will generate incorrect tests. Model validation ensures:
- The model reflects actual system behavior
- All requirements are covered by the model
- No incorrect behavior is modeled

### Validation Techniques

1. **Model Review:**
   - Stakeholders review the model for accuracy
   - Similar to code review or requirements review

2. **Walkthrough:**
   - Step through the model with example scenarios
   - Verify that expected behavior matches the model

3. **Prototyping:**
   - Generate a small set of tests from the model
   - Execute them against the system
   - Verify results match model predictions

4. **Traceability Check:**
   - Map each requirement to model elements
   - Ensure all requirements are covered
   - Ensure no model elements are unjustified

---

## Worked Examples

### Worked Example 1: Deriving a State Machine

**Requirements:**
- "A vending machine accepts coins and dispenses items."
- "The machine has a display showing the current balance."
- "If the user presses 'Cancel', the machine returns all inserted coins."
- "If the user selects an item with insufficient balance, the display shows 'Insert more coins' and the machine waits."
- "After dispensing an item, the machine returns any change and returns to idle."

**Derived State Machine:**

**States:**
1. Idle
2. Accepting Coins
3. Item Selected (sufficient balance)
4. Item Selected (insufficient balance)

**Transitions:**
- Idle → Accepting Coins (Event: Insert Coin)
- Accepting Coins → Accepting Coins (Event: Insert Coin)
- Accepting Coins → Item Selected (sufficient) (Event: Select Item, Guard: Balance >= Price)
- Accepting Coins → Item Selected (insufficient) (Event: Select Item, Guard: Balance < Price)
- Item Selected (insufficient) → Accepting Coins (Event: Insert Coin)
- Item Selected (sufficient) → Idle (Event: Dispense, Action: Return change)
- Any state → Idle (Event: Cancel, Action: Return all coins)

### Worked Example 2: Deriving a Decision Table

**Requirements:**
- "A customer gets free shipping if they are a VIP member AND the order exceeds $100."
- "A 10% discount is applied if the customer has a coupon code."
- "VIP members get an additional 5% discount on all orders."

**Conditions:**
1. VIP Member (Y/N)
2. Order > $100 (Y/N)
3. Has Coupon (Y/N)

**Actions:**
- Free shipping
- 10% discount
- 5% VIP discount

**Decision Table:**

| Conditions | R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 |
|---|---|---|---|---|---|---|---|---|
| VIP | Y | Y | Y | Y | N | N | N | N |
| Order > $100 | Y | Y | N | N | Y | Y | N | N |
| Has Coupon | Y | N | Y | N | Y | N | Y | N |
| **Actions** | | | | | | | | |
| Free Shipping | X | X | - | - | X | X | - | - |
| 10% Discount | X | - | X | - | X | - | X | - |
| 5% VIP Discount | X | X | X | X | - | - | - | - |
