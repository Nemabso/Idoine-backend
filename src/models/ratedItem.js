const mongoose = require("mongoose");
const validator = require("validator");

const ratedItemSchema = new mongoose.Schema({
    label: {
        type: String,
        required: true,
        trim: true
    },
    rate: {
        type: Number,
        required: true,
        min: [0, "Les notes doivent être de 0 au moins."],
        max: [5, "Les notes doivent être inférieures ou égales à 5."],
    },
    comment: {
        type: String,
        trim: true
    }
})

module.exports = ratedItemSchema;