import React from 'react'
import img1 from "../../../public/Quality Images/img1.svg"
import Image from 'next/image'
import Rectangle from "../../../public/Quality Images/Rectangle1.png"
import img2 from "../../../public/Quality Images/img2.svg"

export const metadata = {
  title: "Quality Assurance",
  description:
    "Triton Diesel Fuel Trading FZ-LLC ensures premium Diesel Gas Oil 10 PPM quality through strict testing, international standards, and reliable fuel supply processes.",
  keywords: [
    "Diesel quality assurance UAE",
    "Diesel Gas Oil 10 PPM standards",
    "Fuel quality control UAE",
    "Diesel testing process",
    "Premium fuel supplier UAE"
  ],
  openGraph: {
    title: "Quality Assurance | Triton Diesel",
    description:
      "Learn about Triton Diesel's strict quality control and fuel testing standards.",
    url: "https://yourdomain.com/quality",
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
      "@type": "Service",
      serviceType: "Diesel Gas Oil 10 PPM Supply",
      provider: {
        "@type": "Organization",
        name: "Triton Diesel Fuel Trading FZ-LLC",
        url: "https://yourdomain.com",
      },
      areaServed: {
        "@type": "Country",
        name: "United Arab Emirates",
      },
      description:
        "High-quality Diesel Gas Oil 10 PPM supply with strict quality assurance and international fuel standards compliance.",
    }),
  }}
/>

        <div className='relative'>
            <Image src={img1}
            width={100}
            height={100}
            alt=""
            className=" w-full h-full"
            />
             <div className="absolute inset-0 bg-black/50"></div>
              <Image src={Rectangle}
                     width={100}
                     height={100}
                     alt=''
                     className='absolute h-full top-0 right-0 w-100'
                     />
                       <div className='absolute bottom-40 left-75'>
         
          <h3 className='text-5xl font-extrabold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent'>QUALITY<br/>ASSURANCE</h3>
          <p className='text-white mt-5'>At Triton Diesel Trading, we are committed to delivering fuel<br/> products of the highest quality to our valued customers in the <br/>UAE.</p>
        </div>
        </div>
        <div className=''>
            <div className='flex justify-center gap-30 mt-20 items-center'>
                <h1 className='text-3xl font-semibold'>Fueling Excellence<br/> with Uncomp <br/>  romising Quality <br/>Assurance.</h1>
                 <div>
                <h1 className='text-gray-600'>Lorem Ipsum is simply dummy text of the printing<br/> and typesetting industry. Lorem Ipsum has been<br/> the industry's. Lorem Ipsum is simply dummy text <br/>of the printing and typesetting industry. Lorem<br/> Ipsum has been the industry's .</h1>
            </div>
            <div>
                <h1 className="text-gray-600">Lorem Ipsum is simply dummy text of the<br/> printing and typesetting industry. Lorem Ipsum <br/>has been the industry's. Lorem Ipsum is simply<br/> dummy text of the printing and typesetting <br/>industry. </h1>
            </div>
               
            </div>
            <div className='flex justify-center gap-25 mt-5 items-center pb-20'>
           <div className='relative'>
             <Image src={img2}
                width={100}
                height={100}
                alt='Fueling Excellence Image'
                className='w-80 h-80'
                />
                  <Image src={Rectangle}
                     width={100}
                     height={100}
                     alt=''
                     className='absolute  top-3 h-74 w-35 right-0 '
                     /> 
                </div>
                <div className='flex flex-col gap-20 '>
                     <div className='border-1 border-gray-300 p-5 '>
                    <div>
                    <h1 className='text-2xl mb-3'>Adherence to Standards</h1>
                    <p className='text-gray-600'>Lorem Ipsum is simply dummy text of the <br/>printing and typesetting industry. Lorem Ipsum <br/>    has been the industry's.</p>
                    </div>
                    </div>
                     <div className='border-1 border-gray-300 p-5 '>
                    <div>
                        <h1 className='text-2xl mb-3'>Material Safety Data Sheets </h1>
                        <p className='text-gray-600'>Lorem Ipsum is simply dummy text of the<br/> printing and typesetting industry. Lorem Ipsum <br/>has been the industry's.</p>
                    </div>
                   </div>
                </div>
                <div className='flex flex-col gap-20'>
                    <div className='border-1 border-gray-300 p-5'>
                    <div>
                        <h1 className='text-2xl mb-3'>Supplier Selection</h1>
                        <p className='text-gray-600'>Lorem Ipsum is simply dummy text of the <br/>printing and typesetting industry. Lorem Ipsum<br/> has been the industry's.</p>
                    </div>
                    </div>
                    <div className='border-1 border-gray-300 p-5 '>
                    <div>
                        <h1 className='text-2xl mb-3'>Continuous Improvement</h1>
                        <p className='text-gray-600'>Lorem Ipsum is simply dummy text of the<br/> printing and typesetting industry. Lorem Ipsum<br/> has been the industry's.</p>
                    </div>
                    </div>
                </div>
                </div>
        </div>
    </div>
  )
}

export default page