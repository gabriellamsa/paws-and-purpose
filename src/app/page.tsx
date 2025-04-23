import Benefits from "@/components/benefits/Benefits";
import DogCarousel from "@/components/gallery/DogCarousel";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import Reasons from "@/components/reasons/Reasons";
import Testimonials from "@/components/testimonials/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Reasons />
        <Benefits />
        <DogCarousel />
        <Testimonials />
      </main>
    </>
  );
}
