"use client";

import { Dog } from "./data/dogData";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface QuickViewProps {
  dog: Dog | null;
  onClose: () => void;
}

export default function QuickView({ dog, onClose }: QuickViewProps) {
  return (
    <AnimatePresence>
      {dog && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-white rounded-xl max-w-2xl w-full p-6 relative"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-pink-600 transition"
            >
              ✕
            </button>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="relative w-full md:w-1/2 h-64">
                <Image
                  src={dog.image}
                  alt={dog.name}
                  fill
                  className="rounded-xl object-cover"
                  sizes="100%"
                />
              </div>
              <div className="md:w-1/2 space-y-4">
                <h2 className="text-2xl font-bold text-gray-800">{dog.name}</h2>
                <p className="text-pink-600 font-semibold">{dog.breed}</p>
                <p className="text-gray-600">{dog.description}</p>
                <div>
                  <p className="font-medium text-gray-700">Personality:</p>
                  <ul className="list-disc list-inside text-gray-600">
                    {dog.personality.map((trait, index) => (
                      <li key={index}>{trait}</li>
                    ))}
                  </ul>
                </div>
                <p className="text-gray-700">
                  <span className="font-medium">Ideal For:</span> {dog.idealFor}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
