import Benefits from "@/components/home/Benefits";
import DogCarousel from "@/components/gallery/DogCarousel";
import Hero from "@/components/home/Hero";
import Navbar from "@/components/navbar/Navbar";
import Reasons from "@/components/home/Reasons";
import Testimonials from "@/components/home/Testimonials";
import AdoptPage from "@/components/adopt/AdoptPage";

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

export function Adopt() {
  return <AdoptPage />;
}
