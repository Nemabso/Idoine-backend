const mongoose = require("mongoose");
const validator = require("validator");
const ratedItem = require("./ratedItem");

const fundingReviewSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,

    writerName: {
        type: String,
        required: true,
        trim: true
    },
    organization: {
        type: String,
        required: true,
        trim: true
    },
    position: {
        type: String,
        required: true,
        trim: true
    },
    telephone: {
        type: String,
        required: true,
        trim: true,
        validate(v) {
            if (!validator.isMobilePhone(v, 'fr-FR')) throw new Error("Numéro de téléphone invalide !")
        }
    },
    email: {
        type: String,
        required: true,
        trim: true,
        validate(v) {
            if (!validator.isEmail(v)) throw new Error("Adresse e-mail invalide !")
        }
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

fundingReviewSchema.set('timestamps', true);

module.exports = mongoose.model("FundingReview", fundingReviewSchema);