import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    isMenuOpen && (
      <div className="p-4 w-[13%]">
        <ul className="text-xl font-bold">
          <li className="p-2 rounded-xl hover:bg-gray-300">Home</li>
          <li className="p-2 rounded-xl hover:bg-gray-300">Shorts</li>
          <li className="p-2 rounded-xl hover:bg-gray-300">Live</li>
        </ul>
        <h1 className="py-2 text-2xl font-bold rounded-xl">Explore</h1>
        <ul>
          <li className="p-2 rounded-xl hover:bg-gray-300">Music</li>
          <li className="p-2 rounded-xl hover:bg-gray-300">Sports</li>
          <li className="p-2 rounded-xl hover:bg-gray-300">Gaming</li>
          <li className="p-2 rounded-xl hover:bg-gray-300">Movies</li>
        </ul>
        <h1 className="py-2 text-2xl font-bold rounded-xl">Subscriptions</h1>
        <ul>
          <li className="p-2 rounded-xl hover:bg-gray-300">Channel 01</li>
          <li className="p-2 rounded-xl hover:bg-gray-300">Channel 02</li>
          <li className="p-2 rounded-xl hover:bg-gray-300">Channel 03</li>
          <li className="p-2 rounded-xl hover:bg-gray-300">Channel 04</li>
        </ul>
      </div>
    )
  );
};

export default Sidebar;
