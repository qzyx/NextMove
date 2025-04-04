"use client";

import { getLocalUserInfo } from "@/app/_lib/actions/user";
import { useAuth } from "@/app/_lib/authContext/AuthContext";
import { BookOpen } from "lucide-react";
import { useEffect, useState } from "react";
import RecentMatchesLogged from "./RecentMatchesLogged";
import RecentMatchesNotLogged from "./RecentMatchesNotLogged";
import PageLoadingSpinner from "../../UI/PageLoadingSpinner";

function RecentMatches() {
  const { user } = useAuth();
  const [localUserProfile, setLocalUserProfile] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const profileData = await getLocalUserInfo(user);
        setLocalUserProfile(profileData);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      } finally {
        setLoading(false);
      }
    }

    if (user) {
      fetchData();
      console.log("Fetching recent matches data");
    }
  }, [user]);
  const lastFourMatches = [
    {
      opponent: "jano",
      result: "win",
      eloChange: 15,
      gameLength: 100,
      date: "2021-10-10",
    },
  ];

  return (
    <div
      className="bg-gradient-to-b from-gray-900/60 to-gray-800 p-6 rounded-lg border border-gray-700 
        shadow-xl transition-colors col-span-1 lg:col-span-3 h-75  flex flex-col gap-2"
    >
      {user ? (
        loading ? (
          <PageLoadingSpinner size={"lg"} />
        ) : (
          <RecentMatchesLogged localUserProfile={localUserProfile} />
        )
      ) : (
        <RecentMatchesNotLogged />
      )}
    </div>
  );
}

export default RecentMatches;
