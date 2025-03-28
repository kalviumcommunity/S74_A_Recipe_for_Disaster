/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import FoodCard from "../components/foodCard"; // ✅ Fixed import
import Header from "../components/header";

export default function Explore() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/explore/") // Adjust API URL as needed
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setRecipes(data.recipe || []); // Ensure it's an array
        setLoading(false);
      })
      .catch((err) => {
        console.error("❌ Error fetching recipes:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center text-white mt-10">Loading recipes...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 mt-10">Error: {error}</div>;
  }

  return (
    <>
      <Header />
      <div className="w-full min-h-screen bg-neutral-800">
        <h1 className="text-3xl text-center text-white py-6">Recipe Gallery</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
          {recipes.map((recipe) => (
            <FoodCard key={recipe._id} {...recipe} />
          ))}
        </div>
      </div>
    </>
  );
}
