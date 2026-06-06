# Chapter 5 — Platform and Compliance Testing: Lessons

---

## 5.1 Platform Holder Requirements

### Sony (PlayStation) — TRC

| Category | Examples |
|----------|----------|
| **Boot and load** | Title screen within 30 sec |
| **Save data** | Proper icon, description, no corruption |
| **Trophies** | All implemented, unlock correctly |
| **Controller** | Proper button icons, vibration support |
| **Error handling** | Graceful network disconnection |
| **System UI** | Pause menu accessible, system events handled |

### Microsoft (Xbox) — XR

| Category | Examples |
|----------|----------|
| **Game boot** | Loads to interactive state quickly |
| **Achievements** | Gamerscore, unlock rules correct |
| **Presence** | Rich presence, activity feed |
| **Store** | Trial/demo support if applicable |
| **Networking** | NAT traversal, party chat |
| **Accessibility** | Narrator support where required |

### Nintendo — Lotcheck

| Category | Examples |
|----------|----------|
| **Boot** | Nintendo logo displayed correctly |
| **Controller** | All supported controllers work |
| **Sleep mode** | Game handles console sleep/wake |
| **eShop** | Correct metadata, pricing |
| **Localization** | All supported languages present |

---

## 5.2 Certification Process

### Steps

```
Internal Testing → Pre-Cert Testing → Submission → Platform Review → Pass/Fail → Release
```

### Pre-Cert Checklist

| Item | Verification |
|------|-------------|
| **All TRC/XR/Lotcheck items** | Pass internally |
| **No critical/blocker bugs** | Bug triage complete |
| **Build stability** | Smoke test on final build |
| **Metadata correct** | Title, description, screenshots, trailers |
| **Pricing set** | Regional pricing confirmed |

### Submission

| Deliverable | Description |
|-------------|-------------|
| **Game build** | Final release candidate |
| **Metadata** | Store page content |
| **Age rating** | ESRB, PEGI, CERO certificates |
| **Trailers/screenshots** | Marketing assets |
| **Manual** | Digital manual if required |
| **Rights documentation** | Music, IP licenses |

---

## 5.3 Content Ratings

### ESRB (North America)

| Rating | Description |
|--------|-------------|
| **E (Everyone)** | Suitable for all ages |
| **E10+** | Ages 10+ |
| **T (Teen)** | Ages 13+ |
| **M (Mature)** | Ages 17+ |
| **AO (Adults Only)** | Adults 18+ |

### PEGI (Europe)

| Rating | Description |
|--------|-------------|
| **3** | Suitable for all ages |
| **7** | May contain frightening scenes |
| **12** | Mild violence, suggestive themes |
| **16** | Realistic violence, drugs |
| **18** | Graphic violence, adult themes |

### CERO (Japan)

| Rating | Description |
|--------|-------------|
| **A** | All ages |
| **B** | Ages 12+ |
| **C** | Ages 15+ |
| **D** | Ages 17+ |
| **Z** | Adults only |

### Rating Testing

| Content | Check |
|---------|-------|
| **Violence** | Matches declared rating |
| **Language** | Profanity level appropriate |
| **Sexual content** | Within rating boundaries |
| **Gambling** | Real-money gambling = AO/18/Z |
| **Drugs** | Real drug use affects rating |

---

## 5.4 Online Services Testing

### PlayStation Network

| Feature | Test |
|---------|------|
| **PSN sign-in** | Account linking |
| **Trophies** | Sync to PSN |
| **Leaderboards** | Scores upload and display |
| **Multiplayer** | Matchmaking, invites |

### Xbox Live

| Feature | Test |
|---------|------|
| **Xbox sign-in** | Profile integration |
| **Achievements** | Unlock and sync |
| **Cloud saves** | Cross-device progress |
| **Multiplayer** | Xbox Live sessions |

### Nintendo Online

| Feature | Test |
|---------|------|
| **Nintendo Account** | Link and sync |
| **Online play** | Nintendo Online subscription check |
| **Save cloud backup** | Upload/download |

---

## 5.5 Store and Monetization

### In-App Purchases

| Type | Test |
|------|------|
| **Consumable** | Currency, energy — depletes on use |
| **Non-consumable** | Remove ads, unlock levels — persists |
| **Subscription** | Recurring, cancellation handling |
| **DLC** | Download, install, access |

### Store Testing

| Check | Verification |
|-------|-------------|
| **Pricing display** | Correct regional currency |
| **Purchase flow** | Complete without error |
| **Receipt validation** | Server-side verification |
| **Restore purchases** | On reinstall, new device |
| **Refund handling** | Platform refund policy compliance |

---

## 5.6 Release Management

### Day-One Patch

| Consideration | Test |
|---------------|------|
| **Patch size** | Not too large for players |
| **Mandatory vs optional** | Critical fixes = mandatory |
| **Old client handling** | Reject or force update |
| **Rollback plan** | If patch causes issues |

### Phased Release

| Strategy | Description |
|----------|-------------|
| **Soft launch** | Limited region to gather data |
| **Regional stagger** | Release by timezone |
| **Platform stagger** | Console first, then PC |

---

## Worked Examples

### Worked Example 1: TRC Checklist

**Scenario:** Prepare PlayStation cert pass.

| TRC Item | Test | Status |
|----------|------|--------|
| Title screen in 30s | Cold boot timing | Pass |
| Trophy icons present | Check all trophy slots | Pass |
| Controller disconnect handled | Unplug during gameplay | Pass |
| Sleep/wake handled | Enter rest mode, resume | Pass |
| System menu accessible | Press PS button | Pass |
| Error messages localized | Trigger network error | Pass |

### Worked Example 2: Rating Compliance

**Scenario:** Verify ESRB T rating.

| Content | Requirement | Test |
|---------|-------------|------|
| Violence | Animated blood, no gore | Blood is red, no dismemberment |
| Language | Mild profanity | No F-word, limited S-word |
| Sexual content | Suggestive only | No nudity, mild innuendo |
| Alcohol | Reference only | No consumption gameplay |

### Worked Example 3: Purchase Flow

**Scenario:** Test mobile game premium currency purchase.

| Step | Verification |
|------|-------------|
| Tap buy button | Store UI opens |
| Select amount | Price displayed in local currency |
| Confirm purchase | Platform payment dialog |
| Payment complete | Currency added to account |
| Receipt | Server validates, no duplication |
| Consume | Spend currency, balance updates |
