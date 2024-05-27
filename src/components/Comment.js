import React from "react";
import { USER_ICON } from "../utils/constants";

const Comment = ({ comment }) => {
  const commentData = comment?.snippet?.topLevelComment?.snippet;
  return (
    <div className="m-2 p-2 flex bg-sidebarBackground rounded-lg shadow-lg">
      <img className="w-12 h-[50%]" src={USER_ICON} alt="User" />
      <div className="flex flex-col">
        <div className="ml-4">
          <span className="text-sm font-bold">
            @{commentData?.authorDisplayName}
          </span>
          <span className="ml-2 text-xs">{commentData?.publishedAt}</span>
          <p className="text-sm">{commentData?.textOriginal}</p>
        </div>
        <div className="ml-4 mt-2 text-sm text-gray-600 font-bold">
          <span>Likes: </span>
          <span className="text-red-500">{commentData?.likeCount}</span>
        </div>
      </div>
    </div>
  );
};

export default Comment;
