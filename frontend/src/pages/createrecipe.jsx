import React from "react";
import { useState } from "react";
import Header from "../components/header";

export default function Createrecipe() {
    const [recipe, setRecipe] = useState({
      name: "",
      ingredients: "",
      description: "",
      image: null,
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setRecipe({ ...recipe, [name]: value });
    };
  
    const handleImageChange = (e) => {
      setRecipe({ ...recipe, image: e.target.files[0] });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Submitted Recipe:", recipe);
      // Add API call or state management logic here
    };
  
    return (
        <>
        <Header/>
        <div className="max-w-200 max-h-400 mx-auto p-5 mt-50 shadow-lg rounded-2xl">
          <div>
            <h2 className="text-xl font-bold mb-4">Submit Your Epic Food Fail</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <label htmlFor="name" className="block font-medium">Recipe Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Recipe Name"
                value={recipe.name}
                onChange={handleChange}
                required
                className="block w-full p-2 border rounded"
              />
              
              <label htmlFor="ingredients" className="block font-medium">Ingredients</label>
              <textarea
                id="ingredients"
                name="ingredients"
                placeholder="Ingredients (comma-separated)"
                value={recipe.ingredients}
                onChange={handleChange}
                required
                className="block w-full p-2 border rounded"
              />
              
              <label htmlFor="description" className="block font-medium">Description</label>
              <textarea
                id="description"
                name="description"
                placeholder="Describe your bizarre creation"
                value={recipe.description}
                onChange={handleChange}
                required
                className="block w-full p-2 border rounded"
              />
              
              <label htmlFor="image" className="block font-medium">Upload Image</label>
              <input 
                type="file" 
                id="image" 
                accept="image/*" 
                onChange={handleImageChange} 
                className="block w-full p-2 border rounded"
              />

              
              
              <button type="submit" className="w-full bg-green-500 text-white p-2 mt-4 rounded">
                Submit Recipe
              </button>
            </form>
          </div>
        </div>
        </>
    );
}
