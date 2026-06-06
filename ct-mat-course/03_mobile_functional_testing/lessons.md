# Chapter 3 — Mobile Functional Testing: Lessons

---

## 3.1 UI and Layout Testing

### Touch Targets

| Guideline | Minimum Size | Rationale |
|-----------|-------------|-----------|
| **Apple HIG** | 44 × 44 points | Average finger tip size |
| **Material Design** | 48 × 48 dp | Comfortable tap area |

**Testing:**
- Verify buttons and interactive elements meet minimum size
- Check spacing between targets (prevent accidental taps)
- Test with "fat finger" simulation

### Screen Sizes and Densities

| Category | iOS | Android |
|----------|-----|---------|
| **Small** | iPhone SE (4.7") | Compact phones |
| **Medium** | iPhone 15 (6.1") | Standard phones |
| **Large** | iPhone 15 Pro Max (6.7") | Phablets |
| **Tablet** | iPad (various sizes) | Android tablets |

**Testing:**
- Verify layout adapts to different screen sizes
- Check text readability at all sizes
- Ensure no truncation or overlap
- Test in split-screen / multi-window modes

### Responsive Design

- **Auto Layout (iOS):** Constraints adapt to size classes
- **ConstraintLayout (Android):** Flexible positioning
- **Testing:** Verify layouts on smallest and largest supported screens

---

## 3.2 Touch Input and Gestures

### Common Gestures

| Gesture | Action | Testing Focus |
|---------|--------|---------------|
| **Tap** | Select/activate | Target size, response time |
| **Double-tap** | Zoom | Recognition accuracy |
| **Long-press** | Context menu | Duration threshold (0.5s typical) |
| **Swipe** | Scroll, dismiss, navigate | Direction, velocity, distance |
| **Pinch** | Zoom in/out | Sensitivity, center point |
| **Rotate** | Rotate object | Angle accuracy |
| **Pull-to-refresh** | Refresh content | Threshold, visual feedback |

### Testing Considerations

- **Gesture conflicts:** Swipe to dismiss vs swipe to scroll
- **Edge cases:** Gestures near screen edges (notch, home indicator)
- **Accessibility:** Alternative to gestures (buttons for VoiceOver/TalkBack)

---

## 3.3 Navigation and Orientation

### Navigation Patterns

| Pattern | iOS | Android |
|---------|-----|---------|
| **Tab bar** | Bottom tabs | Bottom or top tabs |
| **Side drawer** | Less common | Hamburger menu |
| **Stack navigation** | Push/pop with back button | Up/back in app bar |
| **Bottom sheet** | Common for actions | Common for actions |

### Orientation Testing

**Portrait to Landscape:**
- Layout rearrangement
- Scroll position preservation
- Keyboard handling
- Video playback behavior

**Testing scenarios:**
1. Launch in portrait → rotate to landscape
2. Rotate during form entry
3. Rotate while playing video
4. Lock orientation and verify app respects setting

---

## 3.4 Compatibility Testing

### Device Selection Strategy

| Criteria | Selection Method |
|----------|-----------------|
| **Market share** | Top 10-15 devices = ~70% coverage |
| **OS versions** | Current + previous 2 major versions |
| **Screen sizes** | Small, medium, large, tablet |
| **Manufacturers** | Include variety (Samsung, Xiaomi, Google, OnePlus) |
| **Hardware features** | Devices with/without fingerprint, notch, etc. |

### Compatibility Matrix

| Feature | iPhone 14 | iPhone SE | Samsung S23 | Xiaomi Redmi |
|---------|-----------|-----------|-------------|--------------|
| Notch/Dynamic Island | Yes | No | Punch hole | Waterdrop |
| Fingerprint | Face ID only | Touch ID | Ultrasonic | Capacitive |
| Screen size | 6.1" | 4.7" | 6.1" | 6.7" |
| OS | iOS 17 | iOS 17 | Android 14 | Android 13 |

---

## 3.5 Installation and Update Testing

### Installation Scenarios

| Scenario | Test Focus |
|----------|-----------|
| **Fresh install** | First launch, onboarding, permissions |
| **Update from previous version** | Data migration, settings preserved |
| **Update with breaking changes** | Data conversion, user notification |
| **Rollback** | Reinstall older version, data handling |

### App Store Testing

- **Metadata:** Screenshots, descriptions, keywords accurate
- **In-app purchases:** Restore purchases, subscription status
- **Sign-in:** Apple Sign-In (iOS), Google Sign-In (Android)

---

## 3.6 Push Notifications and Deep Links

### Push Notification Testing

| Aspect | Test Cases |
|--------|------------|
| **Delivery** | App in foreground, background, terminated |
| **Content** | Text length, emoji, images, actions |
| **Behavior** | Tap opens correct screen; dismiss clears badge |
| **Permissions** | Granted, denied, revoked |
| **Rich notifications** | Buttons, images, custom UI |

### Deep Link / Universal Link Testing

| Type | iOS | Android |
|------|-----|---------|
| **Custom scheme** | `myapp://product/123` | `myapp://product/123` |
| **Universal/App links** | `https://example.com/product/123` | `https://example.com/product/123` |

**Test Cases:**
- Link opens app directly (if installed)
- Fallback to web/app store (if not installed)
- Correct content displayed within app
- Handoff between web and app (iOS Universal Clipboard)

---

## Worked Examples

### Worked Example 1: Gesture Testing

**Scenario:** A photo gallery app supports pinch-to-zoom and swipe-to-dismiss.

| Test Case | Steps | Expected |
|-----------|-------|----------|
| Pinch zoom | Pinch outward on photo | Photo zooms in smoothly; max zoom limit enforced |
| Double-tap zoom | Double-tap photo | Zooms to preset level; double-tap again zooms out |
| Swipe dismiss | Swipe down on full-screen photo | Photo dismisses with animation; returns to grid |
| Gesture conflict | Pinch while swiping | One gesture recognized; no crash |
| Accessibility | Enable VoiceOver/TalkBack | Alternative zoom controls available |

### Worked Example 2: Compatibility Matrix

**Scenario:** An e-commerce app must work on 8 test devices.

| Device | OS | Test Priority | Focus |
|--------|-----|---------------|-------|
| iPhone 15 Pro | iOS 17 | High | Latest iOS features, Dynamic Island |
| iPhone SE (2022) | iOS 17 | High | Small screen, Touch ID |
| iPad Air | iPadOS 17 | Medium | Tablet layout, split-screen |
| Samsung S23 | Android 14 | High | Flagship Android, high res |
| Pixel 7 | Android 14 | High | Vanilla Android, fast updates |
| Xiaomi Redmi 12 | Android 13 | Medium | Budget device, MIUI |
| Samsung Galaxy Tab | Android 13 | Medium | Tablet layout |
| OnePlus 11 | Android 14 | Low | OxygenOS differences |

### Worked Example 3: Deep Link Validation

**Scenario:** Marketing sends email with link to product page.

| Context | Link | Expected Behavior |
|---------|------|-------------------|
| App installed | `https://shop.example.com/products/123` | Opens app to product 123 |
| App not installed | Same link | Opens mobile web page with "Get the app" banner |
| App installed, user logged out | Same link | Opens app, prompts login, then shows product |
| Invalid product ID | `.../products/99999` | App shows "Product not found" gracefully |
