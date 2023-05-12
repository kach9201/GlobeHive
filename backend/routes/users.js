
const express = require('express');
const { createUser, deleteUser, getAllUser, getSingleUser, updateUser } = require('../controllers/userController.js');
const router = express.Router();

router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
router.get('/:id', getSingleUser);
router.get('/:id', getAllUser);


module.exports = router;
