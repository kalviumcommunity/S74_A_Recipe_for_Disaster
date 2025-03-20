const express = require("express");
const multer = require("multer");
const path = require("path");
const Recipe = require("../models/createrecipe");

const router = express.Router();

// Configure Multer for image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

router.post("/create-recipe", upload.single("image"), async (req, res) => {
  try {
    console.log("Request body:", req.body);
    console.log("Uploaded file:", req.file);

    const { name, ingredients, description } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : null;

    if (!name || !ingredients || !description) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newRecipe = new Recipe({
      name,
      ingredients: ingredients.split(","), // Convert to array
      description,
      image,
    });

    await newRecipe.save();

    res.status(201).json({ message: "Recipe created successfully", recipe: newRecipe });
  } catch (err) {
    console.error("Server error:", err);
    res.status(500).json({ error: err.message });
  }
});

router.get("/recipes", async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch recipes", details: error.message });
  }
});

module.exports = router;
