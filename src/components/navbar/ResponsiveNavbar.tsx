"use client";

import SmoothScrollLink from "@/components/helper/SmoothScrollLink";
import Link from "next/link";

const links = [
  { href: "#reasons", label: "Reasons" },
  { href: "#benefits", label: "Benefits" },
  { href: "#gallery", label: "Gallery" },
  { href: "#testimonials", label: "Testimonials" },
];

interface ResponsiveNavbarProps {
  showAdoptButton: boolean;
}

export default function ResponsiveNavbar({ showAdoptButton }: ResponsiveNavbarProps) {
  return (
    <div className="flex items-center space-x-6">
      <ul className="flex space-x-6 text-gray-700 font-medium">
        {links.map((link) => (
          <li key={link.href}>
            <SmoothScrollLink
              to={link.href}
              className="hover:text-pink-600 transition-colors duration-200"
            >
              {link.label}
            </SmoothScrollLink>
          </li>
        ))}
      </ul>
      {showAdoptButton && (
        <Link
          href="/adopt"
          className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
        >
          Adopt Me
        </Link>
      )}
    </div>
  );
}
