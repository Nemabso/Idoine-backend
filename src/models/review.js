const mongoose = require("mongoose");
const validator = require("validator");

const reviewSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,

    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        validate(v) {
            if (!validator.isEmail(v)) throw new Error("Adresse e-mail invalide !")
        }
    },
    rate: {
        type: Number,
        required: true,
        min: [0, "La note doit être de 0 au moins."],
        max: [5, "La note doit être inférieure à 5."],
    },
})

module.exports = mongoose.model("review", reviewSchema);