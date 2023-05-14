const express = require('express');
const { register } = require('../controllers/authController.js');

const { login } = require('../controllers/userController.js');

const router = express.Router();
router.post('/register', register)
router.post('/login', login)

module.exports = router;