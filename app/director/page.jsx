import React from "react";
import Image from "next/image";
import prof from "@/app/assets/test2.jpg";
import gani from "@/app/assets/gani.jpeg"
import Head from "next/head";

function Page() {

  <Head>
  {/* Page Title */}
  <title>Director Profile – Mr. Jimoh Ganiyu Olalekan | GOES LTD</title>

  {/* Meta Description */}
  <meta
    name="description"
    content="Meet Mr. Jimoh Ganiyu Olalekan, CEO of GOES LTD – a visionary leader in Nigeria’s construction industry with over 20 years of excellence and innovation."
  />

  {/* Keywords */}
  <meta
    name="keywords"
    content="Jimoh Ganiyu Olalekan, GOES LTD CEO, Gani-Ola Engineering, Nigerian construction, registered builder Nigeria, MNIOB, CORBON, director profile"
  />

  {/* Canonical */}
  <link rel="canonical" href="https://goesltd.com/director" />

  {/* Open Graph */}
  <meta property="og:title" content="Director Profile – Jimoh Ganiyu Olalekan | GOES LTD" />
  <meta
    property="og:description"
    content="Explore the background, vision, and achievements of Mr. Jimoh Ganiyu Olalekan, the Chief Executive Officer of GOES LTD."
  />
  <meta property="og:type" content="profile" />
  <meta property="og:url" content="https://goesltd.com/director" />
  <meta property="og:image" content="https://goesltd.com/og-director.jpg" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Meet the CEO – Jimoh Ganiyu Olalekan | GOES LTD" />
  <meta
    name="twitter:description"
    content="Learn more about the leadership and career of Mr. Jimoh Ganiyu Olalekan, Director and CEO of GOES LTD."
  />
  <meta name="twitter:image" content="https://goesltd.com/og-director.jpg" />
</Head>


  return (
    <div className="sm:px-20 px-8 flex flex-col items-center justify-center py-40 ">
      <h1 className="text-primary mb-12 font-medium ">Director Profile</h1>
      <div className="bg-gray-100 h-[300px] relative overflow-hidden w-[300px] rounded-full ">
        <Image className="cover" src={gani} alt="" />
      </div>
      <h1 className="text-primary sm:text-start text-center mt-2 font-medium ">
        Mr. Jimoh Ganiyu Olalekan
      </h1>
      <p className="h5 sm:text-start text-center ">
        CEO, Gani-Ola Engineering Services Limited.
      </p>

      <article className=" mt-10  sm:mt-20">
        <p className="h6 w-full sm:text-start text-justify ">
          Jimoh Ganiyu Olalekan is a distinguished leader in the construction
          industry, currently serving as the Chief Executive Officer of Gani-Ola
          Engineering Services Limited. With an impressive career spanning over
          two decades, he has consistently demonstrated exceptional leadership,
          strategic vision, and a profound commitment to excellence in building
          and construction. Under his stewardship, Gani-Ola Engineering Services
          Limited has grown into a leading entity known for its innovative
          projects and uncompromising quality.
        </p>
        <section className="mt-12">
          <h3 className=" h3 text-[17px]  ">
            Certifications and Qualifications:
          </h3>
          <ul className=" space-y-4 list-disc mt-4   ">
            <li className="h6">
              <span className="h4">HND (Higher National Diploma):</span> He
              furthered his education with a Higher National Diploma in Building
              Technology, enhancing his expertise and technical knowledge in
              advanced construction methodologies.
            </li>
            <li className="h6">
              <span className="h4">
                MNIOB (Member, Nigerian Institute of Building):{" "}
              </span>{" "}
              This prestigious membership underscores The Director’s adherence
              to the highest standards of professionalism and ethical practices
              in the building industry.
            </li>
            <li className="h6">
              <span className="h4">
                CORBON (Council of Registered Builders of Nigeria):
              </span>{" "}
              As a certified member of CORBON, The Director is recognized as a
              registered builder, affirming his competency and authority in
              overseeing building projects and ensuring compliance with
              regulatory standards.
            </li>
          </ul>
        </section>

        <section className="mt-12">
          <h3 className=" h3 text-[17px]  ">Personal Attributes:</h3>
          <ul className=" space-y-4 list-disc mt-4   ">
            <li className="h6">
              <span className="h4">Visionary Leadership:</span> The Director is
              known for his visionary thinking and ability to anticipate
              industry trends. His strategic foresight has enabled Gani-Ola
              Engineering Services Limited to adapt to changing market
              conditions and stay ahead of the competition
            </li>
            <li className="h6">
              <span className="h4">Commitment to Excellence: </span> The
              Director unwavering commitment to quality and excellence permeates
              every aspect of his work. He is dedicated to delivering projects
              that not only meet but exceed client expectations.
            </li>
            <li className="h6">
              <span className="h4">Team Building:</span> A strong proponent of
              collaborative work environments, The Director fosters a culture of
              teamwork and professional development. His leadership style
              encourages innovation, accountability, and continuous learning
              among his staff.
            </li>
          </ul>
        </section>

        <section className="mt-12">
          <h3 className=" h3 text-[17px]  ">Conclusion:</h3>
          <ul className=" space-y-4  mt-4   ">
            <p className="h6 sm:text-start text-justify ">
              The Director’s extensive experience, robust educational
              background, and numerous certifications make him an exemplary
              leader in the construction industry. His dedication to excellence,
              innovation, and sustainable building practices continue to drive
              the success of Gani-Ola Engineering Services Limited, solidifying
              its position as a leader in the market. Under Jimoh’s leadership,
              the company is well-poised for continued growth and success in the
              ever-evolving building landscape.
            </p>
          </ul>
        </section>
      </article>
    </div>
  );
}

export default Page;
