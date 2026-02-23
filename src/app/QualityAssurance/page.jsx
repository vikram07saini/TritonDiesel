import React from "react";
import img1 from "../../../public/Quality Images/img1.svg";
import Image from "next/image";
import Rectangle from "../../../public/Quality Images/Rectangle1.png";
import img2 from "../../../public/Quality Images/img2.svg";

export const metadata = {
  title: "Quality Assurance",
  description:
    "Triton Diesel Fuel Trading FZ-LLC ensures premium Diesel Gas Oil 10 PPM quality through strict testing, international standards, and reliable fuel supply processes.",
};

function page() {
  return (
    <div>
      <div className="relative w-full h-[550px] md:h-[650px]">
        <Image src={img1} fill priority alt="image" className="object-cover" />

        <div className="absolute inset-0 bg-black/50"></div>

        <Image
          src={Rectangle}
          width={100}
          height={100}
          alt=""
          className="hidden md:block absolute h-full top-0 right-0 w-80 lg:w-100"
        />

        <div className="absolute inset-0 flex items-center md:block px-6 md:px-0">
          <div className="md:absolute md:bottom-60 md:left-70 text-center md:text-left max-w-xl">
            <h3 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              QUALITY
              <br />
              ASSURANCE
            </h3>

            <p className="text-white mt-5 text-sm md:text-base">
              At Triton Diesel Trading, we are committed to delivering fuel
              <br className="hidden md:block" />
              products of the highest quality to our valued customers in the
              <br className="hidden md:block" />
              UAE.
            </p>
          </div>
        </div>
      </div>
      <div className="px-6 md:px-0">
        <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-10 mt-16 md:mt-20 items-center text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-semibold">
            Fueling Excellence
            <br /> with Uncomp <br /> romising Quality <br />
            Assurance.
          </h1>

          <div>
            <h1 className="text-gray-600 md:ml-10 text-sm md:text-base">
              Lorem Ipsum is simply dummy text of the printing
              <br className="hidden md:block" /> and typesetting industry. Lorem
              Ipsum has been
              <br className="hidden md:block" /> the industry's. Lorem Ipsum is
              simply dummy text
              <br className="hidden md:block" /> of the printing and typesetting
              industry. Lorem
              <br className="hidden md:block" /> Ipsum has been the industry's .
            </h1>
          </div>
          <div>
            <h1 className="text-gray-600 text-sm md:text-base">
              Lorem Ipsum is simply dummy text of the
              <br className="hidden md:block" /> printing and typesetting
              industry. Lorem Ipsum
              <br className="hidden md:block" /> has been the industry's. Lorem
              Ipsum is simply
              <br className="hidden md:block" /> dummy text of the printing and
              typesetting
              <br className="hidden md:block" /> industry.
            </h1>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-center gap-10 mt-10 items-center pb-16 md:pb-20">
          <div className="relative">
            <Image
              src={img2}
              width={100}
              height={100}
              alt="Fueling Excellence Image"
              className="w-64 sm:w-80 md:w-90 h-auto md:h-80"
            />

            <Image
              src={Rectangle}
              width={100}
              height={100}
              alt=""
              className="hidden md:block absolute top-0 h-80 w-35 right-0"
            />
          </div>
          <div className="flex flex-col gap-6 md:gap-10 w-full md:w-auto">
            <div className="border border-gray-300 p-4">
              <h1 className="text-xl md:text-2xl mb-3">
                Adherence to Standards
              </h1>
              <p className="text-gray-600 text-sm md:text-base">
                Lorem Ipsum is simply dummy text of the
                <br className="hidden md:block" />
                printing and typesetting industry. Lorem Ipsum
                <br className="hidden md:block" />
                has been the industry's.
              </p>
            </div>

            <div className="border border-gray-300 p-4">
              <h1 className="text-xl md:text-2xl mb-3">
                Material Safety Data Sheets
              </h1>
              <p className="text-gray-600 text-sm md:text-base">
                Lorem Ipsum is simply dummy text of the
                <br className="hidden md:block" />
                printing and typesetting industry. Lorem Ipsum
                <br className="hidden md:block" />
                has been the industry's.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6 md:gap-10 w-full md:w-auto">
            <div className="border border-gray-300 p-4">
              <h1 className="text-xl md:text-2xl mb-3">Supplier Selection</h1>
              <p className="text-gray-600 text-sm md:text-base">
                Lorem Ipsum is simply dummy text of the
                <br className="hidden md:block" />
                printing and typesetting industry. Lorem Ipsum
                <br className="hidden md:block" />
                has been the industry's.
              </p>
            </div>

            <div className="border border-gray-300 p-4">
              <h1 className="text-xl md:text-2xl mb-3">
                Continuous Improvement
              </h1>
              <p className="text-gray-600 text-sm md:text-base">
                Lorem Ipsum is simply dummy text of the
                <br className="hidden md:block" />
                printing and typesetting industry. Lorem Ipsum
                <br className="hidden md:block" />
                has been the industry's.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
