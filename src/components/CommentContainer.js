import React from "react";
import commentData from "../utils/commentData";
import CommentList from "./CommentList";

const CommentContainer = () => {
  return (
    <div className="my-4 mx-[10%] p-2 bg-red-400 w-[50%]">
      <div className="font-bold text-xl">Comments:</div>
      <CommentList comments={commentData} />
    </div>
  );
};

export default CommentContainer;
