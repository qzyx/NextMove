import { TrendingUp } from "lucide-react";

export default function StatisticsLogged({ localUserProfile }) {
  if (localUserProfile === null) return null;
  const totalGames = localUserProfile.total_games;
  const wins = localUserProfile.wins;
  const losses = localUserProfile.losses;
  const draws = localUserProfile.draws;
  const winRate = ((wins / totalGames) * 100).toFixed(2);
  const rounded = Math.round(winRate);
  return (
    <>
      <span className="flex gap-2 text-xl items-center">
        <TrendingUp size={32} />
        <span>Statistics</span>
      </span>
      <div className="flex justify-around text-gray-300 text-lg">
        <div className="h-16 w-20 sm:h-20 sm:w-30 bg-gray-800 rounded-xl flex flex-col gap-1 items-center">
          <span>Wins</span>
          <span className="text-green-500">{wins}</span>
        </div>
        <div className="h-16 w-20 sm:h-20 sm:w-30 bg-gray-800 rounded-xl flex flex-col gap-1 items-center">
          <span>Loses</span>
          <span className="text-red-500 ">{losses}</span>
        </div>
        <div className="h-16 w-20 sm:h-20 sm:w-30 bg-gray-800 rounded-xl flex flex-col gap-1 items-center">
          <span>Draw</span>
          <span className="text-yellow-500">{draws}</span>
        </div>
      </div>
      <div className="flex gap-2 flex-col">
        <div className="flex w-full justify-between">
          <span>Win Rate</span>
          <span>{winRate}%</span>
        </div>
        <div className="w-full h-2 relative bg-red-500 rounded-xl">
          <div
            className="absolute top-0 left-0 h-2 bg-green-500 rounded-xl"
            style={{ width: `${rounded}%` }}
          ></div>
        </div>
      </div>
    </>
  );
}
