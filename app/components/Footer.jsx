import Link from "next/link";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdCall, MdEmail } from "react-icons/md";
import Image from "next/image";
import logo from "../assets/foot.png";

function Footer() {
  return (
      <footer className="bg-primary text-white w-full">
        {/* Top Footer Section */}
        <div className="w-full max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-3 gap-12">
          {/* Logo */}
          <div>
            <Image src={logo} alt="Footer Logo" className="h-[80px] w-auto object-contain  p-1 rounded-md" />
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-semibold border-l-4 border-green-400 pl-3 mb-4">Quick Links</h2>
            <ul className="flex flex-col gap-3 text-sm">
              <li><Link href="/about-us">{"> "}About Us</Link></li>
              <li><Link href="/ongoing-projects">{"> "}Projects</Link></li>
              <li><Link href="#">{"> "}Consultancy</Link></li>
              <li><Link href="/work-experience">{"> "}Work Experience</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-xl font-semibold border-l-4 border-green-400 pl-3 mb-4">Contact Info</h2>
            <ul className="flex flex-col gap-5 text-sm">
              <li className="flex items-start gap-2">
                <FaLocationDot size={18} className="mt-1" />
                <span>21A, Tunji Bello Street, Ikolaba Estate, Ibadan, Oyo state.</span>
              </li>
              <li className="flex items-center gap-2">
                <MdCall size={18} />
                <span>(+234) 803 3244 038</span>
              </li>
              <li className="flex items-center gap-2">
                <MdEmail size={18} />
                <span>goeslimited@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="bg-white text-gray-500 text-sm py-4 text-center">
          © {new Date().getFullYear()} Gani-Ola Engineering Services Ltd. All rights reserved.
        </div>
      </footer>
  );
}

export default Footer;
