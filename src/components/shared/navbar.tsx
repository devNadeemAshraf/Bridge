import { ThemeToggle } from "../theme-toggle";

const Navbar = () => {
  return (
    <nav className="w-full h-16 max-w-[1280px] flex items-center justify-between">
      <span className="font-mono text-xl font-bold">Bridge</span>
      <ThemeToggle />
      {/* User Profile once authenticated */}
    </nav>
  );
};

export default Navbar;
