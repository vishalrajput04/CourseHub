import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const alreadyExists = users.find((user) => user.email === email);

    if (alreadyExists) {
      alert("User already exists!");
      return;
    }

    const newUser = {
      id: Date.now(),
      name,
      email,
      password,
      enrolledCourses: [],
    };

    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));

    alert("Signup successful! Please login.");

    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-2">
          Create Account
        </h1>

        <p className="text-center text-gray-500 mb-6">
          Signup to start learning
        </p>

        <form onSubmit={handleSignup}>
          <label className="block font-medium mb-2">Name</label>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="w-full border rounded-lg px-4 py-3 mb-4 outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <label className="block font-medium mb-2">Email</label>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full border rounded-lg px-4 py-3 mb-4 outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <label className="block font-medium mb-2">Password</label>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Create password"
            className="w-full border rounded-lg px-4 py-3 mb-6 outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Signup
          </button>
        </form>

        <p className="text-center mt-5 text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-600 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
