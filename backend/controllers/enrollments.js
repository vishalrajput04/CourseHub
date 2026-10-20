import { courseExists } from "../models/courses.js";
import {
  createEnrollment,
  findEnrollmentsByUserId,
  isEnrolled,
} from "../models/enrollments.js";

export async function listMyCourses(req, res) {
  return res.json({ courses: await findEnrollmentsByUserId(req.user.id) });
}

export async function enrollInCourse(req, res, next) {
  const { id: courseId } = req.params;
  if (!(await courseExists(courseId))) return res.status(404).json({ error: "Course not found." });
  if (await isEnrolled(req.user.id, courseId)) {
    return res.status(409).json({ error: "You are already enrolled in this course." });
  }
  try {
    await createEnrollment(req.user.id, courseId);
    return res.status(201).json({ message: "Enrollment successful." });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({ error: "You are already enrolled in this course." });
    }
    return next(error);
  }
}
