"use client";

import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

import logo from "../public/logo.svg";
import Image from "next/image";

import { usePathname } from "next/navigation";
import Link from "next/link";

function Navbar() {
  const pathname = usePathname();

  return (
    <div>
      {/* Top Details Bar */}
      <div className="detailsoverview bg-black text-white">
        <div className="max-w-7xl mx-auto flex justify-between  py-1">
          <div className="flex gap-3 items-center">
            <div className="flex items-center gap-1">
              <FaPhoneAlt />
              <h1>123456789</h1>
            </div>

            <div className="border-r border-white w-px h-5"></div>

            <div className="flex items-center gap-1">
              <IoMail />
              <h1>Brucode@gmail.com</h1>
            </div>
          </div>

          <div className="flex gap-5">
            <i className="text-2xl cursor-pointer">
              <FaYoutube />
            </i>
            <i className="text-2xl cursor-pointer">
              <FaInstagram />
            </i>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <Image
              src={logo}
              width={100}
              height={100}
              alt="logo"
              className="w-20 h-20"
            />
          </div>

          <div>
            <ul className="flex gap-12 items-center">
              <li>
                <Link
                  href="/"
                  className={`relative pb-1 ${
                    pathname === "/" ? "text-black" : ""
                  }`}
                >
                  Home
                  {pathname === "/" && (
                    <span className="absolute left-0 bottom-0 w-full h-[2px] bg-gray-500"></span>
                  )}
                </Link>
              </li>

              <li>
                <Link
                  href="/AboutUs"
                  className={`relative pb-1 ${
                    pathname === "/AboutUs" ? "text-black" : ""
                  }`}
                >
                  About Us
                  {pathname === "/AboutUs" && (
                    <span className="absolute left-0 bottom-0 w-full h-[2px] bg-gray-500"></span>
                  )}
                </Link>
              </li>

              <li>
                <Link
                  href="/QualityAssurance"
                  className={`relative pb-1 ${
                    pathname === "/QualityAssurance" ? "text-black" : ""
                  }`}
                >
                  Quality Assurance
                  {pathname === "/QualityAssurance" && (
                    <span className="absolute left-0 bottom-0 w-full h-[2px] bg-gray-500"></span>
                  )}
                </Link>
              </li>

              <li>
                <Link
                  href="/ContactUs"
                  className={`relative pb-1 ${
                    pathname === "/ContactUs" ? "text-black" : ""
                  }`}
                >
                  Contact Us
                  {pathname === "/ContactUs" && (
                    <span className="absolute left-0 bottom-0 w-full h-[2px] bg-gray-500"></span>
                  )}
                </Link>
              </li>

              <button className="bg-[#00A651] rounded-lg text-sm text-white p-2">
                FIND OUR LOCATIONS
              </button>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
