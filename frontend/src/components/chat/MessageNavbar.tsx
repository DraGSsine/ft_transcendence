import { Ellipsis } from "lucide-react";
import Image from "next/image";
import React from "react";

const MessageNavbar = () => {
  return (
    <div className=" items-center  flex px-10 h-24 bg-slate-800 rounded-2xl w-full justify-between">
      <div className=" relative flex items-center space-x-3">
        <div className=" h-16 w-16 rounded-full overflow-hidden">
          <Image
            src="/assets/avatar.jpg"
            alt="avatar"
            width={100}
            height={100}
            className="rounded-full"
          />
        </div>
        <span className=" absolute h-4 w-4 bg-green-500 rounded-full bottom-0 left-8 "></span>
        <div>
          <h1>Azarda L Gay</h1>
          <span className=" text-green-500 ">Online</span>
        </div>
      </div>
      <div className=" flex items-center space-x-4 ">
        <button className=" min-w-20 bg-secondary text-lg rounded-full py-1 px-3"> Profile </button>
        <button className=" min-w-20 bg-white text-black text-lg rounded-full py-1 px-3"> Call </button>
        <span className=" rounded-full h-16 w-[3px] flex bg-slate-400 "></span>
        <Ellipsis size={24} />
      </div>
    </div>
  );
};

export default MessageNavbar;
