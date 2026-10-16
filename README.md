# Complete Observability System: Metrics, Logs and Traces

## Project Overview

This project implements a containerized observability system for a Node.js application. It combines metrics, centralized logs, and distributed tracing to make application behavior easier to monitor and troubleshoot.

## Technology Stack

- Docker and Docker Compose
- Node.js and Express
- Prometheus for metrics collection
- Grafana for visualization
- Loki and Promtail for log aggregation
- Jaeger and OpenTelemetry for distributed tracing

## Architecture

The Node.js application exposes metrics through `/metrics`, provides a health endpoint, and generates application logs and traces. Prometheus scrapes the metrics endpoint. Promtail ships application logs to Loki. OpenTelemetry exports traces to Jaeger. Grafana provides a dashboard and access to the configured data sources.

## Run the Project

```bash
docker compose up -d --build
docker compose ps
```

Stop the services with:

```bash
docker compose down
```

## Service URLs

- Application: http://localhost:3000
- Application health: http://localhost:3000/health
- Metrics: http://localhost:3000/metrics
- Prometheus: http://localhost:9090
- Grafana: http://localhost:3000
- Jaeger: http://localhost:16686

**Note:** If the application and Grafana both use port 3000, verify the actual host port mappings in `docker-compose.yml` and correct this list accordingly.

## Evidence

The `evidence/` directory contains service status, configuration verification output, application log samples, the exported Grafana dashboard, and screenshots of metrics, logs, and traces.
