import React from 'react'
import AuthWrapper from '@/components/auth/AuthWrapper'
import Image from 'next/image'
import Link from 'next/link'
const page = () => {
  return (
    <AuthWrapper>
      <div className=" flex flex-col w-[60%] ">
      <h1 className=" font-bold text-2xl mb-10" >Welcome To PingPong</h1>
        <button className=" bg-white rounded-md w-full flex justify-center px-10 py-2">
          <Image
            src="/assets/42Auth.png"
            alt="42 Auth"
            width={150}
            height={150}
          />
        </button>
        <div className=" my-5 after:bg-secondary after:w-40 after:h-[1px] after:inline-block  before:bg-secondary before:w-40 before:h-[1px] before:inline-block flex items-center  ">
          <span className=" px-2">Or</span>
        </div>
        <form>
          <div className=" mt-5">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300"
            >
              Email address
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                className=" h-10 w-full bg-gray-600 text-whitw rounded-md pl-3 outline-none p-1  placeholder:text-gray-300"
                placeholder="Enter your email address"
              />
            </div>
          </div>
          <div className=" mt-5">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-300"
            >
              Password
            </label>
            <div className="mt-1">
              <input
                id="password"
                name="password"
                type="password"
                className=" h-10 w-full bg-gray-600 text-whitw rounded-md pl-3 outline-none p-1  placeholder:text-gray-300"
                placeholder="Enter your password"
              />
            </div>
          </div>
          <div className=" mt-5">
            <label
              htmlFor="retypepassword"
              className="block text-sm font-medium text-gray-300"
            >
              Retype Password
            </label>
            <div className="mt-1">
              <input
                id="retypepassword"
                name="retypepassword"
                type="retypepassword"
                className=" h-10 w-full bg-gray-600 text-whitw rounded-md pl-3 outline-none p-1  placeholder:text-gray-300"
                placeholder="Retype your password"
              />
            </div>
          </div>
          <div className=" mt-10 space-y-2">
            <button className=" bg-secondary w-full h-10 rounded-md font-medium">Sign up</button>
            <p>Your already have an account! <Link href="/auth/signin" className=" text-secondary font-medium" >Sign in</Link> </p>
          </div>
        </form>
      </div>
    </AuthWrapper>
  )
}

export default page