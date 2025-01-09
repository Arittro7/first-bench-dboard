import { useState } from "react";
import proImg from "../../assets/letter-p.png";
import logo from "../../assets/logo.png";
import { IoIosArrowDown } from "react-icons/io";
import { FaRegBell } from "react-icons/fa";

const Navbar = () => {
  const [active, setActive] = useState("Dashboard");

  const navItems = [
    "Dashboard",
    "FirstGuru",
    "TownHall",
    "AIEvaluation",
    "Performance",
    "MockTest",
  ];

  return (
    <div className="navbar bg-slate-800 text-white px-4">
      {/* Navbar Start */}
      <div className="navbar-start">
        {/* Dropdown for mobile */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navItems.map((item) => (
              <li
                key={item}
                className={`px-4 py-2 cursor-pointer hover:bg-gray-200 hover:text-black transition-all duration-300 rounded-md ${
                  active === item ? "text-green-600 font-bold" : "text-gray-800"
                }`}
                onClick={() => setActive(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        {/* Logo */}
        <div className="flex items-center ml-4 lg:ml-20">
          <img className="w-8" src={logo} alt="logo" />
          <a className=" hidden sm:inline btn btn-ghost text-xl -ml-4 ">Firstbench</a>
        </div>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4">
          {navItems.map((item) => (
            <li
              key={item}
              className={`px-4 py-2 cursor-pointer hover:bg-gray-700 rounded-md transition-all duration-300 ${
                active === item ? "text-green-600 font-bold" : "text-gray-200"
              }`}
              onClick={() => setActive(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end mr-4 lg:mr-20">
        <FaRegBell className="mr-3 text-xl cursor-pointer hover:text-gray-400 transition-all duration-300" />
        <div className="flex items-center space-x-2 bg-slate-600 w-auto px-4 py-2 rounded-xl cursor-pointer hover:bg-slate-500 transition-all duration-300">
          <img
            className="w-6 h-6 bg-orange-400 p-1 rounded-md"
            src={proImg}
            alt="profile"
          />
          <button className="text-sm font-medium">Profile</button>
          <IoIosArrowDown className="text-sm" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
