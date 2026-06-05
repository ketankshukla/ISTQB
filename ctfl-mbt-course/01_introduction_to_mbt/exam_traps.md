# Chapter 1 — Introduction to MBT: Exam Traps

## Trap 1: Thinking MBT Replaces All Manual Testing

**Trap:** MBT is a supplement, not a replacement. Usability, performance, and exploratory testing still need manual effort.

**Example question:**
> A team adopts MBT for their project. Which testing activity is LEAST likely to be addressed by MBT?
>
> A. Testing state-dependent behavior of an ATM
> B. Testing all valid transitions in a login workflow
> C. Testing the user experience of a mobile app
> D. Testing combinations of conditions in a business rules engine

**Wrong answer:** A — ATM state-dependent behavior is ideal for MBT.

**Correct answer:** C — User experience/usability is not well-suited to MBT.

---

## Trap 2: Confusing Abstract and Concrete Test Cases

**Trap:** Abstract test cases come from the model. Concrete test cases have specific values and are executable.

**Example question:**
> A test case generated from a state machine specifies "Enter valid PIN" but does not specify which PIN value. This is:
>
> A. A concrete test case
> B. An abstract test case
> C. An executable test script
> D. A selection criterion

**Correct answer:** B — It lacks specific values, so it is abstract.

---

## Trap 3: Thinking MBT Eliminates the Need for Requirements

**Trap:** MBT requires requirements to create the model. The model is derived FROM requirements.

**Example question:**
> Which statement about MBT and requirements is TRUE?
>
> A. MBT eliminates the need for requirements because the model replaces them
> B. Requirements are still needed to create and validate the model
> C. Models are created randomly without any requirements
> D. MBT is only used when no requirements exist

**Correct answer:** B — Requirements are the input for model creation.

---

## Trap 4: Thinking a Bad Model Still Generates Good Tests

**Trap:** The quality of generated tests depends entirely on the quality of the model.

**Example question:**
> A team creates an MBT model that incorrectly omits the "account locked" state of a login system. What is the consequence?
>
> A. Tests will be generated but run slower
> B. Tests will not cover account locking behavior
> C. The model will automatically correct itself
> D. The test generator will add the missing state automatically

**Correct answer:** B — Missing model elements lead to missing tests.

---

## Trap 5: Confusing Model Coverage with Code Coverage

**Trap:** Model coverage measures how much of the model is exercised. Code coverage measures how much of the code is executed. They are different.

**Example question:**
> A generated test suite achieves 100% transition coverage of the MBT model. This means:
>
> A. 100% of the code has been executed
> B. All transitions in the model have been exercised by tests
> C. All defects in the system have been found
> D. The system is ready for release

**Correct answer:** B — Transition coverage refers to the model, not the code.
