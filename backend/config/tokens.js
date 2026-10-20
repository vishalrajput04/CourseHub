import jwt from "jsonwebtoken";
import { jwtSecret } from "./settings.js";

export const createAccessToken = (user) =>
  jwt.sign({ sub: String(user.id) }, jwtSecret, { expiresIn: "7d" });

export const verifyAccessToken = (token) => jwt.verify(token, jwtSecret);
