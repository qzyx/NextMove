import Qbutton from "./_Components/Qbutton";
import NameTag from "./_Components/UI/NameTag";

export default function Home() {
  return (
    <main className="w-full flex-col md:flex-row mb-10 flex grow justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 items-center">
      <div className="flex-1 mx-4 max-h[90%] min-h-[20%] border p-2 rounded-md">
        family
      </div>
      <span className="flex flex-col  items-center gap-2 justify-center">
        <Qbutton></Qbutton>
        <NameTag></NameTag>
      </span>
      <div className="flex-1 mx-4 max-h[90%] min-h-[20%] border p-2  rounded-md">
        family
      </div>
    </main>
  );
}
