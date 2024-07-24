const express = require('express');
const router = express.Router();
const User = require('../models/user'); // Ensure this is lowercase

// Register a new user
router.post('/register', async (req, res) => {
    const { name, email, age } = req.body;

    try {
        const newUser = new User({ name, email, age });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(400).json({ error: 'Error registering user', details: error.message });
    }
});

// Log in an existing user
router.post('/login', async (req, res) => {
    const { email } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json({ message: 'User logged in successfully', user });
    } catch (error) {
        res.status(400).json({ error: 'Error logging in user', details: error.message });
    }
});

module.exports = router;
