"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { supabase } from "../supabase";
import { useAuth } from "../authContext/AuthContext";

const QueueContext = createContext();

export function QueueProvider({ children }) {
  const [status, setStatus] = useState("idle");
  const pathname = usePathname();
  const { user } = useAuth();

  // Update user status based on page route
  useEffect(() => {
    const updateStatus = async (newStatus) => {
      try {
        // Update status in your database
        await supabase
          .from("profiles")
          .update({ status: newStatus })
          .eq("id", user?.id);

        setStatus(newStatus);
      } catch (error) {
        console.error("Error updating status:", error);
      }
    };

    // Set status based on current route
    if (pathname === "/queue") {
      updateStatus("queuing");
    } else if (pathname === "/game") {
      updateStatus("in_game");
    } else {
      updateStatus("idle");
    }

    // Clean up when component unmounts
    return () => {
      if (pathname === "/queue") {
        updateStatus("idle"); // Ensure user isn't left in queue
      }
    };
  }, [pathname, user]);

  // Update last_online timestamp every 30 seconds
  useEffect(() => {
    let intervalId;

    const updateLastOnline = async () => {
      if (!user?.id) return;

      try {
        const now = new Date().toISOString();
        await supabase
          .from("profiles")
          .update({ last_online: now })
          .eq("id", user.id);

        console.log("Updated last_online timestamp:", now);
      } catch (error) {
        console.error("Error updating last_online timestamp:", error);
      }
    };

    // Update immediately when component mounts
    if (user?.id) {
      updateLastOnline();
    }

    // Set up interval for updating every 30 seconds
    intervalId = setInterval(updateLastOnline, 30000);

    // Clear interval when component unmounts
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [user]);

  // Additional methods for manually changing status
  const setUserStatus = async (newStatus) => {
    // Implementation for manual status changes
    // ...

    setStatus(newStatus);
  };

  return (
    <QueueContext.Provider value={{ status, setUserStatus }}>
      {children}
    </QueueContext.Provider>
  );
}

export function useQueue() {
  return useContext(QueueContext);
}
