"use client";

import { ChevronDown, ChevronUp, MenuSquareIcon } from "lucide-react";
import { useState } from "react";
import DropDownItem from "./DropDownItem";

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
      <div className="gap-2 hidden md:block text-white"></div>
      {isOpen && (
        <div className="dropDown-menu  text-black font-bold flex flex-col gap-2 p-2 absolute w-40  border-[1px] bg-white/80 rounded right-2">
          <DropDownItem>About</DropDownItem>
          <DropDownItem>Contact</DropDownItem>
        </div>
      )}
    </div>
  );
}

export default Menu;
