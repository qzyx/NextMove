import { BookOpen } from "lucide-react";

function RecentMatches({ recentMatches }) {
  // Get only the last 4 matches
  const lastFourMatches = recentMatches.slice(0, 4);

  return (
    <div
      className="bg-gradient-to-b from-gray-900/60 to-gray-800 p-6 rounded-lg border border-gray-700 
        shadow-xl transition-colors col-span-1 lg:col-span-3 h-75  flex flex-col gap-4"
    >
      <span className="flex gap-2 text-xl items-center">
        <BookOpen size={32} />
        <span>Recent Matches</span>
      </span>

      {/* Headers */}
      <div className="grid grid-cols-4 sm:grid-cols-5 text-gray-300 text-xs sm:text-sm md:text-base font-semibold border-b pb-2 text-center">
        <span>Opponent</span>
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
            <span>{match.eloChange}</span>
            <span>{match.gameLength}</span>
            <span className="hidden sm:block">{match.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentMatches;
