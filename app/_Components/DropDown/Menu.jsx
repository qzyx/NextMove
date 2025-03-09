"use client";

import { ChevronDown, ChevronUp, Info, Mail } from "lucide-react";
import { useState } from "react";

import { Button } from "../UI/Button";

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
          <Button icon={Info} href="/about">
            About
          </Button>
          <Button icon={Mail} href="/contact">
            Contact
          </Button>
          <Button icon={Mail} href="/logout">
            Log Out
          </Button>
        </div>
      )}
    </div>
  );
}

export default Menu;
