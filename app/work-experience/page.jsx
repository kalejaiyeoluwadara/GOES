import React from "react";
import Banner from "./Banner";
import Form from "./Form";
import Footer from "../components/Footer";
import Head from "next/head";

function Page() {
  return (
    <>
    <Head>
  {/* Page Title */}
  <title>Work Experience Opportunities – NYSC, SIWES & Apprenticeship | GOES LTD</title>

  {/* Meta Description */}
  <meta
    name="description"
    content="Kickstart your construction career with GOES LTD. Apply for NYSC placements, SIWES/IT training, or apprenticeship programs and gain real-world experience."
  />

  {/* Canonical URL */}
  <link rel="canonical" href="https://goesltd.com/work-experience" />

  {/* Open Graph (Social Preview) */}
  <meta
    property="og:title"
    content="Gain Work Experience in Construction – NYSC, SIWES & Apprenticeship | GOES LTD"
  />
  <meta
    property="og:description"
    content="Apply for hands-on construction experience through NYSC, SIWES, and apprenticeship opportunities at GOES LTD."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://goesltd.com/work-experience" />
  <meta property="og:image" content="https://goesltd.com/og-image.jpg" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="Gain Work Experience in Construction – NYSC, SIWES & Apprenticeship | GOES LTD"
  />
  <meta
    name="twitter:description"
    content="Apply for hands-on construction experience through NYSC, SIWES, and apprenticeship opportunities at GOES LTD."
  />
  <meta name="twitter:image" content="https://goesltd.com/og-image.jpg" />
</Head>

      <Banner />
      <Form />
      {/* <Footer /> */}
    </>
  );
}

export default Page;
