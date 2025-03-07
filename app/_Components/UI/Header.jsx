import { Info, LogOut, Mail } from "lucide-react";
import Link from "next/link";
import Menu from "../DropDown/Menu";

// Reusable header button component to ensure consistency
export const HeaderButton = ({ children, icon, href, onClick }) => {
  const ButtonIcon = icon;

  return (
    <Link
      href={href}
      onClick={onClick}
      className="group inline-flex items-center gap-2 px-3 py-1.5 
                text-gray-300 hover:text-white transition-all duration-200
                relative font-medium uppercase tracking-wide text-sm"
    >
      <span className="transition-transform duration-200 group-hover:translate-y-[-2px]">
        {ButtonIcon && <ButtonIcon size={14} />}
      </span>
      <span className="group-hover:text-white">{children}</span>
    </Link>
  );
};

function Header() {
  return (
    <div className="fixed bg-black/70 z-10 flex p-3 justify-between w-full md:justify-start items-center  gap-2 sm:gap-4 md:gap-6 xl:gap-10">
      <Link href={"/"} className="text-xl font-bold sm:text-2xl top-2 left-2">
        NextMove
      </Link>
      <div className="flex items-center gap-4 justify-between grow">
        <span className="flex gap-2 text-sm">
          <span>Logged in as</span>
          <span className="font-bold">Qwyxo</span>
        </span>
        <span className="block md:hidden">
          <Menu></Menu>
        </span>
        <span className="hidden md:flex items-center gap-6">
          <HeaderButton icon={Info} href="/about">
            About
          </HeaderButton>
          <HeaderButton icon={Mail} href="/contact">
            Contact
          </HeaderButton>
          <HeaderButton icon={LogOut} href="/logout">
            Log Out
          </HeaderButton>
        </span>
      </div>
    </div>
  );
}

export default Header;
