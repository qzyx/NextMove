"use client"
import { useAuth } from "@/app/_lib/authContext/AuthContext";
import {
  ArrowLeft,
  Award,
  TrendingUp,
  Calendar,
  Clock,
  Users,
  BookOpen,
  Flag,
} from "lucide-react";
import LoggedIn from "./LoggedIn";
import NotLoggedIn from "./NotLoggedIn";

function UserLocalProfile({ localUser }) {
  // Function to convert seconds to MM:SS format
  const formatPlaytime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };
  const { user } = useAuth();
  return (
    <div
      className="bg-gradient-to-b from-gray-900/60 to-gray-800 p-6 rounded-lg border border-gray-700 
  shadow-xl transition-colors col-span-1 lg:col-span-4 h-55 flex flex-col gap-4 justify-around"
    >
      {user ? <LoggedIn></LoggedIn> : <NotLoggedIn></NotLoggedIn>}
    </div>
  );
}

export default UserLocalProfile;
