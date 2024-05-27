import React from "react";

const VideoCard = ({ videoData }) => {
  const { snippet, statistics } = videoData;
  const { channelTitle, title, thumbnails, publishedAt } = snippet;
  return (
    <div className="px-2 pt-3 pb-2 w-[100%] shadow-lg bg-cardBackground rounded-lg">
      <div className="w-[100%]">
        <img
          className="rounded-xl hover:rounded-none"
          src={
            thumbnails?.maxres?.url
              ? thumbnails.maxres.url
              : thumbnails?.default?.url
          }
          alt="Thumbnail"
        />
      </div>
      <div className="px-2 pt-1">
        <h2 className="m-0 p-0 font-bold text-[1rem]">{title}</h2>
        <p className="m-0 p-0 text-sm">{channelTitle}</p>
        <div className="pt-2 flex justify-between w-[100%]">
          <p className="m-0 p-0 ">{statistics.viewCount}</p>
          <p className="m-0 p-0 text-md">{publishedAt}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
