const LearnerReview = require('../models/learnerReview');
const FundingReview = require('../models/fundingReview');
const EmployerReview = require('../models/employerReview');
const security = require('../utils/security');

const getAll = async (req, res, next) => {
    try {
        // const reviews = await Review.find({});
        // res.send(reviews);
    } catch (err) {
        res.status(500).send(err);
    }
    //next();
}

const getStats = async(req, res, next) => {
    const avg = (array) => array.reduce((sum, item) => sum + item.avgRate, 0)/array.length;
    try {
        const learnerRates = await LearnerReview.find({status: 0}).select('avgRate -_id');
        const employerRates = await EmployerReview.find({status: 0}).select('avgRate -_id');
        const fundingRates = await FundingReview.find({status: 0}).select('avgRate -_id');
        res.send({learnerStats: avg(learnerRates), employerStats: avg(employerRates), fundingStats: avg(fundingRates)});
    } catch (err) {
        res.status(500).send(err);
    }
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
    // calculating avgRate as an average percentage, rounded down.
    review.avgRate = Math.floor(review.rates.reduce((sum, ratedItem) => sum + ratedItem.rate, 0)/review.rates.length*20);

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
        case "employer": return new EmployerReview({...body.review});
        default: break;
    }
}

module.exports = {
    getAll, getStats, create, checkIfValid,
};