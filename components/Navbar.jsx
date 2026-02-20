"use client";
import React, { useState } from "react";
import { FaInstagram, FaYoutube, FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import logo from "../public/logo.svg";

function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "ABOUT US", path: "/AboutUs" },
    { name: "QUALITY ASSURANCE", path: "/QualityAssurance" },
    { name: "CONTACT US", path: "/ContactUs" },
  ];

  return (
    <div className="w-full">
      <div className="bg-black text-white hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-2 px-6">
          <div className="flex gap-4 items-center text-sm">
            <div className="flex items-center gap-2">
              <FaPhoneAlt />
              <span>123456789</span>
            </div>

            <div className="border-r border-white h-4"></div>

            <div className="flex items-center gap-2">
              <IoMail />
              <span>Brucode@gmail.com</span>
            </div>
          </div>

          <div className="flex gap-5 text-lg">
            <FaYoutube className="cursor-pointer hover:text-gray-300 transition" />
            <FaInstagram className="cursor-pointer hover:text-gray-300 transition" />
          </div>
        </div>
      </div>
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-2  py-3">
          <Link href="/">
            <Image
              src={logo}
              alt="logo"
              width={150}
              height={150}
              className="object-contain pl-5"
            />
          </Link>
          <ul className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className={`relative pb-1 font-medium 
                  }`}
                >
                  {link.name}
                  {pathname === link.path && (
                    <span className="absolute left-0 bottom-0 w-full h-[2px] bg-gray-500"></span>
                  )}
                </Link>
              </li>
            ))}

            <button className="bg-[#00A651] text-white px-6 py-2.5 rounded-full text-sm  tracking-wide cursor-pointer">
              FIND OUR LOCATIONS
            </button>
          </ul>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <FaTimes size={24} />
              ) : (
                <FaBars size={24} />
              )}
            </button>
          </div>
        </div>

        {/* ================= Mobile Menu ================= */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-md border-t">
            <ul className="flex flex-col items-center gap-6 py-6">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`font-medium ${
                      pathname === link.path ? "text-black" : "text-gray-700"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}

              <button className="bg-[#00A651] text-white px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 hover:bg-green-700">
                FIND OUR LOCATIONS
              </button>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
