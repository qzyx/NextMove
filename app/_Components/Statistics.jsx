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

function Statistics({ localUser }) {
  // Function to convert seconds to MM:SS format
  const formatPlaytime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div
      className="bg-gradient-to-b from-gray-900/60 to-gray-800 p-6 rounded-lg border border-gray-700 
  shadow-xl transition-colors col-span-1 lg:col-span-4 h-55 flex flex-col gap-4 justify-around"
    >
      <div className="flex items-center gap-4 text-xl ">
        <img src={localUser.pfp} className="h-12 rounded-full"></img>
        <span>{localUser.name}</span>
      </div>
      <div className="flex items-center gap-4 text-lg">
        <span>
          <span className="mx-2">•</span>
          <span>{localUser.elo} ELO</span>
        </span>
        <span className="flex">
          <Award></Award>
          <span>Rank: #{localUser.rank}</span>
        </span>
      </div>
      <div className="flex gap-4 items-center ">
        <div className="flex gap-3 items-center">
          <span>
            <Calendar></Calendar>
          </span>
          <span className="flex flex-col ">
            <span className="text-sm text-gray-300 hidden sm:inline-block">
              Member Since
            </span>
            <span>{localUser.created_at}</span>
          </span>
        </div>
        <div className="flex gap-3 items-center">
          <span>
            <Clock></Clock>
          </span>
          <span className="flex flex-col ">
            <span className="text-sm text-gray-300 hidden sm:inline-block">
              Average Playtime
            </span>
            <span>{formatPlaytime(localUser.averagePlayTime)}</span>
          </span>
        </div>
        <div className="flex gap-3 items-center">
          <span>
            <Users></Users>
          </span>
          <span className="flex flex-col">
            <span className="text-sm text-gray-300 hidden sm:inline-block">
              Total Games
            </span>
            <span>{localUser.totalGames}</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
