
import express from 'express';
import { createUser, deleteUser, getAllUser, getSingleUser, updateUser } from '../controllers/userController.js';
const router = express.Router();
import { verifyToken } from '../utils/verifyToken.js';
import { verifyAdmin } from '../utils/verifyToken.js';
import { verifyUser } from '../utils/verifyToken.js';

router.post('/', createUser);
router.put('/:id', verifyUser, updateUser);
router.delete('/:id', verifyUser, deleteUser);
router.get('/:id', verifyUser, getSingleUser);
router.get('/:id', verifyAdmin, getAllUser);
router.get('/:id', verifyToken, getAllUser);

export default router;
