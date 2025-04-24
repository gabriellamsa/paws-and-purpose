"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

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
  const pathname = usePathname();
  const router = useRouter();
  const isAdoptPage = pathname === "/adopt";

  const handleNavigation = (hash: string) => {
    setIsOpen(false);
    if (isAdoptPage) {
      router.push(`/${hash}`);

      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          const headerOffset = 80; 
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 100);
    }
  };

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
                {isAdoptPage ? (
                  <button
                    onClick={() => handleNavigation(link.href)}
                    className="block w-full text-left text-gray-700 hover:text-pink-600 transition"
                  >
                    {link.label}
                  </button>
                ) : (
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-gray-700 hover:text-pink-600 transition"
                  >
                    {link.label}
                  </a>
                )}
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
