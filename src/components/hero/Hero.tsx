"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative w-full min-h-screen flex items-center bg-gradient-to-br from-pink-50 to-pink-100 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Why do we deserve to have a dog?
          </h1>
          
          <p className="text-lg text-gray-600 max-w-xl">
            A four-legged companion to fill our days with love, adventures, and
            endless cuddles. And guess what? I'm going to show you exactly why
            this makes all the sense in the world.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              href="#benefits"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-pink-600 hover:bg-pink-700 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
            >
              Discover Benefits
            </Link>

            <Link
              href="#gallery"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-pink-600 bg-white hover:bg-gray-50 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 border border-pink-200"
            >
              View Gallery
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="mx-auto hidden lg:block pl-10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        >
          <Image
            src="/c/hero.png"
            alt="Happy dog"
            width={780}
            height={780}
            className="rounded-2xl"
            priority
          />
        </motion.div>
      </div>
    </div>
  );
}
