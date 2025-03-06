function ProfileButton({ children }) {
  return (
    <button className="relative cursor-pointer after:content-[''] after:block after:w-full after:h-[1px] after:bg-white after:absolute after:bottom-0 after:left-0 after:transition-transform after:duration-300 after:scale-x-0 hover:after:scale-x-100">
      {children}
    </button>
  );
}

export default ProfileButton;
