# 📘 Chapter 6 — Big Data Testing Tools and Automation: Lessons

---

## 🗃️ 6.1 Data Validation Frameworks

### 🔷 Deequ (AWS)

**What it is:** A data quality library built on Apache Spark for defining and verifying data quality constraints at scale.

**Key features:**
- Define constraints as code
- Automatic metric computation
- Anomaly detection
- Works with Spark DataFrames

**Example:**
```scala
import com.amazon.deequ.{VerificationSuite, CheckBuilders}

VerificationSuite()
  .onData(myDataFrame)
  .addCheck(
    Check(CheckLevel.Error, "Data Quality Check")
      .hasSize(_ == 1000000)
      .hasCompleteness("customer_id", _ >= 0.99)
      .hasUniqueness("email", _ == 1.0)
      .isContainedIn("status", Array("active", "inactive", "pending"))
      .isNonNegative("age")
  )
  .run()
```

**Testing use cases:**
- Automated quality checks in CI/CD
- Continuous monitoring in production
- Anomaly detection (unexpected changes in data distribution)

### 🔷 Great Expectations (Open Source)

**What it is:** A Python framework for data validation that creates "expectations" about data.

**Key features:**
- Human-readable test definitions
- Automatic documentation generation
- Data profiling to suggest expectations
- Integration with Pandas, Spark, SQL databases

**Example:**
```python
import great_expectations as gx

validator.expect_column_values_to_not_null("customer_id")
validator.expect_column_values_to_be_unique("email")
validator.expect_column_values_to_be_between("age", min_value=0, max_value=120)
validator.expect_column_values_to_be_in_set("status", ["active", "inactive", "pending"])

results = validator.validate()
```

**Output:** Pass/fail for each expectation with detailed statistics.

### 🔷 Comparison

| Feature | Deequ | Great Expectations |
|---------|-------|-------------------|
| Primary engine | Spark | Pandas, Spark, SQL |
| Language | Scala/Java, Python | Python |
| Automatic profiling | Yes | Yes |
| Anomaly detection | Yes | Limited |
| Documentation | Basic | Rich (Data Docs) |
| Best for | Spark-centric pipelines | Multi-engine, documentation-heavy |

---

## 🛠️ 6.2 ETL Testing Tools

### 🔷 QuerySurge

**What it is:** A commercial ETL testing tool that automates data validation between source and target systems.

**Key features:**
- Compare source and target data automatically
- Query pair testing (source SQL vs. target SQL)
- Scheduled test execution
- Detailed mismatch reporting

**Example workflow:**
1. Define source query: `SELECT COUNT(*), SUM(sales) FROM source.orders`
2. Define target query: `SELECT COUNT(*), SUM(sales) FROM warehouse.fact_orders`
3. Tool compares results automatically
4. Report shows any variances

### 🔷 iCEDQ

**What it is:** A commercial data validation and reconciliation platform.

**Key features:**
- No-code/low-code rule definition
- Reconciliation across heterogeneous systems
- Data quality dashboards
- Workflow automation

### 🔷 Apache Griffin

**What it is:** An open-source data quality solution for Big Data.

**Key features:**
- Data quality measurement
- Profiling, accuracy, completeness checks
- Visual dashboards
- Integrates with Spark

**Use case:** Define quality rules in a web UI, run via Spark, view results in dashboard.

---

## 🗃️ 6.3 Unit Testing for Big Data

### 🔷 Spark Testing Base

**What it is:** A Scala library for unit testing Spark programs.

**Example:**
```scala
import com.holdenkarau.spark.testing.{SharedSparkContext, RDDComparisons}

class MySparkTest extends FunSuite with SharedSparkContext {
  test("word count") {
    val input = sc.parallelize(Seq("hello world", "hello"))
    val expected = sc.parallelize(Seq(("hello", 2), ("world", 1)))
    val result = WordCount.count(input)
    assert(None === RDDComparisons.compare(expected, result))
  }
}
```

### 🔷 pytest-spark

**What it is:** A Python plugin for testing PySpark code with pytest.

**Example:**
```python
from pyspark.sql import SparkSession
import pytest

@pytest.fixture
def spark():
    return SparkSession.builder.master("local[2]").appName("test").getOrCreate()

def test_filter(spark):
    df = spark.createDataFrame([(1, "a"), (2, "b")], ["id", "val"])
    result = df.filter(df.id > 1).collect()
    assert len(result) == 1
    assert result[0]["val"] == "b"
```

### 🗃️ Test Data Strategies

**Synthetic data generation:**
- Use libraries like Faker, TPC-DS data generators
- Create data with known properties and edge cases
- Keep test datasets small but representative

**Sampled production data:**
- Extract 1% of production data for testing
- Anonymize sensitive fields
- Validate that sample preserves data distribution

**Fixture patterns:**
```python
@pytest.fixture
def sample_orders():
    return [
        {"order_id": 1, "customer_id": 101, "amount": 100.00, "status": "shipped"},
        {"order_id": 2, "customer_id": 102, "amount": 0.00, "status": "pending"},
        {"order_id": 3, "customer_id": 103, "amount": -50.00, "status": "cancelled"},
        {"order_id": 4, "customer_id": None, "amount": 200.00, "status": "shipped"}
    ]
```

---

## 🗃️ 6.4 CI/CD for Big Data Pipelines

### 🗃️ Why CI/CD for Data?

Traditional software CI/CD validates code changes. Data pipeline CI/CD must also validate:
- Code changes (transformations)
- Schema changes
- Data quality
- Performance

### 🔷 Pipeline Stages

```
Code commit → Unit tests → Integration tests → Data quality checks → Performance tests → Deploy
```

### 🗃️ Data Pipeline CI/CD Components

**1. Code Validation:**
- Linting (code style)
- Unit tests for transformations
- Static analysis

**2. Data Quality Gates:**
- Run validation rules on test dataset
- Compare results to expected thresholds
- Fail pipeline if quality drops

**3. Schema Compatibility:**
- Check schema changes don't break downstream consumers
- Validate backward/forward compatibility

**4. Performance Regression:**
- Run benchmark queries
- Compare execution time to baseline
- Fail if performance degrades beyond threshold

### 💡 Example CI/CD Configuration

**GitHub Actions / Jenkins pipeline:**
```yaml
stages:
  - unit_test
  - integration_test
  - data_quality
  - performance
  - deploy

unit_test:
  script:
    - pytest tests/unit/
  
integration_test:
  script:
    - spark-submit --master local tests/integration/test_etl.py
  
data_quality:
  script:
    - great_expectations checkpoint run production_checkpoint
  
performance:
  script:
    - python tests/performance/benchmark.py
    - python tests/performance/compare_to_baseline.py
  
deploy:
  script:
    - databricks deploy
  only:
    - main
```

---

## 🛠️ 6.5 Data Comparison and Reconciliation Tools

### 🗃️ Approaches to Data Comparison

**1. Row-by-row comparison:**
- Compare every row between source and target
- Feasible for small datasets (< 1M rows)
- Tools: Custom SQL, Diff tools

**2. Aggregation-based comparison:**
- Compare counts, sums, distinct counts
- Scales to large datasets
- May miss row-level issues

**3. Hash-based comparison:**
- Compute MD5/SHA hash per row or partition
- Compare hash values
- Fast but requires identical ordering

**4. Sampling-based comparison:**
- Compare random sample of rows
- Scalable but probabilistic
- Confidence level based on sample size

### 🛠️ Tools

**Custom SQL:**
```sql
-- Row count comparison
SELECT 'Source' as system, COUNT(*) as cnt FROM source.orders
UNION ALL
SELECT 'Target', COUNT(*) FROM target.orders;

-- Sum comparison
SELECT 'Source', SUM(amount) FROM source.orders
UNION ALL
SELECT 'Target', SUM(amount) FROM target.orders;
```

**Apache Spark comparison:**
```python
def compare_dataframes(source, target, key_columns):
    joined = source.join(target, key_columns, "full_outer")
    mismatches = joined.filter(
        (source.col1 != target.col1) |
        (source.col2 != target.col2)
    )
    return mismatches.count()
```

---

## ⭐ 6.6 Monitoring and Alerting

### 💎 Data Quality Monitoring

**Continuous monitoring:**
- Run quality checks on production data
- Track metrics over time
- Alert on anomalies or threshold breaches

**Example dashboard:**
```
Metric          | Current | Threshold | Status
----------------|---------|-----------|--------
Completeness    | 97.5%   | 95%       | PASS
Accuracy        | 92.0%   | 90%       | PASS
Uniqueness      | 99.8%   | 99%       | PASS
Latency (min)   | 45      | 60        | PASS
Job duration    | 3.5 hrs | 4 hrs     | PASS
```

### 🔷 Pipeline Monitoring

**What to monitor:**
- Job start/end times and duration
- Records processed per stage
- Error counts and types
- Resource utilization (CPU, memory, disk)
- Data freshness (last update time)

**Alerting rules:**
- Job failed → PagerDuty/Slack alert
- Duration > SLA → Warning alert
- Error rate > threshold → Critical alert
- Data freshness > SLA → Business alert

### 🛠️ Tools

**Apache Atlas:**
- Metadata management and governance
- Data lineage tracking
- Classification and tagging

**DataHub (LinkedIn):**
- Metadata platform
- Data discovery
- Lineage visualization

**Monte Carlo:**
- Data observability platform
- Automatic anomaly detection
- Incident management

**Custom monitoring:**
- Grafana + Prometheus for metrics
- ELK stack (Elasticsearch, Logstash, Kibana) for logs
- Airflow for pipeline orchestration and monitoring

---

## 💡 Worked Examples

### 💡 Worked Example 1: Great Expectations Implementation

**Scenario:** Implement automated data quality checks for a customer table.

**Expectations defined:**
```python
import great_expectations as gx

context = gx.get_context()
validator = context.sources.pandas_default.read_csv("customers.csv")

# Completeness
validator.expect_column_values_to_not_be_null("customer_id")
validator.expect_column_values_to_not_be_null("email", mostly=0.95)

# Validity
validator.expect_column_values_to_be_between("age", 0, 120)
validator.expect_column_values_to_match_regex("email", r"^[^@]+@[^@]+\.[^@]+$")
validator.expect_column_values_to_be_in_set("status", ["active", "inactive", "pending"])

# Uniqueness
validator.expect_column_values_to_be_unique("customer_id")
validator.expect_compound_columns_to_be_unique(["first_name", "last_name", "birth_date"])

# Consistency
validator.expect_column_pair_values_to_be_equal("full_name", "concat_name")

results = validator.validate()
```

**Results:**
```
Expectation                                           | Result | Unexpected %
------------------------------------------------------|--------|-------------
customer_id not null                                  | PASS   | 0%
email not null (95%)                                  | PASS   | 3%
age between 0 and 120                                 | FAIL   | 0.01%
email matches regex                                   | FAIL   | 2%
customer_id unique                                    | PASS   | 0%
status in set                                         | PASS   | 0%
```

### 💡 Worked Example 2: CI/CD Pipeline for Data Pipeline

**Scenario:** A Spark ETL job deployed via CI/CD.

**Pipeline:**
```yaml
# .github/workflows/data-pipeline.yml
name: Data Pipeline CI/CD

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  unit-tests:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Run unit tests
        run: pytest tests/unit/ --spark-master local[2]

  integration-tests:
    runs-on: ubuntu-latest
    steps:
      - name: Run integration tests with test data
        run: spark-submit tests/integration/test_etl.py

  data-quality:
    runs-on: ubuntu-latest
    steps:
      - name: Run Great Expectations
        run: great_expectations checkpoint run test_checkpoint
      - name: Check results
        run: python scripts/check_quality_results.py

  performance:
    runs-on: ubuntu-latest
    steps:
      - name: Run performance benchmark
        run: python tests/performance/benchmark.py
      - name: Compare to baseline
        run: |
          python tests/performance/compare.py \
            --current results/current.json \
            --baseline results/baseline.json \
            --threshold 20%

  deploy:
    needs: [unit-tests, integration-tests, data-quality, performance]
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - name: Deploy to production
        run: databricks deploy
```

**Quality gate logic:**
```python
def check_quality_results(results):
    failed = [r for r in results if r.success == False]
    critical_failed = [r for r in failed if r.expectation_type in CRITICAL_CHECKS]
    
    if critical_failed:
        print(f"CRITICAL: {len(critical_failed)} checks failed")
        exit(1)
    elif failed:
        print(f"WARNING: {len(failed)} non-critical checks failed")
    else:
        print("ALL CHECKS PASSED")
```

### 💡 Worked Example 3: Data Reconciliation Automation

**Scenario:** Automate daily reconciliation between source MySQL and target Hive.

**Reconciliation script:**
```python
from pyspark.sql import SparkSession

def reconcile(source_query, target_query, key_columns, tolerance=0.01):
    spark = SparkSession.builder.appName("Reconciliation").getOrCreate()
    
    source = spark.read.format("jdbc").option("url", mysql_url).option("query", source_query).load()
    target = spark.read.format("hive").option("query", target_query).load()
    
    # Count comparison
    source_count = source.count()
    target_count = target.count()
    count_diff = abs(source_count - target_count) / source_count
    
    # Sum comparison for numeric columns
    numeric_cols = [c for c, t in source.dtypes if t in ("int", "double", "decimal")]
    sum_diffs = {}
    for col in numeric_cols:
        source_sum = source.agg({col: "sum"}).collect()[0][0] or 0
        target_sum = target.agg({col: "sum"}).collect()[0][0] or 0
        if source_sum > 0:
            sum_diffs[col] = abs(source_sum - target_sum) / source_sum
    
    # Report
    report = {
        "source_count": source_count,
        "target_count": target_count,
        "count_variance": count_diff,
        "sum_variances": sum_diffs,
        "status": "PASS" if all(v < tolerance for v in [count_diff] + list(sum_diffs.values())) else "FAIL"
    }
    
    return report

# Daily execution
result = reconcile(
    source_query="SELECT * FROM orders WHERE order_date = CURRENT_DATE - 1",
    target_query="SELECT * FROM warehouse.fact_orders WHERE order_date = CURRENT_DATE - 1",
    key_columns=["order_id"]
)

print(f"Reconciliation: {result['status']}")
if result['status'] == "FAIL":
    send_alert(result)
```
