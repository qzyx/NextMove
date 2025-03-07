import Link from "next/link";
import LoadingSpinner from "../_Components/UI/LoadingSpinner";
import StopQueueButton from "./StopQueueButton";

function page() {
  return (
    <main className="w-full grow flex flex-col items-center justify-center text-white">
      <div className="flex flex-col items-center gap-6">
        <LoadingSpinner size={60} borderWidth={4} />
        <p className="text-xl font-light tracking-wider">Finding a match...</p>
        <p className="font-bold">Qwyxo</p>
        <StopQueueButton></StopQueueButton>
        <Link href={"/game"}>To Game</Link>
      </div>
    </main>
  );
}

export default page;
