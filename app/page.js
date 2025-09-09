import Image from "next/image";
import Hero from "./hero/Hero";
import Hero2 from "./hero/Hero2";
import Services from "./hero/Services";
import Explore from "./hero/Explore";
import Testimonials from "./hero/Testimonials";
import Staffs from "./hero/Staffs";
import Preview from "./hero/Preview";
import Footer from "./components/Footer";

export const metadata = {
  title: "GOES LTD – Reliable Construction, Renovation & Design in Nigeria",
  description:
    "We provide reliable construction services including building, renovation, and structural design throughout Nigeria!",
  alternates: {
    canonical: "https://goesltd.com/",
  },
  openGraph: {
    title: "Trusted Construction Company in Nigeria | GOES LTD",
    description:
      "Expert building, remodeling, and structural design services. Let's bring your vision to life.",
    type: "website",
    url: "https://goesltd.com/",
    images: [
      {
        url: "https://goesltd.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "GOES LTD Construction Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trusted Construction Company in Nigeria | GOES LTD",
    description:
      "Expert building, remodeling, and structural design services. Let's bring your vision to life.",
    images: ["https://goesltd.com/og-image.jpg"],
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Hero2 />
      <Services />
      {/* <Explore /> */}
      {/*<Staffs />*/}
      <Preview />
      {/* <Testimonials /> */}
      <Footer />
    </>
  );
}
