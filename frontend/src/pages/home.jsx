import { useState } from "react";
import { motion } from "framer-motion";
import { FaMagic, FaUtensils, FaFireAlt } from "react-icons/fa";
import React from "react";
export default function Home() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-700 via-pink-500 to-orange-400 flex flex-col items-center justify-center text-white p-10 relative overflow-hidden">
      {/* Background Animation */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        style={{ backgroundImage: `url('/fantasy-bg.png')`, backgroundSize: "cover", backgroundPosition: "center" }}
      />
      
      {/* Main Content */}
      <motion.h1
        className="text-6xl font-extrabold tracking-widest text-center drop-shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        Epic Food Fails
      </motion.h1>
      <p className="text-xl text-center max-w-xl mt-4 drop-shadow-md">
        Unleash your culinary creativity and discover the most bizarre, unexpected, and hilarious food disasters ever concocted!
      </p>

      {/* Call to Action */}
      <motion.div
        className="mt-6 flex space-x-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <button 
          className="px-6 py-3 bg-yellow-500 text-xl font-bold rounded-xl shadow-lg hover:bg-yellow-600 transition-transform transform hover:scale-110 flex items-center space-x-2"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <FaUtensils />
          <span>Explore Recipes</span>
        </button>
        <button className="px-6 py-3 bg-red-600 text-xl font-bold rounded-xl shadow-lg hover:bg-red-700 transition-transform transform hover:scale-110 flex items-center space-x-2">
          <FaFireAlt />
          <span>Submit Yours</span>
        </button>
      </motion.div>

      {/* Magic Floating Icon */}
      {hovered && (
        <motion.div
          className="absolute bottom-10 right-10 text-yellow-300 text-5xl drop-shadow-lg"
          animate={{ rotate: [0, 20, -20, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <FaMagic />
        </motion.div>
      )}
    </div>
  );
}
