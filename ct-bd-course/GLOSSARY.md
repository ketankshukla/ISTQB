# CT-BD Glossary

## Chapter 1 — Introduction to Big Data Testing

**Big Data:** Datasets that are too large or complex for traditional data processing applications to handle.

**5 Vs of Big Data:**
- **Volume:** The scale of data (terabytes to petabytes)
- **Velocity:** The speed at which data is generated and processed
- **Variety:** Different types of data (structured, semi-structured, unstructured)
- **Veracity:** The quality, accuracy, and trustworthiness of data
- **Value:** The usefulness and insights derived from data

**Structured Data:** Data with a defined schema (e.g., relational database tables)

**Semi-Structured Data:** Data that doesn't conform to a rigid schema but has some structure (e.g., JSON, XML, log files)

**Unstructured Data:** Data with no predefined structure (e.g., text, images, video, social media posts)

**Data Lake:** A storage repository that holds vast amounts of raw data in its native format

**Data Warehouse:** A structured repository of integrated data optimized for reporting and analysis

## Chapter 2 — Big Data Architecture and Components

**Hadoop:** An open-source framework for distributed storage and processing of large datasets

**HDFS (Hadoop Distributed File System):** The primary storage system used by Hadoop applications

**MapReduce:** A programming model for processing large datasets in parallel across a cluster

**YARN (Yet Another Resource Negotiator):** Hadoop's cluster resource management system

**Spark:** An open-source unified analytics engine for large-scale data processing

**RDD (Resilient Distributed Dataset):** Spark's fundamental data structure — an immutable distributed collection of objects

**DataFrame:** A distributed collection of data organized into named columns (Spark)

**NoSQL:** A category of database systems that don't use the relational model (e.g., MongoDB, Cassandra, HBase)

**ETL (Extract, Transform, Load):** A process that extracts data from sources, transforms it, and loads it into a target

**ELT (Extract, Load, Transform):** A process that extracts data, loads it raw, then transforms it in the target system

**Data Ingestion:** The process of obtaining and importing data for immediate use or storage

**Data Processing:** Transforming raw data into meaningful information through computation

**Data Storage:** Persisting data in a repository for future access

## Chapter 3 — Data Quality Testing

**Data Quality:** The degree to which data meets the requirements of its intended use

**Completeness:** The proportion of data that is present vs. expected (no missing values)

**Accuracy:** The degree to which data correctly represents the real-world entity

**Consistency:** The degree to which data values are uniform across datasets and over time

**Timeliness:** The degree to which data is available when needed and up to date

**Validity:** The degree to which data conforms to defined formats, types, and ranges

**Uniqueness:** The degree to which there are no unintended duplicate records

**Data Profiling:** The process of examining, analyzing, and reviewing data to understand its structure, content, and quality

**Data Cleansing:** The process of detecting and correcting (or removing) corrupt or inaccurate records

**Schema-on-Read:** Data is stored raw and structure is applied when reading (e.g., data lakes)

**Schema-on-Write:** Data structure is defined before writing (e.g., relational databases)

## Chapter 4 — Functional Testing of Big Data Applications

**ETL Testing:** Testing the extract, transform, and load processes for correctness

**Transformation Rule:** A business rule that defines how source data is converted to target data

**Source-to-Target Mapping (STM):** Documentation showing how source fields map to target fields with transformation rules

**Reconciliation:** Comparing data between source and target to ensure they match

**Data Lineage:** The ability to trace data from its origin through all transformations

**Incremental Load:** Loading only new or changed data since the last load

**Full Load:** Loading all data from source to target, typically replacing existing target data

**Business Intelligence (BI):** Technologies and strategies used for data analysis and management of business information

**OLAP (Online Analytical Processing):** Computing method that allows users to easily extract and query data for business intelligence

## Chapter 5 — Performance and Scalability Testing

**Benchmark:** A standard against which the performance of a system can be measured

**Throughput:** The amount of data processed per unit of time (e.g., GB/hour, records/second)

**Latency:** The delay between data ingestion and its availability for processing or querying

**Scalability:** The ability of a system to handle growing amounts of work by adding resources

**Horizontal Scaling:** Adding more machines to distribute load (scale out)

**Vertical Scaling:** Adding more power (CPU, RAM) to an existing machine (scale up)

**Data Skew:** Uneven distribution of data across nodes in a cluster, causing some nodes to be overloaded

**Shuffle:** The redistribution of data across partitions in distributed processing (e.g., MapReduce shuffle)

## Chapter 6 — Big Data Testing Tools and Automation

**Hive:** A data warehouse infrastructure built on top of Hadoop for providing data summarization, query, and analysis

**Pig:** A high-level platform for creating MapReduce programs used with Hadoop

**Sqoop:** A tool designed for transferring bulk data between Apache Hadoop and structured datastores (e.g., relational databases)

**Flume:** A distributed, reliable, and available service for efficiently collecting, aggregating, and moving large amounts of log data

**Kafka:** A distributed event streaming platform capable of handling trillions of events a day

**Spark SQL:** A module for structured data processing in Spark

**Data Validation Framework:** An automated framework for verifying data correctness and quality rules

**CI/CD (Continuous Integration/Continuous Deployment):** A method to frequently deliver apps to customers by introducing automation into the stages of app development
