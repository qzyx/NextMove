import Qbutton from "./Qbutton";

function QSection() {
  return (
    <div
      className="bg-gradient-to-b from-gray-900/60 to-gray-800 rounded-lg border border-gray-700 
        shadow-xl transition-colors col-span-1 lg:col-span-2 h-55 flex justify-center items-center p-6"
    >
      <div className="flex flex-col items-center gap-2 w-full">
        <h2 className="text-xl font-medium mb-4 text-center text-gray-200">
          Find Match
        </h2>
        <p className="text-gray-400 text-center">
          Face players from around the world!
        </p>
        <Qbutton />
      </div>
    </div>
  );
}

export default QSection;
