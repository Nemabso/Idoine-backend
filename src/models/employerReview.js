const mongoose = require("mongoose");
const mcqItem = require("./mcqItem");
const ratedItem = require("./ratedItem");

const employerReviewSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,

    writerName: {
        type: String,
        required: true,
        trim: true
    },
    companyName: {
        type: String,
        required: true,
        trim: true
    },
    service: {
        type: String,
        required: true,
        trim: true
    },
    startDate: {
        type: Date,
        required: [true, "Veuillez entrer une date de début de formation"]
    },
    endDate: {
        type: Date,
        required: [true, "Veuillez entrer une date de fin de formation"]
    },
    duration: {
        type: Number,
        required: true,
        min: [1, "Veuillez entrer un nombre d'heures valide"],
        max: [1000, "Veuillez entrer un nombre d'heures valide"],
    },
    mcq: {
        type: [mcqItem],
        required: true
    },
    needAnsweredComment: {
        type: String,
        trim: true,
    },
    practiceFrequencyComment: {
        type: String,
        trim: true,
    },
    practiceSuggestionsComment: {
        type: String,
        trim: true,
    },
    learnerComment: {
        type: String,
        trim: true,
    },
    rates: [ratedItem],
    avgRate: {
        type: Number,
        min: 0,
        max: 100,
    },
    status: {
        type: Number,
        enum: [0, 1, 2], // 0: pending, 1: validated, 2: refused
        default: 0,
    }
})

module.exports = mongoose.model("employerReview", employerReviewSchema);