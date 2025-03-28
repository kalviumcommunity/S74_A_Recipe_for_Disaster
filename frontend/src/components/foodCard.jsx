import React from "react";

export default function FoodCard({ image, name, rating }) {
  // Ensure the correct image URL is used
  const imageUrl = image.startsWith("http") ? image : `http://localhost:3000${image}`;

  return (
    <div className="bg-white text-black p-4 rounded-lg shadow-lg">
      <img src={imageUrl} alt={name} className="w-full h-40 object-cover rounded-md" />
      <h3 className="text-xl font-bold mt-2">{name}</h3>
      <p>Rating: {rating || "No rating yet"} ⭐</p>
    </div>
  );
}
