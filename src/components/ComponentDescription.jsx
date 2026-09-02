import React from "react";
function ComponentDescription() {
  return (
    <section className="bg-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Welcome to CourseHub
          </h1>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            CourseHub is an online learning platform where students can
            discover, learn, and enroll in high-quality courses. Our platform
            provides both free and paid courses in different technology and
            professional categories.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            What is CourseHub?
          </h2>
          <p className="text-gray-600 leading-7">
            CourseHub is designed to make online learning simple and accessible.
            Students can explore different courses, check course ratings,
            duration, pricing, and course details before enrolling. Free courses
            are available for students who want to learn without any cost, while
            paid courses provide more detailed and advanced learning content.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-bold text-green-600 mb-3">
              Free Courses
            </h2>
            <p className="text-gray-600 leading-7">
              CourseHub offers a collection of free courses for beginners and
              students who want to start learning new technologies without
              paying any fees.
            </p>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>✓ Beginner-friendly courses</li>
              <li>✓ No enrollment fee</li>
              <li>✓ Learn at your own pace</li>
              <li>✓ Multiple technology categories</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-bold text-blue-600 mb-3">
              Paid Courses
            </h2>
            <p className="text-gray-600 leading-7">
              Paid courses are designed for students who want structured and
              advanced learning content with detailed topics and practical
              knowledge.
            </p>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>✓ Advanced learning content</li>
              <li>✓ Detailed course material</li>
              <li>✓ Practical learning</li>
              <li>✓ Course completion progress</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-5">
            Course Details
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-gray-900">Course Rating</h3>
              <p className="text-gray-600 mt-2">⭐ 4.5+ average rating</p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-gray-900">Course Duration</h3>
              <p className="text-gray-600 mt-2">5 - 20 Hours</p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-gray-900">Course Type</h3>
              <p className="text-gray-600 mt-2">Free & Paid</p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold text-gray-900">Learning Mode</h3>
              <p className="text-gray-600 mt-2">Online Learning</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-5">
            Popular Course Categories
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            <div className="bg-gray-100 rounded-lg p-4 text-center font-medium">
              Python for Data Science
            </div>
            <div className="bg-gray-100 rounded-lg p-4 text-center font-medium">
              Agentic AI
            </div>
            <div className="bg-gray-100 rounded-lg p-4 text-center font-medium">
              Java + DSA
            </div>
            <div className="bg-gray-100 rounded-lg p-4 text-center font-medium">
              Computer Networks
            </div>
            <div className="bg-gray-100 rounded-lg p-4 text-center font-medium">
              Database
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-5">
            Why Choose CourseHub?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <h3 className="font-semibold text-lg">📚 Multiple Courses</h3>
              <p className="text-gray-600 mt-2 text-sm">
                Explore courses from different technology categories.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">⭐ Course Ratings</h3>
              <p className="text-gray-600 mt-2 text-sm">
                Check ratings before choosing a course.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">🎯 Flexible Learning</h3>
              <p className="text-gray-600 mt-2 text-sm">
                Learn courses according to your own schedule.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">💻 Online Platform</h3>
              <p className="text-gray-600 mt-2 text-sm">
                Access your learning content through the online platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default ComponentDescription;
