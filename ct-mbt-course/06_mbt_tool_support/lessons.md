# Chapter 6 — MBT Tool Support: Lessons

---

## 6.1 Categories of MBT Tools

### Modeling Tools

**Purpose:** Create, edit, and validate models.

**Features:**
- Graphical model editors
- Model validation (syntax, consistency)
- Import/export of models (XMI, XML, proprietary formats)
- Collaboration features

**Examples:**
- **Enterprise Architect:** Full-featured UML/BPMN modeling
- **Papyrus:** Open-source UML modeling (Eclipse)
- **Visual Paradigm:** UML, BPMN, ArchiMate support
- **MagicDraw:** SysML, UML modeling
- **Microsoft Visio:** Basic diagramming

**Selection Considerations:**
- Supported notations (UML, BPMN, custom)
- Validation capabilities
- Integration with generation tools
- Export formats

### Test Generation Tools

**Purpose:** Generate test cases from models based on selection criteria.

**Features:**
- Coverage criteria configuration
- Abstract test generation
- Test optimization (minimize test count while maintaining coverage)
- Traceability from tests to model elements

**Examples:**
- **Conformiq:** Model-based test design and generation
- **GraphWalker:** Open-source model-based testing (state machines)
- **Spec Explorer:** Microsoft research tool (now archived)
- **Tcases:** Test case generator for API parameters
- **MBT Suite:** Commercial MBT platform

**Types of Generation:**
- **On-the-fly (online):** Generate and execute during traversal
- **Batch (offline):** Generate all tests before execution
- **On-demand:** Generate tests for specific coverage goals

### Test Execution Tools

**Purpose:** Execute concrete test cases against the SUT.

**Categories:**
- **UI automation:** Selenium, Playwright, Cypress
- **API testing:** REST Assured, Postman, Karate
- **Unit testing:** JUnit, pytest, NUnit
- **Specialized:** Robot Framework (keyword-driven), TestComplete

**Integration with MBT:**
- MBT generation tool outputs tests in format executable by execution tool
- Execution results feed back into MBT coverage metrics

### Model Verification Tools

**Purpose:** Check models for correctness before test generation.

**Checks:**
- Syntax correctness (valid UML/BPMN)
- Reachability (all states reachable)
- Deadlock detection (no states with no exit)
- Consistency (guard conditions do not contradict)

---

## 6.2 Tool Selection Criteria

### Fit for Purpose

**Does the tool support your model types?**
- State machines → need state machine support
- Decision tables → need decision table support
- Mixed models → need multi-notation support

**Does it support your test objectives?**
- Functional testing → standard generation
- Performance testing → may need timing/sequence extensions
- Security testing → may need attack path generation

### Integration Capabilities

**With Modeling Tools:**
- Can the generation tool import models from your modeling tool?
- Supported formats: XMI, XML, CSV, proprietary

**With Execution Tools:**
- Can generated tests be exported to your test automation framework?
- Formats: JUnit XML, CSV, Python scripts, Java code

**With CI/CD:**
- Command-line execution for pipeline integration
- Exit codes for pass/fail
- Report formats (JUnit XML, HTML)

**With Test Management:**
- Can tests be imported into test management tools?
- Traceability to requirements

### Vendor and Support

**Commercial Tools:**
- License cost and model (perpetual, subscription, floating)
- Support quality (response time, expertise)
- Update frequency and roadmap
- Vendor stability

**Open Source Tools:**
- Community size and activity
- Documentation quality
- Maintenance status (last update?)
- Commercial support options

### Ease of Use

**Learning Curve:**
- Time to first generated test
- Complexity of notation
- Tool UI intuitiveness

**Maintenance:**
- How easy to update models?
- How easy to update concretization?
- Version control integration

### Total Cost of Ownership

**Initial Costs:**
- License or acquisition cost
- Training cost
- Setup and configuration cost

**Ongoing Costs:**
- Annual license/maintenance
- Support contract
- Upgrade costs

**Hidden Costs:**
- Integration development
- Custom scripting
- Migration from current tools

---

## 6.3 Integration with CI/CD

### Pipeline Integration Points

**1. Model Change Triggers Test Generation:**
```
Developer commits model change → CI pipeline detects change → Regenerates tests → Executes tests → Reports results
```

**2. Scheduled Test Generation:**
```
Nightly job: Checkout latest model → Generate tests → Run against staging → Publish coverage report
```

**3. SUT Change Triggers Model Verification:**
```
SUT code change → CI checks if model needs update → If model outdated, flag for review
```

### Pipeline Configuration

**Typical MBT CI/CD Stage:**
```yaml
# Example CI/CD configuration
stages:
  - model-verify
  - test-generate
  - test-execute
  - report

model_verify:
  script:
    - mbt-tool --verify-model src/models/checkout.mdl

test_generate:
  script:
    - mbt-tool --generate --model src/models/checkout.mdl --criteria transition-coverage --output tests/

test_execute:
  script:
    - pytest tests/
```

### Reporting in CI/CD

**Metrics to Track:**
- Model coverage achieved
- Number of tests generated
- Test pass/fail rate
- Test execution time
- Defects found

**Dashboard Integration:**
- Publish coverage trends over time
- Alert when model coverage drops
- Track test generation vs. execution time

---

## 6.4 Model Versioning

### Why Version Models?

**Models Change Just Like Code:**
- Requirements evolve
- Bugs are found in models
- Refactoring for better abstraction
- New features require model extensions

**Version Control Benefits:**
- Track who changed what and when
- Roll back to previous model versions
- Branch models for feature development
- Compare model versions

### Version Control Practices

**Store Models Alongside Code:**
```
repo/
|-- src/                    (source code)
|-- models/                 (test models)
|   |-- checkout.mdl
|   |-- login.mdl
|-- tests/                  (generated tests)
|-- .gitignore              (exclude generated tests, keep models)
```

**Versioning Strategies:**
- **Same branch:** Model versions align with code versions
- **Separate branches:** Model development in parallel with code
- **Tagged releases:** Tag model versions that correspond to releases

### Model vs. Generated Test Versioning

**Version the Model:**
- Model is the source of truth
- Generated tests are artifacts
- If tests fail due to model update, fix the model

**Do Not Version Generated Tests:**
- Generated tests are reproducible from the model
- Versioning them creates redundancy
- Exception: If tests are manually edited after generation

---

## 6.5 Scripting vs. Code Generation

### Scripting Approach

**Description:** MBT tool generates test scripts in a scripting language that controls test execution.

**Characteristics:**
- Scripts are interpreted at runtime
- Flexible, easy to modify
- May be slower than compiled code
- Good for rapid prototyping

**Example:**
```python
# Generated Python script
def test_login_valid():
    navigate_to("/login")
    enter_text("#username", "testuser")
    enter_text("#password", "validpass")
    click("#login-btn")
    assert_url("/dashboard")
```

### Code Generation Approach

**Description:** MBT tool generates source code in a programming language that is compiled or executed directly.

**Characteristics:**
- Generated code is compiled or run directly
- Type-safe, faster execution
- Harder to modify manually
- Better for large-scale, stable projects

**Example:**
```java
// Generated Java test
@Test
public void testLoginValid() {
    LoginPage login = new LoginPage(driver);
    login.enterUsername("testuser");
    login.enterPassword("validpass");
    login.clickLogin();
    assertEquals("/dashboard", driver.getCurrentUrl());
}
```

### Comparison

| Aspect | Scripting | Code Generation |
|--------|-----------|-----------------|
| Flexibility | High | Lower |
| Performance | Lower | Higher |
| Type safety | No | Yes |
| Maintainability | Manual edits easy | Manual edits harder |
| Integration | Script runners | Build systems |
| Best for | Rapid iteration, exploration | Stable, large projects |

### Hybrid Approaches

Many tools support both:
- Generate code for stable, high-volume tests
- Generate scripts for exploratory or rapidly changing areas
- Generate data files that drive parameterized tests

---

## Worked Examples

### Worked Example 1: Tool Selection

**Scenario:** A team uses UML state machines and needs to generate tests for a Selenium-based UI automation framework.

**Requirements:**
1. Import UML state machines
2. Generate offline tests
3. Export to Java/JUnit for Selenium
4. CI/CD integration
5. Budget: $10,000/year

**Evaluation:**

| Tool | UML Import | Java Export | CI/CD | Cost | Fit |
|------|-----------|-------------|-------|------|-----|
| Tool A | Yes | Yes | Yes | $25K/year | No (over budget) |
| Tool B | Partial | Python only | Yes | $5K/year | No (wrong language) |
| Tool C | Yes | Yes (JUnit) | Yes | $8K/year | Yes |
| Tool D (OSS) | No (custom format) | Yes | Limited | Free | No (no UML import) |

**Selection:** Tool C

### Worked Example 2: CI/CD Integration

**Scenario:** Integrate MBT into an existing Jenkins pipeline.

**Current Pipeline:**
```
Build → Unit Tests → Integration Tests → Deploy to Staging → E2E Tests → Deploy to Production
```

**MBT Integration Points:**

1. **After Build:** Verify models are syntactically correct
   ```
   Build → Model Verify → Unit Tests → ...
   ```

2. **After Integration Tests:** Generate and run MBT tests
   ```
   ... → Integration Tests → MBT Generate → MBT Execute → E2E Tests → ...
   ```

3. **Nightly:** Full model coverage run
   ```
   Nightly: Checkout → Model Verify → MBT Generate (full coverage) → Execute → Report
   ```

**Pipeline Script:**
```groovy
stage('MBT') {
    steps {
        sh 'mbt-tool verify --model models/'
        sh 'mbt-tool generate --model models/checkout.uml --criteria transition --output tests/mbt/'
        sh 'mvn test -Dtest=MBTGeneratedTests'
    }
    post {
        always {
            publishCoverage adapters: [mbtCoverageAdapter('tests/mbt/coverage.xml')]
        }
    }
}
```

### Worked Example 3: Model Versioning Strategy

**Scenario:** A team has 5 models that change with each release.

**Strategy:**

**Git Repository Structure:**
```
mbt-models/
|-- main/
|   |-- v1.0/              (tag: release-1.0)
|   |   |-- checkout.mdl
|   |   |-- login.mdl
|   |-- v2.0/              (tag: release-2.0)
|   |   |-- checkout.mdl   (updated with new payment method)
|   |   |-- login.mdl      (updated with 2FA)
|   |   |-- profile.mdl    (new model)
```

**Workflow:**
1. Feature branch: Update `checkout.mdl` for new payment method
2. Generate tests from updated model
3. Run tests against feature branch
4. Merge to main when tests pass
5. Tag model version with release

**Benefit:** Can regenerate tests for any previous release by checking out the corresponding model tag.
