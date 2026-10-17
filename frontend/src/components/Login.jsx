import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { apiRequest } from "../lib/api.js";

const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const { token } = await apiRequest("/auth/login", {
        method: "POST",
        body: JSON.stringify(data),
      });
      localStorage.setItem("coursehubToken", token);
      navigate("/my-courses");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-2">
          Login
        </h1>

        <p className="text-center text-gray-500 mb-6">
          Login to access your courses
        </p>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Email */}
          <label className="block font-medium mb-2">Email</label>

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border rounded-lg px-4 py-3 mb-1 outline-none focus:ring-2 focus:ring-blue-500"
            {...register("email", {
              required: "Email is required",
            })}
          />

          {errors.email && (
            <p className="text-red-500 text-sm mb-4">{errors.email.message}</p>
          )}

          {/* Password */}
          <label className="block font-medium mb-2">Password</label>

          <input
            type="password"
            placeholder="Enter your password"
            className="w-full border rounded-lg px-4 py-3 mb-1 outline-none focus:ring-2 focus:ring-blue-500"
            {...register("password", {
              required: "Password is required",
            })}
          />

          {errors.password && (
            <p className="text-red-500 text-sm mb-6">
              {errors.password.message}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        <p className="text-center mt-5 text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-blue-600 font-semibold hover:underline"
          >
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
