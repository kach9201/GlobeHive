
import express from 'express';
const router = express.Router();

// Import the authController
const { register, login } = require('../controllers/authController');

// Define the routes
router.post('/register', register);
router.post('/login', login);

export default router;

