import React from "react";
import { USER_ICON } from "../utils/constants";

const Comment = ({ comment }) => {
  const { name, text } = comment;
  return (
    <div className="m-2 p-2 flex bg-gray-200 rounded-lg shadow-lg">
      <img className="w-12 h-[50%]" src={USER_ICON} alt="User" />
      <div className="ml-4">
        <p className="text-sm">@{name}</p>
        <p className="font-bold">{text}</p>
      </div>
    </div>
  );
};

export default Comment;
