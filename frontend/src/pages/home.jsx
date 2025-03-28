import { useState } from "react";
import { motion } from "framer-motion";
import { FaMagic, FaUtensils, FaFireAlt } from "react-icons/fa";
import React from "react";
import FoodCard from "../components/foodCard"; // Import the FoodCard component
import Header from "../components/header";
import { Link } from "react-router-dom";

// Dummy food data (replace with real data from API)
const foodItems = [
  {
    id: 1,
    name: "Spaghetti with Peanut Butter",
    image: "https://thecookingfoodie.com/wp-content/uploads/2024/08/240559-jpg.jpg",
    rating: 2.5,
  },
  {
    id: 2,
    name: "Pizza with Pineapple & Mayo",
    image: "https://static01.nyt.com/images/2023/03/29/multimedia/23HAMREX2-pineapple-ham-pizza-qwct/HAMREX2-pineapple-ham-pizza-qwct-superJumbo.jpg",
    rating: 1.8,
  },
  {
    id: 3,
    name: "Chocolate Fried Chicken",
    image: "https://chicken.ab.ca/wp-content/uploads/2018/12/29-Chocolate-Fried-Chicken.jpg",
    rating: 3.2,
  },
];

function Home() {
  const [hovered, setHovered] = useState(false);

  return (
    <>
    <Header/> 
    <div className="min-h-screen bg-gradient-to-r from-purple-700 via-pink-500 to-orange-400 flex flex-col items-center text-white p-10 relative overflow-hidden">
      
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

      {/* Food Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {foodItems.map((food) => (
          <FoodCard key={food.id} name={food.name} image={food.image} rating={food.rating} />
        ))}
      </div>

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
             <Link to="/explore" className="flex items-center space-x-2">
            
          <FaUtensils />
          <span>Explore Recipes</span>
            </Link>
        </button>
        <button className="px-6 py-3 bg-red-600 text-xl font-bold rounded-xl shadow-lg hover:bg-red-700 transition-transform transform hover:scale-110 flex items-center space-x-2">
          <Link to="/createrecipe">
          <FaFireAlt className="inline-block align-middle" />
          <span className="inline-block align-middle">Submit Yours</span>
          </Link>
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
      </>
  );
}

export default  Home