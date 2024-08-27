"use client";
import AuthWrapper from "@/components/auth/AuthWrapper";
import { userSignInInfoType } from "@/types/userTypes";
import Input from "@/ui/Input";
import { EyeIcon } from "lucide-react";
import React, { useState } from "react";

const Signin = () => {
  const [userSignInInfo, setUserSignInInfo] = useState<userSignInInfoType>({
    fullName: "",
    username: "",
    password: ""
  });
  const handleSignin = () => {
    console.log("Signin");
  }
  return (
    <AuthWrapper>
      <div className=" w-[70%]">
        <div>
          <h1 className=" font-bold text-4xl">Wellcome <span className=" text-secondary">Back !</span> </h1>
          <Input type="text" placeholder="Username"  Icon={EyeIcon} />
        </div>
      </div>
    </AuthWrapper>
  );
};

export default Signin;
