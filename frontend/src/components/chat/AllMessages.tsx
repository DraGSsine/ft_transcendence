import { CheckCheck } from "lucide-react";
import Image from "next/image";
import React from "react";

const AllMessages = () => {
  const Messages = [
    { id: 1, message: "Hello", sender: "me" },
    { id: 2, message: " what is new with you brother is everything ok how is the life is not life but how the sky is blue and not red this is a big question ", sender: "youchen" },
    { id: 1, message: " how the hell is this even possible the east not a red dead redamption 2 is not a game it's actuly a movie did you know that ?", sender: "me" },
    { id: 2, message: "I am fine", sender: "youchen" },
    { id: 1, message: "Whatssap", sender: "me" },
    { id: 1, message: "Whatssap", sender: "me" },
  ];
  
  return (
    <div className=" rounded-2xl flex-grow p-10 w-full bg-slate-800 flex flex-col justify-end gap-3">
      {Messages.map((msg, index) => (
        <Message key={index} messageContent={msg.message} sendFromHost={msg.id == 1 ? true : false} />
      ))}
    </div>
  );
};

export default AllMessages;

const Message = ({messageContent , sendFromHost}:{messageContent:string, sendFromHost:boolean}) => {
  return (
    <div className={`flex gap-4 ${sendFromHost ? "justify-end" : "justify-start"}`}>
      <div className={` flex gap-4 ${sendFromHost ? "" : " flex-row-reverse"} `}>
        <div className="grow text-end space-y-3">
          <div className={`flex flex-col  ${!sendFromHost ? " items-start " : " items-end "} `}>
            <div className={` max-w-80 rounded-2xl p-4 shadow-sm text-left ${sendFromHost ? "bg-secondary" : "bg-gray-500"}`}>
              <p className="text-sm text-white">{messageContent}</p>
            </div>

            <span className="mt-1.5 flex items-center gap-x-1 text-xs text-gray-500 ">
              <CheckCheck size={16} stroke="#87CEEB" />
              Sent
            </span>
          </div>
        </div>

        <span className=" flex items-center justify-center size-[38px] rounded-full bg-gray-600 overflow-hidden ">
          <Image src="/assets/profile.jpg" alt="logo" width={200} height={200} />
        </span>
      </div>
    </div>
  );
};
