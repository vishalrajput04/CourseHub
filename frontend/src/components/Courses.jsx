import { useEffect, useState } from "react";
import CourseCard from "./CourseCard.jsx";
import { apiRequest } from "../lib/api.js";

function Courses() {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiRequest("/courses")
      .then(({ courses: courseList }) => setCourses(courseList))
      .catch((requestError) => setError(requestError.message));
  }, []);

  const paidCourses = courses.filter((course) => course.price !== "Free");
  const freeCourses = courses.filter((course) => course.price === "Free");

  return (
    <main className="max-w-7xl mx-auto px-6 py-10">
      {error && <p className="mb-6 text-red-600">{error}</p>}
      <section className="mb-12">
        <h1 className="text-3xl font-bold mb-6 text-blue-600">Paid Courses</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {paidCourses.map((course) => <CourseCard key={course.id} course={course} />)}
        </div>
      </section>
      <section>
        <h1 className="text-3xl font-bold mb-6 text-green-600">Free Courses</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {freeCourses.map((course) => <CourseCard key={course.id} course={course} />)}
        </div>
      </section>
    </main>
  );
}

export default Courses;
