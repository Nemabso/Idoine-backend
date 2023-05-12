const mongoose = require("mongoose");
const validator = require("validator");
const ratedItem = require("./ratedItem");

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
    avgRate: {
        type: Number,
    },
    status: {
        type: Number,
        enum: [0, 1, 2], // 0: pending, 1: validated, 2: refused
        default: 0,
    }
});

learnerReviewSchema.set('timestamps', true);

module.exports = mongoose.model("LearnerReview", learnerReviewSchema);