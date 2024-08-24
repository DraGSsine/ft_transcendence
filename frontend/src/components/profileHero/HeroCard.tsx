import ProgressBar from "@/ui/ProgressBar";
import Image from "next/image";
import React from "react";

const HeroCard = () => {
  return (
    <div className="h-[30vh] w-[50vw] relative rounded-lg border">
      <div className="">
        <Image
          src="/assets/Dashboard.png"
          alt="hero"
          className=" rounded-lg"
          layout="fill"
          objectFit="cover"
        />
        <span className=" rounded-lg bg-black/30  absolute inset-0 "></span>
      </div>
      <div className=" absolute w-full flex items-center py-8 flex-col ">
        <div className=" flex items-center gap-4 w-9/12">
          <div className="w-32 h-32 rounded-full overflow-hidden flex items-center justify-center bg-blue-400 ">
            <Image
              src=""
              alt="logo"
              width={130}
              height={130}
            />
          </div>
          <h1 className=" flex flex-col gap-2">
            <span className=" font-semibold text-2xl">@Youchen</span>
            <span>Yassine Ouchen</span>
          </h1>
        </div>
        <div className=" right-10 top-1/2 translate-y-1/2 absolute ">
          <div className=" flex flex-col gap-4">
            <button className="  bg-red-500   w-32 rounded-lg p-1">
              Block
            </button>
            <button className=" bg-blue-500 w-32 rounded-lg p-1">
              Message
            </button>
            <button className=" bg-blue-500  w-32 rounded-lg p-1">
              Add Friend
            </button>
          </div>
        </div>
        <div className=" w-full">
          <ProgressBar color="bg-blue-500" width="w-9/12" />
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
