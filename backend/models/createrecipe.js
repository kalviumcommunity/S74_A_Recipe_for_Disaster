const mongoose = require("mongoose");

const createRecipeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    ingredients: { type: [String], required: true },
    description: { type: String, required: true },
    image: { type: String } 
});

const Recipe = mongoose.model("Recipe", createRecipeSchema);
module.exports = Recipe;
