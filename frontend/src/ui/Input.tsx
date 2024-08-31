"use client";
import React, { ChangeEvent } from "react";
interface InputProps {
  type: string;
  placeholder?: string;
  Icon?: any;
}

const Input = ({ type, placeholder, Icon }: InputProps) => {
  return (
    <div className="">
      <p className="text-black bg-red-500">Full Name</p>
      <div className="min-w-52 flex bg-blue-200 border rounded-lg h-12 items-center px-4">
        <input
          type={type}
          placeholder={placeholder}
          className="bg-transparent w-full h-full rounded-lg outline-none text-black"
        />
        {Icon && <Icon className="text-white w-6 h-6" />}
      </div>
    </div>
  );
};

export default Input;