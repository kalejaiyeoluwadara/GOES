import React from "react";
import Form from "../components/Form";
import Map from "../components/Map";
import { FaLocationDot } from "react-icons/fa6";
import { MdCall, MdEmail } from "react-icons/md";
import Footer from "../components/Footer";
import Image from "next/image";
import ongoing from "@/app/assets/ongoing.jpg";
import Head from "next/head";

function Page() {
  return (
    <>
      <Head>
        <title>About GOES LTD – Trusted Construction Company in Nigeria</title>
        <meta name="description" content="Learn more about GOES LTD, a leading construction company in Nigeria dedicated to quality, safety, and customer satisfaction. See how we build trust." />
        <link rel="canonical" href="https://goesltd.com/about-us" />
        <meta property="og:title" content="About GOES LTD – Trusted Construction Company in Nigeria" />
        <meta property="og:description" content="Discover our story, mission, and values. GOES LTD delivers quality construction and renovation services across Nigeria." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://goesltd.com/about-us" />
        <meta property="og:image" content="https://goesltd.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About GOES LTD – Trusted Construction Company in Nigeria" />
        <meta name="twitter:description" content="Discover our story, mission, and values. GOES LTD delivers quality construction and renovation services across Nigeria." />
        <meta name="twitter:image" content="https://goesltd.com/og-image.jpg" />
      </Head>

      <div>
        {/* Hero Image */}
        <div className="relative h-[50vh] w-screen mb-12 overflow-hidden">
          <Image src={ongoing} alt="About Us" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Main Section */}
        <main className="sm:px-20 px-4 pb-40 w-full max-w-[1440px] mx-auto">
          {/* Heading */}
          <h1 className="text-primary text-4xl sm:text-5xl font-bold text-center mb-6">About Us</h1>

          {/* Intro Text */}
          <p className="text-gray-600 text-base sm:text-lg text-left smmax-w-3xl mx-auto leading-relaxed">
            At GOES LTD, we’re more than builders — we’re partners in creating structures that stand the test of time. With years of experience in the Nigerian construction industry, we specialize in residential, commercial, and industrial projects. From design to delivery, we combine technical expertise, quality materials, and a commitment to excellence to bring our clients’ visions to life.
            <br /><br />
            We take pride in our reputation for reliability, transparency, and results. Whether you’re building from scratch, renovating, or planning ahead, GOES LTD is your trusted construction partner.
          </p>

          {/* Contact + Form Section */}
          <div className="flex flex-col sm:flex-row justify-between gap-10 mt-20">
            {/* Contact Info */}
            <div className="sm:w-1/2 flex flex-col gap-8">
              {/* Address */}
              <div>
                <FaLocationDot className="text-primary mb-1" size={24} />
                <h2 className="text-primary font-semibold text-lg mb-1">Office Address</h2>
                <p className="text-gray-600">21A, Tunji Bello Street, Ikolaba Estate, Ibadan, Oyo State.</p>
              </div>

              {/* Phone */}
              <div>
                <MdCall className="text-primary mb-1" size={24} />
                <h2 className="text-primary font-semibold text-lg mb-1">Phone</h2>
                <p className="text-gray-600">(+234) 803 3244 038</p>
              </div>

              {/* Email */}
              <div>
                <MdEmail className="text-primary mb-1" size={24} />
                <h2 className="text-primary font-semibold text-lg mb-1">e-Mail Address</h2>
                <p className="text-gray-600">goeslimited@gmail.com</p>
              </div>

              {/* Map */}
              <div className="mt-4">
                <Map />
              </div>
            </div>

            {/* Form */}
            <div className="sm:w-1/2 mt-10 sm:mt-0">
              <Form />
            </div>
          </div>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export default Page;
