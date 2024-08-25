import { MessageCircle, Swords } from "lucide-react";
import Image from "next/image";
import React from "react";

const Friend = () => {
  const isOnline = Math.random() > 0.5;
  return (
    <div className=" flex bg-slate-600 rounded-2xl py-4 border border-slate-500 backdrop-blur-lg items-center justify-between px-5">
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
          <h1 className=" font-medium">John Doe</h1>
          <p className={`text-sm ${isOnline ?" text-green-500":"text-gray-400"}`}>{isOnline ? "Online" : "Ofline"}</p>
        </div>
      </div>
      <div className=" flex gap-4">
        <MessageCircle className="cursor-pointer" size={25} strokeWidth={1.5} />
        <Swords className=" hover:scale-125 hover:fill-secondary hover:stroke-secondary transition-all ease-linear duration-200 cursor-pointer" size={25} strokeWidth={1.5} />
      </div>
    </div>
  );
};

export default Friend;
