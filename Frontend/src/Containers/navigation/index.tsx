import { Link, NavLink } from "react-router-dom";
import { images } from '../../types/image';
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";

function Nav() {
  const [changeLang, setChangeLang] = useState(false);
  const [showMenu, setShowmenu] = useState(false)

  return (
    <div>
      <nav className="flex justify-between md:px-6 px-3 md:py-4 py-2 items-center">
        {/* Logo */}
        <div className="md:w-30 sm:25 w-20">
            <Link to="/">
                <img src={images.logo} alt="logo" className="w-full" />
            </Link>
        </div>

        {/* Navigation Links */}
        <div className="sm:flex md:gap-x-40 sm:gap-x-20 items-center hidden">
          <ul className="flex md:gap-x-20 sm:gap-x-10">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-primary font-semibold border-b-2 border-primary"
                    : "hover:text-blue-500"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-primary font-semibold border-b-2 border-primary"
                    : "hover:text-blue-500"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/internship"
                className={({ isActive }) =>
                  isActive
                    ? "text-primary font-semibold border-b-2 border-primary"
                    : "hover:text-blue-500"
                }
              >
                Internship
              </NavLink>
            </li>
          </ul>

          {/* Language Switch */}
          <div className="flex items-center gap-x-2">
            <FaChevronDown
              className="cursor-pointer"
              onClick={() => setChangeLang(!changeLang)}
            />
            <div className="w-8">
              {changeLang ? (
                <img src={images.england} alt="English" className="w-full" />
              ) : (
                <img src={images.france} alt="French" className="w-full" />
              )}
            </div>
            <p>{changeLang ? "EN" : "FR"}</p>
          </div>
        </div>
        <p className="sm:hidden"> <IoMenu size={30} onClick={() => setShowmenu(true)}/> </p>
      </nav>
      {
        showMenu && 
        <div className="absolute top-0 left-0 h-full bg-primary w-[70%] pt-7 px-2">
          <IoClose onClick={() => setShowmenu(false)} size={30} className=" absolute top-1 right-1 text-white"/>
        <div className="flex flex-col gap-y-10">
          <ul className="flex flex-col items-start gap-y-5 gap-x-10">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-secondary font-semibold border-b-2 border-secondary"
                    : "text-white hover:text-blue-500"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-secondary font-semibold border-b-2 border-secondary"
                    : "text-white hover:text-blue-500"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/internship"
                className={({ isActive }) =>
                  isActive
                    ? "text-secondary font-semibold border-b-2 border-secondary"
                    : "text-white hover:text-blue-500"
                }
              >
                Internship
              </NavLink>
            </li>
          </ul>

          {/* Language Switch */}
          <div className="flex items-center gap-x-2">
            <FaChevronDown
              className="cursor-pointer text-white"
              onClick={() => setChangeLang(!changeLang)}
            />
            <div className="w-5">
              {changeLang ? (
                <img src={images.england} alt="English" className="w-full" />
              ) : (
                <img src={images.france} alt="French" className="w-full" />
              )}
            </div>
            <p className="text-white">{changeLang ? "EN" : "FR"}</p>
          </div>
        </div>
        </div>
      }
    </div>
  );
}

export default Nav;
