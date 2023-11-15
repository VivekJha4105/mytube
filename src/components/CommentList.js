import React from "react";
import Comment from "./Comment";

const CommentList = ({ comments }) => {
  return comments.map((comment) => (
    <div>
      <Comment comment={comment} />
      <div className="ml-6 pl-6 border-l ">
        <CommentList comments={comment.reply} />
      </div>
    </div>
  ));
};

export default CommentList;
