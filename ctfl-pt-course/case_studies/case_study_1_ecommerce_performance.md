# Case Study 1 — E-Commerce Performance Testing

## Scenario

An e-commerce platform expects 5,000 concurrent users during a holiday sale. The platform must handle:
- Browse: 70% of users
- Search: 20% of users  
- Checkout: 10% of users
- Response time < 2 seconds (95th percentile)
- Error rate < 0.1%

## Questions

1. What test types should be planned for this scenario?
2. Design a workload model for the peak load.
3. Identify key metrics to monitor during execution.
4. If CPU reaches 90% at 3,000 users, what actions should be taken?

## Model Answers

### Q1
- **Load testing:** Verify expected 5,000 user capacity
- **Spike testing:** Simulate sale opening traffic surge
- **Endurance testing:** Verify stability over 24-hour sale period
- **Stress testing:** Find breaking point beyond 5,000 users

### Q2
| Parameter | Value |
|-----------|-------|
| Concurrent users | 5,000 |
| Think time | 5-15 seconds |
| Transaction mix | Browse 70%, Search 20%, Checkout 10% |
| Ramp-up | 500 users/minute |
| Duration | 2 hours |

### Q3
- Response time (avg, 95th percentile)
- Throughput (transactions per second)
- Error rate
- CPU, memory, disk, network utilization
- Database query performance

### Q4
- **Immediate:** Stop ramp-up; investigate if expected or abnormal
- **Analysis:** Identify bottleneck (likely CPU-bound)
- **Recommendation:** Optimize code, add caching, or scale infrastructure
- **Retest:** Verify fix with same workload
