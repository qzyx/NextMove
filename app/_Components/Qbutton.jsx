import { PlayIcon } from "lucide-react";
import Link from "next/link";

function Qbutton() {
  return (
    <Link
      href={"/game"}
      className="px-10  py-3 group gap-2 text-2xl bg-black/50 transition-all duration-300  rounded-md border-[1px] cursor-pointer"
    >
      <div className="flex items-center gap-2 relative">
        <span className="transition-transform duration-300 group-hover:translate-x-[-10px]">
          Queue
        </span>
        <span className="absolute -right-6 opacity-0 translate-x-[-10px] transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 group-hover:inline-block">
          <PlayIcon size={25}></PlayIcon>
        </span>
      </div>
    </Link>
  );
}

export default Qbutton;
