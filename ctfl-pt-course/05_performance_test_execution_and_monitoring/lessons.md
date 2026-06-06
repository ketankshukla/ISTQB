# Chapter 5 — Performance Test Execution and Monitoring: Lessons

---

## 5.1 Execution Phases

### Pre-Test

| Activity | Verification |
|----------|-------------|
| **Environment check** | All systems running correctly |
| **Data verification** | Test data loaded and valid |
| **Script validation** | Smoke test passes |
| **Baseline capture** | Measure without load |
| **Monitoring setup** | All tools collecting data |

### During Test

| Activity | Verification |
|----------|-------------|
| **Load application** | Gradual ramp-up as planned |
| **Real-time monitoring** | Watch for unexpected behavior |
| **Data collection** | Metrics captured continuously |
| **Anomaly detection** | Identify outliers or errors |

### Post-Test

| Activity | Verification |
|----------|-------------|
| **Data preservation** | Save all results |
| **Environment reset** | Return to known state |
| **Cleanup** | Remove test data if needed |
| **Log collection** | Gather application and system logs |

---

## 5.2 Monitoring Tools

| Tool Type | Purpose | Examples |
|-----------|---------|----------|
| **Load generator** | Create virtual users | JMeter, LoadRunner, Gatling |
| **APM** | Application performance | New Relic, Dynatrace, AppDynamics |
| **System monitor** | OS-level metrics | PerfMon, top, vmstat |
| **Database monitor** | Query performance | pgBadger, SQL Profiler |
| **Network analyzer** | Network traffic | Wireshark, tcpdump |

---

## 5.3 Resource Metrics

### CPU Metrics

| Metric | Description | Healthy |
|--------|-------------|---------|
| **Utilization** | % of CPU in use | < 70% |
| **Queue length** | Processes waiting | < 2x cores |
| **Context switches** | CPU switching tasks | Stable |

### Memory Metrics

| Metric | Description | Healthy |
|--------|-------------|---------|
| **Utilization** | % of memory used | < 80% |
| **Paging** | Disk swapping | Minimal |
| **Growth trend** | Over time | Flat |

### Disk Metrics

| Metric | Description | Healthy |
|--------|-------------|---------|
| **I/O operations** | Reads/writes per second | Within capacity |
| **Queue depth** | Pending operations | < 2 |
| **Latency** | Response time | < 10 ms |

### Network Metrics

| Metric | Description | Healthy |
|--------|-------------|---------|
| **Bandwidth** | % of capacity used | < 70% |
| **Latency** | Round-trip time | < 100 ms |
| **Packet loss** | Dropped packets | < 0.1% |

---

## 5.4 Anomaly Detection

| Anomaly | Possible Cause | Action |
|---------|-------------|--------|
| **Sudden response time spike** | Garbage collection, backup job | Pause test, investigate |
| **Error rate jump** | Server crash, database lock | Stop test, check logs |
| **Memory climb** | Memory leak | Note for analysis |
| **CPU drop** | Process crash | Verify system health |

---

## 5.5 Environment Management

| Consideration | Best Practice |
|---------------|-------------|
| **Isolation** | No other tests or users |
| **Consistency** | Same environment for each run |
| **Documentation** | Record all configuration |
| **Contingency** | Plan for test interruption |

---

## Worked Examples

### Worked Example 1: Execution Checklist

| Phase | Check | Status |
|-------|-------|--------|
| Pre-test | Environment ready | Pass |
| Pre-test | Monitoring active | Pass |
| During | Load at target | Pass |
| During | No errors | Pass |
| Post-test | Data saved | Pass |
| Post-test | Environment reset | Pass |

### Worked Example 2: Metric Interpretation

| Metric | Value | Assessment |
|--------|-------|------------|
| Response time | 500 ms avg | Acceptable |
| CPU | 85% | Warning |
| Memory | 60%, flat | Good |
| Disk queue | 5 | Bottleneck |

### Worked Example 3: Anomaly Response

| Time | Observation | Action |
|------|-------------|--------|
| 10:05 | Error rate jumps to 5% | Stop test |
| 10:06 | Check logs — database deadlock found | Restart database |
| 10:15 | Resume test | Continue |
