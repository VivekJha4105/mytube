import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    isMenuOpen && (
      <div className="absolute p-4 w-[13%] h-full bg-sidebarBackground text-text rounded-r-lg ">
        <ul className="text-xl font-bold">
          <Link>
            <li className="p-2 rounded-xl hover:bg-gray-400">Home</li>
          </Link>
          <li className="list__item">Shorts</li>
          <li className="list__item">Live</li>
        </ul>
        <h1 className="py-2 text-2xl font-bold rounded-xl">Explore</h1>
        <ul>
          <li className="list__item">Music</li>
          <li className="list__item">Sports</li>
          <li className="list__item">Gaming</li>
          <li className="list__item">Movies</li>
        </ul>
        <h1 className="py-2 text-2xl font-bold rounded-xl">Subscriptions</h1>
        <ul>
          <li className="list__item">Channel 01</li>
          <li className="list__item">Channel 02</li>
          <li className="list__item">Channel 03</li>
          <li className="list__item">Channel 04</li>
          <li className="list__item">Channel 04</li>
        </ul>
      </div>
    )
  );
};

export default Sidebar;
