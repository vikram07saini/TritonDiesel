import React from 'react'
import Image from 'next/image'
import img1 from "../../../public/ContactUs Images/img1.svg";
import Rectangle from "../../../public/ContactUs Images/Rectangle1.png";
import img2 from "../../../public/ContactUs Images/img2.svg";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";

export const metadata = {
  title: "Contact Us",
  description:
    "Contact Triton Diesel Fuel Trading FZ-LLC for Diesel Gas Oil 10 PPM supply, fuel trading services, and business inquiries in UAE.",
  keywords: [
    "Contact Triton Diesel",
    "Diesel supplier UAE",
    "Fuel trading Ras Al Khaimah",
    "Diesel Gas Oil 10 PPM supplier",
    "Fuel company contact UAE"
  ],
  openGraph: {
    title: "Contact Triton Diesel | Fuel Trading Company",
    description:
      "Get in touch with Triton Diesel Fuel Trading FZ-LLC for premium fuel supply solutions.",
    url: "https://yourdomain.com/contact",
    siteName: "Triton Diesel",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};




function page() {
  return (
    <div>
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Triton Diesel Fuel Trading FZ-LLC",
      url: "https://yourdomain.com",
      logo: "https://yourdomain.com/logo.png",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+971559123372",
        contactType: "customer service",
        areaServed: "AE",
        availableLanguage: "English",
      },
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Compass Building, A Shohada Road, AL Hamra Industrial Zone-FZ",
        addressLocality: "Ras Al Khaimah",
        addressCountry: "UAE",
      },
    }),
  }}
/>

        <div className='relative'>
            <Image src={img1}
            width={100}
            height={100}
            alt="img"
            className="w-full h-full"
            />
            <div className="absolute inset-0 bg-black/50"></div>
                    <Image src={Rectangle}
                    width={100}
                    height={100}
                    alt=''
                    className='absolute h-full top-0 right-0 w-70'
                    />
        <div className="absolute inset-0 flex items-center">
  <div className="ml-[140px]">

    <h1 className='text-5xl text-white'>
      CONTACT US
    </h1>

    <h3 className='text-5xl font-extrabold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent'>
      HAVE QUESTIONS<br/>FEEL FREE
    </h3>

    <p className='text-white mt-5'>
      We value your inquiries, feedback, and interest in triton Diesel<br/>
      Trading. We are here to assist you with any questions or fuel <br/>
      requirements you may have.
    </p>

  </div>
</div>
        </div>
        <div className='flex justify-around p-20 '>
         <div className="flex items-start border border-gray-300 bg-white p-8 mr-10">
  <div>
    <Image
      src={img2}
      width={300}
      height={400}
      alt="image"
      className="w-[400px] h-[500px] object-cover"
    />
  </div>
  <div className="ml-8">

    <h1 className="text-2xl font-semibold mb-5">
      Get In Touch
    </h1>

    <p className="text-gray-600 mb-6 leading-relaxed">
      Lorem Ipsum is simply<br/> dummy text of the printing<br/>
      and typesetting industry. <br/>Lorem Ipsum has been the<br/>
      industry's
    </p>
    <div className="flex items-start gap-3 mb-2">
      <MdLocationPin className="text-lg mt-1" />
      <h3 className="font-medium">
        Triton Diesel Fuel Trading FZ-LLC
      </h3>
    </div>

    <div className="mb-6 pl-7 text-gray-600 leading-relaxed">
      <p>
        FDCW0786<br />
        Compass Building,<br />
        A Shohada Road,<br />
        AL Hamra Industrial Zone-FZ,<br />
        Ras Al Khaimah, UAE.
      </p>
    </div>
    <div className="flex items-center gap-3 mb-3">
      <MdEmail className="text-lg" />
      <h1 className="text-orange-500">
        Brucode@gmail.com
      </h1>
    </div>
    <div className="flex items-center gap-3">
      <IoCall className="text-lg" />
      <h1>
        1234567890
      </h1>
    </div>

  </div>

</div>

          <div className="w-[560px] h-[600px] bg-[#f2f2f2] border border-gray-300  flex flex-col">

  {/* Form */}
  <div className="text-center py-6 border-b border-gray-300">
    <h1 className="text-lg font-medium text-gray-700">
      Fill the form below
    </h1>
  </div>
  <div className="flex flex-col gap-5 px-10 py-10">

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

    <button className="w-full bg-[#00A651] text-white py-3 rounded-full font-medium">
      GET IN TOUCH
    </button>

  </div>

</div>

        </div>
    </div>
  )
}

export default page