import React from "react";
import Form from "../components/Form";
import Map from "../components/Map";
import { FaLocationDot } from "react-icons/fa6";
import { MdCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import Footer from "../components/Footer";
import Image from "next/image";
import ongoing from "@/app/assets/ongoing.jpg";
import Head from "next/head";


function Page() {
  return (
    <>

<Head>
        {/* SEO & Share Info */}
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
        <div className="h-[50vh] relative mb-8 w-screen bg-gray-300  ">
          <Image className="cover" src={ongoing} alt="" />
        </div>
        <main className="min-h-[140vh] pb-40 sm:px-20 flex  flex-col items-center justify-center w-screen ">
          <h1 className="sm:my-10 my-2 text-[50px] text-primary font-bold ">
            About Us
          </h1>
          <p className="  sm:px-0 px-4 text-gray-500 ">
          At GOES LTD, we’re more than builders — we’re partners in creating structures that stand the test of time. With years of experience in the Nigerian construction industry, we specialize in residential, commercial, and industrial projects. From design to delivery, we combine technical expertise, quality materials, and a commitment to excellence to bring our clients’ visions to life.

We take pride in our reputation for reliability, transparency, and results. Whether you’re building from scratch, renovating, or planning ahead, GOES LTD is your trusted construction partner.


          </p>

          <div className="flex sm:flex-row flex-col w-full my-20 gap-10 justify-center items-center  ">
            <div className=" h-[600px] mb-4 sm:mb-0 flex flex-col gap-8 sm:px-0 px-4 sm:w-[50%]">
              <div className=" ">
                <FaLocationDot className="text-primary mb-1 " size={25} />
                <h2 className=" text-primary font-semibold text-[20px]  ">
                  Office Address
                </h2>
                <p className="text-gray-500">
                  21A, Tunji Bello Street, Ikolaba Estate, Ibadan, Oyo state.
                </p>
              </div>

              <div className=" ">
                <MdCall className="text-primary mb-1 " size={25} />
                <h2 className=" text-primary font-semibold text-[20px]  ">
                  Phone
                </h2>
                <p className="text-gray-500">(+234) 803 3244 038</p>
              </div>

              <div className=" ">
                <MdEmail className="text-primary mb-1"  size={25} />
                <h2 className=" text-primary font-semibold text-[20px]  ">
                  e-Mail Address
                </h2>
                <p className="text-gray-500">goeslimited@gmail.com</p>
              </div>

              <Map />
            </div>

            <div className="h-[600px]  sm:mt-0 mt-[230px] sm:w-[50%] ">
              <Form />
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Page;
