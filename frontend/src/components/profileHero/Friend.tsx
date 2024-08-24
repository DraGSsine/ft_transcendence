import { MessageCircle, Swords } from "lucide-react";
import Image from "next/image";
import React from "react";

const Friend = () => {
  return (
    <div className=" flex border-secondary border rounded-2xl py-3 backdrop-blur-lg items-center justify-between px-5">
      <div className=" flex items-center gap-2">
        <div>
          <Image
            src="/assets/avatar.jpg"
            alt="avatar"
            width={50}
            height={50}
            className="rounded-full"
          />
        </div>
        <div>
          <h1>John Doe</h1>
          <p>Online</p>
        </div>
      </div>
      <div className=" flex gap-4">
        <MessageCircle className=" cursor-pointer" size={25} strokeWidth={1.5} />
        <Swords className=" cursor-pointer" size={25} strokeWidth={1.5} />
      </div>
    </div>
  );
};

export default Friend;
