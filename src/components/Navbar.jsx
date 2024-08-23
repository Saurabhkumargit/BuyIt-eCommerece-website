import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { ShopContext } from "../content/ShopContext";

function Navbar() {

    const [visible, setvisible] = useState(false);

    const {setShowSearch, getCartCount} = useContext(ShopContext);

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex items-center justify-between">
        <ul className="flex gap-5">
          <li>
            <NavLink to="/" className="flex flex-col items-center gap-1 text-gray-700 hover:text-black">
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/store" className="flex flex-col items-center gap-1 text-gray-700 hover:text-black">
              STORE
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="flex flex-col items-center gap-1 text-gray-700 hover:text-black">
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="flex flex-col items-center gap-1 text-gray-700 hover:text-black">
              CONTACT
            </NavLink>
          </li>
        </ul>
        <div className="flex items-center gap-6">
          <img onClick={()=>setShowSearch(true)} src={assets.search_icon} className="w-5 cursor-pointer" alt="Search" />

          <div className="group relative">
            <Link to='/login'><img className="w-5 cursor-pointer" src={assets.profile_icon} alt="Profile" /></Link>
            <div className="hidden group-hover:block absolute dropdown-menu right-0 pt-4 bg-white shadow-md p-2">
              <div className="flex flex-col gap-2">
                <p className="cursor-pointer hover:text-black">My Profile</p>
                <p className="cursor-pointer hover:text-black">Orders</p>
                <p className="cursor-pointer hover:text-black">Logout</p>
              </div>
            </div>
          </div>
          <Link to="/cart" className="relative">
            <img src={assets.cart_icon} className="w-5 min-w-5" alt="Cart" />
            <span className="absolute top-[-8px] right-[-8px] bg-red-500 text-white rounded-full text-xs px-2 py-1">{getCartCount()}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;