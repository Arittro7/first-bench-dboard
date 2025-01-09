import { useState } from "react";
import proImg from "../../assets/letter-p.png"
import { IoIosArrowDown } from "react-icons/io";

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
    <div className="navbar bg-slate-800 text-white ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {navItems.map((item) => (
          <li
            key={item}
            className={`px-4 py-2 cursor-pointer ${
              active === item ? "text-green-600 font-bold" : "text-gray-200"
            }`}
            onClick={() => setActive(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl ml-20">Firstbench</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-4">
    {navItems.map((item) => (
          <li
            key={item}
            className={`px-4 py-2 cursor-pointer ${
              active === item ? "text-green-600 font-bold" : "text-gray-200"
            }`}
            onClick={() => setActive(item)}
          >
            {item}
          </li>
        ))}
    </ul>
  </div>
  <div className="navbar-end mr-20">
    <div className="flex items-center space-x-2 bg-slate-600 w-32 p-2 rounded-xl">
      <img className="w-6 bg-orange-400 h-6 p-1 rounded-md " src={proImg} alt="" />
      <button>Profile</button>
      <IoIosArrowDown></IoIosArrowDown>
    </div>
  </div>
</div>
  );
};

export default Navbar;