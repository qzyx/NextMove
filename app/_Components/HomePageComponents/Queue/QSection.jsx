
import { useAuth } from "@/app/_lib/authContext/AuthContext";
import Qbutton from "./Qbutton";

function QSection() {

  return (
    <div
      className="bg-gradient-to-b from-gray-900/60 to-gray-800 rounded-lg border border-gray-700 
        shadow-xl transition-colors col-span-1 lg:col-span-2 h-55 flex justify-center items-center"
    >
      
      <Qbutton></Qbutton>
    </div>
  );
}

export default QSection;
