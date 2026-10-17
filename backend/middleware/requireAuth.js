import { verifyAccessToken } from "../config/auth.js";
import { findPublicUserById } from "../models/userModel.js";

export async function requireAuth(req, res, next) {
  const token = req.get("authorization")?.match(/^Bearer\s+(.+)$/i)?.[1];
  if (!token) return res.status(401).json({ error: "Please log in to continue." });

  let payload;
  try {
    payload = verifyAccessToken(token);
  } catch {
    return res.status(401).json({ error: "Your session is invalid or expired." });
  }

  try {
    req.user = await findPublicUserById(payload.sub);
    if (!req.user) return res.status(401).json({ error: "Your session is no longer valid." });
    return next();
  } catch (error) {
    return next(error);
  }
}
