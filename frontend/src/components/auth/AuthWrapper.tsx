import React, { ReactNode } from "react";

const AuthWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-screen w-full flex items-center justify-center ">
      <div className="w-[27vw] rotate-12 h-[67vh] bg-main absolute rounded-2xl z-0"></div>
      <div className="w-[27vw] -rotate-12 h-[67vh] bg-main absolute rounded-2xl z-0"></div>
      <div className="bg-slate-800 w-[30vw] h-[70vh] rounded-2xl z-10 flex items-center justify-center ">
        {children}
      </div>
    </div>
  );
};

export default AuthWrapper;
