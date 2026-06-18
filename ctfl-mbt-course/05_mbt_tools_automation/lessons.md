# 📘 Chapter 5 — MBT Tools and Automation: Lessons

---

## 🛠️ 5.1 MBT Tool Categories

### 📐 1. Model Editors

**Purpose:** Create, edit, and visualize models.

**Features:**
- Drag-and-drop state machine creation
- Decision table editors
- Model validation (syntax checking)
- Model review and collaboration

**Examples:**
- **Enterprise tools:** IBM Rational Rhapsody, Sparx Enterprise Architect
- **Specialized MBT tools:** GraphWalker, TestCast, Conformiq
- **Open source:** PlantUML, Graphviz

### 🔷 2. Test Generators

**Purpose:** Automatically generate test cases from models based on selection criteria.

**Features:**
- Apply coverage criteria (state, transition, transition pair)
- Generate abstract test cases
- Support for different model types (state machines, decision tables)
- Test case optimization (minimize suite size while maintaining coverage)

**Examples:**
- **GraphWalker:** Open-source test generation from graph models
- **Conformiq:** Commercial MBT tool with test generation
- **TestCast:** Model-based test generation

### 🔷 3. Test Execution Frameworks

**Purpose:** Execute generated tests and record results.

**Features:**
- Concretize abstract tests (add specific values)
- Execute against the SUT
- Record pass/fail status
- Capture screenshots, logs, and other evidence

**Examples:**
- Integration with existing test frameworks (JUnit, TestNG, pytest)
- Custom execution engines provided by MBT tools
- CI/CD pipeline integration (Jenkins, GitLab CI)

### 📊 4. Coverage Analyzers

**Purpose:** Measure and report coverage achieved by generated tests.

**Features:**
- State coverage reporting
- Transition coverage reporting
- Transition pair coverage reporting
- Coverage trend analysis
- Gap identification (uncovered elements)

### 🛠️ 5. Traceability Tools

**Purpose:** Link requirements to model elements to generated tests.

**Features:**
- Requirement-to-model mapping
- Model-to-test mapping
- Impact analysis (which tests are affected by requirement changes)
- Audit trail for compliance

---

## ✅ 5.2 Tool Selection Criteria

### 🔷 Key Selection Factors

**1. Model Notation Support**
- Does the tool support the model types you need? (state machines, decision tables, process models)
- Can you import models from other tools or standards? (UML, XMI)
- Does the notation match your team's skills?

**2. Coverage Criteria Support**
- Does the tool support the coverage criteria you need? (0-switch, 1-switch, 2-switch)
- Can you define custom coverage criteria?
- Does it optimize test suite size for the desired coverage?

**3. Integration Capabilities**
- Does it integrate with your CI/CD pipeline?
- Does it work with your test management tool?
- Does it integrate with your defect tracking system?

**4. Scalability**
- Can it handle the size and complexity of your models?
- How many states/transitions can it process?
- How long does test generation take for large models?

**5. Usability**
- Is the tool easy to learn and use?
- Does it have good documentation and support?
- Is the user interface intuitive?

**6. Cost**
- License costs (perpetual, subscription, per-user)
- Maintenance and support costs
- Training costs
- Infrastructure requirements

### 🔷 Selection Process

1. **Identify Requirements:** What model types, coverage criteria, and integrations do you need?
2. **Shortlist Tools:** Research 3-5 tools that meet basic requirements
3. **Proof of Concept:** Create a small model and generate tests in each tool
4. **Evaluate:** Compare against selection criteria
5. **Pilot:** Implement on a small project with one team
6. **Rollout:** Expand to additional teams if successful

---

## 🗂️ 5.3 Integration with CI/CD and Test Management

### 🔗 CI/CD Integration

**Benefits:**
- Automatically generate tests when models change
- Run generated tests on every build
- Track coverage trends over time
- Fast feedback on model or system changes

**Integration Points:**
- Trigger test generation on model commit
- Execute generated tests in CI pipeline
- Publish coverage reports as build artifacts
- Fail builds if coverage drops below threshold

### 🗂️ Test Management Integration

**Benefits:**
- Store generated tests in test management tool
- Track test execution history
- Link tests to requirements
- Report test results alongside manually created tests

---

## 🛠️ 5.4 Tool Limitations

**1. Learning Curve:**
- MBT tools require training in both the tool and modeling concepts
- Team members may resist learning new tools and approaches

**2. Model Maintenance:**
- Tools help with generation but models still need manual maintenance
- Model changes must be managed alongside code changes

**3. Notation Constraints:**
- Tools may support only specific notations
- Complex behavior may be difficult to model in the tool's notation

**4. Integration Challenges:**
- Integrating with legacy test infrastructure can be difficult
- Custom integrations may require development effort

**5. Cost:**
- Commercial MBT tools can be expensive
- Open-source tools may lack support or features

### 🔷 When Manual MBT May Be Preferable

- Small projects where tool setup is not cost-effective
- Teams with strong modeling skills but limited tool budget
- Systems where behavior is simple enough to model manually
- Pilot projects evaluating MBT before tool investment

---

## 💡 Worked Example: Tool Selection

**Scenario:** A team of 8 testers wants to adopt MBT for testing a state-dependent payment processing system.

**Requirements:**
- State machine modeling
- Transition and transition pair coverage
- Integration with Jenkins CI
- Integration with Jira for requirements traceability
- Budget: $10,000/year

**Evaluation:**

| Tool | State Machine | Coverage | Jenkins | Jira | Cost | Recommendation |
|------|--------------|----------|---------|------|------|---------------|
| GraphWalker (open source) | Yes | Yes | Plugin | API | Free | Good for pilot, limited support |
| Conformiq | Yes | Yes | Yes | Yes | $15K/year | Exceeds budget |
| TestCast | Yes | Yes | Yes | Plugin | $8K/year | Fits budget, good features |
| PlantUML + custom scripts | Yes | Manual | No | No | Free | Too manual, poor integration |

**Recommendation:** TestCast — fits budget, meets requirements, good integration.

**Pilot Plan:**
1. 30-day trial of TestCast
2. Model the payment processing login flow
3. Generate tests for transition coverage
4. Integrate with Jenkins
5. Evaluate results after 2 weeks
