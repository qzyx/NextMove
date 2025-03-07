"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import ButtonSpinner from "./ButtonSpinner";

export default function LogoutButton({ variant = "default" }) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    setIsLoading(true);
    router.push("/logout");
  };

  // Different style variants
  const variants = {
    default:
      "inline-flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-md border border-gray-700 transition-colors text-white",
    minimal:
      "inline-flex items-center gap-1 text-gray-400 hover:text-white transition-colors",
    danger:
      "inline-flex items-center gap-2 px-4 py-2 bg-red-900/50 hover:bg-red-800 rounded-md border border-red-900 transition-colors text-white",
  };

  const variantClass = variants[variant] || variants.default;

  return (
    <button
      onClick={handleLogout}
      disabled={isLoading}
      className={`${variantClass} disabled:opacity-70`}
    >
      {isLoading ? <ButtonSpinner size={16} /> : <LogOut size={16} />}
      <span>Logout</span>
    </button>
  );
}
