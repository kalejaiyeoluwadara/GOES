import Image from "next/image";
import React from "react";
import hero from "../assets/hero.jpeg";
import Button from "../components/Button";
function Hero() {
  return (
    <div className="main sm:px-0 px-4 sm:pt-0 pt-12 relative min-h-[800px] text-white ">
      <Image src={hero} className="cover object-left sm:object-top " alt="" />
      <div className="bg-black cover bg-opacity-[0.1] sm:bg-opacity-0 " />
      <div className=" h-[full] relative flex flex-col sm:px-8 justify-end pt-20 pb-10 items-start  w-full text-[#2B0184] z-40">
        <h3 className="text-black text-[20px] ">Welcome to:</h3>
        <h1 className="font-[700] text-[20px] sm:text-[40px] ">
          GANI-OLA ENGINEERING SERVICES, LTD
        </h1>
        <h1 className=" text-black font-[400] ">
          Where <span className="bold text-primary ">Imagination</span> meets{" "}
          <span className="bold text-primary ">Innovation</span>
        </h1>
        <button className="bg-primary text-white px-6 py-3 mt-4 text-[20px] font-[500] rounded-md  ">
          Connect With Us
        </button>
        {/* Client slide */}
        <div className="flex mt-6 bg-white shadow-sm pl-4 py-2  rounded-xl items-center gap-1  ">
          <section className="flex">
            <div className="h-[40px] w-[40px] rounded-[50%] bg-white border-[3px] border-primary "></div>
            <div className="h-[40px] w-[40px] -translate-x-4 rounded-[50%] bg-white border-[3px] border-primary "></div>
            <div className="h-[40px] w-[40px] -translate-x-8 rounded-[50%] bg-white border-[3px] border-primary "></div>
          </section>
          <p className="text-primary font-[500] text-[15px] -translate-x-8 ">
            20+ Satisfied Clients
          </p>
        </div>
        {/* counts slide */}
        <div className="bg-white sm:px-0 px-4 flex sm:gap-8 gap-2 items-center justify-center w-[500px] mt-[70px] h-[110px] sm:-translate-x-10 -translate-x-[70px] rounded-xl  ">
          <div className="flex items-center flex-col">
            <h1 className="leading-[40px]">50+</h1>
            <p className="text-gray-600 sm:text-base text-[14px] ">
              Projects Done
            </p>
          </div>
          <div className="flex items-center flex-col">
            <h1 className="leading-[40px]">150+</h1>
            <p className="text-gray-600 sm:text-base text-[14px] ">
              Total Employees
            </p>
          </div>

          <div className="flex items-center flex-col">
            <h1 className="leading-[40px]">25+</h1>
            <p className="text-gray-600 sm:text-base text-[14px] ">
              Years Experience
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
