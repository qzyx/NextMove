import Link from "next/link";

export const Button = ({ children, icon, href, onClick }) => {
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
