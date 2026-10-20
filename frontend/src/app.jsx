import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";
import Courses from "./components/courses.jsx";
import HomePage from "./components/home-page.jsx";
import PageTransition from "./components/page-transition.jsx";
import CourseDetails from "./components/course-details.jsx";
import Login from "./components/login.jsx";
import Signup from "./components/signup.jsx";
import MyCourses from "./components/my-courses.jsx";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <PageTransition>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:id" element={<CourseDetails />} />
            <Route path="/ViewCourse/:id" element={<CourseDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/my-courses" element={<MyCourses />} />
          </Routes>
        </PageTransition>
      </main>

      <Footer />
    </div>
  );
}
export default App;
