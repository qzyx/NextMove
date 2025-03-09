import { Award, Calendar, Clock, Users } from "lucide-react";

export default function LoggedIn({ localUserProfile }) {
  if (localUserProfile === null) return null;

  function formatDate(dateInput) {
    if (!dateInput) return "N/A";

    const date = new Date(dateInput);

    if (isNaN(date.getTime())) return "Invalid date";

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}.${month}.${year}`;
  }

  return (
    <>
      <div className="flex items-center gap-4 mb-4">
        <div className="h-14 w-14 rounded-full overflow-hidden border-2 border-gray-700 shadow-md">
          <img
            src={
              localUserProfile.avatar_url !== ""
                ? localUserProfile.avatar_url
                : "NotSetPfp.jpg"
            }
            className="h-full w-full object-cover"
            alt={localUserProfile.username}
          />
        </div>
        <div>
          <span className="text-xl font-semibold">
            {localUserProfile.username}
          </span>
          <div className="flex items-center mt-1">
            <span className="text-gray-400 text-sm">ELO:</span>
            <span className="mx-1.5 font-medium">{localUserProfile.elo}</span>
            {localUserProfile.rank !== 0 && (
              <>
                <span className="mx-1 text-gray-500">•</span>
                <Award size={14} className="text-yellow-500 mr-1" />
                <span className="font-medium">#{localUserProfile.rank}</span>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-2">
        <div className="bg-gray-800/50 rounded-md p-3 flex items-center gap-3">
          <span className="p-1.5 bg-gray-900 rounded-md">
            <Calendar size={16} className="text-blue-400" />
          </span>
          <span className="flex flex-col">
            <span className="text-xs text-gray-400">Member Since</span>
            <span className="text-sm">
              {formatDate(localUserProfile.created_at)}
            </span>
          </span>
        </div>

        <div className="bg-gray-800/50 rounded-md p-3 flex items-center gap-3">
          <span className="p-1.5 bg-gray-900 rounded-md">
            <Clock size={16} className="text-purple-400" />
          </span>
          <span className="flex flex-col">
            <span className="text-xs text-gray-400">Average Playtime</span>
            <span className="text-sm">
              {localUserProfile.average_playtime || "No data"}
            </span>
          </span>
        </div>

        <div className="bg-gray-800/50 rounded-md p-3 flex items-center gap-3">
          <span className="p-1.5 bg-gray-900 rounded-md">
            <Users size={16} className="text-green-400" />
          </span>
          <span className="flex flex-col">
            <span className="text-xs text-gray-400">Total Games</span>
            <span className="text-sm">{localUserProfile.total_games || 0}</span>
          </span>
        </div>
      </div>
    </>
  );
}
