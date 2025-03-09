"use client";
import getLocalUserInfo from "@/app/_lib/actions/user";
import { TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";
import StatisticsNotLogged from "./StatisticsNotLogged";
import StatisticsLogged from "./StatisticsLogged";
import { useAuth } from "@/app/_lib/authContext/AuthContext";
import PageLoadingSpinner from "../../UI/PageLoadingSpinner";

function Statistics() {
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
    }
  }, [user]);

  return (
    <div
      className="bg-gradient-to-b from-gray-900/60 to-gray-800 p-6 rounded-lg border border-gray-700 
  shadow-xl transition-colors col-span-1 lg:col-span-3 h-75 flex flex-col gap-10  "
    >
      {user ? (
        loading ? (
          <PageLoadingSpinner size={"lg"} />
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
