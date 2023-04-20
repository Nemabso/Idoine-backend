const mongoose = require("mongoose");
const validator = require("validator");

const reviewSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,

    name: {
        type: String,
        required: true,
        trim: true
    },
    companyName: {
        type: String,
        required: true,
        trim: true
    },
    position: {
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
    comment: {
        type: String,
        required: true,
        trim: true,
        minLength: [10, "Votre commentaire doit faire 10 charactères au minimum."]
    },
    rate: {
        type: Number,
        required: true,
        min: [0, "La note doit être de 0 au moins."],
        max: [5, "La note doit être inférieure ou égale à 5."],
    },
    type: {
        type: String,
        required: true,
        enum: {
            values: ["employer", "learner", "poleEmploi", "validate"],
            message: "Mot de passe incorrect."
        }
        // validate is used as placeholder value to validate review against this schema through checkIfValid method
    }
})

module.exports = mongoose.model("review", reviewSchema);