const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between md:px-28 px-8 py-3 md:py-4 shadow-sm items-center fixed min-w-full backdrop-blur rounded-2xl z-20 bg-slate-100 bg-opacity-30">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 gradient rounded-full shadow-sm" />
        <a href="/" className="text-lg font-semibold tracking-widest">
          ANISH
        </a>
      </div>
      <div className="flex">
        <a href="/" className="hover:scale-105 transition-all font-medium">
          About
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
