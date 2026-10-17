import React from "react";
import CourseCard from "./CourseCard";

function Courses() {
  const paidCourses = [
    { title: "React JS", price: "₹999", duration: "8 Weeks", rating: "4.8" },
    {
      title: "Full Stack Development",
      price: "₹1499",
      duration: "8 Weeks",
      rating: "4.9",
    },
    {
      title: "Python for Data Science",
      price: "₹1299",
      duration: "8 Weeks",
      rating: "4.8",
    },
    {
      title: "Machine Learning",
      price: "₹1799",
      duration: "8 Weeks",
      rating: "4.9",
    },
    {
      title: "Artificial Intelligence",
      price: "₹1999",
      duration: "8 Weeks",
      rating: "4.9",
    },
    { title: "Agentic AI", price: "₹2499", duration: "8 Weeks", rating: "4.9" },
    {
      title: "System Design",
      price: "₹1799",
      duration: "8 Weeks",
      rating: "4.8",
    },
    {
      title: "Cloud Computing",
      price: "₹1599",
      duration: "8 Weeks",
      rating: "4.8",
    },
    { title: "AWS Cloud", price: "₹1999", duration: "8 Weeks", rating: "4.9" },
    { title: "DevOps", price: "₹1699", duration: "8 Weeks", rating: "4.8" },
    { title: "Java + DSA", price: "₹1499", duration: "8 Weeks", rating: "4.9" },
    { title: "MERN Stack", price: "₹1999", duration: "8 Weeks", rating: "4.9" },
  ];

  const freeCourses = [
    { title: "HTML & CSS", price: "Free", duration: "4 Weeks", rating: "4.7" },
    {
      title: "JavaScript Basics",
      price: "Free",
      duration: "6 Weeks",
      rating: "4.8",
    },
    { title: "PHP Basics", price: "Free", duration: "5 Weeks", rating: "4.6" },
    { title: "MySQL", price: "Free", duration: "6 Weeks", rating: "4.7" },
    { title: "DBMS", price: "Free", duration: "5 Weeks", rating: "4.7" },
    {
      title: "Data Structures & Algorithms",
      price: "Free",
      duration: "8 Weeks",
      rating: "4.8",
    },
    {
      title: "C Programming",
      price: "Free",
      duration: "6 Weeks",
      rating: "4.6",
    },
    {
      title: "Java Programming",
      price: "Free",
      duration: "8 Weeks",
      rating: "4.8",
    },
    {
      title: "Python Basics",
      price: "Free",
      duration: "6 Weeks",
      rating: "4.8",
    },
    {
      title: "Git & GitHub",
      price: "Free",
      duration: "6 Weeks",
      rating: "4.7",
    },
    {
      title: "Computer Networks",
      price: "Free",
      duration: "5 Weeks",
      rating: "4.6",
    },
    {
      title: "Operating Systems",
      price: "Free",
      duration: "5 Weeks",
      rating: "4.7",
    },
  ];
  return (
    <main className="max-w-7xl mx-auto px-6 py-10">
      <section className="mb-12">
        <h1 className="text-3xl font-bold mb-6 text-blue-600 .">
          Paid Courses
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {paidCourses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
      </section>

      <section>
        <h1 className="text-3xl font-bold mb-6 text-green-600">Free Courses</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {freeCourses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Courses;
