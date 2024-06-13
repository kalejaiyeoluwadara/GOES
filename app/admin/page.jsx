"use client";
import React, { useState } from "react";
import logo from "../assets/logo.svg";
import Image from "next/image";
import explore from "../assets/explore.webp";
import Link from "next/link";
function Page() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div className="main min-h-screen relative bg-gray-400  flex items-center justify-center ">
      <Image src={explore} className="cover" alt="" />
      <div className="h-[450px] relative z-40 flex items-center justify-center flex-col gap-1 w-[600px] bg-white rounded-md ">
        <div className="flex-center">
          <Image className=" h-[50px] w-[50px] " src={logo} alt="" />
          <h1 className="text-primary text-[20px] ">Admin Login</h1>
        </div>
        <div className="flex flex-col gap-2">
          <p>Admin Id</p>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            name="text"
            value={email}
            className="w-[400px] rounded-md px-2 h-[50px] border-[1px] border-primary bg-blue-100"
            type="email"
          />
        </div>
        <div className="flex flex-col gap-2">
          <p>Secret key</p>
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            name="password"
            value={password}
            className="w-[400px] rounded-md px-2 h-[50px] border-[1px] border-primary bg-blue-100"
            type="password"
          />
        </div>
        <Link href={"/admin/dashboard"}>
          {" "}
          <button className=" w-[400px] rounded-md mt-8 h-[50px] flex items-center justify-center text-white bg-primary text-[16px] font-medium">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Page;
