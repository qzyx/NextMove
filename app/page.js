import Header from "./_Components/Header";
import QueueButton from "./_Components/QueueButton";
import SpaceScene from "./_Components/SpaceTheme/SpaceTheme";

export default function Home() {
  return (
    <div className="h-screen w-full flex-col flex">
      <SpaceScene></SpaceScene>
      <Header></Header>
      <main className="w-full flex justify-center grow items-center">
        <QueueButton></QueueButton>
      </main>
    </div>
  );
}
