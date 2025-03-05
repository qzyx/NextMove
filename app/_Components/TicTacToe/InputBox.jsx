function InputBox({ children }) {
  return (
    <div className="cell w-24 h-24 bg-gradient-to-br border-[1px] rounded-md   flex items-center justify-center text-4xl font-bold bg-black/70 ">
      {children}
    </div>
  );
}

export default InputBox;
