"use client";

import Link from "next/link";
import LoadingSpinner from "../_Components/UI/LoadingSpinner";
import StopQueueButton from "./StopQueueButton";
import QueueForm from "./QueueForm";
import { useEffect, useState } from "react";
import { useAuth } from "../_lib/authContext/AuthContext";
import { getLocalUserInfo } from "../_lib/actions/user";
import PageLoadingSpinner from "../_Components/UI/PageLoadingSpinner";

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
    <main className="w-full grow flex flex-col items-center justify-center text-white min-h-screen">
      {loading ? (
        <PageLoadingSpinner size={"lg"} />
      ) : (
        <QueueForm localUserProfile={localUserProfile} />
      )}
    </main>
  );
}

export default page;
