# 📘 Chapter 4 — Performance Test Design: Lessons

---

## 🎨 4.1 Test Scenario Design

### 🧪 Scenario Types

| Type | Description | Example |
|------|-------------|---------|
| **Critical path** | Most important user journey | Login → Search → Checkout |
| **Regression** | Previously identified bottleneck | Report generation |
| **Stress point** | Known weak area | Complex database query |
| **Mix** | Representative user activity | 70% browse, 20% search, 10% buy |

### 🎬 Scenario Elements

| Element | Definition |
|---------|------------|
| **Transaction** | Single user action (e.g., login) |
| **Scenario** | Sequence of transactions |
| **Iteration** | Repeating the scenario |
| **Pacing** | Delay between iterations |

---

## 📊 4.2 Metrics and Thresholds

### 📊 Common Metrics

| Metric | Unit | Typical Threshold |
|--------|------|-------------------|
| **Average response time** | ms | < 1,000 ms |
| **90th percentile** | ms | < 2,000 ms |
| **Throughput** | TPS | > target |
| **Error rate** | % | < 0.1% |
| **CPU utilization** | % | < 70% |
| **Memory utilization** | % | < 80% |

### 🧪 Threshold Types

| Type | Description |
|------|-------------|
| **SLA** | Contractual commitment |
| **SLO** | Internal objective |
| **Baseline** | Historical measurement |
| **Target** | Desired performance |

---

## 📐 4.3 Workload Modeling

### 🔷 User Profiles

| Profile | Behavior | Percentage |
|---------|----------|------------|
| **Browser** | Views pages, minimal interaction | 70% |
| **Searcher** | Searches frequently | 20% |
| **Buyer** | Completes purchases | 10% |

### 🔷 Think Time

| Action | Think Time |
|--------|------------|
| **Page view** | 3-7 seconds |
| **Form fill** | 10-30 seconds |
| **Read content** | 15-60 seconds |

### 🔷 Ramp-Up Patterns

| Pattern | Use Case |
|---------|----------|
| **Linear** | Gradual, predictable increase |
| **Step** | Plateaus at intervals |
| **Spike** | Sudden increase |
| **Random** | Realistic variability |

---

## 🎨 4.4 Test Script Design

### ❓ Best Practices

| Practice | Benefit |
|----------|---------|
| **Parameterized data** | Realistic variation |
| **Correlation** | Handle dynamic values (session IDs) |
| **Assertions** | Verify correct responses |
| **Error handling** | Graceful failure recovery |
| **Cleanup** | Reset state between iterations |

---

## 💡 Worked Examples

### 💡 Worked Example 1: Scenario Design

| Scenario | Steps | Weight |
|----------|-------|--------|
| Browse | Home → Category → Product | 70% |
| Search | Home → Search → Results | 20% |
| Purchase | Login → Cart → Checkout → Confirm | 10% |

### 💡 Worked Example 2: Threshold Setting

| Metric | Baseline | Target | SLA |
|--------|----------|--------|-----|
| Response time | 800 ms | 500 ms | 1,000 ms |
| Throughput | 50 TPS | 100 TPS | 80 TPS |
| Error rate | 0.05% | 0.01% | 0.1% |

### 💡 Worked Example 3: Workload Calculation

| Parameter | Value |
|-----------|-------|
| Total users | 10,000 |
| Peak percentage | 30% |
| Peak concurrent users | 3,000 |
| Ramp-up | 10 minutes (300 users/min) |
| Duration | 30 minutes |
