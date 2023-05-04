const ReviewType = require('../models/reviewType');
const bcrypt = require("bcryptjs");

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
    // TODO add jwt authentication at this stage

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    try {
        const updatedReviewType = await ReviewType.findOneAndUpdate({type: req.body.type}, {password: hashedPassword});
        res.status(200).send(updatedReviewType);
    } catch (err) {
        res.status(400).send(err);
    }
};

module.exports = {
    create, update,
};