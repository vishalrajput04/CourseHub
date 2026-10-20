import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import courseRoutes from "./routes/courses.js";
import enrollmentRoutes from "./routes/enrollments.js";
import { connectDatabase } from "./config/database.js";

const app = express();
const allowedOrigins = (process.env.CORS_ORIGIN || "http://localhost:5173")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

app.disable("x-powered-by");
app.use(
  cors({
    origin(origin, callback) {
      const isVercelPreview = origin?.startsWith("https://") && origin.endsWith(".vercel.app");
      callback(null, !origin || allowedOrigins.includes(origin) || isVercelPreview);
    },
  }),
);
app.use(express.json({ limit: "1mb" }));

app.use("/api", (_req, _res, next) => {
  connectDatabase()
    .then(() => next())
    .catch(next);
});

app.get("/api/health", (_req, res) =>
  res.json({ status: "ok", database: "connected" }),
);
app.use("/api/auth", authRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/me/courses", enrollmentRoutes);

app.use((error, _req, res, _next) => {
  console.error(error);
  if (res.headersSent) return;
  if (error.type === "entity.parse.failed")
    return res.status(400).json({ error: "Invalid JSON request body." });
  if (
    error.message === "MONGODB_URI is required to connect to MongoDB." ||
    error.name === "MongooseServerSelectionError"
  ) {
    return res.status(503).json({
      error:
        "The database is unavailable. Check the MongoDB connection settings.",
    });
  }
  return res.status(500).json({ error: "Something went wrong on the server." });
});

export default app;
