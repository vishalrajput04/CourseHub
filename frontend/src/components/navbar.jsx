import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 shadow-md bg-gray-300">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex flex-col items-center">
          <svg aria-label="CourseHub Logo" role="img" viewBox="0 0 40 40" className="w-10 h-10">
            <rect width="40" height="40" rx="10" fill="#2563eb" />
            <path d="M8 16 20 10l12 6-12 6-12-6Zm5 4v7c4 3 10 3 14 0v-7l-7 4-7-4Z" fill="white" />
            <path d="M32 16v8" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>

          <span className="text-sm md:text-lg font-bold">CourseHub</span>
        </div>

        <div className="flex items-center gap-3 sm:gap-5 md:gap-8">
          <Link
            to="/"
            className="text-sm md:text-base text-gray-700 hover:text-blue-500 font-medium transition"
          >
            Home
          </Link>

          <Link
            to="/courses"
            className="text-sm md:text-base text-gray-700 hover:text-blue-500 font-medium transition"
          >
            Courses
          </Link>

          <Link
            to="/my-courses"
            className="text-sm md:text-base text-gray-700 hover:text-blue-500 font-medium transition"
          >
            My Courses
          </Link>

          <Link
            to="/login"
            className="text-sm md:text-base bg-blue-600 text-white rounded-xl hover:bg-blue-800 px-3 py-2 font-medium transition"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
