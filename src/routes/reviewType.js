const express = require("express");
const router = express.Router();
const reviewTypeController = require('../controllers/reviewType');

router.get('/', reviewTypeController.getAll);
router.get('/:id', reviewTypeController.getOne);
// router.post('/create', reviewTypeController.create); // no need to create more types
router.put('/:id', reviewTypeController.update);

module.exports = router;