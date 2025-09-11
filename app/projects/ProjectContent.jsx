"use client";
import React from "react";
import finished from "@/app/assets/ongoing.jpg";
import past from "@/app/assets/past.jpg";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

function ProjectContent() {
  return (
    <div className="flex flex-col items-center gap-16 py-24 px-4 sm:px-10 min-h-screen bg-white">
      <h1 className="text-primary text-3xl sm:text-4xl font-bold text-center">
        Our Projects
      </h1>

      {/* Ongoing Projects */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative group w-full max-w-5xl h-[300px] sm:h-[400px] overflow-hidden rounded-2xl shadow-lg"
      >
        <Image
          src={finished}
          alt="Ongoing Projects"
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-2">
            Ongoing Projects
          </h2>
          <Link
            href="/projects/ongoing"
            className="mt-2 text-lg text-white border border-white px-5 py-2 rounded-md hover:bg-primary hover:border-primary hover:text-white transition"
          >
            View Projects →
          </Link>
        </div>
      </motion.div>

      {/* Divider */}
      <div className="relative w-full max-w-5xl h-[2px] bg-primary my-4">
        <div className="absolute left-1/2 top-[-18px] transform -translate-x-1/2 w-24 h-8 bg-white rounded-full border border-primary" />
      </div>

      {/* Past Projects */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative group w-full max-w-5xl h-[300px] sm:h-[400px] overflow-hidden rounded-2xl shadow-lg"
      >
        <Image
          src={past}
          alt="Past Projects"
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-2">
            Past Projects
          </h2>
          <Link
            href="/projects/past"
            className="mt-2 text-lg text-white border border-white px-5 py-2 rounded-md hover:bg-primary hover:border-primary hover:text-white transition"
          >
            View Projects →
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default ProjectContent;
