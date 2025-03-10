"use client";

import { useEffect, useState } from "react";
import LoadingSpinner from "../_Components/UI/LoadingSpinner";
import { getLocalUserInfo } from "../_lib/actions/user";
import { useAuth } from "../_lib/authContext/AuthContext";
import StopQueueButton from "./StopQueueButton";

export default function QueueForm({ localUserProfile }) {
  if (!localUserProfile) return null;
  return (
    <div className="bg-gradient-to-b from-gray-900/80 to-gray-800 p-8 rounded-xl border border-gray-700 shadow-lg flex flex-col items-center gap-8 w-full max-w-md">
      <div className="relative">
        <LoadingSpinner size={70} borderWidth={4} />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-gray-900 rounded-full w-14 h-14 flex items-center justify-center">
            <span className="text-2xl font-bold">Q</span>
          </div>
        </div>
      </div>

      <div className="text-center">
        <p className="text-2xl font-light tracking-wider mb-1">
          Finding a match...
        </p>
        <p className="text-gray-400 text-sm">Estimated wait time: ~1:30</p>
      </div>

      <div className="bg-gray-800/60 px-5 py-3 rounded-lg">
        <p className="font-medium">{localUserProfile.username}</p>
        <p className="text-sm text-gray-400">
          {localUserProfile.elo} ELO • Searching for opponents
        </p>
      </div>

      <div className="flex flex-col items-center gap-4 w-full">
        <StopQueueButton />
      </div>
    </div>
  );
}
