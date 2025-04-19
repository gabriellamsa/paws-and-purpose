"use client";

import MobileNav from "./MobileNav";
import ResponsiveNavbar from "./ResponsiveNavbar";

export default function Navbar() {
  return (
    <header className="w-full fixed top-0 left-0 z-20 bg-white/80 backdrop-blur-md shadow-sm">
      <nav className="max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="text-xl font-bold text-pink-600">Our Dog 🐶</div>
        <div className="hidden md:flex">
          <ResponsiveNavbar />
        </div>
        <div className="md:hidden">
          <MobileNav />
        </div>
      </nav>
    </header>
  );
}
