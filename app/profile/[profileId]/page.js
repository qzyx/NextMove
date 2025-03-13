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
import {
  formatDate,
  formatPlaytime,
  getLocalUserInfo,
  getUserById,
} from "@/app/_lib/actions/user";

async function page({ params }) {
  const { profileId } = params;
  const profile = await getUserById(profileId);
  const lastFiveMatches = profile.recent_matches.slice(0, 5);

  const winRate = profile.wins / profile.total_games;
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
          <div className="flex flex-col gap-2 items-center mb-6">
            <Image
              className="h-28 rounded-full"
              src={profile.avatar_url ? profile.avatar_url : "/NotSetPfp.jpg"}
              alt={`${profile.username}'s profile picture`}
              width={112}
              height={112}
            />
            <h1 className="text-2xl font-bold">{profile.username}</h1>
            <p className="text-gray-400">@{profileId}</p>

            <div className="mt-4 flex items-center gap-2">
              {profile.rank !== 0 && (
                <>
                  <Award className="text-yellow-500" size={20} />
                  <span className="font-semibold">Rank #{profile.rank}</span>
                </>
              )}

              <span className="mx-1">•</span>
              <span className="font-semibold">{profile.elo} ELO</span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Calendar size={18} className="text-gray-400" />
              <div>
                <p className="text-sm text-gray-400">Member since</p>
                <p>{formatDate(profile.created_at)}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Clock size={18} className="text-gray-400" />
              <div>
                <p className="text-sm text-gray-400">Total Playtime</p>
                <p>{formatPlaytime(profile.total_playtime)}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Users size={18} className="text-gray-400" />
              <div>
                <p className="text-sm text-gray-400">Total games</p>
                <p>{profile.total_games}</p>
              </div>
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
                {profile.wins}
              </p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <p className="text-sm text-gray-400">Losses</p>
              <p className="text-2xl font-bold text-red-500">
                {profile.losses}
              </p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <p className="text-sm text-gray-400">Draws</p>
              <p className="text-2xl font-bold text-yellow-500">
                {profile.draws}
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <span>Win Rate</span>
                <span>{winRate.toFixed(2)}</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2">
                <div
                  className="bg-green-500 h-2 rounded-full"
                  style={{ width: winRate.toFixed(2) + "%" }}
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
            {lastFiveMatches.map((match, index) => (
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
                      match.result === "win"
                        ? "text-green-500"
                        : match.result === "loss"
                        ? "text-red-500"
                        : "text-gray-400"
                    }`}
                  >
                    {match.elo_change}
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
              {[...lastFiveMatches, ...lastFiveMatches].map((match, index) => (
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
                      match.result === "win"
                        ? "text-green-500"
                        : match.result === "loss"
                        ? "text-red-500"
                        : "text-gray-400"
                    }`}
                  >
                    {match.elo_change}
                  </td>
                  <td className="py-3">12:45</td>
                  <td className="py-3 pr-2 text-gray-400">{match.date}</td>
                </tr>
              ))}
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
