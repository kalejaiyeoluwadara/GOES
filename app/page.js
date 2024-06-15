import Image from "next/image";
import Hero from "./hero/Hero";
import Hero2 from "./hero/Hero2";
import Services from "./hero/Services";
import Explore from "./hero/Explore";
import Testimonials from "./hero/Testimonials";
import Staffs from "./hero/Staffs";

export default function Home() {
  return (
    <>
      <Hero />
      <Hero2 />
      <Services />
      <Explore />
      <Staffs />
      <Testimonials />
    </>
  );
}
