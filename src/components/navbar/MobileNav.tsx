"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const links = [
  { href: "#reasons", label: "Reasons" },
  { href: "#benefits", label: "Benefits" },
  { href: "#gallery", label: "Gallery" },
  { href: "#testimonials", label: "Testimonials" },
];

interface MobileNavProps {
  showAdoptButton: boolean;
}

export default function MobileNav({ showAdoptButton }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-700 focus:outline-none"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-52 bg-white rounded-xl shadow-lg p-4 space-y-3">
          <ul className="space-y-2">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-700 hover:text-pink-600 transition"
                >
                  {link.label}
                </a>
              </li>
            ))}
            {showAdoptButton && (
              <li>
                <Link
                  href="/adopt"
                  onClick={() => setIsOpen(false)}
                  className="block text-white text-center bg-pink-600 hover:bg-pink-700 px-4 py-2 rounded-lg transition"
                >
                  Adopt Me
                </Link>
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
