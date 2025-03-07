"use client";

import { ChevronDown, ChevronUp, Info, Mail } from "lucide-react";
import { useState } from "react";
import { HeaderButton } from "../UI/Header";

function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  function handleClick() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="relative ">
      <button onClick={handleClick} className="block md:hidden">
        {isOpen ? (
          <ChevronUp size={35}></ChevronUp>
        ) : (
          <ChevronDown size={35}></ChevronDown>
        )}
      </button>

      {isOpen && (
        <div className="dropDown-menu  text-black font-bold flex flex-col gap-2 p-2 absolute w-40  border-[1px]  bg-black rounded right-2">
          <HeaderButton icon={Info} href="/about">
            About
          </HeaderButton>
          <HeaderButton icon={Mail} href="/contact">
            Contact
          </HeaderButton>
          <HeaderButton icon={Mail} href="/logout">
            Log Out
          </HeaderButton>
        </div>
      )}
    </div>
  );
}

export default Menu;
