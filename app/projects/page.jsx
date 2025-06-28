"use client";
import React from "react";
import finished from "@/app/assets/ongoing.jpg";
import past from "@/app/assets/past.jpg";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Head from "next/head";

function Page() {


  return (
    <>
    <Head>
  {/* Page Title */}
  <title>Our Projects – GOES LTD Construction Company in Nigeria</title>

  {/* Meta Description */}
  <meta name="description" content="Explore a portfolio of our construction projects across Nigeria – residential, commercial, and industrial builds. See what GOES LTD has accomplished." />

  {/* Canonical URL */}
  <link rel="canonical" href="https://goesltd.com/projects" />

  {/* Open Graph (Social Sharing) */}
  <meta property="og:title" content="Our Projects – GOES LTD Construction Company" />
  <meta property="og:description" content="Browse through GOES LTD’s completed and ongoing construction projects showcasing quality, reliability, and innovation." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://goesltd.com/projects" />
  <meta property="og:image" content="https://goesltd.com/og-image.jpg" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Our Projects – GOES LTD Construction Company" />
  <meta name="twitter:description" content="Browse through GOES LTD’s completed and ongoing construction projects showcasing quality, reliability, and innovation." />
  <meta name="twitter:image" content="https://goesltd.com/og-image.jpg" />
</Head>

    <div className="flex flex-col items-center gap-16 py-24 px-4 sm:px-10 min-h-screen bg-white">
      <h1 className="text-primary text-3xl sm:text-4xl font-bold text-center">
        Our Projects
      </h1>

      {/* Ongoing Project */}
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
            // onClick={() => setStatus("ongoing")}
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
            // onClick={() => setStatus("past")}
            className="mt-2 text-lg text-white border border-white px-5 py-2 rounded-md hover:bg-primary hover:border-primary hover:text-white transition"
          >
            View Projects →
          </Link>
        </div>
      </motion.div>
    </div>
        </>
  );
}

export default Page;
