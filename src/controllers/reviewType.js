const ReviewType = require('../models/reviewType');
const bcrypt = require("bcryptjs");

const getAll = async (req, res, next) => {
    try {
        const reviewTypes = await ReviewType.find({}).select('type createdAt updatedAt').exec();
        const count = await ReviewType.count();
        res.send({
            list: reviewTypes,
            total: count,
        });
    } catch (err) {
        res.status(500).send(err);
    }
    //next();
}

const getOne = async (req, res, next) => {
    try {
        const reviewType = await ReviewType.findById(req.params.id).select('type updatedAt').exec();
        res.send(reviewType);
    } catch (err) {
        res.status(500).send(err);
    }
    //next();
}

const create = async (req, res, next) => {
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    
    const reviewType = new ReviewType({
        type: req.body.type,
        password: hashedPassword,
    });

    try {
        const saveReviewType = await reviewType.save();
        res.status(201).send(saveReviewType);
    } catch (err) {
        res.status(400).send(err);
    }
};

const update = async (req, res, next) => {       
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    try {
        const updatedReviewType = await ReviewType.findOneAndUpdate({_id: req.params.id}, {password: hashedPassword});
        res.status(200).send(updatedReviewType);
    } catch (err) {
        res.status(400).send(err);
    }
};

module.exports = {
    getAll, getOne, create, update,
};