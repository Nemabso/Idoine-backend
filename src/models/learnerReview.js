const mongoose = require("mongoose");
const validator = require("validator");
const ratedItem = require("./ratedItem")

const learnerReviewSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,

    learnerName: {
        type: String,
        required: true,
        trim: true
    },
    companyName: {
        type: String,
        required: true,
        trim: true
    },
    teacher: {
        type: String,
        required: true,
        trim: true
    },
    comment: {
        type: String,
        trim: true,
    },
    rates: [ratedItem],
})

module.exports = mongoose.model("learnerReview", learnerReviewSchema);