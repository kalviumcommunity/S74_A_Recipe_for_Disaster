const express = require("express");
const router = express.Router();
const Recipe = require("../models/createrecipe"); // ✅ Fixed model import

router.get("/", async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.status(200).json({ recipe: recipes });
    console.log(recipes)
  } catch (err) {
    console.error("Error fetching recipes:", err);
    res.status(500).json({ error: "Failed to fetch recipes", details: err.message });
  }
});

module.exports = router;
