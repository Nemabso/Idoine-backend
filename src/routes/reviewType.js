const express = require("express");
const router = express.Router();
const reviewTypeController = require('../controllers/reviewType');

// router.get('/', reviewTypeController.getAll);
// router.post('/create', reviewTypeController.create); // no need to create more types
router.patch('/update', reviewTypeController.update);

module.exports = router;