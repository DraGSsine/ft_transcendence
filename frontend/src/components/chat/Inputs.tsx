"use client";

import { Mic, Paperclip, SendIcon } from "lucide-react";
import React, { FormEvent, useState } from "react";

const Inputs = () => {
  // send message
  const [message, setMessage] = useState("");
  function handleSendMessage(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMessage("");
  }

  // send audio

  return (
    <form
      onSubmit={(e: FormEvent<HTMLFormElement>) => handleSendMessage(e)}
      className="flex h-16 w-full gap-2 "
    >
      <div className=" bg-slate-800 w-80 h-full rounded-2xl flex-grow flex  items-center pl-5 ">
        <Paperclip size={30} />
        <input
          value={message}
          onChange={(e) => setMessage(e.currentTarget.value)}
          className=" w-full h-full ml-5 bg-transparent outline-none"
          placeholder=" Type a Message"
          type="text"
        />
      </div>
      <button className=" bg-secondary w-16 h-16 rounded-2xl items-center justify-center flex">
        <Mic size={30} />
      </button>

      <button
        className=" bg-secondary w-16 h-16 rounded-2xl items-center justify-center flex"
      >
        <SendIcon size={30} />
      </button>
    </form>
  );
};

export default Inputs;
