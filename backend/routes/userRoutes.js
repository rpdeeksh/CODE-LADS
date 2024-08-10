const express = require('express');
const { registerUser, authUser } = require('../controllers/userController');

const router = express.Router();

// User registration route
router.post('/signup', registerUser);

// User login route
router.post('/signin', authUser);

module.exports = router;
