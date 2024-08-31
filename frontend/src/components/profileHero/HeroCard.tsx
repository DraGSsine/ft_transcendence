import ProgressBar from "@/ui/ProgressBar";
import Image from "next/image";
import React, { ReactElement } from "react";

const HeroCard = ({children}:{children:ReactElement}) => {
  return (
    <div className="h-[40vh] w-[60vw] card-wrapper rounded-2xl overflow-hidden ">
      <div className="card-content rounded-2xl to-blue-500 ">
        {children}
      </div>
    </div>
  );
};

export default HeroCard;
