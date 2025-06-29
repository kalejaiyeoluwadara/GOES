import React from "react";
import Form from "../components/Form";
import Footer from "../components/Footer";
import Image from "next/image";
import personCalling from "@/app/assets/person_calling.jpg";
import Head from "next/head";


function Page() {
  return (
      <>
      <Head>
  {/* Page Title */}
  <title>Construction Consultancy Services | Project Planning & Advisory – GOES LTD</title>

  {/* Meta Description */}
  <meta
    name="description"
    content="Need construction advice? GOES LTD offers expert consultancy on project planning, budgeting, structural design, and permits. Let’s build smart together."
  />

  {/* Canonical URL */}
  <link rel="canonical" href="https://goesltd.com/consultancy" />

  {/* Open Graph (for link sharing) */}
  <meta
    property="og:title"
    content="Construction Consultancy – Plan Your Building Projects with Experts | GOES LTD"
  />
  <meta
    property="og:description"
    content="Get expert guidance on your building plans. From budgeting to approvals, GOES LTD offers professional consultancy to ensure smooth and successful projects."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://goesltd.com/consultancy" />
  <meta property="og:image" content="https://goesltd.com/og-image.jpg" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="Construction Consultancy – Plan Your Building Projects with Experts | GOES LTD"
  />
  <meta
    name="twitter:description"
    content="Get expert guidance on your building plans. From budgeting to approvals, GOES LTD offers professional consultancy to ensure smooth and successful projects."
  />
  <meta name="twitter:image" content="https://goesltd.com/og-image.jpg" />
</Head>

        <div>
          {/* Hero Section */}
          <div className="relative w-full h-[50vh] mb-12">
            <Image
                src={personCalling}
                alt="Contact Hero"
                className="w-full h-full object-cover object-center"
                priority
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <h1 className="text-white text-3xl sm:text-4xl font-semibold">Get In Touch</h1>
            </div>
          </div>

          {/* Form Section */}
          <main className="w-full flex flex-col items-center justify-center px-4 sm:px-10 lg:px-20 pb-20">
            <div className="w-full max-w-5xl flex flex-col items-center justify-center gap-6">
            <p className=" sm:px-0 px-4 text-gray-500 ">Need expert guidance before you build? At GOES LTD, our consultancy services are designed to help you make smart, cost-effective construction decisions from day one. We offer professional advice on project planning, budgeting, structural design, material selection, and regulatory compliance.

Whether you're starting a new project or need insight to improve an existing one, our experienced consultants are here to support you every step of the way. Let’s turn your ideas into well-structured plans that work.

</p>
              <div className="w-full sm:w-[80%] md:w-[60%] mt-0">
                <Form />
                <h2 className="text-center text-sm text-gray-700 mt-6">
                  Or text us on{" "}
                  <a href="https://wa.link/zps3e2" className="text-green-500 underline">
                    WhatsApp
                  </a>{" "}
                  for a faster response
                </h2>
              </div>
            </div>
          </main>
        </div>

        {/* <Footer /> */}
      </>
  );
}

export default Page;
