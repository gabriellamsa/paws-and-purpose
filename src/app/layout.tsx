import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/helper/ScrollToTop";
import Footer from "@/components/home/Footer";

const font = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Paws & Purpose | Your Life With Dogs",
  description:
    "Discover the emotional, physical, and mental benefits of having a loyal four-legged friend by your side. Transform your life with the power of canine companionship.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${font.className} antialiased bg-gray-50 text-gray-900`}
      >
        <div className="min-h-screen flex flex-col">
          {children}
          <ScrollToTop />
          <Footer />
        </div>
      </body>
    </html>
  );
}
