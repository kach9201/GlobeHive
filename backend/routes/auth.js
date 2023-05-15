
import express from 'express';
const router = express.Router();

// Import the authController
import { register, login } from '../controllers/authController.js';

// Define the routes
router.post('/register', register);
router.post('/login', login);

export default router;

