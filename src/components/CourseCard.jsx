import React from "react";

function CourseCard({ course }) {
  return (
    <div className="bg-gray-200 rounded-xl shadow-md overflow-hidden">
      <div className="p-4">
        <h2 className="text-xl font-bold">{course.title}</h2>
        <p className="text-gray-500 text-sm mt-2">
          Learn React from beginner to advanced.
        </p>

        <div className="flex justify-between mt-4 text-sm">
          <span>⭐ {course.rating}</span>
          <span>⏱ Duration: {course.duration}</span>
        </div>
        <div className="flex justify-between items-center mt-4">
          <span className="text-xl font-bold">{course.price}</span>

          <button className="bg-blue-600 cursor-pointer text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            View Course
          </button>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
