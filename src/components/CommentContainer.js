import React, { useEffect, useState } from "react";
import CommentList from "./CommentList";
import { YT_COMMENT_API } from "../utils/constants";

const CommentContainer = ({ videoId }) => {
  const [commentThreads, setCommentThreads] = useState([]);
  const getCommentsData = async () => {
    const res = await fetch(YT_COMMENT_API + videoId);
    const data = await res.json();
    setCommentThreads(data.items);
  };

  useEffect(() => {
    getCommentsData();
  }, []);

  return (
    <div className="my-4 mx-[10%] p-2 bg-commentContainer text-text w-[50%] rounded-lg">
      <div className="font-bold text-xl">Comments:</div>
      <CommentList comments={commentThreads} />
    </div>
  );
};

export default CommentContainer;
