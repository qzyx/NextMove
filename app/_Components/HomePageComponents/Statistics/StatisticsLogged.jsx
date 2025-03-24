import { TrendingUp } from "lucide-react";

export default function StatisticsLogged({ localUserProfile }) {
  if (localUserProfile === null) return null;

  // Calculate statistics
  const totalGames =
    (localUserProfile.wins || 0) +
    (localUserProfile.losses || 0) +
    (localUserProfile.draws || 0);
  const winRate =
    totalGames > 0
      ? Math.round(((localUserProfile.wins || 0) / totalGames) * 100)
      : 0;

  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <span className="flex gap-2 items-center">
          <TrendingUp size={28} className="text-gray-300" />
          <span className="text-xl font-medium">Your Statistics</span>
        </span>
        {localUserProfile.rank && (
          <span className="text-sm text-gray-300">
            Rank: {localUserProfile.rank}
          </span>
        )}
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <StatCard title="Total Games" value={totalGames} />
        <StatCard
          title="Wins"
          value={localUserProfile.wins || 0}
          color="text-green-500"
        />
        <StatCard
          title="Losses"
          value={localUserProfile.losses || 0}
          color="text-red-500"
        />
        <StatCard
          title="Draws"
          value={localUserProfile.draws || 0}
          color="text-yellow-500"
        />
      </div>

      {/* Win Rate */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-400">Win Rate</span>
          <span className="text-sm font-bold text-white">
            {winRate.toFixed(2)}%
          </span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2.5">
          <div
            className="bg-green-500 h-2.5 rounded-full"
            style={{ width: `${winRate}%` }}
          ></div>
        </div>
      </div>

      {/* ELO Rating */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-400">ELO Rating</span>
          <span className="text-sm font-bold text-white">
            {localUserProfile.elo || 0}
          </span>
        </div>
        {localUserProfile.eloHistory &&
          localUserProfile.eloHistory.length > 1 && (
            <div className="text-xs text-gray-400">
              {localUserProfile.eloHistory[
                localUserProfile.eloHistory.length - 1
              ] >
              localUserProfile.eloHistory[
                localUserProfile.eloHistory.length - 2
              ] ? (
                <span className="text-green-500">
                  ↑{" "}
                  {localUserProfile.eloHistory[
                    localUserProfile.eloHistory.length - 1
                  ] -
                    localUserProfile.eloHistory[
                      localUserProfile.eloHistory.length - 2
                    ]}{" "}
                  from last game
                </span>
              ) : (
                <span className="text-red-500">
                  ↓{" "}
                  {localUserProfile.eloHistory[
                    localUserProfile.eloHistory.length - 2
                  ] -
                    localUserProfile.eloHistory[
                      localUserProfile.eloHistory.length - 1
                    ]}{" "}
                  from last game
                </span>
              )}
            </div>
          )}
      </div>
    </>
  );
}

// Helper component for stat cards
function StatCard({ title, value, color = "text-white" }) {
  return (
    <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
      <div className="text-xs text-gray-400">{title}</div>
      <div className={`text-xl font-bold ${color}`}>{value}</div>
    </div>
  );
}
