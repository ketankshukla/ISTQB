# Chapter 4 — Quality Metrics and Reporting: Lessons

---

## 4.1 Leading vs Lagging Indicators

### Leading Indicators

Predict future outcomes. Useful for early intervention.

| Indicator | What It Predicts |
|-----------|----------------|
| **Test coverage trend** | Future defect prevention capability |
| **Code review quality** | Future defect density |
| **Build stability** | Future release readiness |
| **Automation creation rate** | Future regression efficiency |
| **Team satisfaction** | Future retention and productivity |

### Lagging Indicators

Show past results. Useful for assessing outcomes.

| Indicator | What It Shows |
|-----------|---------------|
| **Defect escape rate** | Past testing effectiveness |
| **Production incidents** | Past quality gaps |
| **Customer complaints** | Past user experience issues |
| **Post-release patches** | Past release readiness |

### Balance

Use both: leading indicators to steer, lagging indicators to validate.

---

## 4.2 Key Metrics

### DORA Metrics (DevOps Research and Assessment)

| Metric | Description | Target |
|--------|-------------|--------|
| **Deployment Frequency** | How often releases occur | Daily or on-demand |
| **Lead Time for Changes** | Commit to production | Hours to days |
| **Change Failure Rate** | Releases causing incidents | < 5% |
| **Time to Recovery (MTTR)** | Incident to restoration | < 1 hour |

### Test Metrics

| Metric | Formula | Target |
|--------|---------|--------|
| **Test coverage** | Automated tests / Total testable requirements | Increasing |
| **Pass rate** | Passed tests / Total tests run | > 95% (after excluding known issues) |
| **Execution time** | Time to complete test suite | Trending down |
| **Flaky test rate** | Flaky tests / Total tests | < 5% |

### Defect Metrics

| Metric | Formula | Target |
|--------|---------|--------|
| **Defect density** | Defects / Size (KLOC or story points) | Decreasing |
| **Defect escape rate** | Production defects / Total defects found | Decreasing |
| **Mean Time To Detect (MTTD)** | Time from introduction to detection | Decreasing |
| **Defect removal efficiency** | Defects found pre-release / Total defects | Increasing |

---

## 4.3 Dashboard Design

### Principles

- **Audience-appropriate:** Executives see trends; teams see details
- **Actionable:** Metrics trigger decisions
- **Balanced:** Include speed, quality, and sustainability
- **Timely:** Real-time or daily, not monthly

### Dashboard Levels

| Level | Audience | Content |
|-------|----------|---------|
| **Team** | Scrum team | Sprint burndown, test execution, blockers |
| **Program** | ART leadership | Feature quality, integration health, PI progress |
| **Portfolio** | Executives | DORA metrics, defect trends, customer satisfaction |

### Example Team Dashboard

```
Sprint Quality Dashboard
┌─────────────────────────────────────┐
│ Sprint Goal: 85% complete           │
│ Stories committed: 20                 │
│ Stories done: 17                      │
│ Tests automated: 45                   │
│ Pass rate: 97% (1 flaky)            │
│ Defects found: 3 (all fixed)         │
│ Escaped to staging: 0                │
└─────────────────────────────────────┘
```

---

## 4.4 Using Metrics to Drive Improvement

### Feedback Loops

1. **Measure:** Collect data automatically where possible
2. **Review:** Discuss in retrospectives and reviews
3. **Act:** Make one change based on data
4. **Re-measure:** Verify improvement

### Example

| Observation | Hypothesis | Action | Result |
|-------------|-----------|--------|--------|
| Flaky tests increasing | Tests have timing issues | Add explicit waits, disable animations | Flaky rate drops from 12% to 3% |
| Defect escape rate high | Missing integration testing | Add contract tests, system demos | Escape rate drops 40% |

---

## 4.5 Metric Anti-Patterns

### Gaming

| Metric | Gaming Behavior | Better Metric |
|--------|-----------------|-------------|
| **Lines of code** | Write verbose code | Story points delivered |
| **Test count** | Write trivial tests | Coverage + meaningful assertions |
| **Velocity** | Inflate story points | Consistency + quality measures |
| **Bug count found** | Report trivial issues | Defect density + severity |

### Vanity Metrics

- Metrics that look good but don't drive action
- Example: "10,000 tests" without knowing pass rate or coverage

### Surrogation

- Treating a metric as the goal instead of a proxy for the real goal
- Example: Optimizing test coverage % instead of actually finding bugs

---

## Worked Examples

### Worked Example 1: Metrics Selection

**Scenario:** Select metrics for a scaled agile program.

| Audience | Metrics | Rationale |
|----------|---------|-----------|
| **Teams** | Sprint test pass rate, story acceptance criteria met, build stability | Immediate feedback |
| **ART** | Integration test pass rate, feature quality score, PI objectives met | Program health |
| **Executives** | DORA metrics, customer NPS, defect escape rate | Business outcomes |

### Worked Example 2: Dashboard Design

**Scenario:** Design a quality dashboard for a release train.

**Top Section (Current Status):**
- PI objectives: 8/10 on track
- System demo: Scheduled for Friday
- Critical defects: 2 open

**Middle Section (Trends):**
- Test pass rate (last 8 sprints): Line chart showing 92% → 97%
- Defect escape rate: Bar chart showing downward trend
- Automation coverage: 45% → 62%

**Bottom Section (Actions):**
- Top flaky test: `test_checkout_flow` — investigate
- Environment issue: Staging DB slow — escalated to ops

### Worked Example 3: Metrics-Driven Improvement

**Scenario:** Reduce production incidents.

**Baseline:** 12 incidents/quarter

| Quarter | Focus | Action | Incidents |
|---------|-------|--------|-----------|
| Q1 | Detection | Add production monitoring alerts | 10 |
| Q2 | Prevention | Add automated integration tests | 7 |
| Q3 | Response | Improve incident response runbooks | 5 |
| Q4 | Root cause | Implement blameless post-mortems | 3 |
