import { DatabaseSync } from "node:sqlite";
import { existsSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import "./env.js";

const backendDir = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dataDir = resolve(backendDir, "data");
const databasePath = resolve(backendDir, process.env.DATABASE_PATH || "./data/coursehub.sqlite");

mkdirSync(dirname(databasePath), { recursive: true });
export const db = new DatabaseSync(databasePath);
db.exec("PRAGMA journal_mode = WAL; PRAGMA foreign_keys = ON;");

db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password_hash TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  );
  CREATE TABLE IF NOT EXISTS courses (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL UNIQUE,
    price TEXT NOT NULL,
    duration TEXT NOT NULL,
    rating TEXT NOT NULL,
    details_json TEXT NOT NULL
  );
  CREATE TABLE IF NOT EXISTS enrollments (
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    course_id TEXT NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
    enrolled_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (user_id, course_id)
  );
`);

const detailsByTitle = JSON.parse(readFileSync(resolve(dataDir, "courseDetails.json"), "utf8"));
const courseCatalog = JSON.parse(readFileSync(resolve(dataDir, "courseCatalog.json"), "utf8"));

const slugify = (title) => title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
const saveCourse = db.prepare(`
  INSERT INTO courses (id, title, price, duration, rating, details_json)
  VALUES (@id, @title, @price, @duration, @rating, @details_json)
  ON CONFLICT(id) DO UPDATE SET
    title = excluded.title,
    price = excluded.price,
    duration = excluded.duration,
    rating = excluded.rating,
    details_json = excluded.details_json
`);

for (const { title, price, duration, rating } of courseCatalog) {
  const details = detailsByTitle[title];
  if (!details) throw new Error(`Missing course details for ${title}`);
  saveCourse.run({
    id: slugify(title), title, price, duration, rating,
    details_json: JSON.stringify(details),
  });
}
