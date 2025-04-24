"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-gray-600">
              &copy; {new Date().getFullYear()} Paws & Purpose. All rights
              reserved.
            </p>
          </div>

          <div className="flex space-x-6">
            <Link
              href="#reasons"
              className="text-gray-600 hover:text-pink-600 transition-colors duration-200"
            >
              Reasons
            </Link>
            <Link
              href="#benefits"
              className="text-gray-600 hover:text-pink-600 transition-colors duration-200"
            >
              Benefits
            </Link>
            <Link
              href="#gallery"
              className="text-gray-600 hover:text-pink-600 transition-colors duration-200"
            >
              Gallery
            </Link>
            <Link
              href="#testimonials"
              className="text-gray-600 hover:text-pink-600 transition-colors duration-200"
            >
              Testimonials
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
