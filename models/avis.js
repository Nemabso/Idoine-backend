const mongoose = require('mongoose');

const avisSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,

    nom: {
        type: String,
        trim: true
    },

    rate: {
        type: Number,
        required: true
    },
})

module.exports = mongoose.model("avis", avisSchema);