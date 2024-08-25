"use client"
import React, { useContext, useState } from "react";
import Image from "next/image";
import { userInfoTye } from "@/types/userTypes";
import { truncate } from "@/utils/truncate";
import { ChatContext } from "@/context/ChatContext";

const ChatPreview = ({userInfo}:{userInfo:userInfoTye}) => {
  const {activeUser,setActiveUser} = useContext(ChatContext);
  return (
    <div onClick={()=>setActiveUser(userInfo.user)} className={` transition-all duration-200 ease-linear cursor-pointer flex items-center justify-between h-20 rounded-md px-4 gap-4 ${userInfo.user == activeUser ? "bg-orange-500" : "bg-transparent"}`}>
      <div className="flex items-center gap-4">
        <div className="h-16 w-16 rounded-full overflow-hidden">
          <Image
            src="/assets/profile.jpg"
            alt="avatar"
            width={65}
            height={65}
          />
        </div>
        <div>
          <p className="text-white">{userInfo.user}</p>
          <p className="text-gray-200">{truncate(userInfo.message,14)}</p>
        </div>
      </div>
      <div className=" flex gap-2 items-center">
        <span className="text-gray-200 text-sm">{userInfo.time}</span>

        <span className={` ${userInfo.user == activeUser ? "bg-white text-black" : "bg-secondary text-white" } rounded-full flex w-6 h-6 justify-center items-center`}>
          3
        </span>
      </div>
    </div>
  );
};

export default ChatPreview;
