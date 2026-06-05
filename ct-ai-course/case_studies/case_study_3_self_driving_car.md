# Case Study 3 — Self-Driving Car Perception System

## Context

You are the Safety Test Lead for AutoDrive, a company developing autonomous vehicle perception systems.

**System:**
- Multi-modal perception: cameras, LiDAR, radar
- Object detection and classification: pedestrians, vehicles, cyclists, traffic signs
- Decision: speed, braking, steering commands
- Operating environment: urban, suburban, highway
- Speed range: 0-120 km/h

**Safety Requirements:**
- Must detect pedestrians in all conditions with 99.9% reliability
- Must not miss stop signs or red lights
- Must handle unexpected obstacles (fallen cargo, animals)
- System must fail safely (stop or hand over to human)

**Testing Challenges:**
- Infinite scenarios possible
- Cannot test every road condition
- Safety-critical — failure can cause death
- Simulation vs. real-world testing trade-offs

## Task 1: Test Strategy for Infinite Scenarios

**Question:** Design a test strategy for a system with infinite possible scenarios.

**Model Answer:**

**Multi-Level Testing Strategy:**

**Level 1: Unit Testing (Simulation)**
- Test individual perception modules in isolation
- Camera object detection accuracy
- LiDAR point cloud processing
- Sensor fusion correctness
- Millions of test cases in simulation

**Level 2: Integration Testing (Simulation)**
- Full perception pipeline with simulated environments
- Test in diverse simulated weather, lighting, traffic
- Edge cases: sudden pedestrian appearance, occluded stop signs

**Level 3: Real-World Track Testing**
- Controlled test track with staged scenarios
- Reproducible tests: pedestrian crossing, vehicle cutting in
- Systematic variation of conditions

**Level 4: Public Road Testing**
- Human safety driver present
- Real-world variation and rare events
- Collect data for continuous improvement

**Level 5: Shadow Mode**
- System runs in production vehicles without controlling
- Compares AI decisions to human driver actions
- Identifies discrepancies for investigation

---

## Task 2: Metamorphic Testing for Perception

**Question:** Design metamorphic relations for testing object detection.

**Model Answer:**

**Metamorphic Relations for Pedestrian Detection:**

| Relation | Transformation | Expected |
|----------|--------------|----------|
| Consistency under time | Same pedestrian in consecutive frames | Detection should persist across frames |
| Consistency under distance | Pedestrian moves closer to camera | Detection should remain, confidence may increase |
| Addition of occlusion | Partially occluded pedestrian | Should still detect (or reduce confidence appropriately) |
| Scene context | Add/remove background cars | Pedestrian detection should not change |
| Lighting change | Day → dusk → night | Detection should degrade gracefully, not disappear suddenly |
| Scale change | Adult → child (smaller) | Should detect child with appropriate confidence |

**Metamorphic Relations for Traffic Sign Recognition:**

| Relation | Transformation | Expected |
|----------|--------------|----------|
| Rotation invariance | Slight rotation of sign | Same classification |
| Scale invariance | Sign at different distances | Same classification |
| Partial occlusion | Tree branch covers part of sign | Same classification or reduced confidence |
| Weather effects | Clean sign → rain-covered sign | Same classification or "uncertain" fallback |
| Context consistency | Same sign type in different locations | Same classification |

---

## Task 3: Adversarial and Robustness Testing

**Question:** Design adversarial tests for the perception system.

**Model Answer:**

**Physical Adversarial Tests:**

| Attack | Method | Risk |
|--------|--------|------|
| Adversarial patch | Stickers on stop sign to misclassify as speed limit | Run stop sign |
| Camouflage | Pedestrian wearing pattern that blends with background | Miss pedestrian |
| Spoofing | Fake lane markings redirecting vehicle | Drive off road |
| Sensor interference | Bright light or laser blinding camera | Temporary blindness |

**Robustness Tests:**

| Condition | Test Scenario | Expected Behavior |
|-----------|---------------|-------------------|
| Heavy rain | Camera obscured, LiDAR noisy | Degrade gracefully, reduce speed, rely on radar |
| Fog | Visibility < 50m | Reduce speed, increase following distance, use fog-penetrating sensors |
| Glare | Direct sunlight into camera | Compensate with other sensors, reduce speed |
| Night | Low light conditions | Use night vision, maintain safe following distance |
| Snow | Covered road markings, obscured signs | Conservative driving, do not rely solely on road markings |
| Construction zone | Temporary signs, unusual markings | Detect anomalies, follow flaggers, conservative speed |

---

## Task 4: Safety Validation Metrics

**Question:** Define metrics to validate the safety of the perception system.

**Model Answer:**

**Detection Metrics:**

| Object | Minimum Detection Rate | Maximum False Negative Rate | Response Time |
|--------|----------------------|---------------------------|---------------|
| Pedestrian (adult) | 99.9% | 0.1% | < 100ms |
| Pedestrian (child) | 99.5% | 0.5% | < 100ms |
| Vehicle (front) | 99.9% | 0.1% | < 50ms |
| Vehicle (crossing) | 99.5% | 0.5% | < 100ms |
| Cyclist | 99.5% | 0.5% | < 100ms |
| Traffic light (red) | 99.99% | 0.01% | < 50ms |
| Stop sign | 99.9% | 0.1% | < 100ms |
| Unexpected obstacle | 95.0% | 5.0% | < 200ms |

**System-Level Safety Metrics:**

| Metric | Target | Measurement |
|--------|--------|-------------|
| Disengagement rate | < 1 per 10,000 km | Human takes over |
| Near-miss rate | 0 | Simulation + real-world tracking |
| Safe fallback | 100% | System must always fail safely |
| Decision latency | < 200ms end-to-end | Perception to action |

---

## Task 5: Simulation vs. Real-World Testing

**Question:** Balance simulation and real-world testing for safety validation.

**Model Answer:**

**Testing Pyramid for Autonomous Vehicles:**

```
    /\  Real-world public road (rare, high cost)
   /  \  Real-world track (moderate frequency)
  /----\  Hardware-in-loop (frequent)
 /      \  Software simulation (very frequent)
/--------\  Unit/component tests (continuous)
```

**Allocation:**

| Test Level | % of Test Cases | Scenarios Covered |
|------------|-----------------|-------------------|
| Unit/component | 60% | Individual modules, edge cases |
| Software simulation | 25% | Full scenarios, weather variation |
| Hardware-in-loop | 10% | Sensor integration, timing |
| Track testing | 4% | Critical scenarios, certification |
| Public road | 1% | Real-world validation, data collection |

**Key Principle:**
- Simulation catches 99% of issues at 1% of the cost
- Real-world testing validates that simulation is realistic
- Both are necessary — neither alone is sufficient

**Validation Chain:**
1. New scenario discovered (from real-world incident or imagination)
2. Add to simulation test suite
3. Fix any failures in simulation
4. Validate fix in simulation (thousands of variations)
5. Confirm with track test
6. Monitor in shadow mode on public roads
7. Deploy if shadow mode confirms improvement
