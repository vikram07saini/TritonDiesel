import React from "react";
import Image from "next/image";
import img1 from "../../../public/ContactUs Images/img1.svg";
import Rectangle from "../../../public/ContactUs Images/Rectangle1.png";
import img2 from "../../../public/ContactUs Images/img2.svg";
import { IoCall } from "react-icons/io5";
import { MdEmail, MdLocationPin } from "react-icons/md";

export const metadata = {
  title: "Contact Us",
  description:
    "Contact Triton Diesel Fuel Trading FZ-LLC for Diesel Gas Oil 10 PPM supply, fuel trading services, and business inquiries in UAE.",
};

function page() {
  return (
    <div>
      <div className="relative w-full h-[550px] md:h-[650px]">
      <Image
  src={img1}
  fill
  priority
  alt="image"
  sizes="100vw"
  className="object-cover object-left md:object-center"
/>


        <div className="absolute inset-0 bg-black/50"></div>

        <Image
          src={Rectangle}
          width={100}
          height={100}
          alt=""
          className="hidden md:block absolute h-full top-0 right-0 w-70"
        />

        <div className="absolute inset-0 flex items-center px-6 md:px-0">
          <div className="md:ml-[280px] text-center md:text-left max-w-xl">
            <h1 className="text-3xl md:text-5xl text-white">
              CONTACT US
            </h1>

            <h3 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              HAVE QUESTIONS
              <br />
              FEEL FREE
            </h3>

            <p className="text-white mt-5 text-sm md:text-base">
              We value your inquiries, feedback, and interest in triton Diesel
              <br className="hidden md:block" />
              Trading. We are here to assist you with any questions or fuel
              <br className="hidden md:block" />
              requirements you may have.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-around p-6 md:p-12 lg:p-20 gap-10">
        <div className="flex flex-col md:flex-row items-start border border-gray-300 bg-white p-6 md:p-8 w-full lg:w-auto">
          
          <div className="mx-auto md:mx-0">
            <Image
              src={img2}
              width={300}
              height={400}
              priority
              alt="image"
              className="w-64 sm:w-80 md:w-[400px] h-auto md:h-[500px] object-cover"
            />
          </div>

          <div className="mt-6 md:mt-0 md:ml-8 text-center md:text-left">
            <h1 className="text-xl md:text-2xl font-semibold mb-5">
              Get In Touch
            </h1>

            <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base">
              Lorem Ipsum is simply
              <br className="hidden md:block" />
              dummy text of the printing
              <br className="hidden md:block" />
              and typesetting industry.
              <br className="hidden md:block" />
              Lorem Ipsum has been the
              <br className="hidden md:block" />
              industry's
            </p>

            <div className="flex items-start gap-3 mb-2 justify-center md:justify-start">
              <MdLocationPin className="text-lg mt-1" />
              <h3 className="font-medium">
                Triton Diesel Fuel Trading FZ-LLC
              </h3>
            </div>

            <div className="mb-6 text-gray-600 leading-relaxed text-sm md:text-base text-center md:text-left">
              <p>
                FDCW0786
                <br />
                Compass Building,
                <br />
                A Shohada Road,
                <br />
                AL Hamra Industrial Zone-FZ,
                <br />
                Ras Al Khaimah, UAE.
              </p>
            </div>

            <div className="flex items-center gap-3 mb-3 justify-center md:justify-start">
              <MdEmail className="text-lg" />
              <h1 className="text-orange-500">
                Brucode@gmail.com
              </h1>
            </div>

            <div className="flex items-center gap-3 justify-center md:justify-start">
              <IoCall className="text-lg" />
              <h1>1234567890</h1>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[560px] h-auto lg:h-[600px] bg-[#f2f2f2] border border-gray-300 flex flex-col">
          
          <div className="text-center py-6 border-b border-gray-300 bg-white">
            <h1 className="text-base md:text-lg font-medium text-gray-700">
              Fill the form below
            </h1>
          </div>

          <div className="flex flex-col gap-5 px-6 md:px-10 py-8 md:py-10">
            <input
              type="text"
              placeholder="Name"
              className="w-full h-12 px-4 rounded-md border border-gray-300 bg-white outline-none"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full h-12 px-4 rounded-md border border-gray-300 bg-white outline-none"
            />

            <input
              type="number"
              placeholder="Phone Number"
              className="w-full h-12 px-4 rounded-md border border-gray-300 bg-white outline-none"
            />

            <textarea
              placeholder="Message"
              rows="5"
              className="w-full px-4 py-3 rounded-md border border-gray-300 bg-white resize-none outline-none"
            ></textarea>

            <button className="w-full bg-[#00A651] text-white py-3 rounded-full font-medium cursor-pointer">
              GET IN TOUCH
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
