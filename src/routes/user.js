const express = require("express");
const router = express.Router();
const userController = require('../controllers/user');

router.get('/:id', userController.getOne);
// router.post('/create', userController.create); // no need to create more users
router.put('/:id', userController.update);
router.post('/login', userController.login);

module.exports = router;