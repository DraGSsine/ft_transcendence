import React from "react";
import FriendMessage from "./FriendMessage";
import MessageSearch from "./MessageSearch";

const MessagesList = () => {
  const friendsMessages = [
    {
      user: "youchen",
      message: " Hi there! How are you today?",
      time: "14:30pm",
    },
    {
      user: "aziz",
      message: " Oh, I'm fine. Thanks for asking!",
      time: "14:30pm",
    },
    {
      user: "fahad",
      message: "nah, I'm not fine",
      time: "14:30pm",
    },
    {
      user: "sara",
      message: "WTF is wrong with you?",
      time: "14:30pm",
    },
  ]
  return (
    <div className="h-full flex flex-col min-w-[20%] space-y-5  rounded-2xl">
      <MessageSearch />
      <div className=" px-10 space-y-5 bg-slate-800 flex-grow rounded-2xl py-10 ">
        {
          friendsMessages.map((userInfo, index) => (
            <FriendMessage key={index} userInfo={userInfo} />
          ))
        }
      </div>
    </div>
  );
};

export default MessagesList;
