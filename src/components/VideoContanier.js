import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { POPULAR_VIDEOS_API } from "../utils/constants";
import { Link } from "react-router-dom";

const VideoContanier = () => {
  const [videos, setVideos] = useState([]);

  const getPopularVideos = async () => {
    const res = await fetch(POPULAR_VIDEOS_API);
    const data = await res.json();
    setVideos(data.items);
  };

  useEffect(() => {
    getPopularVideos();
  }, []);

  if (videos.length === 0) return;

  return (
    <div className="px-4 py-3 h-auto flex flex-wrap gap-4">
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id} className="w-[32%]" key={video.id}>
          <VideoCard videoData={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContanier;
