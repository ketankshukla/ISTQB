# Chapter 1 — Introduction to Model-Based Testing: Lessons

---

## 1.1 What is Model-Based Testing?

### Definition

Model-Based Testing (MBT) is a testing approach where test cases are automatically or systematically generated from models that describe the behavior or structure of the system under test (SUT).

**Key Idea:** Instead of writing tests manually from requirements, you create a formal or semi-formal model of the system's behavior, then use tools or systematic methods to generate tests from that model.

### The MBT Process

```
Requirements → Model → Selection Criteria → Test Generation → Test Execution → Analysis
```

**Step 1: Model Creation**
- Analyze requirements, user stories, or specifications
- Create a model representing system behavior
- Common model types: state machines, decision tables, process models

**Step 2: Selection Criteria**
- Define what parts of the model must be covered
- Examples: all states, all transitions, all transition pairs

**Step 3: Test Generation**
- Generate abstract test cases from the model based on selection criteria
- Abstract test cases may need to be made concrete (specific values added)

**Step 4: Test Execution**
- Execute concrete test cases against the SUT
- Record results (pass/fail)

**Step 5: Analysis**
- Measure coverage achieved
- Analyze failed tests to identify defects
- Update model if requirements change

### Why Use MBT?

**1. Systematic Coverage**
- Manual test design may miss combinations or edge cases
- MBT systematically covers model elements based on criteria
- Reduces human error in test design

**2. Early Defect Detection**
- Creating the model often reveals ambiguities or contradictions in requirements
- Defects are found during modeling, before any code is written
- Model review is a form of static testing

**3. Maintainability**
- When requirements change, update the model and regenerate tests
- Faster than manually updating hundreds of test cases
- Tests stay synchronized with requirements through the model

**4. Traceability**
- Every generated test can be traced back to a model element
- Every model element can be traced back to a requirement
- Supports compliance and audit requirements

**5. Reusability**
- The same model can generate tests for different levels (unit, integration, system)
- Models can be reused across similar features or projects

### When MBT is Appropriate

| Appropriate | Not Appropriate |
|-------------|-----------------|
| Systems with complex state-dependent behavior | Simple systems with few states or transitions |
| Safety-critical or regulated systems | Projects with very tight deadlines and no time for modeling |
| Systems where requirements change frequently | Teams without modeling skills or tools |
| Areas with high defect history | One-time, throwaway prototypes |
| Regression testing of stable features | Systems where behavior is completely random or unpredictable |

### MBT vs. Traditional Test Design

| Aspect | Traditional Testing | Model-Based Testing |
|--------|-------------------|---------------------|
| Test source | Testers write tests from requirements | Tests generated from models |
| Coverage | Depends on tester skill | Systematic, based on criteria |
| Maintenance | Manual updates when requirements change | Regenerate from updated model |
| Traceability | Often manual and incomplete | Automatic via model elements |
| Upfront effort | Lower initial effort | Higher initial effort (model creation) |
| Long-term effort | Higher (manual maintenance) | Lower (regeneration) |

---

## 1.2 Key Terminology

### Model
An abstract representation of the behavior, structure, or functionality of the system under test. Models can be:
- **Formal:** Mathematically precise (e.g., state machines with formal semantics)
- **Semi-formal:** Diagrams with defined notation but informal semantics (e.g., UML state diagrams)
- **Informal:** Sketches or tables without strict notation rules

### Abstract Test Case
A test case derived from a model that describes the sequence of actions and expected results at the model level, but may not yet have specific concrete input values.

### Concrete Test Case
An executable test case with specific input values, preconditions, and expected results that can be run against the SUT.

### Selection Criterion
A rule that defines which elements of a model must be exercised by generated test cases. Examples:
- All states must be visited
- All transitions must be exercised
- All transition pairs must be exercised

### Coverage
The degree to which model elements are exercised by the generated test suite. Common types:
- State coverage
- Transition coverage
- Transition pair coverage
- Path coverage

### Test Oracle
The mechanism that determines the expected result for a generated test case. In MBT, the model itself often serves as the oracle — the expected behavior is derived from the model.

---

## 1.3 Benefits and Limitations of MBT

### Benefits

**1. Improved Test Coverage**
MBT systematically covers model elements according to selection criteria, reducing the risk of missing important test cases.

**2. Early Defect Detection**
The process of creating a model often reveals:
- Missing requirements
- Contradictory requirements
- Ambiguous requirements
- Incomplete specifications

**3. Reduced Test Maintenance**
When requirements change:
- Update the model
- Regenerate tests
- Much faster than manually updating test scripts

**4. Better Communication**
Models provide a visual, unambiguous representation of system behavior that can be reviewed by stakeholders, developers, and testers.

**5. Traceability**
Clear links between:
- Requirements → Model elements → Generated tests → Test results → Defects

### Limitations

**1. Modeling Effort**
Creating a good model requires time and expertise. The upfront investment may not pay off for:
- Very small projects
- Systems with simple behavior
- Projects with extremely tight deadlines

**2. Model Quality Dependency**
- A bad model generates bad tests
- If the model does not match the actual system, generated tests will be invalid
- Model validation is essential

**3. Tool Dependency**
- MBT often requires specialized tools
- Tool learning curve and cost
- Integration with existing test infrastructure

**4. Not Suitable for All Testing**
- MBT is good for state-dependent, behavioral testing
- Less suitable for: usability testing, performance testing, random testing, ad hoc testing

**5. Abstraction Gap**
- Abstract tests from the model need to be made concrete
- Mapping model elements to real system inputs may be complex
- Some model paths may be infeasible in the real system

---

## Worked Example: MBT Decision Process

**Scenario:** A bank is developing a new ATM system. Should they use MBT for testing?

**Analysis:**

| Factor | Assessment | Supports MBT? |
|--------|-----------|---------------|
| Complexity | ATM has many states (idle, card inserted, PIN entered, menu, transaction) | Yes |
| State-dependent behavior | Behavior depends on account state (balance, daily limit) | Yes |
| Safety-critical | Financial transactions must be correct | Yes |
| Stable requirements | Core ATM behavior is well-defined and stable | Yes |
| Team skills | Team has experience with state transition testing | Yes |
| Defect history | Previous ATM releases had state-related defects | Yes |

**Conclusion:** MBT is highly appropriate for the ATM system due to its state-dependent behavior, safety-critical nature, and well-defined requirements.

**Where NOT to use MBT in this project:**
- ATM UI usability testing (better suited to manual/exploratory testing)
- ATM performance under peak load (better suited to performance testing tools)
- ATM accessibility testing (better suited to manual testing with assistive technologies)
