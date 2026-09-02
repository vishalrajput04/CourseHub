import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./components/Home.jsx";
import Courses from "./components/Courses.jsx";
import ComponentDescription from "./components/ComponentDescription.jsx";
import PageTransition from "./components/PageTransition.jsx";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <PageTransition>
          <Routes>
            <Route path="/" element={<ComponentDescription />} />

            <Route path="/courses" element={<Courses />} />
          </Routes>
        </PageTransition>
      </main>

      <Footer />
    </div>
  );
}

export default App;
