"use client";
import React from "react";
import { FaArrowUp } from "react-icons/fa";
import Link from "next/link";

function Footer() {
    const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="bg-[#121516] text-white px-6 lg:px-20 py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-60 ">
        {/* Quick Links */}
        <div className="flex flex-col justify-between ">
          <div>
            <h1 className="text-lg font-semibold mb-4">QUICK LINKS</h1>

            <ul className="flex flex-wrap items-center gap-2 text-lg text-gray-300">
              <li>
                <Link href="/" className="hover:text-orange-500 cursor-pointer">
                  Home
                </Link>
              </li>

              <span>/</span>

              <li>
                <Link
                  href="/AboutUs"
                  className="hover:text-orange-500 cursor-pointer"
                >
                  About Us
                </Link>
              </li>

              <span>/</span>

              <li>
                <Link
                  href="/QualityAssurance"
                  className="hover:text-orange-500 cursor-pointer"
                >
                  Quality Assurance
                </Link>
              </li>

              <span>/</span>

              <li>
                <Link
                  href="/ContactUs"
                  className="hover:text-orange-500 cursor-pointer"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <p className="text-xs text-gray-400 mt-6">
            © 2024 TRITON DIESEL. All rights reserved.
          </p>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col gap-6">
          <h1 className="text-lg font-semibold">CONTACT US</h1>

          <div>
            <h3 className="text-orange-500 font-medium">123456789</h3>

            <h3 className="text-gray-300">brucode@gmail.com</h3>
          </div>

          <p className="text-sm text-gray-400 leading-relaxed">
            FDCW0786, Compass Building, A Shohada Road,
            <br />
            AL Hamra Industrial Zone-FZ,
            <br />
            Ras Al Khaimah, UAE.
          </p>
        </div>

        {/* Follow Us */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-lg font-semibold mb-4">FOLLOW US</h1>

            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="hover:text-orange-500 cursor-pointer">Whatsapp</li>

              <li className="hover:text-orange-500 cursor-pointer">YouTube</li>

              <li className="hover:text-orange-500 cursor-pointer">
                Instagram
              </li>
            </ul>
          </div>

          <div className="mt-15">
               <button
      onClick={scrollToTop}
      className="text-orange-500 hover:bg-orange-600 hover:text-white transition-all duration-300 text-xl p-3 rounded-full shadow-lg"
    >
      <FaArrowUp />
    </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
