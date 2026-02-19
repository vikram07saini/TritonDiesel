"use client";
import React from "react";
import heroimg from "../../public/landing page images/Rectangle1.png";
import handrefilling from "../../public/landing page images/hand-refilling.svg";
import Image from "next/image";
import RectangleLogo from "../../public/landing page images/rectangleLogo.svg";
import heroimg2 from "../../public/landing page images/Rectangle2.png";
import TestimonialImage from "../../public/landing page images/testimonialHero.png";
import { FaQuoteLeft } from "react-icons/fa";
import { useState } from "react";
import OurMission from "../../public/landing page images/OurMissionImage.png";
import MaskImg from "../../public/landing page images/heroimg1.svg";
import heroimg1 from "../../public/landing page images/Rectangle1.png";
import Link from "next/link";

function Page() {
  const [active, setActive] = useState(1);
  return (
    <>
      <div className="relative flex">
        <Image
          src={MaskImg}
          width={100}
          height={100}
          alt="hero-image"
          className="w-full h-full"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="absolute inset-0 flex items-end">
          <div className="mb-[80px] ml-[120px]">
            <h1 className="text-5xl text-white">WORLDWIDE BEST</h1>

            <h1 className="text-5xl font-extrabold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              DIESEL GAS OIL
            </h1>

            <h1 className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent text-5xl font-extrabold">
              10 PPM
            </h1>

            <h1 className="text-white mt-5 text-sm">
              Lorem Ipsum is simply dummy text of the printing <br />
              and typesetting industry. Lorem Ipsum has been the
              <br />
              industry's
            </h1>
            <Link href="/ContactUs">
              <button className="mt-3 text-white bg-[#00A651] rounded-2xl p-2">
                CONTACT US
              </button>
            </Link>
          </div>
        </div>

        <Image
          src={heroimg1}
          width={100}
          height={100}
          alt="hero-image"
          className="absolute right-0 h-[100%] w-80 z-10"
        />
      </div>

      {/* about us paragraph */}

      <div>
        <div className="flex flex-col items-center mt-20 text-center px-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">ABOUT US</h1>

          <p className="max-w-2xl text-gray-600 leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 px-6 lg:px-16 py-16">
          {/* Image Section */}
          <div className="relative w-full max-w-md">
            <Image src={handrefilling} alt="image" className="w-full h-auto " />

            <Image
              src={heroimg}
              alt="hero-image"
              className="absolute  top-0 h-76 right-0 w-32 md:w-47 z-10"
            />
          </div>

          {/* Content Section */}
          <div className="max-w-xl text-center lg:text-left">
            <h1 className="text-2xl md:text-3xl font-semibold leading-snug">
              Choose Triton Diesel Trading for your fuel supply needs and
              experience the difference.
            </h1>

            <p className="text-gray-600 mt-4 leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s. Lorem Ipsum is simply dummy text of the
              printing and typesetting industry.
            </p>

            <button className="mt-6 bg-[#00A651] hover:bg-green-600 transition-all duration-300 px-4 py-2 rounded-full text-white font-medium">
              MORE DETAILS
            </button>
          </div>
        </div>
      </div>

      {/* what we offer section */}

      <div>
        <div className="text-center mt-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">What We Offer</h1>
          <p className="max-w-2xl text-gray-600 leading-relaxed mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's
          </p>
        </div>
        <div className="max-w-6xl mx-auto mt-16 mb-24 px-6">
          <div className="relative bg-[#F3903F] overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center justify-between p-10 gap-8">
              <div className="max-w-lg text-white">
                <h1 className="text-2xl font-bold mb-2">
                  Diesel Gas Oil 10 PPM
                </h1>

                <h2 className="text-lg font-medium mb-4">
                  THE BEST FUEL SOLUTIONS FOR
                  <br />
                  YOUR BUSINESS
                </h2>

                <p className="text-sm leading-relaxed opacity-90">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting
                  <br /> industry. Lorem Ipsum has been the industry's. Lorem
                  Ipsum is simply
                  <br /> dummy text of the printing and typesetting industry.
                  Lorem Ipsum <br />
                  has been the industry's .
                </p>

                <button className="mt-6 bg-[#00A651] hover:bg-green-600 transition px-6 py-2 rounded-full text-sm font-medium">
                  FIND OUR LOCATIONS
                </button>
              </div>
              <div className="relative z-10 mr-20">
                <Image
                  src={RectangleLogo}
                  width={70}
                  height={70}
                  alt="rectangle logo"
                />
              </div>
            </div>

            {/* Background Side Image */}
            <Image
              src={heroimg2}
              alt="hero-image"
              className="absolute right-0 top-0 h-full w-[420px] object-cover opacity-100 
  [clip-path:polygon(10%_0,100%_0,100%_100%,160_100%)]"
            />
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="text-center">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Testimonial</h1>
          <p className="text-gray-600 mt-4 leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
            <br />
            Lorem Ipsum has been the industry's
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 px-6 py-16">
        <div className=" relative">
          <Image
            src={TestimonialImage}
            width={350}
            height={350}
            alt="testimonial hero image"
            className=" object-cover"
          />
          <Image
            src={heroimg}
            alt="hero-image"
            className="absolute top-0  right-0 h-60 w-30"
          />
        </div>

        <div className="max-w-xl text-center lg:text-left">
          <div className="text-4xl text-orange-500 mb-4">
            <FaQuoteLeft />
          </div>
          <p className="text-gray-600 leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry.
          </p>
          <div className="mt-6">
            <h1 className="font-semibold text-lg">— Cameron Williamson</h1>
            <span className="text-sm text-gray-500 ml-6">CEO</span>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-2 mt-6">
        {[0, 1, 2].map((index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              active === index
                ? "bg-orange-500 scale-110"
                : "bg-gray-400 hover:bg-gray-600"
            }`}
          />
        ))}
      </div>

      {/* Our Mission Section */}

      <div className="flex justify-center align-items-center gap-5 items-center p-20">
        <div>
          <h1 className="text-3xl font-bold">Our Mission</h1>
          <h2 className=" text-xl text-orange-500 font-semibold">
            THE BEST FUEL SOLUTIONS FOR
            <br /> YOUR BUSINESS
          </h2>
          <p className="text-gray-600 leading-relaxed ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
            <br /> Lorem Ipsum has been the industry's. Lorem Ipsum is simply
            dummy text of the
            <br /> printing and typesetting industry. Lorem Ipsum has been the
            industry's .Lorem <br /> Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem <br />
            Ipsum has been the industry's{" "}
          </p>
        </div>
        <div className="relative">
          <Image
            src={OurMission}
            width={350}
            height={350}
            className="object-cover"
            alt="Our Mission Image"
          />
          <Image
            src={heroimg}
            alt="hero-image"
            className="absolute top-0  right-0 h-60 w-30"
          />
        </div>
      </div>
    </>
  );
}

export default Page;
