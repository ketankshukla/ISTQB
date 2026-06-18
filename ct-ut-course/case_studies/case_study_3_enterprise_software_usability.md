# 📂 Case Study 3 — Enterprise Software Usability

## ⭐ Context

You are the Usability Test Manager for WorkFlow Pro, an enterprise project management platform used by 10,000+ organizations.

**Current Challenges:**
- New user onboarding takes 4+ hours (target: 30 minutes)
- 40% of new accounts become inactive within 30 days
- Support receives 5,000 "how do I..." tickets monthly
- Power users love advanced features; new users are overwhelmed
- Mobile app has 2-star rating with complaints about complexity

**Stakeholders:**
- Sales: Wants demo-friendly simplicity for prospects
- Product: Wants feature parity with competitors
- Engineering: Concerned about refactoring legacy UI
- Support: Wants reduced ticket volume

**User Segments:**
- **New users:** Need simple, guided experience
- **Regular users:** Need efficient everyday workflows
- **Power users:** Need advanced features and customization
- **Managers:** Need reporting and oversight tools

## ⭐ Task 1: Segmented User Research

**Question:** Design a research plan that addresses the needs of all user segments.

**Model Answer:**

**Research Methods by Segment:**

| Segment | Method | Focus | Sample |
|---------|--------|-------|--------|
| New users | Unmoderated first-time use | Onboarding, initial confusion | 20 |
| New users | Moderated think-aloud | Learning curve, mental models | 8 |
| Regular users | Diary study | Daily workflow friction | 10 |
| Regular users | Survey (CSAT + SUS) | Satisfaction and perceived usability | 200 |
| Power users | Interview | Advanced feature needs, customization | 8 |
| Power users | Heuristic evaluation | Power feature usability | Internal |
| Managers | Contextual inquiry | Reporting needs, oversight workflows | 5 |

**Key Questions by Segment:**

**New Users:**
- How long does it take to create their first project?
- Where do they get stuck during onboarding?
- What features do they discover vs. miss?

**Regular Users:**
- What tasks do they perform daily?
- What workarounds have they developed?
- What features do they never use?

**Power Users:**
- What customizations have they built?
- What third-party integrations do they need?
- What shortcuts do they use?

**Managers:**
- What reports do they generate?
- How do they track team productivity?
- What alerts do they need?

---

## 🎨 Task 2: Onboarding Redesign Test

**Question:** Test a proposed simplified onboarding flow.

**Model Answer:**

**Current Flow (6 steps):**
1. Account creation (8 fields)
2. Team setup (invite members, set permissions)
3. Project template selection (25 templates)
4. Feature configuration (enable/disable modules)
5. Integration setup (connect tools)
6. Tutorial walkthrough (15 minutes)

**Proposed Flow (3 steps):**
1. Quick account creation (3 fields: name, email, password)
2. Guided first project creation (pre-filled template, 1 field: project name)
3. Progressive feature discovery (features introduced as needed)

**Test Design:**
- 10 new users test current flow
- 10 new users test proposed flow
- Metrics: time to first project, errors, SUS, completion rate

**Results:**

| Metric | Current | Proposed | Improvement |
|--------|---------|----------|-------------|
| Time to first project | 28 min | 8 min | 71% faster |
| Completion rate | 65% | 90% | +38% |
| SUS score | 45 | 72 | +60% |
| Errors | 12 per user | 3 per user | 75% fewer |
| "Overwhelmed" comments | 8/10 | 1/10 | -88% |

**Qualitative Feedback:**
- Current: "I just want to create a project, why do I need to configure everything?"
- Proposed: "I created my project in minutes, and I'll explore features when I need them"

---

## ⭐ Task 3: Power User vs. New User Tension

**Question:** How to satisfy power users while simplifying for new users?

**Model Answer:**

**Problem:**
- Power users need complex features (custom workflows, API access, advanced reporting)
- New users are overwhelmed by the same complexity
- One-size-fits-all approach fails both segments

**Solutions:**

**1. Progressive Disclosure:**
- Show basic features by default
- Reveal advanced features based on usage patterns or explicit request
- Example: "Show advanced options" toggle

**2. Role-Based Interface:**
- Admin view: Full access to all features
- Manager view: Reporting and oversight focused
- Contributor view: Task-focused, simplified

**3. Customizable Dashboard:**
- Users choose which widgets to display
- New users start with 3 essential widgets
- Power users can add 15+ specialized widgets

**4. Contextual Help:**
- New users see inline tips for first 5 uses
- Power users see keyboard shortcuts and advanced tips
- Help adapts based on user behavior

**5. Separate Paths:**
- "Quick start" for new users (essential features only)
- "Full setup" for power users (all features)
- Users can switch between modes

**Testing Approach:**
- Test with both segments using their respective interfaces
- Ensure power users do not lose efficiency
- Ensure new users can complete core tasks

---

## ⭐ Task 4: Measuring Success

**Question:** Define metrics to track the impact of usability improvements.

**Model Answer:**

**Leading Indicators (Immediate):**

| Metric | Baseline | Target | Measurement |
|--------|----------|--------|-------------|
| Onboarding time | 4 hours | 30 min | Time from signup to first project |
| Onboarding completion | 65% | 90% | % who complete first project |
| SUS score (new users) | 45 | 70+ | Post-onboarding survey |
| Feature discovery rate | 20% | 60% | % of core features used in first week |

**Lagging Indicators (30-90 days):**

| Metric | Baseline | Target | Measurement |
|--------|----------|--------|-------------|
| 30-day retention | 60% | 80% | % active after 30 days |
| Support tickets | 5,000/mo | 2,500/mo | Monthly volume |
| NPS (new users) | 15 | 40+ | Quarterly survey |
| Mobile app rating | 2.0 | 4.0+ | App store rating |

**Business Impact:**

| Metric | Baseline | Target | Annual Value |
|--------|----------|--------|--------------|
| Customer acquisition cost | $500 | $350 | -$1.5M (more referrals) |
| Churn rate | 25% | 15% | +$3M retained revenue |
| Support cost per user | $50 | $25 | -$250K |
| Expansion revenue | $200/user | $300/user | +$1M |

---

## ⭐ Task 5: Stakeholder Communication

**Question:** Present findings to stakeholders with competing priorities.

**Model Answer:**

**For Sales (Demo-Friendly Simplicity):**
- "The new onboarding lets prospects create their first project in 8 minutes during a demo"
- "SUS score improved from 45 to 72 — prospects are more likely to convert"
- "30-day retention improved from 60% to 80% — higher lifetime value"

**For Product (Feature Parity):**
- "We retain all advanced features for power users"
- "Progressive disclosure means new users discover features contextually, leading to higher adoption"
- "Customizable dashboards let users self-select their complexity level"

**For Engineering (Refactoring Legacy):**
- "The redesign uses a component-based design system that reduces future development time"
- "User testing validates changes before engineering investment, reducing rework"
- "Modular architecture supports both simple and advanced views without duplicating logic"

**For Support (Reduced Tickets):**
- "How do I create a project?" tickets dropped 60%
- "Where is feature X?" tickets dropped 40%
- "I can't figure out how to..." tickets dropped 50%
- Overall ticket volume target: 5,000/month → 2,500/month

**Executive Summary:**
"Investing $200K in usability improvements will generate $5.5M in annual value through reduced churn, lower support costs, and higher expansion revenue. The redesigned onboarding improves first impressions (sales), maintains power features (product), uses modern architecture (engineering), and reduces support volume."
