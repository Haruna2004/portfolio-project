import { navlinks } from "../../constants";
import menu_icon from "../../assets/menu-icon.svg";
import { useState } from "react";
import cn from "classnames";
function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav className=" text-xl flex items-center justify-between px-5 sm:px-14 xl:px-24 py-5 sm:py-10 relative">
      {/* logo */}
      <a href="#" className="flex items-center justify-center gap-2">
        <p className="bg-blue-400 px-3 py-1 text-center rounded-full leading-0 font-mono">
          D
        </p>
        <h4>Daniel Creed</h4>
      </a>

      {/* navlinks */}
      {/* desktop */}
      <ul className="md:flex items-center gap-5 hidden">
        {navlinks.map(({ title, link }) => (
          <li key={title} className="">
            <a href={link}>{title}</a>
          </li>
        ))}
      </ul>
      {/* mobile */}
      <div
        className="flex md:hidden cursor-pointer"
        onClick={() => setOpenMenu((prev) => !prev)}
      >
        <img src={menu_icon} alt="menu" className="w-6 h-6" />
      </div>
      <div
        className={cn(
          "absolute right-5 top-16 nav-bg p-4 rounded-xl transition-opacity duration-200",
          !openMenu && "opacity-0"
        )}
      >
        <ul className="flex flex-col gap-2">
          {navlinks.map(({ title, link }) => (
            <li key={title} className="hover:text-white hover:scale-105">
              <a href={link}>{title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
