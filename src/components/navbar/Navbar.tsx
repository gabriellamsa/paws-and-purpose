"use client";

import { useState, useEffect } from "react";
import MobileNav from "./MobileNav";
import ResponsiveNavbar from "./ResponsiveNavbar";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg"
          : "bg-white/80 backdrop-blur-md"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-pink-400 bg-clip-text text-transparent">
                Paws & Purpose
              </span>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <ResponsiveNavbar />
            <Link
              href="/adopt"
              className="ml-4 inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-pink-600 hover:bg-pink-700 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 shadow"
            >
              Adopt Me
            </Link>
          </div>

          <div className="md:hidden">
            <MobileNav />
          </div>
        </div>
      </nav>
    </header>
  );
}
