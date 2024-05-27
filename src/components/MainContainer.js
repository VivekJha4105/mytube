import React, { useReducer } from "react";
import ButtonList from "./ButtonList";
import VideoContanier from "./VideoContanier";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    <div className={` ${isMenuOpen ? "w-[87%] ml-[13%]" : "w-full ml-2"}`}>
      <ButtonList />
      <VideoContanier />
    </div>
  );
};

export default MainContainer;
