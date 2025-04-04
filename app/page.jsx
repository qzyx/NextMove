import QSection from "./_Components/HomePageComponents/Queue/QSection";
import RecentMatches from "./_Components/HomePageComponents/RecentMatches/RecentMatches";
import Statistics from "./_Components/HomePageComponents/Statistics/Statistics";
import UserLocalProfile from "./_Components/HomePageComponents/UserLocalProfile/UserLocalProfile";

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
export const fetchCache = "force-no-store";
