const express = require("express");
const router = express.Router();
const userController = require('../controllers/user');
const authenticateToken = require("../middlewares/authentication");

router.get('/', authenticateToken, userController.getAll);
router.get('/:id', authenticateToken, userController.getOne);
// router.post('/create', userController.create); // no need to create more users
router.put('/:id', authenticateToken, userController.update);
router.post('/login', userController.login);

module.exports = router;