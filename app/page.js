import Qbutton from "./_Components/Qbutton";
import TopPlayersForm from "./_Components/TopPlayersForm";
import GameIntroduction from "./_Components/UI/GameIntroduction";
import NameTag from "./_Components/UI/NameTag";

export default function Home() {
  return (
    <main className="w-full mt-10 md:mt-0 flex-col md:flex-row mb-10 flex grow justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 items-center lg:justify-around">
      <div className=" md:w-80 xl:w-96 w-[80%]  hidden md:flex  max-h[90%] mx-4 min-h-[50%] border p-2 rounded-md ">
        <GameIntroduction></GameIntroduction>
      </div>
      <span className="flex my-10 flex-col  items-center gap-2 justify-center">
        <Qbutton></Qbutton>
        <NameTag></NameTag>
      </span>
      <div className=" flex-1 md:flex-none md:w-80 xl:w-96 flex  md:mx-4 max-h[50%] md:h-80 min-h-[50%] border p-2 rounded-md w-[80%]">
        <TopPlayersForm></TopPlayersForm>
      </div>

      <div className="flex-1 flex md:hidden mx-4 max-h[90%] min-h-[50%] border p-2 rounded-md w-[80%]">
        <GameIntroduction></GameIntroduction>
      </div>
    </main>
  );
}
