# Case Study 2 — Legacy System Automation Strategy

## Context

You are the QA Manager for HeritageBank, which runs a 20-year-old COBOL banking system with a modern web frontend.

**Challenges:**
- Green screen terminal interface (TN3270) for backend
- Modern React frontend for customer-facing features
- No APIs — frontend talks directly to COBOL programs
- 3-month release cycle due to extensive manual testing
- Team of 15 manual testers with no programming background

**Goals:**
- Reduce regression from 6 weeks to 2 weeks
- Improve confidence in releases
- Not replace the legacy system (5-year modernization plan)

---

## Task 1: Feasibility Assessment

**Question:** Assess what can and cannot be automated.

**Model Answer:**

**Automatable:**
| Area | Approach | Effort |
|------|----------|--------|
| Web frontend (React) | Selenium + JavaScript; standard web automation | Medium |
| Terminal screens (TN3270) | Terminal emulation tool (Jagacy, s3270) | High |
| Batch jobs | Schedule and verify output files | Medium |
| Database validation | SQL queries to verify state | Low |

**Not Automatable (or deferred):**
- Complex business rule validation requiring human judgment
- Regulatory report formatting verification (requires visual check)
- One-time data migration tests

**Recommendation:**
- Start with web frontend (easiest, highest value)
- Add database validation (low effort, high confidence)
- Tackle terminal automation last (specialized skills needed)

---

## Task 2: Architecture Design

**Question:** Design a TAA that handles both modern and legacy.

**Model Answer:**

```
Tests/
  web/
    test_customer_login.py
    test_account_balance.py
  terminal/
    test_teller_transaction.py
  batch/
    test_nightly_interest.py
  database/
    test_account_integrity.py

Framework/
  web_driver.py       # Selenium wrapper
  terminal_driver.py  # TN3270 wrapper
  db_helper.py        # SQL utilities
  batch_runner.py     # Job scheduler interface
  reporter.py         # Unified reporting
```

**Design Principles:**
- Abstract the interface (web vs terminal) from test logic
- Use page objects for web; screen objects for terminal
- Unified reporting regardless of interface type
- Shared test data across web and terminal tests

---

## Task 3: Team and Training

**Question:** Plan team structure and training.

**Model Answer:**

**Team Structure:**
| Role | Count | Source |
|------|-------|--------|
| Automation lead | 1 | Hire external |
| Web automation engineer | 2 | Train internal testers |
| Terminal automation engineer | 1 | Hire external (specialized) |
| Test analyst | 3 | Existing team (design tests) |
| Manual testers | 10 | Continue manual + exploratory |

**Training Plan:**
| Month | Activity |
|-------|----------|
| 1 | JavaScript fundamentals for 2 testers |
| 2 | Selenium basics + POM pattern |
| 3 | Working with automation lead on pilot |
| 4-6 | Gradual independence with code review |
| 6+ | Mentoring new team members |

---

## Task 4: Implementation Roadmap

**Question:** Create a phased implementation plan.

**Model Answer:**

| Phase | Timeline | Scope | Deliverable |
|-------|----------|-------|-------------|
| **1. Pilot** | Months 1-3 | Web login + account balance | 20 automated tests |
| **2. Expand Web** | Months 4-6 | Full customer web journey | 80 automated tests |
| **3. Database** | Months 7-8 | Account integrity checks | 30 automated checks |
| **4. Terminal** | Months 9-12 | Teller transactions | 40 automated tests |
| **5. Batch** | Months 13-15 | Nightly job verification | 20 automated tests |
| **6. Integration** | Months 16-18 | End-to-end web→terminal→database | 20 automated tests |

**Expected Outcome (Month 18):**
- 190 automated tests covering 60% of regression
- Regression time reduced from 6 weeks to 2.5 weeks
- Manual testers focus on complex scenarios and exploratory testing
