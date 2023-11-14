import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";

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
    <div className="p-6 w-[100%] bg-black">
      <iframe
        className="w-[60%] h-[30rem]"
        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WatchPage;
