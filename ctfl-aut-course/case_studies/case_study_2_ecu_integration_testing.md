# 📂 Case Study 2 — ECU Integration Testing

## 🎬 Scenario

An Adaptive Cruise Control (ACC) ECU integrates with:
- Radar sensor (object detection)
- Engine ECU (throttle control)
- Brake ECU (deceleration)
- Instrument cluster (display)
- ASIL C classification

## ❓ Questions

1. What integration test levels apply?
2. What communication protocols need testing?
3. What fault scenarios should be tested?
4. What coverage is required for ASIL C?

## ✔️ Model Answers

### 🔷 Q1
Integration levels:
- **Component integration:** ACC ECU with individual ECUs (SIL level)
- **System integration:** All ECUs on vehicle network (HIL level)
- **Vehicle integration:** Real vehicle with all components

### 🔷 Q2
Communication protocol testing:
- **CAN:** Message timing, priority, error handling
- **Signal integrity:** Correct scaling, range validation
- **Network management:** Startup, shutdown, sleep/wake
- **Diagnostic communication:** DTC reporting, UDS services

### 🔷 Q3
Fault scenarios:
- Radar sensor failure (degraded mode)
- Communication loss with engine ECU (limp mode)
- Brake ECU fault (ACC disable)
- Invalid sensor data (plausibility check)
- Network overload (message dropping)

### 🔷 Q4
ASIL C coverage requirements:
- **Statement coverage:** Required (100%)
- **Branch coverage:** Required (100%)
- **MC/DC coverage:** Required (100%)
- **Interface coverage:** All ECU interfaces tested
- **Fault injection:** Safety mechanism verification
