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
      <div className="relative">
        <Image
          src={MaskImage}
          width={100}
          height={100}
          alt=""
          className="h-full w-full"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <Image
          src={Rectangle}
          width={100}
          height={100}
          alt=""
          className="absolute h-full top-0 right-0 w-100"
        />
        <div className="absolute inset-0 flex items-end">
          <div className="mb-[160px] ml-[140px]">
            <h1 className="text-5xl text-white">ABOUT US</h1>

            <h3 className="text-5xl font-extrabold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              FUELING YOUR
              <br /> SUCCESS
            </h3>

            <p className="text-white mt-5">
              Choose Triton Diesel Trading for your fuel supply
              <br />
              needs and experience the difference
            </p>

            <Link href="/ContactUs">
              <button className="mt-3 text-white bg-[#00A651] rounded-2xl p-2">
                CONTACT US
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* Our Quality Section */}
      <div>
        <div className="flex flex-col items-center mt-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Qualities</h1>
          <p className="max-w-2xl text-gray-600 leading-relaxed text-center">
            Choose Triton Diesel Trading for your fuel supply needs and
            experience the
            <br /> difference.
          </p>
        </div>
        <div className="flex justify-center ">
          {/* Left Column */}
          <div className="flex flex-col gap-4 mx-auto mt-10 p-2 ">
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-200 text-green-400  text-xs">
                ✔
              </span>
              <h3>
                Velit egestas dui id ornare. Aliquet eget sit amet tellus cras.
              </h3>
            </div>

            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-200 text-green-400  text-xs">
                ✔
              </span>
              <h3>Cursus metus aliquam eleifend mi.</h3>
            </div>

            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-200 text-green-400  text-xs">
                ✔
              </span>
              <h3>
                In nulla posuere sollicitudin aliquam ultrices sagittis orci a
                scelerisque.
              </h3>
            </div>

            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-200 text-green-400  text-xs">
                ✔
              </span>
              <h3>
                Lorem Ipsum is simply dummy text of the printing and typesetting
              </h3>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4 mt-10 p-2 mr-43">
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-200 text-green-400  text-xs">
                ✔
              </span>

              <h3>
                Metus aliquam eleifend mi. In nulla posuere sollicitudin aliquam
                <br />
                ultrices sagittis orci a scelerisque.
              </h3>
            </div>

            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-200 text-green-400  text-xs">
                ✔
              </span>

              <h3>
                Sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="w-310 h-50 bg-gray-200 mx-auto mt-20 flex justify-center items-center border-l-3 border-gray-400">
        <p className="text-gray-600">
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip
          <br />
          ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat
          <br />
          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
          id est laborum.
        </p>
      </div>

      {/* Our Mission Section */}
      <div>
        <div className="flex justify-around p-5 pl-20 gap-7 mt-20 ">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              OUR M Ission
            </h1>
            <h3 className="text-[#ED683C] text-3xl ">
              The Best Fuel Solutions For
              <br /> Your Business
            </h3>
            <p className="mt-3 text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
              <br /> Lorem Ipsum has been the industry's. Lorem Ipsum is simply
              dummy text of the
              <br /> printing and typesetting industry. Lorem Ipsum has been the
              industry's .Lorem <br />
              Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem <br />
              Ipsum has been the industry's{" "}
            </p>
          </div>
          <div className="relative">
            <Image
              src={ourMissionImage}
              width={100}
              height={100}
              alt="Our mission image"
              className=" w-140 h-70"
            />
            <Image
              src={Rectangle}
              width={100}
              height={100}
              alt="Rectangle Image"
              className=" absolute top-0 right-18 h-full w-40"
            />
          </div>
        </div>
      </div>

      {/* Meet Our Team Section */}

      <div className="p-10">
        <div className="flex flex-col items-center mt-20 text-center ">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h1>
          <p className="max-w-2xl text-gray-600 leading-relaxed text-center mb-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
            <br /> Lorem Ipsum has been the industry's
          </p>
        </div>
        <div className="flex justify-center gap-5">
          <div>
            <Image
              src={teamM1}
              width={100}
              height={100}
              alt="teamMember img"
              className="w-50 h-70 object-cover"
            />
          </div>
          <div className="relative ">
            <Image
              src={teamM2}
              width={100}
              height={100}
              alt="teamMember img"
              className="w-50 h-70 object-cover "
            />

            <div className="absolute bottom-0 w-full  bg-white/60 backdrop-blur-sm text-center py-2 ">
              <h1 className="text-sm font-semibold">Cameron Williamson</h1>

              <h3 className="text-xs text-gray-600">Chief Executive</h3>
            </div>
          </div>

          <div>
            <Image
              src={teamM3}
              width={100}
              height={100}
              alt="teamMember img"
              className="w-50 h-70 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
