import { Camera } from "lucide-react";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className=" w-full h-[90vh] bg-slate-800 space-y-20 rounded-2xl p-10">
      <div className=" items-center gap-10 flex">
        <div className="w-40 h-40 relative">
          <div className=" w-full h-full rounded-full overflow-hidden flex justify-center">
            <Image
              src="/assets/profile.jpg"
              width={200}
              height={200}
              alt="profile picture"
            />
          </div>
          <span className=" bg-secondary rounded-full bottom-2 right-0 border-slate-800 border-[5px] p-1 absolute">
            <Camera size={30} />
          </span>
        </div>
        <div className=" flex flex-col gap-5">
          <button className=" bg-secondary px-4 py-2 rounded-md font-medium cursor-pointer ">
            {" "}
            Upload new Avatar
          </button>
          <button className=" bg-white text-black px-4 py-2 rounded-md font-medium cursor-pointer ">
            {" "}
            Remove The Avatar
          </button>
        </div>
      </div>

      <div className=" grid grid-cols-2 w-1/2 gap-10 ">
        <div>
          <label
            htmlFor="First Name"
            className="block text-sm font-medium text-gray-300"
          >
            First Name
          </label>
          <div className="mt-1">
            <input
              id="First Name"
              name="First Name"
              type="text"
              className=" h-10 w-full bg-gray-600 text-whitw rounded-md pl-3 outline-none p-1  placeholder:text-gray-300"
              placeholder="First Name"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="Last Name"
            className="block text-sm font-medium text-gray-300"
          >
            Last Name
          </label>
          <div className="mt-1">
            <input
              id="Last Name"
              name="Last Name"
              type="Last Name"
              className=" h-10 w-full bg-gray-600 text-whitw rounded-md pl-3 outline-none p-1  placeholder:text-gray-300"
              placeholder="Last Name"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="Username"
            className="block text-sm font-medium text-gray-300"
          >
            User Name
          </label>
          <div className="mt-1">
            <input
              disabled
              id="Username"
              name="Username"
              type="Username"
              className=" h-10 w-full disabled:cursor-not-allowed bg-gray-600 text-whitw rounded-md pl-3 outline-none p-1  placeholder:text-gray-300"
              placeholder="Youchen"
            />
          </div>
        </div>

        <div>
          <h1 className="block text-sm font-medium text-gray-300">
            Enable 2FA
          </h1>
          <button className=" font-bold w-full h-10 bg-white text-black rounded-md ">
            2FA
          </button>
        </div>
      </div>

      <div>
        <label
          htmlFor="First Name"
          className="block text-sm font-medium text-gray-300"
        >
          Bio
        </label>
        <textarea
          placeholder=" Welcome to my profile don't forgget to follow me so we can play togheter "
          className=" h-20 w-1/2 bg-gray-600 text-whitw rounded-md pl-3 outline-none p-1  placeholder:text-gray-300"
          name="bio"
          id="bio"
        ></textarea>
      </div>
      <button className=" px-5 py-2 bg-secondary rounded-md">Save Changes</button>

    </div>
  );
};

export default page;
