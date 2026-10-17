import { db } from "../config/database.js";

export const findUserByEmail = (email) =>
  db.prepare("SELECT id, name, email, password_hash FROM users WHERE email = ?").get(email);

export const findPublicUserById = (id) =>
  db.prepare("SELECT id, name, email FROM users WHERE id = ?").get(id);

export const createUser = ({ name, email, passwordHash }) => {
  const result = db.prepare(
    "INSERT INTO users (name, email, password_hash) VALUES (?, ?, ?)",
  ).run(name, email, passwordHash);
  return findPublicUserById(result.lastInsertRowid);
};
