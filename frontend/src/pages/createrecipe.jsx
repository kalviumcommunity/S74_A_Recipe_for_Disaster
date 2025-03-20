import axios from "axios";
import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";

const CreateRecipe = () => {
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("ingredients", ingredients);
    formData.append("description", description);
    formData.append("image", image);

    try {
      const response = await axios.post(
        "http://localhost:3000/api/recipe/create-recipe",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      console.log("Response:", response.data);
      alert("Recipe Created Successfully!");
      navigate("/");
    } catch (err) {
      console.error("Error:", err.response ? err.response.data : err.message);
      alert("Unable to create recipe");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md mx-auto p-6 bg-white text-black rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Submit Recipe</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Recipe Name"
            className="w-full p-2 border mb-4 rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <textarea
            placeholder="Ingredients (comma-separated)"
            className="w-full p-2 border mb-4 rounded"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            required
          />
          <textarea
            placeholder="Describe your recipe"
            className="w-full p-2 border mb-4 rounded"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <input
            type="file"
            accept="image/*"
            className="w-full p-2 border mb-4 rounded"
            onChange={(e) => setImage(e.target.files[0])}
            required
          />
          <button className="w-full bg-green-600 text-white p-2 rounded-md">
            Submit Recipe
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateRecipe;
