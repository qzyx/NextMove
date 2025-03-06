import Link from "next/link";
import DropDownItem from "./DropDownItem";
import Menu from "./Menu";

function Header() {
  return (
    <div className=" fixed bg-black/70 flex p-3 justify-between w-full md:justify-start items-center   gap-10">
      <Link href={"/"} className="text-xl font-bold sm:text-2xl top-2 left-2">
        NextMove
      </Link>
      <div className="flex items-center gap-4 justify-between grow">
        <span className="flex gap-2 text-sm  ">
          <span>Logged in as</span>
          <span className="font-bold">Qwyxo</span>
        </span>
        <span className="block md:hidden">
          <Menu></Menu>
        </span>
        <span className="hidden md:flex items-center gap-6   ">
          <button className="hover:text-gray-300 cursor-pointer transition-all uppercase duration-150">
            About
          </button>
          <button className="hover:text-gray-300 cursor-pointer transition-all uppercase duration-150">
            Contact
          </button>
        </span>
      </div>
    </div>
  );
}

export default Header;
