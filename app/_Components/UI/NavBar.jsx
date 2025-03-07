"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, User } from "lucide-react";
import LogoutButton from "./LogoutButton";

export default function NavBar({ user }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 shadow-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-white text-xl font-bold">
              NextMove
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <>
                <Link
                  href="/profile"
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md"
                >
                  <User size={18} className="inline mr-1" /> Profile
                </Link>
                <LogoutButton variant="minimal" />
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="bg-gray-800 hover:bg-gray-700 text-white px-3 py-2 rounded-md"
                >
                  Register
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-400 hover:text-white focus:outline-none"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 shadow-lg rounded-b-lg mx-4 dropDown-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {user ? (
              <>
                <Link
                  href="/profile"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md"
                >
                  Profile
                </Link>
                <div className="px-3 py-2">
                  <LogoutButton />
                </div>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
