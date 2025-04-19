"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-pink-100 via-pink-200 to-pink-300 px-4">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl font-bold text-gray-800"
      >
        Why do we deserve to have a dog?
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="mt-4 text-lg sm:text-xl text-gray-700 max-w-xl"
      >
        A four-legged companion to fill our days with love, adventures, and
        endless cuddles. And guess what? I'm going to show you exactly why this
        makes all the sense in the world.
      </motion.p>
    </section>
  );
}
