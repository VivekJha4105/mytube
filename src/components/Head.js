import React from "react";
import { HAMBERGUR_MENU, USER_ICON, YOUTUBE_LOGO } from "../utils/constants";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();

  const handleMenuToggle = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="p-4 shadow-lg flex justify-between">
      <div className="flex">
        <img
          className="mt-1 p-1 w-14 h-8 cursor-pointer hover:shadow-lg"
          src={HAMBERGUR_MENU}
          alt="Menu"
          onClick={handleMenuToggle}
        />
        <img className="ml-2 w-24 h-10" src={YOUTUBE_LOGO} alt="Logo" />
      </div>
      <div className="w-[50%]">
        <input
          className="py-2 px-4 w-[80%] outline-none border-2 border-r-transparent rounded-l-full border-neutral-600"
          type="text"
        />
        <button className="py-2 px4 w-[15%] bg-neutral-600 outline-none border-2 rounded-r-full border-neutral-600 text-white">
          Search
        </button>
      </div>
      <div>
        <img className="w-12 pr-2" src={USER_ICON} alt="User" />
      </div>
    </div>
  );
};

export default Head;
