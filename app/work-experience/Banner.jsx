import Image from "next/image";
import React from "react";
import finished from "../assets/banner.jpeg";
function Banner() {
  return (
    <main className="h-[400px] relative main  ">
      <Image
        placeholder="blur"
        className="cover object-bottom blur-[2px] "
        alt=""
        src={finished}
      />
      <div className="cover bg-black bg-opacity-15  " />
      <h1 className="text-[40px] font-600 relative z-40 text-white ">
        Work Experience & Training
      </h1>
    </main>
  );
}

export default Banner;
