import Image from "next/image";
import React from "react";
import {
  Gamepad2,
  House,
  MessageCircleMore,
  Settings,
  Trophy,
} from "lucide-react";
import Link from "next/link";
const SideBar = () => {
  const links = [
    { icon: <House size={35}/>, name: "profile" },
    { icon: <Gamepad2 size={35} />, name: "Game" },
    { icon: <MessageCircleMore size={35} />, name: "Messages" },
    { icon: <Trophy size={35} />, name: "Leaderboard" },
    { icon: <Settings size={35} />, name: "Settings" },
  ];
  return (
    <div className=" h-screen w-32 bg-slate-900 shadow-blue-50 shadow-lg flex flex-col items-center ">
      <div className="h-1/3 pt-4 ">
        <Image src="/assets/logo.png" alt="logo" width={100} height={100} />
      </div>
      <ul className="items-center flex flex-col gap-8">
        {links.map((link, index) => {
          return (
            <Link key={index} href={link.name} className={` ${link.name == "Messages" && "p-2 bg-sky-400 rounded-full"} flex items-center gap-2 cursor-pointer`}>
              {link.icon}
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default SideBar;
