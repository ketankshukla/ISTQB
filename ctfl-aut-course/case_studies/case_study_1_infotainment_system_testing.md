# Case Study 1 — Infotainment System Testing

## Scenario

A new infotainment system includes:
- Touchscreen display
- Bluetooth phone connectivity
- Navigation with voice control
- Media player supporting USB, Bluetooth, streaming
- Climate control integration
- ASIL QM classification

## Questions

1. What test levels are appropriate for this system?
2. What functional test areas should be covered?
3. What non-functional tests apply?
4. How does the QM classification affect testing rigor?

## Model Answers

### Q1
Test levels:
- **MIL:** Algorithm development (audio processing, voice recognition)
- **SIL:** Software verification on PC (media player logic, navigation routing)
- **HIL:** Integration testing with real display and simulated vehicle signals
- **Vehicle:** Final validation in prototype vehicle

### Q2
Functional test areas:
- Touchscreen responsiveness and gestures
- Bluetooth pairing, call quality, contact sync
- Navigation route calculation and voice guidance
- Media playback (USB, Bluetooth, streaming) formats and codecs
- Climate control integration and feedback
- System settings and user profiles

### Q3
Non-functional tests:
- Performance: Boot time, screen transition speed
- Stability: Long-duration operation, memory leaks
- Usability: Driver distraction assessment
- Compatibility: Phone models, media formats
- Environmental: Temperature, vibration

### Q4
QM classification effect:
- Standard functional testing (no safety-critical rigor)
- Statement coverage recommended but not mandatory
- Peer review sufficient (no formal inspections)
- Basic traceability (not exhaustive)
- Standard defect tracking (no safety case required)
