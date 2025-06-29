import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import Destination from "@/components/Destination";
import AboutUs from "@/components/AboutUs";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <section className="section">
        <HeroSection />
      </section>
      <section className="section">
        <Destination />
      </section>
      <section className="section">
        <AboutUs />
      </section>
      <section className="section">
        <WhyChooseUs />
      </section>
      <section className="section">
        <Services />
      </section>
      <section className="section">
        <Testimonials />
      </section>
    </>
  );
}
