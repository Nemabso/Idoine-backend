const express = require("express");
const router = express.Router();
const reviewController = require('../controllers/review');

router.get('/', reviewController.getAll);
router.post('/create', reviewController.create);
router.post('/submit', reviewController.checkIfValid);

module.exports = router;