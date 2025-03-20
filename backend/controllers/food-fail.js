const express = require('express');
const router = express.Router();
const FoodFail = require('../models/Schema');

// ✅ GET all food fails
router.get('/food-fails', (req, res) => {
    FoodFail.find()
        .then(fails => res.json(fails))
        .catch(error => res.status(500).json({ message: error.message }));
});

// ✅ GET a specific food fail by ID
router.get('/food-fails/:id', (req, res) => {
    FoodFail.findById(req.params.id)
        .then(fail => fail ? res.json(fail) : res.status(404).json({ message: "Not found" }))
        .catch(error => res.status(500).json({ message: error.message }));
});

// ✅ POST (Create) a new food fail
router.post('/food-fails', (req, res) => {
    FoodFail.create(req.body)
        .then(newFail => res.status(201).json(newFail))
        .catch(error => res.status(400).json({ message: error.message }));
});

// ✅ PUT (Update) a food fail
router.put('/food-fails/:id', (req, res) => {
    FoodFail.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(updatedFail => updatedFail ? res.json(updatedFail) : res.status(404).json({ message: "Not found" }))
        .catch(error => res.status(400).json({ message: error.message }));
});

// ✅ DELETE a food fail
router.delete('/food-fails/:id', (req, res) => {
    FoodFail.findByIdAndDelete(req.params.id)
        .then(deletedFail => deletedFail ? res.json({ message: "Deleted successfully" }) : res.status(404).json({ message: "Not found" }))
        .catch(error => res.status(500).json({ message: error.message }));
});

module.exports = router;
