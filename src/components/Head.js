import React, { useEffect, useState } from "react";
import {
  HAMBERGUR_MENU,
  USER_ICON,
  YOUTUBE_LOGO,
  YT_SEARCH_API,
} from "../utils/constants";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestionsList, setSearchSuggestionsList] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const dispatch = useDispatch();

  const handleMenuToggle = () => {
    dispatch(toggleMenu());
  };

  const getSearchSuggestions = async () => {
    const res = await fetch(YT_SEARCH_API + searchQuery);
    const data = await res.json();
    setSearchSuggestionsList(data[1]);
    // console.log(data);
  };

  useEffect(() => {
    // Making API calls after every key stroke.
    // If difference b/w consecutive key stroke is <200ms, decline API call.

    // Set debounce to put in the above in action, dicard the timeout to decline API Call.

    const timerId = setTimeout(() => getSearchSuggestions(), 300);

    // return of useEffect() is called when this component is unmounted, due to any reason.
    return () => clearTimeout(timerId);
  }, [searchQuery]);

  return (
    <div className="fixed p-4 w-[100%] shadow-lg flex justify-between z-20 bg-slate-100">
      <div className="flex">
        <img
          className="mt-1 p-1 w-14 h-8 cursor-pointer hover:shadow-lg"
          src={HAMBERGUR_MENU}
          alt="Menu"
          onClick={handleMenuToggle}
        />
        <img className="ml-2 w-24 h-10" src={YOUTUBE_LOGO} alt="Logo" />
      </div>
      <div className="w-[50%] relative">
        <input
          className="py-2 px-4 w-[80%] outline-none border-2 border-r-transparent rounded-l-full border-neutral-600"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={(e) => setShowSuggestion(true)}
          onBlur={(e) => setShowSuggestion(false)}
        />
        <button className="py-2 px4 w-[15%] bg-neutral-600 outline-none border-2 rounded-r-full border-neutral-600 text-white">
          Search
        </button>
        {showSuggestion && (
          <div className="absolute mt-1 rounded-lg bg-slate-800 text-white w-[80%] shadow-xl">
            <ul className="py-4">
              {searchSuggestionsList.map((suggestion, index) => (
                <li
                  key={index}
                  className="py-2 px-4 hover:bg-slate-500 cursor-pointer"
                >
                  🔍 {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div>
        <img className="w-12 pr-2" src={USER_ICON} alt="User" />
      </div>
    </div>
  );
};

export default Head;
