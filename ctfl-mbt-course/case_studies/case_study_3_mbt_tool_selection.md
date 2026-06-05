# Case Study 3 — MBT Tool Selection

## Context

You are the Test Lead for AutoFlow, an automotive software company. Your team needs to adopt MBT for testing the infotainment system's state-dependent behavior. The system has 20+ states and complex transitions.

## Requirements

- State machine modeling for 20+ states
- Transition and transition pair coverage
- Integration with Jenkins CI
- Integration with Jira for traceability
- Support for UML state machine notation
- Budget: $15,000/year

## Candidate Tools

| Tool | Notation | Coverage | Jenkins | Jira | Cost/Year |
|------|----------|----------|---------|------|-----------|
| GraphWalker | Graph | Yes | Plugin | API | Free |
| Conformiq | UML, custom | Yes | Yes | Yes | $18,000 |
| TestCast | UML, state charts | Yes | Yes | Plugin | $12,000 |
| MBT Suite | Custom | Limited | No | No | $8,000 |
| Custom scripts | Any | Manual | Manual | No | Free |

---

## Task 1: Evaluate Tools

Evaluate each tool against requirements and recommend the best choice.

**Model Answer:**

| Tool | Meets Notation | Meets Coverage | Meets Jenkins | Meets Jira | Meets Budget | Score |
|------|---------------|---------------|--------------|-----------|-------------|-------|
| GraphWalker | Partial | Yes | Yes | Partial | Yes | 3/5 |
| Conformiq | Yes | Yes | Yes | Yes | No | 4/5 |
| TestCast | Yes | Yes | Yes | Yes | Yes | 5/5 |
| MBT Suite | No | Partial | No | No | Yes | 1/5 |
| Custom scripts | Yes | No | No | No | Yes | 2/5 |

**Recommendation:** TestCast — meets all requirements within budget.

---

## Task 2: Pilot Plan

Design a 4-week pilot to evaluate TestCast.

**Model Answer:**

**Week 1: Setup and Training**
- Install TestCast
- Train 2 testers on modeling and test generation
- Create a simple model (5 states) for practice

**Week 2: Model Creation**
- Model the infotainment system's main navigation flow (8 states)
- Review model with developers for accuracy
- Generate tests for transition coverage

**Week 3: Integration**
- Integrate TestCast with Jenkins
- Run generated tests in CI pipeline
- Integrate with Jira for traceability

**Week 4: Evaluation**
- Measure coverage achieved
- Collect team feedback
- Calculate ROI (time saved vs. manual test creation)
- Make go/no-go decision

**Success Criteria:**
- [ ] 80%+ transition coverage achieved
- [ ] Tests run successfully in Jenkins
- [ ] Team can create models independently
- [ ] At least 2x time savings vs. manual test creation

---

## Task 3: Risk Mitigation

Identify risks and mitigation strategies.

**Model Answer:**

| Risk | Impact | Likelihood | Mitigation |
|------|--------|-----------|------------|
| Team resistance to modeling | High | Medium | Training, show quick wins, involve team in pilot design |
| Model does not match system | High | Medium | Developer review, prototype validation, regular model updates |
| Tool integration fails | Medium | Low | Test integration in pilot, engage vendor support |
| Coverage targets not met | Medium | Medium | Start with smaller model, iterate, adjust targets |
| Budget overrun | Medium | Low | Track pilot costs, negotiate vendor pricing |
