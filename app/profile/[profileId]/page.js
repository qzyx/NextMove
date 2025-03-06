import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Award,
  TrendingUp,
  Calendar,
  Clock,
  Users,
  BookOpen,
  Flag,
} from "lucide-react";

async function page({ params }) {
  const { profileId } = params;

  // Static player data for demo
  const playerData = {
    username: profileId,
    displayName: "Jano Fero",
    elo: 1853,
    rank: 4,
    joinDate: "October 2022",
    totalGames: 247,
    wins: 142,
    losses: 89,
    draws: 16,
    winRate: "57.5%",
    averageGameTime: "14:32",
    achievements: ["First Win", "10 Game Streak", "Master Tactician"],
    recentMatches: [
      {
        opponent: "ChessMaster",
        result: "win",
        eloChange: "+12",
        date: "2 hours ago",
      },
      {
        opponent: "KnightRider",
        result: "win",
        eloChange: "+8",
        date: "Yesterday",
      },
      {
        opponent: "QueenSlayer",
        result: "loss",
        eloChange: "-10",
        date: "2 days ago",
      },
      {
        opponent: "TacticalGenius",
        result: "draw",
        eloChange: "0",
        date: "3 days ago",
      },
      {
        opponent: "RookDefender",
        result: "win",
        eloChange: "+15",
        date: "5 days ago",
      },
    ],
  };

  return (
    <main className="min-h-screen w-full text-white p-4 md:p-8 max-w-7xl mx-auto mt-10">
      {/* Back button */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-gray-900/60 rounded-md border border-gray-700 hover:bg-gray-800 transition-colors"
      >
        <ArrowLeft size={16} />
        <span>Back to Home</span>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Player Info */}
        <div className="bg-gradient-to-b from-gray-900/60 to-gray-800 p-6 rounded-lg border border-gray-700 shadow-xl">
          <div className="flex flex-col items-center mb-6">
            <div className="relative w-28 h-28 mb-4 rounded-full overflow-hidden bg-gray-800 border-2 border-gray-700">
              {/* Placeholder avatar using first letter of username */}
              <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold">
                {profileId.charAt(0).toUpperCase()}
              </div>
            </div>
            <h1 className="text-2xl font-bold">{playerData.displayName}</h1>
            <p className="text-gray-400">@{profileId}</p>

            <div className="mt-4 flex items-center gap-2">
              <Award className="text-yellow-500" size={20} />
              <span className="font-semibold">Rank #{playerData.rank}</span>
              <span className="mx-2">•</span>
              <span className="font-semibold">{playerData.elo} ELO</span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Calendar size={18} className="text-gray-400" />
              <div>
                <p className="text-sm text-gray-400">Member since</p>
                <p>{playerData.joinDate}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Clock size={18} className="text-gray-400" />
              <div>
                <p className="text-sm text-gray-400">Average game time</p>
                <p>{playerData.averageGameTime}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Users size={18} className="text-gray-400" />
              <div>
                <p className="text-sm text-gray-400">Total games</p>
                <p>{playerData.totalGames}</p>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-700">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Award size={18} />
              Achievements
            </h2>
            <div className="flex flex-wrap gap-2">
              {playerData.achievements.map((achievement, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-800 rounded-full text-sm"
                >
                  {achievement}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Middle Column - Stats */}
        <div className="bg-gradient-to-b from-gray-900/60 to-gray-800 p-6 rounded-lg border border-gray-700 shadow-xl">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <TrendingUp size={20} />
            Statistics
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <p className="text-sm text-gray-400">Wins</p>
              <p className="text-2xl font-bold text-green-500">
                {playerData.wins}
              </p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <p className="text-sm text-gray-400">Losses</p>
              <p className="text-2xl font-bold text-red-500">
                {playerData.losses}
              </p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <p className="text-sm text-gray-400">Draws</p>
              <p className="text-2xl font-bold text-yellow-500">
                {playerData.draws}
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <span>Win Rate</span>
                <span>{playerData.winRate}</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2">
                <div
                  className="bg-green-500 h-2 rounded-full"
                  style={{ width: playerData.winRate }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Recent Matches */}
        <div className="bg-gradient-to-b from-gray-900/60 to-gray-800 p-6 rounded-lg border border-gray-700 shadow-xl">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <BookOpen size={20} />
            Recent Matches
          </h2>

          <div className="space-y-4">
            {playerData.recentMatches.map((match, index) => (
              <div
                key={index}
                className="bg-gray-800 p-3 rounded-md flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-3 h-3 rounded-full ${
                      match.result === "win"
                        ? "bg-green-500"
                        : match.result === "loss"
                        ? "bg-red-500"
                        : "bg-yellow-500"
                    }`}
                  ></div>
                  <span>vs {match.opponent}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span
                    className={`text-sm ${
                      match.eloChange.startsWith("+")
                        ? "text-green-500"
                        : match.eloChange.startsWith("-")
                        ? "text-red-500"
                        : "text-gray-400"
                    }`}
                  >
                    {match.eloChange}
                  </span>
                  <span className="text-xs text-gray-500">{match.date}</span>
                </div>
              </div>
            ))}
          </div>

          <button className="w-full mt-6 py-2 bg-gray-800 hover:bg-gray-700 rounded-md border border-gray-700 transition-colors">
            View All Matches
          </button>
        </div>
      </div>

      <div className="mt-6 bg-gradient-to-b from-gray-900/60 to-gray-800 p-6 rounded-lg border border-gray-700 shadow-xl">
        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
          <Flag size={20} />
          Match History
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-gray-400 border-b border-gray-700">
                <th className="text-left pb-3 pl-2">Opponent</th>
                <th className="text-left pb-3">Result</th>
                <th className="text-left pb-3">ELO Change</th>
                <th className="text-left pb-3">Game Length</th>
                <th className="text-left pb-3 pr-2">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {[...playerData.recentMatches, ...playerData.recentMatches].map(
                (match, index) => (
                  <tr key={index} className="hover:bg-gray-800/50">
                    <td className="py-3 pl-2">{match.opponent}</td>
                    <td
                      className={`py-3 ${
                        match.result === "win"
                          ? "text-green-500"
                          : match.result === "loss"
                          ? "text-red-500"
                          : "text-yellow-500"
                      }`}
                    >
                      {match.result.charAt(0).toUpperCase() +
                        match.result.slice(1)}
                    </td>
                    <td
                      className={`py-3 ${
                        match.eloChange.startsWith("+")
                          ? "text-green-500"
                          : match.eloChange.startsWith("-")
                          ? "text-red-500"
                          : "text-gray-400"
                      }`}
                    >
                      {match.eloChange}
                    </td>
                    <td className="py-3">12:45</td>
                    <td className="py-3 pr-2 text-gray-400">{match.date}</td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>

        <div className="mt-6 flex justify-center">
          <div className="flex gap-2">
            <button className="px-3 py-1 bg-gray-800 rounded-md border border-gray-700">
              Previous
            </button>
            <button className="px-3 py-1 bg-gray-700 rounded-md border border-gray-600">
              1
            </button>
            <button className="px-3 py-1 bg-gray-800 rounded-md border border-gray-700">
              2
            </button>
            <button className="px-3 py-1 bg-gray-800 rounded-md border border-gray-700">
              3
            </button>
            <button className="px-3 py-1 bg-gray-800 rounded-md border border-gray-700">
              Next
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default page;
