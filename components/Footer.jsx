"use client";
import React from "react";
import { FaArrowUp } from "react-icons/fa";
import Link from "next/link";

function Footer() {
  const scrollToTop = () => {
  const start = window.scrollY;
  const duration = 1200; 
  const startTime = performance.now();

  const animateScroll = (currentTime) => {
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);

    window.scrollTo(0, start * (1 - progress));

    if (progress < 1) {
      requestAnimationFrame(animateScroll);
    }
  };

  requestAnimationFrame(animateScroll);
};

  return (
    <div className="bg-[#121516] text-white px-6 sm:px-10 lg:px-20 py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-12 md:gap-20 lg:gap-60">
        
        {/* ================= QUICK LINKS ================= */}
        <div className="flex flex-col justify-between text-center md:text-left">
          <div>
            <h1 className="text-lg font-semibold mb-4">QUICK LINKS</h1>

            <ul className="flex flex-wrap justify-center md:justify-start items-center gap-2 text-base sm:text-lg text-gray-300">
              <li>
                <Link href="/" className="hover:text-orange-500 cursor-pointer transition">
                  Home
                </Link>
              </li>

              <span>/</span>

              <li>
                <Link
                  href="/AboutUs"
                  className="hover:text-orange-500 cursor-pointer transition"
                >
                  About Us
                </Link>
              </li>

              <span>/</span>

              <li>
                <Link
                  href="/QualityAssurance"
                  className="hover:text-orange-500 cursor-pointer transition"
                >
                  Quality Assurance
                </Link>
              </li>

              <span>/</span>

              <li>
                <Link
                  href="/ContactUs"
                  className="hover:text-orange-500 cursor-pointer transition"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <p className="text-xs text-gray-400 mt-8 md:mt-6">
            © 2024 TRITON DIESEL. All rights reserved.
          </p>
        </div>

        {/* ================= CONTACT SECTION ================= */}
        <div className="flex flex-col gap-6 text-center md:text-left">
          <h1 className="text-lg font-semibold">CONTACT US</h1>

          <div>
            <h3 className="text-orange-500 font-medium">123456789</h3>

            <h3 className="text-gray-300">brucode@gmail.com</h3>
          </div>

          <p className="text-sm text-gray-400 leading-relaxed">
            FDCW0786, Compass Building, A Shohada Road,
            <br className="hidden sm:block" />
            AL Hamra Industrial Zone-FZ,
            <br className="hidden sm:block" />
            Ras Al Khaimah, UAE.
          </p>
        </div>

        {/* ================= FOLLOW US ================= */}
        <div className="flex flex-col justify-between items-center md:items-start text-center md:text-left">
          <div>
            <h1 className="text-lg font-semibold mb-4">FOLLOW US</h1>

            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="hover:text-orange-500 cursor-pointer transition">
                Whatsapp
              </li>

              <li className="hover:text-orange-500 cursor-pointer transition">
                YouTube
              </li>

              <li className="hover:text-orange-500 cursor-pointer transition">
                Instagram
              </li>
            </ul>
          </div>

          {/* Scroll To Top Button */}
          <div className="mt-10 md:mt-15">
            <button
              onClick={scrollToTop}
              className="text-orange-500 hover:bg-orange-600 hover:text-white transition-all duration-300 text-xl p-3 rounded-full shadow-lg hover:scale-110"
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
