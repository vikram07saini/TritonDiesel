"use client";
import React, { useState } from "react";
import heroimg from "../../public/landing page images/Rectangle1.png";
import handrefilling from "../../public/landing page images/hand-refilling.svg";
import Image from "next/image";
import RectangleLogo from "../../public/landing page images/rectangleLogo.svg";
import heroimg2 from "../../public/landing page images/Rectangle2.png";
import TestimonialImage from "../../public/landing page images/testimonialHero.png";
import { FaQuoteLeft } from "react-icons/fa";
import OurMission from "../../public/landing page images/OurMissionImage.png";
import MaskImg from "../../public/landing page images/heroimg1.svg";
import heroimg1 from "../../public/landing page images/Rectangle1.png";
import Link from "next/link";

function Page() {
  const [active, setActive] = useState(1);

  return (
    <>
      <div className="relative w-full h-[550px] md:h-[650px]">
        <Image
          src={MaskImg}
          alt="hero-image"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="absolute inset-0 flex items-center md:items-end px-6 md:px-0">
          <div className="mb-0 md:mb-[80px] md:ml-[120px] text-center md:text-left max-w-xl">
            <h1 className="text-3xl md:text-5xl text-white">
              WORLDWIDE BEST
            </h1>

            <h1 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              DIESEL GAS OIL
            </h1>

            <h1 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              10 PPM
            </h1>

            <h1 className="text-white mt-5 text-sm md:text-base">
              Lorem Ipsum is simply dummy text of the printing <br className="hidden md:block" />
              and typesetting industry. Lorem Ipsum has been the
              <br className="hidden md:block" />
              industry's
            </h1>

            <Link href="/ContactUs">
              <button className="mt-8 bg-[#00A651] text-white px-8 py-3 rounded-full tracking-wide transition-all duration-300 hover:bg-green-700 hover:scale-105 shadow-lg">
                CONTACT US
              </button>
            </Link>
          </div>
        </div>

        <Image
          src={heroimg1}
          alt="hero-image"
          className="hidden md:block absolute right-0 h-full w-60 lg:w-110 z-10 object-cover"
        />
      </div>

      {/* ================= ABOUT SECTION ================= */}
      <div>
        <div className="flex flex-col items-center mt-16 md:mt-20 text-center px-6">
          <h1 className="text-2xl md:text-4xl font-bold mb-4">
            ABOUT US
          </h1>

          <p className="max-w-2xl text-gray-600 leading-relaxed text-sm md:text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 px-6 lg:px-16 py-12 md:py-16">
          <div className="relative w-full max-w-md">
            <Image src={handrefilling} alt="image" className="w-full h-auto" />

            <Image
              src={heroimg}
              alt="hero-image"
              className="absolute top-0 right-0 h-65 md:h-76 w-24 md:w-40 lg:w-47  z-10"
            />
          </div>

          <div className="max-w-xl text-center lg:text-left">
            <h1 className="text-xl md:text-3xl font-semibold leading-snug">
              Choose Triton Diesel Trading for your fuel supply needs and
              experience the difference.
            </h1>

            <p className="text-gray-600 mt-4 leading-relaxed text-sm md:text-base">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s. Lorem Ipsum is simply dummy text of the
              printing and typesetting industry.
            </p>

            <button className="mt-8 bg-[#00A651] text-white px-8 py-3 rounded-full tracking-wide transition-all duration-300 hover:bg-green-700 hover:scale-105 shadow-lg">
              MORE DETAILS
            </button>
          </div>
        </div>
      </div>

      {/* ================= WHAT WE OFFER ================= */}
      <div>
        <div className="text-center mt-10 px-6">
          <h1 className="text-2xl md:text-4xl font-bold mb-4">
            What We Offer
          </h1>

          <p className="max-w-2xl text-gray-600 leading-relaxed mx-auto text-sm md:text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's
          </p>
        </div>

        <div className="max-w-6xl mx-auto mt-12 md:mt-16 mb-16 md:mb-24 px-6">
          <div className="relative bg-[#F3903F] overflow-hidden rounded-lg">
            <div className="flex flex-col lg:flex-row items-center justify-between p-6 md:p-10 gap-8">
              <div className="max-w-lg text-white text-center lg:text-left">
                <h1 className="text-xl md:text-2xl font-bold mb-2">
                  Diesel Gas Oil 10 PPM
                </h1>

                <h2 className="text-base md:text-lg font-medium mb-4">
                  THE BEST FUEL SOLUTIONS FOR
                  <br className="hidden md:block" />
                  YOUR BUSINESS
                </h2>

                <p className="text-sm leading-relaxed opacity-90">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>

                <button className="mt-6 bg-[#00A651] hover:bg-green-600 transition px-6 py-2 rounded-full text-sm font-medium">
                  FIND OUR LOCATIONS
                </button>
              </div>

              <div className="relative z-10 lg:mr-40">
                <Image
                  src={RectangleLogo}
                  width={70}
                  height={70}
                  alt="rectangle logo"
                />
              </div>
            </div>

            <Image
              src={heroimg2}
              alt="hero-image"
              className="hidden lg:block absolute right-0 top-0 h-full w-[420px] object-cover [clip-path:polygon(10%_0,100%_0,100%_100%,160_100%)]"
            />
          </div>
        </div>
      </div>

      {/* ================= TESTIMONIAL ================= */}
      <div className="text-center px-6">
        <h1 className="text-2xl md:text-4xl font-bold mb-4">
          Testimonial
        </h1>

        <p className="text-gray-600 mt-4 leading-relaxed text-sm md:text-base">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 px-6 py-12 md:py-16">
        <div className="relative">
          <Image
            src={TestimonialImage}
            width={350}
            height={350}
            alt="testimonial hero image"
            className="object-cover"
          />
        </div>

        <div className="max-w-xl text-center lg:text-left">
          <div className="text-3xl md:text-4xl text-orange-500 mb-4">
            <FaQuoteLeft />
          </div>

          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's .Lorem Ipsum is simply dummy text of the printing and typesetting indus try. Lorem Ipsum has been the industry's Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's .Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
          </p>

          <div className="mt-6">
            <h1 className="font-semibold text-lg">
              — Cameron Williamson
            </h1>
            <span className="text-sm text-gray-500 ml-2">
              CEO
            </span>
          </div>
        </div>
      </div>

      {/* ================= OUR MISSION ================= */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10 px-6 md:px-20 py-16">
        <div className="text-center lg:text-left max-w-xl">
          <h1 className="text-2xl md:text-3xl font-bold">
            Our Mission
          </h1>

          <h2 className="text-lg md:text-xl text-orange-500 font-semibold mt-2">
            THE BEST FUEL SOLUTIONS FOR
            <br className="hidden md:block" />
            YOUR BUSINESS
          </h2>

          <p className="text-gray-600 leading-relaxed mt-4 text-sm md:text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's .Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
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
        </div>
      </div>
    </>
  );
}

export default Page;
