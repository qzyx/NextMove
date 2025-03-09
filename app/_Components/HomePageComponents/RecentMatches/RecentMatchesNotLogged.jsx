import { BookOpen } from "lucide-react";

export default function RecentMatchesNotLogged() {
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
      <div className="flex flex-col justify-between h-full  ">
        <span className="rounded-xl h-8 w-full bg-gray-800 animate-pulse"></span>
        <span className="rounded-xl h-8 w-full bg-gray-800 animate-pulse"></span>
        <span className="rounded-xl h-8 w-full bg-gray-800 animate-pulse"></span>
        <span className="rounded-xl h-8 w-full bg-gray-800 animate-pulse"></span>
      </div>
    </>
  );
}
