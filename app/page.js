import QSection from "./_Components/HomePageComponents/Queue/QSection";
import RecentMatches from "./_Components/HomePageComponents/RecentMatches/RecentMatches";
import Statistics from "./_Components/HomePageComponents/Statistics";
import UserLocalProfile from "./_Components/HomePageComponents/UserLocalProfile/UserLocalProfile";
const localUser = {
  pfp: "https://avatars.githubusercontent.com/u/77445921?v=4",
  name: "Qwyxo",
  elo: 1200,
  rank: 2,
  wins: 10,
  loses: 5,
  draws: 2,
  created_at: "2021-10-10",
  averagePlayTime: 100,
  totalPlayTime: 100,
  totalGames: 17,
  recentMatches: [
    {
      opponent: "ChessMaster",
      result: "win",
      eloChange: "+12",
      gameLength: "150",
      date: "2 hours ago",
    },
    {
      opponent: "KnightRider",
      result: "win",
      eloChange: "+8",
      gameLength: "150",
      date: "Yesterday",
    },
    {
      opponent: "QueenSlayer",
      result: "loss",
      eloChange: "-10",
      gameLength: "150",
      date: "2 days ago",
    },
    {
      opponent: "TacticalGenius",
      result: "draw",
      eloChange: "0",
      gameLength: "150",
      date: "3 days ago",
    },
    {
      opponent: "RookDefender",
      result: "win",
      eloChange: "+15",
      gameLength: "150",
      date: "5 days ago",
    },
  ],
};

export default async function Home() {
  return (
    <main className=" w-full h-full text-white p-4  max-w-7xl mx-auto lg:mt-35 mt-15">
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 p-6 lg:gap-6 lg:p-6">
        <QSection></QSection>
        <UserLocalProfile></UserLocalProfile>
        <RecentMatches></RecentMatches>
        <Statistics></Statistics>
      </div>
    </main>
  );
}
export const fetchCache = "force-no-store"; // Forces fresh load
