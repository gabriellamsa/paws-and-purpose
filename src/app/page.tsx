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
      <main className="flex-1">
        <Hero />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">
          <Reasons />
          <Benefits />
          <DogCarousel />
          <Testimonials />
        </div>
      </main>
    </>
  );
}
