"use client";

import { Info, LogOut, Mail } from "lucide-react";
import Link from "next/link";
import Menu from "../DropDown/Menu";
import { useAuth } from "@/app/_lib/authContext/AuthContext";
import { Button } from "./Button";

// Reusable header button component to ensure consistency

function Header() {
  const { user } = useAuth();
  

  return (
    <div className="fixed bg-black/70 z-10 flex p-3 justify-between w-full md:justify-start items-center  gap-2 sm:gap-4 md:gap-6 xl:gap-10">
      <Link href={"/"} className="text-xl font-bold sm:text-2xl top-2 left-2">
        NextMove
      </Link>
      <div className="flex items-center gap-4 justify-between grow">
        {user ? (
          <span className="flex gap-2 text-sm">
            <span>Logged in as</span>
            <span className="font-bold">{user.user_metadata.username}</span>
          </span>
        ) : (
          <span></span>
        )}

        <span className="block md:hidden">
          <Menu></Menu>
        </span>
        <span className="hidden md:flex items-center gap-6">
          <Button icon={Info} href="/about">
            About
          </Button>
          <Button icon={Mail} href="/contact">
            Contact
          </Button>
          <Button icon={LogOut} href={user ? "/logout" : "/login"}>
            {user ? "Logout" : "Login"}
          </Button>
        </span>
      </div>
    </div>
  );
}

export default Header;
