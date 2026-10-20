import Course from "./course.js";

const toCourseSummary = (course) => ({
  id: course._id,
  title: course.title,
  price: course.price,
  duration: course.duration,
  rating: course.rating,
  description: course.details?.description,
});

export async function findAllCourses() {
  const courses = await Course.find().sort({ title: 1 }).lean();
  return courses.map(toCourseSummary);
}

export async function findCourseById(id) {
  const course = await Course.findById(id).lean();
  if (!course) return null;
  const { _id, details, ...metadata } = course;
  return { ...metadata, id: _id, ...details };
}

export async function courseExists(id) {
  return Boolean(await Course.exists({ _id: id }));
}
