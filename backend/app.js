import express from "express";
import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import authRoutes from "./routes/authRoutes.js";
import courseRoutes from "./routes/courseRoutes.js";
import enrollmentRoutes from "./routes/enrollmentRoutes.js";
import "./config/database.js";

const backendDir = fileURLToPath(new URL(".", import.meta.url));
const app = express();
app.disable("x-powered-by");
app.use(express.json({ limit: "1mb" }));

app.get("/api/health", (_req, res) => res.json({ status: "ok" }));
app.use("/api/auth", authRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/me/courses", enrollmentRoutes);

app.use((error, _req, res, _next) => {
  console.error(error);
  if (res.headersSent) return;
  if (error.type === "entity.parse.failed") return res.status(400).json({ error: "Invalid JSON request body." });
  return res.status(500).json({ error: "Something went wrong on the server." });
});

const frontendDist = resolve(backendDir, "../frontend/dist");
if (existsSync(frontendDist)) {
  app.use(express.static(frontendDist));
  app.get("*splat", (_req, res) => res.sendFile(resolve(frontendDist, "index.html")));
}

export default app;
