# 📂 Case Study 2 — Mobile App Accessibility

## ⭐ Context

You are the Accessibility Test Lead for HealthTrack, a health monitoring mobile app.

**App Features:**
- Track medications, symptoms, and vital signs
- Set reminders for medications
- View health trends and reports
- Share data with healthcare providers

**User Base:**
- Ages 18-80+
- Includes elderly users and users with disabilities
- Used by people managing chronic conditions

**Accessibility Concerns:**
- Elderly users report text is too small
- Blind users cannot use the app with VoiceOver
- Users with tremors accidentally tap wrong buttons
- Users with cognitive impairments find the interface overwhelming

**Legal Requirement:**
- Must comply with ADA (Americans with Disabilities Act)
- Must meet WCAG 2.1 Level AA
- Healthcare apps have higher accessibility expectations

## 🔬 Task 1: Disability Analysis

**Question:** Identify how different disabilities affect app usage and what to test for each.

**Model Answer:**

| Disability Type | Impact on App Usage | Test Approach |
|-----------------|---------------------|---------------|
| Low vision | Cannot read small text, poor contrast | Screen magnifier, large text settings, contrast check |
| Blind | Cannot see screen at all | VoiceOver (iOS), TalkBack (Android), keyboard navigation |
| Color blindness | Cannot distinguish color-coded information | Test without color, verify text labels exist |
| Motor impairments | Cannot tap small buttons, shaking causes errors | Large touch targets, reduce need for precision |
| Cognitive impairments | Overwhelmed by complex screens, forget steps | Simple language, clear progress, reminders |
| Auditory impairments | Cannot hear medication reminders | Visual and vibration alerts |
| Speech impairments | Cannot use voice input if required | Ensure alternative input methods |

---

## ⭐ Task 2: VoiceOver Testing

**Question:** Test the medication reminder feature with VoiceOver.

**Model Answer:**

**Test Script:**
1. Enable VoiceOver on iPhone
2. Open HealthTrack app
3. Navigate to "Add Medication" screen
4. Enter medication name
5. Set dosage and schedule
6. Save the reminder
7. Verify reminder appears in list

**Findings:**

| Element | VoiceOver Behavior | Pass/Fail |
|---------|-------------------|-----------|
| App icon on home screen | Announces "HealthTrack" | Pass |
| "Add Medication" button | Announces "Button" (no label) | Fail |
| Medication name field | No announcement, not focusable | Fail |
| Dosage picker | Announces numbers but not "dosage" | Fail |
| Time picker | Works correctly | Pass |
| Save button | Announces "Button" (no label) | Fail |
| Confirmation message | Not announced automatically | Fail |

**Critical Issues:**
- Buttons lack accessible labels
- Form fields not reachable with VoiceOver
- Dynamic content (confirmation) not announced

---

## ⭐ Task 3: Motor Accessibility Testing

**Question:** Evaluate the app for users with motor impairments.

**Model Answer:**

**Touch Target Analysis:**

| Element | Size | WCAG Minimum (44x44) | Pass/Fail |
|---------|------|---------------------|-----------|
| Medication list items | 32x32 | 44x44 | Fail |
| "Add" button | 30x30 | 44x44 | Fail |
| Dosage picker | 40x200 | 44x44 | Fail (width) |
| Save button | 50x30 | 44x44 | Fail (height) |
| Close (X) button | 20x20 | 44x44 | Fail |

**Gesture Issues:**
- Swipe to delete medication requires precise horizontal swipe
- Pinch to zoom on charts requires two fingers
- Long-press for options may be difficult for users with tremors

**Recommendations:**
1. Increase all touch targets to minimum 44x44 pixels
2. Provide confirmation for destructive actions instead of swipe
3. Add tap alternatives for all gestures
4. Implement "shake to undo" as alternative to precise taps

---

## ⭐ Task 4: Cognitive Accessibility

**Question:** Evaluate the app for users with cognitive impairments.

**Model Answer:**

**Screen Complexity Analysis:**

| Screen | Elements | Issues |
|--------|----------|--------|
| Dashboard | 15+ widgets, 8 navigation options | Overwhelming; no clear priority |
| Add Medication | 12 form fields on one screen | Too many at once; no progress indication |
| Trends | Complex charts with multiple axes | Difficult to interpret |
| Settings | 25 options in one list | No categorization |

**Language Analysis:**
- "Pharmacological regimen" used instead of "medication schedule"
- "Symptomatology" instead of "symptoms"
- Abbreviations used without explanation (BID, PRN, QD)

**Recommendations:**
1. Break "Add Medication" into a 3-step wizard with progress indicator
2. Simplify dashboard to 3 most important widgets
3. Replace medical jargon with plain language
4. Add tooltips for unavoidable technical terms
5. Provide default values to reduce decision load

---

## 🗓️ Task 5: Remediation Plan

**Question:** Create a prioritized remediation plan with timeline.

**Model Answer:**

**Phase 1 (Critical — 2 weeks):**
- Add accessible labels to all buttons and form fields
- Ensure all interactive elements are reachable with screen readers
- Announce dynamic content changes (confirmations, errors)
- Increase touch targets to 44x44 minimum

**Phase 2 (High Priority — 1 month):**
- Fix form label associations
- Add error text (not just color)
- Add haptic feedback for critical actions
- Simplify language throughout the app

**Phase 3 (Medium Priority — 2 months):**
- Redesign "Add Medication" as step-by-step wizard
- Simplify dashboard layout
- Add cognitive accessibility features (plain language, defaults)
- Test with users who have disabilities

**Phase 4 (Ongoing):**
- Quarterly accessibility audits
- Include accessibility in definition of done
- Train developers on accessibility best practices
- Maintain accessibility documentation

**Testing Plan:**
| Test Type | Frequency | Method |
|-----------|-----------|--------|
| Screen reader | Every release | VoiceOver, TalkBack |
| Keyboard navigation | Every release | Tab-through testing |
| Touch target size | Every release | Automated scan |
| Color contrast | Every release | Automated check |
| User testing with disabled users | Quarterly | Recruited participants |
