"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "../navbar/Navbar";
import { dogs, Dog } from "./data/dogData";
import { useState } from "react";
import QuickView from "./QuickView";

export default function AdoptPage() {
  const [selectedDog, setSelectedDog] = useState<Dog | null>(null);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center text-gray-900 mb-12"
          >
            Meet Your Future Best Friend
          </motion.h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {dogs.map((dog, index) => (
              <motion.div
                key={dog.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                onClick={() => setSelectedDog(dog)}
              >
                <div className="relative w-full h-64">
                  <Image
                    src={dog.image}
                    alt={dog.name}
                    fill
                    className="rounded-xl object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index < 3}
                  />
                </div>
                <div className="mt-6 text-center">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                    {dog.name}
                  </h2>
                  <p className="text-gray-600 mb-6">{dog.breed}</p>
                  <button className="w-full px-6 py-3 text-base font-medium text-white bg-pink-600 hover:bg-pink-700 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
                    Choose Me
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <QuickView dog={selectedDog} onClose={() => setSelectedDog(null)} />
    </>
  );
}
