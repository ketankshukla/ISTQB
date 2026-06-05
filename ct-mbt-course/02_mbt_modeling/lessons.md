# Chapter 2 — MBT Modeling: Lessons

---

## 2.1 Types of Test Models

### State Transition Model (State Machine)

**Description:** A model showing the states a system can be in and the transitions between them triggered by events or conditions.

**Components:**
- **States:** Conditions or situations of the system (e.g., Idle, Processing, Complete)
- **Transitions:** Changes from one state to another
- **Events/Triggers:** What causes a transition (e.g., user clicks "Submit")
- **Guard Conditions:** Boolean conditions that must be true for a transition to occur
- **Actions:** Operations performed when a transition occurs or when entering/exiting a state

**Example — ATM:**
```
States: Idle, Card Inserted, PIN Entered, Menu Displayed, Withdrawal, Balance Check, Complete

Transitions:
- Idle → Card Inserted (event: insert card)
- Card Inserted → PIN Entered (event: enter PIN; guard: PIN valid)
- Card Inserted → Idle (event: eject card)
- PIN Entered → Menu Displayed (guard: PIN correct)
- PIN Entered → Card Inserted (guard: PIN incorrect; action: increment attempt counter)
- Menu Displayed → Withdrawal (event: select withdrawal)
- Menu Displayed → Balance Check (event: select balance)
- Withdrawal → Complete (event: confirm amount; action: dispense cash)
- Balance Check → Complete (event: display balance)
- Complete → Idle (event: eject card)
```

**When to Use:**
- Systems with clear states and state-dependent behavior
- Protocols, embedded systems, transaction processing
- User workflows with distinct phases

### Decision Table

**Description:** A table showing combinations of conditions (inputs) and corresponding actions (outputs). Used to model business rules.

**Structure:**
- **Conditions:** Input factors (e.g., Customer Type, Order Amount, In Stock)
- **Actions:** Output responses (e.g., Apply Discount, Process Order, Reject)
- **Rules:** Each column represents a combination of condition values and resulting actions

**Example — E-Commerce Discount Rules:**

| Conditions | R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 |
|-----------|----|----|----|----|----|----|----|----|
| Member? | Y | Y | Y | Y | N | N | N | N |
| Order > $100? | Y | Y | N | N | Y | Y | N | N |
| In Stock? | Y | N | Y | N | Y | N | Y | N |
| **Actions** | | | | | | | | |
| 10% Discount | X | X | | | | | | |
| 5% Discount | | | X | X | | | | |
| Free Shipping | X | | X | | X | | | |
| Process Order | X | | X | | X | | X | |
| Backorder | | X | | X | | X | | X |
| Reject | | | | | | | | X |

**When to Use:**
- Business rules with multiple interdependent conditions
- Complex logic where combinations matter
- Regulatory or compliance rules

### Process Model

**Description:** A model showing activities, tasks, and the flow of control or data between them.

**Notations:**
- **UML Activity Diagram:** Activities, decisions, forks, joins
- **BPMN (Business Process Model and Notation):** Pools, lanes, tasks, gateways, events

**Example — Order Fulfillment (BPMN):**
```
Start → Receive Order → [Check Stock]
    → In Stock → Pick Items → Pack Order → Ship Order → End
    → Out of Stock → Notify Customer → Cancel Order → End
```

**When to Use:**
- Business processes and workflows
- Systems with sequential or parallel activities
- End-to-end user journeys

### Feature Model

**Description:** A model showing features of a product and their relationships: mandatory, optional, alternative, or requires/excludes.

**Relationships:**
- **Mandatory:** Feature must be included (filled circle)
- **Optional:** Feature may be included (empty circle)
- **Alternative:** Exactly one of a group must be selected
- **Or:** At least one of a group may be selected
- **Requires:** If A is selected, B must be selected
- **Excludes:** If A is selected, B cannot be selected

**Example — Mobile Phone Features:**
```
Mobile Phone (mandatory)
|-- Screen (mandatory)
|   |-- Size: 5" or 6" (alternative)
|   |-- Type: LCD or OLED (alternative)
|-- Camera (optional)
|   |-- Front Camera (optional, requires Camera)
|   |-- Rear Camera (optional, requires Camera)
|       |-- Lenses: Standard, Wide, Telephoto (or)
|-- Connectivity (mandatory)
|   |-- WiFi (mandatory)
|   |-- 5G (optional)
|   |-- NFC (optional)
|-- Battery (mandatory)
    |-- Standard (alternative)
    |-- Extended (alternative, excludes 5G if selected due to space)
```

**When to Use:**
- Product line testing (testing multiple product variants)
- Configuration testing
- Feature-based test planning

---

## 2.2 Modeling Notations

### UML State Machine

**Elements:**
- **State:** Rounded rectangle with name
- **Initial State:** Filled circle
- **Final State:** Circle with inner filled circle
- **Transition:** Arrow between states, labeled with event [guard] / action
- **Composite State:** State containing substates

**Example:**
```
        [valid PIN entered]
    ┌──────────────────────────────┐
    v                              │
[Idle] --insert card--> [CardInserted] --enter PIN/--> [PINEntered]
    ^                                                    │
    └──────eject card────────────────────────────────────┘
                           [invalid PIN]
```

### UML Activity Diagram

**Elements:**
- **Activity:** Rounded rectangle
- **Decision:** Diamond
- **Fork/Join:** Thick bar (parallel activities)
- **Initial/Final:** Same as state machine
- **Control Flow:** Arrow

**Example:**
```
[Start] --> [Receive Application] --> {Decision: Valid?}
    |--No--> [Reject Application] --> [End]
    |--Yes--> [Check Credit Score] --> {Decision: Approved?}
        |--No--> [Reject] --> [End]
        |--Yes--> [Process Application] --> [Send Confirmation] --> [End]
```

### BPMN (Business Process Model and Notation)

**Elements:**
- **Events:** Circles (start, intermediate, end)
- **Activities:** Rounded rectangles with icons
- **Gateways:** Diamonds (exclusive, parallel, inclusive)
- **Pools/Lanes:** Organizational structure
- **Sequence Flow:** Solid arrow
- **Message Flow:** Dashed arrow

**When to Use BPMN vs. UML:**
- BPMN: Business process modeling, stakeholder communication
- UML: Software design, technical modeling

---

## 2.3 Model Quality Attributes

### Correctness

**Definition:** The model accurately represents the intended behavior of the SUT.

**How to Check:**
- Review by domain experts
- Compare against requirements
- Validate with stakeholders
- Check for logical inconsistencies (e.g., unreachable states)

### Representativeness

**Definition:** The model covers the test-relevant aspects of the SUT at an appropriate level of detail.

**Key Question:** Does the model include the behavior we need to test, and exclude irrelevant implementation details?

**Example:**
- Good: Model shows "Login" as a transition (test-relevant)
- Bad: Model shows "Hash password using bcrypt with salt rounds=12" (implementation detail, not test-relevant)

### Interpretability

**Definition:** The model can be understood by stakeholders (testers, developers, business analysts).

**Factors:**
- Use of familiar notation
- Clear naming conventions
- Appropriate level of abstraction
- Good documentation

### Maintainability

**Definition:** The model can be updated when requirements or the SUT change.

**Factors:**
- Modular structure
- Clear separation of concerns
- Reusable components
- Version control

---

## 2.4 Control Flow vs. Data Flow

### Control Flow Model

**Focus:** The order of operations and decisions.

**Example:**
```
Login Form → Validate Input → [Valid?] → Yes → Check Database → [Found?] → Yes → Dashboard
                                      → No → Error Message → Login Form
                                      → No → Error Message → Login Form
```

**Tests Generated:** Paths through the control structure.

### Data Flow Model

**Focus:** How data moves through the system and is transformed.

**Example:**
```
User Input → Sanitization → Validation → Business Logic → Database
                                              ↓
                                       Response Generation
```

**Tests Generated:** Data flow coverage (def-use pairs, variable lifecycles).

### Combined Models

Many practical models combine both:
- State machines with data conditions (guard conditions)
- Activity diagrams with data objects
- Process models with data transformations

---

## 2.5 Abstraction and Test-Relevant Aspects

### Abstraction Levels

**High Abstraction:**
- Fewer details
- Focus on major states/transitions
- Good for: Early testing, communication with stakeholders
- Example: "User authenticates" (not how)

**Low Abstraction:**
- More details
- Includes specific data values, error conditions
- Good for: Detailed test generation, complex business rules
- Example: "User enters username (3-20 chars) and password (8+ chars with special char)"

**Choosing the Right Level:**
- Test objective determines abstraction
- High-level objectives → high abstraction
- Detailed behavior testing → lower abstraction
- Multiple models at different abstraction levels may be needed

### Test-Relevant Aspects

**What to Include:**
- Behavior that needs testing
- States/transitions that affect test coverage
- Business rules and conditions
- Error handling paths

**What to Exclude:**
- Implementation details (how, not what)
- Internal algorithms
- Technical infrastructure
- UI layout details (unless testing UI states)

---

## Worked Examples

### Worked Example 1: Choosing a Model Type

**Scenario:** Test a vending machine that accepts coins, validates selection, dispenses items, and gives change.

**Model Choice:** State Transition Model

**Why:**
- Clear states: Idle, Accepting Coins, Selecting, Dispensing, Returning Change
- State-dependent behavior (cannot select without coins)
- Well-defined transitions triggered by events

**Alternative:** Decision Table for pricing/change rules.

### Worked Example 2: Decision Table Construction

**Scenario:** A car rental system determines rental eligibility based on age, license validity, and insurance.

**Conditions:**
1. Age >= 25?
2. Valid license?
3. Insurance purchased?

**Decision Table:**

| Conditions | R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 |
|-----------|----|----|----|----|----|----|----|----|
| Age >= 25? | Y | Y | Y | Y | N | N | N | N |
| Valid License? | Y | Y | N | N | Y | Y | N | N |
| Insurance? | Y | N | Y | N | Y | N | Y | N |
| **Actions** | | | | | | | | |
| Approve Rental | X | X | | | | | | |
| Require Deposit | | X | | | | | | |
| Deny Rental | | | X | X | X | X | X | X |
| Offer Insurance | | X | | | | X | | |

**Reduced Table (after removing impossible/duplicate rules):**

| Conditions | Valid | Invalid |
|-----------|-------|---------|
| Age >= 25? | Y | N |
| Valid License? | Y | N |
| **Actions** | | |
| Approve/Require Deposit | X | |
| Deny | | X |

### Worked Example 3: Model Quality Review

**Scenario:** Review a state machine for an online booking system.

**Original Model Issues:**
1. **Unreachable state:** "Payment Retry" has no incoming transitions
2. **Missing transition:** No path from "Booking Confirmed" back to "Search" for new booking
3. **Too detailed:** Includes "Database transaction commit" as an action (implementation detail)
4. **Ambiguous naming:** State called "Done" (what is done?)

**Improved Model:**
1. Remove or connect unreachable states
2. Add "Start New Search" transition from confirmed state
3. Replace "Database transaction commit" with "Confirm Booking"
4. Rename "Done" to "Booking Complete"
