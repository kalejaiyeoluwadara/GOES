"use client";
import Link from "next/link";
import React from "react";
import { LiaTimesSolid } from "react-icons/lia";
import { useGlobal } from "../Context";

function Menu() {
  const { isMenuOpen, setIsMenuOpen } = useGlobal();

  return (
      <>
        {isMenuOpen && (
            <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex justify-center items-center">
              <div className="relative w-11/12 max-w-sm bg-white rounded-2xl shadow-lg p-6 animate-slide-down max-h-[90vh] overflow-y-auto">

                {/* Close button */}
                <button
                    onClick={() => setIsMenuOpen(false)}
                    className="absolute top-4 right-4 text-gray-700 hover:text-black"
                    aria-label="Close menu"
                >
                  <LiaTimesSolid size={28} />
                </button>

                {/* Links */}
                <nav className="mt-12 flex flex-col gap-4 text-lg font-medium text-gray-700 text-center">
                  {[
                    { href: "/", label: "Home" },
                    { href: "/about-us", label: "About Us" },
                    { href: "/staff", label: "Our Staffs" },
                    { href: "/director", label: "Director Profile" },
                    { href: "/projects", label: "Projects" },
                    { href: "/consultancy", label: "Consultancy" },
                    { href: "/work-experience", label: "Work Experience & Training" },
                  ].map((item, index) => (
                      <Link
                          key={index}
                          href={item.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="hover:text-blue-600 transition-colors duration-200"
                      >
                        {item.label}
                      </Link>
                  ))}
                </nav>
              </div>
            </div>
        )}
      </>
  );
}

export default Menu;
