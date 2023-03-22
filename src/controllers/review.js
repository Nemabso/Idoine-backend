const Review = require('../models/review');

const getAll = async (req, res) => {
    try {
        const reviews = await Review.find({});
        res.send(reviews);
    } catch (err) {
        res.status(500).send(e);
    }
}

const create = async (req, res) => {
    const review = new Review(req.body);
    console.log(req.body)
    try {
        const saveReview = await review.save();
        res.status(201).send(saveReview);
    } catch (err) {
        res.status(400).send(err);
    }
}

module.exports = {
    getAll, create,
};