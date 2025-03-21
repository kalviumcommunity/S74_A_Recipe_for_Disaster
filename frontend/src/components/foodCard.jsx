import React from "react";
export default function FoodCard({ image, name, rating }) {
  return (
    <div className="bg-white text-black p-4 rounded-lg shadow-lg">
      <img src={image} alt={name} className="w-full h-40 object-cover rounded-md" />
      <h3 className="text-xl font-bold mt-2">{name}</h3>
      <p>Rating: {rating} ⭐</p>
    </div>
  );
}s