import { PlayIcon } from "lucide-react";
import Link from "next/link";

function Qbutton() {
  return (
    <Link href={"/queue"} className="h-full w-full p-4">
      <button
        className="w-full h-full flex justify-center items-center group text-4xl font-medium
                  bg-gradient-to-r from-gray-800/50 via-gray-900/50 to-gray-800/50
                  hover:from-gray-800 hover:via-gray-900 hover:to-gray-800
                  border border-gray-700 hover:border-gray-500
                  rounded-xl shadow-lg transition-all duration-300
                  relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-600/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-700 transform"></div>

        <div className="flex items-center gap-2 relative justify-center z-10">
          <span className="transition-transform duration-300 group-hover:translate-x-[-15px] tracking-wider">
            QUEUE
          </span>
          <span
            className="absolute -right-9 opacity-0 translate-x-[-15px] transition-all duration-300 
                          group-hover:translate-x-0 group-hover:opacity-100"
          >
            <PlayIcon size={40} className="text-white/90" />
          </span>
        </div>

        <div
          className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-black to-white 
                      group-hover:w-full transition-all duration-500"
        ></div>
      </button>
    </Link>
  );
}

export default Qbutton;
