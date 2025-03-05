import DropDownItem from "./DropDownItem";
import Menu from "./Menu";

function Header() {
  return (
    <div className=" flex p-3 justify-between md:justify-start  relative gap-10">
      <span className="text-xl font-bold sm:text-2xl top-2 left-2">
        NextMove
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
  );
}

export default Header;
