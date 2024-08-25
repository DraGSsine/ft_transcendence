"use client";
import Image from "next/image";
import React , {useState} from "react";
import { usePathname } from 'next/navigation'

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
    { icon: <House size={35} strokeWidth={1.5}/>, name: "/" },
    { icon: <Gamepad2 size={35} strokeWidth={1.5} />, name: "/game" },
    { icon: <MessageCircleMore size={35} strokeWidth={1.5} />, name: "/chat" },
    { icon: <Trophy size={35} strokeWidth={1.5} />, name: "/leaderboard" },
    { icon: <Settings size={35} strokeWidth={1.5} />, name: "/settings" },
  ];
  const router = usePathname();
  const [currentRoute,setCurrentRoute] = useState(router);
  return (
    <div className=" h-screen w-32 bg-slate-800 flex flex-col items-center ">
      <Link href="/" className="h-1/3 pt-6 cursor-pointer ">
        <Image src="/assets/lg-logo.png" alt="logo" width={80} height={80} />
      </Link>
      <ul className="items-center flex flex-col gap-8">
        {links.map((link, index) => {
          return (
            <Link key={index} href={link.name} className={` ${link.name == router && "bg-secondary ease-in-out rounded-full transition-colors duration-500 "} p-2 flex items-center gap-2 cursor-pointer`}>
              {link.icon}
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default SideBar;
