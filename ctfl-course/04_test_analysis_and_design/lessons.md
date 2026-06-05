# Chapter 4 — Test Analysis and Design: Lessons

---

## 4.1 Test Techniques Overview (FL-4.1.1, K2)

Test techniques are systematic methods for deriving test cases. They are grouped into three categories:

### Black-Box Test Techniques (Specification-Based)

- Derive test cases from the **external specification** of the component or system
- No knowledge of internal code structure is needed
- Focus on the INPUTS and OUTPUTS — what the system should do
- Common techniques: Equivalence Partitioning, Boundary Value Analysis, Decision Table Testing, State Transition Testing
- Applicable at all test levels but especially dominant at system and acceptance testing

### White-Box Test Techniques (Structure-Based)

- Derive test cases from the **internal structure** (source code, architecture, data flows)
- Require knowledge of how the code is implemented
- Focus on exercising code paths — measuring coverage
- Common techniques: Statement Testing, Branch Testing (also path testing, condition testing at higher levels)
- Most commonly applied at component and component integration testing
- Can also be applied at system level (e.g., testing architectural data flows)

### Experience-Based Test Techniques

- Derive test cases from the **tester's knowledge, experience, and intuition**
- Rely on the tester's understanding of common error patterns, the system, and the domain
- Less systematic than black-box or white-box, but can find defects the other categories miss
- Common techniques: Error Guessing, Exploratory Testing, Checklist-Based Testing
- Complement (do not replace) systematic techniques

### When to Use Which Category

| Situation | Best Category |
|-----------|---------------|
| Well-defined specification, no access to code | Black-box |
| Access to code, need to measure code coverage | White-box |
| Experienced tester, time-boxed exploration, no detailed spec | Experience-based |
| Comprehensive testing | Combine all three |

---

## 4.2 Black-Box Test Techniques

### Equivalence Partitioning (EP) (FL-4.2.1, K3)

**Concept:** Divide the input domain into groups (partitions) where all values within a partition are expected to be handled identically by the system. If the system handles one value in a partition correctly, it should handle all values in that partition correctly. This reduces the number of test cases needed.

**Rules for identifying partitions:**
1. Identify each input (or output) and its valid ranges/constraints
2. Create **valid partitions** — groups of inputs the system should accept and process correctly
3. Create **invalid partitions** — groups of inputs the system should reject or handle as errors
4. Each value belongs to exactly ONE partition (partitions do not overlap)
5. Partitions must collectively cover the entire domain (no gaps)

**Minimum coverage:** Select at least ONE representative value from EACH partition. The minimum number of test cases for full EP coverage equals the number of partitions if valid values can be combined (but invalid values must typically be tested one at a time to isolate the error).

**Example:** An age field accepts values 18-65.
- Valid partition: 18 to 65 (any value in this range, e.g., 30)
- Invalid partition 1: below 18 (e.g., 15)
- Invalid partition 2: above 65 (e.g., 70)
- Invalid partition 3: non-numeric input (e.g., "abc")

Minimum test cases for coverage: 4 (one from each partition).

**Key points for the exam:**
- Always identify BOTH valid and invalid partitions
- The exam often asks for the MINIMUM number of test cases — count the partitions
- Partitions apply to outputs as well as inputs
- Multiple inputs can be combined: valid partitions can be tested together, but each invalid partition should be tested separately (one invalid at a time)

### Boundary Value Analysis (BVA) (FL-4.2.2, K3)

**Concept:** Defects tend to cluster at the boundaries of equivalence partitions. BVA focuses testing effort on these boundary values. It is always used as an extension of EP — you first identify partitions, then test at their boundaries.

**CTFL v4.0 uses two-value BVA (unless stated otherwise):**
- For each boundary, test the **boundary value itself** and the value **just across the boundary** (the closest value in the adjacent partition)

**For a range [min, max]:**
- Lower boundary: test min (valid) and min-1 (invalid)
- Upper boundary: test max (valid) and max+1 (invalid)

**Three-value BVA** (mentioned but not the default in v4.0):
- Tests the boundary value, the value just below, and the value just above: min-1, min, min+1, max-1, max, max+1

**Example:** Input field accepts integer values 1 to 100.
- Boundaries: 1 and 100
- Two-value BVA test values: 0 (invalid, just below lower), 1 (valid, lower boundary), 100 (valid, upper boundary), 101 (invalid, just above upper)
- Total: 4 test values

**Key points for the exam:**
- BVA builds on EP — you must identify partitions first
- Count BOUNDARY VALUES, not partitions
- Two-value BVA: 2 values per boundary (the boundary + neighbor outside)
- For a single range [min, max], two-value BVA produces 4 test values: min-1, min, max, max+1
- Boundaries exist between EVERY pair of adjacent partitions

### Decision Table Testing (FL-4.2.3, K3)

**Concept:** A decision table captures complex business rules that involve combinations of conditions. It systematically identifies all possible combinations of conditions and their corresponding actions (outcomes).

**Structure:**

| | Rule 1 | Rule 2 | Rule 3 | ... |
|---|--------|--------|--------|-----|
| Condition 1 | T | T | F | ... |
| Condition 2 | T | F | T | ... |
| Action 1 | X | | X | ... |
| Action 2 | | X | | ... |

- **Conditions:** The inputs or states that affect the outcome (True/False or Yes/No)
- **Actions:** The resulting behaviors or outputs
- **Rules:** Each column represents one unique combination of conditions and its actions
- **Maximum rules:** 2^n (where n = number of conditions)

**Collapsing (simplification):**
- If a condition does not affect the outcome for certain rules, mark it as "-" (don't care)
- Rules that differ only by a "don't care" condition can be collapsed into one rule
- This reduces the number of test cases needed

**Minimum test cases:** One test case per rule in the (collapsed or full) decision table.

**Key points for the exam:**
- The exam may give you conditions and ask you to determine the number of rules (2^n before collapsing)
- Or give you a completed table and ask how many test cases are needed (one per rule)
- Know how to identify "don't care" conditions and collapse rules
- Decision tables are ideal when business logic has multiple interacting conditions

### State Transition Testing (FL-4.2.4, K3)

**Concept:** Systems that behave differently depending on their current state and the events that occur can be modeled using a state transition diagram. Tests are derived from valid and invalid transitions between states.

**Key elements:**
- **States:** Distinct conditions the system can be in (e.g., Locked, Unlocked, Blocked)
- **Transitions:** Changes from one state to another, triggered by events
- **Events:** Inputs or occurrences that trigger transitions (e.g., "enter correct PIN")
- **Actions:** Outputs or behaviors that occur during a transition (e.g., "display welcome message")
- **Guards:** Conditions that must be true for a transition to occur

**State transition diagram** shows states as circles/boxes and transitions as arrows labeled with event/action.

**State transition table** lists every state-event combination and shows the resulting state and action. It also reveals INVALID transitions (event occurs in a state where it is not expected).

**Coverage levels:**
- **0-switch coverage (all transitions):** Every valid transition is exercised at least once. This is the standard coverage required at CTFL level.
- **1-switch coverage:** Every valid pair of consecutive transitions is exercised at least once. This is more thorough but requires more test cases.

**Testing invalid transitions:** In addition to testing valid paths, testers should verify that the system correctly handles events that should NOT cause a transition in the current state (negative testing).

**Key points for the exam:**
- The exam may ask you to count the minimum number of test cases for 0-switch coverage = number of valid transitions
- Or ask you to trace a test path through a state diagram
- Know the difference between the diagram (visual) and the table (comprehensive, shows invalid transitions)

---

## 4.3 White-Box Test Techniques

### Statement Testing and Statement Coverage (FL-4.3.1, K3)

**Statement coverage** measures the percentage of executable statements in the code that have been exercised by the test suite:

```
Statement coverage = (Number of statements exercised / Total number of executable statements) x 100%
```

**Goal:** Design test cases that execute as many statements as possible.

**What counts as a statement:** Any executable line of code — assignments, function calls, return statements, conditional expressions. Declarations and comments are NOT executable statements.

**Example:**
```
1: read(x)
2: if (x > 0)
3:     result = x * 2
4: print(result)
```

- Test case: x = 5 executes lines 1, 2, 3, 4 = all 4 statements = 100% statement coverage
- Test case: x = -1 executes lines 1, 2, 4 (line 3 is skipped) = 3/4 = 75% statement coverage

**Limitation of statement coverage:**
- 100% statement coverage does NOT mean all decision outcomes are tested
- If a decision has only been tested as TRUE, the FALSE branch may contain an unexecuted path
- Statement coverage does not guarantee branch coverage

### Branch Testing and Branch Coverage (FL-4.3.2, K3)

**Branch coverage** measures the percentage of branches (decision outcomes) that have been exercised:

```
Branch coverage = (Number of branches exercised / Total number of branches) x 100%
```

A **branch** is one outcome of a decision point. An `if` statement has 2 branches (true and false). A `switch` with 3 cases has 3 branches.

**Key relationship:** 100% branch coverage guarantees 100% statement coverage (but NOT vice versa).

**Example:**
```
1: read(x)
2: if (x > 0)
3:     result = x * 2
4: else
5:     result = 0
6: print(result)
```

Branches:
- Branch 1: x > 0 is TRUE (goes to line 3)
- Branch 2: x > 0 is FALSE (goes to line 5)

- Test case 1: x = 5 -> exercises Branch 1 (TRUE)
- Test case 2: x = -1 -> exercises Branch 2 (FALSE)
- Together: 2/2 branches = 100% branch coverage (and also 100% statement coverage)

**Counting branches:**
- Each `if` without an `else`: 2 branches (true path, and the implicit false path that skips the if-body)
- Each `if-else`: 2 branches
- Each `if-elif-else` chain: count the number of possible outcomes
- Loops (`while`, `for`): 2 branches (entering the loop body, and not entering/exiting)

### The Value of White-Box Testing (FL-4.3.3, K2)

- **Objectivity:** Coverage metrics provide an objective measure of how thoroughly the code has been tested
- **Finds hidden defects:** Tests code paths that may not be explicitly specified in requirements (e.g., error handling, default cases)
- **Identifies dead code:** Unreachable statements are revealed when coverage cannot reach 100%
- **Complements black-box testing:** Black-box tests from requirements + white-box tests for coverage together provide more comprehensive testing than either alone
- **Mandated by standards:** Some safety-critical industries (aviation, automotive, medical) require specific coverage levels (e.g., MC/DC coverage)

---

## 4.4 Experience-Based Test Techniques

### Error Guessing (FL-4.4.1, K2)

**Concept:** The tester uses their knowledge of:
- Common programming errors (off-by-one, null pointer, division by zero)
- Past defects in similar systems
- Known failure modes for the technology in use
- Common user mistakes

...to predict where defects are likely to occur and design tests targeting those areas.

**How it works:**
1. Create a list of possible errors, defects, or failures (sometimes called a "fault attack" list)
2. Design test cases specifically to expose each anticipated error
3. Execute the tests

**Examples of common error-guessing targets:**
- Division by zero
- Empty input / null values
- Strings that are too long or contain special characters
- Date boundaries (Feb 29, Dec 31, year 2000/2038)
- Maximum/minimum integer values
- Concurrent access issues
- Network timeout scenarios

**Strengths:** Can find defects that systematic techniques miss, especially in error-handling and edge-case logic.

**Weaknesses:** Effectiveness depends entirely on the tester's experience and intuition. Hard to measure coverage. Not repeatable by less-experienced testers.

### Exploratory Testing (FL-4.4.2, K2)

**Concept:** Test design, test execution, and learning happen simultaneously. The tester explores the system dynamically, using observations from previous tests to guide the next tests in real time.

**Structure (not unstructured):**
- Uses **test charters** to provide focus and scope (e.g., "Explore the checkout process with various payment methods looking for error-handling weaknesses")
- Often **time-boxed** in sessions (e.g., 60-90 minute sessions)
- Results are documented after each session (session notes, defects found, areas covered, risks identified)

**When to use:**
- When specifications are minimal, poor, or outdated
- When learning a new system and building test understanding
- As a complement to scripted testing (to find defects the scripts miss)
- When rapid feedback is needed
- When the tester's experience can be leveraged effectively

**Key ISTQB points:**
- Exploratory testing IS structured (through charters and time-boxes) — it is NOT random or ad hoc
- It complements (does not replace) systematic techniques
- The tester continuously adapts their approach based on what they learn during the session
- It is most effective when performed by experienced testers

### Checklist-Based Testing (FL-4.4.3, K2)

**Concept:** The tester designs, implements, and executes tests based on a pre-existing checklist of test conditions or verification points.

**Characteristics:**
- Checklists are built from experience, standards, known quality risks, or past defects
- They provide high-level guidance but not detailed step-by-step test procedures
- The tester uses judgment to determine HOW to test each checklist item
- Coverage can be measured by the percentage of checklist items verified

**Examples of checklist items:**
- All required fields are validated for presence
- Error messages are clear and actionable
- Navigation works on all supported browsers
- Session timeout behaves correctly
- Password requirements are enforced

**Strengths:** Provides consistent coverage across runs; useful for regression and repetitive tasks; easy to maintain and update.

**Weaknesses:** Can become stale (pesticide paradox); may miss defects not anticipated by the checklist; depends on the quality and completeness of the checklist itself.

---

## 4.5 Collaboration-Based Test Approaches

### Collaborative User Story Writing (FL-4.5.1, K2)

User stories are a lightweight way of capturing requirements in Agile projects. They are most effective when written **collaboratively** using the "Three Amigos" (or "Three Cs") approach:

**The Three Amigos:**
1. **Business representative** (product owner) — defines what is needed and why
2. **Developer** — considers how to implement it and what is feasible
3. **Tester** — considers how to test it, identifies edge cases, asks clarifying questions

**User story format:**
```
As a [role],
I want [goal/desire],
So that [benefit/value].
```

**The Three Cs of user stories:**
- **Card:** The story is written on a card (brief, a placeholder for conversation)
- **Conversation:** The real details emerge through discussion between the three amigos
- **Confirmation:** Acceptance criteria define when the story is done (testable conditions)

**Tester's contribution to story writing:**
- Asks "what if" questions that reveal missing requirements
- Identifies boundary conditions and negative scenarios
- Ensures acceptance criteria are testable and unambiguous
- Brings a quality mindset to the conversation

### Acceptance Criteria (FL-4.5.2, K2)

Acceptance criteria define the conditions that a user story must satisfy for it to be considered complete. They serve as the basis for acceptance testing.

**Two common formats:**

**1. Rule-oriented (checklist/bullet format):**
```
- The user must be logged in to add items to the cart
- The cart total must update immediately when quantity changes
- A maximum of 99 units of any single item can be added
- Out-of-stock items display an appropriate message and cannot be added
```

**2. Scenario-oriented (Given/When/Then — Gherkin format):**
```
Given the user is logged in and viewing a product page
When the user clicks "Add to Cart"
Then the item appears in the shopping cart
And the cart total updates to reflect the new item
```

**Good acceptance criteria are:**
- Testable (can be verified as met or not met)
- Clear and unambiguous
- Written from the user's perspective
- Independent of implementation details (what, not how)
- Complete (cover positive and negative scenarios, boundaries)

### Acceptance Test-Driven Development (ATDD) (FL-4.5.3, K3)

**Concept:** Acceptance tests are written BEFORE development starts, based on the acceptance criteria. These tests drive the development process and serve as executable specifications.

**ATDD Process:**
1. **Specification workshop (Three Amigos session):** Business, developers, and testers discuss the user story and define acceptance criteria together
2. **Write acceptance tests:** Tests are written in a format understandable to all three groups (often Given/When/Then). These tests capture the shared understanding.
3. **Develop the feature:** Developers implement the feature to make the acceptance tests pass
4. **Run acceptance tests:** Tests are executed (often automated) to confirm the feature meets its criteria
5. **Iterate:** If tests fail, the code is adjusted. If criteria need refinement, the tests are updated.

**Benefits of ATDD:**
- Shared understanding among all three roles BEFORE development begins
- Reduces ambiguity and misunderstanding
- Tests serve as living documentation
- Clear definition of "done" for each story
- Defects in requirements are caught before coding starts (shift-left)

**Deriving test cases from acceptance criteria:**
- Each acceptance criterion typically maps to one or more test cases
- Positive cases verify the "happy path" described in the criterion
- Negative cases verify that violations of the criterion are handled correctly
- Boundary cases verify the limits stated in the criteria

---

## Cross-References

- Black-box techniques (4.2) are used at system and acceptance testing (Chapter 2.2)
- White-box techniques (4.3) are most common at component testing (Chapter 2.2)
- Experience-based techniques (4.4) complement systematic techniques throughout
- ATDD (4.5) connects to test-first approaches (Chapter 2.1.3)
- Decision tables relate to complex business rules found in case studies (Chapter 7)
- State transition connects to system behavior modeling and maintenance testing triggers
- Coverage metrics connect to test monitoring (Chapter 5.3)
