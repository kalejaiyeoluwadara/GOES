import Link from "next/link";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import logo from "../assets/logo.svg";
import Image from "next/image";
function Footer() {
  return (
    <footer className=" ">
      <section className="h-[300px]  w-screen bg-primary  ">
        <section className="flex justify-between px-8 p-10 text-white ">
          <Image alt="" className="h-[90px] bg-white w-[90px] " src={logo} />
          <div>
            <h2 className="text-[30px] border-l-2 mb-4 border-green-400 px-2 font-semibold ">
              Quick Links
            </h2>
            <div className=" flex flex-col mt-2 text-gray-100 gap-1 ">
              <p>
                {" "}
                <Link href={"/about-us"}>{"> "}About Us</Link>
              </p>
              <p>
                {" "}
                <Link href={"/ongoing-projects"}>{"> "}Projects</Link>
              </p>
              <p>
                {" "}
                <Link href={""}>{"> "}Consultancy</Link>
              </p>
              <p>
                {" "}
                <Link href={"/work-experience"}>{"> "}Work Experience</Link>
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-[30px] border-l-2 border-green-400 px-2 font-semibold mb-4 ">
              Contact Info
            </h2>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1 ">
                <FaLocationDot size={20} />
                <p>
                  21A, Tunji Bello Street, Ikolaba Estate, Ibadan, Oyo state.
                </p>
              </div>
              <div className="flex flex-col gap-1 ">
                <MdCall size={20} />
                <p>(+234) 803 3244 038</p>
              </div>
              <div className="flex flex-col gap-1 ">
                <MdEmail size={20} />
                <p>goeslimited@gmail.com</p>
              </div>
            </div>
          </div>
        </section>
        <section></section>
      </section>
      <section className="w-screen h-[60px] bg-white flex items-center justify-center ">
        <p className="text-gray-400">
          Copyright 2024 Gani-Ola Engineering Services ltd.
        </p>
      </section>
    </footer>
  );
}

export default Footer;
