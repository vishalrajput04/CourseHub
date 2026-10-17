import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiRequest } from "../lib/api.js";

const MyCourses = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!localStorage.getItem("coursehubToken")) {
      navigate("/login");
      return;
    }

    let active = true;
    Promise.all([apiRequest("/auth/me"), apiRequest("/me/courses")])
      .then(([{ user: currentUser }, { courses: enrolledCourses }]) => {
        if (!active) return;
        setUser(currentUser);
        setCourses(enrolledCourses);
      })
      .catch((requestError) => {
        if (!active) return;
        if (requestError.status === 401) {
          localStorage.removeItem("coursehubToken");
          navigate("/login");
          return;
        }
        setError(requestError.message);
      })
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => { active = false; };
  }, [navigate]);

  if (loading || !user) {
    return error ? <p className="p-10 text-center text-red-600">{error}</p> : null;
  }

  return (
    <main className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">My Courses</h1>
            <p className="text-gray-500 mt-1">Welcome, {user.name}</p>
          </div>
          <button
            onClick={() => {
              localStorage.removeItem("coursehubToken");
              navigate("/login");
            }}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
          >
            Logout
          </button>
        </div>

        {error && <p className="mb-5 text-red-600">{error}</p>}
        {courses.length === 0 ? (
          <div className="bg-white rounded-xl shadow p-10 text-center">
            <h2 className="text-2xl font-bold text-gray-700">Course Not Found</h2>
            <p className="text-gray-500 mt-2">You haven't enrolled in any course yet.</p>
            <button
              onClick={() => navigate("/courses")}
              className="mt-5 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
            >
              Browse Courses
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <div key={course.id} className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-xl font-bold mb-3">{course.title}</h2>
                <p className="text-gray-500 mb-4">{course.duration}</p>
                <div className="flex justify-between mb-5">
                  <span>⭐ {course.rating}</span>
                  <span className="font-bold text-green-600">{course.price}</span>
                </div>
                <button
                  onClick={() => navigate(`/ViewCourse/${course.id}`)}
                  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
                >
                  View Course
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default MyCourses;
