import { PlayIcon } from "lucide-react";

function QueueButton() {
  return (
    <button className="px-10 py-3 group bg-black/50 hover:bg-black/70 transition-all duration-300 rounded-md border-[1px] border-white/30 hover:border-white/50 cursor-pointer flex items-center justify-center shadow-lg hover:shadow-xl">
      <div className="flex items-center relative w-auto">
        <span className="text-2xl text-white/90 font-medium transform group-hover:translate-x-[-8px] transition-all duration-300">
          Queue
        </span>
        <div className="absolute left-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-[-5px]">
          <PlayIcon size={20} className="text-white/90" />
        </div>
      </div>
    </button>
  );
}

export default QueueButton;
