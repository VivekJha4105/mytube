import React from "react";
import { USER_ICON } from "../utils/constants";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="mb-1 py-1 rounded-md flex items-start tracking-tight leading-none hover:bg-slate-600 hover:text-white">
      <img className="mx-4 w-6 rounded-lg" src={USER_ICON} alt="User" />
      <div>
        <span className="text-sm font-bold">{name}</span>
        <span className="ml-2 text-sm">{message}</span>
      </div>
    </div>
  );
};

export default ChatMessage;
