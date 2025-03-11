"use client";

import LoadingSpinner from "../_Components/UI/LoadingSpinner";
import StopQueueButton from "./StopQueueButton";

export default function QueueForm({ localUserProfile, message }) {
  if (!localUserProfile) return null;
  console.log(message);
  return (
    <div className="bg-gradient-to-b mx-2 sm:mx-0 w-full from-gray-900/80 to-gray-800 p-8 rounded-xl border border-gray-700 shadow-lg flex flex-col items-center gap-8 max-w-md">
      {message && <span>{message}</span>}
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
