import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from "axios";

const LoginSchema = z.object({
  email: z.string().email("Enter a valid email address"),
  password: z.string().min(2, "Password must have at least 2 characters"),
});

const LoginForm = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
axios.defaults.withCredentials = true;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(LoginSchema),
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/");
    }
  }, [navigate]);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setErrorMessage("");
    try {
      const response = await axios.post(
        "https://binzaniportal-api.vercel.app/api/auth/login",
        data,
        { withCredentials: true }
      );
      alert(response.data.message);
      const { token } = response.data;
      // Save the token to localStorage
      localStorage.setItem("authToken", token);

      alert("Login successful!");
      // Redirect the user to a protected route or dashboard
      navigate("/");
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "Invalid credentials");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-slate-700 p-4">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-2 text-center">Login</h1>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              {...register("email")}
              type="email"
              className={`w-full p-2 mt-1 border rounded-md ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs">{errors.email.message}</p>
            )}
          </div>
          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <input
              {...register("password")}
              type="password"
              className={`w-full p-2 mt-1 border rounded-md ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.password && (
              <p className="text-red-500 text-xs">{errors.password.message}</p>
            )}
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`mt-4 w-full bg-purple-600 text-white p-3 rounded ${
              isSubmitting
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-purple-700"
            }`}
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </button>
        </form>
        {/* Link to Sign-up Page */}
        <p className="mt-4 text-sm text-gray-400 text-center">
          Create an Account{" "}
          <Link to="/signup" className="text-purple-600 hover:underline">
            Sign up
          </Link>
        </p>
        {/* Error Message Display */}
        {errorMessage && (
          <p className="text-red-500 mt-4 text-center">{errorMessage}</p>
        )}
      </div>
    </div>
  );
};

export default LoginForm;
