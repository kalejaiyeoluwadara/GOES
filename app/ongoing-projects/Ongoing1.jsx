import Image from "next/image";
import React from "react";
import finished from "../assets/explore.webp";
function Ongoing1() {
  return (
    <main className="h-[400px] relative main  ">
      <Image
        placeholder="blur"
        className="cover blur-[2px] "
        alt=""
        src={finished}
      />
      <div className="cover bg-black bg-opacity-15  " />
      <h1 className="text-[40px] font-600 relative z-40 text-white ">
        Ongoing Projects
      </h1>
    </main>
  );
}

export default Ongoing1;
