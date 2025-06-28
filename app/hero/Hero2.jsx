import Image from "next/image";
import React from "react";
import ab from "@/app/assets/ab.png";

function Hero2() {
  return (
    <section className="flex flex-col items-center justify-center sm:py-[100px] py-[40px] min-h-[300px] bg-white">
      <h1 className="text-primary font-bold text-4xl sm:text-5xl text-center mb-10">Who Are We?</h1>

      <div className="grid sm:grid-cols-2 grid-cols-1 gap-12 sm:px-20 px-6 items-start">
        <div className="text-gray-700 text-[16px] leading-[1.9] space-y-6">
          <p>
            <strong>GANI – OLA ENGINEERING SERVICES LTD (GOES LTD)</strong> is a multiservices company
            operating and registered in Nigeria under the Company and Allied Matters Act of 1990 with Registration Number <strong>RC628757</strong> on <strong>15th July 2005</strong>.
          </p>

          <p>
            Our scope spans all areas of construction engineering — from Building and Civil Construction to Estate Development and Facilities Management.
          </p>

          <ul className="list-disc pl-5 space-y-2">
            <li>We have successfully executed numerous projects with a strong track record of quality and timely delivery.</li>
            <li>We provide modern construction services in a positive, closely controlled, well-managed, and professional manner.</li>
            <li>Our design expertise enables us to transform client requirements into environmentally sound and workable schemes.</li>
            <li>We apply deep contract management knowledge to ensure every project meets specifications and stays within budget.</li>
          </ul>
        </div>

        <div className="h-[400px] w-full relative rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={ab}
            alt="About Gani-Ola Engineering"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero2;
