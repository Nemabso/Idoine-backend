const Review = require('../models/review');
const security = require('../utils/security');

const getAll = async (req, res, next) => {
    try {
        const reviews = await Review.find({});
        res.send(reviews);
    } catch (err) {
        console.log("Erreur dans la route getAll (reviews)")
        res.status(500).send(err);
    }
    //next();
}

const checkIfValid = (req, res, next) => {
    const review = new Review({...req.body.review, type: "validate"});
    const error = review.validateSync();

    if (!error) {
        res.status(202).send(review);
    }
    else {
        res.status(400).json(error);
    }
}

const create = async (req, res, next) => {
    const review = new Review({...req.body.review, type: security.matchReviewType(req.body.password)});
    // TODO : handling a password which determinates Review type
    console.log(review);

    try {
        const saveReview = await review.save();
        res.status(201).send(saveReview);
    } catch (err) {
        res.status(400).send(err);
    }
    //next();
}

module.exports = {
    getAll, create, checkIfValid,
};