const express = require('express');
const router = express.Router();

// 🔽 Update the import to include logout
const { register, login, logout } = require('../controllers/authController');

// 🔄 Existing routes
router.post('/register', register);
router.post('/login', login);

// ✅ Add this logout route
router.post('/logout', logout);

module.exports = router;
