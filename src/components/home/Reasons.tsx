"use client";

import { PawPrint, Heart, Smile, Home } from "lucide-react";
import { motion } from "framer-motion";

const reasons = [
  {
    icon: <Heart className="w-8 h-8 text-pink-600" />,
    title: "Companionship",
    description:
      "A dog will always be there for us, through good and bad times.",
  },
  {
    icon: <Smile className="w-8 h-8 text-pink-600" />,
    title: "Daily Joy",
    description: "They bring lightness and happiness to our everyday life.",
  },
  {
    icon: <Home className="w-8 h-8 text-pink-600" />,
    title: "A Cozier Home",
    description: "The house feels warmer and more alive with a furry friend.",
  },
  {
    icon: <PawPrint className="w-8 h-8 text-pink-600" />,
    title: "Shared Responsibility",
    description:
      "We'll grow together by taking care of someone who loves us unconditionally.",
  },
];

export default function Reasons() {
  return (
    <section
      id="reasons"
      className="bg-white py-20 px-6 text-center max-w-6xl mx-auto"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl font-bold text-gray-800 mb-12"
      >
        Why a Dog is the Right Choice for Us
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {reasons.map((reason, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-pink-50 rounded-2xl p-6 shadow hover:shadow-md transition"
          >
            <div className="mb-4 flex justify-center">{reason.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800">
              {reason.title}
            </h3>
            <p className="text-gray-600 mt-2">{reason.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
