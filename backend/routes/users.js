
import express from 'express';
import { createUser, deleteUser, getAllUser, getSingleUser, updateUser } from '../controllers/userController.js';
const router = express.Router();

router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
router.get('/:id', getSingleUser);
router.get('/:id', getAllUser);


export default router;
