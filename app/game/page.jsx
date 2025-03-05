import { Loader } from "lucide-react";
import SpaceScene from "../_Components/SpaceTheme/SpaceTheme";
import TicTacToe from "../_Components/TicTacToe/TicTacToe";
import { Suspense } from "react";

function page() {
  return (
    <>
      <main className=" inset-0 w-full h-full flex items-center justify-center">
        <Suspense
          fallback={
            <div className="flex flex-col items-center gap-2 text-white">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500"></div>
              <p className="text-lg font-medium">Loading game...</p>
            </div>
          }
        >
          <TicTacToe />
        </Suspense>
      </main>
    </>
  );
}

export default page;
