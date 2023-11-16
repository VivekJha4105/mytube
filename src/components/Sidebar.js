import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    isMenuOpen && (
      <div className="absolute p-4 w-[13%] h-fit bg-slate-300">
        <ul className="text-xl font-bold">
          <Link>
            <li className="p-2 rounded-xl hover:bg-gray-400">Home</li>
          </Link>
          <li className="p-2 rounded-xl hover:bg-gray-400">Shorts</li>
          <li className="p-2 rounded-xl hover:bg-gray-400">Live</li>
        </ul>
        <h1 className="py-2 text-2xl font-bold rounded-xl">Explore</h1>
        <ul>
          <li className="p-2 rounded-xl hover:bg-gray-400">Music</li>
          <li className="p-2 rounded-xl hover:bg-gray-400">Sports</li>
          <li className="p-2 rounded-xl hover:bg-gray-400">Gaming</li>
          <li className="p-2 rounded-xl hover:bg-gray-400">Movies</li>
        </ul>
        <h1 className="py-2 text-2xl font-bold rounded-xl">Subscriptions</h1>
        <ul>
          <li className="p-2 rounded-xl hover:bg-gray-400">Channel 01</li>
          <li className="p-2 rounded-xl hover:bg-gray-400">Channel 02</li>
          <li className="p-2 rounded-xl hover:bg-gray-400">Channel 03</li>
          <li className="p-2 rounded-xl hover:bg-gray-400">Channel 04</li>
          <li className="p-2 rounded-xl hover:bg-gray-400">Channel 04</li>
        </ul>
      </div>
    )
  );
};

export default Sidebar;
