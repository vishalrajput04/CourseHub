import { courseExists } from "../models/courseModel.js";
import {
  createEnrollment,
  findEnrollmentsByUserId,
  isEnrolled,
} from "../models/enrollmentModel.js";

export function listMyCourses(req, res) {
  return res.json({ courses: findEnrollmentsByUserId(req.user.id) });
}

export function enrollInCourse(req, res) {
  const { id: courseId } = req.params;
  if (!courseExists(courseId)) return res.status(404).json({ error: "Course not found." });
  if (isEnrolled(req.user.id, courseId)) {
    return res.status(409).json({ error: "You are already enrolled in this course." });
  }
  createEnrollment(req.user.id, courseId);
  return res.status(201).json({ message: "Enrollment successful." });
}
