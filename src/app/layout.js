import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: {
    default: "Triton Diesel | Premium Fuel Trading Company",
    template: "%s | Triton Diesel",
  },
  description:
    "Triton Diesel Fuel Trading FZ-LLC provides high-quality Diesel Gas Oil 10 PPM and fuel solutions worldwide.",
  keywords: [
    "Diesel trading",
    "Diesel Gas Oil 10 PPM",
    "Fuel supplier UAE",
    "Triton Diesel",
    "Fuel trading company",
  ],
  authors: [{ name: "Triton Diesel" }],
  creator: "Triton Diesel",
  metadataBase: new URL("https://triton-diesel.vercel.app/"),

  openGraph: {
    title: "Triton Diesel | Fuel Trading Company",
    description: "Premium diesel fuel supply solutions worldwide.",
    url: "https://triton-diesel.vercel.app/",
    siteName: "Triton Diesel",
    images: [
      {
        url: "/logo.svg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Triton Diesel",
    description: "Premium fuel trading solutions.",
    images: ["/logo.svg"],
  },

  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <Navbar />
        {children}
       <Footer/>
      </body>
    </html>
  );
}
