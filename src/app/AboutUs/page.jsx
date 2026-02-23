import React from "react";
import MaskImage from "../../../public/about Images/Mask group.svg";
import Rectangle from "../../../public/about Images/Rectangle1.png";
import Image from "next/image";
import ourMissionImage from "../../../public/about Images/Rectangle 430.svg";
import teamM1 from "../../../public/about Images/teamM1.svg";
import teamM2 from "../../../public/about Images/teamM3.svg";
import teamM3 from "../../../public/about Images/teamM2.svg";
import Link from "next/link";

export const metadata = {
  title: "About Us",
  description:
    "Learn more about Triton Diesel Fuel Trading and our commitment to quality fuel supply.",
};

function page() {
  return (
    <div>
      <div className="relative w-full h-[550px] md:h-[650px]">
        <Image
          src={MaskImage}
          alt="image"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <Image
          src={Rectangle}
          width={100}
          height={100}
          alt=""
          className="hidden md:block absolute h-full top-0 right-0 w-80 lg:w-100"
        />

        <div className="absolute inset-0 flex items-center md:items-end px-6 md:px-0">
          <div className="mb-0 md:mb-[160px] md:ml-[270px] text-center md:text-left max-w-xl">
            <h1 className="text-3xl md:text-5xl text-white">ABOUT US</h1>

            <h3 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              FUELING YOUR
              <br /> SUCCESS
            </h3>

            <p className="text-white mt-5 text-sm md:text-base">
              Choose Triton Diesel Trading for your fuel supply
              <br className="hidden md:block" />
              needs and experience the difference
            </p>

            <Link href="/ContactUs">
              <button className="mt-8 bg-[#00A651] text-white px-8 py-3 rounded-full tracking-wide transition-all duration-300 hover:bg-green-700 hover:scale-105 shadow-lg">
                CONTACT US
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* ================= OUR QUALITIES ================= */}
      <div>
        <div className="flex flex-col items-center mt-12 md:mt-10 px-6">
          <h1 className="text-2xl md:text-4xl font-bold mb-4">
            Our Qualities
          </h1>

          <p className="max-w-2xl text-gray-600 leading-relaxed text-center text-sm md:text-base">
            Choose Triton Diesel Trading for your fuel supply needs and
            experience the
            <br className="hidden md:block" /> difference.
          </p>
        </div>
<div className="flex flex-col md:flex-row justify-center items-start gap-8 md:gap-16 px-6 md:px-0 mt-10">

  <div className="flex flex-col gap-5 w-full md:w-auto max-w-xl">
    
    <div className="flex items-start gap-3">
      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-200 text-green-500 text-xs shrink-0">
        ✔
      </span>
      <h3 className="text-sm md:text-base leading-relaxed">
        Velit egestas dui id ornare. Aliquet eget sit amet tellus cras.
      </h3>
    </div>

    <div className="flex items-start gap-3">
      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-200 text-green-500 text-xs shrink-0">
        ✔
      </span>
      <h3 className="text-sm md:text-base leading-relaxed">
        Cursus metus aliquam eleifend mi.
      </h3>
    </div>

    <div className="flex items-start gap-3">
      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-200 text-green-500 text-xs shrink-0">
        ✔
      </span>
      <h3 className="text-sm md:text-base leading-relaxed">
        In nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque.
      </h3>
    </div>

    <div className="flex items-start gap-3">
      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-200 text-green-500 text-xs shrink-0">
        ✔
      </span>
      <h3 className="text-sm md:text-base leading-relaxed">
        Lorem Ipsum is simply dummy text of the printing and typesetting
      </h3>
    </div>
  </div>
  <div className="flex flex-col gap-5 w-full md:w-auto max-w-xl">
    
    <div className="flex items-start gap-3">
      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-200 text-green-500 text-xs shrink-0">
        ✔
      </span>

      <h3 className="text-sm md:text-base leading-relaxed">
        Metus aliquam eleifend mi. In nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque.
      </h3>
    </div>

    <div className="flex items-start gap-3">
      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-200 text-green-500 text-xs shrink-0">
        ✔
      </span>

      <h3 className="text-sm md:text-base leading-relaxed">
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </h3>
    </div>
  </div>

</div>

      </div>
      <div className="w-full md:w-[90%] lg:w-[80%] h-auto bg-gray-200 mx-auto mt-16 md:mt-20 flex justify-center items-center border-l-4 border-gray-400 px-6 py-8 text-center md:text-left">
        <p className="text-gray-600 text-sm md:text-base">
         Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut  enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit  in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui  officia deserunt mollit anim id est laborum.
        </p>
      </div>

      {/* ================= OUR MISSION ================= */}
      <div>
        <div className="flex flex-col lg:flex-row justify-around p-6 lg:p-5 lg:pl-20  mt-16 md:mt-20 items-center">
          <div className="text-center lg:text-left max-w-xl">
            <h1 className="text-2xl md:text-4xl font-bold mb-4">
              OUR MISSION
            </h1>

            <h3 className="text-[#ED683C] text-xl md:text-3xl">
              The Best Fuel Solutions For
              <br className="hidden md:block" /> Your Business
            </h3>

            <p className="mt-3 text-gray-600 text-sm md:text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's .Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
            </p>
          </div>

          <div className="relative">
            <Image
              src={ourMissionImage}
              width={100}
              height={100}
              priority
              alt="Our mission image"
              className="w-64 md:w-140 h-auto md:h-70"
            />

            <Image
              src={Rectangle}
              width={100}
              height={100}
              alt="Rectangle Image"
              className="hidden md:block absolute top-0 right-18 h-full w-40"
            />
          </div>
        </div>
      </div>

      {/* ================= MEET OUR TEAM ================= */}
      <div className="p-6 md:p-10">
        <div className="flex flex-col items-center mt-16 md:mt-20 text-center">
          <h1 className="text-2xl md:text-4xl font-bold mb-4">
            Meet Our Team
          </h1>

          <p className="max-w-2xl text-gray-600 leading-relaxed text-center mb-6 text-sm md:text-base">
         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has  been the industry's
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-5 items-center">
          <div>
            <Image
              src={teamM1}
              width={100}
              height={100}
              priority
              alt="teamMember img"
              className="w-48 md:w-50 h-64 md:h-70 object-cover"
            />
          </div>

          <div className="relative">
            <Image
              src={teamM2}
              width={100}
              height={100}
              priority
              alt="teamMember img"
              className="w-48 md:w-50 h-64 md:h-70 object-cover"
            />

            <div className="absolute bottom-0 w-full bg-white/60 backdrop-blur-sm text-center py-2">
              <h1 className="text-sm font-semibold">
                Cameron Williamson
              </h1>

              <h3 className="text-xs text-gray-600">
                Chief Executive
              </h3>
            </div>
          </div>

          <div>
            <Image
              src={teamM3}
              width={100}
              height={100}
              priority
              alt="teamMember img"
              className="w-48 md:w-50 h-64 md:h-70 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
