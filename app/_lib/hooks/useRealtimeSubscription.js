"use client";

import { useEffect, useState } from "react";
import { supabase } from "../supabase";

export default function useRealtimeSubscription(userId, onGameFound) {
  const [status, setStatus] = useState("disconnected");
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!userId) return;

    let subscription = null;

    // Track if component is mounted to prevent state updates after unmount
    let isMounted = true;
    console.log("Setting up realtime listener for user:", userId);

    try {
      // Create a unique channel per user session
      const channelName = `games_listener_${userId}_${Date.now()}`;
      subscription = supabase
        .channel(channelName)
        .on(
          "postgres_changes",
          {
            event: "INSERT",
            schema: "public",
            table: "games",
            filter: `user_x=eq.${userId}`,
          },
          (payload) => {
            console.log("Received user_x game event:", payload);
            if (isMounted && payload?.new) {
              onGameFound(payload.new);
            }
          }
        )
        .on(
          "postgres_changes",
          {
            event: "INSERT",
            schema: "public",
            table: "games",
            filter: `user_o=eq.${userId}`,
          },
          (payload) => {
            console.log("Received user_o game event:", payload);
            if (isMounted && payload?.new) {
              onGameFound(payload.new);
            }
          }
        );

      // Subscribe with detailed status tracking
      subscription.subscribe((status) => {
        console.log("Subscription status:", status);
        if (isMounted) {
          setStatus(status);
        }

        if (status === "SUBSCRIBED") {
          console.log("Successfully subscribed to games table");
        } else if (status === "TIMED_OUT") {
          console.error("Subscription timed out");
          setError("Connection timed out");
        } else if (status === "CHANNEL_ERROR") {
          console.error("Channel error");
          setError("Channel error");
        }
      });

      // Also implement polling as a fallback
      const pollInterval = setInterval(async () => {
        if (!isMounted) return;

        try {
          console.log("Polling for new games...");
          const { data } = await supabase
            .from("games")
            .select("*")
            .or(`user_x.eq.${userId},user_o.eq.${userId}`)
            .order("created_at", { ascending: false })
            .limit(1);

          if (data && data.length > 0) {
            const game = data[0];
            // Check if it's a recent game (last 30 seconds)
            const gameTime = new Date(game.started_at || game.created_at);
            const timeSinceCreation = (new Date() - gameTime) / 1000;

            if (timeSinceCreation < 30) {
              console.log("Found new game via polling:", game);
              onGameFound(game);
            }
          }
        } catch (pollError) {
          console.error("Error polling for games:", pollError);
        }
      }, 5000); // Poll every 5 seconds

      return () => {
        console.log("Cleaning up subscription");
        isMounted = false;
        clearInterval(pollInterval);

        if (subscription) {
          supabase.removeChannel(subscription);
        }
      };
    } catch (setupError) {
      console.error("Error setting up subscription:", setupError);
      setError(setupError.message);
      return () => {
        isMounted = false;
      };
    }
  }, [userId, onGameFound]);

  return { status, error };
}
