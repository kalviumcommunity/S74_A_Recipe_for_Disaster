const mongoose = require('mongoose');

const foodFailSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    cringeLevel: { 
        type: String, 
        enum: ['Mildly Gross', 'Bad Idea', 'Absolute Disaster'], 
        required: true 
    },
    submittedBy: { type: String, default: 'Anonymous' },
    username: { type: String, required: true },
    password: { type: String, required: true }, // In real applications, hash the password!
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('FoodFail', foodFailSchema);
