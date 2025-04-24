"use client";
import { Activity, Brain, CalendarCheck, HeartHandshake } from "lucide-react";

import { motion } from "framer-motion";

const benefits = [
  {
    icon: <Activity className="w-8 h-8 text-pink-600" />,
    title: "Healthier Lifestyle",
    description:
      "Daily walks and active playtime naturally boost our physical activity and promote a balanced routine.",
  },
  {
    icon: <Brain className="w-8 h-8 text-pink-600" />,
    title: "Mental Wellness",
    description:
      "tudies show that dogs help reduce stress and anxiety, offering emotional support and comfort.",
  },
  {
    icon: <HeartHandshake className="w-8 h-8 text-pink-600" />,
    title: "Empathy & Bonding",
    description:
      "Caring for a dog strengthens our bond and builds empathy as we nurture something together.",
  },
  {
    icon: <CalendarCheck className="w-8 h-8 text-pink-600" />,
    title: "Better Routine",
    description:
      "Dogs thrive on structure, which helps us stay consistent and more organized in our daily lives.",
  },
];

export default function Benefits() {
  return (
    <section
      id="benefits"
      className="bg-gray-50 py-20 px-6 max-w-6xl mx-auto text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl font-bold text-gray-800 mb-12"
      >
        Real Benefits of Having a Dog
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition"
          >
            <div className="mb-4">{benefit.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800">
              {benefit.title}
            </h3>
            <p className="text-gray-600 mt-2">{benefit.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
