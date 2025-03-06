import TopPlayerItem from "./TopPlayerItem";

export default function TopPlayersForm() {
  return (
    <div className="flex w-full overflow-hidden  flex-col items-center max-h-full shadow-xl gap-2">
      <div>
        <span className="text-xl">Top Players</span>
      </div>
      <div className="bg-black/60 border-[#eae7e198] border-1 rounded-xl w-[95%] h-[80%] flex flex-col p-2 overflow-scroll gap-1">
        <TopPlayerItem></TopPlayerItem>
        <TopPlayerItem></TopPlayerItem>
        <TopPlayerItem></TopPlayerItem>
        <TopPlayerItem></TopPlayerItem>
        <TopPlayerItem></TopPlayerItem>
        <TopPlayerItem></TopPlayerItem>
        <TopPlayerItem></TopPlayerItem>
        <TopPlayerItem></TopPlayerItem>
        <TopPlayerItem></TopPlayerItem>
      </div>
      <button>See All</button>
    </div>
  );
}
