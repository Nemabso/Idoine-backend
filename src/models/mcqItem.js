const mongoose = require("mongoose");
const validator = require("validator");

const mcqItemSchema = new mongoose.Schema({
    label: {
        type: String,
        required: true,
        trim: true
    },
    answer: {
        type: String,
        trim: true,
        required: [true, "Veuillez sélectionner une réponse pour chaque question à choix multiples"]
    }
})

module.exports = mcqItemSchema;