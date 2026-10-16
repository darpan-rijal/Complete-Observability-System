
const express = require("express");
const client = require("prom-client");
const pino = require("pino");
const pinoHttp = require("pino-http");

const app = express();
const PORT = 3000;

// Create application logs
const fs = require("fs");
const path = require("path");

const logDir = path.join(__dirname, "logs");
fs.mkdirSync(logDir, { recursive: true });

const logger = pino(
  { level: "info" },
  pino.destination(path.join(logDir, "app.log"))
);
app.use(pinoHttp({ logger }));

// Collect default system metrics
const register = new client.Registry();
client.collectDefaultMetrics({ register });

// Count HTTP requests
const httpRequests = new client.Counter({
  name: "http_requests_total",
  help: "Total number of HTTP requests",
  labelNames: ["method", "route", "status"],
});

register.registerMetric(httpRequests);

app.use((req, res, next) => {
  res.on("finish", () => {
    httpRequests.inc({
      method: req.method,
      route: req.path,
      status: String(res.statusCode),
    });
  });
  next();
});

// Home endpoint
app.get("/", (req, res) => {
  res.json({
    message: "Elevate Labs Observability Demo",
    status: "running",
  });
});

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "healthy" });
});

// Metrics endpoint for Prometheus
app.get("/metrics", async (req, res) => {
  res.set("Content-Type", register.contentType);
  res.end(await register.metrics());
});

// Example endpoint for testing requests and logs
app.get("/hello", (req, res) => {
  res.json({ message: "Hello from the observability application!" });
});

app.listen(PORT, "0.0.0.0", () => {
  logger.info(`Application running on port ${PORT}`);
});
