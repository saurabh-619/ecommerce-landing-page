import React from "react";
import { FaBars, FaDrupal, FaRegHeart } from "react-icons/fa";
import { FiUser, FiShoppingBag } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav
      className="border-b-2 app-y-center border-b-gray-100 "
      style={{ height: "12vh" }}
    >
      <div className="h-full px-12 border-r-2 app-y-center border-r-gray-100">
        <FaBars size={22} />
      </div>
      <div className="px-12 app-r-border">
        <FaDrupal size={22} />
      </div>
      <div className="px-12 app-r-border">
        <h3 className="mr-8 text-xs font-bold app-cursor">NEW</h3>
        <h3 className="mr-8 text-xs font-bold app-cursor">SALE</h3>
        <h3 className="mr-8 text-xs font-bold app-cursor">MEN</h3>
        <h3 className="h-full mr-32 text-xs font-bold border-b-2 app-y-center app-cursor border-b-pink-400">
          WOMEN
        </h3>
      </div>
      <div className="w-3/4 app-r-border app-center">
        <div className="relative mr-8">
          <FaRegHeart size={22} />
          <div className="absolute w-4 h-4 text-xs font-thin text-white bg-black rounded-full -top-1 -right-2 app-center">
            8
          </div>
        </div>
        <h3 className="text-xs font-bold app-cursor">SEARCH</h3>
      </div>

      <div className="w-1/4 app-center">
        <FiShoppingBag size={22} className="mr-6 z-10 relative" />
        <FiUser size={22} className="z-10 relative" />
      </div>
    </nav>
  );
};

export default Navbar;
