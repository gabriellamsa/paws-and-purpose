import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import Reasons from "@/components/reasons/Reasons";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Reasons />
      </main>
    </>
  );
}
