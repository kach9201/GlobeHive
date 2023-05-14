
const express = require('express');
const { createUser, deleteUser, getAllUser, getSingleUser, updateUser } = require('../controllers/userController.js');
const router = express.Router();
const verifyToken = require('../utils/verifyToken.js');
const verifyAdmin = require('../utils/verifyToken.js');
const verifyUser = require('../utils/verifyToken.js');

router.post('/', createUser);
router.put('/:id', verifyUser, updateUser);
router.delete('/:id', verifyUser, deleteUser);
router.get('/:id', verifyUser, getSingleUser);
router.get('/:id', verifyAdmin, getAllUser);


module.exports = router;
