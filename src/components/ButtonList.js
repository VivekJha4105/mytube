import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const buttonOptions = [
    "All",
    "Songs",
    "Mix",
    "Games",
    "News",
    "cricket",
    "Football",
    "Tech",
    "UI",
    "New",
    "Travel",
    "Food",
    "Cakes",
    "Books",
    "Carousel",
    "Appendix",
    "Hardware",
    "Software",
    "Bottles",
    "Laptops",
    "Cars",
    "Audi",
    "BMW",
    "Safari",
    "Anime",
    "Action",
    "GoingMerry",
    "Audit",
    "Astrophysics",
    "Dermitologist",
    "Country",
    "War",
    "Firearms",
    "CQC",
    "COD",
    "BGMI",
    "Plitics",
    "Elections",
  ];

  const box = document.getElementById("btnCarousel");

  const handlePrevClick = () => {
    if (!box?.clientWidth) return;
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - width;
  };
  const handleNextClick = () => {
    if (!box?.clientWidth) return;
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft + width;
  };
  return (
    <div className="relative overflow-hidden">
      <button className="absolute h-full mx-1" onClick={handlePrevClick}>
        <p className="p-2 rounded-lg font-bold bg-opacity-50 bg-slate-300 text-black hover:bg-black hover:text-white">
          &lt;
        </p>
      </button>
      <button
        className="absolute right-0 h-full mx-1"
        onClick={handleNextClick}
      >
        <p className="p-2 rounded-lg font-bold bg-slate-300 text-black hover:bg-black hover:text-white">
          &gt;
        </p>
      </button>
      <div
        id="btnCarousel"
        className="flex overflow-x-hidden scroll-smooth px-5"
      >
        {buttonOptions.map((option) => (
          <Button key={option} name={option} />
        ))}
      </div>
    </div>
  );
};

export default ButtonList;
