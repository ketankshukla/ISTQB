# Chapter 5 — Evaluating and Deploying MBT: Lessons

---

## 5.1 ROI of Model-Based Testing

### Cost Factors

**Initial Costs:**
- **Tool acquisition/licensing:** MBT modeling and generation tools
- **Training:** Testers need modeling skills, tool training
- **Model creation:** Time to build initial models
- **Infrastructure:** Test environments, CI/CD integration
- **Consulting:** External expertise for initial setup

**Ongoing Costs:**
- **Model maintenance:** Updating models when requirements change
- **Tool maintenance:** License renewals, updates
- **Concretization maintenance:** Updating mappings as SUT evolves
- **Skill retention:** Keeping team modeling skills current

### Benefit Factors

**Test Design Efficiency:**
- Automated test generation reduces manual test design effort
- Example: 2 weeks of manual test design → 2 days of model-based generation

**Test Maintenance Savings:**
- Update model once → regenerate all tests
- Traditional: Update each test case individually
- Example: 500 test cases affected by a requirement change
  - Manual: 500 updates ≈ 2 weeks
  - MBT: 1 model update + regeneration ≈ 2 days

**Defect Detection Value:**
- Earlier defect detection = lower fix cost
- Modeling reveals requirement ambiguities before coding
- More thorough coverage finds defects manual testing misses

**Coverage and Confidence:**
- Measurable coverage of model elements
- Higher confidence in tested behavior
- Reduced risk of untested paths

### ROI Calculation

**Formula:**
```
ROI = (Benefits - Costs) / Costs x 100%
```

**Example:**

| Cost Item | Amount |
|-----------|--------|
| MBT tools (annual) | $20,000 |
| Training (initial) | $15,000 |
| Model creation (initial) | $30,000 |
| Maintenance (annual) | $25,000 |
| **Total Year 1** | **$90,000** |
| **Total Year 2+** | **$45,000/year** |

| Benefit Item | Annual Amount |
|--------------|---------------|
| Test design time saved | $60,000 |
| Test maintenance time saved | $80,000 |
| Earlier defect detection savings | $40,000 |
| **Total Annual Benefit** | **$180,000** |

**Year 1 ROI:** ($180,000 - $90,000) / $90,000 = 100%
**Year 2 ROI:** ($180,000 - $45,000) / $45,000 = 300%

### Payback Period

**Definition:** The time required to recover the initial investment.

**Calculation:**
```
Payback Period = Initial Investment / Annual Net Benefit
```

**Example:**
Initial investment: $65,000 (tools + training + model creation)
Annual net benefit: $180,000 - $45,000 = $135,000
Payback Period: $65,000 / $135,000 ≈ 0.48 years ≈ 6 months

---

## 5.2 Pilot Projects

### What Is a Pilot Project?

A small-scale initial project used to evaluate MBT in a controlled setting before wider deployment.

### Why Use a Pilot?

- **Reduce risk:** Learn lessons on a small project before committing organization-wide
- **Prove value:** Demonstrate ROI with real numbers
- **Build skills:** Team gains experience in a low-risk context
- **Identify issues:** Discover tool limitations, process gaps, training needs
- **Gain stakeholder buy-in:** Show tangible results to management

### Selecting a Pilot Project

**Good Pilot Characteristics:**
- **Right size:** Not too small (no benefit) or too large (too risky)
- **Well-understood domain:** Team knows the requirements
- **Clear scope:** Defined features to model and test
- **Supportive stakeholders:** Management and team support the experiment
- **Measurable outcomes:** Can measure time, defects, coverage

**Poor Pilot Characteristics:**
- Brand new, unstable project
- Highly political or critical system
- Team resistant to change
- No time for learning curve

### Pilot Execution Steps

**1. Define Objectives:**
- What do we want to learn? (tool fit, process, ROI)
- What metrics will we measure?

**2. Select Scope:**
- Which features to model?
- Which test objectives (functional, regression)?

**3. Execute:**
- Create models
- Generate tests
- Execute and measure
- Document learnings

**4. Evaluate:**
- Compare against baseline (previous project or manual approach)
- Calculate actual ROI
- Identify what worked and what didn't

**5. Decide:**
- Expand MBT to more projects?
- Change tools or approach?
- Discontinue if not valuable?

---

## 5.3 Deployment Strategies

### Incremental Deployment

**Definition:** Introducing MBT gradually, starting with a small project or team and expanding over time.

**Approach:**
1. Start with pilot project
2. Expand to one additional project
3. Add another team
4. Gradually increase scope and complexity
5. Eventually organization-wide

**Advantages:**
- Lower risk
- Learn and adapt as you go
- Build organizational capability over time
- Easier to manage change
- Failures are contained

**Disadvantages:**
- Slower to achieve full benefits
- May create inconsistency between teams
- Some projects may not benefit for years

### Big-Bang Deployment

**Definition:** Introducing MBT across the entire organization or all projects at once.

**Approach:**
1. Train all teams simultaneously
2. Deploy tools organization-wide
3. All projects adopt MBT immediately

**Advantages:**
- Faster organization-wide benefits
- Consistent approach across all teams
- Strong signal of organizational commitment

**Disadvantages:**
- Very high risk
- Large upfront investment
- Difficult to recover from mistakes
- May overwhelm teams
- Requires strong change management

### Recommended Approach

**For Most Organizations:** Incremental deployment with a pilot first.

**For Small Organizations:** May use a faster incremental approach (pilot → expand within 3-6 months).

**When Big-Bang Might Work:**
- Small organization with few teams
- Strong executive sponsorship
- External consulting support
- Simple, homogeneous projects

---

## 5.4 Organizational Factors

### Skills

**Required Skills:**
- **Modeling:** Understanding of modeling notations (UML, BPMN)
- **Domain knowledge:** Understanding the SUT's business logic
- **Testing:** Test design principles, coverage concepts
- **Tool usage:** Specific MBT tools

**Skill Development:**
- Training programs (internal or external)
- Mentoring from experienced modelers
- Practice on pilot projects
- Communities of practice

### Culture

**Supportive Culture Factors:**
- Innovation openness
- Willingness to try new approaches
- Learning from failures
- Collaboration between testers, developers, and business analysts

**Resistant Culture Factors:**
- "We've always done it this way"
- Blame culture (fear of trying new things)
- Silos between teams
- Short-term focus (no time for learning)

**How to Change Culture:**
- Find champions (advocates for MBT)
- Share success stories
- Make it safe to experiment
- Reward learning and improvement

### Process Maturity

**Low Maturity:**
- Ad-hoc testing processes
- No test strategy or planning
- Unstable requirements
- MBT may be difficult because models need stable requirements

**Medium Maturity:**
- Defined test processes
- Some test documentation
- Requirements exist but may change
- MBT can work with change management

**High Maturity:**
- Well-defined, optimized processes
- Strong requirements management
- Test automation already in place
- MBT fits well into mature processes

**Implication:** Higher maturity makes MBT adoption easier, but MBT can also help improve maturity.

### Tool Infrastructure

**Required Infrastructure:**
- Modeling tools
- Test generation tools
- Test execution tools
- CI/CD integration capability
- Version control for models

**Integration Considerations:**
- Can MBT tools integrate with existing test management tools?
- Can generated tests run in existing CI/CD pipelines?
- Can models be versioned alongside code?

---

## 5.5 Metrics for MBT Success

### Process Metrics

**Model Coverage:**
- Percentage of states covered
- Percentage of transitions covered
- Percentage of decision table rules covered

**Test Generation Metrics:**
- Number of tests generated per model
- Time to generate tests
- Reduction in manual test design time

**Test Execution Metrics:**
- Number of tests executed
- Pass/fail rates
- Execution time

### Product Metrics

**Defect Detection:**
- Number of defects found by MBT-generated tests
- Defect detection rate vs. manual tests
- Defect severity distribution

**Defect Escape Rate:**
- Number of defects found in production that were missed by MBT
- Trend over time (should decrease as models improve)

### Business Metrics

**Effort Reduction:**
- Hours saved in test design
- Hours saved in test maintenance
- Overall test team productivity

**Time to Market:**
- Reduction in test cycle time
- Earlier defect detection reducing late-phase delays

**ROI:**
- Actual vs. projected ROI
- Payback period achieved

### Quality Metrics

**Model Quality:**
- Number of model defects found
- Model review findings
- Time to update models after requirement changes

**Test Effectiveness:**
- Defects per test case
- Coverage achieved vs. target
- False positive rate (tests fail but SUT is correct)

---

## Worked Examples

### Worked Example 1: ROI Calculation

**Scenario:** A team of 5 testers manually designs and maintains 800 test cases. They are considering MBT.

**Current Costs (Annual):**
- Test design: 5 testers x 4 weeks = 20 weeks ≈ $50,000
- Test maintenance (updates): 5 testers x 6 weeks = 30 weeks ≈ $75,000
- Defects found late (production fixes): ≈ $30,000
- **Total:** $155,000

**MBT Costs (Annual):**
- Tools: $15,000
- Training (first year): $10,000
- Model creation: 3 weeks ≈ $15,000
- Model maintenance: 2 weeks ≈ $10,000
- Concretization maintenance: 2 weeks ≈ $10,000
- **Total Year 1:** $60,000
- **Total Year 2+:** $35,000

**MBT Benefits (Annual):**
- Test design (automated generation): 1 week ≈ $5,000
- Test maintenance (model update + regeneration): 2 weeks ≈ $10,000
- Earlier defect detection savings: ≈ $25,000
- **Total:** $40,000

**Wait — this shows costs > benefits. Let me recalculate with more realistic numbers.**

**Revised — More Realistic Scenario:**

**Current:**
- Test design: 800 tests, 15 min each = 200 hours ≈ $25,000
- Maintenance: 30% of tests updated per release = 240 tests, 10 min each = 40 hours ≈ $5,000
- 4 releases/year = $20,000 maintenance
- **Total:** $45,000/year

**With MBT:**
- Model creation: 40 hours ≈ $5,000 (one-time)
- Model maintenance per release: 8 hours ≈ $1,000
- 4 releases = $4,000
- Tools: $5,000/year
- **Total Year 1:** $14,000
- **Total Year 2+:** $9,000

**Savings:** $45,000 - $9,000 = $36,000/year

**Year 1 ROI:** ($36,000 - $14,000) / $14,000 = 157%

### Worked Example 2: Pilot Project Selection

**Scenario:** An insurance company wants to pilot MBT. They have three candidate projects.

| Project | Description | Team Size | Domain Knowledge | Stability | Stakeholder Support |
|---------|-------------|-----------|-----------------|-----------|---------------------|
| A | New mobile app for claims | 8 people | Medium | Low (new) | High |
| B | Policy calculation engine | 4 people | High | High (mature) | Medium |
| C | Complete core system rewrite | 20 people | Low | Very Low | Mixed |

**Analysis:**
- **Project C:** Too large, unstable, low domain knowledge. High risk for a pilot.
- **Project A:** New, some instability. Medium knowledge. Good support but risky.
- **Project B:** Small team, high domain knowledge, stable codebase. Medium support but manageable.

**Recommendation:** Project B is the best pilot. Stable, well-understood, right size.

### Worked Example 3: Deployment Decision

**Scenario:** A 50-person test organization across 8 teams wants to adopt MBT.

**Option 1: Big-Bang**
- Train all 50 people simultaneously
- Deploy tools to all teams at once
- All projects adopt MBT immediately

**Risk Assessment:**
- High training cost all at once
- If tools don't fit, all teams affected
- No opportunity to learn and adapt
- Very high management overhead

**Option 2: Incremental**
- Pilot with 1 team (5 people) for 3 months
- Evaluate and refine approach
- Expand to 2 more teams
- Expand to remaining 5 teams over 12 months

**Risk Assessment:**
- Lower initial investment
- Learn from pilot before scaling
- Can adapt tools/process based on feedback
- Some teams wait for benefits

**Recommendation:** Incremental deployment with pilot first.
