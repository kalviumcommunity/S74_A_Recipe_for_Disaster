const express = require('express');
const router = express.Router();
const FoodFail = require('../models/Schema');

// ✅ GET all food fails
router.get('/food-fails', async (req, res) => {
    try {
        const fails = await FoodFail.find();
        res.json(fails);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// ✅ GET a specific food fail by ID
router.get('/food-fails/:id', async (req, res) => {
    try {
        const fail = await FoodFail.findById(req.params.id);
        if (!fail) return res.status(404).json({ message: "Not found" });
        res.json(fail);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// ✅ POST (Create) a new food fail
router.post('/food-fails', async (req, res) => {
    try {
        const { name, description, cringeLevel, submittedBy } = req.body;
        
        if (!name || !description || !cringeLevel) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const newFail = await FoodFail.create({ name, description, cringeLevel, submittedBy });
        res.status(201).json(newFail);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// ✅ PUT (Update) a food fail
router.put('/food-fails/:id', async (req, res) => {
    try {
        const updatedFail = await FoodFail.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedFail) return res.status(404).json({ message: "Not found" });
        res.json(updatedFail);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// ✅ DELETE a food fail
router.delete('/food-fails/:id', async (req, res) => {
    try {
        const deletedFail = await FoodFail.findByIdAndDelete(req.params.id);
        if (!deletedFail) return res.status(404).json({ message: "Not found" });
        res.json({ message: "Deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
