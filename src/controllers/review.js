const Review = require('../models/review');

const getAll = async (req, res, next) => {
    try {
        const reviews = await Review.find({});
        res.send(reviews);
    } catch (err) {
        res.status(500).send(e);
    }
    next();
}

const create = async (req, res, next) => {
    const review = new Review(req.body);
    console.log(req.body)
    try {
        const saveReview = await review.save();
        res.status(201).send(saveReview);
    } catch (err) {
        res.status(400).send(err);
    }
    next();
}

module.exports = {
    getAll, create,
};