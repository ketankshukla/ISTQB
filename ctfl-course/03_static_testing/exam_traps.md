<!-- ISTQB-BEAUTIFY-V1 -->
<style>
html, body {
  background-color: #000000 !important;
  color: #F5F5F5 !important;
}
body {
  font-size: 19px !important;
  line-height: 1.85 !important;
  font-family: 'Segoe UI', 'Trebuchet MS', Verdana, sans-serif !important;
  padding: 24px 44px !important;
  letter-spacing: 0.2px;
}
h1 { color: #FFD700 !important; font-size: 2.7em !important; font-weight: 800 !important; border-bottom: 3px solid #FF5252 !important; padding-bottom: 0.25em; }
h2 { color: #00E5FF !important; font-size: 2.05em !important; font-weight: 800 !important; border-bottom: 2px solid #00E5FF !important; padding-bottom: 0.2em; }
h3 { color: #69F0AE !important; font-size: 1.6em !important; font-weight: 700 !important; }
h4 { color: #FF80AB !important; font-size: 1.35em !important; font-weight: 700 !important; }
h5 { color: #FFAB40 !important; font-size: 1.2em !important; font-weight: 700 !important; }
h6 { color: #B388FF !important; font-size: 1.1em !important; font-weight: 700 !important; }
p, li, td, th, span, div { font-size: 1em !important; color: #F5F5F5 !important; }
strong, b { color: #FFEB3B !important; }
em, i { color: #FF8A65 !important; }
a { color: #40C4FF !important; text-decoration: underline; }
a:hover { color: #80D8FF !important; }
code { color: #FF4081 !important; background: transparent !important; font-size: 0.95em !important; }
pre { background: transparent !important; border: 1px solid #555 !important; border-radius: 8px; padding: 14px !important; }
pre code { color: #80CBC4 !important; }
blockquote { color: #B0BEC5 !important; border-left: 5px solid #FFD700 !important; background: transparent !important; padding-left: 18px; font-style: italic; }
table { border-collapse: collapse !important; background: transparent !important; }
th { color: #FFD700 !important; border: 2px solid #00E5FF !important; background: transparent !important; padding: 8px 12px !important; }
td { color: #F5F5F5 !important; border: 1px solid #607D8B !important; background: transparent !important; padding: 8px 12px !important; }
hr { border: none; border-top: 2px dashed #FF5252 !important; margin: 1.5em 0; }
ul li::marker { color: #69F0AE !important; font-size: 1.1em; }
ol li::marker { color: #00E5FF !important; font-weight: bold; }
</style>
# 🪤 Chapter 3 — Exam Traps

---

## 🪤 Trap 1: Static Testing Finds Defects, Dynamic Testing Finds Failures

This is the single most important distinction in Chapter 3:

- **Static testing** examines work products and finds **defects** directly (without executing anything)
- **Dynamic testing** executes the system and detects **failures** (observable incorrect behavior)

**Trap question:** "What does static testing detect?" Answer: Defects. NOT failures (failures require execution).

---

## 🪤 Trap 2: Walkthrough vs Inspection — Who Leads?

| Review Type | Led By |
|-------------|--------|
| Walkthrough | **The author** |
| Inspection | **A trained moderator** (NOT the author) |

**Trap:** A scenario describes the author presenting their work to colleagues and guiding them through it. This is a WALKTHROUGH, not an inspection. If a trained moderator leads the meeting and the author is just a participant, it is an INSPECTION.

---

## 🪤 Trap 3: Where Are Most Defects Found in a Formal Review?

Most defects are found during **individual preparation** (step 3), NOT during the review meeting. The meeting is for discussion, clarification, and consensus — but the hard work of finding defects happens when each reviewer studies the material alone.

**Trap:** A question asks when defects are primarily identified. Answer: During individual review/preparation. NOT during the meeting.

---

## 🪤 Trap 4: Informal Review vs Walkthrough

Both are low formality, but they differ:

- **Informal review:** No defined process at all. Could be asking a colleague to "look this over." No meeting required.
- **Walkthrough:** Has a structure — the author leads participants through the material in a meeting. May produce documented findings.

**Trap:** If the scenario describes a meeting where the author explains the material, it is a walkthrough (not informal). If it is just one person quickly scanning a document with no meeting, it is informal.

---

## 🪤 Trap 5: What Static Testing Can Find That Dynamic Testing Cannot

Static testing uniquely detects:
- Requirements ambiguities and contradictions
- Missing requirements (omissions)
- Design inconsistencies
- Deviations from coding standards
- Dead/unreachable code
- Security vulnerabilities identifiable by pattern (via static analysis tools)

**Trap:** A question asks "Which defect type can ONLY be found by static testing?" Look for answers about requirements omissions or standard deviations — these cannot be found by running code.

---

## 🪤 Trap 6: Static Analysis vs Reviews

Both are forms of static testing, but:

| Aspect | Reviews | Static Analysis |
|--------|---------|-----------------|
| Performed by | People | Tools |
| Applicable to | Any readable work product | Primarily code (some tools work on models) |
| Examples | Inspection, walkthrough | Lint tools, security scanners, complexity analyzers |
| Finds | Semantic issues, logic errors, ambiguities | Coding standard violations, unreachable code, potential bugs by pattern |

**Trap:** The exam may ask whether static analysis is a form of static testing. Answer: YES — it examines code without executing it.

---

## 🪤 Trap 7: Entry Criteria for Inspections

Inspections have formal entry criteria that must be met BEFORE the review can proceed:

- The work product is complete enough for review
- All reviewers have received the materials
- Participants have had adequate time for individual preparation
- Previous action items (if re-review) have been addressed

**Trap:** If a question asks which review type uses formal entry criteria, the answer is INSPECTION. Walkthroughs and informal reviews do not require formal entry criteria.

---

## 🪤 Trap 8: Review Metrics Are an Inspection Feature

Only inspections formally collect and track metrics for process improvement:
- Number of defects found per page/per hour
- Defect density
- Time spent in preparation vs meeting
- Effectiveness (defects found in review vs total defects)

**Trap:** If asked which review type collects metrics for process improvement, the answer is inspection.

---

## 🪤 Trap 9: Technical Review vs Inspection

Both are moderately-to-highly formal, but key differences:

| Feature | Technical Review | Inspection |
|---------|-----------------|------------|
| Primary purpose | Technical quality, consensus | Maximum defect detection, process improvement |
| Led by | Facilitator or technical peer | Trained moderator |
| Metrics | Sometimes | Always |
| Individual prep | Recommended | Mandatory |
| Entry/exit criteria | Sometimes | Always (formal) |
| Follow-up | Sometimes | Always (formal) |

**Trap:** A scenario describes a review focused on whether the architecture meets performance standards, led by a senior architect. This is most likely a TECHNICAL REVIEW (focus on technical quality/conformance).

---

## 🪤 Trap 10: The Author's Role in Reviews

- In a **walkthrough**: the author LEADS and PRESENTS
- In a **technical review**: the author PARTICIPATES but does not lead
- In an **inspection**: the author PARTICIPATES but the moderator leads; the author is there to clarify, not to defend

**Trap:** In any review type, the author is responsible for FIXING the identified defects. The reviewers find them; the author fixes them.

---

## 🪤 Trap 11: Success Factor — Culture

The most important success factor is organizational culture:
- Defect findings must be treated as constructive feedback, not personal criticism
- Management must support time allocation for reviews
- Authors must not feel attacked

**Trap:** A question about why reviews fail may have "reviewers criticize the author personally" as the correct answer explaining the failure. The fix is focusing on the work product, not the person.

---

## 🪤 Trap 12: Static Testing Is NOT Optional

The exam may present static testing as equally important to dynamic testing. It is NOT a lesser or optional activity. In fact:
- Static testing can find defects that dynamic testing CANNOT find (requirements ambiguities)
- Static testing is often MORE cost-effective per defect found than dynamic testing
- Both are needed for thorough quality assurance

**Trap:** Any answer suggesting static testing is less valuable than dynamic testing, or that it can be skipped, is wrong.
