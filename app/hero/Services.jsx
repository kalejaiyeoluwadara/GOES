"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import ongoing from "@/app/assets/ongoing.jpg";
import appr from '@/app/assets/apprentiship.jpg'
import client from '@/app/assets/client.jpg'
import infra from '@/app/assets/infra.jpg'
import projman from '@/app/assets/proj-man.jpg'
import realEstate from '@/app/assets/real-estate.jpg'
import { motion } from "framer-motion";
import { HiOutlineChevronLeft, HiChevronRight } from "react-icons/hi";
function Services() {
  const scrollRef = useRef(null);
  const [scrollWidth, setScrollWidth] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") {
      current.scrollBy({ left: -400, behavior: "smooth" });
    } else {
      current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };
  const handleScroll = () => {
    const { current } = scrollRef;
    setScrollLeft(current.scrollLeft);
  };

  useEffect(() => {
    const { current } = scrollRef;
    setScrollWidth(current.scrollWidth - current.clientWidth);
    current.addEventListener("scroll", handleScroll);

    return () => {
      current.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollPercentage = (scrollLeft / scrollWidth) * 100;


  const services = [
    {
      nameOfService: "Real Estate Development",
      desc: "We specialize in development, construction and sales of residential, commercial and industrial buildings; from land acquisition and planning to construction and marketing.",
      image: realEstate,
    },
    {
      nameOfService: "Building and Civil Engineering Infrastructural Development",
      desc: "We are specialized in contract work of both building and civil engineering work from design stage to construction and maintenance of facilities.",
      image: infra,
    },
    {
      nameOfService: "Project Management",
      desc: "Our areas of specialization include construction project planning/co-ordination, supervising on-site activities, implementing safety protocols, tracking progress, conduct quality inspection, finalizing project activities.",
      image: projman,
    },
    {
      nameOfService: "Client Advisory and Design Support",
      desc: "Provide support to prospective clients intending to build in the future by reviewing our array of designs and costs, offering advice on the choice of design and construction methodology. This helps clients align with their budget and financial capacity.",
      image: client,
    },
    {
      nameOfService: "Training and Apprenticeship Programs",
      desc: "Participate in the training of students and construction apprentices through our apprenticeship module, in line with all relevant training authorities.",
      image: appr,
    },
  ];

  return (
    <div className="bg-white min-hscreen px-[10px] sm:px-[110px] py-[80px]  w-full ">
      <h1 className="text-center text-primary text-[40px] font-bold  ">
        Services
      </h1>
      <section
        ref={scrollRef}
        className="flex  overflow-x-scroll no-scrollbar mt-10 sm:mt-20 gap-4 w-full h-auto  "
      >


        {
        
        
        services.map((service, id) => {
          return (
            <div key={id} className="h-[300px] flex-shrink-0 text-white flex items-center justify-center flex-col relative  w-[354px] sm:w-[500px] px-2 sm:px-6 ">
              <h2 className="text-[30px] relative z-30 font-medium text-center">
                {service.nameOfService}
              </h2>
              <p className="text-center sm:text-base text-sm relative z-30">
                {service.desc}
              </p>
              <div className="cover bg-black z-20 bg-opacity-60 " />
              <Image className="cover z-10 " alt="" src={service.image} />
            </div>
          );
        })}
      </section>

      <section className="mt-[62px] items-center flex gap-[32px]">
        {/* scroll indicator */}
        <div className="h-[4px] w-[80%] bg-black relative">
          <div
            className="bg-white h-full absolute top-0 left-0"
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
        {/* buttons */}
        <div className="flex gap-[24px]">
          <motion.button
            whileTap={{
              scale: 0.8,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
              },
            }}
            onClick={() => scroll("left")}
            className="btn "
          >
            <HiOutlineChevronLeft size={20} />
          </motion.button>
          <motion.button
            whileTap={{
              scale: 0.8,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
              },
            }}
            onClick={() => scroll("right")}
            className="btn"
          >
            <HiChevronRight size={20} />
          </motion.button>
        </div>
      </section>
    </div>
  );
}

export default Services;
