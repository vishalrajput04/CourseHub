import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="bg-gray-900 text-gray-300 py-4 mt-auto">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <span className="text-xl font-bold text-white">CourseHub</span>
            <p className="mt-2 text-sm">Learn anything, anytime.</p>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-2">Quick Links</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="./" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="./Courses" className="hover:text-white">
                  Courses
                </a>
              </li>
              <li>
                <a href="About" className="hover:text-white">
                  About
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-2">Contact</h3>
            <p className="text-sm">vishalchauhan0195@gmail.com</p>
          </div>
        </div>
        <div className="text-center text-sm mt-8 border-t border-gray-700 pt-3 ">
          ©2026 CourseHub made by VishalChauhan.
        </div>
      </footer>
    </>
  );
}
export default Footer;
