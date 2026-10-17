import { db } from "../config/database.js";

export const findAllCourses = () => db.prepare(
  "SELECT id, title, price, duration, rating, details_json FROM courses ORDER BY rowid",
).all().map(({ details_json, ...course }) => ({
  ...course,
  description: JSON.parse(details_json).description,
}));

export const findCourseById = (id) => {
  const course = db.prepare(
    "SELECT id, title, price, duration, rating, details_json FROM courses WHERE id = ?",
  ).get(id);
  if (!course) return undefined;
  const { details_json, ...metadata } = course;
  return { ...metadata, ...JSON.parse(details_json) };
};

export const courseExists = (id) => Boolean(db.prepare("SELECT 1 FROM courses WHERE id = ?").get(id));
