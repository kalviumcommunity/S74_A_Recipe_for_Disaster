import { useState } from "react";
import { FaShareAlt } from "react-icons/fa";
import React from "react";
import Home from "./pages/home";

export default function App() {
  const foodFails = [
    "Ice Cream & Hot Sauce",
    "Peanut Butter & Pickles",
    "Chocolate & Mustard",
    "Pizza with Pineapple & Anchovies",
    "Cereal with Orange Juice",
  ];

  const [randomFail, setRandomFail] = useState("");

  const getRandomFail = () => {
    const fail = foodFails[Math.floor(Math.random() * foodFails.length)];
    setRandomFail(fail);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-red-100 p-6 text-center">
      <h1 className="text-5xl font-bold text-red-600 mb-4">Epic Food Fails</h1>
      <p className="text-lg text-gray-700 max-w-xl mb-6">
        Discover the worst food combos ever! Laugh, cringe, and vote on disasters.
      </p>

      <button
        onClick={getRandomFail}

        className="bg-red-500 hover:bg-red-700 text-white px-6 py-3 rounded-lg shadow-md"
      >
        Surprise Me!
      </button>


      {randomFail && (
        <div className="mt-6 p-4 bg-white shadow-lg rounded-lg w-80 text-xl font-semibold text-red-600">
          {randomFail}
        </div>
      )}
      <br></br>

      
      <Home></Home>
    </div>
  );
}
