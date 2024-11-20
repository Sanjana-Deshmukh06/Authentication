const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Register user
router.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    let user = new User({ name, email, password });
    await user.save();
    res.status(201).send('User registered');
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Login user
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (!user || user.password !== password) {
      return res.status(400).send('Invalid credentials');
    }

    res.status(200).send('User logged in');
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
