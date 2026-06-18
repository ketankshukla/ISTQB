# 📘 Chapter 5 — Tools, Metrics and Reporting: Lessons

---

## ❓ 5.1 Usability Questionnaires

### 🖱️ SUS — System Usability Scale

**Description:** A 10-item questionnaire measuring perceived usability. The most widely used standardized usability questionnaire.

**The 10 Items (5-point Likert scale: Strongly Disagree to Strongly Agree):**

1. I think that I would like to use this system frequently.
2. I found the system unnecessarily complex.
3. I thought the system was easy to use.
4. I think that I would need the support of a technical person to be able to use this system.
5. I found the various functions in this system were well integrated.
6. I thought there was too much inconsistency in this system.
7. I would imagine that most people would learn to use this system very quickly.
8. I found the system very cumbersome to use.
9. I felt very confident using the system.
10. I needed to learn a lot of things before I could get going with this system.

**Scoring:**
- Odd items (1,3,5,7,9): Subtract 1 from response
- Even items (2,4,6,8,10): Subtract response from 5
- Sum all converted scores, multiply by 2.5
- Result: 0-100

**Interpretation:**
- 68 = industry average
- Above 80 = excellent

### 🔷 NPS — Net Promoter Score

**Question:** "How likely are you to recommend this product to a friend or colleague?" (0-10 scale)

**Classification:**
- Promoters: 9-10
- Passives: 7-8
- Detractors: 0-6

**Calculation:** NPS = % Promoters - % Detractors

**Ranges:** Below 0 (needs work), 0-30 (good), 30-70 (great), 70+ (excellent)

### 🔷 CSAT — Customer Satisfaction Score

**Question:** "How satisfied were you with your experience?" (1-5 or 1-10)

**Calculation:** CSAT = (Satisfied responses / Total responses) x 100%

### ❓ CSUQ — Computer System Usability Questionnaire

19-item questionnaire with three dimensions:
- Usefulness (8 items)
- Information Quality (6 items)
- Interface Quality (5 items)

7-point Likert scale; provides diagnostic information about specific aspects.

---

## 📊 5.2 Task-Based Metrics

### 🔷 Task Success Rate

Calculation: (Successful completions / Attempts) x 100%

**Success levels:**
- Success: Completed without assistance
- Success with assistance: Needed help
- Failure: Could not complete

**Benchmark:** 78% average for web applications

### 🔷 Time on Task

Measurement from task start to completion. Compare against benchmarks. Only meaningful with success rate.

### 🔷 Error Rate

Calculation: (Errors / Opportunities for error) x 100%

**Error types:**
- **Slips:** Accidental (clicked wrong button)
- **Mistakes:** Wrong understanding (thought "Save" meant "Submit")

**Error classification:**
| Type | Example |
|------|---------|
| Navigation | Going to wrong page |
| Input | Invalid date format |
| Selection | Choosing wrong option |
| Omission | Missing required field |
| Sequence | Wrong step order |

---

## 🗃️ 5.3 Combining Quantitative and Qualitative Data

**Quantitative:** Tells you WHAT happened (success rates, times, scores)
**Qualitative:** Tells you WHY it happened (quotes, observations, confusion points)

**Together:** Quantitative identifies problems; qualitative explains causes and generates recommendations.

---

## 🛠️ 5.4 Usability Testing Tools

### 🔷 Remote Testing Platforms

**UserTesting, Maze, Lookback, Optimal Workshop:**
- Recruit participants or use your own
- Create tasks and scenarios
- Collect screen recordings, audio, and metrics
- Good for: Quick feedback, large samples, geographic diversity

### 🛠️ Session Recording Tools

**Hotjar, FullStory, Crazy Egg:**
- Record real user sessions on live websites
- Heatmaps, click maps, scroll maps
- Good for: Understanding real user behavior at scale
- Limitation: Cannot ask "why" without additional research

### 🛠️ Analytics Tools

**Google Analytics, Mixpanel, Amplitude:**
- Track user flows, drop-off points, feature usage
- Quantitative behavioral data
- Good for: Identifying where users struggle in production

### 🛠️ Lab Testing Tools

**Morae, Silverback, Camtasia:**
- Screen and audio recording
- Annotation and analysis features
- Good for: In-person moderated testing

### 🛠️ Prototyping Tools

**Figma, Axure, Balsamiq, Adobe XD:**
- Create interactive prototypes for testing
- Test before development
- Good for: Early-stage formative testing

---

## ❓ 5.5 Reporting Best Practices

### 🔷 Structure

1. **Executive Summary:** Key findings and recommendation in 1-2 paragraphs
2. **Methodology:** What was tested, with whom, how
3. **Key Findings:** Major issues with severity ratings
4. **Detailed Findings:** Each issue with evidence and recommendation
5. **Recommendations:** Prioritized action items

### 🔷 Audience-Appropriate Communication

| Audience | Focus |
|----------|-------|
| Developers | Specific UI elements, reproduction steps, screen recordings |
| Product Managers | Business impact, priorities, effort estimates |
| Executives | High-level summary, key metrics, ROI of fixes |
| Designers | Visual issues, interaction patterns, design recommendations |

### 🔷 Visualization

- Charts for quantitative data (success rates, SUS scores)
- Screenshots with annotations for issues
- Video clips for critical problems
- Comparison tables (before/after, competitor)

---

## 💡 Worked Examples

### 💡 Worked Example 1: SUS Calculation

Participant responses (1-5 scale):
| Item | Response | Calculation |
|------|----------|-------------|
| 1 (odd) | 4 | 4-1 = 3 |
| 2 (even) | 2 | 5-2 = 3 |
| 3 (odd) | 5 | 5-1 = 4 |
| 4 (even) | 1 | 5-1 = 4 |
| 5 (odd) | 4 | 4-1 = 3 |
| 6 (even) | 2 | 5-2 = 3 |
| 7 (odd) | 5 | 5-1 = 4 |
| 8 (even) | 1 | 5-1 = 4 |
| 9 (odd) | 4 | 4-1 = 3 |
| 10 (even) | 2 | 5-2 = 3 |
| **Total** | | **34** |

SUS Score: 34 x 2.5 = 85 (Excellent)

### 💡 Worked Example 2: NPS Calculation

Survey of 100 users:
- Promoters (9-10): 45
- Passives (7-8): 30
- Detractors (0-6): 25

NPS = (45/100 x 100) - (25/100 x 100) = 45 - 25 = 20

Interpretation: Good (0-30 range), but room for improvement.

### 💡 Worked Example 3: Task Metric Analysis

| Task | Success Rate | Avg Time | Errors | Benchmark |
|------|-------------|----------|--------|-----------|
| Search product | 95% | 15 sec | 2 | Good |
| Add to cart | 90% | 10 sec | 5 | Good |
| Apply discount | 60% | 45 sec | 20 | Poor |
| Checkout | 70% | 120 sec | 15 | Below avg |

**Priority:** Discount code and checkout need immediate attention.
