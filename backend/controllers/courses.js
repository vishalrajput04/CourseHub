import { findAllCourses, findCourseById } from "../models/courses.js";

export async function listCourses(_req, res) {
  return res.json({ courses: await findAllCourses() });
}

export async function getCourse(req, res) {
  const course = await findCourseById(req.params.id);
  if (!course) return res.status(404).json({ error: "Course not found." });
  return res.json({ course });
}
