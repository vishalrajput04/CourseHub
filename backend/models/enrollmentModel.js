import { db } from "../config/database.js";

export const findEnrollmentsByUserId = (userId) => db.prepare(`
  SELECT c.id, c.title, c.price, c.duration, c.rating, e.enrolled_at AS enrolledAt
  FROM enrollments e JOIN courses c ON c.id = e.course_id
  WHERE e.user_id = ? ORDER BY e.enrolled_at DESC
`).all(userId);

export const isEnrolled = (userId, courseId) => Boolean(db.prepare(
  "SELECT 1 FROM enrollments WHERE user_id = ? AND course_id = ?",
).get(userId, courseId));

export const createEnrollment = (userId, courseId) => db.prepare(
  "INSERT INTO enrollments (user_id, course_id) VALUES (?, ?)",
).run(userId, courseId);
