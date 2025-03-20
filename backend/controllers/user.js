const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/createUser'); // Correct model reference

dotenv.config();

const router = express.Router();

router.get("/",(req,res)=>{
    res.send("hseyshsdhsjg")
})
// ✅ Login Endpoint
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // //  Check if the user exists
        const user = await User.findOne({ email });
        
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        //  Compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        //  Generate JWT token
        const token = jwt.sign(
            { userId: user._id, email: user.email },
            process.env.JWT_SECRET, // Corrected from 'JWT_SCRETE'
            { expiresIn: '2h' }
        );

        res.status(200).json({ message: 'Login Successful',token});
    } catch (error) {
        res.status(500).json({ message: 'Internalllll server error' });
    }
});

// ✅ Signup Endpoint
router.post('/signup', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        //  Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
