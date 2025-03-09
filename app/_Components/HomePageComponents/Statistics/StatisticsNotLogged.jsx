import { TrendingUp } from "lucide-react";
import Link from "next/link";

export default function StatisticsNotLogged() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <TrendingUp size={48} className="text-gray-600 mb-4" />
      <h3 className="text-xl font-medium mb-2">Statistics Unavailable</h3>
      <p className="text-gray-400 mb-6">Sign in to view your game statistics</p>
      <Link
        href="/login"
        className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md transition-colors"
      >
        Login to See Stats
      </Link>
    </div>
  );
}
