const Review = require('../models/review');
const LearnerReview = require('../models/learnerReview');
const FundingReview = require('../models/fundingReview');
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
    const review = createInstance(req.body);
    const error = review.validateSync();

    if (!error) {
        res.status(200).send(review);
    }
    else {
        res.status(400).json(error);
    }
}

const create = async (req, res, next) => {
    if(!security.checkPassword(req.body.type, req.body.password)) {
        res.status(401).send("Mot de passe erroné !");
        return;
    }

    const review = createInstance(req.body);

    try {
        const saveReview = await review.save();
        res.status(201).send(saveReview);
    } catch (err) {
        res.status(400).send(err);
    }
    //next();
}

// Creates instance of the right review type
function createInstance(body) {
    switch (body.type) {
        case "learner": return new LearnerReview({...body.review});
        case "funding": return new FundingReview({...body.review});
        default: break;
    }
}

module.exports = {
    getAll, create, checkIfValid,
};