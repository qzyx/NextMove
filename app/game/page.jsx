import { Suspense } from "react";
import TicTacToe from "../_Components/TicTacToe/TicTacToe";

function page() {
  return (
    <main className="w-full grow flex items-center justify-center">
      <Suspense
        fallback={
          <div className="flex flex-col items-center gap-2 text-white">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
            <p className="text-lg font-medium">Loading game...</p>
          </div>
        }
      >
        <TicTacToe />
      </Suspense>
    </main>
  );
}

export default page;
