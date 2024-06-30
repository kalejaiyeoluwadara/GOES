import Image from "next/image";
import React from "react";
import explore from "../assets/past.jpg";
import Button from "../components/Button";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
function Preview() {
  return (
    <main className="py-20 w-screen ">
      <div className="main relative min-h-[400px]  ">
        <Image src={explore} alt="" className="cover  " placeholder="blur" />
        <div className="cover bg-black bg-opacity-40" />
        <div className="relative flex flex-col gap-4 items-center z-40 ">
          <h1 className="text-[40px] text-white font-bold ">Project Preview</h1>
          <p className="text-white text-center sm:w-[500px] ">
            Seeing is believing, explore the project preview page and see our
            ongoing and past projects and be the judge.
          </p>
          <Link href={"/projects"}>
            {" "}
            <button className="px-8 flex gap-2 text-[20px] py-3 rounded-md text-primary font-medium bg-white ">
              Explore <FaArrowRightLong size={30} />
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Preview;
