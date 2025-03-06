import Link from "next/link";

export default function StopQueueButton() {
  return (
    <Link href={"/"}>
      <button className="border-[1px] border-red-500 p-2 hover:bg-red-500 transition-all duration-150 cursor-pointer rounded-md">
        Stop Queueing
      </button>
    </Link>
  );
}
