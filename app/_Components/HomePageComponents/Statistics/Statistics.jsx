"use client";
import { getLocalUserInfo } from "@/app/_lib/actions/user";
import { useEffect, useState } from "react";
import StatisticsNotLogged from "./StatisticsNotLogged";
import StatisticsLogged from "./StatisticsLogged";
import { useAuth } from "@/app/_lib/authContext/AuthContext";
import PageLoadingSpinner from "../../UI/PageLoadingSpinner";

function Statistics() {
  const { user } = useAuth();
  const [localUserProfile, setLocalUserProfile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setError(null);
        const profileData = await getLocalUserInfo(user);
        setLocalUserProfile(profileData);
      } catch (error) {
        console.error("Error fetching user profile:", error);
        setError("Failed to load statistics");
      } finally {
        setLoading(false);
      }
    }

    if (user) {
      fetchData();
      console.log("Fetching user statistics data");
    } else {
      setLocalUserProfile(null);
      setLoading(false);
    }
  }, [user]);

  return (
    <div className="bg-gradient-to-b from-gray-900/60 to-gray-800 p-6 rounded-lg border border-gray-700 shadow-xl transition-colors col-span-1 lg:col-span-3 min-h-75  flex flex-col">
      {user ? (
        loading ? (
          <div className="flex-1 flex items-center justify-center max-h-[350px]">
            <PageLoadingSpinner size={"lg"} />
          </div>
        ) : error ? (
          <div className="flex-1 flex items-center justify-center max-h-[350px]">
            <span className="text-red-500">{error}</span>
          </div>
        ) : (
          <StatisticsLogged localUserProfile={localUserProfile} />
        )
      ) : (
        <StatisticsNotLogged />
      )}
    </div>
  );
}

export default Statistics;
