"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import PageLoadingSpinner from "../_Components/UI/PageLoadingSpinner";
import QueueForm from "../_Components/UI/QueueForm";
import { findMatch } from "../_lib/actions/game";
import { getLocalUserInfo } from "../_lib/actions/user";
import { useAuth } from "../_lib/authContext/AuthContext";
import useRealtimeSubscription from "../_lib/hooks/useRealtimeSubscription";

function Page() {
  const router = useRouter();
  const [localUserProfile, setLocalUserProfile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { user } = useAuth();
  const [message, setMessage] = useState(false);

  // Handle game found callback
  const handleGameFound = useCallback(
    (game, message) => {
      if (message) {
        setMessage(message);
      }
      console.log("Game found, redirecting:", game);
      if (game?.id) {
        message
          ? setTimeout(() => router.push(`/game/${game.id}`), 2000)
          : router.push(`/game/${game.id}`);
      }
    },
    [router]
  );

  // Use our custom hook for realtime subscriptions
  const { status, error: subscriptionError } = useRealtimeSubscription(
    user?.id,
    handleGameFound
  );

  // Log subscription status changes
  useEffect(() => {
    console.log("Subscription status changed:", status);
    if (subscriptionError) {
      console.error("Subscription error:", subscriptionError);
    }
  }, [status, subscriptionError]);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setError(null);

        // Get user profile
        const profileData = await getLocalUserInfo(user);
        setLocalUserProfile(profileData);

        // Check if user is already in a game
        if (profileData?.current_game_id) {
          console.log("User already in game:", profileData.current_game_id);
          router.push(`/game/${profileData.current_game_id}`);
          return;
        }

        // Try to match with someone
        const game = await findMatch(user.id);
        console.log("Initial findMatch result:", game);
        if (game) {
          router.push(`/game/${game.id}`);
        }
      } catch (error) {
        console.error("Error fetching user profile:", error);
        setError("Failed to load statistics");
      } finally {
        setLoading(false);
      }
    }

    if (user) {
      fetchData();
      console.log("Fetching user data");
    } else {
      setLocalUserProfile(null);
      setLoading(false);
    }
  }, [user, router]);

  return (
    <main className="min-h-screen w-full flex items-center justify-center">
      {loading ? (
        <PageLoadingSpinner size={"lg"} />
      ) : (
        <>
          <QueueForm message={message} localUserProfile={localUserProfile} />
          {error && <p className="text-red-500 mt-4">{error}</p>}
        </>
      )}
    </main>
  );
}

export default Page;
