"use client";

import { useEffect, useState } from "react";
import PageLoadingSpinner from "../_Components/UI/PageLoadingSpinner";
import { changeUserStatus, getLocalUserInfo } from "../_lib/actions/user";
import { useAuth } from "../_lib/authContext/AuthContext";
import QueueForm from "./QueueForm";
import { findMatch } from "../_lib/actions/game";
import { useRouter } from "next/navigation";
import { supabase } from "../_lib/supabase";

function page() {
  const router = useRouter();
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
        const game = await findMatch(user.id);
        console.log("game", game);
        if (game) {
          setTimeout(() => {
            router.push(`/game/${game.id}`);
          }, 2000);
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
      console.log("Fetching user statistics data");
    } else {
      setLocalUserProfile(null);
      setLoading(false);
    }
  }, [user]);
  // Listen for new games that include this user
  useEffect(() => {
    if (!user) return;

    console.log("Setting up realtime listener for user:", user.id);

    // Use a non-reserved channel name
    const gameSubscription = supabase
      .channel("games_listener_" + user.id) // Use unique name per user
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "games",
          filter: `user_x=eq.${user.id}`,
        },
        handleNewGame
      )
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "games",
          filter: `user_o=eq.${user.id}`,
        },
        handleNewGame
      );

    // Subscribe with status callback for debugging
    gameSubscription.subscribe((status) => {
      console.log("Subscription status:", status);
      if (status === "SUBSCRIBED") {
        console.log("Successfully subscribed to games table");
      } else if (status === "CLOSED" || status === "CHANNEL_ERROR") {
        console.error("Subscription error:", status);
      }
    });

    // Clean up subscription
    return () => {
      console.log("Cleaning up subscription");
      gameSubscription.unsubscribe();
    };
  }, [user, router]);

  const handleNewGame = (payload) => {
    const game = payload.new;
    console.log("New game found:", game);

    // Redirect to game page
    router.push(`/game/${game.id}`);
  };
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
