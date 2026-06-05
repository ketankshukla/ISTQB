# Chapter 2 — MBT Modeling: Exam Traps

## Trap 1: Confusing Model Types

**Trap:** State machines show states and transitions. Decision tables show condition combinations. Process models show activity flows. Feature models show product features.

**Example question:**
> A team needs to model the different combinations of a car's optional features (sunroof, leather seats, navigation). The BEST model type is:
>
> A. State transition model
> B. Decision table
> C. Feature model
> D. Process model

**Correct answer:** C — Optional features and their relationships = feature model.

---

## Trap 2: Thinking Models Must Include Implementation Details

**Trap:** Test models should abstract from implementation details. They represent test-relevant behavior, not how the code works.

**Example question:**
> A test model for a login system includes the specific SQL query used to validate credentials. This is:
>
> A. Good practice — more detail means better tests
> B. Incorrect — the SQL query is an implementation detail, not test-relevant behavior
> C. Required for database testing
> D. Necessary for security testing

**Correct answer:** B — Implementation details (SQL queries, algorithms) should not be in test models.

---

## Trap 3: Thinking One Model Can Test Everything

**Trap:** Different test objectives may require different models. One model rarely covers all quality characteristics.

**Example question:**
> A team creates a detailed state machine for functional testing. They plan to use the SAME model for performance testing. This is:
>
> A. Appropriate — one model tests all quality characteristics
> B. Potentially problematic — performance testing may require different aspects (timing, load) not captured in the functional model
> C. Required by MBT standards
> D. More efficient than creating separate models

**Correct answer:** B — Different test objectives often require different models or model extensions.

---

## Trap 4: Confusing Control Flow and Data Flow

**Trap:** Control flow = order of operations. Data flow = movement and transformation of data. They are different but complementary.

**Example question:**
> A model focuses on how a variable is initialized, modified, and used throughout a program. This is a:
>
> A. Control flow model
> B. Data flow model
> C. State transition model
> D. Feature model

**Correct answer:** B — Variable initialization, modification, and usage = data flow.

---

## Trap 5: Thinking High Abstraction Is Always Better

**Trap:** Abstraction level depends on test objective. High abstraction for early testing; lower abstraction for detailed behavior.

**Example question:**
> A team needs to test that a password must contain at least one special character. Their model should be:
>
> A. Highly abstract: "User enters valid credentials"
> B. More detailed: "User enters password with/without special character"
> C. At the code level: "Function validatePassword() called with string"
> D. Not modeled — this is too detailed for MBT

**Correct answer:** B — Password validation rules require specific conditions in the model; too abstract misses the rule.
