"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { HiOutlineChevronLeft, HiChevronRight } from "react-icons/hi";
function Testimonials() {
  const scrollRef = useRef(null);
  const [scrollWidth, setScrollWidth] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") {
      current.scrollBy({ left: -300, behavior: "smooth" });
    } else {
      current.scrollBy({ left: 300, behavior: "smooth" });
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

  return (
    <div className="bg-white min-h-screen px-[110px] py-[80px]  w-full ">
      <h1 className="text-center mb-20 text-primary text-[40px] font-bold  ">
        Testimonies
      </h1>
      <section
        ref={scrollRef}
        className="flex  overflow-x-scroll py-[50px] no-scrollbar  gap-4 w-full h-auto  "
      >
        {[1, 2, 3, 4].map((d, id) => {
          return (
            <div className="h-[300px] relative overflow-visible flex-shrink-0 text-white flex items-center justify-center flex-col bg-slate-300  w-[500px] px-6 ">
              <div className="absolute z-40 -top-[50px] flex items-center justify-center flex-col gap-2 ">
                <div className="h-[100px] w-[100px] rounded-full bg-gray-500 "></div>
                <h3 className="text-[17px] font-[500] text-primary  ">
                  Ali Badmus
                </h3>
                <p className="text-[14px] mb-1 text-gray-400 ">
                  MD, Mathan Nigeria
                </p>
              </div>
              <p className="text-center mt-12 text-[20px] text-gray-400 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
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

export default Testimonials;
