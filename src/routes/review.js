const express = require("express");
const router = express.Router();
const reviewController = require('../controllers/review');

router.get('/', reviewController.getAll);
router.post('/create', reviewController.create);

module.exports = router;