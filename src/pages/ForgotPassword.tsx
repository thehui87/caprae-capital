import { Link } from "react-router-dom";

export default function ForgotPassword() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-teal-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Forgot Password</h2>

        <form className="space-y-4">
          <div>
            <label className="block text-teal-900 font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-100 focus:outline-none"
              placeholder="you@example.com"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-teal-900 text-white py-2 rounded-lg hover:bg-teal-100 hover:text-teal-900 transition-colors"
          >
            Send Reset Link
          </button>
        </form>

        <div className="mt-4 text-sm text-center">
          <Link to="/login" className="text-teal-900 hover:text-teal-100">
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
}
