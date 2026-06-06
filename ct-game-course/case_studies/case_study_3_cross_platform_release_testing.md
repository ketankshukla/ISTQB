# Case Study 3 — Cross-Platform Release Testing

## Context

You are the Release QA Manager for a puzzle-platformer launching on 5 platforms.

**Game:** Single-player puzzle-platformer with level editor
**Platforms:** Nintendo Switch, PlayStation, Xbox, PC (Steam), Mobile (iOS/Android)
**Business Model:** Premium (no IAP except level editor DLC)
**Rating Target:** ESRB E / PEGI 3

---

## Task 1: Platform Test Matrix

**Question:** Define test coverage per platform.

**Model Answer:**

| Platform | Unique Tests | Priority |
|----------|-------------|----------|
| **Switch** | Sleep/wake, handheld vs docked, Joy-Con | High (cert required) |
| **PlayStation** | TRC, trophies, DualSense features | High (cert required) |
| **Xbox** | XR, achievements, Quick Resume | High (cert required) |
| **PC** | Min/rec spec, controller variety, windowed mode | High (largest audience) |
| **Mobile** | Touch controls, orientation, interruptions, battery | High (cert required) |

---

## Task 2: Level Editor DLC Testing

**Question:** Test level editor DLC.

**Model Answer:**

| Test | Verification |
|------|-------------|
| **Purchase flow** | Platform store → unlock editor |
| **Editor features** | Place, move, delete, test, publish |
| **User levels** | Download, play, rate, report |
| **Cross-platform** | Level created on Switch playable on PC |
| **Moderation** | Inappropriate content filtered |
| **Offline** | Created levels saved locally |

**Monetization Tests:**
| Check | Result |
|-------|--------|
| Price display | Correct regional currency |
| Restore purchase | Works on reinstall |
| Family sharing | Follows platform policy |
| Refund | Platform handles per policy |

---

## Task 3: Release Schedule

**Question:** Plan release and patch strategy.

**Model Answer:**

| Phase | Date | Platforms | Activity |
|-------|------|-----------|----------|
| **Soft launch** | Week -4 | Mobile only | Gather metrics, fix critical bugs |
| **Day 0** | Launch | All | Monitor crash rates, player feedback |
| **Day 1 patch** | Launch + 1 day | All | Critical fixes discovered at launch |
| **Week 1** | +1 week | All | Balance tweaks, first content update |
| **Month 1** | +1 month | All | DLC launch, major patch |

**Patch Testing:**
| Patch Type | Test Focus |
|------------|-----------|
| **Hotfix** | Quick regression on specific fix |
| **Content update** | New levels, regression on old saves |
| **Platform update** | Cert requirements, SDK update |

---

## Task 4: Post-Launch Monitoring

**Question:** Define post-launch QA activities.

**Model Answer:**

| Metric | Target | Action if Missed |
|--------|--------|------------------|
| **Crash rate** | < 1% | Investigate top crash signatures |
| **Average rating** | > 4.0 / 5 | Address common complaints |
| **Completion rate** | > 50% | Difficulty too high? Tutorial issue? |
| **DLC attach rate** | > 10% | Marketing or pricing adjustment |
| **Support tickets** | < 5% of players | FAQ, patch known issues |

**Live Testing:**
- New content: Full feature + regression testing
- Events: Time-limited, verify start/end times
- Balance: A/B test if applicable
- Economy: Verify no exploits in user-created content
