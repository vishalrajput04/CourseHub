import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./components/Home.jsx";
import Courses from "./components/Courses.jsx";
import ComponentDescription from "./components/ComponentDescription.jsx";
import PageTransition from "./components/PageTransition.jsx";
import ViewCourse from "./components/ViewCourse.jsx";
import Login from "./components/Login";
import Signup from "./components/Signup";
import MyCourses from "./components/MyCourses";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <PageTransition>
          <Routes>
            <Route path="/" element={<ComponentDescription />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/ViewCourse" element={<ViewCourse />} />
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
