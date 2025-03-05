import LoadingSpinner from "../_Components/LoadingSpinner";

function page() {
  return (
    <main className="w-full grow flex flex-col items-center justify-center text-white">
      <div className="flex flex-col items-center gap-6">
        <LoadingSpinner size={60} borderWidth={4} />
        <p className="text-xl font-light tracking-wider">Finding a match...</p>
        <p className="font-bold">Qwyxo</p>
        <button className="border-[1px] border-red-500 p-2 hover:bg-red-500 transition-all duration-150 cursor-pointer rounded-md">
          Stop Queueing
        </button>
      </div>
    </main>
  );
}

export default page;
