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
    } else {
      updateStatus("idle");
    }

    // Clean up when component unmounts
    return () => {
      if (pathname === "/queue") {
        updateStatus("idle"); // Ensure user isn't left in queue
      }
    };
  }, [pathname]);

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
