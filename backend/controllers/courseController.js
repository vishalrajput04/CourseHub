import { findAllCourses, findCourseById } from "../models/courseModel.js";

export function listCourses(_req, res) {
  return res.json({ courses: findAllCourses() });
}

export function getCourse(req, res) {
  const course = findCourseById(req.params.id);
  if (!course) return res.status(404).json({ error: "Course not found." });
  return res.json({ course });
}
