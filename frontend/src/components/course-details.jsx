import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { apiRequest } from "../lib/api.js";

const CourseDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [result, setResult] = useState(null);

  useEffect(() => {
    let active = true;
    apiRequest(`/courses/${encodeURIComponent(id)}`)
      .then(({ course }) => {
        if (active) setResult({ id, course, error: "" });
      })
      .catch((error) => {
        if (active) setResult({ id, course: null, error: error.message });
      });
    return () => { active = false; };
  }, [id]);

  const currentResult = result?.id === id ? result : null;
  const course = currentResult?.course;
  const loadError = currentResult?.error;

  if (!currentResult) {
    return <div className="min-h-screen flex items-center justify-center bg-gray-100">Loading course...</div>;
  }

  // Agar course nahi mila
  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 text-red-500">
            {loadError || "Course Not Found"}
          </h2>

          <button
            onClick={() => navigate("/courses")}
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
          >
            Back to Courses
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-5 text-blue-600 font-medium hover:text-blue-800"
        >
          ← Back to Courses
        </button>

        {/* Course Header */}
        <div className="bg-blue-600 text-white rounded-t-2xl p-6 md:p-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            {course.title}
          </h1>

          <p className="text-blue-100 text-lg">{course.description}</p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-b-2xl shadow-lg p-6 md:p-8">
          {/* Course Information */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-6">Course Information</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {/* Price */}
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-gray-500 text-sm">Price</p>
                <p className="font-bold text-lg text-green-600">
                  {course.price}
                </p>
              </div>

              {/* Duration */}
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-gray-500 text-sm">Duration</p>
                <p className="font-bold text-lg">{course.duration}</p>
              </div>

              {/* Rating */}
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-gray-500 text-sm">Rating</p>
                <p className="font-bold text-lg">⭐ {course.rating}</p>
              </div>

              {/* Level */}
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-gray-500 text-sm">Level</p>
                <p className="font-bold text-lg">{course.level}</p>
              </div>
            </div>
          </section>

          {/* Course Overview */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-3">Course Overview</h2>

            <p className="text-gray-600 leading-7">{course.overview}</p>
          </section>

          {/* Course Roadmap */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-5">🗺️ Course Roadmap</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {course.roadmap.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-100 p-4 rounded-lg flex items-center gap-3"
                >
                  <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </span>

                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* What You'll Learn */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-5">What You'll Learn</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {course.whatYouWillLearn.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-2 text-gray-700"
                >
                  <span className="text-green-600 font-bold text-lg">✓</span>

                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Week-wise Topics */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-5">📚 Week-wise Topics</h2>

            <div className="space-y-4">
              {course.weekWiseTopics.map((week) => (
                <div
                  key={week.week}
                  className="border rounded-xl p-5 hover:shadow-md transition"
                >
                  <h3 className="text-xl font-semibold mb-3">
                    Week {week.week}: {week.title}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {week.topics.map((topic, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Prerequisites */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Prerequisites</h2>

            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              {course.prerequisites.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          {/* Projects */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">💻 Projects</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {course.projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-gray-100 p-4 rounded-lg font-medium"
                >
                  {project}
                </div>
              ))}
            </div>
          </section>

          {/* Career Scope */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-3">Career Scope</h2>

            <p className="text-gray-600 leading-7">{course.careerScope}</p>
          </section>

          {/* Enroll Button */}
          <div className="border-t pt-6">
            <button
              className="w-full md:w-auto bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              onClick={async () => {
                if (!localStorage.getItem("coursehubToken")) {
                  navigate("/login");
                  return;
                }
                try {
                  await apiRequest(`/me/courses/${encodeURIComponent(course.id)}`, { method: "POST" });
                  alert(`Enrolled in ${course.title}`);
                  navigate("/my-courses");
                } catch (error) {
                  alert(error.message);
                }
              }}
            >
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CourseDetails;
