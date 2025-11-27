import Image from "next/image";
import React from "react";
import { ShieldCheck, Award, Lightbulb, Users, Leaf, HeartHandshake } from "lucide-react";
import ab from "@/app/assets/ab.png";

const coreValues = [
  {
    title: "Integrity",
    description: "We uphold honesty, transparency, and accountability in all our operations.",
    icon: ShieldCheck,
    bg: "bg-blue-50",
  },
  {
    title: "Excellence",
    description: "We are committed to delivering projects that meet the highest standards of quality and safety.",
    icon: Award,
    bg: "bg-green-50",
  },
  {
    title: "Innovation",
    description: "We embrace modern technology and creative solutions to meet evolving client needs.",
    icon: Lightbulb,
    bg: "bg-yellow-50",
  },
  {
    title: "Teamwork",
    description: "We foster collaboration and respect among our staff, partners, and clients.",
    icon: Users,
    bg: "bg-purple-50",
  },
  {
    title: "Sustainability",
    description: "We promote environmentally responsible practices in all our projects.",
    icon: Leaf,
    bg: "bg-emerald-50",
  },
  {
    title: "Customer Focus",
    description: "We place our clients at the heart of everything we do, ensuring satisfaction and long-term partnerships.",
    icon: HeartHandshake,
    bg: "bg-pink-50",
  },
];

function Hero2() {
  return (
    <section className="flex flex-col items-center justify-center sm:py-[100px] py-[40px] min-h-[300px] bg-white">
      <h1 className="text-primary font-bold text-4xl sm:text-5xl text-center mb-10">Who Are We?</h1>

      <div className="grid sm:grid-cols-2 grid-cols-1 gap-12 sm:px-20 px-6 items-start">
        {/* Left Side - Text */}
        <div className="text-gray-700 text-[16px] leading-[1.9] space-y-6">
          <p>
            <strong>Gani-Ola Engineering Services Ltd</strong>, incorporated with the Corporate Affairs
            Commission (CAC) of Nigeria in July 2005, is a leading indigenous company specializing in
            building and civil works, infrastructural development, facilities management, consultancy
            services, telecommunications infrastructure, borehole drilling, and water works.
          </p>

          <p>
            With nearly two decades of proven expertise, the company has built a reputation for delivering
            innovative, sustainable, and high-quality engineering solutions tailored to the unique needs
            of both public and private sector clients. Our strength lies in combining technical excellence
            with a deep commitment to client satisfaction.
          </p>

          <p>
            At <strong>Gani-Ola Engineering Services Ltd</strong>, we understand that infrastructure is the
            foundation of development. Guided by our mission and vision, we are committed to shaping a
            future where reliable infrastructure supports economic growth and improves the quality of life
            for communities across Nigeria and Africa at large.
          </p>

          {/* Mission */}
          <div>
            <h2 className="text-primary font-semibold text-xl mb-2">Our Mission</h2>
            <p>
              To provide sustainable, innovative, and cost-effective engineering and construction
              solutions that enhance quality of life, support community development, and deliver
              exceptional value to clients and stakeholders.
            </p>
          </div>

          {/* Vision */}
          <div>
            <h2 className="text-primary font-semibold text-xl mb-2">Our Vision</h2>
            <p>
              To be a leading indigenous engineering and construction company in Africa, recognized for
              excellence, reliability, and commitment to building sustainable infrastructure for future
              generations.
            </p>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="h-[400px] w-full relative rounded-2xl overflow-hidden shadow-lg">
          {/* <Image
            src={ab}
            alt="About Gani-Ola Engineering"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          /> */}
        </div>
      </div>

      {/* Core Values Section */}
      <div className="w-full sm:px-20 px-6 mt-16">
        <h2 className="text-primary font-bold text-3xl text-center mb-10">Our Core Values</h2>

        <div className="grid sm:grid-cols-3 grid-cols-1 gap-8">
          {coreValues.map((value, index) => (
            <div
              key={index}
              className={`${value.bg} shadow-md rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-xl transition-all hover:scale-105`}
            >
              <value.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{value.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero2;
