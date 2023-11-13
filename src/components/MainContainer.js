import React from "react";
import ButtonList from "./ButtonList";
import VideoContanier from "./VideoContanier";

const MainContainer = () => {
  return (
    <div className="w-[87%] bg-zinc-500">
      <ButtonList />
      <VideoContanier />
    </div>
  );
};

export default MainContainer;
