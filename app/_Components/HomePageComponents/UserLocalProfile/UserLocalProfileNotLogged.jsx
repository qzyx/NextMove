import Link from "next/link";

import { LogOut } from "lucide-react";
import { Button } from "../../UI/Button";

export default function NotLoggedIn() {
  return (
    <>
      <div className="w-full h-full relative flex flex-col gap-10">
        <span className="absolute z-1 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
          <Button icon={LogOut} href={"/login"}>
            Login
          </Button>
        </span>
        <div className="h-7 w-[30%] rounded-lg bg-gray-800 animate-pulse"></div>
        <div className="h-8 w-[40%] rounded-lg bg-gray-800 animate-pulse"></div>
        <div className="h-7 w-[45%] rounded-lg bg-gray-800 animate-pulse"></div>
      </div>
    </>
  );
}
// absolute z-1 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]
