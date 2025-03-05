function DropDownItem({ children }) {
  return (
    <button className="text-start cursor-pointer hover:pl-2 transition-all duration-300">
      {children}
    </button>
  );
}

export default DropDownItem;
