import "dotenv/config";

export const port = Number(process.env.PORT) || 4000;
export const jwtSecret = process.env.JWT_SECRET || "coursehub-local-development-secret-change-me";

if (process.env.NODE_ENV === "production" && jwtSecret === "coursehub-local-development-secret-change-me") {
  throw new Error("Set JWT_SECRET to a strong random value before running in production.");
}
