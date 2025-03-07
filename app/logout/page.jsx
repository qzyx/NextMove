"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { logout } from "../_lib/actions/auth";
import ButtonSpinner from "../_Components/UI/ButtonSpinner";

export default function LogoutPage() {
  const router = useRouter();
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("Logging out...");

  useEffect(() => {
    const performLogout = async () => {
      try {
        await logout();
        setStatus("Logged out successfully!");
        // Redirect after a short delay to show the success message
        setTimeout(() => {
          router.push("/login");
        }, 1500);
      } catch (err) {
        console.error("Logout error:", err);
        setError(err.message || "Failed to log out. Please try again.");
        // Allow manual redirect if there's an error
        setTimeout(() => {
          setStatus("Redirecting to login...");
          router.push("/login");
        }, 3000);
      }
    };

    performLogout();
  }, [router]);

  return (
    <main className="min-h-screen w-full flex items-center justify-center">
      <div className="w-full max-w-md p-8 space-y-8 bg-gradient-to-b from-gray-900/60 to-gray-800 rounded-lg border border-gray-700 shadow-xl text-center">
        <h1 className="text-2xl font-bold text-white">Logging Out</h1>

        <div className="flex flex-col items-center justify-center gap-4 py-8">
          {!error && (
            <div className="animate-pulse">
              <ButtonSpinner size={40} />
            </div>
          )}

          <p className="text-lg text-white">{status}</p>

          {error && (
            <div className="text-red-400 mt-4">
              <p>{error}</p>
              <button
                onClick={() => router.push("/login")}
                className="mt-4 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-md border border-gray-700 transition-colors text-white"
              >
                Back to Login
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
