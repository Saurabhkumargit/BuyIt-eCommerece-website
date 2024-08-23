import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../content/ShopContext";
import { assets } from "../assets/assets";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
  const [visible, setVisible] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setVisible(location.pathname.includes('store') && showSearch);
  }, [location, showSearch]);

  return visible ? (
    <div role="search" className="border-t border-b py-2 text-gray-800 text-center">
      <div className="inline-flex items-center justify-center border border-gray-400 bg-white max-w-md w-full">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 outline-none bg-transparent text-sm px-2 py-1"
          type="text"
          placeholder="Search products"
          aria-label="Search input"
        />
        <img className="w-4 mr-2" src={assets.search_icon} alt="Search" />
      </div>
      <button
        onClick={() => setShowSearch(false)}
        className="ml-2 p-1"
        aria-label="Close search"
      >
        <img className="w-3" src={assets.cross_icon} alt="Close" />
      </button>
    </div>
  ) : null;
};

export default SearchBar;
