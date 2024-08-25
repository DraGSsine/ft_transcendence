"use client"
import React, { ReactElement } from 'react'
import { createContext } from "react";
import { useState } from "react";

export const ChatContext = createContext<any>(null);


const ChatProvider = ({children}:{children:ReactElement}) => {
    const [activeUser,setActiveUser] = useState("youchen");
  return (
    <ChatContext.Provider value={{activeUser,setActiveUser}}>
    {children}
    </ChatContext.Provider>
  )
}

export default ChatProvider
