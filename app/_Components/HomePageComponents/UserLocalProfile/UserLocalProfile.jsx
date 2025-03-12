"use client";
import { useAuth } from "@/app/_lib/authContext/AuthContext";
import LoggedIn from "./UserLocalProfileLogged";
import NotLoggedIn from "./UserLocalProfileNotLogged";
import { useEffect, useState } from "react";
import {
  getLocalUserInfo,
  getUserAveragePlaytime,
} from "@/app/_lib/actions/user";
import LoadingSpinner from "../../UI/LoadingSpinner";
import PageLoadingSpinner from "../../UI/PageLoadingSpinner";

function UserLocalProfile() {
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
      console.log("Fetching user local profile data");
    }
  }, [user]);

  return (
    <div
      className="bg-gradient-to-b from-gray-900/60 to-gray-800 p-4 sm:p-6 rounded-lg border border-gray-700 
  shadow-xl transition-colors col-span-1 lg:col-span-4 min-h-55 sm:h-55 flex flex-col gap-4 sm:gap-8"
    >
      {user ? (
        loading ? (
          <PageLoadingSpinner size={"lg"} />
        ) : (
          <LoggedIn localUserProfile={localUserProfile} />
        )
      ) : (
        <NotLoggedIn />
      )}
    </div>
  );
}

export default UserLocalProfile;
