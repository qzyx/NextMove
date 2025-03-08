import { TrendingUp } from "lucide-react";

function Statistics({ localUser }) {
  const winRate = ((localUser.wins / localUser.totalGames) * 100).toFixed(2);
  const rounded = Math.round(winRate);
  return (
    <div
      className="bg-gradient-to-b from-gray-900/60 to-gray-800 p-6 rounded-lg border border-gray-700 
  shadow-xl transition-colors col-span-1 lg:col-span-3 h-75 flex flex-col gap-6"
    >
      <span className="flex gap-2 text-xl items-center">
        <TrendingUp size={32} />
        <span>Statistics</span>
      </span>
      <div className="flex justify-around text-gray-300 text-lg">
        <div className="h-20 w-20 sm:w-30 bg-gray-800 rounded-xl flex flex-col gap-1 items-center">
          <span>Wins</span>
          <span className="text-green-500">{localUser.wins}</span>
        </div>
        <div className="h-20 w-20 sm:w-30 bg-gray-800 rounded-xl flex flex-col gap-1 items-center">
          <span>Loses</span>
          <span className="text-red-500 ">{localUser.loses}</span>
        </div>
        <div className="h-20 w-20 sm:w-30 bg-gray-800 rounded-xl flex flex-col gap-1 items-center">
          <span>Draw</span>
          <span className="text-yellow-500">{localUser.draws}</span>
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
    </div>
  );
}

export default Statistics;
