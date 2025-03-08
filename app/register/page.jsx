"use client";

import Link from "next/link";
import { useState } from "react";
import { Mail, Lock, UserPlus, User, ArrowLeft } from "lucide-react";
import { register } from "../_lib/actions/auth";
import { useRouter } from "next/navigation";
import ButtonSpinner from "../_Components/UI/ButtonSpinner";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setIsLoading(false);
      return null;
    }

    try {
      const userData = await register(email, password, username);
      console.log("Registered as:", userData);
      router.push("/login");
    } catch (error) {
      setError(error.message);
      console.error("Registration error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen w-full flex items-center justify-center ">
      <div className="w-full max-w-md mx-2 sm:mx-0 p-8 space-y-8 bg-gradient-to-b from-gray-900/60 to-gray-800 rounded-lg border border-gray-700 shadow-xl">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white">Create Account</h1>
          <p className="mt-2 text-gray-400">Join NextMove today</p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="relative">
              <label
                htmlFor="username"
                className="text-sm font-medium text-gray-300 block mb-2"
              >
                Username
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-700 bg-gray-800 text-gray-400">
                  <User size={18} />
                </span>
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  className="bg-gray-800 border border-gray-700 text-white sm:text-sm rounded-r-md focus:ring-1 focus:ring-gray-500 block w-full p-2.5 outline-none"
                  placeholder="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>

            <div className="relative">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-300 block mb-2"
              >
                Email
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-700 bg-gray-800 text-gray-400">
                  <Mail size={18} />
                </span>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="bg-gray-800 border border-gray-700 text-white sm:text-sm rounded-r-md focus:ring-1 focus:ring-gray-500 block w-full p-2.5 outline-none"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="relative">
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-300 block mb-2"
              >
                Password
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-700 bg-gray-800 text-gray-400">
                  <Lock size={18} />
                </span>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="bg-gray-800 border border-gray-700 text-white sm:text-sm rounded-r-md focus:ring-1 focus:ring-gray-500 block w-full p-2.5 outline-none"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="relative">
              <label
                htmlFor="confirm-password"
                className="text-sm font-medium text-gray-300 block mb-2"
              >
                Confirm Password
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-700 bg-gray-800 text-gray-400">
                  <Lock size={18} />
                </span>
                <input
                  id="confirm-password"
                  name="confirm-password"
                  type="password"
                  required
                  className="bg-gray-800 border border-gray-700 text-white sm:text-sm rounded-r-md focus:ring-1 focus:ring-gray-500 block w-full p-2.5 outline-none"
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>
          </div>
          {error && <div className="w-full text-red-500">{error}</div>}
          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors disabled:opacity-70"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                {isLoading ? (
                  <ButtonSpinner size={18} />
                ) : (
                  <UserPlus
                    size={18}
                    className="text-gray-400 group-hover:text-gray-300"
                  />
                )}
              </span>
              {isLoading ? "Creating account..." : "Create Account"}
            </button>
          </div>
        </form>

        <div className="text-center mt-4">
          <p className="text-sm text-gray-400">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-medium text-white hover:text-gray-300 transition-colors"
            >
              <span className="flex items-center justify-center gap-1 mt-2">
                <ArrowLeft size={16} />
                Back to login
              </span>
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}

export default Register;
