import React, { useEffect, useState } from "react";
import {
  HAMBERGUR_MENU,
  USER_ICON,
  YOUTUBE_LOGO,
  YT_SEARCH_API,
} from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { cacheResults } from "../utils/searchSlice";
import { toggleTheme } from "../utils/themeSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestionsList, setSearchSuggestionsList] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search.searchSuggestions);
  const isDark = useSelector((store) => store.theme.isDark);

  const handleMenuToggle = () => {
    dispatch(toggleMenu());
  };

  const getSearchSuggestions = async () => {
    const res = await fetch(YT_SEARCH_API + searchQuery);
    const data = await res.json();
    setSearchSuggestionsList(data[1]);

    // Update cache with the search suggestions result.
    dispatch(
      cacheResults({
        [searchQuery]: data[1],
      })
    );
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      // Check if search results for the current searchQuery is already in cache.
      if (searchCache[searchQuery]) {
        setSearchSuggestionsList(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 500);

    // return of useEffect() is called when this component is unmounted, due to any reason.
    return () => clearTimeout(timerId);
  }, [searchQuery]);

  console.log(isDark);

  return (
    <div className="fixed p-4 w-[100%] shadow-lg flex justify-between z-20 bg-headBackground text-text ">
      <div className="flex">
        <img
          className="mt-1 p-1 w-14 h-8 cursor-pointer hover:shadow-lg"
          src={HAMBERGUR_MENU}
          alt="Menu"
          onClick={handleMenuToggle}
        />
        <div>
          <img
            className="ml-2 w-24 h-10 cursor-pointer"
            src={YOUTUBE_LOGO}
            alt="Logo"
          />
        </div>
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
            <ul className="">
              {searchSuggestionsList.map((suggestion, index) => (
                <li
                  key={index}
                  className="py-2 px-4 hover:bg-slate-500 cursor-pointer rounded-lg"
                >
                  🔍 {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="flex justify-center items-center">
        <span className="font-bold tracking-tight text-xl mr-1">
          {isDark ? "Light Mode:" : "Dark Mode:"}
        </span>
        <label className="relative inline-block w-[4em] h-[2em] mt-1">
          <input
            type="checkbox"
            checked={isDark}
            onClick={() => dispatch(toggleTheme())}
            className="ml-2 peer"
          />
          <span className="absolute p-1 bg-teal-600 inset-0 cursor-pointer transition-all rounded-2xl peer-checked:bg-pink-500 before:absolute before:contents-[''] before:w-[1.7em] before:h-[1.5em] before:rounded-full before:bg-background before:transition-all peer-checked:before:translate-x-[100%]"></span>
        </label>
      </div>
      <div>
        <img className="w-12 pr-2" src={USER_ICON} alt="User" />
      </div>
    </div>
  );
};

export default Head;
