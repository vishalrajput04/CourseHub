import bcrypt from "bcryptjs";
import { createAccessToken } from "../config/auth.js";
import { createUser, findUserByEmail } from "../models/userModel.js";

export async function signup(req, res, next) {
  const name = typeof req.body?.name === "string" ? req.body.name.trim() : "";
  const email = typeof req.body?.email === "string" ? req.body.email.trim().toLowerCase() : "";
  const password = typeof req.body?.password === "string" ? req.body.password : "";
  if (!name || !/^\S+@\S+\.\S+$/.test(email) || password.length < 6) {
    return res.status(400).json({ error: "Enter a name, valid email, and password with at least 6 characters." });
  }
  if (await findUserByEmail(email)) {
    return res.status(409).json({ error: "An account with this email already exists." });
  }

  try {
    const user = await createUser({ name, email, passwordHash: await bcrypt.hash(password, 12) });
    return res.status(201).json({ user });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({ error: "An account with this email already exists." });
    }
    return next(error);
  }
}

export async function login(req, res) {
  const email = typeof req.body?.email === "string" ? req.body.email.trim().toLowerCase() : "";
  const password = typeof req.body?.password === "string" ? req.body.password : "";
  const storedUser = await findUserByEmail(email);
  if (!storedUser || !(await bcrypt.compare(password, storedUser.passwordHash))) {
    return res.status(401).json({ error: "Invalid email or password." });
  }
  const user = { id: storedUser.id, name: storedUser.name, email: storedUser.email };
  return res.json({ token: createAccessToken(user), user });
}

export function getCurrentUser(req, res) {
  return res.json({ user: req.user });
}
