import Qbutton from "./_Components/Qbutton";
import GameIntroduction from "./_Components/UI/GameIntroduction";
import NameTag from "./_Components/UI/NameTag";

export default function Home() {
  return (
    <main className="w-full flex-col md:flex-row mb-10 flex grow justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 items-center lg:justify-around">
      <div className="flex-1 lg:w-80 xl:w-96 lg:flex-none hidden md:flex mx-4 max-h[90%] min-h-[20%] border p-2 rounded-md w-[80%]">
        <GameIntroduction></GameIntroduction>
      </div>
      <span className="flex my-10 flex-col  items-center gap-2 justify-center">
        <Qbutton></Qbutton>
        <NameTag></NameTag>
      </span>

      <div className="flex-1 flex md:hidden mx-4 max-h[90%] min-h-[20%] border p-2 rounded-md w-[80%]">
        <GameIntroduction></GameIntroduction>
      </div>
      <div className="flex-1 lg:w-80 xl:w-96 lg:flex-none  flex mx-4 max-h[90%] min-h-[20%] border p-2 rounded-md w-[80%]">
        family
      </div>
    </main>
  );
}
