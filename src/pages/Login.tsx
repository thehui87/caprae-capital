import type { AppDispatch } from "../redux/store";
import { useDispatch } from "react-redux";
import { logIn } from "../redux/authSlice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // prevent page reload

    // Validation
    if (!email.trim()) {
      setError("Email is required");
      return;
    }
    if (!isValidEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }
    setError(""); // clear error if valid
    dispatch(logIn({ email }));
    // optionally redirect after login here
    navigate("/dashboard");
  };

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gray-50 flex flex-col">
      {/* Centered Login Card */}
      <main className="flex-grow flex items-center justify-center px-4">
        <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md border border-teal-100/30">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">Login</h2>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-teal-900 font-medium mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-2 border border-gray-100 rounded-lg focus:ring-2 focus:ring-gray-100 focus:outline-none"
              />
              {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
            </div>
            <div>
              <label htmlFor="password" className="block text-teal-900 font-medium mb-1">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="•••••••"
                className="w-full px-4 py-2 border border-gray-100 rounded-lg focus:ring-2 focus:ring-gray-100 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gray-700 text-white font-semibold py-2 rounded-lg shadow hover:bg-gray-900 hover:text-white transition"
            >
              Sign In
            </button>
          </form>
          <div className="mt-4 text-center text-sm text-gray-900">
            <a href="/forgot-password" className="hover:underline">
              Forgot Password?
            </a>
          </div>
          <div className="mt-2 text-center text-sm text-gray-900">
            Don’t have an account?{" "}
            <a href="/register" className="font-semibold hover:underline">
              Register
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
