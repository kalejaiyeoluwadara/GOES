import Image from "next/image";
import React from "react";
import explore from "../assets/explore.webp";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

function Explore() {
    return (
        <section className="relative w-full min-h-[500px] flex items-center justify-center overflow-hidden mb-10 group">
            {/* Background Image */}
            {/* <Image
                src={explore}
                alt="Equipment Gallery"
                placeholder="blur"
                className="absolute inset-0 w-full h-full object-cover object-center z-0 transition-all duration-500 group-hover:grayscale-[40%]"
            /> */}

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />

            {/* Content */}
            <div className="relative z-20 max-w-3xl px-6 text-center text-white flex flex-col items-center gap-6">
                <h1 className="text-3xl sm:text-5xl font-bold">Equipment Gallery</h1>
                <p className="text-base sm:text-lg text-gray-200">
                    Have a look at the modern equipment we use at Gani-Ola Engineering Services Ltd.
                </p>

                <Link href="/equipment-gallery">
                    <button className="mt-2 flex items-center gap-3 bg-primary text-white px-6 py-3 text-lg font-semibold rounded-md shadow-md hover:bg-primary/90 transition-all duration-200">
                        Explore <FaArrowRightLong size={22} />
                    </button>
                </Link>
            </div>
        </section>
    );
}

export default Explore;
