import { BookOpen } from "lucide-react";

export default function RecentMatchesLogged({ localUserProfile }) {
  if (localUserProfile === null) return null;

  const lastFourMatches = localUserProfile.recent_matches.slice(0, 4);
  const formatPlaytime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <>
      <div className="flex justify-between items-center mb-5">
        <span className="flex gap-2 items-center">
          <BookOpen size={28} className="text-gray-300" />
          <span className="text-xl font-medium">Recent Matches</span>
        </span>
        {localUserProfile.rank && (
          <span className="text-sm text-gray-300">
            Rank: {localUserProfile.rank}
          </span>
        )}
      </div>

      {/* Headers */}
      <div className="grid grid-cols-4 sm:grid-cols-5 text-gray-400 text-xs sm:text-sm font-medium border-b border-gray-700/70 pb-2 text-center">
        <span className="text-left pl-3">OPPONENT</span>
        <span>RESULT</span>
        <span>ELO</span>
        <span>TIME</span>
        <span className="hidden sm:block">DATE</span>
      </div>

      {/* Rows - each match will have its values under the right column */}
      <div className="flex flex-col mt-2">
        {lastFourMatches && lastFourMatches.length > 0 ? (
          lastFourMatches.map((match, idx) => (
            <div
              key={idx}
              className="grid grid-cols-4 sm:grid-cols-5 text-white text-xs sm:text-sm border-b border-gray-700/40 py-2.5 hover:bg-gray-800/30 rounded transition-colors"
            >
              <span className="sm:text-center text-start pl-3 truncate">
                {match.opponent}
              </span>
              <span
                className={`${
                  match.result === "win"
                    ? "text-green-400 font-medium"
                    : match.result === "loss"
                    ? "text-red-400 font-medium"
                    : "text-yellow-400 font-medium"
                } text-center`}
              >
                {match.result}
              </span>
              <span
                className={`text-center font-medium ${
                  match.elo_change > 0
                    ? "text-green-500"
                    : match.elo_change < 0
                    ? "text-red-500"
                    : "text-yellow-500"
                }`}
              >
                {match.elo_change > 0
                  ? `+${match.elo_change}`
                  : match.elo_change}
              </span>
              <span className="text-gray-300 text-center font-mono text-xs">
                {formatPlaytime(match.gameLength)}
              </span>
              <span className="hidden sm:block text-gray-500 text-center text-xs">
                {match.date}
              </span>
            </div>
          ))
        ) : (
          <div className="text-center py-8 text-gray-500">
            No recent matches
          </div>
        )}
      </div>
    </>
  );
}
