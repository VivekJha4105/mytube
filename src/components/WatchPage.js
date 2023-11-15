import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams(); // Gives the searchParams string and the setter function to set and make changes to the query params.
  //   console.log(searchParams);

  useEffect(() => {
    dispatch(closeMenu());

    /**
     * ? dispatch(toggleMenu());  Action dispatched but changes not reflected with the state variable.
     * */
  }, []);

  return (
    <div className="flex flex-col p-4 w-[100%] bg-slate-700">
      <div className="p-1 mx-auto flex w-[85%] h-[30rem]">
        <iframe
          className="w-[100%] h-[100%]"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <LiveChat />
      </div>
      <CommentContainer />
    </div>
  );
};

export default WatchPage;
