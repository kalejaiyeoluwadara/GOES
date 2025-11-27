import Image from "next/image";
import React from "react";
import explore from "../assets/past.jpg";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

function Preview() {
  return (
      <section className="relative w-full min-h-[500px] flex items-center justify-center overflow-hidden group">
        {/* Background Image */}
        {/* <Image
            src={explore}
            alt="Project Preview"
            placeholder="blur"
            className="absolute inset-0 w-full h-full object-cover object-center z-0 transition-all duration-500 group-hover:grayscale-[40%]"
        /> */}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />

        {/* Content */}
        <div className="relative z-20 max-w-3xl px-6 text-center text-white flex flex-col items-center gap-6">
          <h1 className="text-3xl sm:text-5xl font-bold">Project Preview</h1>
          <p className="text-base sm:text-lg text-gray-200">
            Seeing is believing. Explore our preview page to view ongoing and past projects—see the results for yourself.
          </p>

          <Link href="/projects">
            <button className="mt-2 flex items-center gap-3 bg-white text-primary px-6 py-3 text-lg font-semibold rounded-md shadow-md hover:bg-gray-100 transition-all duration-200">
              Explore <FaArrowRightLong size={22} />
            </button>
          </Link>
        </div>
      </section>
  );
}

export default Preview;
