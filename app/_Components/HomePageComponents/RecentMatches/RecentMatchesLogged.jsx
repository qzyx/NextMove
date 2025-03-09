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
      <span className="flex gap-2 text-xl items-center">
        <BookOpen size={32} />
        <span>Recent Matches</span>
      </span>

      {/* Headers */}
      <div className="grid grid-cols-4  sm:grid-cols-5 text-gray-300 text-xs sm:text-sm  font-semibold border-b pb-2 text-center">
        <span className="">Opponent</span>
        <span>Result</span>
        <span>Elo Change</span>
        <span>Game Length</span>
        <span className="hidden sm:block">Date</span>
      </div>

      {/* Rows - each match will have its values under the right column */}
      <div className="flex flex-col sm:gap-2  ">
        {lastFourMatches.map((match, idx) => (
          <div
            key={idx}
            className="grid grid-cols-4 sm:grid-cols-5 text-white text-xs sm:text-sm border-b border-gray-600 pb-2  text-center"
          >
            <span className="sm:text-center text-start">{match.opponent}</span>
            <span
              className={`${
                match.result === "win"
                  ? "text-green-400"
                  : match.result === "loss"
                  ? "text-red-400"
                  : "text-yellow-400"
              }`}
            >
              {match.result}
            </span>
            <span
              className={
                match.eloChange > 0
                  ? "text-green-500"
                  : match.eloChange < 0
                  ? "text-red-500"
                  : "text-yellow-500"
              }
            >
              {match.eloChange > 0 ? `+${match.eloChange}` : match.eloChange}
            </span>

            <span>{formatPlaytime(match.gameLength)}</span>
            <span className="hidden sm:block">{match.date}</span>
          </div>
        ))}
      </div>
    </>
  );
}
