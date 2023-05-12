const express = require("express");
const router = express.Router();
const reviewTypeController = require('../controllers/reviewType');
const authenticateToken = require("../middlewares/authentication");

router.get('/', authenticateToken, reviewTypeController.getAll);
router.get('/:id', authenticateToken, reviewTypeController.getOne);
// router.post('/create', reviewTypeController.create); // no need to create more types
router.put('/:id', authenticateToken, reviewTypeController.update);

module.exports = router;