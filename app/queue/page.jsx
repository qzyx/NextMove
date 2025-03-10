"use client";

import { useEffect, useState } from "react";
import PageLoadingSpinner from "../_Components/UI/PageLoadingSpinner";
import { changeUserStatus, getLocalUserInfo } from "../_lib/actions/user";
import { useAuth } from "../_lib/authContext/AuthContext";
import QueueForm from "./QueueForm";

function page() {
  const [localUserProfile, setLocalUserProfile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { user } = useAuth();
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
    <main className="min-h-screen w-full  flex items-center justify-center">
      {loading ? (
        <PageLoadingSpinner size={"lg"} />
      ) : (
        <QueueForm localUserProfile={localUserProfile} />
      )}
    </main>
  );
}

export default page;
