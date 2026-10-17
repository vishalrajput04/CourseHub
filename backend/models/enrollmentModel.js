import Enrollment from "./Enrollment.js";

export async function findEnrollmentsByUserId(userId) {
  const enrollments = await Enrollment.find({ userId })
    .sort({ enrolledAt: -1 })
    .populate("courseId")
    .lean();

  return enrollments
    .filter(({ courseId }) => courseId)
    .map(({ courseId, enrolledAt }) => ({
      id: courseId._id,
      title: courseId.title,
      price: courseId.price,
      duration: courseId.duration,
      rating: courseId.rating,
      enrolledAt,
    }));
}

export async function isEnrolled(userId, courseId) {
  return Boolean(await Enrollment.exists({ userId, courseId }));
}

export async function createEnrollment(userId, courseId) {
  return Enrollment.create({ userId, courseId });
}
