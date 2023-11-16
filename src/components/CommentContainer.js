import React, { useEffect, useState } from "react";
import commentData from "../utils/commentData";
import CommentList from "./CommentList";
import { YT_COMMENT_API } from "../utils/constants";

const CommentContainer = ({ videoId }) => {
  const [commentThreads, setCommentThreads] = useState([]);
  const getCommentsData = async () => {
    const res = await fetch(YT_COMMENT_API + videoId);
    const data = await res.json();
    console.log(data);
    setCommentThreads(data.items);
  };

  useEffect(() => {
    getCommentsData();
  }, []);

  return (
    <div className="my-4 mx-[10%] p-2 bg-red-400 w-[50%]">
      <div className="font-bold text-xl">Comments:</div>
      <CommentList comments={commentThreads} />
    </div>
  );
};

export default CommentContainer;
