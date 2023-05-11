const express = require("express");
const router = express.Router();
const reviewController = require('../controllers/review');
const authenticateToken = require("../middlewares/authentication");

router.get('/', authenticateToken, reviewController.getAll);
router.get('/getStats', reviewController.getStats);
router.post('/create', reviewController.create);
router.post('/submit', reviewController.checkIfValid);

module.exports = router;