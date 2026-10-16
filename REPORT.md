# Project Report: Complete Observability System

**Organization:** Elevate Labs  
**Project:** Complete Observability System — Metrics, Logs and Traces

## 1. Objective

The objective was to implement a centralized observability solution for a Node.js application using metrics collection, log aggregation, and distributed tracing.

## 2. Implementation

The application was containerized using Docker and Docker Compose. Prometheus was configured to scrape application metrics, Grafana was configured for visualization, Loki and Promtail were used for log aggregation, and Jaeger with OpenTelemetry was configured for distributed tracing.

## 3. Validation and Results

The application endpoints and metrics endpoint were tested. Prometheus target status was checked, application metrics were visualized in Grafana, application logs were queried through Loki, and traces were inspected in Jaeger.

Screenshots and supporting outputs are included in the `evidence/` directory.

## 4. Challenges and Learning

The implementation involved configuring container networking, service endpoints, telemetry exporters, log collection, and data sources. It reinforced the importance of correlating metrics, logs, and traces when troubleshooting application behavior.

## 5. Conclusion

The project demonstrates the integration of three major observability signals in a containerized environment. The completed setup provides a foundation for monitoring application performance and investigating errors.

