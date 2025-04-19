"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#reasons", label: "Motivos" },
  { href: "#benefits", label: "Benefícios" },
  { href: "#gallery", label: "Fofuras" },
  { href: "#cta", label: "Decisão Final" },
];

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-700 focus:outline-none"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>
      {isOpen && (
        <ul className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg p-4 space-y-3 z-50">
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
        </ul>
      )}
    </div>
  );
}
