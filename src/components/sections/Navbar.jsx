import { navlinks } from "../../constants";
import menu_icon from "../../assets/menu-icon.svg";
function Navbar() {
  return (
    <nav className=" text-xl flex items-center justify-between px-14 xl:px-24 py-10">
      {/* logo */}
      <a href="#" className="flex items-center justify-center gap-2">
        <div className="bg-blue-400 w-8 h-8 text-center rounded-full">D</div>
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
      <div className="flex md:hidden">
        <img src={menu_icon} alt="menu" className="w-6 h-6" />
      </div>
    </nav>
  );
}

export default Navbar;
