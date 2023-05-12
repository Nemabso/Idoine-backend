const mongoose = require("mongoose");

const reviewTypeSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,

    type: {
        type: String,
        trim: true,
        required: true,
        enum: ["learner", "employer", "funding"],
        unique: true,
    },

    password: {
        type: String,
        required: true,
    }
});

reviewTypeSchema.set('timestamps', true);

const ReviewType = mongoose.model('ReviewType', reviewTypeSchema);

module.exports = ReviewType;