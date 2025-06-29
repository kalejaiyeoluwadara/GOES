    import Image from "next/image";
import Hero from "./hero/Hero";
import Hero2 from "./hero/Hero2";
import Services from "./hero/Services";
import Explore from "./hero/Explore";
import Testimonials from "./hero/Testimonials";
import Staffs from "./hero/Staffs";
import Preview from "./hero/Preview";
import Footer from "./components/Footer";
import Head from "next/head";
export default function Home() {
  return (
    <>
<Head>
  <title>GOES LTD – Reliable Construction, Renovation & Design in Nigeria</title>

  <meta name="description" content="We provide reliable construction services including building, renovation, and structural design throughout Nigeria!" />

  <link rel="canonical" href="https://goesltd.com/" />

  <meta property="og:title" content="Trusted Construction Company in Nigeria | GOES LTD" />
  <meta property="og:description" content="Expert building, remodeling, and structural design services. Let's bring your vision to life." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://goesltd.com/" />
  <meta property="og:image" content="https://goesltd.com/og-image.jpg" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Trusted Construction Company in Nigeria | GOES LTD" />
  <meta name="twitter:description" content="Expert building, remodeling, and structural design services. Let's bring your vision to life." />
  <meta name="twitter:image" content="https://goesltd.com/og-image.jpg" />
</Head>

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
