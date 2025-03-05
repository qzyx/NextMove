import Menu from "./Menu";

function Header() {
  return (
    <div className=" flex p-3 justify-between">
      <span className="text-xl">NextMove</span>
      <span>
        <Menu></Menu>
      </span>
    </div>
  );
}

export default Header;
