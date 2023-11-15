import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addChatMessage } from "../utils/chatSlice";
import { getRandomName, getRandomText } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  const handleClick = () => {
    dispatch(
      addChatMessage({
        name: "Vivek Jha",
        message: liveMessage,
      })
    );
    setLiveMessage("");
  };

  useEffect(() => {
    const timerId = setInterval(() => {
      //   API Polling.
      dispatch(
        addChatMessage({
          name: getRandomName(),
          message: getRandomText(Math.floor(Math.random() * 10 + 10)),
        })
      );
    }, 1000);
    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="w-[45%]">
      <div className="w-full h-full ml-2 p-2  flex flex-col-reverse rounded-lg shadow-lg overflow-y-scroll bg-pink-400">
        {chatMessages.map((chat, index) => (
          <ChatMessage key={index} name={chat.name} message={chat.message} />
        ))}
      </div>

      <form
        className="m-2 p-2 w-[100%] flex items-center rounded-lg bg-red-400"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          className="m-2 p-2 w-[75%] outline-none rounded-l-lg overflow-auto"
          type="text"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button
          className="bg-blue-300 p-2 w-[18%] rounded-r-lg"
          onClick={handleClick}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
