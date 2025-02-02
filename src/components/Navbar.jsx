import { useState } from "react";
import { CgCloseR, CgMenuBoxed } from "react-icons/cg";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navlinks = [
    { title: "Home", to: "/" },
    { title: "Skills", to: "/skills" },
    { title: "Projects", to: "/projects" },
    { title: "Contact", to: "/contact" },
  ];

  return (
    <nav className="shadow-md w-full fixed top-0 left-0 z-20 bg-white">
      <div className="container mx-auto md:flex items-center justify-between py-4 md:px-10 px-7">
        <div>
          <Link to="/">
            <figure className="w-12">
              <img
                src="https://avatars.githubusercontent.com/u/127019207?v=4"
                alt="Profile Image"
              />
            </figure>
          </Link>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-[18px] cursor-pointer md:hidden"
        >
          {open ? (
            <CgCloseR className="text-2xl mt-[3.5px] mr-[2.5px]" />
          ) : (
            <CgMenuBoxed className="text-3xl" />
          )}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-4 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-7  border-gray-800 transition-all duration-500 ease-in ${
            open
              ? "top-[64px] opacity-100 border-t-2"
              : "top-[-200px] md:opacity-100 opacity-0 border-t-0"
          }`}
        >
          {navlinks.map((link) => (
            <li key={link.title} className="md:ml-8 text-xl md:my-0 my-7">
              <NavLink
                to={link.to}
                activeClassName="text-red-800"
                className="text-gray-800 hover:text-gray-600 duration-500"
              >
                {link.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
