"use client";

import Link from "next/link";
import { useState } from "react";
import { Mail, Lock, LogIn, User } from "lucide-react";
import { login } from "../_lib/actions/auth";
import { useRouter } from "next/navigation";
import ButtonSpinner from "../_Components/UI/ButtonSpinner";
import { supabase } from "../_lib/supabase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    try {
      const userData = await login(email, password);
      console.log("UserData:", userData);
      // const {
      //   data: { session },
      // } = await supabase.auth.getSession();
      // console.log(session.user);
      router.push("/");
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b ">
      <div className="w-full max-w-md p-8 space-y-8 bg-gradient-to-b from-gray-900/60 to-gray-800 rounded-lg border border-gray-700 shadow-xl">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white">Welcome Back</h1>
          <p className="mt-2 text-gray-400">Sign in to continue to NextMove</p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
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
                  autoComplete="current-password"
                  required
                  className="bg-gray-800 border border-gray-700 text-white sm:text-sm rounded-r-md focus:ring-1 focus:ring-gray-500 block w-full p-2.5 outline-none"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
                  <LogIn
                    size={18}
                    className="text-gray-400 group-hover:text-gray-300"
                  />
                )}
              </span>
              {isLoading ? "Signing in..." : "Sign in"}
            </button>
          </div>
        </form>

        <div className="text-center mt-4">
          <p className="text-sm text-gray-400">
            Don't have an account?{" "}
            <Link
              href="/register"
              className="font-medium text-white hover:text-gray-300 transition-colors"
            >
              <span className="flex items-center justify-center gap-1 mt-2">
                <User size={16} />
                Register now
              </span>
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}

export default Login;
