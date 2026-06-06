# Chapter 6 — Test Automation and Tools: Lessons

---

## 6.1 Automated Gameplay Testing

### What Can Be Automated

| Area | Automation Approach |
|------|-------------------|
| **Unit tests** | Code-level logic (combat formulas, economy) |
| **Integration tests** | Component interactions (inventory + save system) |
| **Smoke tests** | Boot, load level, basic movement |
| **Screenshot comparison** | Visual regression (UI, rendering) |
| **Performance benchmarks** | FPS, memory, loading times |
| **Build verification** | Automated BVT suite |

### What Remains Manual

| Area | Reason |
|------|--------|
| **Gameplay feel** | Requires human judgment (fun, fairness) |
| **Exploratory testing** | Unscripted discovery of emergent bugs |
| **UX evaluation** | Player experience assessment |
| **Accessibility** | Screen reader, physical testing |
| **Compliance** | Platform-specific nuances |

---

## 6.2 Test Frameworks

### Unity Test Framework

| Feature | Use |
|---------|-----|
| **Edit Mode tests** | Test pure logic without running scene |
| **Play Mode tests** | Test in running scene |
| **Integration with CI** | Run in batch mode |

```
[Test]
public void TestDamageCalculation()
{
    var player = new Player();
    player.TakeDamage(10);
    Assert.AreEqual(90, player.Health);
}
```

### Unreal Automation Tests

| Feature | Use |
|---------|-----|
| **Unit tests** | Test individual classes/functions |
| **Feature tests** | Test gameplay features |
| **Stress tests** | Performance under load |

### Custom Frameworks

| Need | Approach |
|------|----------|
| **Bot players** | AI-driven agents that play the game |
| **Scenario scripting** | Record and replay player actions |
| **Headless testing** | Run without rendering for speed |

---

## 6.3 Screenshot Comparison

### Process

1. Capture reference screenshot from known-good build
2. Capture candidate screenshot from test build
3. Pixel-by-pixel comparison with tolerance
4. Flag differences for review

### Use Cases

| Use Case | Tolerance |
|----------|-----------|
| **UI regression** | Strict (0% or minimal) |
| **Particle effects** | Higher (timing-dependent) |
| **Lighting** | Medium (platform variance) |

### Challenges

| Challenge | Mitigation |
|-----------|-----------|
| **Anti-aliasing differences** | Compare at fixed resolution |
| **Animation timing** | Freeze animation or compare sequences |
| **GPU differences** | Standardize on reference hardware |

---

## 6.4 CI/CD for Games

### Pipeline Stages

```
Source Commit → Build → Unit Tests → Smoke Tests → Artifact → Deploy to Test
```

### Automated Checks

| Stage | Check |
|-------|-------|
| **Build** | Compiles for all platforms |
| **Unit tests** | Logic tests pass |
| **Static analysis** | Code quality, MISRA-style |
| **Smoke tests** | Boot, basic functionality |
| **Asset validation** | Missing textures, broken references |

### Deployment

| Environment | Trigger |
|-------------|---------|
| **Dev** | Every commit |
| **QA** | Nightly or per milestone |
| **Staging** | Release candidate |

---

## 6.5 Telemetry and Analytics

### What to Test

| Event | Verification |
|-------|-------------|
| **Player deaths** | Location, cause, timestamp |
| **Level completion** | Time, score, attempts |
| **Purchase events** | Item, price, success/failure |
| **Crashes** | Stack trace, device info |
| **Performance** | FPS drops, memory spikes |

### Analytics Testing

| Check | Method |
|-------|--------|
| **Event fired** | Verify correct trigger |
| **Event data** | Correct parameters |
| **No duplicates** | Idempotency |
| **Privacy** | No PII sent |

---

## 6.6 Bug Tracking

### Workflow

```
New → Triaged → Assigned → In Progress → Fixed → Verified → Closed
          ↓
      Rejected / Duplicate / Cannot Reproduce
```

### Good Bug Reports

| Element | Description |
|---------|-------------|
| **Summary** | One-line description |
| **Steps to reproduce** | Numbered, minimal |
| **Expected result** | What should happen |
| **Actual result** | What actually happens |
| **Environment** | Build, platform, hardware |
| **Attachments** | Screenshot, video, logs |
| **Severity** | Critical, major, minor, trivial |
| **Frequency** | Always, sometimes, once |

### Metrics

| Metric | Purpose |
|--------|---------|
| **Open bug count** | Overall backlog |
| **Bug arrival rate** | New bugs per day |
| **Bug fix rate** | Closed bugs per day |
| **Reopen rate** | Fixes that failed verification |
| **Age of open bugs** | Stale issue identification |

---

## 6.7 Manual vs Automated Balance

| Factor | Automate | Manual |
|--------|----------|--------|
| **Repetitive** | Yes | No |
| **Deterministic** | Yes | No |
| **Requires judgment** | No | Yes |
| **Changes frequently** | No | Yes |
| **Safety-critical** | Yes | Also yes (complementary) |

---

## Worked Examples

### Worked Example 1: Automation ROI

**Scenario:** Evaluate automating a smoke test.

| Factor | Analysis |
|--------|----------|
| **Frequency** | Every build (daily) |
| **Duration** | 10 minutes manual, 5 minutes automated |
| **Setup cost** | 8 hours to automate |
| **Break-even** | ~80 builds |
| **Decision** | Automate — frequent, stable, saves time |

### Worked Example 2: Screenshot Regression

**Scenario:** Detect UI regression in inventory screen.

| Step | Action |
|------|--------|
| 1 | Record reference: open inventory with 5 items |
| 2 | Run test: open inventory with 5 items on new build |
| 3 | Compare: 0.2% difference in item icon position |
| 4 | Review: Accept (intentional art update) or Reject (regression) |

### Worked Example 3: Telemetry Validation

**Scenario:** Verify death event in analytics.

| Check | Result |
|-------|--------|
| Event name | "player_death" |
| Parameters | level="3-2", cause="fall", position=(120, 45) |
| Timestamp | Valid Unix timestamp |
| Session ID | Matches current session |
| Duplicates | None |
