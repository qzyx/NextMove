import SpaceScene from "./_Components/SpaceTheme/SpaceTheme";

export default function Home() {
  return (
    <main className="w-full h-screen flex justify-center items-center">
      <SpaceScene></SpaceScene>
      <button className="px-5 py-3 text-3xl bg-black/70  rounded-md border-[1px]">Queue</button>
    </main>
  );
}
