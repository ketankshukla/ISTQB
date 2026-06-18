# 📂 Case Study 3 — Mobile App Performance

## 🎬 Scenario

A mobile banking app must launch in < 3 seconds and handle:
- Login: 100% of sessions
- Balance check: 80%
- Transfer: 30%
- Statement download: 10%
- App size < 50MB
- Battery usage < 5% per 10-minute session

## ❓ Questions

1. What non-functional test types apply?
2. How do mobile performance tests differ from web?
3. What client-side metrics should be captured?
4. How would you test battery consumption?

## ✔️ Model Answers

### 🔷 Q1
- **Performance testing:** Launch time, response time
- **Load testing:** Server capacity for concurrent users
- **Volume testing:** Large statement downloads
- **Stress testing:** Network degradation scenarios
- **Compatibility testing:** Different devices and OS versions

### 🔷 Q2
Mobile-specific differences:
- **Network variability:** WiFi, 4G, 5G, offline
- **Device diversity:** Screen sizes, processors, memory
- **Battery impact:** Background processes, GPS usage
- **App size:** Download and storage constraints
- **Gesture-based interactions:** Swipe, tap, scroll performance

### 🔷 Q3
Client-side metrics:
- App launch time (cold, warm, hot start)
- Screen render time
- Memory usage (RAM)
- Storage usage
- CPU utilization
- Network data consumption
- Battery drain rate

### 🔷 Q4
Battery testing approach:
1. Establish baseline (idle device)
2. Run scripted user journey for 10 minutes
3. Measure battery percentage drop
4. Compare against similar apps and requirements
5. Profile power-hungry operations (GPS, animations, network)
